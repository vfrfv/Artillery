using BehaviourAI;
using UI;
using UnityEngine;
using DG.Tweening;
using Fabric;
//using TMPro;
using System.Threading.Tasks;
using System.Collections.Generic;
using UnityEngine.UI;

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

        [Header("Точка попадания")]

        [SerializeField] private Transform _missPoint;

        [Header("Прокачка")]

        [SerializeField] private Pumping _pumping;
        [SerializeField] private Button button;

        private ObjectPoolShooting _projectilePool;
        private ObjectPoolShooting _explosionPool;
        private bool _isZoomed = false;
        private bool _firstShot = false;
        private bool _newArt = false;

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
            if(_newArt == false)
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
            Vector3 shootDirection;

            if (!_firstShot)
            {
                _timeController.StartSlowMotion();
                shootDirection = (_missPoint.position - projectilePosition.position).normalized;
                _firstShot = true;
            }
            else
            {
                if (_isZoomed)
                {
                    _timeController.StartSlowMotion();
                    shootDirection = mainCamera.transform.forward;
                }
                else
                {
                    Vector2 screenPoint = RectTransformUtility.WorldToScreenPoint(null, crosshairUI.position);
                    Ray ray = mainCamera.ScreenPointToRay(screenPoint);
                    shootDirection = ray.direction.normalized;
                }
            }

            Debug.DrawRay(projectilePosition.position, shootDirection * 10f, Color.green, 2f);

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
            projectileComponent.Initialize(projectileSpeed, _explosionPool, explosionEffect, _playerUIController, tankAIList, _pumping, null);

            _managerCamers.GetBullet(projectileComponent);

            playerShootingCooldown.StartCooldown();

            if (muzzleFlash != null)
            {
                muzzleFlash.GetComponent<ParticleSystem>().Play();
            }

            ShakeCamera();

            _followBullet.GetBullet(projectile);
            _managerCamers.WatchingBullet();
            button.gameObject.SetActive(false);
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

            for (int i = 0; i < shots; i++)
            {
                GameObject projectile = _projectilePool.GetObject();
                projectile.transform.position = projectilePosition.position;

                Vector3 targetPosition = tankAIList[i].transform.position + Vector3.up * 3f; // Смещение вверх на 1.5 единицы
                Vector3 shootDirection = (targetPosition - projectilePosition.position).normalized;

                projectile.transform.rotation = Quaternion.LookRotation(shootDirection, Vector3.up);
                projectile.SetActive(true);

                Projectile projectileComponent = projectile.GetComponent<Projectile>();
                projectileComponent.Initialize(projectileSpeed, _explosionPool, explosionEffect, _playerUIController, tankAIList, _pumping, tankAIList[i]);

                playerShootingCooldown.StartCooldown();

                if (muzzleFlash != null)
                {
                    muzzleFlash.GetComponent<ParticleSystem>().Play();
                }

                ShakeCamera();

                if (i == shots - 1) // Последний снаряд
                {
                    _timeController.StartSlowMotion();
                    _followBullet.GetBullet(projectile);
                    _managerCamers.WatchingBullet();
                }

                await Task.Delay(50);
            }

            _pumping.RemoveSprites();
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
