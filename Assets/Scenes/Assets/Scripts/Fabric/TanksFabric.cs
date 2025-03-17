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
        private List<GameObject> _tanks;

        private void Awake()
        {
            _tanks = new List<GameObject>();  
        }

        public List<GameObject> Tanks => _tanks;

        public void Spawn()
        {
            if (_indexPoint >= spawnPoints.Count) return; 
            
            Transform currentPoint = spawnPoints[_indexPoint];
            
            GameObject tankObj = Instantiate(tankPrefab.gameObject, currentPoint.position, Quaternion.identity);
            _tanks.Add(tankObj);

            TankAI tankAI = tankObj.GetComponent<TankAI>();

            if (tankAI != null)
            {
                tankAI.SetTargets(targets);
            }

            _indexPoint++;
        }
    }
}