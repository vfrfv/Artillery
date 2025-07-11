using Fabric;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Pumping : MonoBehaviour
{
    [SerializeField] private Camera m_Camera;
    [SerializeField] private Camera _pumpingCamera;
    [SerializeField] private GameObject _UI;
    [SerializeField] private GameObject _arta1;
    [SerializeField] private HandAnimation _arm;
    [SerializeField] private Shopping _shopping;
    [SerializeField] private InteractiveArt _interactiveArt;
    [SerializeField] private TanksFabric _tacticsFabric;
    [SerializeField] private Button _button;
    [SerializeField] private TitnSprite _titnSprite;
    [SerializeField] private GameObject _arm2;

    private List<TitnSprite> _sprites;

    private void Awake()
    {
        _sprites = new List<TitnSprite>();
        SetNormalPositionArte();
    }

    private void OnEnable()
    {
        SetNormalPositionArte();
        _shopping.gameObject.SetActive(false);
        _pumpingCamera.gameObject.SetActive(false);
        _interactiveArt.Changed += TurnPlayerCamera;
        StartCoroutine(StartPumping());
        SetNormalPositionArte();
    }

    private void OnDisable()
    {
        _interactiveArt.Changed -= TurnPlayerCamera;
    }

    public void RemoveSprites()
    {
        foreach (var item in _sprites)
        {
            item.gameObject.SetActive(false);
        }
    }

    private IEnumerator StartPumping()
    {

        yield return new WaitForSeconds(0.3f);

        SetNormalPositionArte();
        TurnPumpingCamera();
        _UI.SetActive(false);
        _arm.gameObject.SetActive(true);
        SetNormalPositionArte();
    }

    private void TurnPumpingCamera()
    {
        m_Camera.gameObject.SetActive(false);
        _pumpingCamera.gameObject.SetActive(true);
        _button.gameObject.SetActive(true);
    }

    private void TurnPlayerCamera()
    {
        m_Camera.gameObject.SetActive(true);
        _pumpingCamera.gameObject.SetActive(false);
        _UI.SetActive(true);
        _shopping.gameObject.SetActive(false);
        _arm2.gameObject.SetActive(false);

        //foreach (var tank in _tacticsFabric.Tanks)
        //{
        //    TitnSprite titnSprite = Instantiate(_titnSprite);
        //    titnSprite.Initialize(tank);
        //    _sprites.Add(titnSprite);
        //}
    }

    public void SetNormalPositionArte()
    {
        Debug.Log("�������");

        _arta1.transform.localPosition = new Vector3(0.9f, 17.5f, -4f);
        _arta1.transform.localRotation = Quaternion.Euler(-1.1f, -1.7f, -8f);
    }
}
