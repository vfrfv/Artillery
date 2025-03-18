using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class TutorialHand : MonoBehaviour
{
    [Header("Параметры движения")]
    [SerializeField] private RectTransform handImage; 
    [SerializeField] private float moveDistance = 100f; 
    [SerializeField] private float moveDuration = 1f;

    private bool _isTouched = false;

    private void Start()
    {
        StartHandMovement();
    }

    private void StartHandMovement()
    {
        handImage.DOAnchorPosX(handImage.anchoredPosition.x + moveDistance, moveDuration)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Yoyo);
    }

    private void Update()
    {
        if (_isTouched) return;

        if (Input.GetMouseButtonDown(0)) // Проверка на любое касание экрана
        {
            _isTouched = true;
            HideHand();
        }
    }

    private void HideHand()
    {
        handImage.DOKill(); // Остановить движение руки
        handImage.DOScale(Vector3.zero, 0.3f).SetEase(Ease.InBack).OnComplete(() =>
        {
            handImage.gameObject.SetActive(false); // Полностью отключить объект
        });
    }
}