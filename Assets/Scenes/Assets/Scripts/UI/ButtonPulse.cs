using DG.Tweening;
using UnityEngine;

namespace UI
{
    public class ButtonPulse : MonoBehaviour
    {
        [SerializeField] private float scaleMultiplier = 1.2f; // Увеличение размера кнопки
        [SerializeField] private float duration = 3f; // Длительность пульсации

        private void OnEnable()
        {
            // Пульсация кнопки
            transform.DOScale(scaleMultiplier, duration)
                .SetLoops(-1, LoopType.Yoyo) // Бесконечный цикл Yoyo (туда-сюда)
                .SetEase(Ease.InOutSine); // Плавная анимация
        }

        private void OnDisable()
        {
            transform.DOKill(); // Остановить анимацию, если объект отключён
        }
    }
}