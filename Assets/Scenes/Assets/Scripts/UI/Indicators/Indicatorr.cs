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
    }

    private void OnEnable()
    {
        coroutine = StartCoroutine(FadeOut());
    }

    private void OnDeselect()
    {
        StopCoroutine(coroutine);
    }

    IEnumerator FadeOut()
    {
        float elapsedTime = 0f;
        Color startColor = image.color;

        // ������� ������������
        while (elapsedTime < fadeDuration)
        {
            elapsedTime += Time.deltaTime;
            float alpha = Mathf.Lerp(1f, 0f, elapsedTime / fadeDuration);  // ������� ��������� ����� �� 1 �� 0
            image.color = new Color(startColor.r, startColor.g, startColor.b, alpha);  // ��������� ����� ���� � ��������� ������

            yield return null;
        }

        // ��������, ��� ����� ����� ����� 0 � �����
        image.color = new Color(startColor.r, startColor.g, startColor.b, 0f);
        gameObject.SetActive(false);
    }
}
