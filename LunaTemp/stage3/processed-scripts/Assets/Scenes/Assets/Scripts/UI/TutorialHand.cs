using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class TutorialHand : MonoBehaviour
{
    [Header("Параметры движения")]
    [SerializeField] private RectTransform handImage; 
    [SerializeField] private float moveDistance = 100f; 
    [SerializeField] private float moveDuration = 1f;
    [SerializeField] private TutorialHand2 _tutorialHand2;
    [SerializeField] private Button _shootButton;
    [SerializeField] private Button _zoomButton;

    private bool _isTouched = false;

    private void Start()
    {
        _tutorialHand2.gameObject.SetActive(false);
        _shootButton.gameObject.SetActive(false);
        _zoomButton.gameObject.SetActive(false);
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
        _tutorialHand2.gameObject.SetActive(true);
        _zoomButton.gameObject.SetActive(true);

        handImage.DOKill(); // Остановить движение руки
        handImage.DOScale(Vector3.zero, 0.3f).SetEase(Ease.InBack).OnComplete(() =>
        {
            handImage.gameObject.SetActive(false); // Полностью отключить объект
        });
    }
}