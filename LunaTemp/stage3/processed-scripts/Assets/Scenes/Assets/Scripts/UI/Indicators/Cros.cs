using System.Collections;
using UnityEngine;

public class Cross : MonoBehaviour
{
    private bool _isUpgraded = false;

    private void OnEnable()
    {
        if (_isUpgraded == false)
            StartCoroutine(ScaleAndDisable());
    }

    public void Upgraded()
    {
        _isUpgraded = true;
    }

    private void Update()
    {
        Debug.Log("�������" +  _isUpgraded);
    }

    private IEnumerator ScaleAndDisable()
    {
        transform.localScale = Vector3.zero;
        Vector3 targetScale = Vector3.one * 1.2f;
        float duration = 0.3f;

        yield return ScaleOverTime(targetScale, duration);
        yield return ScaleOverTime(Vector3.one, 0.2f);

        yield return new WaitForSeconds(0.2f);
        gameObject.SetActive(false);
    }

    private IEnumerator ScaleOverTime([Bridge.Ref] Vector3 targetScale, float duration)
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
