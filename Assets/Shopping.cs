using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Shopping : MonoBehaviour
{
    [SerializeField] private Button _improveButton;
    [SerializeField] private Button _purchase;
    [SerializeField] private GameObject _shopping;

    [SerializeField] private InteractiveArt _interactiveArt;

    private void OnEnable()
    {
        _improveButton.onClick.AddListener(ShowShopping);
        _purchase.onClick.AddListener(_interactiveArt.SwapArtPieces);
        _purchase.onClick.AddListener(OffShoping);
    }

    private void OnDisable()
    {
        _improveButton.onClick.RemoveListener(ShowShopping);
        _purchase.onClick.RemoveListener(_interactiveArt.SwapArtPieces);
    }

    public void ShowShopping()
    {
        _improveButton.gameObject.SetActive(false);
        _shopping.gameObject.SetActive(true);
    }

    private void OffShoping()
    {
        _shopping.gameObject.SetActive(false);
    }
}
