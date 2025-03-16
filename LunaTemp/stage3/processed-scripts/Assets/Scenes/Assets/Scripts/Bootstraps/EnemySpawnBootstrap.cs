using System;
using Fabric;

namespace Bootstraps
{
    public class EnemySpawnBootstrap
    {
        private int _maxCountTanks;
        private int _maxStartCountTanks;
        private int _currentCountTanks = 0;
        private TanksFabric _tanksFabric;

        public static event Action EndSpawnTanks; 


        public EnemySpawnBootstrap(int maxCountTanks, int maxStartCountTanks, TanksFabric tanksFabric)
        {
            _maxCountTanks = maxCountTanks;
            _maxStartCountTanks = maxStartCountTanks;
            _tanksFabric = tanksFabric;
        }

        public void StartSpawnEnemy()
        {
            if (_currentCountTanks <= _maxStartCountTanks)
            {
                _tanksFabric.Spawn();
                _currentCountTanks++;
            }
            else
            {
                EndSpawnTanks?.Invoke();
            }
                
        }

        public bool IsStartSpawnEnd()
        {
            return _currentCountTanks <= _maxStartCountTanks;
        }

        public bool IsAllSpawnEnd()
        {
            return _currentCountTanks <= _maxCountTanks;
        }
    }
}