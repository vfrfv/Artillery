using Fabric;
using Howitzer;
using UI;
using UnityEngine;
using UnityEngine.UI;

public class Shopping : MonoBehaviour
{
    [SerializeField] private Button _improveButton;
    [SerializeField] private Button _purchase;
    [SerializeField] private Button _unavailableWeaponButton;

    [SerializeField] private GameObject _shopping;
    [SerializeField] private PlayerShooting _shoppingPlayer;
    [SerializeField] private TanksFabric _tanksFabric;
    [SerializeField] private InteractiveArt _interactiveArt;
    [SerializeField] private Indicatorr _indicatorr;
    [SerializeField] private Cross _cross;
    [SerializeField] private Cross _cross2;
    [SerializeField] private PlayerUIController _playerUIController;

    private void OnEnable()
    {
        _improveButton.onClick.AddListener(ShowShopping);
        _purchase.onClick.AddListener(_interactiveArt.SwapArtPieces);
        _purchase.onClick.AddListener(OffShoping);
        _unavailableWeaponButton.onClick.AddListener(ShowInventory);
    }

    private void OnDisable()
    {
        _improveButton.onClick.RemoveListener(ShowShopping);
        _purchase.onClick.RemoveListener(_interactiveArt.SwapArtPieces);
        _unavailableWeaponButton.onClick.RemoveListener(ShowInventory);
    }

    public void ShowShopping()
    {
        _improveButton.gameObject.SetActive(false);
        _shopping.gameObject.SetActive(true);
    }

    private void OffShoping()
    {
        _shopping.gameObject.SetActive(false);
        _shoppingPlayer.Upgrade();
        _playerUIController.Upgraded();
        _cross.Upgraded();
        _cross2.Upgraded();
    }

    private void Update()
    {
        
    }

    private void ShowInventory()
    {
        _indicatorr.gameObject.SetActive(true);
    }
}
