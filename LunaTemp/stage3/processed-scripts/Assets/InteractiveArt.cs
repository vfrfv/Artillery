using UnityEngine;
using System.Collections;
using System;

public class InteractiveArt : MonoBehaviour
{
    [SerializeField] private GameObject _shopping;
    [SerializeField] private TitnSprite _arm;

    [SerializeField] private GameObject _arta1;
    [SerializeField] private GameObject _arta2;

    public Camera secondCamera;
    public float transitionSpeed = 0.5f;

    public event Action Changed;

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Ray ray = secondCamera.ScreenPointToRay(Input.mousePosition);
            RaycastHit hit;

            if (Physics.Raycast(ray, out hit))
            {
                if (hit.collider != null)
                {
                    _shopping.SetActive(true);
                    _arm.gameObject.SetActive(false);
                }
            }
        }
    }

    public void SwapArtPieces()
    {
        StartCoroutine(AnimateSwap());
    }

    private IEnumerator AnimateSwap()
    {
        Vector3 arta1StartPos = _arta1.transform.position;
        Vector3 arta1TargetPos = arta1StartPos + Vector3.up * 13f;
        Vector3 arta2StartPos = arta1TargetPos;
        Vector3 arta2TargetPos = arta1StartPos;

        float elapsedTime = 0f;
        while (elapsedTime < 2f)
        {
            _arta1.transform.position = Vector3.Lerp(arta1StartPos, arta1TargetPos, elapsedTime);
            elapsedTime += Time.deltaTime * transitionSpeed;
            yield return null;
        }

        _arta1.transform.position = arta1TargetPos;
        _arta1.SetActive(false);
        _arta2.transform.position = arta2StartPos;
        _arta2.SetActive(true);

        elapsedTime = 0f;
        while (elapsedTime < 2f)
        {
            _arta2.transform.position = Vector3.Lerp(arta2StartPos, arta2TargetPos, elapsedTime);
            elapsedTime += Time.deltaTime * transitionSpeed;
            yield return null;
        }

        _arta2.transform.position = arta2TargetPos;

        yield return new WaitForSeconds(1);
        Changed?.Invoke();
    }
}
