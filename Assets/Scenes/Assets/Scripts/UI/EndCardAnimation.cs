using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

namespace UI
{
    public class EndCardAnimation : MonoBehaviour
    {
        [SerializeField] private CanvasGroup background; // Затемнённый фон
        [SerializeField] private Transform title;
        [SerializeField] private Transform logoAndButton; // Логотип и кнопка
        [SerializeField] private Text titleText;
        [SerializeField] private float fadeDuration = 0.5f; // Длительность затемнения
        [SerializeField] private float scaleDuration = 0.5f; // Длительность увеличения
        [SerializeField] private Ease scaleEase = Ease.OutBack; // Эффект для увеличения

        private void OnEnable()
        {
            PlayAnimation();
            ResizeText();
        }

        private void PlayAnimation()
        {
           
            background.alpha = 0;
            background.DOFade(1, fadeDuration).SetEase(Ease.Linear);
            
            logoAndButton.localScale = Vector3.zero;
            logoAndButton.DOScale(Vector3.one, scaleDuration).SetEase(scaleEase);
            
        }

        private void OnDisable()
        {
            background.DOKill(); 
            logoAndButton.DOKill(); 
        }

        private void ResizeText()
        {
            if (Screen.width > Screen.height)
            {
                title.GetComponent<RectTransform>().position = new Vector2(
                    title.GetComponent<RectTransform>().position.x,
                    350f
                );
            }

        }
    }
}