using UnityEngine;

namespace Howitzer
{
    public class LookAtCrosshair : MonoBehaviour
    {
        [SerializeField] private Joystick joystick;
        [SerializeField] private float minYAngle = -79f;
        [SerializeField] private float maxYAngle = -60f;
        
        [SerializeField] private float rotationSpeed = 5f;

        private float _initialRotationY;

        private void Start()
        {
            _initialRotationY = transform.eulerAngles.y; 
        }

        private void Update()
        {
            LookAtJoystickMovement();
        }

        private void LookAtJoystickMovement()
        {
            if (joystick.handle.anchoredPosition != Vector2.zero)
            {
                float joystickY = joystick.Horizontal;
                
                float currentY = transform.eulerAngles.y;
                if (currentY > 180) currentY -= 360;
                
                float targetAngle = currentY + joystickY * rotationSpeed;
                
                targetAngle = Mathf.Clamp(targetAngle, minYAngle, maxYAngle);
                
                Quaternion targetRotation = Quaternion.Euler(transform.rotation.eulerAngles.x, targetAngle, 0);
                transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, 5f * Time.deltaTime);
            }
        }


    }
}