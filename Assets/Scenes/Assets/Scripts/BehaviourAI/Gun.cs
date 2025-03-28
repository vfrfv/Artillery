using System.Collections;
using UnityEngine;

public class Gun : MonoBehaviour
{
    [SerializeField] private float rotationSpeed = 2f; // Скорость поворота
    [SerializeField] private ParticleSystem particleSystem; // Частицы пушки
    [SerializeField] private float minParticleInterval = 0.5f; // Минимальный интервал между воспроизведением частиц
    [SerializeField] private float maxParticleInterval = 2f; // Максимальный интервал между воспроизведением частиц

    private bool isRotating = false; // Флаг, чтобы проверить, вращается ли пушка
    private Coroutine coroutine;
    private Coroutine coroutine2;

    public void RotateToTarget(Vector3 targetPosition)
    {
        //if (!isRotating) // Проверяем, что пушка не вращается в данный момент
        //{

        if (coroutine != null)
        {
            StopCoroutine(coroutine);
        }

        coroutine = StartCoroutine(RotateTowardsTarget(targetPosition));
        //}
    }

    private IEnumerator RotateTowardsTarget(Vector3 targetPosition)
    {
        if (coroutine2 != null)
        {
            StopCoroutine(coroutine2);
        }

        //isRotating = true;
        coroutine2 = StartCoroutine(PlayParticlesRandomly());

        // Получаем направление от объекта к цели
        Vector3 directionToTarget = targetPosition - transform.position;

        // Вычисляем целевое вращение, не обнуляя y (учитываем вертикальное положение)
        Quaternion targetRotation = Quaternion.LookRotation(directionToTarget);

        // Плавно поворачиваем объект к цели
        while (Quaternion.Angle(transform.rotation, targetRotation) > 0.1f)
        {
            transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);
            yield return null;
        }

        transform.rotation = targetRotation;  // Устанавливаем точное направление

        // Запуск корутины для случайного воспроизведения частиц

        //isRotating = false;
    }

    private IEnumerator PlayParticlesRandomly()
    {
        while (true) // Пускаем частицы с случайной периодичностью
        {
            float interval = Random.Range(minParticleInterval, maxParticleInterval);
            yield return new WaitForSeconds(interval);

            particleSystem.Play(); // Воспроизводим частицы
        }
    }
}
