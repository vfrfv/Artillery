using System.Collections;
using UnityEngine;

public class Cross : MonoBehaviour
{
    private void OnEnable()
    {
        StartCoroutine(ScaleAndDisable());
    }

    private IEnumerator ScaleAndDisable()
    {
        transform.localScale = Vector3.zero;
        Vector3 targetScale = Vector3.one * 1.2f;
        float duration = 0.3f;

        yield return ScaleOverTime(targetScale, duration);
        yield return ScaleOverTime(Vector3.one, 0.2f);

        // ∆дем 2 секунды перед отключением
        yield return new WaitForSeconds(2f);
        gameObject.SetActive(false);
    }

    private IEnumerator ScaleOverTime(Vector3 targetScale, float duration)
    {
        Vector3 startScale = transform.localScale;
        float elapsed = 0f;

        while (elapsed < duration)
        {
            transform.localScale = Vector3.Lerp(startScale, targetScale, elapsed / duration);
            elapsed += Time.deltaTime;
            yield return null;
        }

        transform.localScale = targetScale;
    }
}
