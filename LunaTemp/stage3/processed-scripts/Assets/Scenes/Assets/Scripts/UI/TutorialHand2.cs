using UnityEngine;
using UnityEngine.UI;

public class TutorialHand2 : MonoBehaviour
{
    [SerializeField] private Button _shootButton;

    public float scaleSpeed = 1f;
    public float scaleAmount = 0.2f;

    private Vector3 initialScale;

    void Start()
    {
        initialScale = transform.localScale;
    }

    void Update()
    {
        float scaleFactor = 1 + Mathf.PingPong(Time.time * scaleSpeed, scaleAmount);
        transform.localScale = initialScale * scaleFactor;
    }

    // ����������, ���� ���� ��������� �� �������
    public void FinishTraining()
    {
        gameObject.SetActive(false); // �������� ����
        _shootButton.gameObject.SetActive(true); // ���������� ������
    }
}
