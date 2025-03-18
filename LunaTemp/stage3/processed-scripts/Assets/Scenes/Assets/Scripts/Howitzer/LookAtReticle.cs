using UnityEngine;

namespace Howitzer
{
    public class LookAtReticle : MonoBehaviour
    {
        [SerializeField] private RectTransform reticle;
        [SerializeField] private Camera mainCamera;
        [SerializeField] private float rotationSpeed = 180f;
        [SerializeField] private float maxPitchAngle = 45f;
        [SerializeField] private float minPitchAngle = -10f;

        private float _defaultPitch;
        private bool _isZoomed = false;

        private void Start()
        {
            // Сохраняем изначальный угол X в начале игры
            _defaultPitch = transform.eulerAngles.x;
        }

        private void OnEnable()
        {
            PlayerZoom.OnZoomChanged += HandleZoom;
        }

        private void OnDisable()
        {
            PlayerZoom.OnZoomChanged -= HandleZoom;
        }

        private void Update()
        {
            if (!_isZoomed)
            {
                RotateTowardsReticle();
            }
        }

        private void HandleZoom(bool isZoomed)
        {
            _isZoomed = isZoomed;

            if (_isZoomed)
            {
                // При входе в зум возвращаем пушку в изначальное положение по X
                Quaternion targetRotation = Quaternion.Euler(_defaultPitch, transform.eulerAngles.y, 0);
                StartCoroutine(SmoothReturnToInitial(targetRotation));
            }
        }

        private void RotateTowardsReticle()
        {
            if (reticle == null || mainCamera == null) return;

            Vector3 screenPos = reticle.position;
            Vector3 worldPos = mainCamera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, 50f));

            Vector3 direction = (worldPos - transform.position).normalized;
            if (direction.sqrMagnitude <= 0.01f) return;

            float targetYaw = Mathf.Atan2(direction.x, direction.z) * Mathf.Rad2Deg;
            float targetPitch = Mathf.Atan2(direction.y, direction.z) * Mathf.Rad2Deg * -1f;
            targetPitch = Mathf.Clamp(targetPitch, minPitchAngle, maxPitchAngle);

            Quaternion targetRotation = Quaternion.Euler(targetPitch, targetYaw, 0);
            transform.rotation = Quaternion.RotateTowards(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);
        }

        private System.Collections.IEnumerator SmoothReturnToInitial([Bridge.Ref] Quaternion targetRotation)
        {
            while (Quaternion.Angle(transform.rotation, targetRotation) > 0.1f)
            {
                transform.rotation = Quaternion.RotateTowards(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);
                yield return null;
            }

            transform.rotation = targetRotation;
        }
    }
}
