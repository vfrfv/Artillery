using UnityEngine;

namespace UI
{
    public class TankKillCounter
    {
        private static int _tankKillCount;

        public static int KillCount => _tankKillCount;

        public static void NotifyTankDestroyed()
        {
            _tankKillCount++;
        }
    }
}