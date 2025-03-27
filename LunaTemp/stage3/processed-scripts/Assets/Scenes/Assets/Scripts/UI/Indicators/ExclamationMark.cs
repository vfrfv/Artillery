using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ExclamationMark : MonoBehaviour
{
    private Camera _camera;
    private float _degree = 180;

    private void Awake()
    {
        _camera = Camera.main;
    }

    void OnEnable()
    {
        StartCoroutine(SwitchOff());
    }

    IEnumerator SwitchOff()
    {
        yield return new WaitForSeconds(2f);
        gameObject.SetActive(false);
    }  

    private void LateUpdate()
    {
        transform.LookAt(new Vector3(_camera.transform.position.x, _camera.transform.position.y, _camera.transform.position.z));
        transform.Rotate(0, _degree, 0);
    }
}
