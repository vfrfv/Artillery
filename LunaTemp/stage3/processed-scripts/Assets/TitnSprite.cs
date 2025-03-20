using UnityEngine;

public class TitnSprite : MonoBehaviour
{
    [SerializeField] private GameObject _tank;

    private Camera _camera;
    private float _degree = 180;
    public float offsetDistance = 0.5f; // Смещение ближе к камере
    public float heightOffset = 0.2f;   // Смещение выше родителя

    private void OnEnable()
    {
        _camera = Camera.main;
    }

    private void LateUpdate()
    {
        if (_camera == null || _tank == null) return;

        // Направление от родителя (танка) к камере
        Vector3 directionToCamera = (_camera.transform.position - _tank.transform.position).normalized;

        // Размещаем объект ближе к камере, но перед родителем
        Vector3 newPosition = _tank.transform.position + directionToCamera * offsetDistance;

        // Добавляем смещение вверх
        newPosition.y += heightOffset;

        // Устанавливаем новую позицию
        transform.position = newPosition;

        // Поворачиваем объект к камере
        transform.LookAt(_camera.transform.position);
        transform.Rotate(0, _degree, 0);
    }
}
