using UnityEngine;

namespace BehaviourAI
{
    public class TankAI : MonoBehaviour
    {
        [SerializeField] private float stopDistance = 10f;
        [SerializeField] private float rotationSpeed = 2f;
        [SerializeField] private float moveSpeed = 3f;

        private Transform[] _targets;
        private int _currentTargetIndex;
        private Transform _currentTarget;
        private bool _isDisabled;
        private bool _isWaiting; // Флаг ожидания, если танк остановился из-за другого танка

        public bool IsAlive => !_isDisabled;

        public void SetTargets(Transform[] newTargets)
        {
            _targets = newTargets;
        }

        private void Start()
        {
            if (_targets == null || _targets.Length == 0)
            {
                Debug.LogError("No targets assigned to the TankAI script!");
                return;
            }

            ChooseNextTarget();
        }

        private void Update()
        {
            if (_isDisabled || _currentTarget == null || _isWaiting) return;

            RotateTank();

            if (IsTankFacingTarget())
            {
                MoveTowardsTarget();
            }
        }

        public void DisableTank()
        {
            _isDisabled = true;
            Debug.Log($"{gameObject.name} has been disabled.");
        }

        private void ChooseNextTarget()
        {
            if (_targets.Length == 0) return;

            _currentTargetIndex = Random.Range(0, _targets.Length);
            _currentTarget = _targets[_currentTargetIndex];
        }

        private void MoveTowardsTarget()
        {
            Vector3 direction = (_currentTarget.position - transform.position).normalized;
            float distance = Vector3.Distance(transform.position, _currentTarget.position);

            if (distance > stopDistance)
            {
                transform.position += direction * moveSpeed * Time.deltaTime;
            }
            else
            {
                ChooseNextTarget();
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

            return dotProduct > 0.99f;
        }
    }
}
