using UnityEngine;
using DG.Tweening;

public class TimeController : MonoBehaviour
{
    [SerializeField] private float slowMotionScale = 0.1f; // �� ������� ��� ����������� �����
    [SerializeField] private float slowMotionDuration = 1.5f; // ����� �� �������������� ��������
    [SerializeField] private float restoreSpeedDuration = 0.5f; // ����� �� ������ ��������������

    public void StartSlowMotion()
    {
        DOTween.Kill("TimeScale"); // ������� ������ ��������, ���� ��� ����

        Time.timeScale = slowMotionScale;
        Time.fixedDeltaTime = 0.02f * Time.timeScale; // ������������ FixedUpdate

        DOTween.To(() => Time.timeScale, x => Time.timeScale = x, 1f, slowMotionDuration)
               .SetEase(Ease.OutQuad)
               .SetId("TimeScale") // ���������� ID ��� ������
               .OnUpdate(() => Time.fixedDeltaTime = 0.02f * Time.timeScale);
    }

    public void RestoreNormalTime()
    {
        DOTween.Kill("TimeScale"); // ������������� ������ ��������, ���� ����

        DOTween.To(() => Time.timeScale, x => Time.timeScale = x, 1f, restoreSpeedDuration)
               .SetEase(Ease.OutQuad)
               .SetId("TimeScale") // ID ��� ����������
               .OnUpdate(() => Time.fixedDeltaTime = 0.02f * Time.timeScale);
    }
}
