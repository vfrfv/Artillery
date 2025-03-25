using BehaviourAI;
using UnityEngine;

public class MissPoint : MonoBehaviour
{
    private bool _isTank;

    public bool IsTank => _isTank;

    private void Update()
    {
        Cast();
    }

    public void Cast()
    {
        Collider[] hitColliders = Physics.OverlapSphere(transform.position, 1f);

        foreach (Collider collider in hitColliders)
        {
            if (collider.TryGetComponent<TankAI>(out TankAI tankAI))
            {
                _isTank = false;  
                return;
            }
        }

        _isTank = true;   
    }
}
