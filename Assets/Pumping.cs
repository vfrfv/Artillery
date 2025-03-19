using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.UIElements;

public class Pumping : MonoBehaviour
{
    [SerializeField] private Camera m_Camera;
    [SerializeField] private Camera _pumpingCamera;
    [SerializeField] private GameObject _UI;
    [SerializeField] private GameObject _arta1;

    private void OnEnable()
    {
        _pumpingCamera.gameObject.SetActive(false);
        StartCoroutine(StartPumping());
    }

    private IEnumerator StartPumping()
    {

        yield return new WaitForSeconds(2);

        SetNormalPositionArte();
        TurnPumpingCamera();
        _UI.SetActive(false);
    }

    private void TurnPumpingCamera()
    {
        m_Camera.gameObject.SetActive(false);
        _pumpingCamera.gameObject.SetActive(true);
    }

    private void SetNormalPositionArte()
    {
        _arta1.transform.position = new Vector3(0, -74, 0.3f);
        _arta1.transform.rotation = Quaternion.Euler(-21.9f, 0, 0);
    }
}
