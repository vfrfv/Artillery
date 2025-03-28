if ( TRACE ) { TRACE( JSON.parse( '["BehaviourAI.TankAI#IsAlive#get","BehaviourAI.TankAI#init","BehaviourAI.TankAI#SetTargets","BehaviourAI.TankAI#Start","BehaviourAI.TankAI#Update","BehaviourAI.TankAI#ShowHover","BehaviourAI.TankAI#ShowSign","BehaviourAI.TankAI#DisableTank","BehaviourAI.TankAI#MoveTowardsTarget","BehaviourAI.TankAI#RotateTank","BehaviourAI.TankAI#IsTankFacingTarget","BehaviourAI.TankAI#IsPathBlocked","BehaviourAI.TankAI#ChooseNextTarget","Bootstraps.Bootstrap#OnEnable","Bootstraps.EnemySpawnBootstrap#init","Bootstraps.EnemySpawnBootstrap#ctor","Bootstraps.EnemySpawnBootstrap#StartSpawnEnemy","Bootstraps.EnemySpawnBootstrap#IsStartSpawnEnd","Bootstraps.EnemySpawnBootstrap#IsAllSpawnEnd","Bootstraps.ScenarioGame#OnEnable","Bootstraps.ScenarioGame#OnDisable","Bootstraps.ScenarioGame#Initialize","Bootstraps.ScenarioGame#StartSpawnEnemy","Bootstraps.ScenarioGame#ShowEndCard","CFX_AutoDestructShuriken#OnEnable","CFX_AutoDestructShuriken#CheckIfAlive","CFX_LightIntensityFade#init","CFX_LightIntensityFade#Start","CFX_LightIntensityFade#OnEnable","CFX_LightIntensityFade#Update","CFX_SpawnSystem#AllObjectsLoaded#get","CFX_SpawnSystem#GetNextObject","CFX_SpawnSystem#PreloadObject","CFX_SpawnSystem#UnloadObjects","CFX_SpawnSystem#init","CFX_SpawnSystem#addObjectToPool","CFX_SpawnSystem#removeObjectsFromPool","CFX_SpawnSystem#increasePoolCursor","CFX_SpawnSystem#Awake","CFX_SpawnSystem#Start","Cross#OnEnable","Cross#ScaleAndDisable","Cross#ScaleOverTime","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","Joystick#Horizontal#get","Joystick#Vertical#get","Joystick#Direction#get","Joystick#HandleRange#get","Joystick#HandleRange#set","Joystick#DeadZone#get","Joystick#DeadZone#set","Joystick#AxisOptions#get","Joystick#AxisOptions#set","Joystick#SnapX#get","Joystick#SnapX#set","Joystick#SnapY#get","Joystick#SnapY#set","Joystick#init","Joystick#Start","Joystick#OnPointerDown","Joystick#OnDrag","Joystick#HandleInput","Joystick#FormatInput","Joystick#SnapFloat","Joystick#OnPointerUp","Joystick#ScreenPointToAnchoredPosition","ExclamationMark#init","ExclamationMark#Awake","ExclamationMark#OnEnable","ExclamationMark#SwitchOff","ExclamationMark#LateUpdate","Fabric.TanksFabric#Tanks#get","Fabric.TanksFabric#init","Fabric.TanksFabric#Awake","Fabric.TanksFabric#Spawn","FollowBullet#init","FollowBullet#Awake","FollowBullet#LateUpdate","FollowBullet#ReturnStartPosition","FollowBullet#GetBullet","Guidance#Update","HandAnimation#init","HandAnimation#Start","HandAnimation#Update","Howitzer.LookAtCrosshair#init","Howitzer.LookAtCrosshair#Start","Howitzer.LookAtCrosshair#Update","Howitzer.LookAtCrosshair#LookAtJoystickMovement","Howitzer.LookAtReticle#init","Howitzer.LookAtReticle#Start","Howitzer.LookAtReticle#OnEnable","Howitzer.LookAtReticle#OnDisable","Howitzer.LookAtReticle#Update","Howitzer.LookAtReticle#HandleZoom","Howitzer.LookAtReticle#RotateTowardsReticle","Howitzer.LookAtReticle#SmoothReturnToInitial","Howitzer.ObjectPoolShooting#ctor","Howitzer.ObjectPoolShooting#GetObject","Howitzer.ObjectPoolShooting#ReturnObject","Howitzer.PlayerShooting#init","Howitzer.PlayerShooting#Awake","Howitzer.PlayerShooting#OnEnable","Howitzer.PlayerShooting#OnDisable","Howitzer.PlayerShooting#Upgrade","Howitzer.PlayerShooting#SetZoomState","Howitzer.PlayerShooting#ChooseShootingRange","Howitzer.PlayerShooting#Shoot1","Howitzer.PlayerShooting#Shoot2","Howitzer.PlayerShooting#ShakeCamera","Howitzer.PlayerShootingCooldown#CanShoot#get","Howitzer.PlayerShootingCooldown#init","Howitzer.PlayerShootingCooldown#StartCooldown","Howitzer.PlayerShootingCooldown#CooldownRoutine","Howitzer.PlayerZoom#init","Howitzer.PlayerZoom#OnEnable","Howitzer.PlayerZoom#OnDisable","Howitzer.PlayerZoom#Update","Howitzer.PlayerZoom#OpenStore","Howitzer.PlayerZoom#Upgrade","Howitzer.PlayerZoom#ActivateTransitionToStore","Howitzer.PlayerZoom#CheckZoom","Howitzer.PlayerZoom#ChangeZoomForAirStrike","Howitzer.PlayerZoom#EnableZoomUI","Howitzer.PlayerZoom#DisableZoomUI","Howitzer.PlayerZoom#ToggleZoom","Howitzer.PlayerZoom#GetWorldPointFromCrosshair","Howitzer.PlayerZoom#ChangeFOV","Howitzer.PlayerZoom#RotateCameraWithJoystick","Howitzer.Projectile#Initialize","Howitzer.Projectile#OnCollisionEnter","Howitzer.Projectile#DestroyTank","Howitzer.Projectile#SpawnExplosionEffect","Howitzer.Projectile#ChangeTankColor","Indicatorr#init","Indicatorr#Awake","Indicatorr#Start","Indicatorr#OnEnable","Indicatorr#OnDisable","Indicatorr#FadeOut","InteractiveArt#init","InteractiveArt#Update","InteractiveArt#SwapArtPieces","InteractiveArt#AnimateSwap","JoystickPlayerExample#FixedUpdate","JoystickSetterExample#ModeChanged","JoystickSetterExample#AxisChanged","JoystickSetterExample#SnapX","JoystickSetterExample#SnapY","JoystickSetterExample#Update","ManagerCamers#init","ManagerCamers#Start","ManagerCamers#WatchingBullet","ManagerCamers#GetBullet","ManagerCamers#TurnPlayerCamera","MissPoint#IsTank#get","MissPoint#Update","MissPoint#Cast","Pumping#Awake","Pumping#OnEnable","Pumping#OnDisable","Pumping#RemoveSprites","Pumping#StartPumping","Pumping#TurnPumpingCamera","Pumping#TurnPlayerCamera","Pumping#SetNormalPositionArte","Shopping#OnEnable","Shopping#OnDisable","Shopping#ShowShopping","Shopping#OffShoping","Shopping#ShowInventory","TimeController#init","TimeController#StartSlowMotion","TimeController#RestoreNormalTime","TitnSprite#init","TitnSprite#OnEnable","TitnSprite#Initialize","TitnSprite#LateUpdate","TutorialHand#init","TutorialHand#Start","TutorialHand#StartHandMovement","TutorialHand#Update","TutorialHand#HideHand","TutorialHand2#init","TutorialHand2#Start","TutorialHand2#Update","TutorialHand2#FinishTraining","UI.ButtonPulse#init","UI.ButtonPulse#OnEnable","UI.ButtonPulse#OnDisable","UI.CrosshairMovement#init","UI.CrosshairMovement#Start","UI.CrosshairMovement#Update","UI.CrosshairMovement#ClampToCanvas","UI.EndCardAnimation#init","UI.EndCardAnimation#OnEnable","UI.EndCardAnimation#PlayAnimation","UI.EndCardAnimation#OnDisable","UI.EndCardAnimation#ResizeText","UI.PlayerUIController#Start","UI.PlayerUIController#ShowCross","UI.PlayerUIController#ShowMark","UI.PlayerUIController#FinishTraining","UI.TankKillCounter#KillCount#get","UI.TankKillCounter#NotifyTankDestroyed","UI.TankKillStatistics#init","UI.TankKillStatistics#Update","DynamicJoystick#MoveThreshold#get","DynamicJoystick#MoveThreshold#set","DynamicJoystick#init","DynamicJoystick#Start","DynamicJoystick#OnPointerDown","DynamicJoystick#OnPointerUp","DynamicJoystick#HandleInput","FloatingJoystick#init","FloatingJoystick#Start","FloatingJoystick#OnPointerDown","FloatingJoystick#OnPointerUp","VariableJoystick#MoveThreshold#get","VariableJoystick#MoveThreshold#set","VariableJoystick#init","VariableJoystick#SetMode","VariableJoystick#Start","VariableJoystick#OnPointerDown","VariableJoystick#OnPointerUp","VariableJoystick#HandleInput"]' ) ); }
/**
 * @version 1.0.9218.20263
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AxisOptions start.*/
    Bridge.define("AxisOptions", {
        $kind: 6,
        statics: {
            fields: {
                Both: 0,
                Horizontal: 1,
                Vertical: 2
            }
        }
    });
    /*AxisOptions end.*/

    /*BehaviourAI.TankAI start.*/
    Bridge.define("BehaviourAI.TankAI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            stopDistance: 0,
            rotationSpeed: 0,
            moveSpeed: 0,
            _exclamationMark: null,
            _guidance: null,
            avoidanceDistance: 0,
            tankLayer: null,
            _targets: null,
            _currentTargetIndex: 0,
            _currentTarget: null,
            _isDisabled: false,
            _isWaiting: false
        },
        props: {
            IsAlive: {
                get: function () {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#IsAlive#get", this ); }

                    return !this._isDisabled;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#init", this ); }

                this.tankLayer = new UnityEngine.LayerMask();
                this.stopDistance = 10.0;
                this.rotationSpeed = 2.0;
                this.moveSpeed = 3.0;
                this.avoidanceDistance = 2.0;
            }
        },
        methods: {
            /*BehaviourAI.TankAI.SetTargets start.*/
            SetTargets: function (newTargets) {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#SetTargets", this ); }

                this._targets = newTargets;
            },
            /*BehaviourAI.TankAI.SetTargets end.*/

            /*BehaviourAI.TankAI.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#Start", this ); }

                if (this._targets == null || this._targets.length === 0) {
                    UnityEngine.Debug.LogError$2("No targets assigned to the TankAI script!");
                    return;
                }

                // Начинаем движение с первой цели
                this._currentTargetIndex = 0;
                this._currentTarget = this._targets[this._currentTargetIndex];
            },
            /*BehaviourAI.TankAI.Start end.*/

            /*BehaviourAI.TankAI.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#Update", this ); }

                if (this._isDisabled || UnityEngine.Component.op_Equality(this._currentTarget, null)) {
                    return;
                }

                UnityEngine.Debug.DrawRay$1(this.transform.position, this.transform.forward.$clone().clone().scale( this.avoidanceDistance ), new pc.Color( 1, 0, 0, 1 ));

                if (this.IsPathBlocked()) {
                    // Путь заблокирован — останавливаем танк
                    this._isWaiting = true;
                    return;
                } else {
                    // Путь освобожден — продолжаем движение
                    this._isWaiting = false;
                }

                this.RotateTank();

                if (this.IsTankFacingTarget()) {
                    this.MoveTowardsTarget();
                }
            },
            /*BehaviourAI.TankAI.Update end.*/

            /*BehaviourAI.TankAI.ShowHover start.*/
            ShowHover: function () {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#ShowHover", this ); }

                this._guidance.gameObject.SetActive(true);
            },
            /*BehaviourAI.TankAI.ShowHover end.*/

            /*BehaviourAI.TankAI.ShowSign start.*/
            ShowSign: function () {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#ShowSign", this ); }

                this._exclamationMark.gameObject.SetActive(true);
            },
            /*BehaviourAI.TankAI.ShowSign end.*/

            /*BehaviourAI.TankAI.DisableTank start.*/
            DisableTank: function () {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#DisableTank", this ); }

                this._isDisabled = true;
                UnityEngine.Debug.Log$1(System.String.format("{0} has been disabled.", [this.gameObject.name]));
            },
            /*BehaviourAI.TankAI.DisableTank end.*/

            /*BehaviourAI.TankAI.MoveTowardsTarget start.*/
            MoveTowardsTarget: function () {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#MoveTowardsTarget", this ); }

                var direction = (this._currentTarget.position.$clone().sub( this.transform.position )).clone().normalize().$clone();
                var distance = pc.Vec3.distance( this.transform.position, this._currentTarget.position );

                if (distance > this.stopDistance) {
                    // Двигаемся к цели, если путь свободен
                    if (!this._isWaiting) {
                        this.transform.position = this.transform.position.$clone().add( direction.$clone().clone().scale( this.moveSpeed ).clone().scale( UnityEngine.Time.deltaTime ) );
                    }
                } else {
                    // Если достигли цели, выбираем следующую
                    this.ChooseNextTarget();
                }
            },
            /*BehaviourAI.TankAI.MoveTowardsTarget end.*/

            /*BehaviourAI.TankAI.RotateTank start.*/
            RotateTank: function () {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#RotateTank", this ); }

                var direction = (this._currentTarget.position.$clone().sub( this.transform.position )).clone().normalize().$clone();
                var targetRotation = new pc.Quat().setLookAt( new pc.Vec3( direction.x, 0, direction.z ), pc.Vec3.UP );
                this.transform.rotation = new pc.Quat().slerp( this.transform.rotation, targetRotation, this.rotationSpeed * UnityEngine.Time.deltaTime );
            },
            /*BehaviourAI.TankAI.RotateTank end.*/

            /*BehaviourAI.TankAI.IsTankFacingTarget start.*/
            IsTankFacingTarget: function () {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#IsTankFacingTarget", this ); }

                var directionToTarget = (this._currentTarget.position.$clone().sub( this.transform.position )).clone().normalize().$clone();
                var dotProduct = this.transform.forward.dot( directionToTarget );

                return dotProduct > 0.99;
            },
            /*BehaviourAI.TankAI.IsTankFacingTarget end.*/

            /*BehaviourAI.TankAI.IsPathBlocked start.*/
            IsPathBlocked: function () {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#IsPathBlocked", this ); }

                var hit = { v : new UnityEngine.RaycastHit() };

                // Проверяем, заблокирован ли путь перед танком
                if (UnityEngine.Physics.Raycast$3(this.transform.position, this.transform.forward, hit, this.avoidanceDistance)) {
                    // Путь заблокирован, возвращаем true
                    return true;
                }

                // Путь свободен
                return false;
            },
            /*BehaviourAI.TankAI.IsPathBlocked end.*/

            /*BehaviourAI.TankAI.ChooseNextTarget start.*/
            ChooseNextTarget: function () {
if ( TRACE ) { TRACE( "BehaviourAI.TankAI#ChooseNextTarget", this ); }

                if (this._targets.length === 0) {
                    return;
                }

                // Увеличиваем индекс цели, чтобы двигаться по кругу
                this._currentTargetIndex = (((this._currentTargetIndex + 1) | 0)) % this._targets.length;
                this._currentTarget = this._targets[this._currentTargetIndex];
            },
            /*BehaviourAI.TankAI.ChooseNextTarget end.*/


        }
    });
    /*BehaviourAI.TankAI end.*/

    /*Bootstraps.Bootstrap start.*/
    Bridge.define("Bootstraps.Bootstrap", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tanksFabric: null,
            scenarioGame: null,
            _enemySpawnBootstrap: null
        },
        methods: {
            /*Bootstraps.Bootstrap.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Bootstraps.Bootstrap#OnEnable", this ); }

                this._enemySpawnBootstrap = new Bootstraps.EnemySpawnBootstrap(10, 2, this.tanksFabric);
                this.scenarioGame.Initialize(this._enemySpawnBootstrap);

                //Luna.Unity.LifeCycle.GameStarted();
            },
            /*Bootstraps.Bootstrap.OnEnable end.*/


        }
    });
    /*Bootstraps.Bootstrap end.*/

    /*Bootstraps.EnemySpawnBootstrap start.*/
    Bridge.define("Bootstraps.EnemySpawnBootstrap", {
        statics: {
            events: {
                EndSpawnTanks: null
            }
        },
        fields: {
            _maxCountTanks: 0,
            _maxStartCountTanks: 0,
            _currentCountTanks: 0,
            _tanksFabric: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Bootstraps.EnemySpawnBootstrap#init", this ); }

                this._currentCountTanks = 0;
            },
            ctor: function (maxCountTanks, maxStartCountTanks, tanksFabric) {
if ( TRACE ) { TRACE( "Bootstraps.EnemySpawnBootstrap#ctor", this ); }

                this.$initialize();
                this._maxCountTanks = maxCountTanks;
                this._maxStartCountTanks = maxStartCountTanks;
                this._tanksFabric = tanksFabric;
            }
        },
        methods: {
            /*Bootstraps.EnemySpawnBootstrap.StartSpawnEnemy start.*/
            StartSpawnEnemy: function () {
if ( TRACE ) { TRACE( "Bootstraps.EnemySpawnBootstrap#StartSpawnEnemy", this ); }

                if (this._currentCountTanks <= this._maxStartCountTanks) {
                    this._tanksFabric.Spawn();
                    this._currentCountTanks = (this._currentCountTanks + 1) | 0;
                } else {
                    !Bridge.staticEquals(Bootstraps.EnemySpawnBootstrap.EndSpawnTanks, null) ? Bootstraps.EnemySpawnBootstrap.EndSpawnTanks() : null;
                }

            },
            /*Bootstraps.EnemySpawnBootstrap.StartSpawnEnemy end.*/

            /*Bootstraps.EnemySpawnBootstrap.IsStartSpawnEnd start.*/
            IsStartSpawnEnd: function () {
if ( TRACE ) { TRACE( "Bootstraps.EnemySpawnBootstrap#IsStartSpawnEnd", this ); }

                return this._currentCountTanks <= this._maxStartCountTanks;
            },
            /*Bootstraps.EnemySpawnBootstrap.IsStartSpawnEnd end.*/

            /*Bootstraps.EnemySpawnBootstrap.IsAllSpawnEnd start.*/
            IsAllSpawnEnd: function () {
if ( TRACE ) { TRACE( "Bootstraps.EnemySpawnBootstrap#IsAllSpawnEnd", this ); }

                return this._currentCountTanks <= this._maxCountTanks;
            },
            /*Bootstraps.EnemySpawnBootstrap.IsAllSpawnEnd end.*/


        }
    });
    /*Bootstraps.EnemySpawnBootstrap end.*/

    /*Bootstraps.ScenarioGame start.*/
    Bridge.define("Bootstraps.ScenarioGame", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            endCard: null,
            _audioSource: null,
            _enemySpawnBootstrap: null
        },
        methods: {
            /*Bootstraps.ScenarioGame.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Bootstraps.ScenarioGame#OnEnable", this ); }

                UI.TankKillStatistics.addonStartCountTankKilled(Bridge.fn.cacheBind(this, this.ShowEndCard));
            },
            /*Bootstraps.ScenarioGame.OnEnable end.*/

            /*Bootstraps.ScenarioGame.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Bootstraps.ScenarioGame#OnDisable", this ); }

                UI.TankKillStatistics.removeonStartCountTankKilled(Bridge.fn.cacheBind(this, this.ShowEndCard));
            },
            /*Bootstraps.ScenarioGame.OnDisable end.*/

            /*Bootstraps.ScenarioGame.Initialize start.*/
            Initialize: function (enemySpawnBootstrap) {
if ( TRACE ) { TRACE( "Bootstraps.ScenarioGame#Initialize", this ); }

                this._enemySpawnBootstrap = enemySpawnBootstrap;

                this.StartCoroutine$1(this.StartSpawnEnemy());
            },
            /*Bootstraps.ScenarioGame.Initialize end.*/

            /*Bootstraps.ScenarioGame.StartSpawnEnemy start.*/
            StartSpawnEnemy: function () {
if ( TRACE ) { TRACE( "Bootstraps.ScenarioGame#StartSpawnEnemy", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this._enemySpawnBootstrap.IsStartSpawnEnd() ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    this._enemySpawnBootstrap.StartSpawnEnemy();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Bootstraps.ScenarioGame.StartSpawnEnemy end.*/

            /*Bootstraps.ScenarioGame.ShowEndCard start.*/
            ShowEndCard: function () {
if ( TRACE ) { TRACE( "Bootstraps.ScenarioGame#ShowEndCard", this ); }

                this.endCard.SetActive(true);
                this._audioSource.Stop();

                //Luna.Unity.Playable.InstallFullGame();
                //Luna.Unity.LifeCycle.GameEnded();
            },
            /*Bootstraps.ScenarioGame.ShowEndCard end.*/


        }
    });
    /*Bootstraps.ScenarioGame end.*/

    /*CFX_AutoDestructShuriken start.*/
    Bridge.define("CFX_AutoDestructShuriken", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            OnlyDeactivate: false
        },
        methods: {
            /*CFX_AutoDestructShuriken.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "CFX_AutoDestructShuriken#OnEnable", this ); }

                this.StartCoroutine$2("CheckIfAlive");
            },
            /*CFX_AutoDestructShuriken.OnEnable end.*/

            /*CFX_AutoDestructShuriken.CheckIfAlive start.*/
            CheckIfAlive: function () {
if ( TRACE ) { TRACE( "CFX_AutoDestructShuriken#CheckIfAlive", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    if (!this.GetComponent(UnityEngine.ParticleSystem).IsAlive(true)) {
                                            if (this.OnlyDeactivate) {
                                                this.gameObject.SetActive(false);
                                            } else {
                                                UnityEngine.Object.Destroy(this.gameObject);
                                            }
                                            $step = 3;
                                            continue;
                                        }

                                        $step = 0;
                                        continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CFX_AutoDestructShuriken.CheckIfAlive end.*/


        }
    });
    /*CFX_AutoDestructShuriken end.*/

    /*CFX_LightIntensityFade start.*/
    Bridge.define("CFX_LightIntensityFade", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            duration: 0,
            delay: 0,
            /**
             * @instance
             * @public
             * @memberof CFX_LightIntensityFade
             * @default 0.0
             * @type number
             */
            finalIntensity: 0,
            baseIntensity: 0,
            autodestruct: false,
            p_lifetime: 0,
            p_delay: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CFX_LightIntensityFade#init", this ); }

                this.duration = 1.0;
                this.delay = 0.0;
                this.finalIntensity = 0.0;
                this.p_lifetime = 0.0;
            }
        },
        methods: {
            /*CFX_LightIntensityFade.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CFX_LightIntensityFade#Start", this ); }

                this.baseIntensity = this.GetComponent(UnityEngine.Light).intensity;
            },
            /*CFX_LightIntensityFade.Start end.*/

            /*CFX_LightIntensityFade.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "CFX_LightIntensityFade#OnEnable", this ); }

                this.p_lifetime = 0.0;
                this.p_delay = this.delay;
                if (this.delay > 0) {
                    this.GetComponent(UnityEngine.Light).enabled = false;
                }
            },
            /*CFX_LightIntensityFade.OnEnable end.*/

            /*CFX_LightIntensityFade.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CFX_LightIntensityFade#Update", this ); }

                if (this.p_delay > 0) {
                    this.p_delay -= UnityEngine.Time.deltaTime;
                    if (this.p_delay <= 0) {
                        this.GetComponent(UnityEngine.Light).enabled = true;
                    }
                    return;
                }

                if (this.p_lifetime / this.duration < 1.0) {
                    this.GetComponent(UnityEngine.Light).intensity = pc.math.lerp(this.baseIntensity, this.finalIntensity, this.p_lifetime / this.duration);
                    this.p_lifetime += UnityEngine.Time.deltaTime;
                } else {
                    if (this.autodestruct) {
                        UnityEngine.Object.Destroy(this.gameObject);
                    }
                }

            },
            /*CFX_LightIntensityFade.Update end.*/


        }
    });
    /*CFX_LightIntensityFade end.*/

    /*CFX_SpawnSystem start.*/
    Bridge.define("CFX_SpawnSystem", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            },
            props: {
                /**
                 * Gets a value indicating whether all objects defined in the Editor are loaded or not.
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof CFX_SpawnSystem
                 * @function AllObjectsLoaded
                 * @type boolean
                 */
                AllObjectsLoaded: {
                    get: function () {
if ( TRACE ) { TRACE( "CFX_SpawnSystem#AllObjectsLoaded#get", this ); }

                        return CFX_SpawnSystem.instance.allObjectsLoaded;
                    }
                }
            },
            methods: {
                /*CFX_SpawnSystem.GetNextObject:static start.*/
                /**
                 * Get the next available preloaded Object.
                 *
                 * @static
                 * @public
                 * @this CFX_SpawnSystem
                 * @memberof CFX_SpawnSystem
                 * @param   {UnityEngine.GameObject}    sourceObj         The source Object from which to get a preloaded copy.
                 * @param   {boolean}                   activateObject    Activates the object before returning it.
                 * @return  {UnityEngine.GameObject}                      The next available preloaded Object.
                 */
                GetNextObject: function (sourceObj, activateObject) {
if ( TRACE ) { TRACE( "CFX_SpawnSystem#GetNextObject", this ); }

                    if (activateObject === void 0) { activateObject = true; }
                    var uniqueId = sourceObj.GetInstanceID();

                    if (!CFX_SpawnSystem.instance.poolCursors.containsKey(uniqueId)) {
                        UnityEngine.Debug.LogError$2("[CFX_SpawnSystem.GetNextObject()] Object hasn't been preloaded: " + (sourceObj.name || "") + " (ID:" + uniqueId + ")\n", CFX_SpawnSystem.instance);
                        return null;
                    }

                    var cursor = CFX_SpawnSystem.instance.poolCursors.getItem(uniqueId);
                    var returnObj = null;
                    if (CFX_SpawnSystem.instance.onlyGetInactiveObjects) {
                        var loop = cursor;
                        while (true) {
                            returnObj = CFX_SpawnSystem.instance.instantiatedObjects.getItem(uniqueId).getItem(cursor);
                            CFX_SpawnSystem.instance.increasePoolCursor(uniqueId);
                            cursor = CFX_SpawnSystem.instance.poolCursors.getItem(uniqueId);

                            if (UnityEngine.GameObject.op_Inequality(returnObj, null) && !returnObj.activeSelf) {
                                break;
                            }

                            //complete loop: no active instance available
                            if (cursor === loop) {
                                if (CFX_SpawnSystem.instance.instantiateIfNeeded) {
                                    UnityEngine.Debug.Log$1("[CFX_SpawnSystem.GetNextObject()] A new instance has been created for \"" + (sourceObj.name || "") + "\" because no active instance were found in the pool.\n", CFX_SpawnSystem.instance);
                                    CFX_SpawnSystem.PreloadObject(sourceObj);
                                    var list = CFX_SpawnSystem.instance.instantiatedObjects.getItem(uniqueId);
                                    returnObj = list.getItem(((list.Count - 1) | 0));
                                    break;
                                } else {
                                    UnityEngine.Debug.LogWarning$1("[CFX_SpawnSystem.GetNextObject()] There are no active instances available in the pool for \"" + (sourceObj.name || "") + "\"\nYou may need to increase the preloaded object count for this prefab?", CFX_SpawnSystem.instance);
                                    return null;
                                }
                            }
                        }
                    } else {
                        returnObj = CFX_SpawnSystem.instance.instantiatedObjects.getItem(uniqueId).getItem(cursor);
                        CFX_SpawnSystem.instance.increasePoolCursor(uniqueId);
                    }

                    if (activateObject && UnityEngine.GameObject.op_Inequality(returnObj, null)) {
                        returnObj.SetActive(true);
                    }

                    return returnObj;
                },
                /*CFX_SpawnSystem.GetNextObject:static end.*/

                /*CFX_SpawnSystem.PreloadObject:static start.*/
                /**
                 * Preloads an object a number of times in the pool.
                 *
                 * @static
                 * @public
                 * @this CFX_SpawnSystem
                 * @memberof CFX_SpawnSystem
                 * @param   {UnityEngine.GameObject}    sourceObj    The source Object.
                 * @param   {number}                    poolSize     The number of times it will be instantiated in the pool (i.e. the max number of same object that would appear simultaneously in your Scene).
                 * @return  {void}
                 */
                PreloadObject: function (sourceObj, poolSize) {
if ( TRACE ) { TRACE( "CFX_SpawnSystem#PreloadObject", this ); }

                    if (poolSize === void 0) { poolSize = 1; }
                    CFX_SpawnSystem.instance.addObjectToPool(sourceObj, poolSize);
                },
                /*CFX_SpawnSystem.PreloadObject:static end.*/

                /*CFX_SpawnSystem.UnloadObjects:static start.*/
                /**
                 * Unloads all the preloaded objects from a source Object.
                 *
                 * @static
                 * @public
                 * @this CFX_SpawnSystem
                 * @memberof CFX_SpawnSystem
                 * @param   {UnityEngine.GameObject}    sourceObj    Source object.
                 * @return  {void}
                 */
                UnloadObjects: function (sourceObj) {
if ( TRACE ) { TRACE( "CFX_SpawnSystem#UnloadObjects", this ); }

                    CFX_SpawnSystem.instance.removeObjectsFromPool(sourceObj);
                },
                /*CFX_SpawnSystem.UnloadObjects:static end.*/


            }
        },
        fields: {
            objectsToPreload: null,
            objectsToPreloadTimes: null,
            hideObjectsInHierarchy: false,
            spawnAsChildren: false,
            onlyGetInactiveObjects: false,
            instantiateIfNeeded: false,
            allObjectsLoaded: false,
            instantiatedObjects: null,
            poolCursors: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CFX_SpawnSystem#init", this ); }

                this.objectsToPreload = System.Array.init(0, null, UnityEngine.GameObject);
                this.objectsToPreloadTimes = System.Array.init(0, 0, System.Int32);
                this.hideObjectsInHierarchy = false;
                this.spawnAsChildren = true;
                this.onlyGetInactiveObjects = false;
                this.instantiateIfNeeded = false;
                this.instantiatedObjects = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Collections.Generic.List$1(UnityEngine.GameObject))).ctor();
                this.poolCursors = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Int32)).ctor();
            }
        },
        methods: {
            /*CFX_SpawnSystem.addObjectToPool start.*/
            addObjectToPool: function (sourceObject, number) {
if ( TRACE ) { TRACE( "CFX_SpawnSystem#addObjectToPool", this ); }

                var $t, $t1;
                var uniqueId = sourceObject.GetInstanceID();

                //Add new entry if it doesn't exist
                if (!this.instantiatedObjects.containsKey(uniqueId)) {
                    this.instantiatedObjects.add(uniqueId, new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor());
                    this.poolCursors.add(uniqueId, 0);
                }

                //Add the new objects
                var newObj;
                for (var i = 0; i < number; i = (i + 1) | 0) {
                    newObj = UnityEngine.Object.Instantiate(UnityEngine.GameObject, sourceObject);
                    newObj.SetActive(false);

                    //Set flag to not destruct object
                    var autoDestruct = newObj.GetComponentsInChildren(CFX_AutoDestructShuriken, true);
                    $t = Bridge.getEnumerator(autoDestruct);
                    try {
                        while ($t.moveNext()) {
                            var ad = $t.Current;
                            ad.OnlyDeactivate = true;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    //Set flag to not destruct light
                    var lightIntensity = newObj.GetComponentsInChildren(CFX_LightIntensityFade, true);
                    $t1 = Bridge.getEnumerator(lightIntensity);
                    try {
                        while ($t1.moveNext()) {
                            var li = $t1.Current;
                            li.autodestruct = false;
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }

                    this.instantiatedObjects.getItem(uniqueId).add(newObj);

                    if (this.hideObjectsInHierarchy) {
                        newObj.hideFlags = UnityEngine.HideFlags.HideInHierarchy;
                    }

                    if (this.spawnAsChildren) {
                        newObj.transform.parent = this.transform;
                    }
                }
            },
            /*CFX_SpawnSystem.addObjectToPool end.*/

            /*CFX_SpawnSystem.removeObjectsFromPool start.*/
            removeObjectsFromPool: function (sourceObject) {
if ( TRACE ) { TRACE( "CFX_SpawnSystem#removeObjectsFromPool", this ); }

                var uniqueId = sourceObject.GetInstanceID();

                if (!this.instantiatedObjects.containsKey(uniqueId)) {
                    UnityEngine.Debug.LogWarning$1("[CFX_SpawnSystem.removeObjectsFromPool()] There aren't any preloaded object for: " + (sourceObject.name || "") + " (ID:" + uniqueId + ")\n", this.gameObject);
                    return;
                }

                //Destroy all objects
                for (var i = (this.instantiatedObjects.getItem(uniqueId).Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var obj = this.instantiatedObjects.getItem(uniqueId).getItem(i);
                    this.instantiatedObjects.getItem(uniqueId).removeAt(i);
                    UnityEngine.Object.Destroy(obj);
                }

                //Remove pool entry
                this.instantiatedObjects.remove(uniqueId);
                this.poolCursors.remove(uniqueId);
            },
            /*CFX_SpawnSystem.removeObjectsFromPool end.*/

            /*CFX_SpawnSystem.increasePoolCursor start.*/
            increasePoolCursor: function (uniqueId) {
if ( TRACE ) { TRACE( "CFX_SpawnSystem#increasePoolCursor", this ); }

                CFX_SpawnSystem.instance.poolCursors.setItem(uniqueId, (CFX_SpawnSystem.instance.poolCursors.getItem(uniqueId) + 1) | 0);
                if (CFX_SpawnSystem.instance.poolCursors.getItem(uniqueId) >= CFX_SpawnSystem.instance.instantiatedObjects.getItem(uniqueId).Count) {
                    CFX_SpawnSystem.instance.poolCursors.setItem(uniqueId, 0);
                }
            },
            /*CFX_SpawnSystem.increasePoolCursor end.*/

            /*CFX_SpawnSystem.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CFX_SpawnSystem#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(CFX_SpawnSystem.instance, null)) {
                    UnityEngine.Debug.LogWarning$1("CFX_SpawnSystem: There should only be one instance of CFX_SpawnSystem per Scene!\n", this.gameObject);
                }

                CFX_SpawnSystem.instance = this;
            },
            /*CFX_SpawnSystem.Awake end.*/

            /*CFX_SpawnSystem.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CFX_SpawnSystem#Start", this ); }

                this.allObjectsLoaded = false;

                for (var i = 0; i < this.objectsToPreload.length; i = (i + 1) | 0) {
                    CFX_SpawnSystem.PreloadObject(this.objectsToPreload[i], this.objectsToPreloadTimes[i]);
                }

                this.allObjectsLoaded = true;
            },
            /*CFX_SpawnSystem.Start end.*/


        }
    });
    /*CFX_SpawnSystem end.*/

    /*Cross start.*/
    Bridge.define("Cross", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*Cross.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Cross#OnEnable", this ); }

                this.StartCoroutine$1(this.ScaleAndDisable());
            },
            /*Cross.OnEnable end.*/

            /*Cross.ScaleAndDisable start.*/
            ScaleAndDisable: function () {
if ( TRACE ) { TRACE( "Cross#ScaleAndDisable", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    targetScale,
                    duration,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.transform.localScale = pc.Vec3.ZERO.clone();
                                        targetScale = new pc.Vec3( 1, 1, 1 ).clone().scale( 1.2 );
                                        duration = 0.3;

                                        $enumerator.current = this.ScaleOverTime(targetScale, duration);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.ScaleOverTime(new pc.Vec3( 1, 1, 1 ), 0.2);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.gameObject.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Cross.ScaleAndDisable end.*/

            /*Cross.ScaleOverTime start.*/
            ScaleOverTime: function (targetScale, duration) {
if ( TRACE ) { TRACE( "Cross#ScaleOverTime", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startScale,
                    elapsed,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startScale = this.transform.localScale.$clone();
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.transform.localScale = new pc.Vec3().lerp( startScale, targetScale, elapsed / duration );
                                        elapsed += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.localScale = targetScale.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Cross.ScaleOverTime end.*/


        }
    });
    /*Cross end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Joystick start.*/
    Bridge.define("Joystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            handleRange: 0,
            deadZone: 0,
            axisOptions: 0,
            snapX: false,
            snapY: false,
            background: null,
            handle$1: null,
            baseRect: null,
            canvas: null,
            cam: null,
            input: null,
            startPosition: null
        },
        props: {
            Horizontal: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Horizontal#get", this ); }

                    return (this.snapX) ? this.SnapFloat(this.input.x, AxisOptions.Horizontal) : this.input.x;
                }
            },
            Vertical: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Vertical#get", this ); }

                    return (this.snapY) ? this.SnapFloat(this.input.y, AxisOptions.Vertical) : this.input.y;
                }
            },
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Direction#get", this ); }

                    return new pc.Vec2( this.Horizontal, this.Vertical );
                }
            },
            HandleRange: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#HandleRange#get", this ); }

                    return this.handleRange;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#HandleRange#set", this ); }

                    this.handleRange = Math.abs(value);
                }
            },
            DeadZone: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#DeadZone#get", this ); }

                    return this.deadZone;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#DeadZone#set", this ); }

                    this.deadZone = Math.abs(value);
                }
            },
            AxisOptions: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#get", this ); }

                    return this.AxisOptions;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#set", this ); }

                    this.axisOptions = value;
                }
            },
            SnapX: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapX#get", this ); }

                    return this.snapX;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapX#set", this ); }

                    this.snapX = value;
                }
            },
            SnapY: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapY#get", this ); }

                    return this.snapY;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapY#set", this ); }

                    this.snapY = value;
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Joystick#init", this ); }

                this.input = new UnityEngine.Vector2();
                this.startPosition = new UnityEngine.Vector3();
                this.handleRange = 1;
                this.deadZone = 0;
                this.axisOptions = AxisOptions.Both;
                this.snapX = false;
                this.snapY = false;
                this.input = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*Joystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Joystick#Start", this ); }

                this.startPosition = this.background.position.$clone();
                this.HandleRange = this.handleRange;
                this.DeadZone = this.deadZone;
                this.baseRect = this.GetComponent(UnityEngine.RectTransform);
                this.canvas = this.GetComponentInParent(UnityEngine.Canvas);

                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    UnityEngine.Debug.LogError$2("The Joystick is not placed inside a canvas");
                }

                var center = new pc.Vec2( 0.5, 0.5 );
                this.background.pivot = center.$clone();

                if (UnityEngine.Component.op_Equality(this.handle$1, null)) {
                    this.handle$1 = this.background.Find("Handle").GetComponent(UnityEngine.RectTransform);
                    if (UnityEngine.Component.op_Equality(this.handle$1, null)) {
                        UnityEngine.Debug.LogError$2("Handle could not be found!");
                    }
                }


                if (UnityEngine.Component.op_Inequality(this.handle$1, null)) {
                    this.handle$1.anchorMin = center.$clone();
                    this.handle$1.anchorMax = center.$clone();
                    this.handle$1.pivot = center.$clone();
                    this.handle$1.anchoredPosition = pc.Vec2.ZERO.clone();
                } else {
                    UnityEngine.Debug.LogError$2("Handle is not assigned!");
                }

            },
            /*Joystick.Start end.*/

            /*Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerDown", this ); }

                this.background.position = UnityEngine.Vector3.FromVector2(eventData.position.$clone()); // Центрируем джойстик под пальцем
                this.OnDrag(eventData);
            },
            /*Joystick.OnPointerDown end.*/

            /*Joystick.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnDrag", this ); }

                this.cam = null;
                if (this.canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                    this.cam = this.canvas.worldCamera;
                }

                var position = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.cam, this.background.position);
                var radius = this.background.sizeDelta.$clone().scale( 1.0 / ( 2 ) );
                this.input = (eventData.position.$clone().sub( position )).div( (radius.$clone().scale( this.canvas.scaleFactor )) );
                this.FormatInput();
                this.HandleInput(this.input.length(), this.input.clone().normalize(), radius, this.cam);
                this.handle$1.anchoredPosition = this.input.$clone().mul( radius ).scale( this.handleRange );
            },
            /*Joystick.OnDrag end.*/

            /*Joystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "Joystick#HandleInput", this ); }

                if (magnitude > this.deadZone) {
                    if (magnitude > 1) {
                        this.input = normalised.$clone();
                    }
                } else {
                    this.input = pc.Vec2.ZERO.clone();
                }
            },
            /*Joystick.HandleInput end.*/

            /*Joystick.FormatInput start.*/
            FormatInput: function () {
if ( TRACE ) { TRACE( "Joystick#FormatInput", this ); }

                if (this.axisOptions === AxisOptions.Horizontal) {
                    this.input = new pc.Vec2( this.input.x, 0.0 );
                } else {
                    if (this.axisOptions === AxisOptions.Vertical) {
                        this.input = new pc.Vec2( 0.0, this.input.y );
                    }
                }
            },
            /*Joystick.FormatInput end.*/

            /*Joystick.SnapFloat start.*/
            SnapFloat: function (value, snapAxis) {
if ( TRACE ) { TRACE( "Joystick#SnapFloat", this ); }

                if (value === 0) {
                    return value;
                }

                if (this.axisOptions === AxisOptions.Both) {
                    var angle = pc.Vec2.angle( this.input, pc.Vec2.UP.clone() );
                    if (snapAxis === AxisOptions.Horizontal) {
                        if (angle < 22.5 || angle > 157.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    } else if (snapAxis === AxisOptions.Vertical) {
                        if (angle > 67.5 && angle < 112.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    }
                    return value;
                } else {
                    if (value > 0) {
                        return 1;
                    }
                    if (value < 0) {
                        return -1;
                    }
                }
                return 0;
            },
            /*Joystick.SnapFloat end.*/

            /*Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerUp", this ); }

                this.input = pc.Vec2.ZERO.clone();
                this.handle$1.anchoredPosition = pc.Vec2.ZERO.clone();
                this.background.position = this.startPosition.$clone(); // Возвращаем джойстик на место
            },
            /*Joystick.OnPointerUp end.*/

            /*Joystick.ScreenPointToAnchoredPosition start.*/
            ScreenPointToAnchoredPosition: function (screenPosition) {
if ( TRACE ) { TRACE( "Joystick#ScreenPointToAnchoredPosition", this ); }

                var localPoint = { v : pc.Vec2.ZERO.clone() };
                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.baseRect, screenPosition, this.cam, localPoint)) {
                    var pivotOffset = this.baseRect.pivot.$clone().mul( this.baseRect.sizeDelta );
                    return localPoint.v.$clone().sub( (this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta )) ).add( pivotOffset );
                }
                return pc.Vec2.ZERO.clone();
            },
            /*Joystick.ScreenPointToAnchoredPosition end.*/


        }
    });
    /*Joystick end.*/

    /*ExclamationMark start.*/
    Bridge.define("ExclamationMark", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _camera: null,
            _degree: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ExclamationMark#init", this ); }

                this._degree = 180;
            }
        },
        methods: {
            /*ExclamationMark.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ExclamationMark#Awake", this ); }

                this._camera = UnityEngine.Camera.main;
            },
            /*ExclamationMark.Awake end.*/

            /*ExclamationMark.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "ExclamationMark#OnEnable", this ); }

                this.StartCoroutine$1(this.SwitchOff());
            },
            /*ExclamationMark.OnEnable end.*/

            /*ExclamationMark.SwitchOff start.*/
            SwitchOff: function () {
if ( TRACE ) { TRACE( "ExclamationMark#SwitchOff", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.gameObject.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ExclamationMark.SwitchOff end.*/

            /*ExclamationMark.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "ExclamationMark#LateUpdate", this ); }

                this.transform.LookAt$2(new pc.Vec3( this._camera.transform.position.x, this._camera.transform.position.y, this._camera.transform.position.z ));
                this.transform.Rotate(0, this._degree, 0);
            },
            /*ExclamationMark.LateUpdate end.*/


        }
    });
    /*ExclamationMark end.*/

    /*Fabric.TanksFabric start.*/
    Bridge.define("Fabric.TanksFabric", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tankPrefab: null,
            spawnPoints: null,
            targets: null,
            _indexPoint: 0,
            _tanks: null
        },
        props: {
            Tanks: {
                get: function () {
if ( TRACE ) { TRACE( "Fabric.TanksFabric#Tanks#get", this ); }

                    return this._tanks;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Fabric.TanksFabric#init", this ); }

                this._indexPoint = 0;
            }
        },
        methods: {
            /*Fabric.TanksFabric.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Fabric.TanksFabric#Awake", this ); }

                this._tanks = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            },
            /*Fabric.TanksFabric.Awake end.*/

            /*Fabric.TanksFabric.Spawn start.*/
            Spawn: function () {
if ( TRACE ) { TRACE( "Fabric.TanksFabric#Spawn", this ); }

                if (this._indexPoint >= this.spawnPoints.Count) {
                    return;
                }

                var currentPoint = this.spawnPoints.getItem(this._indexPoint);

                var tankObj = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.tankPrefab.gameObject, currentPoint.position, pc.Quat.IDENTITY.clone());
                this._tanks.add(tankObj);

                var tankAI = tankObj.GetComponent(BehaviourAI.TankAI);

                if (UnityEngine.MonoBehaviour.op_Inequality(tankAI, null)) {
                    tankAI.SetTargets(this.targets);
                }

                this._indexPoint = (this._indexPoint + 1) | 0;
            },
            /*Fabric.TanksFabric.Spawn end.*/


        }
    });
    /*Fabric.TanksFabric end.*/

    /*FollowBullet start.*/
    Bridge.define("FollowBullet", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _smoothSpeed: 0,
            _offset: null,
            _bullet: null,
            _startPosition: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FollowBullet#init", this ); }

                this._offset = new UnityEngine.Vector3();
                this._startPosition = new UnityEngine.Vector3();
                this._smoothSpeed = 5.0;
            }
        },
        methods: {
            /*FollowBullet.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FollowBullet#Awake", this ); }

                this._startPosition = this.transform.position.$clone();
            },
            /*FollowBullet.Awake end.*/

            /*FollowBullet.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "FollowBullet#LateUpdate", this ); }

                if (UnityEngine.GameObject.op_Equality(this._bullet, null)) {
                    return;
                }

                var desiredPosition = this._bullet.transform.position.$clone().add( this._offset );
                this.transform.position = new pc.Vec3().lerp( this.transform.position, desiredPosition, this._smoothSpeed * UnityEngine.Time.deltaTime );
                this.transform.LookAt(this._bullet.transform);
            },
            /*FollowBullet.LateUpdate end.*/

            /*FollowBullet.ReturnStartPosition start.*/
            ReturnStartPosition: function () {
if ( TRACE ) { TRACE( "FollowBullet#ReturnStartPosition", this ); }

                this.transform.position = this._startPosition.$clone();
            },
            /*FollowBullet.ReturnStartPosition end.*/

            /*FollowBullet.GetBullet start.*/
            GetBullet: function (bullet) {
if ( TRACE ) { TRACE( "FollowBullet#GetBullet", this ); }

                this._bullet = bullet;
            },
            /*FollowBullet.GetBullet end.*/


        }
    });
    /*FollowBullet end.*/

    /*Guidance start.*/
    Bridge.define("Guidance", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _tanksFabric: null,
            secondCamera: null
        },
        methods: {
            /*Guidance.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Guidance#Update", this ); }

                var $t;
                var ray = this.secondCamera.ScreenPointToRay(UnityEngine.Input.mousePosition);
                var hit = { v : new UnityEngine.RaycastHit() };

                UnityEngine.Debug.DrawRay$2(ray.origin, ray.direction.$clone().clone().scale( 1000.0 ), new pc.Color( 1, 0, 0, 1 ), 1.0);
                UnityEngine.Debug.Log$1(System.String.format("Ray Origin: {0}, Direction: {1}", ray.origin.$clone(), ray.direction.$clone()));

                if (UnityEngine.Physics.Raycast$1(ray, hit)) {
                    var tankAI = { };
                    if (hit.v.collider.TryGetComponent$1(BehaviourAI.TankAI, tankAI)) {
                        $t = Bridge.getEnumerator(this._tanksFabric.Tanks);
                        try {
                            while ($t.moveNext()) {
                                var tank = $t.Current;
                                var tankObg = tank.GetComponent(BehaviourAI.TankAI);
                                tankObg.ShowHover();

                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                }
            },
            /*Guidance.Update end.*/


        }
    });
    /*Guidance end.*/

    /*HandAnimation start.*/
    Bridge.define("HandAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            scaleSpeed: 0,
            scaleAmount: 0,
            initialScale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HandAnimation#init", this ); }

                this.initialScale = new UnityEngine.Vector3();
                this.scaleSpeed = 1.0;
                this.scaleAmount = 0.2;
            }
        },
        methods: {
            /*HandAnimation.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "HandAnimation#Start", this ); }

                this.initialScale = this.transform.localScale.$clone();
            },
            /*HandAnimation.Start end.*/

            /*HandAnimation.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "HandAnimation#Update", this ); }

                var scaleFactor = 1 + UnityEngine.Mathf.PingPong(UnityEngine.Time.time * this.scaleSpeed, this.scaleAmount);
                this.transform.localScale = this.initialScale.$clone().clone().scale( scaleFactor );
            },
            /*HandAnimation.Update end.*/


        }
    });
    /*HandAnimation end.*/

    /*Howitzer.LookAtCrosshair start.*/
    Bridge.define("Howitzer.LookAtCrosshair", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            joystick: null,
            minYAngle: 0,
            maxYAngle: 0,
            rotationSpeed: 0,
            _initialRotationY: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Howitzer.LookAtCrosshair#init", this ); }

                this.minYAngle = -79.0;
                this.maxYAngle = -60.0;
                this.rotationSpeed = 5.0;
            }
        },
        methods: {
            /*Howitzer.LookAtCrosshair.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Howitzer.LookAtCrosshair#Start", this ); }

                this._initialRotationY = this.transform.eulerAngles.y;
            },
            /*Howitzer.LookAtCrosshair.Start end.*/

            /*Howitzer.LookAtCrosshair.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Howitzer.LookAtCrosshair#Update", this ); }

                this.LookAtJoystickMovement();
            },
            /*Howitzer.LookAtCrosshair.Update end.*/

            /*Howitzer.LookAtCrosshair.LookAtJoystickMovement start.*/
            LookAtJoystickMovement: function () {
if ( TRACE ) { TRACE( "Howitzer.LookAtCrosshair#LookAtJoystickMovement", this ); }

                if (!pc.Vec2.equals( this.joystick.handle$1.anchoredPosition, pc.Vec2.ZERO.clone() )) {
                    var joystickY = this.joystick.Horizontal;

                    var currentY = this.transform.eulerAngles.y;
                    if (currentY > 180) {
                        currentY -= 360;
                    }

                    var targetAngle = currentY + joystickY * this.rotationSpeed;

                    targetAngle = Math.max(this.minYAngle, Math.min(targetAngle, this.maxYAngle));

                    var targetRotation = new pc.Quat().setFromEulerAngles_Unity( this.transform.rotation.getPositiveEulerAngles().x, targetAngle, 0 );
                    this.transform.rotation = new pc.Quat().slerp( this.transform.rotation, targetRotation, 5.0 * UnityEngine.Time.deltaTime );
                }
            },
            /*Howitzer.LookAtCrosshair.LookAtJoystickMovement end.*/


        }
    });
    /*Howitzer.LookAtCrosshair end.*/

    /*Howitzer.LookAtReticle start.*/
    Bridge.define("Howitzer.LookAtReticle", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            reticle: null,
            mainCamera: null,
            rotationSpeed: 0,
            maxPitchAngle: 0,
            minPitchAngle: 0,
            _defaultPitch: 0,
            _isZoomed: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Howitzer.LookAtReticle#init", this ); }

                this.rotationSpeed = 180.0;
                this.maxPitchAngle = 45.0;
                this.minPitchAngle = -10.0;
                this._isZoomed = false;
            }
        },
        methods: {
            /*Howitzer.LookAtReticle.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Howitzer.LookAtReticle#Start", this ); }

                // Сохраняем изначальный угол X в начале игры
                this._defaultPitch = this.transform.eulerAngles.x;
            },
            /*Howitzer.LookAtReticle.Start end.*/

            /*Howitzer.LookAtReticle.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Howitzer.LookAtReticle#OnEnable", this ); }

                Howitzer.PlayerZoom.addOnZoomChanged(Bridge.fn.cacheBind(this, this.HandleZoom));
            },
            /*Howitzer.LookAtReticle.OnEnable end.*/

            /*Howitzer.LookAtReticle.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Howitzer.LookAtReticle#OnDisable", this ); }

                Howitzer.PlayerZoom.removeOnZoomChanged(Bridge.fn.cacheBind(this, this.HandleZoom));
            },
            /*Howitzer.LookAtReticle.OnDisable end.*/

            /*Howitzer.LookAtReticle.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Howitzer.LookAtReticle#Update", this ); }

                if (!this._isZoomed) {
                    this.RotateTowardsReticle();
                }
            },
            /*Howitzer.LookAtReticle.Update end.*/

            /*Howitzer.LookAtReticle.HandleZoom start.*/
            HandleZoom: function (isZoomed) {
if ( TRACE ) { TRACE( "Howitzer.LookAtReticle#HandleZoom", this ); }

                this._isZoomed = isZoomed;

                if (this._isZoomed) {
                    // При входе в зум возвращаем пушку в изначальное положение по X
                    var targetRotation = new pc.Quat().setFromEulerAngles_Unity( this._defaultPitch, this.transform.eulerAngles.y, 0 );
                    this.StartCoroutine$1(this.SmoothReturnToInitial(targetRotation));
                }
            },
            /*Howitzer.LookAtReticle.HandleZoom end.*/

            /*Howitzer.LookAtReticle.RotateTowardsReticle start.*/
            RotateTowardsReticle: function () {
if ( TRACE ) { TRACE( "Howitzer.LookAtReticle#RotateTowardsReticle", this ); }

                if (UnityEngine.Component.op_Equality(this.reticle, null) || UnityEngine.Component.op_Equality(this.mainCamera, null)) {
                    return;
                }

                var screenPos = this.reticle.position.$clone();
                var worldPos = this.mainCamera.ScreenToWorldPoint(new pc.Vec3( screenPos.x, screenPos.y, 50.0 ));

                var direction = (worldPos.$clone().sub( this.transform.position )).clone().normalize().$clone();
                if (direction.lengthSq() <= 0.01) {
                    return;
                }

                var targetYaw = Math.atan2(direction.x, direction.z) * UnityEngine.Mathf.Rad2Deg;
                var targetPitch = Math.atan2(direction.y, direction.z) * UnityEngine.Mathf.Rad2Deg * -1.0;
                targetPitch = Math.max(this.minPitchAngle, Math.min(targetPitch, this.maxPitchAngle));

                var targetRotation = new pc.Quat().setFromEulerAngles_Unity( targetPitch, targetYaw, 0 );
                this.transform.rotation = pc.Quat.rotateTowards( this.transform.rotation.$clone(), targetRotation.$clone(), this.rotationSpeed * UnityEngine.Time.deltaTime );
            },
            /*Howitzer.LookAtReticle.RotateTowardsReticle end.*/

            /*Howitzer.LookAtReticle.SmoothReturnToInitial start.*/
            SmoothReturnToInitial: function (targetRotation) {
if ( TRACE ) { TRACE( "Howitzer.LookAtReticle#SmoothReturnToInitial", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( pc.Quat.angle( this.transform.rotation.$clone(), targetRotation.$clone() ) > 0.1 ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    this.transform.rotation = pc.Quat.rotateTowards( this.transform.rotation.$clone(), targetRotation.$clone(), this.rotationSpeed * UnityEngine.Time.deltaTime );
                                        $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {
                                    this.transform.rotation = targetRotation.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Howitzer.LookAtReticle.SmoothReturnToInitial end.*/


        }
    });
    /*Howitzer.LookAtReticle end.*/

    /*Howitzer.ObjectPoolShooting start.*/
    Bridge.define("Howitzer.ObjectPoolShooting", {
        fields: {
            prefab: null,
            pool: null
        },
        ctors: {
            ctor: function (prefab, position, rotation, initialSize) {
if ( TRACE ) { TRACE( "Howitzer.ObjectPoolShooting#ctor", this ); }

                this.$initialize();
                this.prefab = prefab;
                this.pool = new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).ctor();
                for (var i = 0; i < initialSize; i = (i + 1) | 0) {
                    var obj = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, prefab, position, rotation);
                    obj.SetActive(false);
                    this.pool.Enqueue(obj);
                }
            }
        },
        methods: {
            /*Howitzer.ObjectPoolShooting.GetObject start.*/
            GetObject: function () {
if ( TRACE ) { TRACE( "Howitzer.ObjectPoolShooting#GetObject", this ); }

                if (this.pool.Count > 0) {
                    var obj = this.pool.Dequeue();
                    obj.SetActive(true);
                    return obj;
                } else {
                    var obj1 = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.prefab);
                    return obj1;
                }
            },
            /*Howitzer.ObjectPoolShooting.GetObject end.*/

            /*Howitzer.ObjectPoolShooting.ReturnObject start.*/
            ReturnObject: function (obj) {
if ( TRACE ) { TRACE( "Howitzer.ObjectPoolShooting#ReturnObject", this ); }

                obj.SetActive(false);
                this.pool.Enqueue(obj);
            },
            /*Howitzer.ObjectPoolShooting.ReturnObject end.*/


        }
    });
    /*Howitzer.ObjectPoolShooting end.*/

    /*Howitzer.PlayerShooting start.*/
    Bridge.define("Howitzer.PlayerShooting", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            playerShootingCooldown: null,
            mainCamera: null,
            crosshairUI: null,
            muzzleFlash: null,
            explosionEffect: null,
            projectilePosition: null,
            prefabProjectile: null,
            projectileSpeed: 0,
            poolSize: 0,
            _followBullet: null,
            _managerCamers: null,
            _timeController: null,
            _playerUIController: null,
            _tanksFabric: null,
            _missPoint: null,
            _pumping: null,
            _playerZoom: null,
            _aim: null,
            _projectilePool: null,
            _explosionPool: null,
            _isZoomed: false,
            _firstShot: false,
            _newArt: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShooting#init", this ); }

                this.poolSize = 10;
                this._isZoomed = false;
                this._firstShot = false;
                this._newArt = false;
            }
        },
        methods: {
            /*Howitzer.PlayerShooting.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShooting#Awake", this ); }

                this._projectilePool = new Howitzer.ObjectPoolShooting(this.prefabProjectile, this.projectilePosition.position.$clone(), this.prefabProjectile.transform.rotation.$clone(), this.poolSize);
                this._explosionPool = new Howitzer.ObjectPoolShooting(this.prefabProjectile, this.projectilePosition.position.$clone(), this.prefabProjectile.transform.rotation.$clone(), this.poolSize);
            },
            /*Howitzer.PlayerShooting.Awake end.*/

            /*Howitzer.PlayerShooting.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShooting#OnEnable", this ); }

                UI.PlayerUIController.addOnShoot(Bridge.fn.cacheBind(this, this.ChooseShootingRange));
                Howitzer.PlayerZoom.addOnZoomChanged(Bridge.fn.cacheBind(this, this.SetZoomState));
            },
            /*Howitzer.PlayerShooting.OnEnable end.*/

            /*Howitzer.PlayerShooting.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShooting#OnDisable", this ); }

                UI.PlayerUIController.removeOnShoot(Bridge.fn.cacheBind(this, this.ChooseShootingRange));
                Howitzer.PlayerZoom.removeOnZoomChanged(Bridge.fn.cacheBind(this, this.SetZoomState));
            },
            /*Howitzer.PlayerShooting.OnDisable end.*/

            /*Howitzer.PlayerShooting.Upgrade start.*/
            Upgrade: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShooting#Upgrade", this ); }

                this._newArt = true;
            },
            /*Howitzer.PlayerShooting.Upgrade end.*/

            /*Howitzer.PlayerShooting.SetZoomState start.*/
            SetZoomState: function (isZoomed) {
if ( TRACE ) { TRACE( "Howitzer.PlayerShooting#SetZoomState", this ); }

                this._isZoomed = isZoomed;
            },
            /*Howitzer.PlayerShooting.SetZoomState end.*/

            /*Howitzer.PlayerShooting.ChooseShootingRange start.*/
            ChooseShootingRange: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShooting#ChooseShootingRange", this ); }

                if (this._newArt === false) {
                    this.Shoot1();
                } else {
                    this.Shoot2();
                }
            },
            /*Howitzer.PlayerShooting.ChooseShootingRange end.*/

            /*Howitzer.PlayerShooting.Shoot1 start.*/
            Shoot1: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShooting#Shoot1", this ); }

                var $t;
                var shootDirection = new UnityEngine.Vector3();
                var ray = new UnityEngine.Ray();

                if (this._isZoomed) {
                    this._timeController.StartSlowMotion();
                    shootDirection = this.mainCamera.transform.forward.$clone();
                    ray = new UnityEngine.Ray.$ctor1(this.mainCamera.transform.position, shootDirection);
                } else {
                    var screenPoint = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, this.crosshairUI.position);
                    ray = this.mainCamera.ScreenPointToRay(UnityEngine.Vector3.FromVector2(screenPoint));
                    shootDirection = ray.direction.clone().normalize().$clone();
                }

                shootDirection = new pc.Quat().setFromAxisAngle( this.mainCamera.transform.right, -1.0 ).transformVector( shootDirection );
                var hit = { v : new UnityEngine.RaycastHit() };

                if (!this._firstShot && UnityEngine.Physics.Raycast$1(ray, hit)) {
                    var tankAI = { };
                    if (hit.v.collider.TryGetComponent$1(BehaviourAI.TankAI, tankAI)) {
                        var missPointPosition = tankAI.v.transform.position.$clone();
                        var missPoint = UnityEngine.Object.Instantiate$2(MissPoint, this._missPoint, missPointPosition, pc.Quat.IDENTITY.clone());

                        while (missPoint.IsTank === false) {
                            missPoint.transform.position = missPoint.transform.position.$clone().sub( new pc.Vec3( 0, 0, 1 ).clone().scale( 5.0 ) );
                            missPoint.Cast();
                        }

                        shootDirection = (missPoint.transform.position.$clone().sub( this.projectilePosition.position )).clone().normalize().$clone();
                        missPoint.gameObject.SetActive(false);
                    }
                }

                var projectile = this._projectilePool.GetObject();
                projectile.transform.position = this.projectilePosition.position.$clone();
                projectile.transform.rotation = new pc.Quat().setLookAt( shootDirection, pc.Vec3.UP.clone() );

                projectile.SetActive(true);

                var tankAIList = new (System.Collections.Generic.List$1(BehaviourAI.TankAI)).ctor();

                $t = Bridge.getEnumerator(this._tanksFabric.Tanks);
                try {
                    while ($t.moveNext()) {
                        var tankObj = $t.Current;
                        var tankAI1 = tankObj.GetComponent(BehaviourAI.TankAI);

                        if (UnityEngine.MonoBehaviour.op_Inequality(tankAI1, null)) {
                            tankAIList.add(tankAI1);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                var projectileComponent = projectile.GetComponent(Howitzer.Projectile);
                projectileComponent.Initialize(this.projectileSpeed, this._explosionPool, this.explosionEffect, this._playerUIController, tankAIList, this._pumping, null, this._playerZoom);

                this._managerCamers.GetBullet(projectileComponent);

                this.playerShootingCooldown.StartCooldown();

                if (UnityEngine.GameObject.op_Inequality(this.muzzleFlash, null)) {
                    this.muzzleFlash.GetComponent(UnityEngine.ParticleSystem).Play();
                }

                this.ShakeCamera();

                this._followBullet.GetBullet(projectile);
                this._managerCamers.WatchingBullet();
                //button.gameObject.SetActive(false);
            },
            /*Howitzer.PlayerShooting.Shoot1 end.*/

            /*Howitzer.PlayerShooting.Shoot2 start.*/
            Shoot2: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShooting#Shoot2", this ); }

                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    tankAIList, 
                    $t, 
                    tankObj, 
                    tankAI, 
                    shots, 
                    lastProjectile, 
                    i, 
                    projectile, 
                    targetPosition, 
                    shootDirection, 
                    projectileComponent, 
                    projectileComponent1, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1,2,3,4,5], $step);
                            switch ($step) {
                                case 0: {
                                    tankAIList = new (System.Collections.Generic.List$1(BehaviourAI.TankAI)).ctor();
                                    $t = Bridge.getEnumerator(this._tanksFabric.Tanks);
                                    try {
                                        while ($t.moveNext()) {
                                            tankObj = $t.Current;
                                            tankAI = tankObj.GetComponent(BehaviourAI.TankAI);
                                            if (UnityEngine.MonoBehaviour.op_Inequality(tankAI, null)) {
                                                tankAIList.add(tankAI);
                                            }
                                        }
                                    } finally {
                                        if (Bridge.is($t, System.IDisposable)) {
                                            $t.System$IDisposable$Dispose();
                                        }
                                    }

                                    shots = UnityEngine.Mathf.Min(3, tankAIList.Count);
                                    lastProjectile = null;

                                    i = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( i < shots ) {
                                        $step = 2;
                                        continue;
                                    }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    projectile = this._projectilePool.GetObject();
                                    projectile.transform.position = this.projectilePosition.position.$clone();

                                    targetPosition = tankAIList.getItem(i).transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 3.0 ) );
                                    shootDirection = (targetPosition.$clone().sub( this.projectilePosition.position )).clone().normalize().$clone();

                                    projectile.transform.rotation = new pc.Quat().setLookAt( shootDirection, pc.Vec3.UP.clone() );
                                    projectile.SetActive(true);

                                    projectileComponent = projectile.GetComponent(Howitzer.Projectile);
                                    projectileComponent.Initialize(this.projectileSpeed, this._explosionPool, this.explosionEffect, this._playerUIController, tankAIList, this._pumping, tankAIList.getItem(i), this._playerZoom);

                                    this.playerShootingCooldown.StartCooldown();

                                    if (UnityEngine.GameObject.op_Inequality(this.muzzleFlash, null)) {
                                        this.muzzleFlash.GetComponent(UnityEngine.ParticleSystem).Play();
                                    }

                                    this.ShakeCamera();
                                    lastProjectile = projectile;

                                    $task1 = System.Threading.Tasks.Task.delay(50);
                                    $step = 3;
                                    if ($task1.isCompleted()) {
                                        continue;
                                    }
                                    $task1.continue($asyncBody);
                                    return;
                                }
                                case 3: {
                                    $task1.getAwaitedResult();
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    i = (i + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {
                                    if (UnityEngine.GameObject.op_Inequality(lastProjectile, null)) {
                                        projectileComponent1 = lastProjectile.GetComponent(Howitzer.Projectile);
                                        if (UnityEngine.MonoBehaviour.op_Inequality(projectileComponent1, null)) {
                                            this._followBullet.GetBullet(lastProjectile);
                                            this._managerCamers.GetBullet(projectileComponent1, true); // Передаем Projectile вместо GameObject
                                            this._managerCamers.WatchingBullet();
                                        }
                                    }

                                    this._timeController.StartSlowMotion();
                                    this._pumping.RemoveSprites();
                                    this._aim.gameObject.SetActive(false);
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            /*Howitzer.PlayerShooting.Shoot2 end.*/

            /*Howitzer.PlayerShooting.ShakeCamera start.*/
            ShakeCamera: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShooting#ShakeCamera", this ); }

                var duration = 0.3;
                var strength = 1.0;
                var vibrato = 10;
                var randomness = 90.0;
                DG.Tweening.ShortcutExtensions.DOShakePosition$2(this.mainCamera.transform, duration, strength, vibrato, randomness);
            },
            /*Howitzer.PlayerShooting.ShakeCamera end.*/


        }
    });
    /*Howitzer.PlayerShooting end.*/

    /*Howitzer.PlayerShootingCooldown start.*/
    Bridge.define("Howitzer.PlayerShootingCooldown", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            shootButton: null,
            cooldownText: null,
            cooldownImage: null,
            cooldownTime: 0,
            _isOnCooldown: false
        },
        props: {
            CanShoot: {
                get: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShootingCooldown#CanShoot#get", this ); }

                    return !this._isOnCooldown;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShootingCooldown#init", this ); }

                this.cooldownTime = 1.0;
                this._isOnCooldown = false;
            }
        },
        methods: {
            /*Howitzer.PlayerShootingCooldown.StartCooldown start.*/
            StartCooldown: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShootingCooldown#StartCooldown", this ); }

                if (this._isOnCooldown) {
                    return;
                }
                this.StartCoroutine$1(this.CooldownRoutine());
            },
            /*Howitzer.PlayerShootingCooldown.StartCooldown end.*/

            /*Howitzer.PlayerShootingCooldown.CooldownRoutine start.*/
            CooldownRoutine: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerShootingCooldown#CooldownRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    timer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.cooldownText.gameObject.SetActive(true);
                                        UnityEngine.Debug.Log$1("\u041d\u0430\u0447\u0430\u043b \u043f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0434\u043a\u0443");
                                        this.shootButton.interactable = false;
                                        this._isOnCooldown = true;
                                        timer = this.cooldownTime;

                                        this.cooldownText.enabled = true;
                                        this.cooldownImage.fillAmount = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( timer > 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    timer -= UnityEngine.Time.deltaTime;
                                        this.cooldownImage.fillAmount = 1.0 - (timer / this.cooldownTime);
                                        this.cooldownText.text = System.String.format("{0:F1}", [Bridge.box(timer, System.Single, System.Single.format, System.Single.getHashCode)]);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.cooldownText.enabled = false;
                                        this.cooldownImage.fillAmount = 1.0;
                                        this.shootButton.interactable = true;
                                        this._isOnCooldown = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Howitzer.PlayerShootingCooldown.CooldownRoutine end.*/


        }
    });
    /*Howitzer.PlayerShootingCooldown end.*/

    /*Howitzer.PlayerZoom start.*/
    Bridge.define("Howitzer.PlayerZoom", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                OnZoomChanged: null
            }
        },
        fields: {
            crosshair: null,
            mainCamera: null,
            zoomImage: null,
            objectsToDisable: null,
            zoomFOV: 0,
            normalFOV: 0,
            zoomSpeed: 0,
            joystick: null,
            rotationSpeed: 0,
            pumping: null,
            _arm: null,
            _tacticsFabric: null,
            _titnSprite: null,
            _isZoomed: false,
            _isStore: false,
            _isUpgraded: false,
            _lastCameraRotation: null,
            _zoomStartRotation: null,
            _sprites: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#init", this ); }

                this._lastCameraRotation = new UnityEngine.Quaternion();
                this._zoomStartRotation = new UnityEngine.Quaternion();
                this.zoomFOV = 30.0;
                this.normalFOV = 60.0;
                this.zoomSpeed = 5.0;
                this.rotationSpeed = 2.0;
                this._isZoomed = false;
                this._isStore = false;
                this._isUpgraded = false;
                this._sprites = new (System.Collections.Generic.List$1(TitnSprite)).ctor();
            }
        },
        methods: {
            /*Howitzer.PlayerZoom.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#OnEnable", this ); }

                UI.PlayerUIController.addOnZoom(Bridge.fn.cacheBind(this, this.ToggleZoom));
            },
            /*Howitzer.PlayerZoom.OnEnable end.*/

            /*Howitzer.PlayerZoom.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#OnDisable", this ); }

                UI.PlayerUIController.removeOnZoom(Bridge.fn.cacheBind(this, this.ToggleZoom));
            },
            /*Howitzer.PlayerZoom.OnDisable end.*/

            /*Howitzer.PlayerZoom.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#Update", this ); }

                if (this._isZoomed) {
                    this.RotateCameraWithJoystick();
                }
            },
            /*Howitzer.PlayerZoom.Update end.*/

            /*Howitzer.PlayerZoom.OpenStore start.*/
            OpenStore: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#OpenStore", this ); }

                this.pumping.gameObject.SetActive(true);
            },
            /*Howitzer.PlayerZoom.OpenStore end.*/

            /*Howitzer.PlayerZoom.Upgrade start.*/
            Upgrade: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#Upgrade", this ); }

                this._isUpgraded = true;
            },
            /*Howitzer.PlayerZoom.Upgrade end.*/

            /*Howitzer.PlayerZoom.ActivateTransitionToStore start.*/
            ActivateTransitionToStore: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#ActivateTransitionToStore", this ); }

                this._isStore = true;
                this._arm.gameObject.SetActive(true);
            },
            /*Howitzer.PlayerZoom.ActivateTransitionToStore end.*/

            /*Howitzer.PlayerZoom.CheckZoom start.*/
            CheckZoom: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#CheckZoom", this ); }

                return this._isZoomed;
            },
            /*Howitzer.PlayerZoom.CheckZoom end.*/

            /*Howitzer.PlayerZoom.ChangeZoomForAirStrike start.*/
            ChangeZoomForAirStrike: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#ChangeZoomForAirStrike", this ); }

                this.ToggleZoom();
            },
            /*Howitzer.PlayerZoom.ChangeZoomForAirStrike end.*/

            /*Howitzer.PlayerZoom.EnableZoomUI start.*/
            EnableZoomUI: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#EnableZoomUI", this ); }

                this.zoomImage.SetActive(true);
            },
            /*Howitzer.PlayerZoom.EnableZoomUI end.*/

            /*Howitzer.PlayerZoom.DisableZoomUI start.*/
            DisableZoomUI: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#DisableZoomUI", this ); }

                this.zoomImage.SetActive(false);
            },
            /*Howitzer.PlayerZoom.DisableZoomUI end.*/

            /*Howitzer.PlayerZoom.ToggleZoom start.*/
            ToggleZoom: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#ToggleZoom", this ); }

                var $t, $t1, $t2;
                this._isZoomed = !this._isZoomed;
                !Bridge.staticEquals(Howitzer.PlayerZoom.OnZoomChanged, null) ? Howitzer.PlayerZoom.OnZoomChanged(this._isZoomed) : null;

                this.zoomImage.SetActive(this._isZoomed);
                this.StopAllCoroutines();
                this.StartCoroutine$1(this.ChangeFOV(this._isZoomed ? this.zoomFOV : this.normalFOV));

                $t = Bridge.getEnumerator(this.objectsToDisable);
                try {
                    while ($t.moveNext()) {
                        var obj = $t.Current;
                        obj.SetActive(!this._isZoomed);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                if (this._isZoomed) {
                    this._lastCameraRotation = this.mainCamera.transform.rotation.$clone();
                    var targetPoint = this.GetWorldPointFromCrosshair();
                    this.mainCamera.transform.LookAt$2(targetPoint);
                    this._zoomStartRotation = this.mainCamera.transform.rotation.$clone();

                    if (this._isUpgraded) {
                        $t1 = Bridge.getEnumerator(this._tacticsFabric.Tanks);
                        try {
                            while ($t1.moveNext()) {
                                var tank = $t1.Current;
                                var titnSprite = UnityEngine.Object.Instantiate(TitnSprite, this._titnSprite);
                                titnSprite.Initialize(tank);
                                this._sprites.add(titnSprite);
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } else {
                    var zoomDeltaRotation = this.mainCamera.transform.rotation.clone().mul( this._zoomStartRotation.clone().invert() );
                    this.mainCamera.transform.rotation = zoomDeltaRotation.clone().mul( this._lastCameraRotation );

                    $t2 = Bridge.getEnumerator(this._sprites);
                    try {
                        while ($t2.moveNext()) {
                            var sprite = $t2.Current;
                            sprite.gameObject.SetActive(false);
                        }
                    } finally {
                        if (Bridge.is($t2, System.IDisposable)) {
                            $t2.System$IDisposable$Dispose();
                        }
                    }
                }

                if (this._isStore) {
                    this.OpenStore();
                }
            },
            /*Howitzer.PlayerZoom.ToggleZoom end.*/

            /*Howitzer.PlayerZoom.GetWorldPointFromCrosshair start.*/
            GetWorldPointFromCrosshair: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#GetWorldPointFromCrosshair", this ); }

                var screenPoint = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, this.crosshair.position);
                var ray = this.mainCamera.ScreenPointToRay(UnityEngine.Vector3.FromVector2(screenPoint));
                var hit = { v : new UnityEngine.RaycastHit() };
                if (UnityEngine.Physics.Raycast$1(ray, hit)) {
                    return hit.v.point.$clone();
                }
                return ray.origin.$clone().add( ray.direction.$clone().clone().scale( 100.0 ) );
            },
            /*Howitzer.PlayerZoom.GetWorldPointFromCrosshair end.*/

            /*Howitzer.PlayerZoom.ChangeFOV start.*/
            ChangeFOV: function (targetFOV) {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#ChangeFOV", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( Math.abs(this.mainCamera.fieldOfView - targetFOV) > 0.1 ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    this.mainCamera.fieldOfView = pc.math.lerp(this.mainCamera.fieldOfView, targetFOV, this.zoomSpeed * UnityEngine.Time.deltaTime);
                                        $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {
                                    this.mainCamera.fieldOfView = targetFOV;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Howitzer.PlayerZoom.ChangeFOV end.*/

            /*Howitzer.PlayerZoom.RotateCameraWithJoystick start.*/
            RotateCameraWithJoystick: function () {
if ( TRACE ) { TRACE( "Howitzer.PlayerZoom#RotateCameraWithJoystick", this ); }

                var joystickX = this.joystick.Horizontal;
                var joystickY = this.joystick.Vertical;
                var xSensitivity = 0.3;
                var ySensitivity = 0.3;
                var duration = 0.2;
                var currentRotation = this.mainCamera.transform.eulerAngles.$clone();
                var currentX = (currentRotation.x > 180) ? currentRotation.x - 360 : currentRotation.x;
                var currentY = (currentRotation.y > 180) ? currentRotation.y - 360 : currentRotation.y;
                var targetRotationX = Math.max(8.0, Math.min(currentX - joystickY * xSensitivity, 30.0));
                var targetRotationY = Math.max(-90.0, Math.min(currentY + joystickX * ySensitivity, -30.0));
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DORotate(this.mainCamera.transform, new pc.Vec3( targetRotationX, targetRotationY, 0 ), duration), DG.Tweening.Ease.OutQuad);
            },
            /*Howitzer.PlayerZoom.RotateCameraWithJoystick end.*/


        }
    });
    /*Howitzer.PlayerZoom end.*/

    /*Howitzer.Projectile start.*/
    Bridge.define("Howitzer.Projectile", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _explosionPool: null,
            _speed: 0,
            _rigidbody: null,
            _explosionParticle: null,
            _playerUIController: null,
            _tanks: null,
            _pumping: null,
            _targetTank: null,
            _playerZoom: null
        },
        events: {
            Crashed: null
        },
        methods: {
            /*Howitzer.Projectile.Initialize start.*/
            Initialize: function (speed, explosionPool, explosionParticle, playerUIController, tanks, pumping, targetTank, playerZoom) {
if ( TRACE ) { TRACE( "Howitzer.Projectile#Initialize", this ); }

                var $t;
                this._speed = speed;
                this._explosionPool = explosionPool;
                this._rigidbody = this.GetComponent(UnityEngine.Rigidbody);
                this._rigidbody.velocity = this.transform.forward.$clone().clone().scale( this._speed );
                this._explosionParticle = explosionParticle;
                this._playerUIController = playerUIController;
                this._tanks = tanks;
                this._pumping = pumping;
                this._targetTank = targetTank;
                this._playerZoom = playerZoom;

                if (UnityEngine.MonoBehaviour.op_Inequality(this._targetTank, null)) {
                    $t = Bridge.getEnumerator(this._tanks);
                    try {
                        while ($t.moveNext()) {
                            var tank = $t.Current;
                            if (UnityEngine.MonoBehaviour.op_Inequality(tank, this._targetTank)) {
                                UnityEngine.Physics.IgnoreCollision(this.GetComponent(UnityEngine.Collider), tank.GetComponent(UnityEngine.Collider), true);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            /*Howitzer.Projectile.Initialize end.*/

            /*Howitzer.Projectile.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "Howitzer.Projectile#OnCollisionEnter", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this._targetTank, null)) {
                    var hitTankAI = { };
                    if (collision.gameObject.TryGetComponent$1(BehaviourAI.TankAI, hitTankAI)) {
                        if (UnityEngine.MonoBehaviour.op_Equality(hitTankAI.v, this._targetTank)) {
                            this.DestroyTank(hitTankAI.v);
                        }
                    }
                } else {
                    var hitTankAI1 = { };
                    if (collision.gameObject.TryGetComponent$1(BehaviourAI.TankAI, hitTankAI1)) {
                        this.DestroyTank(hitTankAI1.v);
                    }
                }

                if (collision.gameObject.CompareTag("Ground") || collision.gameObject.CompareTag("Tree")) {
                    this._playerUIController.ShowCross();
                    //_pumping.gameObject.SetActive(true);
                    this._playerZoom.ActivateTransitionToStore();
                    this._playerZoom.Upgrade();
                }

                this.gameObject.SetActive(false);
                !Bridge.staticEquals(this.Crashed, null) ? this.Crashed() : null;
            },
            /*Howitzer.Projectile.OnCollisionEnter end.*/

            /*Howitzer.Projectile.DestroyTank start.*/
            DestroyTank: function (hitTankAI) {
if ( TRACE ) { TRACE( "Howitzer.Projectile#DestroyTank", this ); }

                hitTankAI.DisableTank();
                hitTankAI.GetComponent(UnityEngine.BoxCollider).enabled = false;
                this.ChangeTankColor(hitTankAI.gameObject, new pc.Color( 0, 0, 0, 1 ));
                this.SpawnExplosionEffect(this.transform.position);
                UI.TankKillCounter.NotifyTankDestroyed();
                this._playerUIController.ShowMark();
            },
            /*Howitzer.Projectile.DestroyTank end.*/

            /*Howitzer.Projectile.SpawnExplosionEffect start.*/
            SpawnExplosionEffect: function (position) {
if ( TRACE ) { TRACE( "Howitzer.Projectile#SpawnExplosionEffect", this ); }

                var explosion = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this._explosionParticle, position, pc.Quat.IDENTITY.clone());
                explosion.SetActive(true);
                explosion.GetComponent(UnityEngine.ParticleSystem).Play();
            },
            /*Howitzer.Projectile.SpawnExplosionEffect end.*/

            /*Howitzer.Projectile.ChangeTankColor start.*/
            ChangeTankColor: function (tank, color) {
if ( TRACE ) { TRACE( "Howitzer.Projectile#ChangeTankColor", this ); }

                var $t;
                var renderers = tank.GetComponentsInChildren(UnityEngine.Renderer);

                $t = Bridge.getEnumerator(renderers);
                try {
                    while ($t.moveNext()) {
                        var renderer = $t.Current;
                        var materials = renderer.materials;

                        if (materials.length >= 4) {
                            materials[3] = new UnityEngine.Material.$ctor1(materials[0]);
                        }

                        renderer.materials = materials;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Howitzer.Projectile.ChangeTankColor end.*/


        }
    });
    /*Howitzer.Projectile end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Indicatorr start.*/
    Bridge.define("Indicatorr", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            image: null,
            coroutine: null,
            fadeDuration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Indicatorr#init", this ); }

                this.fadeDuration = 2.0;
            }
        },
        methods: {
            /*Indicatorr.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Indicatorr#Awake", this ); }

                this.image = this.GetComponent(UnityEngine.UI.Image);

                if (this.coroutine != null) {
                    this.StopCoroutine$2(this.coroutine);
                }

                this.coroutine = this.StartCoroutine$1(this.FadeOut());
            },
            /*Indicatorr.Awake end.*/

            /*Indicatorr.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Indicatorr#Start", this ); }

                if (this.coroutine != null) {
                    this.StopCoroutine$2(this.coroutine);
                }

                this.coroutine = this.StartCoroutine$1(this.FadeOut());
            },
            /*Indicatorr.Start end.*/

            /*Indicatorr.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Indicatorr#OnEnable", this ); }

                if (this.coroutine != null) {
                    this.StopCoroutine$2(this.coroutine);
                }

                this.coroutine = this.StartCoroutine$1(this.FadeOut());
            },
            /*Indicatorr.OnEnable end.*/

            /*Indicatorr.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Indicatorr#OnDisable", this ); }

                if (this.coroutine != null) {
                    this.StopCoroutine$2(this.coroutine);
                    this.coroutine = null;
                }
            },
            /*Indicatorr.OnDisable end.*/

            /*Indicatorr.FadeOut start.*/
            FadeOut: function () {
if ( TRACE ) { TRACE( "Indicatorr#FadeOut", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsedTime,
                    startColor,
                    alpha,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsedTime = 0.0;
                                        startColor = this.image.color.$clone();

                                        // ������� ������������
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsedTime < this.fadeDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsedTime += UnityEngine.Time.deltaTime;
                                        alpha = pc.math.lerp(1.0, 0.0, elapsedTime / this.fadeDuration); // ������� ��������� ����� �� 1 �� 0
                                        this.image.color = new pc.Color( startColor.r, startColor.g, startColor.b, alpha ); // ��������� ����� ���� � ��������� ������

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    // ��������, ��� ����� ����� ����� 0 � �����
                                        this.image.color = new pc.Color( startColor.r, startColor.g, startColor.b, 0.0 );
                                        this.gameObject.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Indicatorr.FadeOut end.*/


        }
    });
    /*Indicatorr end.*/

    /*InteractiveArt start.*/
    Bridge.define("InteractiveArt", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _shopping: null,
            _arm: null,
            _arta1: null,
            _arta2: null,
            _particleSystem: null,
            secondCamera: null,
            transitionSpeed: 0,
            _audioSource: null
        },
        events: {
            Changed: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "InteractiveArt#init", this ); }

                this.transitionSpeed = 0.5;
            }
        },
        methods: {
            /*InteractiveArt.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "InteractiveArt#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    var ray = this.secondCamera.ScreenPointToRay(UnityEngine.Input.mousePosition);
                    var hit = { v : new UnityEngine.RaycastHit() };

                    if (UnityEngine.Physics.Raycast$1(ray, hit)) {
                        if (UnityEngine.Component.op_Inequality(hit.v.collider, null)) {
                            this._shopping.SetActive(true);
                            this._arm.gameObject.SetActive(false);
                        }
                    }
                }
            },
            /*InteractiveArt.Update end.*/

            /*InteractiveArt.SwapArtPieces start.*/
            SwapArtPieces: function () {
if ( TRACE ) { TRACE( "InteractiveArt#SwapArtPieces", this ); }

                this.StartCoroutine$1(this.AnimateSwap());
            },
            /*InteractiveArt.SwapArtPieces end.*/

            /*InteractiveArt.AnimateSwap start.*/
            AnimateSwap: function () {
if ( TRACE ) { TRACE( "InteractiveArt#AnimateSwap", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this._particleSystem.Play();
                                        this._audioSource.Play();

                                        this._arta1.gameObject.SetActive(false);
                                        this._arta2.gameObject.SetActive(true);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(3);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    !Bridge.staticEquals(this.Changed, null) ? this.Changed() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*InteractiveArt.AnimateSwap end.*/


        }
    });
    /*InteractiveArt end.*/

    /*JoystickPlayerExample start.*/
    Bridge.define("JoystickPlayerExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            variableJoystick: null,
            rb: null
        },
        methods: {
            /*JoystickPlayerExample.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "JoystickPlayerExample#FixedUpdate", this ); }

                var direction = new pc.Vec3( 0, 0, 1 ).clone().scale( this.variableJoystick.Vertical ).add( pc.Vec3.RIGHT.clone().clone().scale( this.variableJoystick.Horizontal ) );
                this.rb.AddForce$1(direction.$clone().clone().scale( this.speed ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.VelocityChange);
            },
            /*JoystickPlayerExample.FixedUpdate end.*/


        }
    });
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    Bridge.define("JoystickSetterExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            variableJoystick: null,
            valueText: null,
            background: null,
            axisSprites: null
        },
        methods: {
            /*JoystickSetterExample.ModeChanged start.*/
            ModeChanged: function (index) {
if ( TRACE ) { TRACE( "JoystickSetterExample#ModeChanged", this ); }

                switch (index) {
                    case 0: 
                        this.variableJoystick.SetMode(JoystickType.Fixed);
                        break;
                    case 1: 
                        this.variableJoystick.SetMode(JoystickType.Floating);
                        break;
                    case 2: 
                        this.variableJoystick.SetMode(JoystickType.Dynamic);
                        break;
                    default: 
                        break;
                }
            },
            /*JoystickSetterExample.ModeChanged end.*/

            /*JoystickSetterExample.AxisChanged start.*/
            AxisChanged: function (index) {
if ( TRACE ) { TRACE( "JoystickSetterExample#AxisChanged", this ); }

                switch (index) {
                    case 0: 
                        this.variableJoystick.AxisOptions = AxisOptions.Both;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 1: 
                        this.variableJoystick.AxisOptions = AxisOptions.Horizontal;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 2: 
                        this.variableJoystick.AxisOptions = AxisOptions.Vertical;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    default: 
                        break;
                }
            },
            /*JoystickSetterExample.AxisChanged end.*/

            /*JoystickSetterExample.SnapX start.*/
            SnapX: function (value) {
if ( TRACE ) { TRACE( "JoystickSetterExample#SnapX", this ); }

                this.variableJoystick.SnapX = value;
            },
            /*JoystickSetterExample.SnapX end.*/

            /*JoystickSetterExample.SnapY start.*/
            SnapY: function (value) {
if ( TRACE ) { TRACE( "JoystickSetterExample#SnapY", this ); }

                this.variableJoystick.SnapY = value;
            },
            /*JoystickSetterExample.SnapY end.*/

            /*JoystickSetterExample.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "JoystickSetterExample#Update", this ); }

                this.valueText.text = "Current Value: " + this.variableJoystick.Direction;
            },
            /*JoystickSetterExample.Update end.*/


        }
    });
    /*JoystickSetterExample end.*/

    /*JoystickType start.*/
    Bridge.define("JoystickType", {
        $kind: 6,
        statics: {
            fields: {
                Fixed: 0,
                Floating: 1,
                Dynamic: 2
            }
        }
    });
    /*JoystickType end.*/

    /*ManagerCamers start.*/
    Bridge.define("ManagerCamers", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _plauerCamera: null,
            _bulletCamera: null,
            _timeController: null,
            _playerZoom: null,
            _bullet: null,
            _forceBulletCamera: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ManagerCamers#init", this ); }

                this._forceBulletCamera = false;
            }
        },
        methods: {
            /*ManagerCamers.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ManagerCamers#Start", this ); }

                this.TurnPlayerCamera();
            },
            /*ManagerCamers.Start end.*/

            /*ManagerCamers.WatchingBullet start.*/
            WatchingBullet: function () {
if ( TRACE ) { TRACE( "ManagerCamers#WatchingBullet", this ); }

                // ������ �� ����� ������ ���� ��� ��� ��� ������� ���� Shoot2
                if (!this._playerZoom.CheckZoom() && !this._forceBulletCamera) {
                    return;
                }

                this._plauerCamera.gameObject.SetActive(false);
                this._bulletCamera.gameObject.SetActive(true);
                this._playerZoom.DisableZoomUI(); // ��������� zoomImage ��� ������������ ������
            },
            /*ManagerCamers.WatchingBullet end.*/

            /*ManagerCamers.GetBullet start.*/
            GetBullet: function (bullet, forceBulletCamera) {
if ( TRACE ) { TRACE( "ManagerCamers#GetBullet", this ); }

                if (forceBulletCamera === void 0) { forceBulletCamera = false; }
                if (UnityEngine.MonoBehaviour.op_Inequality(this._bullet, null)) {
                    this._bullet.removeCrashed(Bridge.fn.cacheBind(this, this.TurnPlayerCamera));
                }

                this._bullet = bullet;
                this._bullet.addCrashed(Bridge.fn.cacheBind(this, this.TurnPlayerCamera));

                this._forceBulletCamera = forceBulletCamera; // ��������� ���� ��� Shoot2
            },
            /*ManagerCamers.GetBullet end.*/

            /*ManagerCamers.TurnPlayerCamera start.*/
            TurnPlayerCamera: function () {
if ( TRACE ) { TRACE( "ManagerCamers#TurnPlayerCamera", this ); }

                this._bulletCamera.ReturnStartPosition();
                this._plauerCamera.gameObject.SetActive(true);
                this._bulletCamera.gameObject.SetActive(false);
                this._forceBulletCamera = false; // ���������� ����

                this._timeController.RestoreNormalTime();

                if (UnityEngine.MonoBehaviour.op_Inequality(this._bullet, null)) {
                    this._bullet.removeCrashed(Bridge.fn.cacheBind(this, this.TurnPlayerCamera));
                }

                if (this._playerZoom.CheckZoom()) {
                    this._playerZoom.EnableZoomUI(); // �������� zoomImage �������, ���� ��� �������
                }
            },
            /*ManagerCamers.TurnPlayerCamera end.*/


        }
    });
    /*ManagerCamers end.*/

    /*MissPoint start.*/
    Bridge.define("MissPoint", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _isTank: false
        },
        props: {
            IsTank: {
                get: function () {
if ( TRACE ) { TRACE( "MissPoint#IsTank#get", this ); }

                    return this._isTank;
                }
            }
        },
        methods: {
            /*MissPoint.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MissPoint#Update", this ); }

                this.Cast();
            },
            /*MissPoint.Update end.*/

            /*MissPoint.Cast start.*/
            Cast: function () {
if ( TRACE ) { TRACE( "MissPoint#Cast", this ); }

                var $t;
                var hitColliders = UnityEngine.Physics.OverlapSphere(this.transform.position, 1.0);

                $t = Bridge.getEnumerator(hitColliders);
                try {
                    while ($t.moveNext()) {
                        var collider = $t.Current;
                        var tankAI = { };
                        if (collider.TryGetComponent$1(BehaviourAI.TankAI, tankAI)) {
                            this._isTank = false;
                            return;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this._isTank = true;
            },
            /*MissPoint.Cast end.*/


        }
    });
    /*MissPoint end.*/

    /*Pumping start.*/
    Bridge.define("Pumping", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            m_Camera: null,
            _pumpingCamera: null,
            _UI: null,
            _arta1: null,
            _arm: null,
            _shopping: null,
            _interactiveArt: null,
            _tacticsFabric: null,
            _button: null,
            _titnSprite: null,
            _arm2: null,
            _sprites: null
        },
        methods: {
            /*Pumping.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Pumping#Awake", this ); }

                this._sprites = new (System.Collections.Generic.List$1(TitnSprite)).ctor();
            },
            /*Pumping.Awake end.*/

            /*Pumping.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Pumping#OnEnable", this ); }

                this._shopping.gameObject.SetActive(false);
                this._pumpingCamera.gameObject.SetActive(false);
                this._interactiveArt.addChanged(Bridge.fn.cacheBind(this, this.TurnPlayerCamera));
                this.StartCoroutine$1(this.StartPumping());
            },
            /*Pumping.OnEnable end.*/

            /*Pumping.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Pumping#OnDisable", this ); }

                this._interactiveArt.removeChanged(Bridge.fn.cacheBind(this, this.TurnPlayerCamera));
            },
            /*Pumping.OnDisable end.*/

            /*Pumping.RemoveSprites start.*/
            RemoveSprites: function () {
if ( TRACE ) { TRACE( "Pumping#RemoveSprites", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._sprites);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        item.gameObject.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Pumping.RemoveSprites end.*/

            /*Pumping.StartPumping start.*/
            StartPumping: function () {
if ( TRACE ) { TRACE( "Pumping#StartPumping", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.SetNormalPositionArte();
                                        this.TurnPumpingCamera();
                                        this._UI.SetActive(false);
                                        this._arm.gameObject.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Pumping.StartPumping end.*/

            /*Pumping.TurnPumpingCamera start.*/
            TurnPumpingCamera: function () {
if ( TRACE ) { TRACE( "Pumping#TurnPumpingCamera", this ); }

                this.m_Camera.gameObject.SetActive(false);
                this._pumpingCamera.gameObject.SetActive(true);
                this._button.gameObject.SetActive(true);
            },
            /*Pumping.TurnPumpingCamera end.*/

            /*Pumping.TurnPlayerCamera start.*/
            TurnPlayerCamera: function () {
if ( TRACE ) { TRACE( "Pumping#TurnPlayerCamera", this ); }

                this.m_Camera.gameObject.SetActive(true);
                this._pumpingCamera.gameObject.SetActive(false);
                this._UI.SetActive(true);
                this._shopping.gameObject.SetActive(false);
                this._arm2.gameObject.SetActive(true);

                //foreach (var tank in _tacticsFabric.Tanks)
                //{
                //    TitnSprite titnSprite = Instantiate(_titnSprite);
                //    titnSprite.Initialize(tank);
                //    _sprites.Add(titnSprite);
                //}
            },
            /*Pumping.TurnPlayerCamera end.*/

            /*Pumping.SetNormalPositionArte start.*/
            SetNormalPositionArte: function () {
if ( TRACE ) { TRACE( "Pumping#SetNormalPositionArte", this ); }

                this._arta1.transform.localPosition = new pc.Vec3( 0.9, 17.5, -4.0 );
                this._arta1.transform.localRotation = new pc.Quat().setFromEulerAngles_Unity( -1.1, -1.7, -8.0 );
            },
            /*Pumping.SetNormalPositionArte end.*/


        }
    });
    /*Pumping end.*/

    /*Shopping start.*/
    Bridge.define("Shopping", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _improveButton: null,
            _purchase: null,
            _unavailableWeaponButton: null,
            _shopping: null,
            _shoppingPlayer: null,
            _tanksFabric: null,
            _interactiveArt: null,
            _indicatorr: null
        },
        methods: {
            /*Shopping.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Shopping#OnEnable", this ); }

                this._improveButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.ShowShopping));
                this._purchase.onClick.AddListener(Bridge.fn.cacheBind(this._interactiveArt, this._interactiveArt.SwapArtPieces));
                this._purchase.onClick.AddListener(Bridge.fn.cacheBind(this, this.OffShoping));
                this._unavailableWeaponButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.ShowInventory));
            },
            /*Shopping.OnEnable end.*/

            /*Shopping.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Shopping#OnDisable", this ); }

                this._improveButton.onClick.RemoveListener(Bridge.fn.cacheBind(this, this.ShowShopping));
                this._purchase.onClick.RemoveListener(Bridge.fn.cacheBind(this._interactiveArt, this._interactiveArt.SwapArtPieces));
                this._unavailableWeaponButton.onClick.RemoveListener(Bridge.fn.cacheBind(this, this.ShowInventory));
            },
            /*Shopping.OnDisable end.*/

            /*Shopping.ShowShopping start.*/
            ShowShopping: function () {
if ( TRACE ) { TRACE( "Shopping#ShowShopping", this ); }

                this._improveButton.gameObject.SetActive(false);
                this._shopping.gameObject.SetActive(true);
            },
            /*Shopping.ShowShopping end.*/

            /*Shopping.OffShoping start.*/
            OffShoping: function () {
if ( TRACE ) { TRACE( "Shopping#OffShoping", this ); }

                this._shopping.gameObject.SetActive(false);
                this._shoppingPlayer.Upgrade();
            },
            /*Shopping.OffShoping end.*/

            /*Shopping.ShowInventory start.*/
            ShowInventory: function () {
if ( TRACE ) { TRACE( "Shopping#ShowInventory", this ); }

                this._indicatorr.gameObject.SetActive(true);
            },
            /*Shopping.ShowInventory end.*/


        }
    });
    /*Shopping end.*/

    /*TimeController start.*/
    Bridge.define("TimeController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            slowMotionScale: 0,
            slowMotionDuration: 0,
            restoreSpeedDuration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TimeController#init", this ); }

                this.slowMotionScale = 0.1;
                this.slowMotionDuration = 1.5;
                this.restoreSpeedDuration = 0.5;
            }
        },
        methods: {
            /*TimeController.StartSlowMotion start.*/
            StartSlowMotion: function () {
if ( TRACE ) { TRACE( "TimeController#StartSlowMotion", this ); }

                DG.Tweening.DOTween.Kill("TimeScale"); // ������� ������ ��������, ���� ��� ����

                UnityEngine.Time.timeScale = this.slowMotionScale;
                UnityEngine.Time.fixedDeltaTime = 0.02 * UnityEngine.Time.timeScale; // ������������ FixedUpdate
                DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.TweenSettingsExtensions.SetId$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTween.To$4(function () {
                    return UnityEngine.Time.timeScale;
                }, function (x) {
                    UnityEngine.Time.timeScale = x;
                }, 1.0, this.slowMotionDuration), DG.Tweening.Ease.OutQuad), "TimeScale"), function () {
                    UnityEngine.Time.fixedDeltaTime = 0.02 * UnityEngine.Time.timeScale;
                });
            },
            /*TimeController.StartSlowMotion end.*/

            /*TimeController.RestoreNormalTime start.*/
            RestoreNormalTime: function () {
if ( TRACE ) { TRACE( "TimeController#RestoreNormalTime", this ); }

                DG.Tweening.DOTween.Kill("TimeScale"); // ������������� ������ ��������, ���� ����
                DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.TweenSettingsExtensions.SetId$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTween.To$4(function () {
                    return UnityEngine.Time.timeScale;
                }, function (x) {
                    UnityEngine.Time.timeScale = x;
                }, 1.0, this.restoreSpeedDuration), DG.Tweening.Ease.OutQuad), "TimeScale"), function () {
                    UnityEngine.Time.fixedDeltaTime = 0.02 * UnityEngine.Time.timeScale;
                });
            },
            /*TimeController.RestoreNormalTime end.*/


        }
    });
    /*TimeController end.*/

    /*TitnSprite start.*/
    Bridge.define("TitnSprite", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _tank: null,
            offsetDistance: 0,
            heightOffset: 0,
            _camera: null,
            _degree: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TitnSprite#init", this ); }

                this.offsetDistance = 0.5;
                this.heightOffset = 0.2;
                this._degree = 180;
            }
        },
        methods: {
            /*TitnSprite.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "TitnSprite#OnEnable", this ); }

                this._camera = UnityEngine.Camera.main;
            },
            /*TitnSprite.OnEnable end.*/

            /*TitnSprite.Initialize start.*/
            Initialize: function (tank) {
if ( TRACE ) { TRACE( "TitnSprite#Initialize", this ); }

                this._tank = tank;
            },
            /*TitnSprite.Initialize end.*/

            /*TitnSprite.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "TitnSprite#LateUpdate", this ); }

                if (UnityEngine.Component.op_Equality(this._camera, null) || UnityEngine.GameObject.op_Equality(this._tank, null)) {
                    return;
                }

                var directionToCamera = (this._camera.transform.position.$clone().sub( this._tank.transform.position )).clone().normalize().$clone();
                var newPosition = this._tank.transform.position.$clone().add( directionToCamera.$clone().clone().scale( this.offsetDistance ) );

                newPosition.y += this.heightOffset;

                this.transform.position = newPosition.$clone();
                this.transform.LookAt$2(this._camera.transform.position);
                this.transform.Rotate(0, this._degree, 0);
            },
            /*TitnSprite.LateUpdate end.*/


        }
    });
    /*TitnSprite end.*/

    /*TutorialHand start.*/
    Bridge.define("TutorialHand", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            handImage: null,
            moveDistance: 0,
            moveDuration: 0,
            _tutorialHand2: null,
            _shootButton: null,
            _zoomButton: null,
            _isTouched: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TutorialHand#init", this ); }

                this.moveDistance = 100.0;
                this.moveDuration = 1.0;
                this._isTouched = false;
            }
        },
        methods: {
            /*TutorialHand.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TutorialHand#Start", this ); }

                this._tutorialHand2.gameObject.SetActive(false);
                this._shootButton.gameObject.SetActive(false);
                this._zoomButton.gameObject.SetActive(false);
                this.StartHandMovement();
            },
            /*TutorialHand.Start end.*/

            /*TutorialHand.StartHandMovement start.*/
            StartHandMovement: function () {
if ( TRACE ) { TRACE( "TutorialHand#StartHandMovement", this ); }

                DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPosX(this.handImage, this.handImage.anchoredPosition.x + this.moveDistance, this.moveDuration), DG.Tweening.Ease.InOutSine), -1, DG.Tweening.LoopType.Yoyo);
            },
            /*TutorialHand.StartHandMovement end.*/

            /*TutorialHand.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "TutorialHand#Update", this ); }

                if (this._isTouched) {
                    return;
                }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this._isTouched = true;
                    this.HideHand();
                }
            },
            /*TutorialHand.Update end.*/

            /*TutorialHand.HideHand start.*/
            HideHand: function () {
if ( TRACE ) { TRACE( "TutorialHand#HideHand", this ); }

                this._tutorialHand2.gameObject.SetActive(true);
                this._zoomButton.gameObject.SetActive(true);

                DG.Tweening.ShortcutExtensions.DOKill(this.handImage); // Остановить движение руки
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.handImage, pc.Vec3.ZERO.clone(), 0.3), DG.Tweening.Ease.InBack), Bridge.fn.bind(this, function () {
                    this.handImage.gameObject.SetActive(false); // Полностью отключить объект
                }));
            },
            /*TutorialHand.HideHand end.*/


        }
    });
    /*TutorialHand end.*/

    /*TutorialHand2 start.*/
    Bridge.define("TutorialHand2", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _shootButton: null,
            scaleSpeed: 0,
            scaleAmount: 0,
            initialScale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TutorialHand2#init", this ); }

                this.initialScale = new UnityEngine.Vector3();
                this.scaleSpeed = 1.0;
                this.scaleAmount = 0.2;
            }
        },
        methods: {
            /*TutorialHand2.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TutorialHand2#Start", this ); }

                this.initialScale = this.transform.localScale.$clone();
            },
            /*TutorialHand2.Start end.*/

            /*TutorialHand2.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "TutorialHand2#Update", this ); }

                var scaleFactor = 1 + UnityEngine.Mathf.PingPong(UnityEngine.Time.time * this.scaleSpeed, this.scaleAmount);
                this.transform.localScale = this.initialScale.$clone().clone().scale( scaleFactor );
            },
            /*TutorialHand2.Update end.*/

            /*TutorialHand2.FinishTraining start.*/
            FinishTraining: function () {
if ( TRACE ) { TRACE( "TutorialHand2#FinishTraining", this ); }

                this.gameObject.SetActive(false); // �������� ����
                this._shootButton.gameObject.SetActive(true); // ���������� ������
            },
            /*TutorialHand2.FinishTraining end.*/


        }
    });
    /*TutorialHand2 end.*/

    /*UI.ButtonPulse start.*/
    Bridge.define("UI.ButtonPulse", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            scaleMultiplier: 0,
            duration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UI.ButtonPulse#init", this ); }

                this.scaleMultiplier = 1.2;
                this.duration = 3.0;
            }
        },
        methods: {
            /*UI.ButtonPulse.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "UI.ButtonPulse#OnEnable", this ); }

                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.transform, this.scaleMultiplier, this.duration), -1, DG.Tweening.LoopType.Yoyo), DG.Tweening.Ease.InOutSine); // Плавная анимация
            },
            /*UI.ButtonPulse.OnEnable end.*/

            /*UI.ButtonPulse.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "UI.ButtonPulse#OnDisable", this ); }

                DG.Tweening.ShortcutExtensions.DOKill(this.transform); // Остановить анимацию, если объект отключён
            },
            /*UI.ButtonPulse.OnDisable end.*/


        }
    });
    /*UI.ButtonPulse end.*/

    /*UI.CrosshairMovement start.*/
    Bridge.define("UI.CrosshairMovement", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            joystick: null,
            crosshair: null,
            moveSpeed: 0,
            canvasRect: null,
            crosshairPosition: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UI.CrosshairMovement#init", this ); }

                this.crosshairPosition = new UnityEngine.Vector2();
                this.moveSpeed = 300.0;
            }
        },
        methods: {
            /*UI.CrosshairMovement.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "UI.CrosshairMovement#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.joystick, null) || UnityEngine.Component.op_Equality(this.crosshair, null) || UnityEngine.Component.op_Equality(this.canvasRect, null)) {
                    UnityEngine.Debug.LogError$2("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0432 \u0438\u043d\u0441\u043f\u0435\u043a\u0442\u043e\u0440\u0435!");
                    this.enabled = false;
                }


                this.crosshairPosition = this.crosshair.anchoredPosition.$clone();
            },
            /*UI.CrosshairMovement.Start end.*/

            /*UI.CrosshairMovement.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "UI.CrosshairMovement#Update", this ); }

                var direction = this.joystick.Direction.$clone();

                if (direction.length() > 0.1) {
                    this.crosshairPosition = this.crosshairPosition.$clone().add( direction.$clone().scale( this.moveSpeed ).scale( UnityEngine.Time.deltaTime ) );

                    this.crosshairPosition = this.ClampToCanvas(this.crosshairPosition.$clone());
                }

                this.crosshair.anchoredPosition = this.crosshairPosition.$clone();
            },
            /*UI.CrosshairMovement.Update end.*/

            /*UI.CrosshairMovement.ClampToCanvas start.*/
            ClampToCanvas: function (position) {
if ( TRACE ) { TRACE( "UI.CrosshairMovement#ClampToCanvas", this ); }

                var min = this.canvasRect.sizeDelta.$clone().scale( -1 ).scale( 1.0 / ( 2 ) );
                var max = this.canvasRect.sizeDelta.$clone().scale( 1.0 / ( 2 ) );

                position.x = Math.max(min.x, Math.min(position.x, max.x));
                position.y = Math.max(min.y, Math.min(position.y, max.y));

                return position.$clone();
            },
            /*UI.CrosshairMovement.ClampToCanvas end.*/


        }
    });
    /*UI.CrosshairMovement end.*/

    /*UI.EndCardAnimation start.*/
    Bridge.define("UI.EndCardAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            background: null,
            title: null,
            logoAndButton: null,
            titleText: null,
            fadeDuration: 0,
            scaleDuration: 0,
            scaleEase: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UI.EndCardAnimation#init", this ); }

                this.fadeDuration = 0.5;
                this.scaleDuration = 0.5;
                this.scaleEase = DG.Tweening.Ease.OutBack;
            }
        },
        methods: {
            /*UI.EndCardAnimation.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "UI.EndCardAnimation#OnEnable", this ); }

                this.PlayAnimation();
                this.ResizeText();
            },
            /*UI.EndCardAnimation.OnEnable end.*/

            /*UI.EndCardAnimation.PlayAnimation start.*/
            PlayAnimation: function () {
if ( TRACE ) { TRACE( "UI.EndCardAnimation#PlayAnimation", this ); }


                this.background.alpha = 0;
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(this.background, 1, this.fadeDuration), DG.Tweening.Ease.Linear);

                this.logoAndButton.localScale = pc.Vec3.ZERO.clone();
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.logoAndButton, new pc.Vec3( 1, 1, 1 ), this.scaleDuration), this.scaleEase);

            },
            /*UI.EndCardAnimation.PlayAnimation end.*/

            /*UI.EndCardAnimation.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "UI.EndCardAnimation#OnDisable", this ); }

                DG.Tweening.ShortcutExtensions.DOKill(this.background);
                DG.Tweening.ShortcutExtensions.DOKill(this.logoAndButton);
            },
            /*UI.EndCardAnimation.OnDisable end.*/

            /*UI.EndCardAnimation.ResizeText start.*/
            ResizeText: function () {
if ( TRACE ) { TRACE( "UI.EndCardAnimation#ResizeText", this ); }

                if (UnityEngine.Screen.width > UnityEngine.Screen.height) {
                    this.title.GetComponent(UnityEngine.RectTransform).position = UnityEngine.Vector3.FromVector2(new pc.Vec2( this.title.GetComponent(UnityEngine.RectTransform).position.x, 350.0 ));
                }

            },
            /*UI.EndCardAnimation.ResizeText end.*/


        }
    });
    /*UI.EndCardAnimation end.*/

    /*UI.PlayerUIController start.*/
    Bridge.define("UI.PlayerUIController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                OnShoot: null,
                OnZoom: null
            }
        },
        fields: {
            shootButton: null,
            zoomButton: null,
            _cross: null,
            _mark: null,
            _tutorialHand2: null
        },
        methods: {
            /*UI.PlayerUIController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "UI.PlayerUIController#Start", this ); }

                this.shootButton.onClick.AddListener(function () {
                    !Bridge.staticEquals(UI.PlayerUIController.OnShoot, null) ? UI.PlayerUIController.OnShoot() : null;
                });
                this.zoomButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.FinishTraining));
            },
            /*UI.PlayerUIController.Start end.*/

            /*UI.PlayerUIController.ShowCross start.*/
            ShowCross: function () {
if ( TRACE ) { TRACE( "UI.PlayerUIController#ShowCross", this ); }

                this._cross.gameObject.SetActive(true);
            },
            /*UI.PlayerUIController.ShowCross end.*/

            /*UI.PlayerUIController.ShowMark start.*/
            ShowMark: function () {
if ( TRACE ) { TRACE( "UI.PlayerUIController#ShowMark", this ); }

                this._mark.gameObject.SetActive(true);
            },
            /*UI.PlayerUIController.ShowMark end.*/

            /*UI.PlayerUIController.FinishTraining start.*/
            FinishTraining: function () {
if ( TRACE ) { TRACE( "UI.PlayerUIController#FinishTraining", this ); }

                !Bridge.staticEquals(UI.PlayerUIController.OnZoom, null) ? UI.PlayerUIController.OnZoom() : null;
                this._tutorialHand2.FinishTraining();
            },
            /*UI.PlayerUIController.FinishTraining end.*/


        }
    });
    /*UI.PlayerUIController end.*/

    /*UI.TankKillCounter start.*/
    Bridge.define("UI.TankKillCounter", {
        statics: {
            fields: {
                _tankKillCount: 0
            },
            props: {
                KillCount: {
                    get: function () {
if ( TRACE ) { TRACE( "UI.TankKillCounter#KillCount#get", this ); }

                        return UI.TankKillCounter._tankKillCount;
                    }
                }
            },
            methods: {
                /*UI.TankKillCounter.NotifyTankDestroyed:static start.*/
                NotifyTankDestroyed: function () {
if ( TRACE ) { TRACE( "UI.TankKillCounter#NotifyTankDestroyed", this ); }

                    UI.TankKillCounter._tankKillCount = (UI.TankKillCounter._tankKillCount + 1) | 0;
                },
                /*UI.TankKillCounter.NotifyTankDestroyed:static end.*/


            }
        }
    });
    /*UI.TankKillCounter end.*/

    /*UI.TankKillStatistics start.*/
    Bridge.define("UI.TankKillStatistics", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                FillIncrement: 0
            },
            events: {
                onStartCountTankKilled: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "UI.TankKillStatistics#init", this ); }

                    this.FillIncrement = 0.33;
                }
            }
        },
        methods: {
            /*UI.TankKillStatistics.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "UI.TankKillStatistics#Update", this ); }


                UnityEngine.Debug.Log$1(System.String.format("\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u043d\u0438\u0447\u0442-\u043d\u044b\u0445 \u0442\u0430\u043d\u043a\u043e\u0432: {0}", [Bridge.box(UI.TankKillCounter.KillCount, System.Int32)]));

                var startCountTankKilled = 3;
                if (UI.TankKillCounter.KillCount >= startCountTankKilled) {
                    !Bridge.staticEquals(UI.TankKillStatistics.onStartCountTankKilled, null) ? UI.TankKillStatistics.onStartCountTankKilled() : null;
                }
            },
            /*UI.TankKillStatistics.Update end.*/


        }
    });
    /*UI.TankKillStatistics end.*/

    /*DynamicJoystick start.*/
    Bridge.define("DynamicJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#init", this ); }

                this.moveThreshold = 1;
            }
        },
        methods: {
            /*DynamicJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#Start", this ); }

                this.MoveThreshold = this.moveThreshold;
                Joystick.prototype.Start.call(this);
            },
            /*DynamicJoystick.Start end.*/

            /*DynamicJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position);

                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerDown end.*/

            /*DynamicJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerUp", this ); }


                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerUp end.*/

            /*DynamicJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "DynamicJoystick#HandleInput", this ); }

                if (magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised, radius, cam);
            },
            /*DynamicJoystick.HandleInput end.*/


        }
    });
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    Bridge.define("FixedJoystick", {
        inherits: [Joystick]
    });
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    Bridge.define("FloatingJoystick", {
        inherits: [Joystick],
        fields: {
            isFloating: false,
            joystickArea: null,
            startPosition$1: null
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FloatingJoystick#init", this ); }

                this.startPosition$1 = new UnityEngine.Vector2();
                this.isFloating = true;
            }
        },
        methods: {
            /*FloatingJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FloatingJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.startPosition$1 = this.background.anchoredPosition.$clone(); // Запоминаем исходное положение джойстика
            },
            /*FloatingJoystick.Start end.*/

            /*FloatingJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerDown", this ); }

                if (this.isFloating) {
                    // Проверяем, попадает ли касание в зону джойстика
                    if (UnityEngine.RectTransformUtility.RectangleContainsScreenPoint(this.joystickArea, eventData.position)) {
                        this.background.position = UnityEngine.Vector3.FromVector2(eventData.position.$clone()); // Перемещаем джойстик к точке касания
                    }
                }
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerDown end.*/

            /*FloatingJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerUp", this ); }

                Joystick.prototype.OnPointerUp.call(this, eventData);
                if (this.isFloating) {
                    this.background.anchoredPosition = this.startPosition$1.$clone(); // Возвращаем джойстик на место
                }
            },
            /*FloatingJoystick.OnPointerUp end.*/


        }
    });
    /*FloatingJoystick end.*/

    /*VariableJoystick start.*/
    Bridge.define("VariableJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0,
            joystickType: 0,
            fixedPosition: null
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "VariableJoystick#init", this ); }

                this.fixedPosition = new UnityEngine.Vector2();
                this.moveThreshold = 1;
                this.joystickType = JoystickType.Fixed;
                this.fixedPosition = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*VariableJoystick.SetMode start.*/
            SetMode: function (joystickType) {
if ( TRACE ) { TRACE( "VariableJoystick#SetMode", this ); }

                this.joystickType = joystickType;
                if (joystickType === JoystickType.Fixed) {
                    this.background.anchoredPosition = this.fixedPosition.$clone();

                }


            },
            /*VariableJoystick.SetMode end.*/

            /*VariableJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "VariableJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.fixedPosition = this.background.anchoredPosition.$clone();
                this.SetMode(this.joystickType);
            },
            /*VariableJoystick.Start end.*/

            /*VariableJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerDown", this ); }

                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position);

                }
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*VariableJoystick.OnPointerDown end.*/

            /*VariableJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerUp", this ); }


                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*VariableJoystick.OnPointerUp end.*/

            /*VariableJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "VariableJoystick#HandleInput", this ); }

                if (this.joystickType === JoystickType.Dynamic && magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised, radius, cam);
            },
            /*VariableJoystick.HandleInput end.*/


        }
    });
    /*VariableJoystick end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System.Collections","System","UnityEngine","System.Collections.Generic","UnityEngine.UI","UnityEngine.EventSystems","Howitzer","Fabric","DG.Tweening","UI","BehaviourAI","Bootstraps","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*CFX_AutoDestructShuriken start.*/
    $m("CFX_AutoDestructShuriken", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.ParticleSystem)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckIfAlive","t":8,"sn":"CheckIfAlive","rt":$n[0].IEnumerator},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"OnlyDeactivate","t":4,"rt":$n[1].Boolean,"sn":"OnlyDeactivate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*CFX_AutoDestructShuriken end.*/

    /*CFX_LightIntensityFade start.*/
    $m("CFX_LightIntensityFade", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Light)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"autodestruct","t":4,"rt":$n[1].Boolean,"sn":"autodestruct","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"baseIntensity","t":4,"rt":$n[1].Single,"sn":"baseIntensity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"delay","t":4,"rt":$n[1].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"finalIntensity","t":4,"rt":$n[1].Single,"sn":"finalIntensity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"p_delay","t":4,"rt":$n[1].Single,"sn":"p_delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"p_lifetime","t":4,"rt":$n[1].Single,"sn":"p_lifetime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CFX_LightIntensityFade end.*/

    /*CFX_SpawnSystem start.*/
    $m("CFX_SpawnSystem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"GetNextObject","is":true,"t":8,"pi":[{"n":"sourceObj","pt":$n[2].GameObject,"ps":0},{"n":"activateObject","dv":true,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"GetNextObject","rt":$n[2].GameObject,"p":[$n[2].GameObject,$n[1].Boolean]},{"a":2,"n":"PreloadObject","is":true,"t":8,"pi":[{"n":"sourceObj","pt":$n[2].GameObject,"ps":0},{"n":"poolSize","dv":1,"o":true,"pt":$n[1].Int32,"ps":1}],"sn":"PreloadObject","rt":$n[1].Void,"p":[$n[2].GameObject,$n[1].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"UnloadObjects","is":true,"t":8,"pi":[{"n":"sourceObj","pt":$n[2].GameObject,"ps":0}],"sn":"UnloadObjects","rt":$n[1].Void,"p":[$n[2].GameObject]},{"a":1,"n":"addObjectToPool","t":8,"pi":[{"n":"sourceObject","pt":$n[2].GameObject,"ps":0},{"n":"number","pt":$n[1].Int32,"ps":1}],"sn":"addObjectToPool","rt":$n[1].Void,"p":[$n[2].GameObject,$n[1].Int32]},{"a":1,"n":"increasePoolCursor","t":8,"pi":[{"n":"uniqueId","pt":$n[1].Int32,"ps":0}],"sn":"increasePoolCursor","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":1,"n":"removeObjectsFromPool","t":8,"pi":[{"n":"sourceObject","pt":$n[2].GameObject,"ps":0}],"sn":"removeObjectsFromPool","rt":$n[1].Void,"p":[$n[2].GameObject]},{"a":2,"n":"AllObjectsLoaded","is":true,"t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_AllObjectsLoaded","t":8,"rt":$n[1].Boolean,"fg":"AllObjectsLoaded","is":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"AllObjectsLoaded"},{"a":1,"n":"allObjectsLoaded","t":4,"rt":$n[1].Boolean,"sn":"allObjectsLoaded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"hideObjectsInHierarchy","t":4,"rt":$n[1].Boolean,"sn":"hideObjectsInHierarchy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"instance","is":true,"t":4,"rt":CFX_SpawnSystem,"sn":"instance"},{"a":2,"n":"instantiateIfNeeded","t":4,"rt":$n[1].Boolean,"sn":"instantiateIfNeeded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"instantiatedObjects","t":4,"rt":$n[3].Dictionary$2(System.Int32,System.Collections.Generic.List$1(UnityEngine.GameObject)),"sn":"instantiatedObjects"},{"a":2,"n":"objectsToPreload","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"objectsToPreload"},{"a":2,"n":"objectsToPreloadTimes","t":4,"rt":$n[1].Array.type(System.Int32),"sn":"objectsToPreloadTimes"},{"a":2,"n":"onlyGetInactiveObjects","t":4,"rt":$n[1].Boolean,"sn":"onlyGetInactiveObjects","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"poolCursors","t":4,"rt":$n[3].Dictionary$2(System.Int32,System.Int32),"sn":"poolCursors"},{"a":2,"n":"spawnAsChildren","t":4,"rt":$n[1].Boolean,"sn":"spawnAsChildren","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*CFX_SpawnSystem end.*/

    /*JoystickPlayerExample start.*/
    $m("JoystickPlayerExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[1].Void},{"a":2,"n":"rb","t":4,"rt":$n[2].Rigidbody,"sn":"rb"},{"a":2,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    $m("JoystickSetterExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AxisChanged","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"AxisChanged","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"ModeChanged","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"ModeChanged","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SnapX","t":8,"pi":[{"n":"value","pt":$n[1].Boolean,"ps":0}],"sn":"SnapX","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"SnapY","t":8,"pi":[{"n":"value","pt":$n[1].Boolean,"ps":0}],"sn":"SnapY","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"axisSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"axisSprites"},{"a":2,"n":"background","t":4,"rt":$n[4].Image,"sn":"background"},{"a":2,"n":"valueText","t":4,"rt":$n[4].Text,"sn":"valueText"},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickSetterExample end.*/

    /*Joystick start.*/
    $m("Joystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FormatInput","t":8,"sn":"FormatInput","rt":$n[1].Void},{"v":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[1].Single,"ps":0},{"n":"normalised","pt":$n[2].Vector2,"ps":1},{"n":"radius","pt":$n[2].Vector2,"ps":2},{"n":"cam","pt":$n[2].Camera,"ps":3}],"sn":"HandleInput","rt":$n[1].Void,"p":[$n[1].Single,$n[2].Vector2,$n[2].Vector2,$n[2].Camera]},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[1].Void,"p":[$n[5].PointerEventData]},{"v":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[1].Void,"p":[$n[5].PointerEventData]},{"v":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[1].Void,"p":[$n[5].PointerEventData]},{"a":3,"n":"ScreenPointToAnchoredPosition","t":8,"pi":[{"n":"screenPosition","pt":$n[2].Vector2,"ps":0}],"sn":"ScreenPointToAnchoredPosition","rt":$n[2].Vector2,"p":[$n[2].Vector2]},{"a":1,"n":"SnapFloat","t":8,"pi":[{"n":"value","pt":$n[1].Single,"ps":0},{"n":"snapAxis","pt":AxisOptions,"ps":1}],"sn":"SnapFloat","rt":$n[1].Single,"p":[$n[1].Single,AxisOptions],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"AxisOptions","t":16,"rt":AxisOptions,"g":{"a":2,"n":"get_AxisOptions","t":8,"rt":AxisOptions,"fg":"AxisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},"s":{"a":2,"n":"set_AxisOptions","t":8,"p":[AxisOptions],"rt":$n[1].Void,"fs":"AxisOptions"},"fn":"AxisOptions"},{"a":2,"n":"DeadZone","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_DeadZone","t":8,"rt":$n[1].Single,"fg":"DeadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_DeadZone","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"DeadZone"},"fn":"DeadZone"},{"a":2,"n":"Direction","t":16,"rt":$n[2].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[2].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"HandleRange","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_HandleRange","t":8,"rt":$n[1].Single,"fg":"HandleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_HandleRange","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"HandleRange"},"fn":"HandleRange"},{"a":2,"n":"Horizontal","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_Horizontal","t":8,"rt":$n[1].Single,"fg":"Horizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Horizontal"},{"a":2,"n":"SnapX","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_SnapX","t":8,"rt":$n[1].Boolean,"fg":"SnapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapX","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"SnapX"},"fn":"SnapX"},{"a":2,"n":"SnapY","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_SnapY","t":8,"rt":$n[1].Boolean,"fg":"SnapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapY","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"SnapY"},"fn":"SnapY"},{"a":2,"n":"Vertical","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_Vertical","t":8,"rt":$n[1].Single,"fg":"Vertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Vertical"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axisOptions","t":4,"rt":AxisOptions,"sn":"axisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"background","t":4,"rt":$n[2].RectTransform,"sn":"background"},{"a":1,"n":"baseRect","t":4,"rt":$n[2].RectTransform,"sn":"baseRect"},{"a":1,"n":"cam","t":4,"rt":$n[2].Camera,"sn":"cam"},{"a":1,"n":"canvas","t":4,"rt":$n[2].Canvas,"sn":"canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadZone","t":4,"rt":$n[1].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"handle","t":4,"rt":$n[2].RectTransform,"sn":"handle$1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handleRange","t":4,"rt":$n[1].Single,"sn":"handleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"input","t":4,"rt":$n[2].Vector2,"sn":"input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapX","t":4,"rt":$n[1].Boolean,"sn":"snapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapY","t":4,"rt":$n[1].Boolean,"sn":"snapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"startPosition","t":4,"rt":$n[2].Vector3,"sn":"startPosition"}]}; }, $n);
    /*Joystick end.*/

    /*AxisOptions start.*/
    $m("AxisOptions", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":AxisOptions,"sn":"Both","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":AxisOptions,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":AxisOptions,"sn":"Vertical","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}}]}; }, $n);
    /*AxisOptions end.*/

    /*DynamicJoystick start.*/
    $m("DynamicJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[1].Single,"ps":0},{"n":"normalised","pt":$n[2].Vector2,"ps":1},{"n":"radius","pt":$n[2].Vector2,"ps":2},{"n":"cam","pt":$n[2].Camera,"ps":3}],"sn":"HandleInput","rt":$n[1].Void,"p":[$n[1].Single,$n[2].Vector2,$n[2].Vector2,$n[2].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[1].Void,"p":[$n[5].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[1].Void,"p":[$n[5].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[1].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[1].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    $m("FixedJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    $m("FloatingJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[1].Void,"p":[$n[5].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[1].Void,"p":[$n[5].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isFloating","t":4,"rt":$n[1].Boolean,"sn":"isFloating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickArea","t":4,"rt":$n[2].RectTransform,"sn":"joystickArea"},{"a":1,"n":"startPosition","t":4,"rt":$n[2].Vector2,"sn":"startPosition$1"}]}; }, $n);
    /*FloatingJoystick end.*/

    /*VariableJoystick start.*/
    $m("VariableJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[1].Single,"ps":0},{"n":"normalised","pt":$n[2].Vector2,"ps":1},{"n":"radius","pt":$n[2].Vector2,"ps":2},{"n":"cam","pt":$n[2].Camera,"ps":3}],"sn":"HandleInput","rt":$n[1].Void,"p":[$n[1].Single,$n[2].Vector2,$n[2].Vector2,$n[2].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[1].Void,"p":[$n[5].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[1].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"SetMode","t":8,"pi":[{"n":"joystickType","pt":JoystickType,"ps":0}],"sn":"SetMode","rt":$n[1].Void,"p":[JoystickType]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[1].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":1,"n":"fixedPosition","t":4,"rt":$n[2].Vector2,"sn":"fixedPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickType","t":4,"rt":JoystickType,"sn":"joystickType","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[1].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*VariableJoystick end.*/

    /*JoystickType start.*/
    $m("JoystickType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dynamic","is":true,"t":4,"rt":JoystickType,"sn":"Dynamic","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Fixed","is":true,"t":4,"rt":JoystickType,"sn":"Fixed","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Floating","is":true,"t":4,"rt":JoystickType,"sn":"Floating","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}}]}; }, $n);
    /*JoystickType end.*/

    /*TimeController start.*/
    $m("TimeController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"RestoreNormalTime","t":8,"sn":"RestoreNormalTime","rt":$n[1].Void},{"a":2,"n":"StartSlowMotion","t":8,"sn":"StartSlowMotion","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"restoreSpeedDuration","t":4,"rt":$n[1].Single,"sn":"restoreSpeedDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slowMotionDuration","t":4,"rt":$n[1].Single,"sn":"slowMotionDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slowMotionScale","t":4,"rt":$n[1].Single,"sn":"slowMotionScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TimeController end.*/

    /*FollowBullet start.*/
    $m("FollowBullet", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"GetBullet","t":8,"pi":[{"n":"bullet","pt":$n[2].GameObject,"ps":0}],"sn":"GetBullet","rt":$n[1].Void,"p":[$n[2].GameObject]},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":2,"n":"ReturnStartPosition","t":8,"sn":"ReturnStartPosition","rt":$n[1].Void},{"a":1,"n":"_bullet","t":4,"rt":$n[2].GameObject,"sn":"_bullet"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_offset","t":4,"rt":$n[2].Vector3,"sn":"_offset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_smoothSpeed","t":4,"rt":$n[1].Single,"sn":"_smoothSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_startPosition","t":4,"rt":$n[2].Vector3,"sn":"_startPosition"}]}; }, $n);
    /*FollowBullet end.*/

    /*ManagerCamers start.*/
    $m("ManagerCamers", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetBullet","t":8,"pi":[{"n":"bullet","pt":$n[6].Projectile,"ps":0},{"n":"forceBulletCamera","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"GetBullet","rt":$n[1].Void,"p":[$n[6].Projectile,$n[1].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"TurnPlayerCamera","t":8,"sn":"TurnPlayerCamera","rt":$n[1].Void},{"a":2,"n":"WatchingBullet","t":8,"sn":"WatchingBullet","rt":$n[1].Void},{"a":1,"n":"_bullet","t":4,"rt":$n[6].Projectile,"sn":"_bullet"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bulletCamera","t":4,"rt":FollowBullet,"sn":"_bulletCamera"},{"a":1,"n":"_forceBulletCamera","t":4,"rt":$n[1].Boolean,"sn":"_forceBulletCamera","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_plauerCamera","t":4,"rt":$n[2].Camera,"sn":"_plauerCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_playerZoom","t":4,"rt":$n[6].PlayerZoom,"sn":"_playerZoom"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_timeController","t":4,"rt":TimeController,"sn":"_timeController"}]}; }, $n);
    /*ManagerCamers end.*/

    /*MissPoint start.*/
    $m("MissPoint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Cast","t":8,"sn":"Cast","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"IsTank","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsTank","t":8,"rt":$n[1].Boolean,"fg":"IsTank","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsTank"},{"a":1,"n":"_isTank","t":4,"rt":$n[1].Boolean,"sn":"_isTank","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*MissPoint end.*/

    /*Pumping start.*/
    $m("Pumping", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"RemoveSprites","t":8,"sn":"RemoveSprites","rt":$n[1].Void},{"a":1,"n":"SetNormalPositionArte","t":8,"sn":"SetNormalPositionArte","rt":$n[1].Void},{"a":1,"n":"StartPumping","t":8,"sn":"StartPumping","rt":$n[0].IEnumerator},{"a":1,"n":"TurnPlayerCamera","t":8,"sn":"TurnPlayerCamera","rt":$n[1].Void},{"a":1,"n":"TurnPumpingCamera","t":8,"sn":"TurnPumpingCamera","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_UI","t":4,"rt":$n[2].GameObject,"sn":"_UI"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":HandAnimation,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm2","t":4,"rt":$n[2].GameObject,"sn":"_arm2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arta1","t":4,"rt":$n[2].GameObject,"sn":"_arta1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[4].Button,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_interactiveArt","t":4,"rt":InteractiveArt,"sn":"_interactiveArt"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pumpingCamera","t":4,"rt":$n[2].Camera,"sn":"_pumpingCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_shopping","t":4,"rt":Shopping,"sn":"_shopping"},{"a":1,"n":"_sprites","t":4,"rt":$n[3].List$1(TitnSprite),"sn":"_sprites"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tacticsFabric","t":4,"rt":$n[7].TanksFabric,"sn":"_tacticsFabric"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_titnSprite","t":4,"rt":TitnSprite,"sn":"_titnSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_Camera","t":4,"rt":$n[2].Camera,"sn":"m_Camera"}]}; }, $n);
    /*Pumping end.*/

    /*Shopping start.*/
    $m("Shopping", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OffShoping","t":8,"sn":"OffShoping","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"ShowInventory","t":8,"sn":"ShowInventory","rt":$n[1].Void},{"a":2,"n":"ShowShopping","t":8,"sn":"ShowShopping","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_improveButton","t":4,"rt":$n[4].Button,"sn":"_improveButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_indicatorr","t":4,"rt":Indicatorr,"sn":"_indicatorr"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_interactiveArt","t":4,"rt":InteractiveArt,"sn":"_interactiveArt"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_purchase","t":4,"rt":$n[4].Button,"sn":"_purchase"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_shopping","t":4,"rt":$n[2].GameObject,"sn":"_shopping"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_shoppingPlayer","t":4,"rt":$n[6].PlayerShooting,"sn":"_shoppingPlayer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tanksFabric","t":4,"rt":$n[7].TanksFabric,"sn":"_tanksFabric"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unavailableWeaponButton","t":4,"rt":$n[4].Button,"sn":"_unavailableWeaponButton"}]}; }, $n);
    /*Shopping end.*/

    /*Cross start.*/
    $m("Cross", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"ScaleAndDisable","t":8,"sn":"ScaleAndDisable","rt":$n[0].IEnumerator},{"a":1,"n":"ScaleOverTime","t":8,"pi":[{"n":"targetScale","pt":$n[2].Vector3,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1}],"sn":"ScaleOverTime","rt":$n[0].IEnumerator,"p":[$n[2].Vector3,$n[1].Single]}]}; }, $n);
    /*Cross end.*/

    /*ExclamationMark start.*/
    $m("ExclamationMark", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"SwitchOff","t":8,"sn":"SwitchOff","rt":$n[0].IEnumerator},{"a":1,"n":"_camera","t":4,"rt":$n[2].Camera,"sn":"_camera"},{"a":1,"n":"_degree","t":4,"rt":$n[1].Single,"sn":"_degree","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ExclamationMark end.*/

    /*Guidance start.*/
    $m("Guidance", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tanksFabric","t":4,"rt":$n[7].TanksFabric,"sn":"_tanksFabric"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"secondCamera","t":4,"rt":$n[2].Camera,"sn":"secondCamera"}]}; }, $n);
    /*Guidance end.*/

    /*HandAnimation start.*/
    $m("HandAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"initialScale","t":4,"rt":$n[2].Vector3,"sn":"initialScale"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleAmount","t":4,"rt":$n[1].Single,"sn":"scaleAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleSpeed","t":4,"rt":$n[1].Single,"sn":"scaleSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*HandAnimation end.*/

    /*Indicatorr start.*/
    $m("Indicatorr", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"FadeOut","t":8,"sn":"FadeOut","rt":$n[0].IEnumerator},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"coroutine","t":4,"rt":$n[2].Coroutine,"sn":"coroutine"},{"a":2,"n":"fadeDuration","t":4,"rt":$n[1].Single,"sn":"fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"image","t":4,"rt":$n[4].Image,"sn":"image"}]}; }, $n);
    /*Indicatorr end.*/

    /*TitnSprite start.*/
    $m("TitnSprite", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"tank","pt":$n[2].GameObject,"ps":0}],"sn":"Initialize","rt":$n[1].Void,"p":[$n[2].GameObject]},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"_camera","t":4,"rt":$n[2].Camera,"sn":"_camera"},{"a":1,"n":"_degree","t":4,"rt":$n[1].Single,"sn":"_degree","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tank","t":4,"rt":$n[2].GameObject,"sn":"_tank"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"heightOffset","t":4,"rt":$n[1].Single,"sn":"heightOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"offsetDistance","t":4,"rt":$n[1].Single,"sn":"offsetDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TitnSprite end.*/

    /*InteractiveArt start.*/
    $m("InteractiveArt", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateSwap","t":8,"sn":"AnimateSwap","rt":$n[0].IEnumerator},{"a":2,"n":"SwapArtPieces","t":8,"sn":"SwapArtPieces","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":TitnSprite,"sn":"_arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arta1","t":4,"rt":$n[2].GameObject,"sn":"_arta1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arta2","t":4,"rt":$n[2].GameObject,"sn":"_arta2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_audioSource","t":4,"rt":$n[2].AudioSource,"sn":"_audioSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_particleSystem","t":4,"rt":$n[2].ParticleSystem,"sn":"_particleSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_shopping","t":4,"rt":$n[2].GameObject,"sn":"_shopping"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"secondCamera","t":4,"rt":$n[2].Camera,"sn":"secondCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transitionSpeed","t":4,"rt":$n[1].Single,"sn":"transitionSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Changed","t":2,"ad":{"a":2,"n":"add_Changed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addChanged","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_Changed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeChanged","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*InteractiveArt end.*/

    /*TutorialHand start.*/
    $m("TutorialHand", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HideHand","t":8,"sn":"HideHand","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"StartHandMovement","t":8,"sn":"StartHandMovement","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"_isTouched","t":4,"rt":$n[1].Boolean,"sn":"_isTouched","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_shootButton","t":4,"rt":$n[4].Button,"sn":"_shootButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tutorialHand2","t":4,"rt":TutorialHand2,"sn":"_tutorialHand2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_zoomButton","t":4,"rt":$n[4].Button,"sn":"_zoomButton"},{"at":[new UnityEngine.HeaderAttribute("\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handImage","t":4,"rt":$n[2].RectTransform,"sn":"handImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDistance","t":4,"rt":$n[1].Single,"sn":"moveDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveDuration","t":4,"rt":$n[1].Single,"sn":"moveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TutorialHand end.*/

    /*TutorialHand2 start.*/
    $m("TutorialHand2", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FinishTraining","t":8,"sn":"FinishTraining","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_shootButton","t":4,"rt":$n[4].Button,"sn":"_shootButton"},{"a":1,"n":"initialScale","t":4,"rt":$n[2].Vector3,"sn":"initialScale"},{"a":2,"n":"scaleAmount","t":4,"rt":$n[1].Single,"sn":"scaleAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"scaleSpeed","t":4,"rt":$n[1].Single,"sn":"scaleSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TutorialHand2 end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*UI.ButtonPulse start.*/
    $m("UI.ButtonPulse", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleMultiplier","t":4,"rt":$n[1].Single,"sn":"scaleMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UI.ButtonPulse end.*/

    /*UI.CrosshairMovement start.*/
    $m("UI.CrosshairMovement", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ClampToCanvas","t":8,"pi":[{"n":"position","pt":$n[2].Vector2,"ps":0}],"sn":"ClampToCanvas","rt":$n[2].Vector2,"p":[$n[2].Vector2]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canvasRect","t":4,"rt":$n[2].RectTransform,"sn":"canvasRect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"crosshair","t":4,"rt":$n[2].RectTransform,"sn":"crosshair"},{"a":1,"n":"crosshairPosition","t":4,"rt":$n[2].Vector2,"sn":"crosshairPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystick","t":4,"rt":Joystick,"sn":"joystick"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveSpeed","t":4,"rt":$n[1].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UI.CrosshairMovement end.*/

    /*UI.EndCardAnimation start.*/
    $m("UI.EndCardAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"PlayAnimation","t":8,"sn":"PlayAnimation","rt":$n[1].Void},{"a":1,"n":"ResizeText","t":8,"sn":"ResizeText","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"background","t":4,"rt":$n[2].CanvasGroup,"sn":"background"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeDuration","t":4,"rt":$n[1].Single,"sn":"fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"logoAndButton","t":4,"rt":$n[2].Transform,"sn":"logoAndButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleDuration","t":4,"rt":$n[1].Single,"sn":"scaleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleEase","t":4,"rt":$n[8].Ease,"sn":"scaleEase","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"title","t":4,"rt":$n[2].Transform,"sn":"title"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"titleText","t":4,"rt":$n[4].Text,"sn":"titleText"}]}; }, $n);
    /*UI.EndCardAnimation end.*/

    /*UI.PlayerUIController start.*/
    $m("UI.PlayerUIController", function () { return {"nested":[Function,Function],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FinishTraining","t":8,"sn":"FinishTraining","rt":$n[1].Void},{"a":2,"n":"ShowCross","t":8,"sn":"ShowCross","rt":$n[1].Void},{"a":2,"n":"ShowMark","t":8,"sn":"ShowMark","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_cross","t":4,"rt":Cross,"sn":"_cross"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mark","t":4,"rt":Cross,"sn":"_mark"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tutorialHand2","t":4,"rt":TutorialHand2,"sn":"_tutorialHand2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shootButton","t":4,"rt":$n[4].Button,"sn":"shootButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"zoomButton","t":4,"rt":$n[4].Button,"sn":"zoomButton"},{"a":2,"n":"OnShoot","is":true,"t":2,"ad":{"a":2,"n":"add_OnShoot","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnShoot","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnShoot","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnShoot","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnZoom","is":true,"t":2,"ad":{"a":2,"n":"add_OnZoom","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnZoom","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnZoom","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnZoom","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*UI.PlayerUIController end.*/

    /*UI.TankKillCounter start.*/
    $m("UI.TankKillCounter", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"NotifyTankDestroyed","is":true,"t":8,"sn":"NotifyTankDestroyed","rt":$n[1].Void},{"a":2,"n":"KillCount","is":true,"t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_KillCount","t":8,"rt":$n[1].Int32,"fg":"KillCount","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"KillCount"},{"a":1,"n":"_tankKillCount","is":true,"t":4,"rt":$n[1].Int32,"sn":"_tankKillCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*UI.TankKillCounter end.*/

    /*UI.TankKillStatistics start.*/
    $m("UI.TankKillStatistics", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"FillIncrement","is":true,"t":4,"rt":$n[1].Single,"sn":"FillIncrement","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"onStartCountTankKilled","is":true,"t":2,"ad":{"a":2,"n":"add_onStartCountTankKilled","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addonStartCountTankKilled","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_onStartCountTankKilled","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeonStartCountTankKilled","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*UI.TankKillStatistics end.*/

    /*Howitzer.LookAtReticle start.*/
    $m("Howitzer.LookAtReticle", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HandleZoom","t":8,"pi":[{"n":"isZoomed","pt":$n[1].Boolean,"ps":0}],"sn":"HandleZoom","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"RotateTowardsReticle","t":8,"sn":"RotateTowardsReticle","rt":$n[1].Void},{"a":1,"n":"SmoothReturnToInitial","t":8,"pi":[{"n":"targetRotation","pt":$n[2].Quaternion,"ps":0}],"sn":"SmoothReturnToInitial","rt":$n[0].IEnumerator,"p":[$n[2].Quaternion]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"_defaultPitch","t":4,"rt":$n[1].Single,"sn":"_defaultPitch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_isZoomed","t":4,"rt":$n[1].Boolean,"sn":"_isZoomed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[2].Camera,"sn":"mainCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxPitchAngle","t":4,"rt":$n[1].Single,"sn":"maxPitchAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minPitchAngle","t":4,"rt":$n[1].Single,"sn":"minPitchAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"reticle","t":4,"rt":$n[2].RectTransform,"sn":"reticle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationSpeed","t":4,"rt":$n[1].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Howitzer.LookAtReticle end.*/

    /*Howitzer.LookAtCrosshair start.*/
    $m("Howitzer.LookAtCrosshair", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LookAtJoystickMovement","t":8,"sn":"LookAtJoystickMovement","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"_initialRotationY","t":4,"rt":$n[1].Single,"sn":"_initialRotationY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystick","t":4,"rt":Joystick,"sn":"joystick"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxYAngle","t":4,"rt":$n[1].Single,"sn":"maxYAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minYAngle","t":4,"rt":$n[1].Single,"sn":"minYAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationSpeed","t":4,"rt":$n[1].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Howitzer.LookAtCrosshair end.*/

    /*Howitzer.ObjectPoolShooting start.*/
    $m("Howitzer.ObjectPoolShooting", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].GameObject,$n[2].Vector3,$n[2].Quaternion,$n[1].Int32],"pi":[{"n":"prefab","pt":$n[2].GameObject,"ps":0},{"n":"position","pt":$n[2].Vector3,"ps":1},{"n":"rotation","pt":$n[2].Quaternion,"ps":2},{"n":"initialSize","pt":$n[1].Int32,"ps":3}],"sn":"ctor"},{"a":2,"n":"GetObject","t":8,"sn":"GetObject","rt":$n[2].GameObject},{"a":2,"n":"ReturnObject","t":8,"pi":[{"n":"obj","pt":$n[2].GameObject,"ps":0}],"sn":"ReturnObject","rt":$n[1].Void,"p":[$n[2].GameObject]},{"a":1,"n":"pool","t":4,"rt":$n[3].Queue$1(UnityEngine.GameObject),"sn":"pool"},{"a":1,"n":"prefab","t":4,"rt":$n[2].GameObject,"sn":"prefab"}]}; }, $n);
    /*Howitzer.ObjectPoolShooting end.*/

    /*Howitzer.PlayerShooting start.*/
    $m("Howitzer.PlayerShooting", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"ChooseShootingRange","t":8,"sn":"ChooseShootingRange","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"SetZoomState","t":8,"pi":[{"n":"isZoomed","pt":$n[1].Boolean,"ps":0}],"sn":"SetZoomState","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"ShakeCamera","t":8,"sn":"ShakeCamera","rt":$n[1].Void},{"a":1,"n":"Shoot1","t":8,"sn":"Shoot1","rt":$n[1].Void},{"a":1,"n":"Shoot2","t":8,"sn":"Shoot2","rt":$n[1].Void},{"a":2,"n":"Upgrade","t":8,"sn":"Upgrade","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_aim","t":4,"rt":$n[2].GameObject,"sn":"_aim"},{"a":1,"n":"_explosionPool","t":4,"rt":$n[6].ObjectPoolShooting,"sn":"_explosionPool"},{"a":1,"n":"_firstShot","t":4,"rt":$n[1].Boolean,"sn":"_firstShot","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("\u041a\u0430\u043c\u0435\u0440\u044b"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_followBullet","t":4,"rt":FollowBullet,"sn":"_followBullet"},{"a":1,"n":"_isZoomed","t":4,"rt":$n[1].Boolean,"sn":"_isZoomed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_managerCamers","t":4,"rt":ManagerCamers,"sn":"_managerCamers"},{"at":[new UnityEngine.HeaderAttribute("\u0422\u043e\u0447\u043a\u0430 \u043f\u0440\u043e\u043c\u0430\u0445\u0430"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_missPoint","t":4,"rt":MissPoint,"sn":"_missPoint"},{"a":1,"n":"_newArt","t":4,"rt":$n[1].Boolean,"sn":"_newArt","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("UI"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_playerUIController","t":4,"rt":$n[9].PlayerUIController,"sn":"_playerUIController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_playerZoom","t":4,"rt":$n[6].PlayerZoom,"sn":"_playerZoom"},{"a":1,"n":"_projectilePool","t":4,"rt":$n[6].ObjectPoolShooting,"sn":"_projectilePool"},{"at":[new UnityEngine.HeaderAttribute("\u041f\u0440\u043e\u043a\u0430\u0447\u043a\u0430"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_pumping","t":4,"rt":Pumping,"sn":"_pumping"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tanksFabric","t":4,"rt":$n[7].TanksFabric,"sn":"_tanksFabric"},{"at":[new UnityEngine.HeaderAttribute("\u0421\u043b\u043e\u0443\u043c\u043e"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_timeController","t":4,"rt":TimeController,"sn":"_timeController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"crosshairUI","t":4,"rt":$n[2].RectTransform,"sn":"crosshairUI"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"explosionEffect","t":4,"rt":$n[2].GameObject,"sn":"explosionEffect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[2].Camera,"sn":"mainCamera"},{"at":[new UnityEngine.HeaderAttribute("\u042d\u0444\u0444\u0435\u043a\u0442\u044b"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"muzzleFlash","t":4,"rt":$n[2].GameObject,"sn":"muzzleFlash"},{"at":[new UnityEngine.HeaderAttribute("\u041f\u0435\u0440\u0435\u0437\u0430\u0440\u044f\u0434\u043a\u0430, \u0441\u0442\u0440\u0435\u043b\u044c\u0431\u0430"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerShootingCooldown","t":4,"rt":$n[6].PlayerShootingCooldown,"sn":"playerShootingCooldown"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"poolSize","t":4,"rt":$n[1].Int32,"sn":"poolSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"prefabProjectile","t":4,"rt":$n[2].GameObject,"sn":"prefabProjectile"},{"at":[new UnityEngine.HeaderAttribute("\u0421\u043d\u0430\u0440\u044f\u0434"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"projectilePosition","t":4,"rt":$n[2].Transform,"sn":"projectilePosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"projectileSpeed","t":4,"rt":$n[1].Single,"sn":"projectileSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Howitzer.PlayerShooting end.*/

    /*Howitzer.PlayerShootingCooldown start.*/
    $m("Howitzer.PlayerShootingCooldown", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CooldownRoutine","t":8,"sn":"CooldownRoutine","rt":$n[0].IEnumerator},{"a":2,"n":"StartCooldown","t":8,"sn":"StartCooldown","rt":$n[1].Void},{"a":2,"n":"CanShoot","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_CanShoot","t":8,"rt":$n[1].Boolean,"fg":"CanShoot","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"CanShoot"},{"a":1,"n":"_isOnCooldown","t":4,"rt":$n[1].Boolean,"sn":"_isOnCooldown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cooldownImage","t":4,"rt":$n[4].Image,"sn":"cooldownImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cooldownText","t":4,"rt":$n[4].Text,"sn":"cooldownText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cooldownTime","t":4,"rt":$n[1].Single,"sn":"cooldownTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shootButton","t":4,"rt":$n[4].Button,"sn":"shootButton"}]}; }, $n);
    /*Howitzer.PlayerShootingCooldown end.*/

    /*Howitzer.PlayerZoom start.*/
    $m("Howitzer.PlayerZoom", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ActivateTransitionToStore","t":8,"sn":"ActivateTransitionToStore","rt":$n[1].Void},{"a":1,"n":"ChangeFOV","t":8,"pi":[{"n":"targetFOV","pt":$n[1].Single,"ps":0}],"sn":"ChangeFOV","rt":$n[0].IEnumerator,"p":[$n[1].Single]},{"a":2,"n":"ChangeZoomForAirStrike","t":8,"sn":"ChangeZoomForAirStrike","rt":$n[1].Void},{"a":2,"n":"CheckZoom","t":8,"sn":"CheckZoom","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"DisableZoomUI","t":8,"sn":"DisableZoomUI","rt":$n[1].Void},{"a":2,"n":"EnableZoomUI","t":8,"sn":"EnableZoomUI","rt":$n[1].Void},{"a":1,"n":"GetWorldPointFromCrosshair","t":8,"sn":"GetWorldPointFromCrosshair","rt":$n[2].Vector3},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OpenStore","t":8,"sn":"OpenStore","rt":$n[1].Void},{"a":1,"n":"RotateCameraWithJoystick","t":8,"sn":"RotateCameraWithJoystick","rt":$n[1].Void},{"a":1,"n":"ToggleZoom","t":8,"sn":"ToggleZoom","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"Upgrade","t":8,"sn":"Upgrade","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_arm","t":4,"rt":$n[2].GameObject,"sn":"_arm"},{"a":1,"n":"_isStore","t":4,"rt":$n[1].Boolean,"sn":"_isStore","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isUpgraded","t":4,"rt":$n[1].Boolean,"sn":"_isUpgraded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isZoomed","t":4,"rt":$n[1].Boolean,"sn":"_isZoomed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_lastCameraRotation","t":4,"rt":$n[2].Quaternion,"sn":"_lastCameraRotation"},{"a":1,"n":"_sprites","t":4,"rt":$n[3].List$1(TitnSprite),"sn":"_sprites"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tacticsFabric","t":4,"rt":$n[7].TanksFabric,"sn":"_tacticsFabric"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_titnSprite","t":4,"rt":TitnSprite,"sn":"_titnSprite"},{"a":1,"n":"_zoomStartRotation","t":4,"rt":$n[2].Quaternion,"sn":"_zoomStartRotation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"crosshair","t":4,"rt":$n[2].RectTransform,"sn":"crosshair"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystick","t":4,"rt":Joystick,"sn":"joystick"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[2].Camera,"sn":"mainCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"normalFOV","t":4,"rt":$n[1].Single,"sn":"normalFOV","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"objectsToDisable","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"objectsToDisable"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pumping","t":4,"rt":Pumping,"sn":"pumping"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationSpeed","t":4,"rt":$n[1].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"zoomFOV","t":4,"rt":$n[1].Single,"sn":"zoomFOV","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"zoomImage","t":4,"rt":$n[2].GameObject,"sn":"zoomImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"zoomSpeed","t":4,"rt":$n[1].Single,"sn":"zoomSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnZoomChanged","is":true,"t":2,"ad":{"a":2,"n":"add_OnZoomChanged","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnZoomChanged","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnZoomChanged","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnZoomChanged","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Howitzer.PlayerZoom end.*/

    /*Howitzer.Projectile start.*/
    $m("Howitzer.Projectile", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ChangeTankColor","t":8,"pi":[{"n":"tank","pt":$n[2].GameObject,"ps":0},{"n":"color","pt":$n[2].Color,"ps":1}],"sn":"ChangeTankColor","rt":$n[1].Void,"p":[$n[2].GameObject,$n[2].Color]},{"a":1,"n":"DestroyTank","t":8,"pi":[{"n":"hitTankAI","pt":$n[10].TankAI,"ps":0}],"sn":"DestroyTank","rt":$n[1].Void,"p":[$n[10].TankAI]},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"speed","pt":$n[1].Single,"ps":0},{"n":"explosionPool","pt":$n[6].ObjectPoolShooting,"ps":1},{"n":"explosionParticle","pt":$n[2].GameObject,"ps":2},{"n":"playerUIController","pt":$n[9].PlayerUIController,"ps":3},{"n":"tanks","pt":$n[3].List$1(BehaviourAI.TankAI),"ps":4},{"n":"pumping","pt":Pumping,"ps":5},{"n":"targetTank","pt":$n[10].TankAI,"ps":6},{"n":"playerZoom","pt":$n[6].PlayerZoom,"ps":7}],"sn":"Initialize","rt":$n[1].Void,"p":[$n[1].Single,$n[6].ObjectPoolShooting,$n[2].GameObject,$n[9].PlayerUIController,$n[3].List$1(BehaviourAI.TankAI),Pumping,$n[10].TankAI,$n[6].PlayerZoom]},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[2].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[1].Void,"p":[$n[2].Collision]},{"a":1,"n":"SpawnExplosionEffect","t":8,"pi":[{"n":"position","pt":$n[2].Vector3,"ps":0}],"sn":"SpawnExplosionEffect","rt":$n[1].Void,"p":[$n[2].Vector3]},{"a":1,"n":"_explosionParticle","t":4,"rt":$n[2].GameObject,"sn":"_explosionParticle"},{"a":1,"n":"_explosionPool","t":4,"rt":$n[6].ObjectPoolShooting,"sn":"_explosionPool"},{"a":1,"n":"_playerUIController","t":4,"rt":$n[9].PlayerUIController,"sn":"_playerUIController"},{"a":1,"n":"_playerZoom","t":4,"rt":$n[6].PlayerZoom,"sn":"_playerZoom"},{"a":1,"n":"_pumping","t":4,"rt":Pumping,"sn":"_pumping"},{"a":1,"n":"_rigidbody","t":4,"rt":$n[2].Rigidbody,"sn":"_rigidbody"},{"a":1,"n":"_speed","t":4,"rt":$n[1].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_tanks","t":4,"rt":$n[3].List$1(BehaviourAI.TankAI),"sn":"_tanks"},{"a":1,"n":"_targetTank","t":4,"rt":$n[10].TankAI,"sn":"_targetTank"},{"a":2,"n":"Crashed","t":2,"ad":{"a":2,"n":"add_Crashed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addCrashed","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_Crashed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeCrashed","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Howitzer.Projectile end.*/

    /*Fabric.TanksFabric start.*/
    $m("Fabric.TanksFabric", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"Spawn","t":8,"sn":"Spawn","rt":$n[1].Void},{"a":2,"n":"Tanks","t":16,"rt":$n[3].List$1(UnityEngine.GameObject),"g":{"a":2,"n":"get_Tanks","t":8,"rt":$n[3].List$1(UnityEngine.GameObject),"fg":"Tanks"},"fn":"Tanks"},{"a":1,"n":"_indexPoint","t":4,"rt":$n[1].Int32,"sn":"_indexPoint","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_tanks","t":4,"rt":$n[3].List$1(UnityEngine.GameObject),"sn":"_tanks"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnPoints","t":4,"rt":$n[3].List$1(UnityEngine.Transform),"sn":"spawnPoints"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tankPrefab","t":4,"rt":$n[2].GameObject,"sn":"tankPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targets","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"targets"}]}; }, $n);
    /*Fabric.TanksFabric end.*/

    /*Bootstraps.Bootstrap start.*/
    $m("Bootstraps.Bootstrap", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"_enemySpawnBootstrap","t":4,"rt":$n[11].EnemySpawnBootstrap,"sn":"_enemySpawnBootstrap"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scenarioGame","t":4,"rt":$n[11].ScenarioGame,"sn":"scenarioGame"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tanksFabric","t":4,"rt":$n[7].TanksFabric,"sn":"tanksFabric"}]}; }, $n);
    /*Bootstraps.Bootstrap end.*/

    /*Bootstraps.EnemySpawnBootstrap start.*/
    $m("Bootstraps.EnemySpawnBootstrap", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Int32,$n[1].Int32,$n[7].TanksFabric],"pi":[{"n":"maxCountTanks","pt":$n[1].Int32,"ps":0},{"n":"maxStartCountTanks","pt":$n[1].Int32,"ps":1},{"n":"tanksFabric","pt":$n[7].TanksFabric,"ps":2}],"sn":"ctor"},{"a":2,"n":"IsAllSpawnEnd","t":8,"sn":"IsAllSpawnEnd","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsStartSpawnEnd","t":8,"sn":"IsStartSpawnEnd","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"StartSpawnEnemy","t":8,"sn":"StartSpawnEnemy","rt":$n[1].Void},{"a":1,"n":"_currentCountTanks","t":4,"rt":$n[1].Int32,"sn":"_currentCountTanks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_maxCountTanks","t":4,"rt":$n[1].Int32,"sn":"_maxCountTanks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_maxStartCountTanks","t":4,"rt":$n[1].Int32,"sn":"_maxStartCountTanks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_tanksFabric","t":4,"rt":$n[7].TanksFabric,"sn":"_tanksFabric"},{"a":2,"n":"EndSpawnTanks","is":true,"t":2,"ad":{"a":2,"n":"add_EndSpawnTanks","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addEndSpawnTanks","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_EndSpawnTanks","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeEndSpawnTanks","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*Bootstraps.EnemySpawnBootstrap end.*/

    /*Bootstraps.ScenarioGame start.*/
    $m("Bootstraps.ScenarioGame", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"enemySpawnBootstrap","pt":$n[11].EnemySpawnBootstrap,"ps":0}],"sn":"Initialize","rt":$n[1].Void,"p":[$n[11].EnemySpawnBootstrap]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"ShowEndCard","t":8,"sn":"ShowEndCard","rt":$n[1].Void},{"a":1,"n":"StartSpawnEnemy","t":8,"sn":"StartSpawnEnemy","rt":$n[0].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_audioSource","t":4,"rt":$n[2].AudioSource,"sn":"_audioSource"},{"a":1,"n":"_enemySpawnBootstrap","t":4,"rt":$n[11].EnemySpawnBootstrap,"sn":"_enemySpawnBootstrap"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endCard","t":4,"rt":$n[2].GameObject,"sn":"endCard"}]}; }, $n);
    /*Bootstraps.ScenarioGame end.*/

    /*BehaviourAI.TankAI start.*/
    $m("BehaviourAI.TankAI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ChooseNextTarget","t":8,"sn":"ChooseNextTarget","rt":$n[1].Void},{"a":2,"n":"DisableTank","t":8,"sn":"DisableTank","rt":$n[1].Void},{"a":1,"n":"IsPathBlocked","t":8,"sn":"IsPathBlocked","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsTankFacingTarget","t":8,"sn":"IsTankFacingTarget","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"MoveTowardsTarget","t":8,"sn":"MoveTowardsTarget","rt":$n[1].Void},{"a":1,"n":"RotateTank","t":8,"sn":"RotateTank","rt":$n[1].Void},{"a":2,"n":"SetTargets","t":8,"pi":[{"n":"newTargets","pt":System.Array.type(UnityEngine.Transform),"ps":0}],"sn":"SetTargets","rt":$n[1].Void,"p":[System.Array.type(UnityEngine.Transform)]},{"a":2,"n":"ShowHover","t":8,"sn":"ShowHover","rt":$n[1].Void},{"a":2,"n":"ShowSign","t":8,"sn":"ShowSign","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"IsAlive","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsAlive","t":8,"rt":$n[1].Boolean,"fg":"IsAlive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsAlive"},{"a":1,"n":"_currentTarget","t":4,"rt":$n[2].Transform,"sn":"_currentTarget"},{"a":1,"n":"_currentTargetIndex","t":4,"rt":$n[1].Int32,"sn":"_currentTargetIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_exclamationMark","t":4,"rt":ExclamationMark,"sn":"_exclamationMark"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_guidance","t":4,"rt":$n[2].GameObject,"sn":"_guidance"},{"a":1,"n":"_isDisabled","t":4,"rt":$n[1].Boolean,"sn":"_isDisabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isWaiting","t":4,"rt":$n[1].Boolean,"sn":"_isWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_targets","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_targets"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"avoidanceDistance","t":4,"rt":$n[1].Single,"sn":"avoidanceDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveSpeed","t":4,"rt":$n[1].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationSpeed","t":4,"rt":$n[1].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stopDistance","t":4,"rt":$n[1].Single,"sn":"stopDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tankLayer","t":4,"rt":$n[2].LayerMask,"sn":"tankLayer"}]}; }, $n);
    /*BehaviourAI.TankAI end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[1].Int32,"p":[$n[12].AudioMixer,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioSource,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[13].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioSource,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[1].Int32,"p":[$n[12].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0},{"n":"to","pt":$n[1].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[1].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[1].Int32,"p":[$n[12].AudioMixer,$n[1].Single,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"DOKill","rt":$n[1].Int32,"p":[$n[12].AudioMixer,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[1].Int32,"p":[$n[12].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioSource,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPitch","rt":$n[13].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioSource,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[1].Int32,"p":[$n[12].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[1].Int32,"p":[$n[12].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[1].Int32,"p":[$n[12].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[1].Int32,"p":[$n[12].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[1].Int32,"p":[$n[12].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0},{"n":"floatName","pt":$n[1].String,"ps":1},{"n":"endValue","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[13].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[12].AudioMixer,$n[1].String,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[1].Int32,"p":[$n[12].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[12].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[1].Int32,"p":[$n[12].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJump","rt":$n[8].Sequence,"p":[$n[2].Rigidbody,$n[2].Vector3,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[14].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[14].Path,$n[1].Single,$n[8].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[1].Single,$n[8].PathType,$n[8].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"towards","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[8].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[13].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[1].Single,$n[8].AxisConstraint,$n[1].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMove","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[14].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[14].Path,$n[1].Single,$n[8].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[1].Single,$n[8].PathType,$n[8].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[8].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[13].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[1].Single,$n[8].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJump","rt":$n[8].Sequence,"p":[$n[2].Rigidbody2D,$n[2].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":$n[14].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,$n[14].Path,$n[1].Single,$n[8].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[1].Single,$n[8].PathType,$n[8].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMove","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[2].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":$n[14].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,$n[14].Path,$n[1].Single,$n[8].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[1].Single,$n[8].PathType,$n[8].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DORotate","rt":$n[13].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Rigidbody2D,$n[1].Single,$n[1].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[8].Tweener,"p":[$n[2].SpriteRenderer,$n[2].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor","rt":$n[13].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].SpriteRenderer,$n[2].Color,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[13].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].SpriteRenderer,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[2].SpriteRenderer,pc.ColorGradient,$n[1].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[8].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector3,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[8].Tweener,"p":[$n[4].Graphic,$n[2].Color,$n[1].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[8].Tweener,"p":[$n[4].Image,$n[2].Color,$n[1].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[8].Tweener,"p":[$n[4].Text,$n[2].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor","rt":$n[13].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[2].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$1","rt":$n[13].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[2].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$2","rt":$n[13].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[2].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$3","rt":$n[13].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[2].Color,$n[1].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"fromValue","pt":$n[1].Int32,"ps":1},{"n":"endValue","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[1].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[15].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[13].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[4].Text,$n[1].Int32,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[15].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[13].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].CanvasGroup,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$1","rt":$n[13].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$2","rt":$n[13].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$3","rt":$n[13].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$4","rt":$n[13].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[13].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Image,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[2].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[4].Image,pc.ColorGradient,$n[1].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[8].Tweener,"p":[$n[4].ScrollRect,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[8].Sequence,"p":[$n[2].RectTransform,$n[2].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[2].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[8].Tweener,"p":[$n[4].ScrollRect,$n[2].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivot","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[1].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivotX","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivotY","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[2].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"punch","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[8].Tweener,"p":[$n[2].RectTransform,$n[2].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOScale","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Outline,$n[2].Vector2,$n[1].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[1].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[1].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[8].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[8].Tweener,"p":[$n[2].RectTransform,$n[1].Single,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[1].Boolean,$n[8].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1},{"n":"strength","pt":$n[2].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[1].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[8].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[8].Tweener,"p":[$n[2].RectTransform,$n[1].Single,$n[2].Vector2,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[1].Boolean,$n[8].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"center","pt":$n[2].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[1].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[1].Single,$n[1].Single,$n[1].Boolean,$n[1].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[1].String,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[1].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[8].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[1].String,"ps":5}],"sn":"DOText","rt":$n[13].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[4].Text,$n[1].String,$n[1].Single,$n[1].Boolean,$n[8].ScrambleMode,$n[1].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Slider,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOValue","rt":$n[13].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Slider,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[8].Tweener,"p":[$n[4].ScrollRect,$n[1].Single,$n[1].Single,$n[1].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[8].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[2].RectTransform,"ps":0},{"n":"to","pt":$n[2].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[2].Vector2,"p":[$n[2].RectTransform,$n[2].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[2].Material,pc.ColorGradient,$n[1].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[1].String,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[8].Sequence,"p":[$n[2].Material,pc.ColorGradient,$n[1].String,$n[1].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"propertyID","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOOffset","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Material,$n[2].Vector2,$n[1].Int32,$n[1].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"propertyID","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOTiling","rt":$n[13].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Material,$n[2].Vector2,$n[1].Int32,$n[1].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[2].CustomYieldInstruction,"p":[$n[8].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[1].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[2].CustomYieldInstruction,"p":[$n[8].Tween,$n[1].Int32,$n[1].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[2].CustomYieldInstruction,"p":[$n[8].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"position","pt":$n[1].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[2].CustomYieldInstruction,"p":[$n[8].Tween,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[2].CustomYieldInstruction,"p":[$n[8].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[2].CustomYieldInstruction,"p":[$n[8].Tween,$n[1].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[8].DOTweenCYInstruction.WaitForCompletion,$n[8].DOTweenCYInstruction.WaitForRewind,$n[8].DOTweenCYInstruction.WaitForKill,$n[8].DOTweenCYInstruction.WaitForElapsedLoops,$n[8].DOTweenCYInstruction.WaitForPosition,$n[8].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween,$n[1].Int32],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[1].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[1].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween,$n[1].Single],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0},{"n":"position","pt":$n[1].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[1].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[8].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[1].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[1].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[1].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[8].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[1].Boolean,"ps":1},{"n":"isLocal","pt":$n[1].Boolean,"ps":2},{"n":"path","pt":$n[14].Path,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"pathMode","pt":$n[8].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[13].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].MonoBehaviour,$n[1].Boolean,$n[1].Boolean,$n[14].Path,$n[1].Single,$n[8].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[1].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[1].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[16].PathOptions,"ps":0},{"n":"t","pt":$n[8].Tween,"ps":1},{"n":"newRot","pt":$n[2].Quaternion,"ps":2},{"n":"trans","pt":$n[2].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[1].Void,"p":[$n[16].PathOptions,$n[8].Tween,$n[2].Quaternion,$n[2].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});
