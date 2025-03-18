using DG.Tweening;
using UI;
using UnityEngine;

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

        private bool _isZoomed = false;
        private Quaternion _lastCameraRotation;
        private Quaternion _zoomStartRotation;

        public static event System.Action<bool> OnZoomChanged;

        private void OnEnable()
        {
            PlayerUIController.OnZoom += ToggleZoom;
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

        private void ToggleZoom()
        {
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
            }
            else
            {
                Quaternion zoomDeltaRotation = mainCamera.transform.rotation * Quaternion.Inverse(_zoomStartRotation);
                mainCamera.transform.rotation = zoomDeltaRotation * _lastCameraRotation;
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
