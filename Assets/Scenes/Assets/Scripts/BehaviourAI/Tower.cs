using System.Collections;
using UnityEngine;

public class Tower : MonoBehaviour
{
    [SerializeField] private float rotationSpeed = 2f; // Скорость поворота

    private Coroutine coroutine;

    public void RotateToTarget(Vector3 targetPosition)
    {
        if (coroutine != null)
        {
            StopCoroutine(coroutine);
        }

        coroutine = StartCoroutine(RotateTowardsTarget(targetPosition));
    }

    private IEnumerator RotateTowardsTarget(Vector3 targetPosition)
    {
        // Вычисляем направление к цели в глобальных координатах
        Vector3 directionToTarget = targetPosition - transform.position;
        Debug.DrawRay(transform.position, directionToTarget.normalized * 20, Color.magenta);
        directionToTarget.y = 0; // Игнорируем вертикальную составляющую, чтобы вращать только по оси Y

        // Вращаем башню по оси Y в глобальных координатах
        Quaternion targetRotation = Quaternion.LookRotation(directionToTarget.normalized, Vector3.up);
        // Плавный поворот башни к цели
        while (Quaternion.Angle(transform.rotation, targetRotation) > 0.1f)
        {
            transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);
            yield return null;
        }

        // После завершения вращения
        transform.rotation = targetRotation;
    }
}
