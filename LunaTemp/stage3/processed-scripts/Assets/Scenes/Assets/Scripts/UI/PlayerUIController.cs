using UnityEngine;
using UnityEngine.UI;

namespace UI
{
    public class PlayerUIController : MonoBehaviour
    {
        [SerializeField] private Button shootButton;
        [SerializeField] private Button zoomButton;

        public delegate void ShootAction();
        public static event ShootAction OnShoot;

        public delegate void ZoomAction();
        public static event ZoomAction OnZoom;

        private void Start()
        {
            shootButton.onClick.AddListener(() => OnShoot?.Invoke());
            zoomButton.onClick.AddListener(() => OnZoom?.Invoke());
        }
    }
}