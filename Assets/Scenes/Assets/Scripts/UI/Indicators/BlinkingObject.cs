using System.Collections;
using UnityEngine;

public class BlinkingObject : MonoBehaviour
{
    [SerializeField] private GameObject _tower;
    [SerializeField] private Color blinkColor = Color.red;
    [SerializeField] private float blinkInterval = 0.5f;
    [SerializeField] private float blinkDuration = 0.5f;

    private Renderer objectRenderer;
    private Renderer towerRenderer;
    private Color originalColor;
    private Color originalTowerColor;
    private bool isBlinking = false;

    void Start()
    {
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
            float lerpTime = 0f;

            while (lerpTime < 1f)
            {
                lerpTime += Time.deltaTime / blinkDuration;

                if (objectRenderer != null)
                    objectRenderer.material.color = Color.Lerp(originalColor, blinkColor, lerpTime);

                if (towerRenderer != null)
                    towerRenderer.material.color = Color.Lerp(originalTowerColor, blinkColor, lerpTime);

                yield return null;
            }

            yield return new WaitForSeconds(blinkInterval);

            lerpTime = 0f;

            while (lerpTime < 1f)
            {
                lerpTime += Time.deltaTime / blinkDuration;

                if (objectRenderer != null)
                    objectRenderer.material.color = Color.Lerp(blinkColor, originalColor, lerpTime);

                if (towerRenderer != null)
                    towerRenderer.material.color = Color.Lerp(blinkColor, originalTowerColor, lerpTime);

                yield return null;
            }

            yield return new WaitForSeconds(blinkInterval);
        }
    }
}
