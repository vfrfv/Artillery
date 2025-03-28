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
        [SerializeField] private GameObject _target;

        private List<GameObject> _tanks;
        private Dictionary<Transform, bool> _targetStatus; // true = занята, false = свободна

        private void Awake()
        {
            _tanks = new List<GameObject>();
            _targetStatus = new Dictionary<Transform, bool>();

            foreach (var target in targets)
            {
                _targetStatus[target] = false; // Все точки свободны в начале
            }
        }

        public List<GameObject> Tanks => _tanks;

        public void Spawn()
        {
            if (_tanks.Count >= spawnPoints.Count) return;

            Transform spawnPoint = spawnPoints[_tanks.Count];
            GameObject tankObj = Instantiate(tankPrefab, spawnPoint.position, Quaternion.identity);
            _tanks.Add(tankObj);

            TankAI tankAI = tankObj.GetComponent<TankAI>();
            if (tankAI != null)
            {
                Transform target = GetNearestAvailableTarget(tankObj.transform);
                if (target != null)
                {
                    _targetStatus[target] = true;  // Помечаем точку занятой
                    tankAI.SetTarget(target, this); // Передаем точку + ссылку на фабрику
                    tankAI.InitializeTarget(_target);
                }
            }
        }

        private Transform GetNearestAvailableTarget(Transform tankTransform)
        {
            foreach (var target in targets)
            {
                if (!_targetStatus[target]) // Если точка свободна
                {
                    return target;
                }
            }
            return null; // Нет свободных точек
        }

        public void FreeTarget(Transform target)
        {
            if (_targetStatus.ContainsKey(target))
            {
                _targetStatus[target] = false; // Освобождаем точку
            }
        }
    }
}
