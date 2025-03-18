using BehaviourAI;
using UnityEngine;
using DG.Tweening;
using UI;
using System;
using System.Collections.Generic;

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

        public event Action Crashed;

        public void Initialize(float speed, ObjectPoolShooting explosionPool, GameObject explosionParticle, 
            PlayerUIController playerUIController, List<TankAI> tanks)
        {
            _speed = speed;
            _explosionPool = explosionPool;
            _rigidbody = GetComponent<Rigidbody>();
            _rigidbody.velocity = transform.forward * _speed;
            _explosionParticle = explosionParticle;
            _playerUIController = playerUIController;
            _tanks = tanks;
        }

        private void OnCollisionEnter(Collision collision)
        {
            TankAI hitTankAI = null;

            if (collision.gameObject.name == "PZ_TankPrefab(Clone)")
            {
                hitTankAI = collision.gameObject.GetComponent<TankAI>();

                if (hitTankAI != null && hitTankAI.IsAlive)
                {
                    hitTankAI.DisableTank();
                    //hitTankAI.GetComponent<OutlineScript>().enabled = false;
                    hitTankAI.GetComponent<BoxCollider>().enabled = false;
                    ChangeTankColor(collision.gameObject, Color.black);
                    SpawnExplosionEffect(transform.position);
                    TankKillCounter.NotifyTankDestroyed();
                    _playerUIController.ShowMark();
                }
            }
            else if (collision.gameObject.CompareTag("Ground") || collision.gameObject.CompareTag("Tree"))
            {
                _playerUIController.ShowCross();
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
                renderer.material.color = color;
            }
        }
    }
}
