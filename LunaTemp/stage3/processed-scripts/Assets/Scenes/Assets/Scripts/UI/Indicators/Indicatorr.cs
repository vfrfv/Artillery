using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class Indicatorr : MonoBehaviour
{
    private Image image;
    private Coroutine coroutine;

    public float fadeDuration = 2f;

    void Awake()
    {
        image = GetComponent<Image>();

        if (coroutine != null)
        {
            StopCoroutine(coroutine);
        }

        coroutine = StartCoroutine(FadeOut());
    }

    private void Start()
    {
        if (coroutine != null)
        {
            StopCoroutine(coroutine);
        }

        coroutine = StartCoroutine(FadeOut());
    }

    private void OnEnable()
    {
        if (coroutine != null)
        {
            StopCoroutine(coroutine);
        }

        coroutine = StartCoroutine(FadeOut());
    }

    private void OnDisable()
    {
        if (coroutine != null)
        {
            StopCoroutine(coroutine);
            coroutine = null;
        }
    }

    IEnumerator FadeOut()
    {
        float elapsedTime = 0f;
        Color startColor = image.color;

        // Плавное исчезновение
        while (elapsedTime < fadeDuration)
        {
            elapsedTime += Time.deltaTime;
            float alpha = Mathf.Lerp(1f, 0f, elapsedTime / fadeDuration);  // Линейно уменьшаем альфу от 1 до 0
            image.color = new Color(startColor.r, startColor.g, startColor.b, alpha);  // Применяем новый цвет с изменённой альфой

            yield return null;
        }

        // Убедимся, что альфа точно равна 0 в конце
        image.color = new Color(startColor.r, startColor.g, startColor.b, 0f);
        gameObject.SetActive(false);
    }
}
