using BehaviourAI;
using Fabric;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

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

    [SerializeField] private TitnSprite _titnSprite;

    private List<TitnSprite> _sprites;

    private void Awake()
    {
        _sprites = new List<TitnSprite>();
    }

    private void OnEnable()
    {
        _shopping.gameObject.SetActive(false);
        _pumpingCamera.gameObject.SetActive(false);
        _interactiveArt.Changed += TurnPlayerCamera;
        StartCoroutine(StartPumping());
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

        yield return new WaitForSeconds(2);

        SetNormalPositionArte();
        TurnPumpingCamera();
        _UI.SetActive(false);
        _arm.gameObject.SetActive(true);
    }

    private void TurnPumpingCamera()
    {
        m_Camera.gameObject.SetActive(false);
        _pumpingCamera.gameObject.SetActive(true);
    }

    private void TurnPlayerCamera()
    {
        m_Camera.gameObject.SetActive(true);
        _pumpingCamera.gameObject.SetActive(false);
        _UI.SetActive(true);
        _shopping.gameObject.SetActive(false);

        foreach (var tank in _tacticsFabric.Tanks)
        {
            TitnSprite titnSprite= Instantiate(_titnSprite);
            titnSprite.Initialize(tank);
            _sprites.Add(titnSprite);
        }
    }

    private void SetNormalPositionArte()
    {
        _arta1.transform.localPosition = new Vector3(0.9f, 17.5f, -4f);
        _arta1.transform.localRotation = Quaternion.Euler(-1.1f, -1.7f, -8f);
    }
}
