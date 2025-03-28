var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointSpring' )
  var i455 = data
  i454.spring = i455[0]
  i454.damper = i455[1]
  i454.targetPosition = i455[2]
  return i454
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointMotor' )
  var i457 = data
  i456.m_TargetVelocity = i457[0]
  i456.m_Force = i457[1]
  i456.m_FreeSpin = i457[2]
  return i456
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointLimits' )
  var i459 = data
  i458.m_Min = i459[0]
  i458.m_Max = i459[1]
  i458.m_Bounciness = i459[2]
  i458.m_BounceMinVelocity = i459[3]
  i458.m_ContactDistance = i459[4]
  i458.minBounce = i459[5]
  i458.maxBounce = i459[6]
  return i458
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointDrive' )
  var i461 = data
  i460.m_PositionSpring = i461[0]
  i460.m_PositionDamper = i461[1]
  i460.m_MaximumForce = i461[2]
  i460.m_UseAcceleration = i461[3]
  return i460
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i463 = data
  i462.m_Spring = i463[0]
  i462.m_Damper = i463[1]
  return i462
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i465 = data
  i464.m_Limit = i465[0]
  i464.m_Bounciness = i465[1]
  i464.m_ContactDistance = i465[2]
  return i464
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i467 = data
  i466.m_ExtremumSlip = i467[0]
  i466.m_ExtremumValue = i467[1]
  i466.m_AsymptoteSlip = i467[2]
  i466.m_AsymptoteValue = i467[3]
  i466.m_Stiffness = i467[4]
  return i466
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i469 = data
  i468.m_LowerAngle = i469[0]
  i468.m_UpperAngle = i469[1]
  return i468
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i471 = data
  i470.m_MotorSpeed = i471[0]
  i470.m_MaximumMotorTorque = i471[1]
  return i470
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i473 = data
  i472.m_DampingRatio = i473[0]
  i472.m_Frequency = i473[1]
  i472.m_Angle = i473[2]
  return i472
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i475 = data
  i474.m_LowerTranslation = i475[0]
  i474.m_UpperTranslation = i475[1]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i477 = data
  i476.pivot = new pc.Vec2( i477[0], i477[1] )
  i476.anchorMin = new pc.Vec2( i477[2], i477[3] )
  i476.anchorMax = new pc.Vec2( i477[4], i477[5] )
  i476.sizeDelta = new pc.Vec2( i477[6], i477[7] )
  i476.anchoredPosition3D = new pc.Vec3( i477[8], i477[9], i477[10] )
  i476.rotation = new pc.Quat(i477[11], i477[12], i477[13], i477[14])
  i476.scale = new pc.Vec3( i477[15], i477[16], i477[17] )
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i479 = data
  i478.cullTransparentMesh = !!i479[0]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i481 = data
  i480.name = i481[0]
  i480.tagId = i481[1]
  i480.enabled = !!i481[2]
  i480.isStatic = !!i481[3]
  i480.layer = i481[4]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i483 = data
  i482.name = i483[0]
  i482.width = i483[1]
  i482.height = i483[2]
  i482.mipmapCount = i483[3]
  i482.anisoLevel = i483[4]
  i482.filterMode = i483[5]
  i482.hdr = !!i483[6]
  i482.format = i483[7]
  i482.wrapMode = i483[8]
  i482.alphaIsTransparency = !!i483[9]
  i482.alphaSource = i483[10]
  i482.graphicsFormat = i483[11]
  i482.sRGBTexture = !!i483[12]
  i482.desiredColorSpace = i483[13]
  i482.wrapU = i483[14]
  i482.wrapV = i483[15]
  return i482
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.UI.Image' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'm_Sprite')
  i484.m_Type = i485[2]
  i484.m_PreserveAspect = !!i485[3]
  i484.m_FillCenter = !!i485[4]
  i484.m_FillMethod = i485[5]
  i484.m_FillAmount = i485[6]
  i484.m_FillClockwise = !!i485[7]
  i484.m_FillOrigin = i485[8]
  i484.m_UseSpriteMesh = !!i485[9]
  i484.m_PixelsPerUnitMultiplier = i485[10]
  request.r(i485[11], i485[12], 0, i484, 'm_Material')
  i484.m_Maskable = !!i485[13]
  i484.m_Color = new pc.Color(i485[14], i485[15], i485[16], i485[17])
  i484.m_RaycastTarget = !!i485[18]
  i484.m_RaycastPadding = new pc.Vec4( i485[19], i485[20], i485[21], i485[22] )
  return i484
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i486 = root || request.c( 'VariableJoystick' )
  var i487 = data
  request.r(i487[0], i487[1], 0, i486, 'handle')
  i486.moveThreshold = i487[2]
  i486.joystickType = i487[3]
  request.r(i487[4], i487[5], 0, i486, 'background')
  i486.handleRange = i487[6]
  i486.deadZone = i487[7]
  i486.axisOptions = i487[8]
  i486.snapX = !!i487[9]
  i486.snapY = !!i487[10]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i489 = data
  i488.position = new pc.Vec3( i489[0], i489[1], i489[2] )
  i488.scale = new pc.Vec3( i489[3], i489[4], i489[5] )
  i488.rotation = new pc.Quat(i489[6], i489[7], i489[8], i489[9])
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i491 = data
  i490.center = new pc.Vec3( i491[0], i491[1], i491[2] )
  i490.size = new pc.Vec3( i491[3], i491[4], i491[5] )
  i490.enabled = !!i491[6]
  i490.isTrigger = !!i491[7]
  request.r(i491[8], i491[9], 0, i490, 'material')
  return i490
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i492 = root || request.c( 'BehaviourAI.TankAI' )
  var i493 = data
  i492.stopDistance = i493[0]
  i492.rotationSpeed = i493[1]
  i492.moveSpeed = i493[2]
  request.r(i493[3], i493[4], 0, i492, '_exclamationMark')
  request.r(i493[5], i493[6], 0, i492, '_guidance')
  i492.avoidanceDistance = i493[7]
  i492.tankLayer = UnityEngine.LayerMask.FromIntegerValue( i493[8] )
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'sharedMesh')
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i497 = data
  request.r(i497[0], i497[1], 0, i496, 'additionalVertexStreams')
  i496.enabled = !!i497[2]
  request.r(i497[3], i497[4], 0, i496, 'sharedMaterial')
  var i499 = i497[5]
  var i498 = []
  for(var i = 0; i < i499.length; i += 2) {
  request.r(i499[i + 0], i499[i + 1], 2, i498, '')
  }
  i496.sharedMaterials = i498
  i496.receiveShadows = !!i497[6]
  i496.shadowCastingMode = i497[7]
  i496.sortingLayerID = i497[8]
  i496.sortingOrder = i497[9]
  i496.lightmapIndex = i497[10]
  i496.lightmapSceneIndex = i497[11]
  i496.lightmapScaleOffset = new pc.Vec4( i497[12], i497[13], i497[14], i497[15] )
  i496.lightProbeUsage = i497[16]
  i496.reflectionProbeUsage = i497[17]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i503 = data
  i502.enabled = !!i503[0]
  i502.planeDistance = i503[1]
  i502.referencePixelsPerUnit = i503[2]
  i502.isFallbackOverlay = !!i503[3]
  i502.renderMode = i503[4]
  i502.renderOrder = i503[5]
  i502.sortingLayerName = i503[6]
  i502.sortingOrder = i503[7]
  i502.scaleFactor = i503[8]
  request.r(i503[9], i503[10], 0, i502, 'worldCamera')
  i502.overrideSorting = !!i503[11]
  i502.pixelPerfect = !!i503[12]
  i502.targetDisplay = i503[13]
  i502.overridePixelPerfect = !!i503[14]
  return i502
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i505 = data
  i504.m_UiScaleMode = i505[0]
  i504.m_ReferencePixelsPerUnit = i505[1]
  i504.m_ScaleFactor = i505[2]
  i504.m_ReferenceResolution = new pc.Vec2( i505[3], i505[4] )
  i504.m_ScreenMatchMode = i505[5]
  i504.m_MatchWidthOrHeight = i505[6]
  i504.m_PhysicalUnit = i505[7]
  i504.m_FallbackScreenDPI = i505[8]
  i504.m_DefaultSpriteDPI = i505[9]
  i504.m_DynamicPixelsPerUnit = i505[10]
  i504.m_PresetInfoIsWorld = !!i505[11]
  return i504
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i507 = data
  i506.m_IgnoreReversedGraphics = !!i507[0]
  i506.m_BlockingObjects = i507[1]
  i506.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i507[2] )
  return i506
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i508 = root || request.c( 'ExclamationMark' )
  var i509 = data
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i511 = data
  i510.name = i511[0]
  i510.halfPrecision = !!i511[1]
  i510.useUInt32IndexFormat = !!i511[2]
  i510.vertexCount = i511[3]
  i510.aabb = i511[4]
  var i513 = i511[5]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( !!i513[i + 0] );
  }
  i510.streams = i512
  i510.vertices = i511[6]
  var i515 = i511[7]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i515[i + 0]) );
  }
  i510.subMeshes = i514
  var i517 = i511[8]
  var i516 = []
  for(var i = 0; i < i517.length; i += 16) {
    i516.push( new pc.Mat4().setData(i517[i + 0], i517[i + 1], i517[i + 2], i517[i + 3],  i517[i + 4], i517[i + 5], i517[i + 6], i517[i + 7],  i517[i + 8], i517[i + 9], i517[i + 10], i517[i + 11],  i517[i + 12], i517[i + 13], i517[i + 14], i517[i + 15]) );
  }
  i510.bindposes = i516
  var i519 = i511[9]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i519[i + 0]) );
  }
  i510.blendShapes = i518
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i525 = data
  i524.triangles = i525[0]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i531 = data
  i530.name = i531[0]
  var i533 = i531[1]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i533[i + 0]) );
  }
  i530.frames = i532
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i534 = root || new pc.UnityMaterial()
  var i535 = data
  i534.name = i535[0]
  request.r(i535[1], i535[2], 0, i534, 'shader')
  i534.renderQueue = i535[3]
  i534.enableInstancing = !!i535[4]
  var i537 = i535[5]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i537[i + 0]) );
  }
  i534.floatParameters = i536
  var i539 = i535[6]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i539[i + 0]) );
  }
  i534.colorParameters = i538
  var i541 = i535[7]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i541[i + 0]) );
  }
  i534.vectorParameters = i540
  var i543 = i535[8]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i543[i + 0]) );
  }
  i534.textureParameters = i542
  var i545 = i535[9]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i545[i + 0]) );
  }
  i534.materialFlags = i544
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i549 = data
  i548.name = i549[0]
  i548.value = i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i553 = data
  i552.name = i553[0]
  i552.value = new pc.Color(i553[1], i553[2], i553[3], i553[4])
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i557 = data
  i556.name = i557[0]
  i556.value = new pc.Vec4( i557[1], i557[2], i557[3], i557[4] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i561 = data
  i560.name = i561[0]
  request.r(i561[1], i561[2], 0, i560, 'value')
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i565 = data
  i564.name = i565[0]
  i564.enabled = !!i565[1]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i567 = data
  i566.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i567[0], i566.main)
  i566.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i567[1], i566.colorBySpeed)
  i566.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i567[2], i566.colorOverLifetime)
  i566.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i567[3], i566.emission)
  i566.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i567[4], i566.rotationBySpeed)
  i566.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i567[5], i566.rotationOverLifetime)
  i566.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i567[6], i566.shape)
  i566.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i567[7], i566.sizeBySpeed)
  i566.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i567[8], i566.sizeOverLifetime)
  i566.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i567[9], i566.textureSheetAnimation)
  i566.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i567[10], i566.velocityOverLifetime)
  i566.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i567[11], i566.noise)
  i566.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i567[12], i566.inheritVelocity)
  i566.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i567[13], i566.forceOverLifetime)
  i566.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i567[14], i566.limitVelocityOverLifetime)
  i566.useAutoRandomSeed = !!i567[15]
  i566.randomSeed = i567[16]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemMain()
  var i569 = data
  i568.duration = i569[0]
  i568.loop = !!i569[1]
  i568.prewarm = !!i569[2]
  i568.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[3], i568.startDelay)
  i568.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[4], i568.startLifetime)
  i568.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[5], i568.startSpeed)
  i568.startSize3D = !!i569[6]
  i568.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[7], i568.startSizeX)
  i568.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[8], i568.startSizeY)
  i568.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[9], i568.startSizeZ)
  i568.startRotation3D = !!i569[10]
  i568.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[11], i568.startRotationX)
  i568.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[12], i568.startRotationY)
  i568.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[13], i568.startRotationZ)
  i568.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i569[14], i568.startColor)
  i568.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[15], i568.gravityModifier)
  i568.simulationSpace = i569[16]
  request.r(i569[17], i569[18], 0, i568, 'customSimulationSpace')
  i568.simulationSpeed = i569[19]
  i568.useUnscaledTime = !!i569[20]
  i568.scalingMode = i569[21]
  i568.playOnAwake = !!i569[22]
  i568.maxParticles = i569[23]
  i568.emitterVelocityMode = i569[24]
  i568.stopAction = i569[25]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i570 = root || new pc.MinMaxCurve()
  var i571 = data
  i570.mode = i571[0]
  i570.curveMin = new pc.AnimationCurve( { keys_flow: i571[1] } )
  i570.curveMax = new pc.AnimationCurve( { keys_flow: i571[2] } )
  i570.curveMultiplier = i571[3]
  i570.constantMin = i571[4]
  i570.constantMax = i571[5]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i572 = root || new pc.MinMaxGradient()
  var i573 = data
  i572.mode = i573[0]
  i572.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i573[1], i572.gradientMin)
  i572.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i573[2], i572.gradientMax)
  i572.colorMin = new pc.Color(i573[3], i573[4], i573[5], i573[6])
  i572.colorMax = new pc.Color(i573[7], i573[8], i573[9], i573[10])
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i575 = data
  i574.mode = i575[0]
  var i577 = i575[1]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i577[i + 0]) );
  }
  i574.colorKeys = i576
  var i579 = i575[2]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i579[i + 0]) );
  }
  i574.alphaKeys = i578
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemColorBySpeed()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i581[1], i580.color)
  i580.range = new pc.Vec2( i581[2], i581[3] )
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i585 = data
  i584.color = new pc.Color(i585[0], i585[1], i585[2], i585[3])
  i584.time = i585[4]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i589 = data
  i588.alpha = i589[0]
  i588.time = i589[1]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemColorOverLifetime()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i591[1], i590.color)
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemEmitter()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[1], i592.rateOverTime)
  i592.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.rateOverDistance)
  var i595 = i593[3]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i595[i + 0]) );
  }
  i592.bursts = i594
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i598 = root || new pc.ParticleSystemBurst()
  var i599 = data
  i598.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[0], i598.count)
  i598.cycleCount = i599[1]
  i598.minCount = i599[2]
  i598.maxCount = i599[3]
  i598.repeatInterval = i599[4]
  i598.time = i599[5]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemRotationBySpeed()
  var i601 = data
  i600.enabled = !!i601[0]
  i600.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[1], i600.x)
  i600.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[2], i600.y)
  i600.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[3], i600.z)
  i600.separateAxes = !!i601[4]
  i600.range = new pc.Vec2( i601[5], i601[6] )
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemRotationOverLifetime()
  var i603 = data
  i602.enabled = !!i603[0]
  i602.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[1], i602.x)
  i602.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[2], i602.y)
  i602.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[3], i602.z)
  i602.separateAxes = !!i603[4]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemShape()
  var i605 = data
  i604.enabled = !!i605[0]
  i604.shapeType = i605[1]
  i604.randomDirectionAmount = i605[2]
  i604.sphericalDirectionAmount = i605[3]
  i604.randomPositionAmount = i605[4]
  i604.alignToDirection = !!i605[5]
  i604.radius = i605[6]
  i604.radiusMode = i605[7]
  i604.radiusSpread = i605[8]
  i604.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[9], i604.radiusSpeed)
  i604.radiusThickness = i605[10]
  i604.angle = i605[11]
  i604.length = i605[12]
  i604.boxThickness = new pc.Vec3( i605[13], i605[14], i605[15] )
  i604.meshShapeType = i605[16]
  request.r(i605[17], i605[18], 0, i604, 'mesh')
  request.r(i605[19], i605[20], 0, i604, 'meshRenderer')
  request.r(i605[21], i605[22], 0, i604, 'skinnedMeshRenderer')
  i604.useMeshMaterialIndex = !!i605[23]
  i604.meshMaterialIndex = i605[24]
  i604.useMeshColors = !!i605[25]
  i604.normalOffset = i605[26]
  i604.arc = i605[27]
  i604.arcMode = i605[28]
  i604.arcSpread = i605[29]
  i604.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[30], i604.arcSpeed)
  i604.donutRadius = i605[31]
  i604.position = new pc.Vec3( i605[32], i605[33], i605[34] )
  i604.rotation = new pc.Vec3( i605[35], i605[36], i605[37] )
  i604.scale = new pc.Vec3( i605[38], i605[39], i605[40] )
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemSizeBySpeed()
  var i607 = data
  i606.enabled = !!i607[0]
  i606.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[1], i606.x)
  i606.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[2], i606.y)
  i606.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[3], i606.z)
  i606.separateAxes = !!i607[4]
  i606.range = new pc.Vec2( i607[5], i607[6] )
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i608 = root || new pc.ParticleSystemSizeOverLifetime()
  var i609 = data
  i608.enabled = !!i609[0]
  i608.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[1], i608.x)
  i608.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[2], i608.y)
  i608.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[3], i608.z)
  i608.separateAxes = !!i609[4]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i610 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i611 = data
  i610.enabled = !!i611[0]
  i610.mode = i611[1]
  i610.animation = i611[2]
  i610.numTilesX = i611[3]
  i610.numTilesY = i611[4]
  i610.useRandomRow = !!i611[5]
  i610.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[6], i610.frameOverTime)
  i610.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[7], i610.startFrame)
  i610.cycleCount = i611[8]
  i610.rowIndex = i611[9]
  i610.flipU = i611[10]
  i610.flipV = i611[11]
  i610.spriteCount = i611[12]
  var i613 = i611[13]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 2, i612, '')
  }
  i610.sprites = i612
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i616 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i617 = data
  i616.enabled = !!i617[0]
  i616.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[1], i616.x)
  i616.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[2], i616.y)
  i616.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[3], i616.z)
  i616.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[4], i616.radial)
  i616.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[5], i616.speedModifier)
  i616.space = i617[6]
  i616.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[7], i616.orbitalX)
  i616.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[8], i616.orbitalY)
  i616.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[9], i616.orbitalZ)
  i616.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[10], i616.orbitalOffsetX)
  i616.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[11], i616.orbitalOffsetY)
  i616.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[12], i616.orbitalOffsetZ)
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i618 = root || new pc.ParticleSystemNoise()
  var i619 = data
  i618.enabled = !!i619[0]
  i618.separateAxes = !!i619[1]
  i618.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[2], i618.strengthX)
  i618.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[3], i618.strengthY)
  i618.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[4], i618.strengthZ)
  i618.frequency = i619[5]
  i618.damping = !!i619[6]
  i618.octaveCount = i619[7]
  i618.octaveMultiplier = i619[8]
  i618.octaveScale = i619[9]
  i618.quality = i619[10]
  i618.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[11], i618.scrollSpeed)
  i618.scrollSpeedMultiplier = i619[12]
  i618.remapEnabled = !!i619[13]
  i618.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[14], i618.remapX)
  i618.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[15], i618.remapY)
  i618.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[16], i618.remapZ)
  i618.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[17], i618.positionAmount)
  i618.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[18], i618.rotationAmount)
  i618.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[19], i618.sizeAmount)
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i620 = root || new pc.ParticleSystemInheritVelocity()
  var i621 = data
  i620.enabled = !!i621[0]
  i620.mode = i621[1]
  i620.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[2], i620.curve)
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i622 = root || new pc.ParticleSystemForceOverLifetime()
  var i623 = data
  i622.enabled = !!i623[0]
  i622.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[1], i622.x)
  i622.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[2], i622.y)
  i622.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[3], i622.z)
  i622.space = i623[4]
  i622.randomized = !!i623[5]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[1], i624.limit)
  i624.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[2], i624.limitX)
  i624.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[3], i624.limitY)
  i624.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[4], i624.limitZ)
  i624.dampen = i625[5]
  i624.separateAxes = !!i625[6]
  i624.space = i625[7]
  i624.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[8], i624.drag)
  i624.multiplyDragByParticleSize = !!i625[9]
  i624.multiplyDragByParticleVelocity = !!i625[10]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i627 = data
  i626.enabled = !!i627[0]
  request.r(i627[1], i627[2], 0, i626, 'sharedMaterial')
  var i629 = i627[3]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i626.sharedMaterials = i628
  i626.receiveShadows = !!i627[4]
  i626.shadowCastingMode = i627[5]
  i626.sortingLayerID = i627[6]
  i626.sortingOrder = i627[7]
  i626.lightmapIndex = i627[8]
  i626.lightmapSceneIndex = i627[9]
  i626.lightmapScaleOffset = new pc.Vec4( i627[10], i627[11], i627[12], i627[13] )
  i626.lightProbeUsage = i627[14]
  i626.reflectionProbeUsage = i627[15]
  request.r(i627[16], i627[17], 0, i626, 'mesh')
  i626.meshCount = i627[18]
  i626.activeVertexStreamsCount = i627[19]
  i626.alignment = i627[20]
  i626.renderMode = i627[21]
  i626.sortMode = i627[22]
  i626.lengthScale = i627[23]
  i626.velocityScale = i627[24]
  i626.cameraVelocityScale = i627[25]
  i626.normalDirection = i627[26]
  i626.sortingFudge = i627[27]
  i626.minParticleSize = i627[28]
  i626.maxParticleSize = i627[29]
  i626.pivot = new pc.Vec3( i627[30], i627[31], i627[32] )
  request.r(i627[33], i627[34], 0, i626, 'trailMaterial')
  return i626
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i630 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i631 = data
  i630.OnlyDeactivate = !!i631[0]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i633 = data
  i632.enabled = !!i633[0]
  i632.type = i633[1]
  i632.color = new pc.Color(i633[2], i633[3], i633[4], i633[5])
  i632.cullingMask = i633[6]
  i632.intensity = i633[7]
  i632.range = i633[8]
  i632.spotAngle = i633[9]
  i632.shadows = i633[10]
  i632.shadowNormalBias = i633[11]
  i632.shadowBias = i633[12]
  i632.shadowStrength = i633[13]
  i632.shadowResolution = i633[14]
  i632.lightmapBakeType = i633[15]
  i632.renderMode = i633[16]
  request.r(i633[17], i633[18], 0, i632, 'cookie')
  i632.cookieSize = i633[19]
  return i632
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i635 = data
  i634.m_Version = i635[0]
  i634.m_UsePipelineSettings = !!i635[1]
  i634.m_AdditionalLightsShadowResolutionTier = i635[2]
  i634.m_LightLayerMask = i635[3]
  i634.m_RenderingLayers = i635[4]
  i634.m_CustomShadowLayers = !!i635[5]
  i634.m_ShadowLayerMask = i635[6]
  i634.m_ShadowRenderingLayers = i635[7]
  i634.m_LightCookieSize = new pc.Vec2( i635[8], i635[9] )
  i634.m_LightCookieOffset = new pc.Vec2( i635[10], i635[11] )
  i634.m_SoftShadowQuality = i635[12]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i637 = data
  i636.enabled = !!i637[0]
  request.r(i637[1], i637[2], 0, i636, 'sharedMaterial')
  var i639 = i637[3]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i636.sharedMaterials = i638
  i636.receiveShadows = !!i637[4]
  i636.shadowCastingMode = i637[5]
  i636.sortingLayerID = i637[6]
  i636.sortingOrder = i637[7]
  i636.lightmapIndex = i637[8]
  i636.lightmapSceneIndex = i637[9]
  i636.lightmapScaleOffset = new pc.Vec4( i637[10], i637[11], i637[12], i637[13] )
  i636.lightProbeUsage = i637[14]
  i636.reflectionProbeUsage = i637[15]
  i636.color = new pc.Color(i637[16], i637[17], i637[18], i637[19])
  request.r(i637[20], i637[21], 0, i636, 'sprite')
  i636.flipX = !!i637[22]
  i636.flipY = !!i637[23]
  i636.drawMode = i637[24]
  i636.size = new pc.Vec2( i637[25], i637[26] )
  i636.tileMode = i637[27]
  i636.adaptiveModeThreshold = i637[28]
  i636.maskInteraction = i637[29]
  i636.spriteSortPoint = i637[30]
  return i636
}

Deserializers["TitnSprite"] = function (request, data, root) {
  var i640 = root || request.c( 'TitnSprite' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, '_tank')
  i640.offsetDistance = i641[2]
  i640.heightOffset = i641[3]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'clip')
  request.r(i643[2], i643[3], 0, i642, 'outputAudioMixerGroup')
  i642.playOnAwake = !!i643[4]
  i642.loop = !!i643[5]
  i642.time = i643[6]
  i642.volume = i643[7]
  i642.pitch = i643[8]
  i642.enabled = !!i643[9]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i645 = data
  i644.mass = i645[0]
  i644.drag = i645[1]
  i644.angularDrag = i645[2]
  i644.useGravity = !!i645[3]
  i644.isKinematic = !!i645[4]
  i644.constraints = i645[5]
  i644.maxAngularVelocity = i645[6]
  i644.collisionDetectionMode = i645[7]
  i644.interpolation = i645[8]
  return i644
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i646 = root || request.c( 'Howitzer.Projectile' )
  var i647 = data
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i649 = data
  i648.center = new pc.Vec3( i649[0], i649[1], i649[2] )
  i648.radius = i649[3]
  i648.height = i649[4]
  i648.direction = i649[5]
  i648.enabled = !!i649[6]
  i648.isTrigger = !!i649[7]
  request.r(i649[8], i649[9], 0, i648, 'material')
  return i648
}

Deserializers["MissPoint"] = function (request, data, root) {
  var i650 = root || request.c( 'MissPoint' )
  var i651 = data
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i653 = data
  i652.name = i653[0]
  i652.atlasId = i653[1]
  i652.mipmapCount = i653[2]
  i652.hdr = !!i653[3]
  i652.size = i653[4]
  i652.anisoLevel = i653[5]
  i652.filterMode = i653[6]
  var i655 = i653[7]
  var i654 = []
  for(var i = 0; i < i655.length; i += 4) {
    i654.push( UnityEngine.Rect.MinMaxRect(i655[i + 0], i655[i + 1], i655[i + 2], i655[i + 3]) );
  }
  i652.rects = i654
  i652.wrapU = i653[8]
  i652.wrapV = i653[9]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i659 = data
  i658.name = i659[0]
  i658.index = i659[1]
  i658.startup = !!i659[2]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i661 = data
  i660.enabled = !!i661[0]
  i660.aspect = i661[1]
  i660.orthographic = !!i661[2]
  i660.orthographicSize = i661[3]
  i660.backgroundColor = new pc.Color(i661[4], i661[5], i661[6], i661[7])
  i660.nearClipPlane = i661[8]
  i660.farClipPlane = i661[9]
  i660.fieldOfView = i661[10]
  i660.depth = i661[11]
  i660.clearFlags = i661[12]
  i660.cullingMask = i661[13]
  i660.rect = i661[14]
  request.r(i661[15], i661[16], 0, i660, 'targetTexture')
  i660.usePhysicalProperties = !!i661[17]
  i660.focalLength = i661[18]
  i660.sensorSize = new pc.Vec2( i661[19], i661[20] )
  i660.lensShift = new pc.Vec2( i661[21], i661[22] )
  i660.gateFit = i661[23]
  i660.commandBufferCount = i661[24]
  i660.cameraType = i661[25]
  return i660
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i662 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'joystick')
  i662.minYAngle = i663[2]
  i662.maxYAngle = i663[3]
  i662.rotationSpeed = i663[4]
  return i662
}

Deserializers["InteractiveArt"] = function (request, data, root) {
  var i664 = root || request.c( 'InteractiveArt' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, '_shopping')
  request.r(i665[2], i665[3], 0, i664, '_arm')
  request.r(i665[4], i665[5], 0, i664, '_arta1')
  request.r(i665[6], i665[7], 0, i664, '_arta2')
  request.r(i665[8], i665[9], 0, i664, '_particleSystem')
  request.r(i665[10], i665[11], 0, i664, 'secondCamera')
  i664.transitionSpeed = i665[12]
  request.r(i665[13], i665[14], 0, i664, '_audioSource')
  return i664
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i666 = root || request.c( 'Howitzer.LookAtReticle' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'reticle')
  request.r(i667[2], i667[3], 0, i666, 'mainCamera')
  i666.rotationSpeed = i667[4]
  i666.maxPitchAngle = i667[5]
  i666.minPitchAngle = i667[6]
  return i666
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i668 = root || request.c( 'FollowBullet' )
  var i669 = data
  i668._smoothSpeed = i669[0]
  i668._offset = new pc.Vec3( i669[1], i669[2], i669[3] )
  return i668
}

Deserializers["HandAnimation"] = function (request, data, root) {
  var i670 = root || request.c( 'HandAnimation' )
  var i671 = data
  i670.scaleSpeed = i671[0]
  i670.scaleAmount = i671[1]
  return i670
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i672 = root || request.c( 'UI.PlayerUIController' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'shootButton')
  request.r(i673[2], i673[3], 0, i672, 'zoomButton')
  request.r(i673[4], i673[5], 0, i672, '_cross')
  request.r(i673[6], i673[7], 0, i672, '_mark')
  request.r(i673[8], i673[9], 0, i672, '_tutorialHand2')
  return i672
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i674 = root || request.c( 'Howitzer.PlayerZoom' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'crosshair')
  request.r(i675[2], i675[3], 0, i674, 'mainCamera')
  request.r(i675[4], i675[5], 0, i674, 'zoomImage')
  var i677 = i675[6]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i674.objectsToDisable = i676
  i674.zoomFOV = i675[7]
  i674.normalFOV = i675[8]
  i674.zoomSpeed = i675[9]
  request.r(i675[10], i675[11], 0, i674, 'joystick')
  i674.rotationSpeed = i675[12]
  request.r(i675[13], i675[14], 0, i674, 'pumping')
  request.r(i675[15], i675[16], 0, i674, '_arm')
  request.r(i675[17], i675[18], 0, i674, '_tacticsFabric')
  request.r(i675[19], i675[20], 0, i674, '_titnSprite')
  return i674
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i680 = root || request.c( 'Howitzer.PlayerShooting' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'playerShootingCooldown')
  request.r(i681[2], i681[3], 0, i680, 'mainCamera')
  request.r(i681[4], i681[5], 0, i680, 'crosshairUI')
  request.r(i681[6], i681[7], 0, i680, 'muzzleFlash')
  request.r(i681[8], i681[9], 0, i680, 'explosionEffect')
  request.r(i681[10], i681[11], 0, i680, 'projectilePosition')
  request.r(i681[12], i681[13], 0, i680, 'prefabProjectile')
  i680.projectileSpeed = i681[14]
  i680.poolSize = i681[15]
  request.r(i681[16], i681[17], 0, i680, '_followBullet')
  request.r(i681[18], i681[19], 0, i680, '_managerCamers')
  request.r(i681[20], i681[21], 0, i680, '_timeController')
  request.r(i681[22], i681[23], 0, i680, '_playerUIController')
  request.r(i681[24], i681[25], 0, i680, '_tanksFabric')
  request.r(i681[26], i681[27], 0, i680, '_missPoint')
  request.r(i681[28], i681[29], 0, i680, '_pumping')
  request.r(i681[30], i681[31], 0, i680, '_playerZoom')
  request.r(i681[32], i681[33], 0, i680, '_aim')
  return i680
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i682 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'shootButton')
  request.r(i683[2], i683[3], 0, i682, 'cooldownText')
  request.r(i683[4], i683[5], 0, i682, 'cooldownImage')
  i682.cooldownTime = i683[6]
  return i682
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.Button' )
  var i685 = data
  i684.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i685[0], i684.m_OnClick)
  i684.m_Navigation = request.d('UnityEngine.UI.Navigation', i685[1], i684.m_Navigation)
  i684.m_Transition = i685[2]
  i684.m_Colors = request.d('UnityEngine.UI.ColorBlock', i685[3], i684.m_Colors)
  i684.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i685[4], i684.m_SpriteState)
  i684.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i685[5], i684.m_AnimationTriggers)
  i684.m_Interactable = !!i685[6]
  request.r(i685[7], i685[8], 0, i684, 'm_TargetGraphic')
  return i684
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i687 = data
  i686.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i687[0], i686.m_PersistentCalls)
  return i686
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i689 = data
  var i691 = i689[0]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i691.length; i += 1) {
    i690.add(request.d('UnityEngine.Events.PersistentCall', i691[i + 0]));
  }
  i688.m_Calls = i690
  return i688
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'm_Target')
  i694.m_TargetAssemblyTypeName = i695[2]
  i694.m_MethodName = i695[3]
  i694.m_Mode = i695[4]
  i694.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i695[5], i694.m_Arguments)
  i694.m_CallState = i695[6]
  return i694
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i697 = data
  i696.m_Mode = i697[0]
  i696.m_WrapAround = !!i697[1]
  request.r(i697[2], i697[3], 0, i696, 'm_SelectOnUp')
  request.r(i697[4], i697[5], 0, i696, 'm_SelectOnDown')
  request.r(i697[6], i697[7], 0, i696, 'm_SelectOnLeft')
  request.r(i697[8], i697[9], 0, i696, 'm_SelectOnRight')
  return i696
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i699 = data
  i698.m_NormalColor = new pc.Color(i699[0], i699[1], i699[2], i699[3])
  i698.m_HighlightedColor = new pc.Color(i699[4], i699[5], i699[6], i699[7])
  i698.m_PressedColor = new pc.Color(i699[8], i699[9], i699[10], i699[11])
  i698.m_SelectedColor = new pc.Color(i699[12], i699[13], i699[14], i699[15])
  i698.m_DisabledColor = new pc.Color(i699[16], i699[17], i699[18], i699[19])
  i698.m_ColorMultiplier = i699[20]
  i698.m_FadeDuration = i699[21]
  return i698
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_HighlightedSprite')
  request.r(i701[2], i701[3], 0, i700, 'm_PressedSprite')
  request.r(i701[4], i701[5], 0, i700, 'm_SelectedSprite')
  request.r(i701[6], i701[7], 0, i700, 'm_DisabledSprite')
  return i700
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i703 = data
  i702.m_NormalTrigger = i703[0]
  i702.m_HighlightedTrigger = i703[1]
  i702.m_PressedTrigger = i703[2]
  i702.m_SelectedTrigger = i703[3]
  i702.m_DisabledTrigger = i703[4]
  return i702
}

Deserializers["TutorialHand2"] = function (request, data, root) {
  var i704 = root || request.c( 'TutorialHand2' )
  var i705 = data
  i704.scaleSpeed = i705[0]
  i704.scaleAmount = i705[1]
  request.r(i705[2], i705[3], 0, i704, '_shootButton')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i707 = data
  i706.usedByComposite = !!i707[0]
  i706.autoTiling = !!i707[1]
  i706.size = new pc.Vec2( i707[2], i707[3] )
  i706.edgeRadius = i707[4]
  i706.enabled = !!i707[5]
  i706.isTrigger = !!i707[6]
  i706.usedByEffector = !!i707[7]
  i706.density = i707[8]
  i706.offset = new pc.Vec2( i707[9], i707[10] )
  request.r(i707[11], i707[12], 0, i706, 'material')
  return i706
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.Text' )
  var i709 = data
  i708.m_FontData = request.d('UnityEngine.UI.FontData', i709[0], i708.m_FontData)
  i708.m_Text = i709[1]
  request.r(i709[2], i709[3], 0, i708, 'm_Material')
  i708.m_Maskable = !!i709[4]
  i708.m_Color = new pc.Color(i709[5], i709[6], i709[7], i709[8])
  i708.m_RaycastTarget = !!i709[9]
  i708.m_RaycastPadding = new pc.Vec4( i709[10], i709[11], i709[12], i709[13] )
  return i708
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.FontData' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_Font')
  i710.m_FontSize = i711[2]
  i710.m_FontStyle = i711[3]
  i710.m_BestFit = !!i711[4]
  i710.m_MinSize = i711[5]
  i710.m_MaxSize = i711[6]
  i710.m_Alignment = i711[7]
  i710.m_AlignByGeometry = !!i711[8]
  i710.m_RichText = !!i711[9]
  i710.m_HorizontalOverflow = i711[10]
  i710.m_VerticalOverflow = i711[11]
  i710.m_LineSpacing = i711[12]
  return i710
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i712 = root || request.c( 'TutorialHand' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'handImage')
  i712.moveDistance = i713[2]
  i712.moveDuration = i713[3]
  request.r(i713[4], i713[5], 0, i712, '_tutorialHand2')
  request.r(i713[6], i713[7], 0, i712, '_shootButton')
  request.r(i713[8], i713[9], 0, i712, '_zoomButton')
  return i712
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i714 = root || request.c( 'UI.CrosshairMovement' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'joystick')
  request.r(i715[2], i715[3], 0, i714, 'crosshair')
  i714.moveSpeed = i715[4]
  request.r(i715[5], i715[6], 0, i714, 'canvasRect')
  return i714
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i716 = root || request.c( 'UI.EndCardAnimation' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'background')
  request.r(i717[2], i717[3], 0, i716, 'title')
  request.r(i717[4], i717[5], 0, i716, 'logoAndButton')
  request.r(i717[6], i717[7], 0, i716, 'titleText')
  i716.fadeDuration = i717[8]
  i716.scaleDuration = i717[9]
  i716.scaleEase = i717[10]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i719 = data
  i718.m_Alpha = i719[0]
  i718.m_Interactable = !!i719[1]
  i718.m_BlocksRaycasts = !!i719[2]
  i718.m_IgnoreParentGroups = !!i719[3]
  i718.enabled = !!i719[4]
  return i718
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i721 = data
  i720.m_AspectMode = i721[0]
  i720.m_AspectRatio = i721[1]
  return i720
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i722 = root || request.c( 'UI.ButtonPulse' )
  var i723 = data
  i722.scaleMultiplier = i723[0]
  i722.duration = i723[1]
  return i722
}

Deserializers["Cross"] = function (request, data, root) {
  var i724 = root || request.c( 'Cross' )
  var i725 = data
  return i724
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'm_FirstSelected')
  i726.m_sendNavigationEvents = !!i727[2]
  i726.m_DragThreshold = i727[3]
  return i726
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i729 = data
  i728.m_HorizontalAxis = i729[0]
  i728.m_VerticalAxis = i729[1]
  i728.m_SubmitButton = i729[2]
  i728.m_CancelButton = i729[3]
  i728.m_InputActionsPerSecond = i729[4]
  i728.m_RepeatDelay = i729[5]
  i728.m_ForceModuleActive = !!i729[6]
  i728.m_SendPointerHoverToParent = !!i729[7]
  return i728
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i730 = root || request.c( 'Bootstraps.Bootstrap' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'tanksFabric')
  request.r(i731[2], i731[3], 0, i730, 'scenarioGame')
  return i730
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i732 = root || request.c( 'Fabric.TanksFabric' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'tankPrefab')
  var i735 = i733[2]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 1, i734, '')
  }
  i732.spawnPoints = i734
  var i737 = i733[3]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i732.targets = i736
  return i732
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i742 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'endCard')
  request.r(i743[2], i743[3], 0, i742, '_audioSource')
  return i742
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i744 = root || request.c( 'UI.TankKillStatistics' )
  var i745 = data
  return i744
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i746 = root || request.c( 'ManagerCamers' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, '_plauerCamera')
  request.r(i747[2], i747[3], 0, i746, '_bulletCamera')
  request.r(i747[4], i747[5], 0, i746, '_timeController')
  request.r(i747[6], i747[7], 0, i746, '_playerZoom')
  return i746
}

Deserializers["TimeController"] = function (request, data, root) {
  var i748 = root || request.c( 'TimeController' )
  var i749 = data
  i748.slowMotionScale = i749[0]
  i748.slowMotionDuration = i749[1]
  i748.restoreSpeedDuration = i749[2]
  return i748
}

Deserializers["Pumping"] = function (request, data, root) {
  var i750 = root || request.c( 'Pumping' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'm_Camera')
  request.r(i751[2], i751[3], 0, i750, '_pumpingCamera')
  request.r(i751[4], i751[5], 0, i750, '_UI')
  request.r(i751[6], i751[7], 0, i750, '_arta1')
  request.r(i751[8], i751[9], 0, i750, '_arm')
  request.r(i751[10], i751[11], 0, i750, '_shopping')
  request.r(i751[12], i751[13], 0, i750, '_interactiveArt')
  request.r(i751[14], i751[15], 0, i750, '_tacticsFabric')
  request.r(i751[16], i751[17], 0, i750, '_button')
  request.r(i751[18], i751[19], 0, i750, '_titnSprite')
  request.r(i751[20], i751[21], 0, i750, '_arm2')
  return i750
}

Deserializers["Shopping"] = function (request, data, root) {
  var i752 = root || request.c( 'Shopping' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, '_improveButton')
  request.r(i753[2], i753[3], 0, i752, '_purchase')
  request.r(i753[4], i753[5], 0, i752, '_unavailableWeaponButton')
  request.r(i753[6], i753[7], 0, i752, '_shopping')
  request.r(i753[8], i753[9], 0, i752, '_shoppingPlayer')
  request.r(i753[10], i753[11], 0, i752, '_tanksFabric')
  request.r(i753[12], i753[13], 0, i752, '_interactiveArt')
  request.r(i753[14], i753[15], 0, i752, '_indicatorr')
  return i752
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'm_ObjectArgument')
  i754.m_ObjectArgumentAssemblyTypeName = i755[2]
  i754.m_IntArgument = i755[3]
  i754.m_FloatArgument = i755[4]
  i754.m_StringArgument = i755[5]
  i754.m_BoolArgument = !!i755[6]
  return i754
}

Deserializers["Indicatorr"] = function (request, data, root) {
  var i756 = root || request.c( 'Indicatorr' )
  var i757 = data
  i756.fadeDuration = i757[0]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i759 = data
  i758.ambientIntensity = i759[0]
  i758.reflectionIntensity = i759[1]
  i758.ambientMode = i759[2]
  i758.ambientLight = new pc.Color(i759[3], i759[4], i759[5], i759[6])
  i758.ambientSkyColor = new pc.Color(i759[7], i759[8], i759[9], i759[10])
  i758.ambientGroundColor = new pc.Color(i759[11], i759[12], i759[13], i759[14])
  i758.ambientEquatorColor = new pc.Color(i759[15], i759[16], i759[17], i759[18])
  i758.fogColor = new pc.Color(i759[19], i759[20], i759[21], i759[22])
  i758.fogEndDistance = i759[23]
  i758.fogStartDistance = i759[24]
  i758.fogDensity = i759[25]
  i758.fog = !!i759[26]
  request.r(i759[27], i759[28], 0, i758, 'skybox')
  i758.fogMode = i759[29]
  var i761 = i759[30]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i761[i + 0]) );
  }
  i758.lightmaps = i760
  i758.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i759[31], i758.lightProbes)
  i758.lightmapsMode = i759[32]
  i758.mixedBakeMode = i759[33]
  i758.environmentLightingMode = i759[34]
  i758.ambientProbe = new pc.SphericalHarmonicsL2(i759[35])
  i758.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i759[36])
  i758.useReferenceAmbientProbe = !!i759[37]
  request.r(i759[38], i759[39], 0, i758, 'customReflection')
  request.r(i759[40], i759[41], 0, i758, 'defaultReflection')
  i758.defaultReflectionMode = i759[42]
  i758.defaultReflectionResolution = i759[43]
  i758.sunLightObjectId = i759[44]
  i758.pixelLightCount = i759[45]
  i758.defaultReflectionHDR = !!i759[46]
  i758.hasLightDataAsset = !!i759[47]
  i758.hasManualGenerate = !!i759[48]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'lightmapColor')
  request.r(i765[2], i765[3], 0, i764, 'lightmapDirection')
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i766 = root || new UnityEngine.LightProbes()
  var i767 = data
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i775 = data
  var i777 = i775[0]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i777[i + 0]));
  }
  i774.ShaderCompilationErrors = i776
  i774.name = i775[1]
  i774.guid = i775[2]
  var i779 = i775[3]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i774.shaderDefinedKeywords = i778
  var i781 = i775[4]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i781[i + 0]) );
  }
  i774.passes = i780
  var i783 = i775[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i783[i + 0]) );
  }
  i774.usePasses = i782
  var i785 = i775[6]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i785[i + 0]) );
  }
  i774.defaultParameterValues = i784
  request.r(i775[7], i775[8], 0, i774, 'unityFallbackShader')
  i774.readDepth = !!i775[9]
  i774.isCreatedByShaderGraph = !!i775[10]
  i774.compiled = !!i775[11]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i789 = data
  i788.shaderName = i789[0]
  i788.errorMessage = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i794 = root || new pc.UnityShaderPass()
  var i795 = data
  i794.id = i795[0]
  i794.subShaderIndex = i795[1]
  i794.name = i795[2]
  i794.passType = i795[3]
  i794.grabPassTextureName = i795[4]
  i794.usePass = !!i795[5]
  i794.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[6], i794.zTest)
  i794.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[7], i794.zWrite)
  i794.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[8], i794.culling)
  i794.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i795[9], i794.blending)
  i794.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i795[10], i794.alphaBlending)
  i794.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[11], i794.colorWriteMask)
  i794.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[12], i794.offsetUnits)
  i794.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[13], i794.offsetFactor)
  i794.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[14], i794.stencilRef)
  i794.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[15], i794.stencilReadMask)
  i794.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[16], i794.stencilWriteMask)
  i794.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i795[17], i794.stencilOp)
  i794.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i795[18], i794.stencilOpFront)
  i794.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i795[19], i794.stencilOpBack)
  var i797 = i795[20]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i797[i + 0]) );
  }
  i794.tags = i796
  var i799 = i795[21]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( i799[i + 0] );
  }
  i794.passDefinedKeywords = i798
  var i801 = i795[22]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i801[i + 0]) );
  }
  i794.passDefinedKeywordGroups = i800
  var i803 = i795[23]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i803[i + 0]) );
  }
  i794.variants = i802
  var i805 = i795[24]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i805[i + 0]) );
  }
  i794.excludedVariants = i804
  i794.hasDepthReader = !!i795[25]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i807 = data
  i806.val = i807[0]
  i806.name = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i809 = data
  i808.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[0], i808.src)
  i808.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[1], i808.dst)
  i808.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[2], i808.op)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i811 = data
  i810.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[0], i810.pass)
  i810.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[1], i810.fail)
  i810.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[2], i810.zFail)
  i810.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[3], i810.comp)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i815 = data
  i814.name = i815[0]
  i814.value = i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i819 = data
  var i821 = i819[0]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i818.keywords = i820
  i818.hasDiscard = !!i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i825 = data
  i824.passId = i825[0]
  i824.subShaderIndex = i825[1]
  var i827 = i825[2]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i824.keywords = i826
  i824.vertexProgram = i825[3]
  i824.fragmentProgram = i825[4]
  i824.exportedForWebGl2 = !!i825[5]
  i824.readDepth = !!i825[6]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'shader')
  i830.pass = i831[2]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i835 = data
  i834.name = i835[0]
  i834.type = i835[1]
  i834.value = new pc.Vec4( i835[2], i835[3], i835[4], i835[5] )
  i834.textureValue = i835[6]
  i834.shaderPropertyFlag = i835[7]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i837 = data
  i836.name = i837[0]
  request.r(i837[1], i837[2], 0, i836, 'texture')
  i836.aabb = i837[3]
  i836.vertices = i837[4]
  i836.triangles = i837[5]
  i836.textureRect = UnityEngine.Rect.MinMaxRect(i837[6], i837[7], i837[8], i837[9])
  i836.packedRect = UnityEngine.Rect.MinMaxRect(i837[10], i837[11], i837[12], i837[13])
  i836.border = new pc.Vec4( i837[14], i837[15], i837[16], i837[17] )
  i836.transparency = i837[18]
  i836.bounds = i837[19]
  i836.pixelsPerUnit = i837[20]
  i836.textureWidth = i837[21]
  i836.textureHeight = i837[22]
  i836.nativeSize = new pc.Vec2( i837[23], i837[24] )
  i836.pivot = new pc.Vec2( i837[25], i837[26] )
  i836.textureRectOffset = new pc.Vec2( i837[27], i837[28] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i839 = data
  i838.name = i839[0]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i841 = data
  i840.name = i841[0]
  i840.ascent = i841[1]
  i840.originalLineHeight = i841[2]
  i840.fontSize = i841[3]
  var i843 = i841[4]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i843[i + 0]) );
  }
  i840.characterInfo = i842
  request.r(i841[5], i841[6], 0, i840, 'texture')
  i840.originalFontSize = i841[7]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i847 = data
  i846.index = i847[0]
  i846.advance = i847[1]
  i846.bearing = i847[2]
  i846.glyphWidth = i847[3]
  i846.glyphHeight = i847[4]
  i846.minX = i847[5]
  i846.maxX = i847[6]
  i846.minY = i847[7]
  i846.maxY = i847[8]
  i846.uvBottomLeftX = i847[9]
  i846.uvBottomLeftY = i847[10]
  i846.uvBottomRightX = i847[11]
  i846.uvBottomRightY = i847[12]
  i846.uvTopLeftX = i847[13]
  i846.uvTopLeftY = i847[14]
  i846.uvTopRightX = i847[15]
  i846.uvTopRightY = i847[16]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i851[i + 0]) );
  }
  i848.files = i850
  i848.componentToPrefabIds = i849[1]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i855 = data
  i854.path = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'unityObject')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i857 = data
  var i859 = i857[0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i859[i + 0]) );
  }
  i856.scriptsExecutionOrder = i858
  var i861 = i857[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i861[i + 0]) );
  }
  i856.sortingLayers = i860
  var i863 = i857[2]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i863[i + 0]) );
  }
  i856.cullingLayers = i862
  i856.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i857[3], i856.timeSettings)
  i856.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i857[4], i856.physicsSettings)
  i856.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i857[5], i856.physics2DSettings)
  i856.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i857[6], i856.qualitySettings)
  i856.enableRealtimeShadows = !!i857[7]
  i856.enableAutoInstancing = !!i857[8]
  i856.enableDynamicBatching = !!i857[9]
  i856.lightmapEncodingQuality = i857[10]
  i856.desiredColorSpace = i857[11]
  var i865 = i857[12]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i856.allTags = i864
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i869 = data
  i868.name = i869[0]
  i868.value = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i873 = data
  i872.id = i873[0]
  i872.name = i873[1]
  i872.value = i873[2]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i877 = data
  i876.id = i877[0]
  i876.name = i877[1]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i879 = data
  i878.fixedDeltaTime = i879[0]
  i878.maximumDeltaTime = i879[1]
  i878.timeScale = i879[2]
  i878.maximumParticleTimestep = i879[3]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i881 = data
  i880.gravity = new pc.Vec3( i881[0], i881[1], i881[2] )
  i880.defaultSolverIterations = i881[3]
  i880.bounceThreshold = i881[4]
  i880.autoSyncTransforms = !!i881[5]
  i880.autoSimulation = !!i881[6]
  var i883 = i881[7]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i883[i + 0]) );
  }
  i880.collisionMatrix = i882
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i887 = data
  i886.enabled = !!i887[0]
  i886.layerId = i887[1]
  i886.otherLayerId = i887[2]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'material')
  i888.gravity = new pc.Vec2( i889[2], i889[3] )
  i888.positionIterations = i889[4]
  i888.velocityIterations = i889[5]
  i888.velocityThreshold = i889[6]
  i888.maxLinearCorrection = i889[7]
  i888.maxAngularCorrection = i889[8]
  i888.maxTranslationSpeed = i889[9]
  i888.maxRotationSpeed = i889[10]
  i888.baumgarteScale = i889[11]
  i888.baumgarteTOIScale = i889[12]
  i888.timeToSleep = i889[13]
  i888.linearSleepTolerance = i889[14]
  i888.angularSleepTolerance = i889[15]
  i888.defaultContactOffset = i889[16]
  i888.autoSimulation = !!i889[17]
  i888.queriesHitTriggers = !!i889[18]
  i888.queriesStartInColliders = !!i889[19]
  i888.callbacksOnDisable = !!i889[20]
  i888.reuseCollisionCallbacks = !!i889[21]
  i888.autoSyncTransforms = !!i889[22]
  var i891 = i889[23]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i891[i + 0]) );
  }
  i888.collisionMatrix = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i895 = data
  i894.enabled = !!i895[0]
  i894.layerId = i895[1]
  i894.otherLayerId = i895[2]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i897 = data
  var i899 = i897[0]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i899[i + 0]) );
  }
  i896.qualityLevels = i898
  var i901 = i897[1]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i896.names = i900
  i896.shadows = i897[2]
  i896.anisotropicFiltering = i897[3]
  i896.antiAliasing = i897[4]
  i896.lodBias = i897[5]
  i896.shadowCascades = i897[6]
  i896.shadowDistance = i897[7]
  i896.shadowmaskMode = i897[8]
  i896.shadowProjection = i897[9]
  i896.shadowResolution = i897[10]
  i896.softParticles = !!i897[11]
  i896.softVegetation = !!i897[12]
  i896.activeColorSpace = i897[13]
  i896.desiredColorSpace = i897[14]
  i896.masterTextureLimit = i897[15]
  i896.maxQueuedFrames = i897[16]
  i896.particleRaycastBudget = i897[17]
  i896.pixelLightCount = i897[18]
  i896.realtimeReflectionProbes = !!i897[19]
  i896.shadowCascade2Split = i897[20]
  i896.shadowCascade4Split = new pc.Vec3( i897[21], i897[22], i897[23] )
  i896.streamingMipmapsActive = !!i897[24]
  i896.vSyncCount = i897[25]
  i896.asyncUploadBufferSize = i897[26]
  i896.asyncUploadTimeSlice = i897[27]
  i896.billboardsFaceCameraPosition = !!i897[28]
  i896.shadowNearPlaneOffset = i897[29]
  i896.streamingMipmapsMemoryBudget = i897[30]
  i896.maximumLODLevel = i897[31]
  i896.streamingMipmapsAddAllCameras = !!i897[32]
  i896.streamingMipmapsMaxLevelReduction = i897[33]
  i896.streamingMipmapsRenderersPerFrame = i897[34]
  i896.resolutionScalingFixedDPIFactor = i897[35]
  i896.streamingMipmapsMaxFileIORequests = i897[36]
  i896.currentQualityLevel = i897[37]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i907 = data
  i906.weight = i907[0]
  i906.vertices = i907[1]
  i906.normals = i907[2]
  i906.tangents = i907[3]
  return i906
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[78],"79":[35],"80":[29],"81":[29],"82":[29],"83":[29],"84":[29],"85":[29],"86":[29],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[88],"96":[88],"97":[88],"98":[88],"99":[88],"100":[88],"101":[35],"102":[13],"103":[104],"105":[104],"15":[0],"106":[20],"22":[20],"107":[23],"108":[11],"109":[23],"110":[0],"111":[35],"112":[35],"24":[23],"113":[35],"114":[115],"116":[0],"117":[0],"17":[15],"3":[1,0],"61":[0],"16":[15],"118":[0],"119":[0],"120":[0],"121":[0],"122":[0],"123":[0],"124":[0],"125":[0],"126":[0],"127":[1,0],"128":[0],"129":[0],"130":[0],"131":[0],"54":[1,0],"132":[0],"133":[63],"134":[63],"64":[63],"135":[63],"136":[35],"137":[35],"138":[115],"139":[115],"140":[35],"141":[142]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","VariableJoystick","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.BoxCollider","BehaviourAI.TankAI","ExclamationMark","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CFX_AutoDestructShuriken","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.SpriteRenderer","TitnSprite","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Rigidbody","Howitzer.Projectile","UnityEngine.CapsuleCollider","MissPoint","UnityEngine.LODGroup","UnityEngine.Cubemap","UnityEngine.Camera","UnityEngine.AudioListener","Howitzer.LookAtCrosshair","InteractiveArt","UnityEngine.GameObject","Howitzer.LookAtReticle","FollowBullet","HandAnimation","UI.PlayerUIController","UnityEngine.UI.Button","Cross","TutorialHand2","Howitzer.PlayerZoom","Pumping","Fabric.TanksFabric","Howitzer.PlayerShooting","Howitzer.PlayerShootingCooldown","ManagerCamers","TimeController","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","UnityEngine.Font","TutorialHand","UI.CrosshairMovement","UI.EndCardAnimation","UnityEngine.CanvasGroup","UnityEngine.UI.AspectRatioFitter","UI.ButtonPulse","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Bootstraps.Bootstrap","Bootstraps.ScenarioGame","UI.TankKillStatistics","Shopping","Indicatorr","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CFX_AutoStopLoopedEffect","CFX_LightIntensityFade","WFX_BulletHoleDecal","WFX_LightFlicker","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/12/2025 18:23:14";

Deserializers.lunaDaysRunning = "15.6";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1818";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3634";

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

Deserializers.buildID = "1077d5b8-d6b5-4562-bedd-bf5a399e2254";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

