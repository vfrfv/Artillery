using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Shopping : MonoBehaviour
{
    [SerializeField] private Button _improveButton;
    [SerializeField] private GameObject _shopping;

    private void OnEnable()
    {
        _improveButton.onClick.AddListener(ShowShopping);
    }

    private void OnDisable()
    {
        _improveButton.onClick.RemoveListener(ShowShopping);
    }

    public void ShowShopping()
    {
        _improveButton.gameObject.SetActive(false);
        _shopping.gameObject.SetActive(true);
    }
}
