using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HandAnimation : MonoBehaviour
{
    [SerializeField] private float scaleSpeed = 1f;
    [SerializeField] private float scaleAmount = 0.2f;

    private Vector3 initialScale;

    void Start()
    {
        initialScale = transform.localScale;
    }

    void Update()
    {
        float scaleFactor = 1 + Mathf.PingPong(Time.time * scaleSpeed, scaleAmount);
        transform.localScale = initialScale * scaleFactor;
    }
}
