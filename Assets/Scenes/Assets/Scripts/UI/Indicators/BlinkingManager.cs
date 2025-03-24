using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BlinkingManager : MonoBehaviour
{
    [SerializeField] private List<BlinkingObject> blinkingObjects;
    [SerializeField] private float blinkInterval = 0.5f; 
    [SerializeField] private float blinkDuration = 0.5f; 

    private void Start()
    {
        StartCoroutine(StartSyncBlinking());
    }

    private IEnumerator StartSyncBlinking()
    {
        foreach (var blinkingObject in blinkingObjects)
        {
            blinkingObject.StartBlinking();
        }

        while (true)
        {
            yield return new WaitForSeconds(blinkInterval * 2 + blinkDuration); 
        }
    }
}
