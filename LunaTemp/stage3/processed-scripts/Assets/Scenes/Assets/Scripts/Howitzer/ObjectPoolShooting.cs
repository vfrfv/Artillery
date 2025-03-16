using System.Collections.Generic;
using UnityEngine;

namespace Howitzer
{
    public class ObjectPoolShooting
    {
        private GameObject prefab;
        private Queue<GameObject> pool;

        public ObjectPoolShooting(GameObject prefab, Vector3 position, Quaternion rotation, int initialSize)
        {
            this.prefab = prefab;
            pool = new Queue<GameObject>();
            for (int i = 0; i < initialSize; i++)
            {
                GameObject obj = GameObject.Instantiate(prefab, position, rotation);
                obj.SetActive(false);
                pool.Enqueue(obj);
            }
        }

        public GameObject GetObject()
        {
            if (pool.Count > 0)
            {
                GameObject obj = pool.Dequeue();
                obj.SetActive(true);
                return obj;
            }
            else
            {
                GameObject obj = GameObject.Instantiate(prefab);
                return obj;
            }
        }

        public void ReturnObject(GameObject obj)
        {
            obj.SetActive(false);
            pool.Enqueue(obj);
        }
    }
}