using UnityEngine;

namespace BehaviourAI
{
    public class TankAI : MonoBehaviour
    {
        [SerializeField] private float stopDistance = 10f;
        [SerializeField] private float rotationSpeed = 2f;
        [SerializeField] private float moveSpeed = 3f;
        [SerializeField] private ExclamationMark _exclamationMark;
        [SerializeField] private GameObject _guidance;
        [SerializeField] private float avoidanceDistance = 2f;
        [SerializeField] private LayerMask tankLayer;

        private Transform[] _targets;
        private int _currentTargetIndex;
        private Transform _currentTarget;
        private bool _isDisabled;
        private bool _isWaiting; // Флаг ожидания, если путь заблокирован

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

            // Начинаем движение с первой цели
            _currentTargetIndex = 0;
            _currentTarget = _targets[_currentTargetIndex];
        }

        private void Update()
        {
            if (_isDisabled || _currentTarget == null) return;

            Debug.DrawRay(transform.position, transform.forward * avoidanceDistance, Color.red);

            if (IsPathBlocked())
            {
                // Путь заблокирован — останавливаем танк
                _isWaiting = true;
                return;
            }
            else
            {
                // Путь освобожден — продолжаем движение
                _isWaiting = false;
            }

            RotateTank();

            if (IsTankFacingTarget())
            {
                MoveTowardsTarget();
            }
        }

        public void ShowHover()
        {
            _guidance.gameObject.SetActive(true);
        }

        public void ShowSign()
        {
            _exclamationMark.gameObject.SetActive(true);
        }

        public void DisableTank()
        {
            _isDisabled = true;
            Debug.Log($"{gameObject.name} has been disabled.");
        }

        private void MoveTowardsTarget()
        {
            Vector3 direction = (_currentTarget.position - transform.position).normalized;
            float distance = Vector3.Distance(transform.position, _currentTarget.position);

            if (distance > stopDistance)
            {
                // Двигаемся к цели, если путь свободен
                if (!_isWaiting)
                {
                    transform.position += direction * moveSpeed * Time.deltaTime;
                }
            }
            else
            {
                // Если достигли цели, выбираем следующую
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

        private bool IsPathBlocked()
        {
            RaycastHit hit;

            // Проверяем, заблокирован ли путь перед танком
            if (Physics.Raycast(transform.position, transform.forward, out hit, avoidanceDistance))
            {
                // Путь заблокирован, возвращаем true
                return true;
            }

            // Путь свободен
            return false;
        }

        private void ChooseNextTarget()
        {
            if (_targets.Length == 0) return;

            // Увеличиваем индекс цели, чтобы двигаться по кругу
            _currentTargetIndex = (_currentTargetIndex + 1) % _targets.Length;
            _currentTarget = _targets[_currentTargetIndex];
        }
    }
}
