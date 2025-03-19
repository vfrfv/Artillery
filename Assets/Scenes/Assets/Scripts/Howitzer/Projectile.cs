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

        public event Action Crashed;

        public void Initialize(float speed, ObjectPoolShooting explosionPool, GameObject explosionParticle,
            PlayerUIController playerUIController, List<TankAI> tanks, Pumping pumping)
        {
            _speed = speed;
            _explosionPool = explosionPool;
            _rigidbody = GetComponent<Rigidbody>();
            _rigidbody.velocity = transform.forward * _speed;
            _explosionParticle = explosionParticle;
            _playerUIController = playerUIController;
            _tanks = tanks;
            _pumping = pumping;
        }

        private void OnCollisionEnter(Collision collision)
        {
            if (collision.gameObject.TryGetComponent<TankAI>(out TankAI hitTankAI))
            {
                hitTankAI.DisableTank();
                hitTankAI.GetComponent<BoxCollider>().enabled = false;
                ChangeTankColor(collision.gameObject, Color.black);
                SpawnExplosionEffect(transform.position);
                TankKillCounter.NotifyTankDestroyed();
                _playerUIController.ShowMark();

            }
            else if (collision.gameObject.CompareTag("Ground") || collision.gameObject.CompareTag("Tree"))
            {
                _playerUIController.ShowCross();
                _pumping.gameObject.SetActive(true);
            }

            foreach (var tank in _tanks)
            {
                TankAI tankAI = tank.GetComponent<TankAI>();

                if (tankAI != null && tankAI.IsAlive && tankAI != hitTankAI)
                {
                    tankAI.ShowSign();
                }
            }

            gameObject.SetActive(false);
            Crashed?.Invoke();
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
