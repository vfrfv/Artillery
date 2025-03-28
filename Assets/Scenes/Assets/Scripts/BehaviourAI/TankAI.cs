using Fabric;
using UnityEngine;

namespace BehaviourAI
{
    public class TankAI : MonoBehaviour
    {
        [SerializeField] private float stopDistance = 2f;
        [SerializeField] private float rotationSpeed = 2f;
        [SerializeField] private float moveSpeed = 3f;
        [SerializeField] private float avoidanceDistance = 2f;
        [SerializeField] private LayerMask tankLayer;

        [SerializeField] private GameObject _tower;  // Башня танка
        [SerializeField] private GameObject _gun;    // Пушка танка
        [SerializeField] private GameObject _target; // Цель для прицеливания

        [SerializeField] private Tower Tower;
        [SerializeField] private Gun Gun;

        private Transform _currentTarget;
        private bool _isDisabled;
        private bool _hasStopped;
        private TanksFabric _fabric;

        public bool IsAlive => !_isDisabled;
        public bool _arrived = false;

        public void SetTarget(Transform target, TanksFabric fabric)
        {
            _currentTarget = target;
            _fabric = fabric;
            _hasStopped = false;
        }

        private void Start()
        {
            if (_currentTarget == null)
            {
                Debug.LogError($"{gameObject.name}: No target assigned!");
                return;
            }
        }

        private void Update()
        {
            if (_isDisabled || _currentTarget == null) return;

            if (!_hasStopped)
            {
                RotateTank();

                if (IsTankFacingTarget() && !IsPathBlocked())
                {
                    MoveTowardsTarget();
                }

                if (HasReachedTarget())
                {
                    StopTank();
                }
            }
            else
            {
                if (_arrived == false)
                {
                    Tower.RotateToTarget(_target.transform.position);
                    Gun.RotateToTarget(_target.transform.position);
                    _arrived = true;
                }
            }
        }

        public void InitializeTarget(GameObject target)
        {
            _target = target;
        }

        private void MoveTowardsTarget()
        {
            float distance = Vector3.Distance(transform.position, _currentTarget.position);

            if (distance > stopDistance)
            {
                transform.position = Vector3.MoveTowards(transform.position, _currentTarget.position, moveSpeed * Time.deltaTime);
            }
        }

        private void RotateTank()
        {
            Vector3 direction = (_currentTarget.position - transform.position).normalized;
            Quaternion targetRotation = Quaternion.LookRotation(new Vector3(direction.x, 0, direction.z));
            transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);
        }

        private bool IsTankFacingTarget()
        {
            Vector3 directionToTarget = (_currentTarget.position - transform.position).normalized;
            float dotProduct = Vector3.Dot(transform.forward, directionToTarget);
            return dotProduct > 0.95f;
        }

        private bool IsPathBlocked()
        {
            RaycastHit hit;
            if (Physics.Raycast(transform.position + Vector3.up * 0.5f, transform.forward, out hit, avoidanceDistance, tankLayer))
            {
                return true;
            }
            return false;
        }

        private bool HasReachedTarget()
        {
            float distance = Vector3.Distance(transform.position, _currentTarget.position);
            return distance <= stopDistance;
        }

        private void StopTank()
        {
            _hasStopped = true;
        }

        public void DisableTank()
        {
            _isDisabled = true;
            _fabric.FreeTarget(_currentTarget);
        }
    }
}
