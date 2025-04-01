using UnityEngine;
using UnityEngine.UI;

namespace UI
{
    public class PlayerUIController : MonoBehaviour
    {
        [SerializeField] private Button shootButton;
        [SerializeField] private Button zoomButton;
        [SerializeField] Cross _cross;
        [SerializeField] TutorialHand2 _tutorialHand2;

        private bool _isUpgraded = false;

        public delegate void ShootAction();
        public static event ShootAction OnShoot;

        public delegate void ZoomAction();
        public static event ZoomAction OnZoom;

        private void Start()
        {
            shootButton.onClick.AddListener(() => OnShoot?.Invoke());
            zoomButton.onClick.AddListener(FinishTraining);
        }

        public void Upgraded()
        {
            _isUpgraded = true;
        }

        public void ShowCross()
        {
            if (_isUpgraded == false)
            {
                _cross.gameObject.SetActive(true);
            }
        }

        private void Update()
        {
            Debug.Log("Крестик" + _isUpgraded);
        }

        private void FinishTraining()
        {
            OnZoom?.Invoke();
            _tutorialHand2.FinishTraining();
        }
    }
}