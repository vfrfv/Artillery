using BehaviourAI;
using System;
using System.Collections.Generic;
using UI;
using UnityEngine;

namespace Howitzer
{
    public class Projectile : MonoBehaviour
    {
        private ObjectPoolShooting _explosionPool;
        private float _speed;
        private Rigidbody _rigidbody;
        private GameObject _explosionParticle;
        private PlayerUIController _playerUIController;
        private List<TankAI> _tanks;
        private Pumping _pumping;
        private TankAI _targetTank;
        private PlayerZoom _playerZoom;

        public event Action Crashed;

        public void Initialize(float speed, ObjectPoolShooting explosionPool, GameObject explosionParticle,
            PlayerUIController playerUIController, List<TankAI> tanks, Pumping pumping, TankAI targetTank, PlayerZoom playerZoom)
        {
            _speed = speed;
            _explosionPool = explosionPool;
            _rigidbody = GetComponent<Rigidbody>();
            _rigidbody.velocity = transform.forward * _speed;
            _explosionParticle = explosionParticle;
            _playerUIController = playerUIController;
            _tanks = tanks;
            _pumping = pumping;
            _targetTank = targetTank;
            _playerZoom = playerZoom;
        }

        private void OnTriggerEnter(Collider other)
        {
            if (_targetTank != null)
            {
                if (other.gameObject.TryGetComponent<TankAI>(out TankAI hitTankAI))
                {
                    DestroyTank(hitTankAI);
                    gameObject.SetActive(false);
                }
            }
            else
            {
                if (other.gameObject.TryGetComponent<TankAI>(out TankAI hitTankAI))
                {
                    DestroyTank(hitTankAI);
                }
            }

            if (other.gameObject.CompareTag("Ground") || other.gameObject.CompareTag("Tree"))
            {
                _playerUIController.ShowCross();
                _playerZoom.ActivateTransitionToStore();
                _playerZoom.Upgrade();
                gameObject.SetActive(false);
            }

            Crashed?.Invoke();
        }

        private void DestroyTank(TankAI hitTankAI)
        {
            hitTankAI.DisableTank();
            ChangeTankColor(hitTankAI.gameObject, Color.black);
            SpawnExplosionEffect(transform.position);
            TankKillCounter.NotifyTankDestroyed();
        }

        private void SpawnExplosionEffect(Vector3 position)
        {
            GameObject explosion = Instantiate(_explosionParticle, position, Quaternion.identity);
            explosion.SetActive(true);
            explosion.GetComponent<ParticleSystem>().Play();
        }

        private void ChangeTankColor(GameObject tank, Color color)
        {
            Renderer[] renderers = tank.GetComponentsInChildren<Renderer>();

            foreach (Renderer renderer in renderers)
            {
                Material[] materials = renderer.materials;

                if (materials.Length >= 4)
                {
                    materials[3] = new Material(materials[0]);
                }

                renderer.materials = materials;
            }
        }
    }
}
