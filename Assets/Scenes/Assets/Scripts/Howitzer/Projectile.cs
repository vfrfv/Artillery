using BehaviourAI;
//using TMPro;
using UnityEngine;
using DG.Tweening;
using UI;
using System;

namespace Howitzer
{
    public class Projectile : MonoBehaviour
    {
        //private TextMeshProUGUI _missText; // UI-текст
        private ObjectPoolShooting _explosionPool;
        private float _speed;
        private Rigidbody _rigidbody;
        private GameObject _explosionParticle;

        public event Action Crashed;

        public void Initialize(float speed, ObjectPoolShooting explosionPool, GameObject explosionParticle/*, TextMeshProUGUI text*/)
        {
            _speed = speed;
            _explosionPool = explosionPool;
            _rigidbody = GetComponent<Rigidbody>();
            _rigidbody.velocity = transform.forward * _speed;
            _explosionParticle = explosionParticle;
            //_missText = text;
        }

        private void OnCollisionEnter(Collision collision)
        {
            if (collision.gameObject.name == "PZ_TankPrefab(Clone)")
            {
                TankAI tankAI = collision.gameObject.GetComponent<TankAI>();
                if (tankAI != null && tankAI.IsAlive)
                {
                    tankAI.DisableTank();
                    tankAI.GetComponent<OutlineScript>().enabled = false;
                    tankAI.GetComponent<BoxCollider>().enabled = false;
                    ChangeTankColor(collision.gameObject, Color.black);
                    SpawnExplosionEffect(transform.position);
                    TankKillCounter.NotifyTankDestroyed();
                }
            }
            else if (collision.gameObject.CompareTag("Ground") || collision.gameObject.CompareTag("Tree"))
            {
                //ShowMissText();
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

        //private void ShowMissText()
        //{
        //    if (_missText != null)
        //    {
        //        _missText.text = "Target tank missed!";
        //        _missText.gameObject.SetActive(true);
        //        _missText.alpha = 0f;
        //        _missText.transform.localScale = Vector3.one * 0.5f;
                
        //        _missText.DOFade(1f, 0.5f);
        //        _missText.transform.DOScale(1f, 0.5f).SetEase(Ease.OutBack);
                
        //        _missText.DOFade(0f, 0.5f).SetDelay(2f);
        //        _missText.transform.DOScale(0.5f, 0.5f).SetEase(Ease.InBack).SetDelay(2f)
        //            .OnComplete(() => _missText.gameObject.SetActive(false));
        //    }
        //}
    }
}
