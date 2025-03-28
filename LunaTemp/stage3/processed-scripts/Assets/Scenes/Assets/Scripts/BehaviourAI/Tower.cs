using System.Collections;
using UnityEngine;

public class Tower : MonoBehaviour
{
    [SerializeField] private float rotationSpeed = 2f; // �������� ��������

    private Coroutine coroutine;

    public void RotateToTarget([Bridge.Ref] Vector3 targetPosition)
    {
        if (coroutine != null)
        {
            StopCoroutine(coroutine);
        }

        coroutine = StartCoroutine(RotateTowardsTarget(targetPosition));
    }

    private IEnumerator RotateTowardsTarget(Vector3 targetPosition)
    {
        // ��������� ����������� � ���� � ���������� �����������
        Vector3 directionToTarget = targetPosition - transform.position;
        Debug.DrawRay(transform.position, directionToTarget.normalized * 20, Color.magenta);
        directionToTarget.y = 0; // ���������� ������������ ������������, ����� ������� ������ �� ��� Y

        // ������� ����� �� ��� Y � ���������� �����������
        Quaternion targetRotation = Quaternion.LookRotation(directionToTarget.normalized, Vector3.up);
        // ������� ������� ����� � ����
        while (Quaternion.Angle(transform.rotation, targetRotation) > 0.1f)
        {
            transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);
            yield return null;
        }

        // ����� ���������� ��������
        transform.rotation = targetRotation;
    }
}
