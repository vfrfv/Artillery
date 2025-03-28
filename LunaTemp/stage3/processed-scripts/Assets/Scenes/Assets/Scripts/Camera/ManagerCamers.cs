using Howitzer;
using UnityEngine;

public class ManagerCamers : MonoBehaviour
{
    [SerializeField] private Camera _plauerCamera;
    [SerializeField] private FollowBullet _bulletCamera;
    [SerializeField] private TimeController _timeController;
    [SerializeField] private PlayerZoom _playerZoom;

    private Projectile _bullet;
    private bool _forceBulletCamera = false; // Новый флаг для Shoot2

    private void Start()
    {
        TurnPlayerCamera();
    }

    public void WatchingBullet()
    {
        // Следим за пулей только если зум был ИЛИ включен флаг Shoot2
        if (!_playerZoom.CheckZoom() && !_forceBulletCamera) return;

        _plauerCamera.gameObject.SetActive(false);
        _bulletCamera.gameObject.SetActive(true);
        _playerZoom.DisableZoomUI(); // Выключаем zoomImage при переключении камеры
    }

    public void GetBullet(Projectile bullet, bool forceBulletCamera = false)
    {
        if (_bullet != null)
        {
            _bullet.Crashed -= TurnPlayerCamera;
        }

        _bullet = bullet;
        _bullet.Crashed += TurnPlayerCamera;

        _forceBulletCamera = forceBulletCamera; // Сохраняем флаг для Shoot2
    }

    private void TurnPlayerCamera()
    {
        _bulletCamera.ReturnStartPosition();
        _plauerCamera.gameObject.SetActive(true);
        _bulletCamera.gameObject.SetActive(false);
        _forceBulletCamera = false; // Сбрасываем флаг

        _timeController.RestoreNormalTime();

        if (_bullet != null)
        {
            _bullet.Crashed -= TurnPlayerCamera;
        }

        if (_playerZoom.CheckZoom())
        {
            _playerZoom.EnableZoomUI(); // Включаем zoomImage обратно, если зум активен
        }
    }
}
