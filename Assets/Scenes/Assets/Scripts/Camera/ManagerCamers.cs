using Howitzer;
using UnityEngine;

public class ManagerCamers : MonoBehaviour
{
    [SerializeField] private Camera _plauerCamera;
    [SerializeField] private FollowBullet _bulletCamera;
    [SerializeField] private TimeController _timeController;
    [SerializeField] private PlayerZoom _playerZoom;

    private Projectile _bullet;

    private void Start()
    {
        TurnPlayerCamera();
    }

    public void WatchingBullet()
    {
        if (!_playerZoom.CheckZoom()) return; // ������ �� ����� ������ ���� ��� ���

        _plauerCamera.gameObject.SetActive(false);
        _bulletCamera.gameObject.SetActive(true);
        _playerZoom.DisableZoomUI(); // ��������� zoomImage ��� ������������ ������
    }

    public void GetBullet(Projectile bullet)
    {
        if (_bullet != null)
        {
            _bullet.Crashed -= TurnPlayerCamera;
        }

        _bullet = bullet;
        _bullet.Crashed += TurnPlayerCamera;
    }

    private void TurnPlayerCamera()
    {
        _bulletCamera.ReturnStartPosition();
        _plauerCamera.gameObject.SetActive(true);
        _bulletCamera.gameObject.SetActive(false);

        _timeController.RestoreNormalTime();

        if (_bullet != null)
        {
            _bullet.Crashed -= TurnPlayerCamera;
        }


        if (_playerZoom.CheckZoom())
        {
            _playerZoom.EnableZoomUI(); // �������� zoomImage �������, ���� ��� �������
        }
    }
}
