using UnityEngine;

namespace UI
{
    public class CrosshairMovement : MonoBehaviour
    {
        [SerializeField] private Joystick joystick;
        [SerializeField] private RectTransform crosshair; 
        [SerializeField] private float moveSpeed = 300f; 
        [SerializeField] private RectTransform canvasRect; 

        private Vector2 crosshairPosition; 

        private void Start()
        {
            if (joystick == null || crosshair == null || canvasRect == null)
            {
                Debug.LogError("Пожалуйста, укажите все необходимые ссылки в инспекторе!");
                enabled = false;
            }

           
            crosshairPosition = crosshair.anchoredPosition;
        }

        private void Update()
        {
            Vector2 direction = joystick.Direction;
            
            if (direction.magnitude > 0.1f)
            {
                crosshairPosition += direction * moveSpeed * Time.deltaTime;
                
                crosshairPosition = ClampToCanvas(crosshairPosition);
            }
            
            crosshair.anchoredPosition = crosshairPosition;
        }
        private Vector2 ClampToCanvas(Vector2 position)
        {
            Vector2 min = -canvasRect.sizeDelta / 2; 
            Vector2 max = canvasRect.sizeDelta / 2;  

            position.x = Mathf.Clamp(position.x, min.x, max.x);
            position.y = Mathf.Clamp(position.y, min.y, max.y);

            return position;
        }
    }
}