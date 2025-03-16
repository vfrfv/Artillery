using UnityEngine;
using DG.Tweening;

public class TimeController : MonoBehaviour
{
    [SerializeField] private float slowMotionScale = 0.1f; // Во сколько раз замедляется время
    [SerializeField] private float slowMotionDuration = 1.5f; // Время до восстановления скорости
    [SerializeField] private float restoreSpeedDuration = 0.5f; // Время на полное восстановление

    public void StartSlowMotion()
    {
        DOTween.Kill("TimeScale"); // Убиваем старую анимацию, если она есть

        Time.timeScale = slowMotionScale;
        Time.fixedDeltaTime = 0.02f * Time.timeScale; // Корректируем FixedUpdate

        DOTween.To(() => Time.timeScale, x => Time.timeScale = x, 1f, slowMotionDuration)
               .SetEase(Ease.OutQuad)
               .SetId("TimeScale") // Уникальный ID для отмены
               .OnUpdate(() => Time.fixedDeltaTime = 0.02f * Time.timeScale);
    }

    public void RestoreNormalTime()
    {
        DOTween.Kill("TimeScale"); // Останавливаем старую анимацию, если есть

        DOTween.To(() => Time.timeScale, x => Time.timeScale = x, 1f, restoreSpeedDuration)
               .SetEase(Ease.OutQuad)
               .SetId("TimeScale") // ID для управления
               .OnUpdate(() => Time.fixedDeltaTime = 0.02f * Time.timeScale);
    }
}
