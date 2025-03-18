using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BlinkingManager : MonoBehaviour
{
    public List<BlinkingObject> blinkingObjects; // Список объектов для мигания
    public float blinkInterval = 0.5f; // Интервал мигания
    public float blinkDuration = 0.5f; // Длительность плавного мигания

    private void Start()
    {
        // Запускаем мигание для всех объектов синхронно
        StartCoroutine(StartSyncBlinking());
    }

    private IEnumerator StartSyncBlinking()
    {
        // Делаем мигание синхронным
        foreach (var blinkingObject in blinkingObjects)
        {
            blinkingObject.StartBlinking();
        }

        // Пауза между циклами мигания
        while (true)
        {
            yield return new WaitForSeconds(blinkInterval * 2 + blinkDuration); // ожидание пока все объекты закончат один цикл мигания
        }
    }
}
