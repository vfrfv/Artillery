using UnityEngine;
using System.Collections;
using System;

public class InteractiveArt : MonoBehaviour
{
    [SerializeField] private GameObject _shopping;
    [SerializeField] private TitnSprite _arm;

    [SerializeField] private GameObject _arta1;
    [SerializeField] private GameObject _arta2;

    [SerializeField] private ParticleSystem _particleSystem;

    [SerializeField] private Camera secondCamera;
    [SerializeField] private float transitionSpeed = 0.5f;
    [SerializeField] private AudioSource _audioSource;

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
        _particleSystem.Play();
        _audioSource.Play();

        _arta1.gameObject.SetActive(false);
        _arta2.gameObject.SetActive(true);

        yield return new WaitForSeconds(3);
        Changed?.Invoke();
    }
}
