using Fabric;
using UnityEngine;

namespace Bootstraps
{
    public class Bootstrap : MonoBehaviour
    {
        [SerializeField] private TanksFabric tanksFabric;
        [SerializeField] private ScenarioGame scenarioGame;
        
        private EnemySpawnBootstrap _enemySpawnBootstrap;
        
        
        private void OnEnable()
        {
            _enemySpawnBootstrap = new EnemySpawnBootstrap(10,  2,tanksFabric);
            scenarioGame.Initialize(_enemySpawnBootstrap);
            
                //Luna.Unity.LifeCycle.GameStarted();
        }
    }
}
