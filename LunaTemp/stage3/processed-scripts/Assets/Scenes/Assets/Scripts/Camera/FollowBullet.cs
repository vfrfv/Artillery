using System;
using UnityEngine;

public class FollowBullet : MonoBehaviour
{
    [SerializeField] private float _smoothSpeed = 5f; 
    [SerializeField] private Vector3 _offset; 

    private GameObject _bullet;
    private Vector3 _startPosition;

    private void Awake()
    {
        _startPosition = transform.position; 
    }

    void LateUpdate()
    {
        if (_bullet == null)
            return;

        Vector3 desiredPosition = _bullet.transform.position + _offset;
        transform.position = Vector3.Lerp(transform.position, desiredPosition, _smoothSpeed * Time.deltaTime);
        transform.LookAt(_bullet.transform);
    }

    public void ReturnStartPosition()
    {
        transform.position = _startPosition;
    }

    public void GetBullet(GameObject bullet)
    {
        _bullet = bullet;
    }
}
