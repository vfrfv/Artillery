using System.Collections.Generic;
using UnityEngine;
using BehaviourAI; 

namespace Fabric
{
    public class TanksFabric : MonoBehaviour
    {
        [SerializeField] private GameObject tankPrefab;
        [SerializeField] private List<Transform> spawnPoints;
        [SerializeField] private Transform[] targets; 
        private int _indexPoint = 0;
        
        public void Spawn()
        {
            if (_indexPoint >= spawnPoints.Count) return; 
            
            Transform currentPoint = spawnPoints[_indexPoint];
            
            GameObject tankObj = Instantiate(tankPrefab.gameObject, currentPoint.position, Quaternion.identity);
            
            TankAI tankAI = tankObj.GetComponent<TankAI>();
            if (tankAI != null)
            {
                tankAI.SetTargets(targets);
            }

            _indexPoint++;
        }
    }
}