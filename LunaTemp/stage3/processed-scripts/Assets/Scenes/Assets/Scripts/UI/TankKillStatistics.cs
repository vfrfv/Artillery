using System;
using UnityEngine;
using UnityEngine.UI;

namespace UI
{
    public class TankKillStatistics : MonoBehaviour
    {
        public static event Action onStartCountTankKilled; 

        private const float FillIncrement = 0.33f;

        private void Update()
        {
           
            Debug.Log($"Количество уничт-ных танков: {TankKillCounter.KillCount}");

            var startCountTankKilled = 2;

            if(TankKillCounter.KillCount >= startCountTankKilled)
                onStartCountTankKilled?.Invoke();
        }
    }
}