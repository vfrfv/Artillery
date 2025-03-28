using DG.Tweening;
using UI;
using UnityEngine;
using System.Collections.Generic;
using Fabric;

namespace Howitzer
{
    public class PlayerZoom : MonoBehaviour
    {
        [SerializeField] private RectTransform crosshair;
        [SerializeField] private Camera mainCamera;
        [SerializeField] private GameObject zoomImage;
        [SerializeField] private GameObject[] objectsToDisable;
        [SerializeField] private float zoomFOV = 30f;
        [SerializeField] private float normalFOV = 60f;
        [SerializeField] private float zoomSpeed = 5f;
        [SerializeField] private Joystick joystick;
        [SerializeField] private float rotationSpeed = 2f;
        [SerializeField] private Pumping pumping;
        [SerializeField] private GameObject _arm;
        [SerializeField] private TanksFabric _tacticsFabric;
        [SerializeField] private TitnSprite _titnSprite;

        private bool _isZoomed = false;
        private bool _isStore = false;
        private bool _isUpgraded = false;
        private Quaternion _lastCameraRotation;
        private Quaternion _zoomStartRotation;
        private List<TitnSprite> _sprites = new List<TitnSprite>();

        public static event System.Action<bool> OnZoomChanged;

        private void OnEnable()
        {
            PlayerUIController.OnZoom += ToggleZoom;

            if (_isZoomed && _isUpgraded) // Если объект уже в зуме, создаем спрайты
            {
                CreateTitnSprites();
            }
        }

        private void OnDisable()
        {
            PlayerUIController.OnZoom -= ToggleZoom;
        }

        private void Update()
        {
            if (_isZoomed)
            {
                RotateCameraWithJoystick();
            }
        }

        public void OpenStore()
        {
            pumping.gameObject.SetActive(true);
        }

        public void Upgrade()
        {
            _isUpgraded = true;
        }

        public void ActivateTransitionToStore()
        {
            _isStore = true;
            _arm.gameObject.SetActive(true);
        }

        public bool CheckZoom() { return _isZoomed; }
        public void ChangeZoomForAirStrike() { ToggleZoom(); }

        public void EnableZoomUI()
        {
            zoomImage.SetActive(true);
        }

        public void DisableZoomUI()
        {
            zoomImage.SetActive(false);
        }

        public void ToggleZoom()
        {
            //if (_isStore)
            //{
            //    OpenStore();
            //    pumping.SetNormalPositionArte();
            //    _isStore = false;
            //    return;
            //}

            _isZoomed = !_isZoomed;
            OnZoomChanged?.Invoke(_isZoomed);

            zoomImage.SetActive(_isZoomed);
            StopAllCoroutines();
            StartCoroutine(ChangeFOV(_isZoomed ? zoomFOV : normalFOV));

            foreach (var obj in objectsToDisable)
            {
                obj.SetActive(!_isZoomed);
            }

            if (_isZoomed)
            {
                _lastCameraRotation = mainCamera.transform.rotation;
                Vector3 targetPoint = GetWorldPointFromCrosshair();
                mainCamera.transform.LookAt(targetPoint);
                _zoomStartRotation = mainCamera.transform.rotation;

                if (_isUpgraded)
                {
                    foreach (var tank in _tacticsFabric.Tanks)
                    {
                        TitnSprite titnSprite = Instantiate(_titnSprite);
                        titnSprite.Initialize(tank);
                        _sprites.Add(titnSprite);
                    }
                }
            }
            else
            {
                Quaternion zoomDeltaRotation = mainCamera.transform.rotation * Quaternion.Inverse(_zoomStartRotation);
                mainCamera.transform.rotation = zoomDeltaRotation * _lastCameraRotation;

                foreach (var sprite in _sprites)
                {
                    sprite.gameObject.SetActive(false);
                }
            }

            if (_isStore)
            {
                OpenStore();
                pumping.SetNormalPositionArte();
            }
        }

        private void CreateTitnSprites()
        {
            foreach (var tank in _tacticsFabric.Tanks)
            {
                TitnSprite titnSprite = Instantiate(_titnSprite);
                titnSprite.Initialize(tank);
                _sprites.Add(titnSprite);
            }
        }

        private Vector3 GetWorldPointFromCrosshair()
        {
            Vector2 screenPoint = RectTransformUtility.WorldToScreenPoint(null, crosshair.position);
            Ray ray = mainCamera.ScreenPointToRay(screenPoint);
            if (Physics.Raycast(ray, out RaycastHit hit))
            {
                return hit.point;
            }
            return ray.origin + ray.direction * 100f;
        }

        private System.Collections.IEnumerator ChangeFOV(float targetFOV)
        {
            while (Mathf.Abs(mainCamera.fieldOfView - targetFOV) > 0.1f)
            {
                mainCamera.fieldOfView = Mathf.Lerp(mainCamera.fieldOfView, targetFOV, zoomSpeed * Time.deltaTime);
                yield return null;
            }
            mainCamera.fieldOfView = targetFOV;
        }

        private void RotateCameraWithJoystick()
        {
            float joystickX = joystick.Horizontal;
            float joystickY = joystick.Vertical;
            float xSensitivity = 0.3f;
            float ySensitivity = 0.3f;
            float duration = 0.2f;
            Vector3 currentRotation = mainCamera.transform.eulerAngles;
            float currentX = (currentRotation.x > 180) ? currentRotation.x - 360 : currentRotation.x;
            float currentY = (currentRotation.y > 180) ? currentRotation.y - 360 : currentRotation.y;
            float targetRotationX = Mathf.Clamp(currentX - joystickY * xSensitivity, 8f, 30f);
            float targetRotationY = Mathf.Clamp(currentY + joystickX * ySensitivity, -90f, -30f);
            mainCamera.transform.DORotate(new Vector3(targetRotationX, targetRotationY, 0), duration)
                .SetEase(Ease.OutQuad);
        }
    }
}
