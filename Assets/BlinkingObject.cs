using System.Collections;
using UnityEngine;

public class BlinkingObject : MonoBehaviour
{
    public GameObject _tower;  // Объект, который тоже будет мигать
    public Color blinkColor = Color.red; // Цвет мигания
    public float blinkInterval = 0.5f; // Интервал мигания
    public float blinkDuration = 0.5f; // Длительность плавного мигания

    private Renderer objectRenderer;
    private Renderer towerRenderer;
    private Color originalColor;
    private Color originalTowerColor;
    private bool isBlinking = false;

    void Start()
    {
        // Получаем рендереры для объектов
        objectRenderer = GetComponent<Renderer>();
        if (objectRenderer != null)
        {
            originalColor = objectRenderer.material.color;
        }

        if (_tower != null)
        {
            towerRenderer = _tower.GetComponent<Renderer>();
            if (towerRenderer != null)
            {
                originalTowerColor = towerRenderer.material.color;
            }
        }
    }

    public void StartBlinking()
    {
        if (!isBlinking)
        {
            isBlinking = true;
            StartCoroutine(BlinkCoroutine());
        }
    }

    public void StopBlinking()
    {
        isBlinking = false;

        if (objectRenderer != null)
        {
            objectRenderer.material.color = originalColor;
        }

        if (towerRenderer != null)
        {
            towerRenderer.material.color = originalTowerColor;
        }
    }

    private IEnumerator BlinkCoroutine()
    {
        while (isBlinking)
        {
            // Плавное изменение цвета в сторону blinkColor для обоих объектов
            float lerpTime = 0f;
            while (lerpTime < 1f)
            {
                lerpTime += Time.deltaTime / blinkDuration;

                if (objectRenderer != null)
                {
                    objectRenderer.material.color = Color.Lerp(originalColor, blinkColor, lerpTime);
                }

                if (towerRenderer != null)
                {
                    towerRenderer.material.color = Color.Lerp(originalTowerColor, blinkColor, lerpTime);
                }

                yield return null;
            }

            // Пауза перед миганием
            yield return new WaitForSeconds(blinkInterval);

            // Плавное возвращение к исходному цвету для обоих объектов
            lerpTime = 0f;
            while (lerpTime < 1f)
            {
                lerpTime += Time.deltaTime / blinkDuration;

                if (objectRenderer != null)
                {
                    objectRenderer.material.color = Color.Lerp(blinkColor, originalColor, lerpTime);
                }

                if (towerRenderer != null)
                {
                    towerRenderer.material.color = Color.Lerp(blinkColor, originalTowerColor, lerpTime);
                }

                yield return null;
            }

            // Пауза перед следующим миганием
            yield return new WaitForSeconds(blinkInterval);
        }
    }
}
