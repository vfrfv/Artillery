using UnityEngine;
using UnityEngine.UI;

namespace UI
{
    public class PlayerUIController : MonoBehaviour
    {
        [SerializeField] private Button shootButton;
        [SerializeField] private Button zoomButton;
        [SerializeField] Cross _cross;
        [SerializeField] Cross _mark;
        [SerializeField] TutorialHand2 _tutorialHand2;

        public delegate void ShootAction();
        public static event ShootAction OnShoot;

        public delegate void ZoomAction();
        public static event ZoomAction OnZoom;

        private void Start()
        {
            shootButton.onClick.AddListener(() => OnShoot?.Invoke());
            zoomButton.onClick.AddListener(FinishTraining);
        }

        public void ShowCross()
        {
            _cross.gameObject.SetActive(true);
        }

        public void ShowMark()
        {
            _mark.gameObject.SetActive(true);
        }

        private void FinishTraining()
        {
            OnZoom?.Invoke();
            _tutorialHand2.FinishTraining();
        }
    }
}