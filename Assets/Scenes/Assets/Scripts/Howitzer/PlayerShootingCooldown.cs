using System.Collections;
using UnityEngine;
using UnityEngine.UI;

namespace Howitzer
{
    public class PlayerShootingCooldown : MonoBehaviour
    {
        [SerializeField] private Button shootButton;
        [SerializeField] private Text cooldownText;
        [SerializeField] private Image cooldownImage;
        [SerializeField] private float cooldownTime = 1f;

        private bool _isOnCooldown = false;

        public bool CanShoot => !_isOnCooldown;

        public void StartCooldown()
        {
            if (_isOnCooldown) return;
            StartCoroutine(CooldownRoutine());
        }

        private IEnumerator CooldownRoutine()
        {
            cooldownText.gameObject.SetActive(true);
            Debug.Log("Начал перезарядку");
            shootButton.interactable = false;
            _isOnCooldown = true;
            float timer = cooldownTime;

            cooldownText.enabled = true;
            cooldownImage.fillAmount = 0f;

            while (timer > 0)
            {
                timer -= Time.deltaTime;
                cooldownImage.fillAmount = 1f - (timer / cooldownTime);
                cooldownText.text = $"{timer:F1}";
                yield return null;
            }

            cooldownText.enabled = false;
            cooldownImage.fillAmount = 1f;
            shootButton.interactable = true;
            _isOnCooldown = false;
        }
    }
}