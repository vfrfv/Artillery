using UnityEngine;

public class TitnSprite : MonoBehaviour
{
    [SerializeField] private GameObject _tank;

    private Camera _camera;
    private float _degree = 180;
    public float offsetDistance = 0.5f; // �������� ����� � ������
    public float heightOffset = 0.2f;   // �������� ���� ��������

    private void OnEnable()
    {
        _camera = Camera.main;
    }

    private void LateUpdate()
    {
        if (_camera == null || _tank == null) return;

        // ����������� �� �������� (�����) � ������
        Vector3 directionToCamera = (_camera.transform.position - _tank.transform.position).normalized;

        // ��������� ������ ����� � ������, �� ����� ���������
        Vector3 newPosition = _tank.transform.position + directionToCamera * offsetDistance;

        // ��������� �������� �����
        newPosition.y += heightOffset;

        // ������������� ����� �������
        transform.position = newPosition;

        // ������������ ������ � ������
        transform.LookAt(_camera.transform.position);
        transform.Rotate(0, _degree, 0);
    }
}
