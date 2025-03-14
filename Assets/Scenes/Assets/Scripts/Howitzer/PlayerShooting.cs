using BehaviourAI;
using UI;
using UnityEngine;
using DG.Tweening;
using Fabric;
using TMPro;
using System.Threading.Tasks;

namespace Howitzer
{
    public class PlayerShooting : MonoBehaviour
    {
        [Header("Перезарядка, стрельба")]
        
        [SerializeField] private PlayerShootingCooldown playerShootingCooldown;
        [SerializeField] private Camera mainCamera;
        [SerializeField] private RectTransform crosshairUI;

        [Header("Эффекты")]
        [SerializeField] private TextMeshProUGUI missText;
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

        private ObjectPoolShooting _projectilePool;
        private ObjectPoolShooting _explosionPool;
        private bool _isZoomed = false;

        private void Awake()
        {
            _projectilePool = new ObjectPoolShooting(prefabProjectile, projectilePosition.position, prefabProjectile.transform.rotation, poolSize);
            _explosionPool = new ObjectPoolShooting(prefabProjectile, projectilePosition.position, prefabProjectile.transform.rotation, poolSize);
        }

        private void OnEnable()
        {
            PlayerUIController.OnShoot += Shoot;
            PlayerZoom.OnZoomChanged += SetZoomState;
        }

        private void OnDisable()
        {
            PlayerUIController.OnShoot -= Shoot;
            PlayerZoom.OnZoomChanged -= SetZoomState;
        }

        private void SetZoomState(bool isZoomed)
        {
            _isZoomed = isZoomed;
        }

        private void Shoot()
        {
            _timeController.StartSlowMotion();

            Vector3 shootDirection;
            if (_isZoomed)
            {
                shootDirection = mainCamera.transform.forward;
            }
            else
            {
                Vector2 screenPoint = RectTransformUtility.WorldToScreenPoint(null, crosshairUI.position);
                Ray ray = mainCamera.ScreenPointToRay(screenPoint);
                shootDirection = ray.direction.normalized;
            }

            Debug.DrawRay(projectilePosition.position, shootDirection * 10f, Color.green, 2f);

            GameObject projectile = _projectilePool.GetObject();
            projectile.transform.position = projectilePosition.position;
            projectile.transform.rotation = Quaternion.LookRotation(shootDirection, Vector3.up);

            projectile.SetActive(true);

            Projectile projectileComponent = projectile.GetComponent<Projectile>();
            projectileComponent.Initialize(projectileSpeed, _explosionPool, explosionEffect, missText);

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
