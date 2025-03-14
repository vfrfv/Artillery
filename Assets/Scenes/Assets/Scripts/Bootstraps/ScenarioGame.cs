using System;
using System.Collections;
using BehaviourAI;
using UI;
using UnityEngine;

namespace Bootstraps
{
    public class ScenarioGame : MonoBehaviour
    {
        [SerializeField] private GameObject endCard;
        private EnemySpawnBootstrap _enemySpawnBootstrap;

        private void OnEnable()
        {
            TankKillStatistics.onStartCountTankKilled += ShowEndCard; // Убийство начального количества танков
        }

        private void OnDisable()
        {
            TankKillStatistics.onStartCountTankKilled -= ShowEndCard;
        }

        public void Initialize(EnemySpawnBootstrap enemySpawnBootstrap) // Начало сценария
        {
            _enemySpawnBootstrap = enemySpawnBootstrap;

            StartCoroutine(StartSpawnEnemy());
        }
        private IEnumerator StartSpawnEnemy()
        {
            while(_enemySpawnBootstrap.IsStartSpawnEnd())
            {
                _enemySpawnBootstrap.StartSpawnEnemy();
                yield return new WaitForSeconds(0.1f);
            }
        }
        
        

        private void ShowEndCard() // Конец сценария
        {
            endCard.SetActive(true);
            
            //Luna.Unity.Playable.InstallFullGame();
            //Luna.Unity.LifeCycle.GameEnded();
        }
    }
}