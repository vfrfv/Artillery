using UnityEngine;

namespace Fabric
{
    public class ProjectileFactory
    {
        private GameObject _projectilePrefab;

        public ProjectileFactory(GameObject projectilePrefab)
        {
            _projectilePrefab = projectilePrefab;
        }

        public GameObject CreateProjectile(Vector3 position, Quaternion rotation)
        {
            if (_projectilePrefab == null)
            {
                Debug.LogError("Projectile prefab is not assigned!");
                return null;
            }

            return GameObject.Instantiate(_projectilePrefab, position, rotation);
        }
    }
}