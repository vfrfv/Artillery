using BehaviourAI;
using System;
using System.Collections;
using System.Collections.Generic;
using UI;
using UnityEngine;

namespace Howitzer
{
    public class Projectile : MonoBehaviour
    {
        private float _speed;
        private Rigidbody _rigidbody;
        private GameObject _explosionParticle;
        private PlayerUIController _playerUIController;
        private List<TankAI> _tanks;
        private Pumping _pumping;
        private TankAI _targetTank;
        private PlayerZoom _playerZoom;

        public event Action Crashed;

        public void Initialize(float speed, GameObject explosionParticle,
            PlayerUIController playerUIController, List<TankAI> tanks, Pumping pumping, TankAI targetTank, PlayerZoom playerZoom)
        {
            _speed = speed;
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
            if (other.TryGetComponent<TankAI>(out TankAI hitTankAI))
            {
                DestroyTank(hitTankAI);

                foreach (TankAI tank in _tanks)
                {
                    DestroyTank(tank);
                }

                StartCoroutine(DisableAfterDelay());
                Crashed?.Invoke();

            }
            else
            {
                _playerUIController.ShowCross();
                _playerZoom.ActivateTransitionToStore();
                _playerZoom.Upgrade();
                StartCoroutine(DisableAfterDelay());

                Crashed?.Invoke();
            }
        }

        private IEnumerator DisableAfterDelay()
        {
            yield return null;
            gameObject.SetActive(false);
        }

        private void DestroyTank(TankAI hitTankAI)
        {
            hitTankAI.DisableTank();
            SpawnExplosionEffect(transform.position);
            TankKillCounter.NotifyTankDestroyed();
        }

        private void SpawnExplosionEffect(Vector3 position)
        {
            GameObject explosion = Instantiate(_explosionParticle, position, Quaternion.identity);
            explosion.SetActive(true);
            explosion.GetComponent<ParticleSystem>().Play();
        }
    }
}
