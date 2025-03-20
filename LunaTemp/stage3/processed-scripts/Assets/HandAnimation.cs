using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HandAnimation : MonoBehaviour
{
    public float scaleSpeed = 1f;
    public float scaleAmount = 0.2f;

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
