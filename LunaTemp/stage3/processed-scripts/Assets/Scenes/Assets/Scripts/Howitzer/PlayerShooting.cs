using BehaviourAI;
using DG.Tweening;
using Fabric;
using System.Collections.Generic;
using System.Threading.Tasks;
using UI;
using UnityEngine;

namespace Howitzer
{
    public class PlayerShooting : MonoBehaviour
    {
        [Header("Перезарядка, стрельба")]

        [SerializeField] private PlayerShootingCooldown playerShootingCooldown;
        [SerializeField] private Camera mainCamera;
        [SerializeField] private RectTransform crosshairUI;

        [Header("Эффекты")]

        [SerializeField] private GameObject muzzleFlash;
        [SerializeField] private GameObject explosionEffect;

        [Header("Снаряд")]

        [SerializeField] private Transform projectilePosition;
        [SerializeField] private GameObject prefabProjectile;
        [SerializeField] private float projectileSpeed;
        [SerializeField] private int poolSize = 10;

        [Header("Камеры")]

        [SerializeField] private FollowBullet _followBullet;
        [SerializeField] private ManagerCamers _managerCamers;

        [Header("Слоумо")]

        [SerializeField] private TimeController _timeController;

        [Header("UI")]

        [SerializeField] private PlayerUIController _playerUIController;
        [SerializeField] private TanksFabric _tanksFabric;

        [Header("Точка промаха")]

        [SerializeField] private MissPoint _missPoint;

        [Header("Прокачка")]

        [SerializeField] private Pumping _pumping;
        //[SerializeField] private Button button;
        [SerializeField] private PlayerZoom _playerZoom;
        [SerializeField] private GameObject _aim;

        private ObjectPoolShooting _projectilePool;
        private ObjectPoolShooting _explosionPool;
        private bool _isZoomed = false;
        private bool _firstShot = false;
        private bool _newArt = false;

        private int _shootCount = 0;

        private void Awake()
        {
            _projectilePool = new ObjectPoolShooting(prefabProjectile, projectilePosition.position, prefabProjectile.transform.rotation, poolSize);
            _explosionPool = new ObjectPoolShooting(prefabProjectile, projectilePosition.position, prefabProjectile.transform.rotation, poolSize);
        }

        private void OnEnable()
        {
            PlayerUIController.OnShoot += ChooseShootingRange;
            PlayerZoom.OnZoomChanged += SetZoomState;
        }

        private void OnDisable()
        {
            PlayerUIController.OnShoot -= ChooseShootingRange;
            PlayerZoom.OnZoomChanged -= SetZoomState;
        }

        public void Upgrade()
        {
            _newArt = true;
        }

        private void SetZoomState(bool isZoomed)
        {
            _isZoomed = isZoomed;
        }

        private void ChooseShootingRange()
        {
            if (_newArt == false)
            {
                Shoot1();
            }
            else
            {
                Shoot2();
            }
        }

        private void Shoot1()
        {
            
            _shootCount++;

           
            if (_shootCount >= 4)
            {
                _playerZoom.ToggleZoom(); 
                _shootCount = 0; 
                return; 
            }

            Vector3 shootDirection;
            Ray ray;

            if (_isZoomed)
            {
                _timeController.StartSlowMotion();
                shootDirection = mainCamera.transform.forward;
                ray = new Ray(mainCamera.transform.position, shootDirection);
            }
            else
            {
                Vector2 screenPoint = RectTransformUtility.WorldToScreenPoint(null, crosshairUI.position);
                ray = mainCamera.ScreenPointToRay(screenPoint);
                shootDirection = ray.direction.normalized;
            }

            shootDirection = Quaternion.AngleAxis(-1f, mainCamera.transform.right) * shootDirection;

            if (!_firstShot && Physics.Raycast(ray, out RaycastHit hit))
            {
                if (hit.collider.TryGetComponent<TankAI>(out TankAI tankAI))
                {
                    Vector3 missPointPosition = tankAI.transform.position;
                    MissPoint missPoint = Instantiate(_missPoint, missPointPosition, Quaternion.identity);

                    while (missPoint.IsTank == false)
                    {
                        missPoint.transform.position -= Vector3.forward * 5f;
                        missPoint.Cast();
                    }

                    shootDirection = (missPoint.transform.position - projectilePosition.position).normalized;
                    missPoint.gameObject.SetActive(false);
                }
            }

            GameObject projectile = _projectilePool.GetObject();
            projectile.transform.position = projectilePosition.position;
            projectile.transform.rotation = Quaternion.LookRotation(shootDirection, Vector3.up);

            projectile.SetActive(true);

            List<TankAI> tankAIList = new List<TankAI>();

            foreach (var tankObj in _tanksFabric.Tanks)
            {
                TankAI tankAI = tankObj.GetComponent<TankAI>();

                if (tankAI != null)
                {
                    tankAIList.Add(tankAI);
                }
            }

            Projectile projectileComponent = projectile.GetComponent<Projectile>();
            projectileComponent.Initialize(projectileSpeed, _explosionPool, explosionEffect, _playerUIController, tankAIList, _pumping, null, _playerZoom);

            _managerCamers.GetBullet(projectileComponent);

            playerShootingCooldown.StartCooldown();

            if (muzzleFlash != null)
            {
                muzzleFlash.GetComponent<ParticleSystem>().Play();
            }

            ShakeCamera();

            _followBullet.GetBullet(projectile);
            _managerCamers.WatchingBullet();
        }

        private async void Shoot2()
        {
            List<TankAI> tankAIList = new List<TankAI>();
            foreach (var tankObj in _tanksFabric.Tanks)
            {
                TankAI tankAI = tankObj.GetComponent<TankAI>();
                if (tankAI != null)
                {
                    tankAIList.Add(tankAI);
                }
            }

            int shots = Mathf.Min(3, tankAIList.Count);
            GameObject lastProjectile = null;

            for (int i = 0; i < shots; i++)
            {
                GameObject projectile = _projectilePool.GetObject();
                projectile.transform.position = projectilePosition.position;

                Vector3 targetPosition = tankAIList[i].transform.position + Vector3.up * 3f;
                Vector3 shootDirection = (targetPosition - projectilePosition.position).normalized;

                projectile.transform.rotation = Quaternion.LookRotation(shootDirection, Vector3.up);
                projectile.SetActive(true);

                Projectile projectileComponent = projectile.GetComponent<Projectile>();
                projectileComponent.Initialize(projectileSpeed, _explosionPool, explosionEffect, _playerUIController, tankAIList, _pumping, tankAIList[i], _playerZoom);

                playerShootingCooldown.StartCooldown();

                if (muzzleFlash != null)
                {
                    muzzleFlash.GetComponent<ParticleSystem>().Play();
                }

                ShakeCamera();
                lastProjectile = projectile;

                await Task.Delay(50);
            }

            if (lastProjectile != null)
            {
                Projectile projectileComponent = lastProjectile.GetComponent<Projectile>();
                if (projectileComponent != null)
                {
                    _followBullet.GetBullet(lastProjectile);
                    _managerCamers.GetBullet(projectileComponent, true); // Передаем Projectile вместо GameObject
                    _managerCamers.WatchingBullet();
                }
            }

            _timeController.StartSlowMotion();
            _pumping.RemoveSprites();
            _aim.gameObject.SetActive(false);
        }


        private void ShakeCamera()
        {
            float duration = 0.3f;
            float strength = 1f;
            int vibrato = 10;
            float randomness = 90f;
            mainCamera.transform.DOShakePosition(duration, strength, vibrato, randomness);
        }
    }
}
