using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BlinkingManager : MonoBehaviour
{
    public List<BlinkingObject> blinkingObjects; // ������ �������� ��� �������
    public float blinkInterval = 0.5f; // �������� �������
    public float blinkDuration = 0.5f; // ������������ �������� �������

    private void Start()
    {
        // ��������� ������� ��� ���� �������� ���������
        StartCoroutine(StartSyncBlinking());
    }

    private IEnumerator StartSyncBlinking()
    {
        // ������ ������� ����������
        foreach (var blinkingObject in blinkingObjects)
        {
            blinkingObject.StartBlinking();
        }

        // ����� ����� ������� �������
        while (true)
        {
            yield return new WaitForSeconds(blinkInterval * 2 + blinkDuration); // �������� ���� ��� ������� �������� ���� ���� �������
        }
    }
}
