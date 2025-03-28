using BehaviourAI;
using Fabric;
using UnityEngine;

public class Guidance : MonoBehaviour
{
    [SerializeField] private TanksFabric _tanksFabric;
    [SerializeField] private Camera secondCamera;

    void Update()
    {
        Ray ray = secondCamera.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;

        Debug.DrawRay(ray.origin, ray.direction * 1000f, Color.red, 1f);
        Debug.Log($"Ray Origin: {ray.origin}, Direction: {ray.direction}");

        if (Physics.Raycast(ray, out hit))
        {
            if (hit.collider.TryGetComponent<TankAI>(out TankAI tankAI))
            {
                foreach (var tank in _tanksFabric.Tanks)
                {
                    TankAI tankObg = tank.GetComponent<TankAI>();
                    //tankObg.ShowHover();

                }
            }
        }
    }
}
