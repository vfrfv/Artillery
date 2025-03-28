using System.Collections;
using UnityEngine;

public class Gun : MonoBehaviour
{
    [SerializeField] private float rotationSpeed = 2f; // �������� ��������
    [SerializeField] private ParticleSystem particleSystem; // ������� �����
    [SerializeField] private float minParticleInterval = 0.5f; // ����������� �������� ����� ���������������� ������
    [SerializeField] private float maxParticleInterval = 2f; // ������������ �������� ����� ���������������� ������

    private bool isRotating = false; // ����, ����� ���������, ��������� �� �����
    private Coroutine coroutine;
    private Coroutine coroutine2;

    public void RotateToTarget([Bridge.Ref] Vector3 targetPosition)
    {
        //if (!isRotating) // ���������, ��� ����� �� ��������� � ������ ������
        //{

        if (coroutine != null)
        {
            StopCoroutine(coroutine);
        }

        coroutine = StartCoroutine(RotateTowardsTarget(targetPosition));
        //}
    }

    private IEnumerator RotateTowardsTarget([Bridge.Ref] Vector3 targetPosition)
    {
        if (coroutine2 != null)
        {
            StopCoroutine(coroutine2);
        }

        //isRotating = true;
        coroutine2 = StartCoroutine(PlayParticlesRandomly());

        // �������� ����������� �� ������� � ����
        Vector3 directionToTarget = targetPosition - transform.position;

        // ��������� ������� ��������, �� ������� y (��������� ������������ ���������)
        Quaternion targetRotation = Quaternion.LookRotation(directionToTarget);

        // ������ ������������ ������ � ����
        while (Quaternion.Angle(transform.rotation, targetRotation) > 0.1f)
        {
            transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);
            yield return null;
        }

        transform.rotation = targetRotation;  // ������������� ������ �����������

        // ������ �������� ��� ���������� ��������������� ������

        //isRotating = false;
    }

    private IEnumerator PlayParticlesRandomly()
    {
        while (true) // ������� ������� � ��������� ��������������
        {
            float interval = Random.Range(minParticleInterval, maxParticleInterval);
            yield return new WaitForSeconds(interval);

            particleSystem.Play(); // ������������� �������
        }
    }
}
