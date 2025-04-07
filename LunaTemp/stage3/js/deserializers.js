var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointSpring' )
  var i459 = data
  i458.spring = i459[0]
  i458.damper = i459[1]
  i458.targetPosition = i459[2]
  return i458
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointMotor' )
  var i461 = data
  i460.m_TargetVelocity = i461[0]
  i460.m_Force = i461[1]
  i460.m_FreeSpin = i461[2]
  return i460
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointLimits' )
  var i463 = data
  i462.m_Min = i463[0]
  i462.m_Max = i463[1]
  i462.m_Bounciness = i463[2]
  i462.m_BounceMinVelocity = i463[3]
  i462.m_ContactDistance = i463[4]
  i462.minBounce = i463[5]
  i462.maxBounce = i463[6]
  return i462
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointDrive' )
  var i465 = data
  i464.m_PositionSpring = i465[0]
  i464.m_PositionDamper = i465[1]
  i464.m_MaximumForce = i465[2]
  i464.m_UseAcceleration = i465[3]
  return i464
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i467 = data
  i466.m_Spring = i467[0]
  i466.m_Damper = i467[1]
  return i466
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i469 = data
  i468.m_Limit = i469[0]
  i468.m_Bounciness = i469[1]
  i468.m_ContactDistance = i469[2]
  return i468
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i471 = data
  i470.m_ExtremumSlip = i471[0]
  i470.m_ExtremumValue = i471[1]
  i470.m_AsymptoteSlip = i471[2]
  i470.m_AsymptoteValue = i471[3]
  i470.m_Stiffness = i471[4]
  return i470
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i473 = data
  i472.m_LowerAngle = i473[0]
  i472.m_UpperAngle = i473[1]
  return i472
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i475 = data
  i474.m_MotorSpeed = i475[0]
  i474.m_MaximumMotorTorque = i475[1]
  return i474
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i477 = data
  i476.m_DampingRatio = i477[0]
  i476.m_Frequency = i477[1]
  i476.m_Angle = i477[2]
  return i476
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i479 = data
  i478.m_LowerTranslation = i479[0]
  i478.m_UpperTranslation = i479[1]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i481 = data
  i480.pivot = new pc.Vec2( i481[0], i481[1] )
  i480.anchorMin = new pc.Vec2( i481[2], i481[3] )
  i480.anchorMax = new pc.Vec2( i481[4], i481[5] )
  i480.sizeDelta = new pc.Vec2( i481[6], i481[7] )
  i480.anchoredPosition3D = new pc.Vec3( i481[8], i481[9], i481[10] )
  i480.rotation = new pc.Quat(i481[11], i481[12], i481[13], i481[14])
  i480.scale = new pc.Vec3( i481[15], i481[16], i481[17] )
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i483 = data
  i482.cullTransparentMesh = !!i483[0]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i485 = data
  i484.name = i485[0]
  i484.tagId = i485[1]
  i484.enabled = !!i485[2]
  i484.isStatic = !!i485[3]
  i484.layer = i485[4]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i487 = data
  i486.name = i487[0]
  i486.width = i487[1]
  i486.height = i487[2]
  i486.mipmapCount = i487[3]
  i486.anisoLevel = i487[4]
  i486.filterMode = i487[5]
  i486.hdr = !!i487[6]
  i486.format = i487[7]
  i486.wrapMode = i487[8]
  i486.alphaIsTransparency = !!i487[9]
  i486.alphaSource = i487[10]
  i486.graphicsFormat = i487[11]
  i486.sRGBTexture = !!i487[12]
  i486.desiredColorSpace = i487[13]
  i486.wrapU = i487[14]
  i486.wrapV = i487[15]
  return i486
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.Image' )
  var i489 = data
  request.r(i489[0], i489[1], 0, i488, 'm_Sprite')
  i488.m_Type = i489[2]
  i488.m_PreserveAspect = !!i489[3]
  i488.m_FillCenter = !!i489[4]
  i488.m_FillMethod = i489[5]
  i488.m_FillAmount = i489[6]
  i488.m_FillClockwise = !!i489[7]
  i488.m_FillOrigin = i489[8]
  i488.m_UseSpriteMesh = !!i489[9]
  i488.m_PixelsPerUnitMultiplier = i489[10]
  request.r(i489[11], i489[12], 0, i488, 'm_Material')
  i488.m_Maskable = !!i489[13]
  i488.m_Color = new pc.Color(i489[14], i489[15], i489[16], i489[17])
  i488.m_RaycastTarget = !!i489[18]
  i488.m_RaycastPadding = new pc.Vec4( i489[19], i489[20], i489[21], i489[22] )
  return i488
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i490 = root || request.c( 'VariableJoystick' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'handle')
  i490.moveThreshold = i491[2]
  i490.joystickType = i491[3]
  request.r(i491[4], i491[5], 0, i490, 'background')
  i490.handleRange = i491[6]
  i490.deadZone = i491[7]
  i490.axisOptions = i491[8]
  i490.snapX = !!i491[9]
  i490.snapY = !!i491[10]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i493 = data
  i492.position = new pc.Vec3( i493[0], i493[1], i493[2] )
  i492.scale = new pc.Vec3( i493[3], i493[4], i493[5] )
  i492.rotation = new pc.Quat(i493[6], i493[7], i493[8], i493[9])
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i495 = data
  i494.center = new pc.Vec3( i495[0], i495[1], i495[2] )
  i494.size = new pc.Vec3( i495[3], i495[4], i495[5] )
  i494.enabled = !!i495[6]
  i494.isTrigger = !!i495[7]
  request.r(i495[8], i495[9], 0, i494, 'material')
  return i494
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i496 = root || request.c( 'BehaviourAI.TankAI' )
  var i497 = data
  i496._arrived = !!i497[0]
  i496.stopDistance = i497[1]
  i496.rotationSpeed = i497[2]
  i496.moveSpeed = i497[3]
  i496.avoidanceDistance = i497[4]
  i496.tankLayer = UnityEngine.LayerMask.FromIntegerValue( i497[5] )
  request.r(i497[6], i497[7], 0, i496, '_tower')
  request.r(i497[8], i497[9], 0, i496, '_gun')
  request.r(i497[10], i497[11], 0, i496, '_target')
  request.r(i497[12], i497[13], 0, i496, 'Tower')
  request.r(i497[14], i497[15], 0, i496, 'Gun')
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i499 = data
  request.r(i499[0], i499[1], 0, i498, 'sharedMesh')
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i501 = data
  request.r(i501[0], i501[1], 0, i500, 'additionalVertexStreams')
  i500.enabled = !!i501[2]
  request.r(i501[3], i501[4], 0, i500, 'sharedMaterial')
  var i503 = i501[5]
  var i502 = []
  for(var i = 0; i < i503.length; i += 2) {
  request.r(i503[i + 0], i503[i + 1], 2, i502, '')
  }
  i500.sharedMaterials = i502
  i500.receiveShadows = !!i501[6]
  i500.shadowCastingMode = i501[7]
  i500.sortingLayerID = i501[8]
  i500.sortingOrder = i501[9]
  i500.lightmapIndex = i501[10]
  i500.lightmapSceneIndex = i501[11]
  i500.lightmapScaleOffset = new pc.Vec4( i501[12], i501[13], i501[14], i501[15] )
  i500.lightProbeUsage = i501[16]
  i500.reflectionProbeUsage = i501[17]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i507 = data
  i506.enabled = !!i507[0]
  i506.planeDistance = i507[1]
  i506.referencePixelsPerUnit = i507[2]
  i506.isFallbackOverlay = !!i507[3]
  i506.renderMode = i507[4]
  i506.renderOrder = i507[5]
  i506.sortingLayerName = i507[6]
  i506.sortingOrder = i507[7]
  i506.scaleFactor = i507[8]
  request.r(i507[9], i507[10], 0, i506, 'worldCamera')
  i506.overrideSorting = !!i507[11]
  i506.pixelPerfect = !!i507[12]
  i506.targetDisplay = i507[13]
  i506.overridePixelPerfect = !!i507[14]
  return i506
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i509 = data
  i508.m_UiScaleMode = i509[0]
  i508.m_ReferencePixelsPerUnit = i509[1]
  i508.m_ScaleFactor = i509[2]
  i508.m_ReferenceResolution = new pc.Vec2( i509[3], i509[4] )
  i508.m_ScreenMatchMode = i509[5]
  i508.m_MatchWidthOrHeight = i509[6]
  i508.m_PhysicalUnit = i509[7]
  i508.m_FallbackScreenDPI = i509[8]
  i508.m_DefaultSpriteDPI = i509[9]
  i508.m_DynamicPixelsPerUnit = i509[10]
  i508.m_PresetInfoIsWorld = !!i509[11]
  return i508
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i511 = data
  i510.m_IgnoreReversedGraphics = !!i511[0]
  i510.m_BlockingObjects = i511[1]
  i510.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i511[2] )
  return i510
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i512 = root || request.c( 'ExclamationMark' )
  var i513 = data
  return i512
}

Deserializers["Tower"] = function (request, data, root) {
  var i514 = root || request.c( 'Tower' )
  var i515 = data
  i514.rotationSpeed = i515[0]
  return i514
}

Deserializers["Gun"] = function (request, data, root) {
  var i516 = root || request.c( 'Gun' )
  var i517 = data
  i516.rotationSpeed = i517[0]
  request.r(i517[1], i517[2], 0, i516, 'particleSystem')
  i516.minParticleInterval = i517[3]
  i516.maxParticleInterval = i517[4]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i519 = data
  i518.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i519[0], i518.main)
  i518.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i519[1], i518.colorBySpeed)
  i518.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i519[2], i518.colorOverLifetime)
  i518.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i519[3], i518.emission)
  i518.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i519[4], i518.rotationBySpeed)
  i518.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i519[5], i518.rotationOverLifetime)
  i518.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i519[6], i518.shape)
  i518.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i519[7], i518.sizeBySpeed)
  i518.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i519[8], i518.sizeOverLifetime)
  i518.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i519[9], i518.textureSheetAnimation)
  i518.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i519[10], i518.velocityOverLifetime)
  i518.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i519[11], i518.noise)
  i518.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i519[12], i518.inheritVelocity)
  i518.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i519[13], i518.forceOverLifetime)
  i518.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i519[14], i518.limitVelocityOverLifetime)
  i518.useAutoRandomSeed = !!i519[15]
  i518.randomSeed = i519[16]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemMain()
  var i521 = data
  i520.duration = i521[0]
  i520.loop = !!i521[1]
  i520.prewarm = !!i521[2]
  i520.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[3], i520.startDelay)
  i520.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[4], i520.startLifetime)
  i520.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[5], i520.startSpeed)
  i520.startSize3D = !!i521[6]
  i520.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[7], i520.startSizeX)
  i520.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[8], i520.startSizeY)
  i520.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[9], i520.startSizeZ)
  i520.startRotation3D = !!i521[10]
  i520.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[11], i520.startRotationX)
  i520.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[12], i520.startRotationY)
  i520.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[13], i520.startRotationZ)
  i520.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i521[14], i520.startColor)
  i520.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[15], i520.gravityModifier)
  i520.simulationSpace = i521[16]
  request.r(i521[17], i521[18], 0, i520, 'customSimulationSpace')
  i520.simulationSpeed = i521[19]
  i520.useUnscaledTime = !!i521[20]
  i520.scalingMode = i521[21]
  i520.playOnAwake = !!i521[22]
  i520.maxParticles = i521[23]
  i520.emitterVelocityMode = i521[24]
  i520.stopAction = i521[25]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i522 = root || new pc.MinMaxCurve()
  var i523 = data
  i522.mode = i523[0]
  i522.curveMin = new pc.AnimationCurve( { keys_flow: i523[1] } )
  i522.curveMax = new pc.AnimationCurve( { keys_flow: i523[2] } )
  i522.curveMultiplier = i523[3]
  i522.constantMin = i523[4]
  i522.constantMax = i523[5]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i524 = root || new pc.MinMaxGradient()
  var i525 = data
  i524.mode = i525[0]
  i524.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i525[1], i524.gradientMin)
  i524.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i525[2], i524.gradientMax)
  i524.colorMin = new pc.Color(i525[3], i525[4], i525[5], i525[6])
  i524.colorMax = new pc.Color(i525[7], i525[8], i525[9], i525[10])
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i527 = data
  i526.mode = i527[0]
  var i529 = i527[1]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i529[i + 0]) );
  }
  i526.colorKeys = i528
  var i531 = i527[2]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i531[i + 0]) );
  }
  i526.alphaKeys = i530
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i532 = root || new pc.ParticleSystemColorBySpeed()
  var i533 = data
  i532.enabled = !!i533[0]
  i532.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i533[1], i532.color)
  i532.range = new pc.Vec2( i533[2], i533[3] )
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i537 = data
  i536.color = new pc.Color(i537[0], i537[1], i537[2], i537[3])
  i536.time = i537[4]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i541 = data
  i540.alpha = i541[0]
  i540.time = i541[1]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i542 = root || new pc.ParticleSystemColorOverLifetime()
  var i543 = data
  i542.enabled = !!i543[0]
  i542.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i543[1], i542.color)
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i544 = root || new pc.ParticleSystemEmitter()
  var i545 = data
  i544.enabled = !!i545[0]
  i544.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[1], i544.rateOverTime)
  i544.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[2], i544.rateOverDistance)
  var i547 = i545[3]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i547[i + 0]) );
  }
  i544.bursts = i546
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemBurst()
  var i551 = data
  i550.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[0], i550.count)
  i550.cycleCount = i551[1]
  i550.minCount = i551[2]
  i550.maxCount = i551[3]
  i550.repeatInterval = i551[4]
  i550.time = i551[5]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemRotationBySpeed()
  var i553 = data
  i552.enabled = !!i553[0]
  i552.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[1], i552.x)
  i552.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[2], i552.y)
  i552.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[3], i552.z)
  i552.separateAxes = !!i553[4]
  i552.range = new pc.Vec2( i553[5], i553[6] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemRotationOverLifetime()
  var i555 = data
  i554.enabled = !!i555[0]
  i554.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[1], i554.x)
  i554.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[2], i554.y)
  i554.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[3], i554.z)
  i554.separateAxes = !!i555[4]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemShape()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.shapeType = i557[1]
  i556.randomDirectionAmount = i557[2]
  i556.sphericalDirectionAmount = i557[3]
  i556.randomPositionAmount = i557[4]
  i556.alignToDirection = !!i557[5]
  i556.radius = i557[6]
  i556.radiusMode = i557[7]
  i556.radiusSpread = i557[8]
  i556.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[9], i556.radiusSpeed)
  i556.radiusThickness = i557[10]
  i556.angle = i557[11]
  i556.length = i557[12]
  i556.boxThickness = new pc.Vec3( i557[13], i557[14], i557[15] )
  i556.meshShapeType = i557[16]
  request.r(i557[17], i557[18], 0, i556, 'mesh')
  request.r(i557[19], i557[20], 0, i556, 'meshRenderer')
  request.r(i557[21], i557[22], 0, i556, 'skinnedMeshRenderer')
  i556.useMeshMaterialIndex = !!i557[23]
  i556.meshMaterialIndex = i557[24]
  i556.useMeshColors = !!i557[25]
  i556.normalOffset = i557[26]
  i556.arc = i557[27]
  i556.arcMode = i557[28]
  i556.arcSpread = i557[29]
  i556.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[30], i556.arcSpeed)
  i556.donutRadius = i557[31]
  i556.position = new pc.Vec3( i557[32], i557[33], i557[34] )
  i556.rotation = new pc.Vec3( i557[35], i557[36], i557[37] )
  i556.scale = new pc.Vec3( i557[38], i557[39], i557[40] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemSizeBySpeed()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[1], i558.x)
  i558.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[2], i558.y)
  i558.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[3], i558.z)
  i558.separateAxes = !!i559[4]
  i558.range = new pc.Vec2( i559[5], i559[6] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemSizeOverLifetime()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[1], i560.x)
  i560.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[2], i560.y)
  i560.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[3], i560.z)
  i560.separateAxes = !!i561[4]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.mode = i563[1]
  i562.animation = i563[2]
  i562.numTilesX = i563[3]
  i562.numTilesY = i563[4]
  i562.useRandomRow = !!i563[5]
  i562.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[6], i562.frameOverTime)
  i562.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[7], i562.startFrame)
  i562.cycleCount = i563[8]
  i562.rowIndex = i563[9]
  i562.flipU = i563[10]
  i562.flipV = i563[11]
  i562.spriteCount = i563[12]
  var i565 = i563[13]
  var i564 = []
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 2, i564, '')
  }
  i562.sprites = i564
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i569 = data
  i568.enabled = !!i569[0]
  i568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[1], i568.x)
  i568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[2], i568.y)
  i568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[3], i568.z)
  i568.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[4], i568.radial)
  i568.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[5], i568.speedModifier)
  i568.space = i569[6]
  i568.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[7], i568.orbitalX)
  i568.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[8], i568.orbitalY)
  i568.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[9], i568.orbitalZ)
  i568.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[10], i568.orbitalOffsetX)
  i568.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[11], i568.orbitalOffsetY)
  i568.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[12], i568.orbitalOffsetZ)
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemNoise()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.separateAxes = !!i571[1]
  i570.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[2], i570.strengthX)
  i570.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[3], i570.strengthY)
  i570.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[4], i570.strengthZ)
  i570.frequency = i571[5]
  i570.damping = !!i571[6]
  i570.octaveCount = i571[7]
  i570.octaveMultiplier = i571[8]
  i570.octaveScale = i571[9]
  i570.quality = i571[10]
  i570.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[11], i570.scrollSpeed)
  i570.scrollSpeedMultiplier = i571[12]
  i570.remapEnabled = !!i571[13]
  i570.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[14], i570.remapX)
  i570.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[15], i570.remapY)
  i570.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[16], i570.remapZ)
  i570.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[17], i570.positionAmount)
  i570.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[18], i570.rotationAmount)
  i570.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[19], i570.sizeAmount)
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemInheritVelocity()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.mode = i573[1]
  i572.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.curve)
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemForceOverLifetime()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[1], i574.x)
  i574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.y)
  i574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.z)
  i574.space = i575[4]
  i574.randomized = !!i575[5]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[1], i576.limit)
  i576.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.limitX)
  i576.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[3], i576.limitY)
  i576.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[4], i576.limitZ)
  i576.dampen = i577[5]
  i576.separateAxes = !!i577[6]
  i576.space = i577[7]
  i576.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[8], i576.drag)
  i576.multiplyDragByParticleSize = !!i577[9]
  i576.multiplyDragByParticleVelocity = !!i577[10]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i579 = data
  i578.enabled = !!i579[0]
  request.r(i579[1], i579[2], 0, i578, 'sharedMaterial')
  var i581 = i579[3]
  var i580 = []
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 2, i580, '')
  }
  i578.sharedMaterials = i580
  i578.receiveShadows = !!i579[4]
  i578.shadowCastingMode = i579[5]
  i578.sortingLayerID = i579[6]
  i578.sortingOrder = i579[7]
  i578.lightmapIndex = i579[8]
  i578.lightmapSceneIndex = i579[9]
  i578.lightmapScaleOffset = new pc.Vec4( i579[10], i579[11], i579[12], i579[13] )
  i578.lightProbeUsage = i579[14]
  i578.reflectionProbeUsage = i579[15]
  request.r(i579[16], i579[17], 0, i578, 'mesh')
  i578.meshCount = i579[18]
  i578.activeVertexStreamsCount = i579[19]
  i578.alignment = i579[20]
  i578.renderMode = i579[21]
  i578.sortMode = i579[22]
  i578.lengthScale = i579[23]
  i578.velocityScale = i579[24]
  i578.cameraVelocityScale = i579[25]
  i578.normalDirection = i579[26]
  i578.sortingFudge = i579[27]
  i578.minParticleSize = i579[28]
  i578.maxParticleSize = i579[29]
  i578.pivot = new pc.Vec3( i579[30], i579[31], i579[32] )
  request.r(i579[33], i579[34], 0, i578, 'trailMaterial')
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i583 = data
  i582.name = i583[0]
  i582.halfPrecision = !!i583[1]
  i582.useUInt32IndexFormat = !!i583[2]
  i582.vertexCount = i583[3]
  i582.aabb = i583[4]
  var i585 = i583[5]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( !!i585[i + 0] );
  }
  i582.streams = i584
  i582.vertices = i583[6]
  var i587 = i583[7]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i587[i + 0]) );
  }
  i582.subMeshes = i586
  var i589 = i583[8]
  var i588 = []
  for(var i = 0; i < i589.length; i += 16) {
    i588.push( new pc.Mat4().setData(i589[i + 0], i589[i + 1], i589[i + 2], i589[i + 3],  i589[i + 4], i589[i + 5], i589[i + 6], i589[i + 7],  i589[i + 8], i589[i + 9], i589[i + 10], i589[i + 11],  i589[i + 12], i589[i + 13], i589[i + 14], i589[i + 15]) );
  }
  i582.bindposes = i588
  var i591 = i583[9]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i591[i + 0]) );
  }
  i582.blendShapes = i590
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i597 = data
  i596.triangles = i597[0]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i603 = data
  i602.name = i603[0]
  var i605 = i603[1]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i605[i + 0]) );
  }
  i602.frames = i604
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i606 = root || new pc.UnityMaterial()
  var i607 = data
  i606.name = i607[0]
  request.r(i607[1], i607[2], 0, i606, 'shader')
  i606.renderQueue = i607[3]
  i606.enableInstancing = !!i607[4]
  var i609 = i607[5]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i609[i + 0]) );
  }
  i606.floatParameters = i608
  var i611 = i607[6]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i611[i + 0]) );
  }
  i606.colorParameters = i610
  var i613 = i607[7]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i613[i + 0]) );
  }
  i606.vectorParameters = i612
  var i615 = i607[8]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i615[i + 0]) );
  }
  i606.textureParameters = i614
  var i617 = i607[9]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i617[i + 0]) );
  }
  i606.materialFlags = i616
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i621 = data
  i620.name = i621[0]
  i620.value = i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i625 = data
  i624.name = i625[0]
  i624.value = new pc.Color(i625[1], i625[2], i625[3], i625[4])
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i629 = data
  i628.name = i629[0]
  i628.value = new pc.Vec4( i629[1], i629[2], i629[3], i629[4] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i633 = data
  i632.name = i633[0]
  request.r(i633[1], i633[2], 0, i632, 'value')
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i637 = data
  i636.name = i637[0]
  i636.enabled = !!i637[1]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i639 = data
  i638.enabled = !!i639[0]
  i638.type = i639[1]
  i638.color = new pc.Color(i639[2], i639[3], i639[4], i639[5])
  i638.cullingMask = i639[6]
  i638.intensity = i639[7]
  i638.range = i639[8]
  i638.spotAngle = i639[9]
  i638.shadows = i639[10]
  i638.shadowNormalBias = i639[11]
  i638.shadowBias = i639[12]
  i638.shadowStrength = i639[13]
  i638.shadowResolution = i639[14]
  i638.lightmapBakeType = i639[15]
  i638.renderMode = i639[16]
  request.r(i639[17], i639[18], 0, i638, 'cookie')
  i638.cookieSize = i639[19]
  return i638
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i641 = data
  i640.m_Version = i641[0]
  i640.m_UsePipelineSettings = !!i641[1]
  i640.m_AdditionalLightsShadowResolutionTier = i641[2]
  i640.m_LightLayerMask = i641[3]
  i640.m_RenderingLayers = i641[4]
  i640.m_CustomShadowLayers = !!i641[5]
  i640.m_ShadowLayerMask = i641[6]
  i640.m_ShadowRenderingLayers = i641[7]
  i640.m_LightCookieSize = new pc.Vec2( i641[8], i641[9] )
  i640.m_LightCookieOffset = new pc.Vec2( i641[10], i641[11] )
  i640.m_SoftShadowQuality = i641[12]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i643 = data
  i642.enabled = !!i643[0]
  request.r(i643[1], i643[2], 0, i642, 'sharedMaterial')
  var i645 = i643[3]
  var i644 = []
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 2, i644, '')
  }
  i642.sharedMaterials = i644
  i642.receiveShadows = !!i643[4]
  i642.shadowCastingMode = i643[5]
  i642.sortingLayerID = i643[6]
  i642.sortingOrder = i643[7]
  i642.lightmapIndex = i643[8]
  i642.lightmapSceneIndex = i643[9]
  i642.lightmapScaleOffset = new pc.Vec4( i643[10], i643[11], i643[12], i643[13] )
  i642.lightProbeUsage = i643[14]
  i642.reflectionProbeUsage = i643[15]
  i642.color = new pc.Color(i643[16], i643[17], i643[18], i643[19])
  request.r(i643[20], i643[21], 0, i642, 'sprite')
  i642.flipX = !!i643[22]
  i642.flipY = !!i643[23]
  i642.drawMode = i643[24]
  i642.size = new pc.Vec2( i643[25], i643[26] )
  i642.tileMode = i643[27]
  i642.adaptiveModeThreshold = i643[28]
  i642.maskInteraction = i643[29]
  i642.spriteSortPoint = i643[30]
  return i642
}

Deserializers["TitnSprite"] = function (request, data, root) {
  var i646 = root || request.c( 'TitnSprite' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, '_tank')
  i646.offsetDistance = i647[2]
  i646.heightOffset = i647[3]
  return i646
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i648 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i649 = data
  i648.OnlyDeactivate = !!i649[0]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'clip')
  request.r(i651[2], i651[3], 0, i650, 'outputAudioMixerGroup')
  i650.playOnAwake = !!i651[4]
  i650.loop = !!i651[5]
  i650.time = i651[6]
  i650.volume = i651[7]
  i650.pitch = i651[8]
  i650.enabled = !!i651[9]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i653 = data
  i652.mass = i653[0]
  i652.drag = i653[1]
  i652.angularDrag = i653[2]
  i652.useGravity = !!i653[3]
  i652.isKinematic = !!i653[4]
  i652.constraints = i653[5]
  i652.maxAngularVelocity = i653[6]
  i652.collisionDetectionMode = i653[7]
  i652.interpolation = i653[8]
  return i652
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i654 = root || request.c( 'Howitzer.Projectile' )
  var i655 = data
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i657 = data
  i656.center = new pc.Vec3( i657[0], i657[1], i657[2] )
  i656.radius = i657[3]
  i656.height = i657[4]
  i656.direction = i657[5]
  i656.enabled = !!i657[6]
  i656.isTrigger = !!i657[7]
  request.r(i657[8], i657[9], 0, i656, 'material')
  return i656
}

Deserializers["MissPoint"] = function (request, data, root) {
  var i658 = root || request.c( 'MissPoint' )
  var i659 = data
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i661 = data
  i660.name = i661[0]
  i660.atlasId = i661[1]
  i660.mipmapCount = i661[2]
  i660.hdr = !!i661[3]
  i660.size = i661[4]
  i660.anisoLevel = i661[5]
  i660.filterMode = i661[6]
  var i663 = i661[7]
  var i662 = []
  for(var i = 0; i < i663.length; i += 4) {
    i662.push( UnityEngine.Rect.MinMaxRect(i663[i + 0], i663[i + 1], i663[i + 2], i663[i + 3]) );
  }
  i660.rects = i662
  i660.wrapU = i661[8]
  i660.wrapV = i661[9]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i667 = data
  i666.name = i667[0]
  i666.index = i667[1]
  i666.startup = !!i667[2]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i669 = data
  i668.enabled = !!i669[0]
  i668.aspect = i669[1]
  i668.orthographic = !!i669[2]
  i668.orthographicSize = i669[3]
  i668.backgroundColor = new pc.Color(i669[4], i669[5], i669[6], i669[7])
  i668.nearClipPlane = i669[8]
  i668.farClipPlane = i669[9]
  i668.fieldOfView = i669[10]
  i668.depth = i669[11]
  i668.clearFlags = i669[12]
  i668.cullingMask = i669[13]
  i668.rect = i669[14]
  request.r(i669[15], i669[16], 0, i668, 'targetTexture')
  i668.usePhysicalProperties = !!i669[17]
  i668.focalLength = i669[18]
  i668.sensorSize = new pc.Vec2( i669[19], i669[20] )
  i668.lensShift = new pc.Vec2( i669[21], i669[22] )
  i668.gateFit = i669[23]
  i668.commandBufferCount = i669[24]
  i668.cameraType = i669[25]
  return i668
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i670 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'joystick')
  i670.minYAngle = i671[2]
  i670.maxYAngle = i671[3]
  i670.rotationSpeed = i671[4]
  return i670
}

Deserializers["InteractiveArt"] = function (request, data, root) {
  var i672 = root || request.c( 'InteractiveArt' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, '_shopping')
  request.r(i673[2], i673[3], 0, i672, '_arm')
  request.r(i673[4], i673[5], 0, i672, '_arta1')
  request.r(i673[6], i673[7], 0, i672, '_arta2')
  request.r(i673[8], i673[9], 0, i672, '_particleSystem')
  request.r(i673[10], i673[11], 0, i672, 'secondCamera')
  i672.transitionSpeed = i673[12]
  request.r(i673[13], i673[14], 0, i672, '_audioSource')
  return i672
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i674 = root || request.c( 'Howitzer.LookAtReticle' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'reticle')
  request.r(i675[2], i675[3], 0, i674, 'mainCamera')
  i674.rotationSpeed = i675[4]
  i674.maxPitchAngle = i675[5]
  i674.minPitchAngle = i675[6]
  i674.maxYawAngle = i675[7]
  i674.minYawAngle = i675[8]
  return i674
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i676 = root || request.c( 'FollowBullet' )
  var i677 = data
  i676._smoothSpeed = i677[0]
  i676._offset = new pc.Vec3( i677[1], i677[2], i677[3] )
  request.r(i677[4], i677[5], 0, i676, '_aim')
  return i676
}

Deserializers["HandAnimation"] = function (request, data, root) {
  var i678 = root || request.c( 'HandAnimation' )
  var i679 = data
  i678.scaleSpeed = i679[0]
  i678.scaleAmount = i679[1]
  return i678
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i680 = root || request.c( 'UI.PlayerUIController' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'shootButton')
  request.r(i681[2], i681[3], 0, i680, 'zoomButton')
  request.r(i681[4], i681[5], 0, i680, '_cross')
  request.r(i681[6], i681[7], 0, i680, '_tutorialHand2')
  return i680
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i682 = root || request.c( 'Howitzer.PlayerZoom' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'crosshair')
  request.r(i683[2], i683[3], 0, i682, 'mainCamera')
  request.r(i683[4], i683[5], 0, i682, 'zoomImage')
  var i685 = i683[6]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i682.objectsToDisable = i684
  i682.zoomFOV = i683[7]
  i682.normalFOV = i683[8]
  i682.zoomSpeed = i683[9]
  request.r(i683[10], i683[11], 0, i682, 'joystick')
  i682.rotationSpeed = i683[12]
  request.r(i683[13], i683[14], 0, i682, 'pumping')
  request.r(i683[15], i683[16], 0, i682, '_arm')
  request.r(i683[17], i683[18], 0, i682, '_tacticsFabric')
  request.r(i683[19], i683[20], 0, i682, '_titnSprite')
  return i682
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i688 = root || request.c( 'Howitzer.PlayerShooting' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'playerShootingCooldown')
  request.r(i689[2], i689[3], 0, i688, 'mainCamera')
  request.r(i689[4], i689[5], 0, i688, 'crosshairUI')
  request.r(i689[6], i689[7], 0, i688, 'muzzleFlash')
  request.r(i689[8], i689[9], 0, i688, 'explosionEffect')
  request.r(i689[10], i689[11], 0, i688, 'projectilePosition')
  request.r(i689[12], i689[13], 0, i688, 'prefabProjectile')
  i688.projectileSpeed = i689[14]
  i688.poolSize = i689[15]
  request.r(i689[16], i689[17], 0, i688, '_followBullet')
  request.r(i689[18], i689[19], 0, i688, '_managerCamers')
  request.r(i689[20], i689[21], 0, i688, '_timeController')
  request.r(i689[22], i689[23], 0, i688, '_playerUIController')
  request.r(i689[24], i689[25], 0, i688, '_tanksFabric')
  request.r(i689[26], i689[27], 0, i688, '_missPoint')
  request.r(i689[28], i689[29], 0, i688, '_pumping')
  request.r(i689[30], i689[31], 0, i688, '_playerZoom')
  request.r(i689[32], i689[33], 0, i688, '_aim')
  return i688
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i690 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'shootButton')
  request.r(i691[2], i691[3], 0, i690, 'cooldownText')
  request.r(i691[4], i691[5], 0, i690, 'cooldownImage')
  i690.cooldownTime = i691[6]
  return i690
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.Button' )
  var i693 = data
  i692.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i693[0], i692.m_OnClick)
  i692.m_Navigation = request.d('UnityEngine.UI.Navigation', i693[1], i692.m_Navigation)
  i692.m_Transition = i693[2]
  i692.m_Colors = request.d('UnityEngine.UI.ColorBlock', i693[3], i692.m_Colors)
  i692.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i693[4], i692.m_SpriteState)
  i692.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i693[5], i692.m_AnimationTriggers)
  i692.m_Interactable = !!i693[6]
  request.r(i693[7], i693[8], 0, i692, 'm_TargetGraphic')
  return i692
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i695 = data
  i694.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i695[0], i694.m_PersistentCalls)
  return i694
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i697 = data
  var i699 = i697[0]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i699.length; i += 1) {
    i698.add(request.d('UnityEngine.Events.PersistentCall', i699[i + 0]));
  }
  i696.m_Calls = i698
  return i696
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'm_Target')
  i702.m_TargetAssemblyTypeName = i703[2]
  i702.m_MethodName = i703[3]
  i702.m_Mode = i703[4]
  i702.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i703[5], i702.m_Arguments)
  i702.m_CallState = i703[6]
  return i702
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i705 = data
  i704.m_Mode = i705[0]
  i704.m_WrapAround = !!i705[1]
  request.r(i705[2], i705[3], 0, i704, 'm_SelectOnUp')
  request.r(i705[4], i705[5], 0, i704, 'm_SelectOnDown')
  request.r(i705[6], i705[7], 0, i704, 'm_SelectOnLeft')
  request.r(i705[8], i705[9], 0, i704, 'm_SelectOnRight')
  return i704
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i707 = data
  i706.m_NormalColor = new pc.Color(i707[0], i707[1], i707[2], i707[3])
  i706.m_HighlightedColor = new pc.Color(i707[4], i707[5], i707[6], i707[7])
  i706.m_PressedColor = new pc.Color(i707[8], i707[9], i707[10], i707[11])
  i706.m_SelectedColor = new pc.Color(i707[12], i707[13], i707[14], i707[15])
  i706.m_DisabledColor = new pc.Color(i707[16], i707[17], i707[18], i707[19])
  i706.m_ColorMultiplier = i707[20]
  i706.m_FadeDuration = i707[21]
  return i706
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'm_HighlightedSprite')
  request.r(i709[2], i709[3], 0, i708, 'm_PressedSprite')
  request.r(i709[4], i709[5], 0, i708, 'm_SelectedSprite')
  request.r(i709[6], i709[7], 0, i708, 'm_DisabledSprite')
  return i708
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i711 = data
  i710.m_NormalTrigger = i711[0]
  i710.m_HighlightedTrigger = i711[1]
  i710.m_PressedTrigger = i711[2]
  i710.m_SelectedTrigger = i711[3]
  i710.m_DisabledTrigger = i711[4]
  return i710
}

Deserializers["TutorialHand2"] = function (request, data, root) {
  var i712 = root || request.c( 'TutorialHand2' )
  var i713 = data
  i712.scaleSpeed = i713[0]
  i712.scaleAmount = i713[1]
  request.r(i713[2], i713[3], 0, i712, '_shootButton')
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i715 = data
  i714.usedByComposite = !!i715[0]
  i714.autoTiling = !!i715[1]
  i714.size = new pc.Vec2( i715[2], i715[3] )
  i714.edgeRadius = i715[4]
  i714.enabled = !!i715[5]
  i714.isTrigger = !!i715[6]
  i714.usedByEffector = !!i715[7]
  i714.density = i715[8]
  i714.offset = new pc.Vec2( i715[9], i715[10] )
  request.r(i715[11], i715[12], 0, i714, 'material')
  return i714
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.Text' )
  var i717 = data
  i716.m_FontData = request.d('UnityEngine.UI.FontData', i717[0], i716.m_FontData)
  i716.m_Text = i717[1]
  request.r(i717[2], i717[3], 0, i716, 'm_Material')
  i716.m_Maskable = !!i717[4]
  i716.m_Color = new pc.Color(i717[5], i717[6], i717[7], i717[8])
  i716.m_RaycastTarget = !!i717[9]
  i716.m_RaycastPadding = new pc.Vec4( i717[10], i717[11], i717[12], i717[13] )
  return i716
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.FontData' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'm_Font')
  i718.m_FontSize = i719[2]
  i718.m_FontStyle = i719[3]
  i718.m_BestFit = !!i719[4]
  i718.m_MinSize = i719[5]
  i718.m_MaxSize = i719[6]
  i718.m_Alignment = i719[7]
  i718.m_AlignByGeometry = !!i719[8]
  i718.m_RichText = !!i719[9]
  i718.m_HorizontalOverflow = i719[10]
  i718.m_VerticalOverflow = i719[11]
  i718.m_LineSpacing = i719[12]
  return i718
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i720 = root || request.c( 'TutorialHand' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'handImage')
  i720.moveDistance = i721[2]
  i720.moveDuration = i721[3]
  request.r(i721[4], i721[5], 0, i720, '_tutorialHand2')
  request.r(i721[6], i721[7], 0, i720, '_shootButton')
  request.r(i721[8], i721[9], 0, i720, '_zoomButton')
  return i720
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i722 = root || request.c( 'UI.CrosshairMovement' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'joystick')
  request.r(i723[2], i723[3], 0, i722, 'crosshair')
  i722.moveSpeed = i723[4]
  request.r(i723[5], i723[6], 0, i722, 'canvasRect')
  return i722
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i724 = root || request.c( 'UI.EndCardAnimation' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'background')
  request.r(i725[2], i725[3], 0, i724, 'title')
  request.r(i725[4], i725[5], 0, i724, 'logoAndButton')
  request.r(i725[6], i725[7], 0, i724, 'titleText')
  i724.fadeDuration = i725[8]
  i724.scaleDuration = i725[9]
  i724.scaleEase = i725[10]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i727 = data
  i726.m_Alpha = i727[0]
  i726.m_Interactable = !!i727[1]
  i726.m_BlocksRaycasts = !!i727[2]
  i726.m_IgnoreParentGroups = !!i727[3]
  i726.enabled = !!i727[4]
  return i726
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i729 = data
  i728.m_AspectMode = i729[0]
  i728.m_AspectRatio = i729[1]
  return i728
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i730 = root || request.c( 'UI.ButtonPulse' )
  var i731 = data
  i730.scaleMultiplier = i731[0]
  i730.duration = i731[1]
  return i730
}

Deserializers["Cross"] = function (request, data, root) {
  var i732 = root || request.c( 'Cross' )
  var i733 = data
  return i732
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'm_FirstSelected')
  i734.m_sendNavigationEvents = !!i735[2]
  i734.m_DragThreshold = i735[3]
  return i734
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i737 = data
  i736.m_HorizontalAxis = i737[0]
  i736.m_VerticalAxis = i737[1]
  i736.m_SubmitButton = i737[2]
  i736.m_CancelButton = i737[3]
  i736.m_InputActionsPerSecond = i737[4]
  i736.m_RepeatDelay = i737[5]
  i736.m_ForceModuleActive = !!i737[6]
  i736.m_SendPointerHoverToParent = !!i737[7]
  return i736
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i738 = root || request.c( 'Bootstraps.Bootstrap' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'tanksFabric')
  request.r(i739[2], i739[3], 0, i738, 'scenarioGame')
  return i738
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i740 = root || request.c( 'Fabric.TanksFabric' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'tankPrefab')
  var i743 = i741[2]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 1, i742, '')
  }
  i740.spawnPoints = i742
  var i745 = i741[3]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i740.targets = i744
  request.r(i741[4], i741[5], 0, i740, '_target')
  return i740
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i750 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'endCard')
  request.r(i751[2], i751[3], 0, i750, '_audioSource')
  return i750
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i752 = root || request.c( 'UI.TankKillStatistics' )
  var i753 = data
  return i752
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i754 = root || request.c( 'ManagerCamers' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, '_plauerCamera')
  request.r(i755[2], i755[3], 0, i754, '_bulletCamera')
  request.r(i755[4], i755[5], 0, i754, '_timeController')
  request.r(i755[6], i755[7], 0, i754, '_playerZoom')
  return i754
}

Deserializers["TimeController"] = function (request, data, root) {
  var i756 = root || request.c( 'TimeController' )
  var i757 = data
  i756.slowMotionScale = i757[0]
  i756.slowMotionDuration = i757[1]
  i756.restoreSpeedDuration = i757[2]
  return i756
}

Deserializers["Pumping"] = function (request, data, root) {
  var i758 = root || request.c( 'Pumping' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'm_Camera')
  request.r(i759[2], i759[3], 0, i758, '_pumpingCamera')
  request.r(i759[4], i759[5], 0, i758, '_UI')
  request.r(i759[6], i759[7], 0, i758, '_arta1')
  request.r(i759[8], i759[9], 0, i758, '_arm')
  request.r(i759[10], i759[11], 0, i758, '_shopping')
  request.r(i759[12], i759[13], 0, i758, '_interactiveArt')
  request.r(i759[14], i759[15], 0, i758, '_tacticsFabric')
  request.r(i759[16], i759[17], 0, i758, '_button')
  request.r(i759[18], i759[19], 0, i758, '_titnSprite')
  request.r(i759[20], i759[21], 0, i758, '_arm2')
  return i758
}

Deserializers["Shopping"] = function (request, data, root) {
  var i760 = root || request.c( 'Shopping' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, '_improveButton')
  request.r(i761[2], i761[3], 0, i760, '_purchase')
  request.r(i761[4], i761[5], 0, i760, '_unavailableWeaponButton')
  request.r(i761[6], i761[7], 0, i760, '_shopping')
  request.r(i761[8], i761[9], 0, i760, '_shoppingPlayer')
  request.r(i761[10], i761[11], 0, i760, '_tanksFabric')
  request.r(i761[12], i761[13], 0, i760, '_interactiveArt')
  request.r(i761[14], i761[15], 0, i760, '_indicatorr')
  request.r(i761[16], i761[17], 0, i760, '_cross')
  request.r(i761[18], i761[19], 0, i760, '_cross2')
  request.r(i761[20], i761[21], 0, i760, '_playerUIController')
  return i760
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'm_ObjectArgument')
  i762.m_ObjectArgumentAssemblyTypeName = i763[2]
  i762.m_IntArgument = i763[3]
  i762.m_FloatArgument = i763[4]
  i762.m_StringArgument = i763[5]
  i762.m_BoolArgument = !!i763[6]
  return i762
}

Deserializers["Indicatorr"] = function (request, data, root) {
  var i764 = root || request.c( 'Indicatorr' )
  var i765 = data
  i764.fadeDuration = i765[0]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i767 = data
  i766.ambientIntensity = i767[0]
  i766.reflectionIntensity = i767[1]
  i766.ambientMode = i767[2]
  i766.ambientLight = new pc.Color(i767[3], i767[4], i767[5], i767[6])
  i766.ambientSkyColor = new pc.Color(i767[7], i767[8], i767[9], i767[10])
  i766.ambientGroundColor = new pc.Color(i767[11], i767[12], i767[13], i767[14])
  i766.ambientEquatorColor = new pc.Color(i767[15], i767[16], i767[17], i767[18])
  i766.fogColor = new pc.Color(i767[19], i767[20], i767[21], i767[22])
  i766.fogEndDistance = i767[23]
  i766.fogStartDistance = i767[24]
  i766.fogDensity = i767[25]
  i766.fog = !!i767[26]
  request.r(i767[27], i767[28], 0, i766, 'skybox')
  i766.fogMode = i767[29]
  var i769 = i767[30]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i769[i + 0]) );
  }
  i766.lightmaps = i768
  i766.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i767[31], i766.lightProbes)
  i766.lightmapsMode = i767[32]
  i766.mixedBakeMode = i767[33]
  i766.environmentLightingMode = i767[34]
  i766.ambientProbe = new pc.SphericalHarmonicsL2(i767[35])
  i766.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i767[36])
  i766.useReferenceAmbientProbe = !!i767[37]
  request.r(i767[38], i767[39], 0, i766, 'customReflection')
  request.r(i767[40], i767[41], 0, i766, 'defaultReflection')
  i766.defaultReflectionMode = i767[42]
  i766.defaultReflectionResolution = i767[43]
  i766.sunLightObjectId = i767[44]
  i766.pixelLightCount = i767[45]
  i766.defaultReflectionHDR = !!i767[46]
  i766.hasLightDataAsset = !!i767[47]
  i766.hasManualGenerate = !!i767[48]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'lightmapColor')
  request.r(i773[2], i773[3], 0, i772, 'lightmapDirection')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i774 = root || new UnityEngine.LightProbes()
  var i775 = data
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i783 = data
  var i785 = i783[0]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i785[i + 0]));
  }
  i782.ShaderCompilationErrors = i784
  i782.name = i783[1]
  i782.guid = i783[2]
  var i787 = i783[3]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( i787[i + 0] );
  }
  i782.shaderDefinedKeywords = i786
  var i789 = i783[4]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i789[i + 0]) );
  }
  i782.passes = i788
  var i791 = i783[5]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i791[i + 0]) );
  }
  i782.usePasses = i790
  var i793 = i783[6]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i793[i + 0]) );
  }
  i782.defaultParameterValues = i792
  request.r(i783[7], i783[8], 0, i782, 'unityFallbackShader')
  i782.readDepth = !!i783[9]
  i782.isCreatedByShaderGraph = !!i783[10]
  i782.compiled = !!i783[11]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i797 = data
  i796.shaderName = i797[0]
  i796.errorMessage = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i802 = root || new pc.UnityShaderPass()
  var i803 = data
  i802.id = i803[0]
  i802.subShaderIndex = i803[1]
  i802.name = i803[2]
  i802.passType = i803[3]
  i802.grabPassTextureName = i803[4]
  i802.usePass = !!i803[5]
  i802.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[6], i802.zTest)
  i802.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[7], i802.zWrite)
  i802.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[8], i802.culling)
  i802.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i803[9], i802.blending)
  i802.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i803[10], i802.alphaBlending)
  i802.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[11], i802.colorWriteMask)
  i802.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[12], i802.offsetUnits)
  i802.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[13], i802.offsetFactor)
  i802.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[14], i802.stencilRef)
  i802.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[15], i802.stencilReadMask)
  i802.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[16], i802.stencilWriteMask)
  i802.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i803[17], i802.stencilOp)
  i802.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i803[18], i802.stencilOpFront)
  i802.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i803[19], i802.stencilOpBack)
  var i805 = i803[20]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i805[i + 0]) );
  }
  i802.tags = i804
  var i807 = i803[21]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i802.passDefinedKeywords = i806
  var i809 = i803[22]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i809[i + 0]) );
  }
  i802.passDefinedKeywordGroups = i808
  var i811 = i803[23]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i811[i + 0]) );
  }
  i802.variants = i810
  var i813 = i803[24]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i813[i + 0]) );
  }
  i802.excludedVariants = i812
  i802.hasDepthReader = !!i803[25]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i815 = data
  i814.val = i815[0]
  i814.name = i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i817 = data
  i816.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[0], i816.src)
  i816.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[1], i816.dst)
  i816.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[2], i816.op)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i819 = data
  i818.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[0], i818.pass)
  i818.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[1], i818.fail)
  i818.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[2], i818.zFail)
  i818.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i819[3], i818.comp)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i823 = data
  i822.name = i823[0]
  i822.value = i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i827 = data
  var i829 = i827[0]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( i829[i + 0] );
  }
  i826.keywords = i828
  i826.hasDiscard = !!i827[1]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i833 = data
  i832.passId = i833[0]
  i832.subShaderIndex = i833[1]
  var i835 = i833[2]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( i835[i + 0] );
  }
  i832.keywords = i834
  i832.vertexProgram = i833[3]
  i832.fragmentProgram = i833[4]
  i832.exportedForWebGl2 = !!i833[5]
  i832.readDepth = !!i833[6]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'shader')
  i838.pass = i839[2]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i843 = data
  i842.name = i843[0]
  i842.type = i843[1]
  i842.value = new pc.Vec4( i843[2], i843[3], i843[4], i843[5] )
  i842.textureValue = i843[6]
  i842.shaderPropertyFlag = i843[7]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i845 = data
  i844.name = i845[0]
  request.r(i845[1], i845[2], 0, i844, 'texture')
  i844.aabb = i845[3]
  i844.vertices = i845[4]
  i844.triangles = i845[5]
  i844.textureRect = UnityEngine.Rect.MinMaxRect(i845[6], i845[7], i845[8], i845[9])
  i844.packedRect = UnityEngine.Rect.MinMaxRect(i845[10], i845[11], i845[12], i845[13])
  i844.border = new pc.Vec4( i845[14], i845[15], i845[16], i845[17] )
  i844.transparency = i845[18]
  i844.bounds = i845[19]
  i844.pixelsPerUnit = i845[20]
  i844.textureWidth = i845[21]
  i844.textureHeight = i845[22]
  i844.nativeSize = new pc.Vec2( i845[23], i845[24] )
  i844.pivot = new pc.Vec2( i845[25], i845[26] )
  i844.textureRectOffset = new pc.Vec2( i845[27], i845[28] )
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i847 = data
  i846.name = i847[0]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i849 = data
  i848.name = i849[0]
  i848.ascent = i849[1]
  i848.originalLineHeight = i849[2]
  i848.fontSize = i849[3]
  var i851 = i849[4]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i851[i + 0]) );
  }
  i848.characterInfo = i850
  request.r(i849[5], i849[6], 0, i848, 'texture')
  i848.originalFontSize = i849[7]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i855 = data
  i854.index = i855[0]
  i854.advance = i855[1]
  i854.bearing = i855[2]
  i854.glyphWidth = i855[3]
  i854.glyphHeight = i855[4]
  i854.minX = i855[5]
  i854.maxX = i855[6]
  i854.minY = i855[7]
  i854.maxY = i855[8]
  i854.uvBottomLeftX = i855[9]
  i854.uvBottomLeftY = i855[10]
  i854.uvBottomRightX = i855[11]
  i854.uvBottomRightY = i855[12]
  i854.uvTopLeftX = i855[13]
  i854.uvTopLeftY = i855[14]
  i854.uvTopRightX = i855[15]
  i854.uvTopRightY = i855[16]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i857 = data
  var i859 = i857[0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i859[i + 0]) );
  }
  i856.files = i858
  i856.componentToPrefabIds = i857[1]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i863 = data
  i862.path = i863[0]
  request.r(i863[1], i863[2], 0, i862, 'unityObject')
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i865 = data
  var i867 = i865[0]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i867[i + 0]) );
  }
  i864.scriptsExecutionOrder = i866
  var i869 = i865[1]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i869[i + 0]) );
  }
  i864.sortingLayers = i868
  var i871 = i865[2]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i871[i + 0]) );
  }
  i864.cullingLayers = i870
  i864.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i865[3], i864.timeSettings)
  i864.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i865[4], i864.physicsSettings)
  i864.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i865[5], i864.physics2DSettings)
  i864.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i865[6], i864.qualitySettings)
  i864.enableRealtimeShadows = !!i865[7]
  i864.enableAutoInstancing = !!i865[8]
  i864.enableDynamicBatching = !!i865[9]
  i864.lightmapEncodingQuality = i865[10]
  i864.desiredColorSpace = i865[11]
  var i873 = i865[12]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i864.allTags = i872
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i877 = data
  i876.name = i877[0]
  i876.value = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i881 = data
  i880.id = i881[0]
  i880.name = i881[1]
  i880.value = i881[2]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i885 = data
  i884.id = i885[0]
  i884.name = i885[1]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i887 = data
  i886.fixedDeltaTime = i887[0]
  i886.maximumDeltaTime = i887[1]
  i886.timeScale = i887[2]
  i886.maximumParticleTimestep = i887[3]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i889 = data
  i888.gravity = new pc.Vec3( i889[0], i889[1], i889[2] )
  i888.defaultSolverIterations = i889[3]
  i888.bounceThreshold = i889[4]
  i888.autoSyncTransforms = !!i889[5]
  i888.autoSimulation = !!i889[6]
  var i891 = i889[7]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i891[i + 0]) );
  }
  i888.collisionMatrix = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i895 = data
  i894.enabled = !!i895[0]
  i894.layerId = i895[1]
  i894.otherLayerId = i895[2]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'material')
  i896.gravity = new pc.Vec2( i897[2], i897[3] )
  i896.positionIterations = i897[4]
  i896.velocityIterations = i897[5]
  i896.velocityThreshold = i897[6]
  i896.maxLinearCorrection = i897[7]
  i896.maxAngularCorrection = i897[8]
  i896.maxTranslationSpeed = i897[9]
  i896.maxRotationSpeed = i897[10]
  i896.baumgarteScale = i897[11]
  i896.baumgarteTOIScale = i897[12]
  i896.timeToSleep = i897[13]
  i896.linearSleepTolerance = i897[14]
  i896.angularSleepTolerance = i897[15]
  i896.defaultContactOffset = i897[16]
  i896.autoSimulation = !!i897[17]
  i896.queriesHitTriggers = !!i897[18]
  i896.queriesStartInColliders = !!i897[19]
  i896.callbacksOnDisable = !!i897[20]
  i896.reuseCollisionCallbacks = !!i897[21]
  i896.autoSyncTransforms = !!i897[22]
  var i899 = i897[23]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i899[i + 0]) );
  }
  i896.collisionMatrix = i898
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i903 = data
  i902.enabled = !!i903[0]
  i902.layerId = i903[1]
  i902.otherLayerId = i903[2]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i905 = data
  var i907 = i905[0]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i907[i + 0]) );
  }
  i904.qualityLevels = i906
  var i909 = i905[1]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i904.names = i908
  i904.shadows = i905[2]
  i904.anisotropicFiltering = i905[3]
  i904.antiAliasing = i905[4]
  i904.lodBias = i905[5]
  i904.shadowCascades = i905[6]
  i904.shadowDistance = i905[7]
  i904.shadowmaskMode = i905[8]
  i904.shadowProjection = i905[9]
  i904.shadowResolution = i905[10]
  i904.softParticles = !!i905[11]
  i904.softVegetation = !!i905[12]
  i904.activeColorSpace = i905[13]
  i904.desiredColorSpace = i905[14]
  i904.masterTextureLimit = i905[15]
  i904.maxQueuedFrames = i905[16]
  i904.particleRaycastBudget = i905[17]
  i904.pixelLightCount = i905[18]
  i904.realtimeReflectionProbes = !!i905[19]
  i904.shadowCascade2Split = i905[20]
  i904.shadowCascade4Split = new pc.Vec3( i905[21], i905[22], i905[23] )
  i904.streamingMipmapsActive = !!i905[24]
  i904.vSyncCount = i905[25]
  i904.asyncUploadBufferSize = i905[26]
  i904.asyncUploadTimeSlice = i905[27]
  i904.billboardsFaceCameraPosition = !!i905[28]
  i904.shadowNearPlaneOffset = i905[29]
  i904.streamingMipmapsMemoryBudget = i905[30]
  i904.maximumLODLevel = i905[31]
  i904.streamingMipmapsAddAllCameras = !!i905[32]
  i904.streamingMipmapsMaxLevelReduction = i905[33]
  i904.streamingMipmapsRenderersPerFrame = i905[34]
  i904.resolutionScalingFixedDPIFactor = i905[35]
  i904.streamingMipmapsMaxFileIORequests = i905[36]
  i904.currentQualityLevel = i905[37]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i915 = data
  i914.weight = i915[0]
  i914.vertices = i915[1]
  i914.normals = i915[2]
  i914.tangents = i915[3]
  return i914
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[80],"81":[38],"82":[32],"83":[32],"84":[32],"85":[32],"86":[32],"87":[32],"88":[32],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[90],"98":[90],"99":[90],"100":[90],"101":[90],"102":[90],"103":[38],"104":[15],"105":[106],"107":[106],"17":[0],"108":[21],"29":[21],"109":[25],"110":[13],"111":[25],"112":[0],"113":[38],"114":[38],"26":[25],"115":[38],"116":[117],"118":[0],"119":[0],"19":[17],"3":[1,0],"63":[0],"18":[17],"120":[0],"121":[0],"122":[0],"123":[0],"124":[0],"125":[0],"126":[0],"127":[0],"128":[0],"129":[1,0],"130":[0],"131":[0],"132":[0],"133":[0],"56":[1,0],"134":[0],"135":[65],"136":[65],"66":[65],"137":[65],"138":[38],"139":[38],"140":[117],"141":[117],"142":[38],"143":[144]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","VariableJoystick","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.BoxCollider","BehaviourAI.TankAI","UnityEngine.GameObject","Tower","Gun","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ExclamationMark","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.SpriteRenderer","TitnSprite","CFX_AutoDestructShuriken","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Rigidbody","Howitzer.Projectile","UnityEngine.CapsuleCollider","MissPoint","UnityEngine.LODGroup","UnityEngine.Cubemap","UnityEngine.Camera","UnityEngine.AudioListener","Howitzer.LookAtCrosshair","InteractiveArt","Howitzer.LookAtReticle","FollowBullet","HandAnimation","UI.PlayerUIController","UnityEngine.UI.Button","Cross","TutorialHand2","Howitzer.PlayerZoom","Pumping","Fabric.TanksFabric","Howitzer.PlayerShooting","Howitzer.PlayerShootingCooldown","ManagerCamers","TimeController","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","UnityEngine.Font","TutorialHand","UI.CrosshairMovement","UI.EndCardAnimation","UnityEngine.CanvasGroup","UnityEngine.UI.AspectRatioFitter","UI.ButtonPulse","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Bootstraps.Bootstrap","Bootstraps.ScenarioGame","UI.TankKillStatistics","Shopping","Indicatorr","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CFX_AutoStopLoopedEffect","CFX_LightIntensityFade","WFX_BulletHoleDecal","WFX_LightFlicker","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/12/2025 18:23:14";

Deserializers.lunaDaysRunning = "19.9";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "vfrfv";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "6c12a4f49c2e1c74dbc0beaf340cbc67";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.9.7\ncom.unity.postprocessing: 3.2.2\ncom.unity.render-pipelines.core: 14.0.8\ncom.unity.render-pipelines.universal: 14.0.8\ncom.unity.shadergraph: 14.0.8\ncom.unity.textmeshpro: \ncom.unity.timeline: 1.7.5\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1817";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3630";

Deserializers.runtimeAnalysisExcludedModules = "mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.My-project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "7ca85779-d187-4fca-8c17-21175867d4a8";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

