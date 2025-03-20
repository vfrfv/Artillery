var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointSpring' )
  var i451 = data
  i450.spring = i451[0]
  i450.damper = i451[1]
  i450.targetPosition = i451[2]
  return i450
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointMotor' )
  var i453 = data
  i452.m_TargetVelocity = i453[0]
  i452.m_Force = i453[1]
  i452.m_FreeSpin = i453[2]
  return i452
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointLimits' )
  var i455 = data
  i454.m_Min = i455[0]
  i454.m_Max = i455[1]
  i454.m_Bounciness = i455[2]
  i454.m_BounceMinVelocity = i455[3]
  i454.m_ContactDistance = i455[4]
  i454.minBounce = i455[5]
  i454.maxBounce = i455[6]
  return i454
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointDrive' )
  var i457 = data
  i456.m_PositionSpring = i457[0]
  i456.m_PositionDamper = i457[1]
  i456.m_MaximumForce = i457[2]
  i456.m_UseAcceleration = i457[3]
  return i456
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i459 = data
  i458.m_Spring = i459[0]
  i458.m_Damper = i459[1]
  return i458
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i461 = data
  i460.m_Limit = i461[0]
  i460.m_Bounciness = i461[1]
  i460.m_ContactDistance = i461[2]
  return i460
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i463 = data
  i462.m_ExtremumSlip = i463[0]
  i462.m_ExtremumValue = i463[1]
  i462.m_AsymptoteSlip = i463[2]
  i462.m_AsymptoteValue = i463[3]
  i462.m_Stiffness = i463[4]
  return i462
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i465 = data
  i464.m_LowerAngle = i465[0]
  i464.m_UpperAngle = i465[1]
  return i464
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i467 = data
  i466.m_MotorSpeed = i467[0]
  i466.m_MaximumMotorTorque = i467[1]
  return i466
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i469 = data
  i468.m_DampingRatio = i469[0]
  i468.m_Frequency = i469[1]
  i468.m_Angle = i469[2]
  return i468
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i471 = data
  i470.m_LowerTranslation = i471[0]
  i470.m_UpperTranslation = i471[1]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i473 = data
  i472.pivot = new pc.Vec2( i473[0], i473[1] )
  i472.anchorMin = new pc.Vec2( i473[2], i473[3] )
  i472.anchorMax = new pc.Vec2( i473[4], i473[5] )
  i472.sizeDelta = new pc.Vec2( i473[6], i473[7] )
  i472.anchoredPosition3D = new pc.Vec3( i473[8], i473[9], i473[10] )
  i472.rotation = new pc.Quat(i473[11], i473[12], i473[13], i473[14])
  i472.scale = new pc.Vec3( i473[15], i473[16], i473[17] )
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i475 = data
  i474.cullTransparentMesh = !!i475[0]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i477 = data
  i476.name = i477[0]
  i476.tagId = i477[1]
  i476.enabled = !!i477[2]
  i476.isStatic = !!i477[3]
  i476.layer = i477[4]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i479 = data
  i478.name = i479[0]
  i478.width = i479[1]
  i478.height = i479[2]
  i478.mipmapCount = i479[3]
  i478.anisoLevel = i479[4]
  i478.filterMode = i479[5]
  i478.hdr = !!i479[6]
  i478.format = i479[7]
  i478.wrapMode = i479[8]
  i478.alphaIsTransparency = !!i479[9]
  i478.alphaSource = i479[10]
  i478.graphicsFormat = i479[11]
  i478.sRGBTexture = !!i479[12]
  i478.desiredColorSpace = i479[13]
  i478.wrapU = i479[14]
  i478.wrapV = i479[15]
  return i478
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.UI.Image' )
  var i481 = data
  request.r(i481[0], i481[1], 0, i480, 'm_Sprite')
  i480.m_Type = i481[2]
  i480.m_PreserveAspect = !!i481[3]
  i480.m_FillCenter = !!i481[4]
  i480.m_FillMethod = i481[5]
  i480.m_FillAmount = i481[6]
  i480.m_FillClockwise = !!i481[7]
  i480.m_FillOrigin = i481[8]
  i480.m_UseSpriteMesh = !!i481[9]
  i480.m_PixelsPerUnitMultiplier = i481[10]
  request.r(i481[11], i481[12], 0, i480, 'm_Material')
  i480.m_Maskable = !!i481[13]
  i480.m_Color = new pc.Color(i481[14], i481[15], i481[16], i481[17])
  i480.m_RaycastTarget = !!i481[18]
  i480.m_RaycastPadding = new pc.Vec4( i481[19], i481[20], i481[21], i481[22] )
  return i480
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i482 = root || request.c( 'VariableJoystick' )
  var i483 = data
  request.r(i483[0], i483[1], 0, i482, 'handle')
  i482.moveThreshold = i483[2]
  i482.joystickType = i483[3]
  request.r(i483[4], i483[5], 0, i482, 'background')
  i482.handleRange = i483[6]
  i482.deadZone = i483[7]
  i482.axisOptions = i483[8]
  i482.snapX = !!i483[9]
  i482.snapY = !!i483[10]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i485 = data
  i484.position = new pc.Vec3( i485[0], i485[1], i485[2] )
  i484.scale = new pc.Vec3( i485[3], i485[4], i485[5] )
  i484.rotation = new pc.Quat(i485[6], i485[7], i485[8], i485[9])
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i487 = data
  request.r(i487[0], i487[1], 0, i486, 'sharedMesh')
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i489 = data
  request.r(i489[0], i489[1], 0, i488, 'additionalVertexStreams')
  i488.enabled = !!i489[2]
  request.r(i489[3], i489[4], 0, i488, 'sharedMaterial')
  var i491 = i489[5]
  var i490 = []
  for(var i = 0; i < i491.length; i += 2) {
  request.r(i491[i + 0], i491[i + 1], 2, i490, '')
  }
  i488.sharedMaterials = i490
  i488.receiveShadows = !!i489[6]
  i488.shadowCastingMode = i489[7]
  i488.sortingLayerID = i489[8]
  i488.sortingOrder = i489[9]
  i488.lightmapIndex = i489[10]
  i488.lightmapSceneIndex = i489[11]
  i488.lightmapScaleOffset = new pc.Vec4( i489[12], i489[13], i489[14], i489[15] )
  i488.lightProbeUsage = i489[16]
  i488.reflectionProbeUsage = i489[17]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i495 = data
  i494.name = i495[0]
  i494.halfPrecision = !!i495[1]
  i494.useUInt32IndexFormat = !!i495[2]
  i494.vertexCount = i495[3]
  i494.aabb = i495[4]
  var i497 = i495[5]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( !!i497[i + 0] );
  }
  i494.streams = i496
  i494.vertices = i495[6]
  var i499 = i495[7]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i499[i + 0]) );
  }
  i494.subMeshes = i498
  var i501 = i495[8]
  var i500 = []
  for(var i = 0; i < i501.length; i += 16) {
    i500.push( new pc.Mat4().setData(i501[i + 0], i501[i + 1], i501[i + 2], i501[i + 3],  i501[i + 4], i501[i + 5], i501[i + 6], i501[i + 7],  i501[i + 8], i501[i + 9], i501[i + 10], i501[i + 11],  i501[i + 12], i501[i + 13], i501[i + 14], i501[i + 15]) );
  }
  i494.bindposes = i500
  var i503 = i495[9]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i503[i + 0]) );
  }
  i494.blendShapes = i502
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i509 = data
  i508.triangles = i509[0]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i515 = data
  i514.name = i515[0]
  var i517 = i515[1]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i517[i + 0]) );
  }
  i514.frames = i516
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i518 = root || new pc.UnityMaterial()
  var i519 = data
  i518.name = i519[0]
  request.r(i519[1], i519[2], 0, i518, 'shader')
  i518.renderQueue = i519[3]
  i518.enableInstancing = !!i519[4]
  var i521 = i519[5]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i521[i + 0]) );
  }
  i518.floatParameters = i520
  var i523 = i519[6]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i523[i + 0]) );
  }
  i518.colorParameters = i522
  var i525 = i519[7]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i525[i + 0]) );
  }
  i518.vectorParameters = i524
  var i527 = i519[8]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i527[i + 0]) );
  }
  i518.textureParameters = i526
  var i529 = i519[9]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i529[i + 0]) );
  }
  i518.materialFlags = i528
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i533 = data
  i532.name = i533[0]
  i532.value = i533[1]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i537 = data
  i536.name = i537[0]
  i536.value = new pc.Color(i537[1], i537[2], i537[3], i537[4])
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i541 = data
  i540.name = i541[0]
  i540.value = new pc.Vec4( i541[1], i541[2], i541[3], i541[4] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i545 = data
  i544.name = i545[0]
  request.r(i545[1], i545[2], 0, i544, 'value')
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i549 = data
  i548.name = i549[0]
  i548.enabled = !!i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i551 = data
  i550.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i551[0], i550.main)
  i550.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i551[1], i550.colorBySpeed)
  i550.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i551[2], i550.colorOverLifetime)
  i550.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i551[3], i550.emission)
  i550.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i551[4], i550.rotationBySpeed)
  i550.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i551[5], i550.rotationOverLifetime)
  i550.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i551[6], i550.shape)
  i550.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i551[7], i550.sizeBySpeed)
  i550.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i551[8], i550.sizeOverLifetime)
  i550.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i551[9], i550.textureSheetAnimation)
  i550.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i551[10], i550.velocityOverLifetime)
  i550.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i551[11], i550.noise)
  i550.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i551[12], i550.inheritVelocity)
  i550.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i551[13], i550.forceOverLifetime)
  i550.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i551[14], i550.limitVelocityOverLifetime)
  i550.useAutoRandomSeed = !!i551[15]
  i550.randomSeed = i551[16]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemMain()
  var i553 = data
  i552.duration = i553[0]
  i552.loop = !!i553[1]
  i552.prewarm = !!i553[2]
  i552.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[3], i552.startDelay)
  i552.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[4], i552.startLifetime)
  i552.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[5], i552.startSpeed)
  i552.startSize3D = !!i553[6]
  i552.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[7], i552.startSizeX)
  i552.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[8], i552.startSizeY)
  i552.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[9], i552.startSizeZ)
  i552.startRotation3D = !!i553[10]
  i552.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[11], i552.startRotationX)
  i552.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[12], i552.startRotationY)
  i552.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[13], i552.startRotationZ)
  i552.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i553[14], i552.startColor)
  i552.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[15], i552.gravityModifier)
  i552.simulationSpace = i553[16]
  request.r(i553[17], i553[18], 0, i552, 'customSimulationSpace')
  i552.simulationSpeed = i553[19]
  i552.useUnscaledTime = !!i553[20]
  i552.scalingMode = i553[21]
  i552.playOnAwake = !!i553[22]
  i552.maxParticles = i553[23]
  i552.emitterVelocityMode = i553[24]
  i552.stopAction = i553[25]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i554 = root || new pc.MinMaxCurve()
  var i555 = data
  i554.mode = i555[0]
  i554.curveMin = new pc.AnimationCurve( { keys_flow: i555[1] } )
  i554.curveMax = new pc.AnimationCurve( { keys_flow: i555[2] } )
  i554.curveMultiplier = i555[3]
  i554.constantMin = i555[4]
  i554.constantMax = i555[5]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i556 = root || new pc.MinMaxGradient()
  var i557 = data
  i556.mode = i557[0]
  i556.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i557[1], i556.gradientMin)
  i556.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i557[2], i556.gradientMax)
  i556.colorMin = new pc.Color(i557[3], i557[4], i557[5], i557[6])
  i556.colorMax = new pc.Color(i557[7], i557[8], i557[9], i557[10])
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i559 = data
  i558.mode = i559[0]
  var i561 = i559[1]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i561[i + 0]) );
  }
  i558.colorKeys = i560
  var i563 = i559[2]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i563[i + 0]) );
  }
  i558.alphaKeys = i562
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemColorBySpeed()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i565[1], i564.color)
  i564.range = new pc.Vec2( i565[2], i565[3] )
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i569 = data
  i568.color = new pc.Color(i569[0], i569[1], i569[2], i569[3])
  i568.time = i569[4]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i573 = data
  i572.alpha = i573[0]
  i572.time = i573[1]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemColorOverLifetime()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i575[1], i574.color)
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemEmitter()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[1], i576.rateOverTime)
  i576.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.rateOverDistance)
  var i579 = i577[3]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i579[i + 0]) );
  }
  i576.bursts = i578
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemBurst()
  var i583 = data
  i582.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[0], i582.count)
  i582.cycleCount = i583[1]
  i582.minCount = i583[2]
  i582.maxCount = i583[3]
  i582.repeatInterval = i583[4]
  i582.time = i583[5]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemRotationBySpeed()
  var i585 = data
  i584.enabled = !!i585[0]
  i584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[1], i584.x)
  i584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[2], i584.y)
  i584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[3], i584.z)
  i584.separateAxes = !!i585[4]
  i584.range = new pc.Vec2( i585[5], i585[6] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemRotationOverLifetime()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[1], i586.x)
  i586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[2], i586.y)
  i586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[3], i586.z)
  i586.separateAxes = !!i587[4]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemShape()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.shapeType = i589[1]
  i588.randomDirectionAmount = i589[2]
  i588.sphericalDirectionAmount = i589[3]
  i588.randomPositionAmount = i589[4]
  i588.alignToDirection = !!i589[5]
  i588.radius = i589[6]
  i588.radiusMode = i589[7]
  i588.radiusSpread = i589[8]
  i588.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[9], i588.radiusSpeed)
  i588.radiusThickness = i589[10]
  i588.angle = i589[11]
  i588.length = i589[12]
  i588.boxThickness = new pc.Vec3( i589[13], i589[14], i589[15] )
  i588.meshShapeType = i589[16]
  request.r(i589[17], i589[18], 0, i588, 'mesh')
  request.r(i589[19], i589[20], 0, i588, 'meshRenderer')
  request.r(i589[21], i589[22], 0, i588, 'skinnedMeshRenderer')
  i588.useMeshMaterialIndex = !!i589[23]
  i588.meshMaterialIndex = i589[24]
  i588.useMeshColors = !!i589[25]
  i588.normalOffset = i589[26]
  i588.arc = i589[27]
  i588.arcMode = i589[28]
  i588.arcSpread = i589[29]
  i588.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[30], i588.arcSpeed)
  i588.donutRadius = i589[31]
  i588.position = new pc.Vec3( i589[32], i589[33], i589[34] )
  i588.rotation = new pc.Vec3( i589[35], i589[36], i589[37] )
  i588.scale = new pc.Vec3( i589[38], i589[39], i589[40] )
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemSizeBySpeed()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[1], i590.x)
  i590.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.y)
  i590.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.z)
  i590.separateAxes = !!i591[4]
  i590.range = new pc.Vec2( i591[5], i591[6] )
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemSizeOverLifetime()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[1], i592.x)
  i592.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.y)
  i592.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[3], i592.z)
  i592.separateAxes = !!i593[4]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.mode = i595[1]
  i594.animation = i595[2]
  i594.numTilesX = i595[3]
  i594.numTilesY = i595[4]
  i594.useRandomRow = !!i595[5]
  i594.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[6], i594.frameOverTime)
  i594.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[7], i594.startFrame)
  i594.cycleCount = i595[8]
  i594.rowIndex = i595[9]
  i594.flipU = i595[10]
  i594.flipV = i595[11]
  i594.spriteCount = i595[12]
  var i597 = i595[13]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i594.sprites = i596
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i601 = data
  i600.enabled = !!i601[0]
  i600.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[1], i600.x)
  i600.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[2], i600.y)
  i600.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[3], i600.z)
  i600.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[4], i600.radial)
  i600.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[5], i600.speedModifier)
  i600.space = i601[6]
  i600.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[7], i600.orbitalX)
  i600.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[8], i600.orbitalY)
  i600.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[9], i600.orbitalZ)
  i600.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[10], i600.orbitalOffsetX)
  i600.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[11], i600.orbitalOffsetY)
  i600.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i601[12], i600.orbitalOffsetZ)
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemNoise()
  var i603 = data
  i602.enabled = !!i603[0]
  i602.separateAxes = !!i603[1]
  i602.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[2], i602.strengthX)
  i602.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[3], i602.strengthY)
  i602.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[4], i602.strengthZ)
  i602.frequency = i603[5]
  i602.damping = !!i603[6]
  i602.octaveCount = i603[7]
  i602.octaveMultiplier = i603[8]
  i602.octaveScale = i603[9]
  i602.quality = i603[10]
  i602.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[11], i602.scrollSpeed)
  i602.scrollSpeedMultiplier = i603[12]
  i602.remapEnabled = !!i603[13]
  i602.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[14], i602.remapX)
  i602.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[15], i602.remapY)
  i602.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[16], i602.remapZ)
  i602.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[17], i602.positionAmount)
  i602.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[18], i602.rotationAmount)
  i602.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[19], i602.sizeAmount)
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemInheritVelocity()
  var i605 = data
  i604.enabled = !!i605[0]
  i604.mode = i605[1]
  i604.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[2], i604.curve)
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemForceOverLifetime()
  var i607 = data
  i606.enabled = !!i607[0]
  i606.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[1], i606.x)
  i606.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[2], i606.y)
  i606.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[3], i606.z)
  i606.space = i607[4]
  i606.randomized = !!i607[5]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i608 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i609 = data
  i608.enabled = !!i609[0]
  i608.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[1], i608.limit)
  i608.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[2], i608.limitX)
  i608.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[3], i608.limitY)
  i608.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[4], i608.limitZ)
  i608.dampen = i609[5]
  i608.separateAxes = !!i609[6]
  i608.space = i609[7]
  i608.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[8], i608.drag)
  i608.multiplyDragByParticleSize = !!i609[9]
  i608.multiplyDragByParticleVelocity = !!i609[10]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i611 = data
  i610.enabled = !!i611[0]
  request.r(i611[1], i611[2], 0, i610, 'sharedMaterial')
  var i613 = i611[3]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 2, i612, '')
  }
  i610.sharedMaterials = i612
  i610.receiveShadows = !!i611[4]
  i610.shadowCastingMode = i611[5]
  i610.sortingLayerID = i611[6]
  i610.sortingOrder = i611[7]
  i610.lightmapIndex = i611[8]
  i610.lightmapSceneIndex = i611[9]
  i610.lightmapScaleOffset = new pc.Vec4( i611[10], i611[11], i611[12], i611[13] )
  i610.lightProbeUsage = i611[14]
  i610.reflectionProbeUsage = i611[15]
  request.r(i611[16], i611[17], 0, i610, 'mesh')
  i610.meshCount = i611[18]
  i610.activeVertexStreamsCount = i611[19]
  i610.alignment = i611[20]
  i610.renderMode = i611[21]
  i610.sortMode = i611[22]
  i610.lengthScale = i611[23]
  i610.velocityScale = i611[24]
  i610.cameraVelocityScale = i611[25]
  i610.normalDirection = i611[26]
  i610.sortingFudge = i611[27]
  i610.minParticleSize = i611[28]
  i610.maxParticleSize = i611[29]
  i610.pivot = new pc.Vec3( i611[30], i611[31], i611[32] )
  request.r(i611[33], i611[34], 0, i610, 'trailMaterial')
  return i610
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i614 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i615 = data
  i614.OnlyDeactivate = !!i615[0]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i617 = data
  i616.center = new pc.Vec3( i617[0], i617[1], i617[2] )
  i616.size = new pc.Vec3( i617[3], i617[4], i617[5] )
  i616.enabled = !!i617[6]
  i616.isTrigger = !!i617[7]
  request.r(i617[8], i617[9], 0, i616, 'material')
  return i616
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i618 = root || request.c( 'BehaviourAI.TankAI' )
  var i619 = data
  i618.stopDistance = i619[0]
  i618.rotationSpeed = i619[1]
  i618.moveSpeed = i619[2]
  request.r(i619[3], i619[4], 0, i618, '_exclamationMark')
  request.r(i619[5], i619[6], 0, i618, '_guidance')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i621 = data
  i620.enabled = !!i621[0]
  i620.planeDistance = i621[1]
  i620.referencePixelsPerUnit = i621[2]
  i620.isFallbackOverlay = !!i621[3]
  i620.renderMode = i621[4]
  i620.renderOrder = i621[5]
  i620.sortingLayerName = i621[6]
  i620.sortingOrder = i621[7]
  i620.scaleFactor = i621[8]
  request.r(i621[9], i621[10], 0, i620, 'worldCamera')
  i620.overrideSorting = !!i621[11]
  i620.pixelPerfect = !!i621[12]
  i620.targetDisplay = i621[13]
  i620.overridePixelPerfect = !!i621[14]
  return i620
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i623 = data
  i622.m_UiScaleMode = i623[0]
  i622.m_ReferencePixelsPerUnit = i623[1]
  i622.m_ScaleFactor = i623[2]
  i622.m_ReferenceResolution = new pc.Vec2( i623[3], i623[4] )
  i622.m_ScreenMatchMode = i623[5]
  i622.m_MatchWidthOrHeight = i623[6]
  i622.m_PhysicalUnit = i623[7]
  i622.m_FallbackScreenDPI = i623[8]
  i622.m_DefaultSpriteDPI = i623[9]
  i622.m_DynamicPixelsPerUnit = i623[10]
  i622.m_PresetInfoIsWorld = !!i623[11]
  return i622
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i625 = data
  i624.m_IgnoreReversedGraphics = !!i625[0]
  i624.m_BlockingObjects = i625[1]
  i624.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i625[2] )
  return i624
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i626 = root || request.c( 'ExclamationMark' )
  var i627 = data
  return i626
}

Deserializers["TitnSprite"] = function (request, data, root) {
  var i628 = root || request.c( 'TitnSprite' )
  var i629 = data
  i628.offsetDistance = i629[0]
  i628.heightOffset = i629[1]
  request.r(i629[2], i629[3], 0, i628, '_tank')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'clip')
  request.r(i631[2], i631[3], 0, i630, 'outputAudioMixerGroup')
  i630.playOnAwake = !!i631[4]
  i630.loop = !!i631[5]
  i630.time = i631[6]
  i630.volume = i631[7]
  i630.pitch = i631[8]
  i630.enabled = !!i631[9]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i633 = data
  i632.mass = i633[0]
  i632.drag = i633[1]
  i632.angularDrag = i633[2]
  i632.useGravity = !!i633[3]
  i632.isKinematic = !!i633[4]
  i632.constraints = i633[5]
  i632.maxAngularVelocity = i633[6]
  i632.collisionDetectionMode = i633[7]
  i632.interpolation = i633[8]
  return i632
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i634 = root || request.c( 'Howitzer.Projectile' )
  var i635 = data
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i637 = data
  i636.center = new pc.Vec3( i637[0], i637[1], i637[2] )
  i636.radius = i637[3]
  i636.height = i637[4]
  i636.direction = i637[5]
  i636.enabled = !!i637[6]
  i636.isTrigger = !!i637[7]
  request.r(i637[8], i637[9], 0, i636, 'material')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i639 = data
  i638.enabled = !!i639[0]
  request.r(i639[1], i639[2], 0, i638, 'sharedMaterial')
  var i641 = i639[3]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i638.sharedMaterials = i640
  i638.receiveShadows = !!i639[4]
  i638.shadowCastingMode = i639[5]
  i638.sortingLayerID = i639[6]
  i638.sortingOrder = i639[7]
  i638.lightmapIndex = i639[8]
  i638.lightmapSceneIndex = i639[9]
  i638.lightmapScaleOffset = new pc.Vec4( i639[10], i639[11], i639[12], i639[13] )
  i638.lightProbeUsage = i639[14]
  i638.reflectionProbeUsage = i639[15]
  i638.color = new pc.Color(i639[16], i639[17], i639[18], i639[19])
  request.r(i639[20], i639[21], 0, i638, 'sprite')
  i638.flipX = !!i639[22]
  i638.flipY = !!i639[23]
  i638.drawMode = i639[24]
  i638.size = new pc.Vec2( i639[25], i639[26] )
  i638.tileMode = i639[27]
  i638.adaptiveModeThreshold = i639[28]
  i638.maskInteraction = i639[29]
  i638.spriteSortPoint = i639[30]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i643 = data
  i642.enabled = !!i643[0]
  i642.isTrigger = !!i643[1]
  request.r(i643[2], i643[3], 0, i642, 'material')
  request.r(i643[4], i643[5], 0, i642, 'sharedMesh')
  i642.convex = !!i643[6]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i645 = data
  i644.name = i645[0]
  i644.atlasId = i645[1]
  i644.mipmapCount = i645[2]
  i644.hdr = !!i645[3]
  i644.size = i645[4]
  i644.anisoLevel = i645[5]
  i644.filterMode = i645[6]
  var i647 = i645[7]
  var i646 = []
  for(var i = 0; i < i647.length; i += 4) {
    i646.push( UnityEngine.Rect.MinMaxRect(i647[i + 0], i647[i + 1], i647[i + 2], i647[i + 3]) );
  }
  i644.rects = i646
  i644.wrapU = i645[8]
  i644.wrapV = i645[9]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i651 = data
  i650.name = i651[0]
  i650.index = i651[1]
  i650.startup = !!i651[2]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i653 = data
  i652.enabled = !!i653[0]
  i652.aspect = i653[1]
  i652.orthographic = !!i653[2]
  i652.orthographicSize = i653[3]
  i652.backgroundColor = new pc.Color(i653[4], i653[5], i653[6], i653[7])
  i652.nearClipPlane = i653[8]
  i652.farClipPlane = i653[9]
  i652.fieldOfView = i653[10]
  i652.depth = i653[11]
  i652.clearFlags = i653[12]
  i652.cullingMask = i653[13]
  i652.rect = i653[14]
  request.r(i653[15], i653[16], 0, i652, 'targetTexture')
  i652.usePhysicalProperties = !!i653[17]
  i652.focalLength = i653[18]
  i652.sensorSize = new pc.Vec2( i653[19], i653[20] )
  i652.lensShift = new pc.Vec2( i653[21], i653[22] )
  i652.gateFit = i653[23]
  i652.commandBufferCount = i653[24]
  i652.cameraType = i653[25]
  return i652
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i654 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'joystick')
  i654.minYAngle = i655[2]
  i654.maxYAngle = i655[3]
  i654.rotationSpeed = i655[4]
  return i654
}

Deserializers["InteractiveArt"] = function (request, data, root) {
  var i656 = root || request.c( 'InteractiveArt' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'secondCamera')
  i656.transitionSpeed = i657[2]
  request.r(i657[3], i657[4], 0, i656, '_shopping')
  request.r(i657[5], i657[6], 0, i656, '_arm')
  request.r(i657[7], i657[8], 0, i656, '_arta1')
  request.r(i657[9], i657[10], 0, i656, '_arta2')
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i659 = data
  i658.enabled = !!i659[0]
  i658.type = i659[1]
  i658.color = new pc.Color(i659[2], i659[3], i659[4], i659[5])
  i658.cullingMask = i659[6]
  i658.intensity = i659[7]
  i658.range = i659[8]
  i658.spotAngle = i659[9]
  i658.shadows = i659[10]
  i658.shadowNormalBias = i659[11]
  i658.shadowBias = i659[12]
  i658.shadowStrength = i659[13]
  i658.shadowResolution = i659[14]
  i658.lightmapBakeType = i659[15]
  i658.renderMode = i659[16]
  request.r(i659[17], i659[18], 0, i658, 'cookie')
  i658.cookieSize = i659[19]
  return i658
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i660 = root || request.c( 'Howitzer.LookAtReticle' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'reticle')
  request.r(i661[2], i661[3], 0, i660, 'mainCamera')
  i660.rotationSpeed = i661[4]
  i660.maxPitchAngle = i661[5]
  i660.minPitchAngle = i661[6]
  return i660
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i662 = root || request.c( 'FollowBullet' )
  var i663 = data
  i662._smoothSpeed = i663[0]
  i662._offset = new pc.Vec3( i663[1], i663[2], i663[3] )
  return i662
}

Deserializers["HandAnimation"] = function (request, data, root) {
  var i664 = root || request.c( 'HandAnimation' )
  var i665 = data
  i664.scaleSpeed = i665[0]
  i664.scaleAmount = i665[1]
  return i664
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i666 = root || request.c( 'UI.PlayerUIController' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'shootButton')
  request.r(i667[2], i667[3], 0, i666, 'zoomButton')
  request.r(i667[4], i667[5], 0, i666, '_cross')
  request.r(i667[6], i667[7], 0, i666, '_mark')
  request.r(i667[8], i667[9], 0, i666, '_tutorialHand2')
  return i666
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i668 = root || request.c( 'Howitzer.PlayerZoom' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'crosshair')
  request.r(i669[2], i669[3], 0, i668, 'mainCamera')
  request.r(i669[4], i669[5], 0, i668, 'zoomImage')
  var i671 = i669[6]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i668.objectsToDisable = i670
  i668.zoomFOV = i669[7]
  i668.normalFOV = i669[8]
  i668.zoomSpeed = i669[9]
  request.r(i669[10], i669[11], 0, i668, 'joystick')
  i668.rotationSpeed = i669[12]
  return i668
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i674 = root || request.c( 'Howitzer.PlayerShooting' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'playerShootingCooldown')
  request.r(i675[2], i675[3], 0, i674, 'mainCamera')
  request.r(i675[4], i675[5], 0, i674, 'crosshairUI')
  request.r(i675[6], i675[7], 0, i674, 'muzzleFlash')
  request.r(i675[8], i675[9], 0, i674, 'explosionEffect')
  request.r(i675[10], i675[11], 0, i674, 'projectilePosition')
  request.r(i675[12], i675[13], 0, i674, 'prefabProjectile')
  i674.projectileSpeed = i675[14]
  i674.poolSize = i675[15]
  request.r(i675[16], i675[17], 0, i674, '_followBullet')
  request.r(i675[18], i675[19], 0, i674, '_managerCamers')
  request.r(i675[20], i675[21], 0, i674, '_timeController')
  request.r(i675[22], i675[23], 0, i674, '_playerUIController')
  request.r(i675[24], i675[25], 0, i674, '_tanksFabric')
  request.r(i675[26], i675[27], 0, i674, '_missPoint')
  request.r(i675[28], i675[29], 0, i674, '_pumping')
  return i674
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i676 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'shootButton')
  request.r(i677[2], i677[3], 0, i676, 'cooldownText')
  request.r(i677[4], i677[5], 0, i676, 'cooldownImage')
  i676.cooldownTime = i677[6]
  return i676
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.Button' )
  var i679 = data
  i678.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i679[0], i678.m_OnClick)
  i678.m_Navigation = request.d('UnityEngine.UI.Navigation', i679[1], i678.m_Navigation)
  i678.m_Transition = i679[2]
  i678.m_Colors = request.d('UnityEngine.UI.ColorBlock', i679[3], i678.m_Colors)
  i678.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i679[4], i678.m_SpriteState)
  i678.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i679[5], i678.m_AnimationTriggers)
  i678.m_Interactable = !!i679[6]
  request.r(i679[7], i679[8], 0, i678, 'm_TargetGraphic')
  return i678
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i681 = data
  i680.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i681[0], i680.m_PersistentCalls)
  return i680
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i683 = data
  var i685 = i683[0]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i685.length; i += 1) {
    i684.add(request.d('UnityEngine.Events.PersistentCall', i685[i + 0]));
  }
  i682.m_Calls = i684
  return i682
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'm_Target')
  i688.m_TargetAssemblyTypeName = i689[2]
  i688.m_MethodName = i689[3]
  i688.m_Mode = i689[4]
  i688.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i689[5], i688.m_Arguments)
  i688.m_CallState = i689[6]
  return i688
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i691 = data
  i690.m_Mode = i691[0]
  i690.m_WrapAround = !!i691[1]
  request.r(i691[2], i691[3], 0, i690, 'm_SelectOnUp')
  request.r(i691[4], i691[5], 0, i690, 'm_SelectOnDown')
  request.r(i691[6], i691[7], 0, i690, 'm_SelectOnLeft')
  request.r(i691[8], i691[9], 0, i690, 'm_SelectOnRight')
  return i690
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i693 = data
  i692.m_NormalColor = new pc.Color(i693[0], i693[1], i693[2], i693[3])
  i692.m_HighlightedColor = new pc.Color(i693[4], i693[5], i693[6], i693[7])
  i692.m_PressedColor = new pc.Color(i693[8], i693[9], i693[10], i693[11])
  i692.m_SelectedColor = new pc.Color(i693[12], i693[13], i693[14], i693[15])
  i692.m_DisabledColor = new pc.Color(i693[16], i693[17], i693[18], i693[19])
  i692.m_ColorMultiplier = i693[20]
  i692.m_FadeDuration = i693[21]
  return i692
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'm_HighlightedSprite')
  request.r(i695[2], i695[3], 0, i694, 'm_PressedSprite')
  request.r(i695[4], i695[5], 0, i694, 'm_SelectedSprite')
  request.r(i695[6], i695[7], 0, i694, 'm_DisabledSprite')
  return i694
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i697 = data
  i696.m_NormalTrigger = i697[0]
  i696.m_HighlightedTrigger = i697[1]
  i696.m_PressedTrigger = i697[2]
  i696.m_SelectedTrigger = i697[3]
  i696.m_DisabledTrigger = i697[4]
  return i696
}

Deserializers["TutorialHand2"] = function (request, data, root) {
  var i698 = root || request.c( 'TutorialHand2' )
  var i699 = data
  i698.scaleSpeed = i699[0]
  i698.scaleAmount = i699[1]
  request.r(i699[2], i699[3], 0, i698, '_shootButton')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i701 = data
  i700.usedByComposite = !!i701[0]
  i700.autoTiling = !!i701[1]
  i700.size = new pc.Vec2( i701[2], i701[3] )
  i700.edgeRadius = i701[4]
  i700.enabled = !!i701[5]
  i700.isTrigger = !!i701[6]
  i700.usedByEffector = !!i701[7]
  i700.density = i701[8]
  i700.offset = new pc.Vec2( i701[9], i701[10] )
  request.r(i701[11], i701[12], 0, i700, 'material')
  return i700
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.Text' )
  var i703 = data
  i702.m_FontData = request.d('UnityEngine.UI.FontData', i703[0], i702.m_FontData)
  i702.m_Text = i703[1]
  request.r(i703[2], i703[3], 0, i702, 'm_Material')
  i702.m_Maskable = !!i703[4]
  i702.m_Color = new pc.Color(i703[5], i703[6], i703[7], i703[8])
  i702.m_RaycastTarget = !!i703[9]
  i702.m_RaycastPadding = new pc.Vec4( i703[10], i703[11], i703[12], i703[13] )
  return i702
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.FontData' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_Font')
  i704.m_FontSize = i705[2]
  i704.m_FontStyle = i705[3]
  i704.m_BestFit = !!i705[4]
  i704.m_MinSize = i705[5]
  i704.m_MaxSize = i705[6]
  i704.m_Alignment = i705[7]
  i704.m_AlignByGeometry = !!i705[8]
  i704.m_RichText = !!i705[9]
  i704.m_HorizontalOverflow = i705[10]
  i704.m_VerticalOverflow = i705[11]
  i704.m_LineSpacing = i705[12]
  return i704
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i706 = root || request.c( 'TutorialHand' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'handImage')
  i706.moveDistance = i707[2]
  i706.moveDuration = i707[3]
  request.r(i707[4], i707[5], 0, i706, '_tutorialHand2')
  request.r(i707[6], i707[7], 0, i706, '_shootButton')
  request.r(i707[8], i707[9], 0, i706, '_zoomButton')
  return i706
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i708 = root || request.c( 'UI.CrosshairMovement' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'joystick')
  request.r(i709[2], i709[3], 0, i708, 'crosshair')
  i708.moveSpeed = i709[4]
  request.r(i709[5], i709[6], 0, i708, 'canvasRect')
  return i708
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i710 = root || request.c( 'UI.EndCardAnimation' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'background')
  request.r(i711[2], i711[3], 0, i710, 'title')
  request.r(i711[4], i711[5], 0, i710, 'logoAndButton')
  request.r(i711[6], i711[7], 0, i710, 'titleText')
  i710.fadeDuration = i711[8]
  i710.scaleDuration = i711[9]
  i710.scaleEase = i711[10]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i713 = data
  i712.m_Alpha = i713[0]
  i712.m_Interactable = !!i713[1]
  i712.m_BlocksRaycasts = !!i713[2]
  i712.m_IgnoreParentGroups = !!i713[3]
  i712.enabled = !!i713[4]
  return i712
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i715 = data
  i714.m_AspectMode = i715[0]
  i714.m_AspectRatio = i715[1]
  return i714
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i716 = root || request.c( 'UI.ButtonPulse' )
  var i717 = data
  i716.scaleMultiplier = i717[0]
  i716.duration = i717[1]
  return i716
}

Deserializers["Cross"] = function (request, data, root) {
  var i718 = root || request.c( 'Cross' )
  var i719 = data
  return i718
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'm_FirstSelected')
  i720.m_sendNavigationEvents = !!i721[2]
  i720.m_DragThreshold = i721[3]
  return i720
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i723 = data
  i722.m_HorizontalAxis = i723[0]
  i722.m_VerticalAxis = i723[1]
  i722.m_SubmitButton = i723[2]
  i722.m_CancelButton = i723[3]
  i722.m_InputActionsPerSecond = i723[4]
  i722.m_RepeatDelay = i723[5]
  i722.m_ForceModuleActive = !!i723[6]
  i722.m_SendPointerHoverToParent = !!i723[7]
  return i722
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i724 = root || request.c( 'Bootstraps.Bootstrap' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'tanksFabric')
  request.r(i725[2], i725[3], 0, i724, 'scenarioGame')
  return i724
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i726 = root || request.c( 'Fabric.TanksFabric' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'tankPrefab')
  var i729 = i727[2]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 1, i728, '')
  }
  i726.spawnPoints = i728
  var i731 = i727[3]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i726.targets = i730
  return i726
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i736 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'endCard')
  return i736
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i738 = root || request.c( 'UI.TankKillStatistics' )
  var i739 = data
  return i738
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i740 = root || request.c( 'ManagerCamers' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, '_plauerCamera')
  request.r(i741[2], i741[3], 0, i740, '_bulletCamera')
  request.r(i741[4], i741[5], 0, i740, '_timeController')
  request.r(i741[6], i741[7], 0, i740, '_playerZoom')
  return i740
}

Deserializers["TimeController"] = function (request, data, root) {
  var i742 = root || request.c( 'TimeController' )
  var i743 = data
  i742.slowMotionScale = i743[0]
  i742.slowMotionDuration = i743[1]
  i742.restoreSpeedDuration = i743[2]
  return i742
}

Deserializers["Pumping"] = function (request, data, root) {
  var i744 = root || request.c( 'Pumping' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'm_Camera')
  request.r(i745[2], i745[3], 0, i744, '_pumpingCamera')
  request.r(i745[4], i745[5], 0, i744, '_UI')
  request.r(i745[6], i745[7], 0, i744, '_arta1')
  request.r(i745[8], i745[9], 0, i744, '_arm')
  request.r(i745[10], i745[11], 0, i744, '_shopping')
  request.r(i745[12], i745[13], 0, i744, '_interactiveArt')
  request.r(i745[14], i745[15], 0, i744, '_tacticsFabric')
  return i744
}

Deserializers["Shopping"] = function (request, data, root) {
  var i746 = root || request.c( 'Shopping' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, '_improveButton')
  request.r(i747[2], i747[3], 0, i746, '_purchase')
  request.r(i747[4], i747[5], 0, i746, '_shopping')
  request.r(i747[6], i747[7], 0, i746, '_shoppingPlayer')
  request.r(i747[8], i747[9], 0, i746, '_tanksFabric')
  request.r(i747[10], i747[11], 0, i746, '_interactiveArt')
  return i746
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_ObjectArgument')
  i748.m_ObjectArgumentAssemblyTypeName = i749[2]
  i748.m_IntArgument = i749[3]
  i748.m_FloatArgument = i749[4]
  i748.m_StringArgument = i749[5]
  i748.m_BoolArgument = !!i749[6]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i751 = data
  i750.ambientIntensity = i751[0]
  i750.reflectionIntensity = i751[1]
  i750.ambientMode = i751[2]
  i750.ambientLight = new pc.Color(i751[3], i751[4], i751[5], i751[6])
  i750.ambientSkyColor = new pc.Color(i751[7], i751[8], i751[9], i751[10])
  i750.ambientGroundColor = new pc.Color(i751[11], i751[12], i751[13], i751[14])
  i750.ambientEquatorColor = new pc.Color(i751[15], i751[16], i751[17], i751[18])
  i750.fogColor = new pc.Color(i751[19], i751[20], i751[21], i751[22])
  i750.fogEndDistance = i751[23]
  i750.fogStartDistance = i751[24]
  i750.fogDensity = i751[25]
  i750.fog = !!i751[26]
  request.r(i751[27], i751[28], 0, i750, 'skybox')
  i750.fogMode = i751[29]
  var i753 = i751[30]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i753[i + 0]) );
  }
  i750.lightmaps = i752
  i750.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i751[31], i750.lightProbes)
  i750.lightmapsMode = i751[32]
  i750.mixedBakeMode = i751[33]
  i750.environmentLightingMode = i751[34]
  i750.ambientProbe = new pc.SphericalHarmonicsL2(i751[35])
  i750.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i751[36])
  i750.useReferenceAmbientProbe = !!i751[37]
  request.r(i751[38], i751[39], 0, i750, 'customReflection')
  request.r(i751[40], i751[41], 0, i750, 'defaultReflection')
  i750.defaultReflectionMode = i751[42]
  i750.defaultReflectionResolution = i751[43]
  i750.sunLightObjectId = i751[44]
  i750.pixelLightCount = i751[45]
  i750.defaultReflectionHDR = !!i751[46]
  i750.hasLightDataAsset = !!i751[47]
  i750.hasManualGenerate = !!i751[48]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'lightmapColor')
  request.r(i757[2], i757[3], 0, i756, 'lightmapDirection')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i758 = root || new UnityEngine.LightProbes()
  var i759 = data
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i767 = data
  var i769 = i767[0]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i769[i + 0]));
  }
  i766.ShaderCompilationErrors = i768
  i766.name = i767[1]
  i766.guid = i767[2]
  var i771 = i767[3]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i766.shaderDefinedKeywords = i770
  var i773 = i767[4]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i773[i + 0]) );
  }
  i766.passes = i772
  var i775 = i767[5]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i775[i + 0]) );
  }
  i766.usePasses = i774
  var i777 = i767[6]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i777[i + 0]) );
  }
  i766.defaultParameterValues = i776
  request.r(i767[7], i767[8], 0, i766, 'unityFallbackShader')
  i766.readDepth = !!i767[9]
  i766.isCreatedByShaderGraph = !!i767[10]
  i766.compiled = !!i767[11]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i781 = data
  i780.shaderName = i781[0]
  i780.errorMessage = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i786 = root || new pc.UnityShaderPass()
  var i787 = data
  i786.id = i787[0]
  i786.subShaderIndex = i787[1]
  i786.name = i787[2]
  i786.passType = i787[3]
  i786.grabPassTextureName = i787[4]
  i786.usePass = !!i787[5]
  i786.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[6], i786.zTest)
  i786.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[7], i786.zWrite)
  i786.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[8], i786.culling)
  i786.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i787[9], i786.blending)
  i786.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i787[10], i786.alphaBlending)
  i786.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[11], i786.colorWriteMask)
  i786.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[12], i786.offsetUnits)
  i786.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[13], i786.offsetFactor)
  i786.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[14], i786.stencilRef)
  i786.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[15], i786.stencilReadMask)
  i786.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[16], i786.stencilWriteMask)
  i786.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i787[17], i786.stencilOp)
  i786.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i787[18], i786.stencilOpFront)
  i786.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i787[19], i786.stencilOpBack)
  var i789 = i787[20]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i789[i + 0]) );
  }
  i786.tags = i788
  var i791 = i787[21]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( i791[i + 0] );
  }
  i786.passDefinedKeywords = i790
  var i793 = i787[22]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i793[i + 0]) );
  }
  i786.passDefinedKeywordGroups = i792
  var i795 = i787[23]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i795[i + 0]) );
  }
  i786.variants = i794
  var i797 = i787[24]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i797[i + 0]) );
  }
  i786.excludedVariants = i796
  i786.hasDepthReader = !!i787[25]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i799 = data
  i798.val = i799[0]
  i798.name = i799[1]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i801 = data
  i800.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[0], i800.src)
  i800.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[1], i800.dst)
  i800.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[2], i800.op)
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i803 = data
  i802.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[0], i802.pass)
  i802.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[1], i802.fail)
  i802.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[2], i802.zFail)
  i802.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[3], i802.comp)
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i807 = data
  i806.name = i807[0]
  i806.value = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i811 = data
  var i813 = i811[0]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i810.keywords = i812
  i810.hasDiscard = !!i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i817 = data
  i816.passId = i817[0]
  i816.subShaderIndex = i817[1]
  var i819 = i817[2]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i816.keywords = i818
  i816.vertexProgram = i817[3]
  i816.fragmentProgram = i817[4]
  i816.exportedForWebGl2 = !!i817[5]
  i816.readDepth = !!i817[6]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'shader')
  i822.pass = i823[2]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i827 = data
  i826.name = i827[0]
  i826.type = i827[1]
  i826.value = new pc.Vec4( i827[2], i827[3], i827[4], i827[5] )
  i826.textureValue = i827[6]
  i826.shaderPropertyFlag = i827[7]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i829 = data
  i828.name = i829[0]
  request.r(i829[1], i829[2], 0, i828, 'texture')
  i828.aabb = i829[3]
  i828.vertices = i829[4]
  i828.triangles = i829[5]
  i828.textureRect = UnityEngine.Rect.MinMaxRect(i829[6], i829[7], i829[8], i829[9])
  i828.packedRect = UnityEngine.Rect.MinMaxRect(i829[10], i829[11], i829[12], i829[13])
  i828.border = new pc.Vec4( i829[14], i829[15], i829[16], i829[17] )
  i828.transparency = i829[18]
  i828.bounds = i829[19]
  i828.pixelsPerUnit = i829[20]
  i828.textureWidth = i829[21]
  i828.textureHeight = i829[22]
  i828.nativeSize = new pc.Vec2( i829[23], i829[24] )
  i828.pivot = new pc.Vec2( i829[25], i829[26] )
  i828.textureRectOffset = new pc.Vec2( i829[27], i829[28] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i831 = data
  i830.name = i831[0]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i833 = data
  i832.name = i833[0]
  i832.ascent = i833[1]
  i832.originalLineHeight = i833[2]
  i832.fontSize = i833[3]
  var i835 = i833[4]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i835[i + 0]) );
  }
  i832.characterInfo = i834
  request.r(i833[5], i833[6], 0, i832, 'texture')
  i832.originalFontSize = i833[7]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i839 = data
  i838.index = i839[0]
  i838.advance = i839[1]
  i838.bearing = i839[2]
  i838.glyphWidth = i839[3]
  i838.glyphHeight = i839[4]
  i838.minX = i839[5]
  i838.maxX = i839[6]
  i838.minY = i839[7]
  i838.maxY = i839[8]
  i838.uvBottomLeftX = i839[9]
  i838.uvBottomLeftY = i839[10]
  i838.uvBottomRightX = i839[11]
  i838.uvBottomRightY = i839[12]
  i838.uvTopLeftX = i839[13]
  i838.uvTopLeftY = i839[14]
  i838.uvTopRightX = i839[15]
  i838.uvTopRightY = i839[16]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i841 = data
  var i843 = i841[0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i843[i + 0]) );
  }
  i840.files = i842
  i840.componentToPrefabIds = i841[1]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i847 = data
  i846.path = i847[0]
  request.r(i847[1], i847[2], 0, i846, 'unityObject')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i851[i + 0]) );
  }
  i848.scriptsExecutionOrder = i850
  var i853 = i849[1]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i853[i + 0]) );
  }
  i848.sortingLayers = i852
  var i855 = i849[2]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i855[i + 0]) );
  }
  i848.cullingLayers = i854
  i848.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i849[3], i848.timeSettings)
  i848.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i849[4], i848.physicsSettings)
  i848.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i849[5], i848.physics2DSettings)
  i848.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i849[6], i848.qualitySettings)
  i848.enableRealtimeShadows = !!i849[7]
  i848.enableAutoInstancing = !!i849[8]
  i848.enableDynamicBatching = !!i849[9]
  i848.lightmapEncodingQuality = i849[10]
  i848.desiredColorSpace = i849[11]
  var i857 = i849[12]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i848.allTags = i856
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i861 = data
  i860.name = i861[0]
  i860.value = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i865 = data
  i864.id = i865[0]
  i864.name = i865[1]
  i864.value = i865[2]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i869 = data
  i868.id = i869[0]
  i868.name = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i871 = data
  i870.fixedDeltaTime = i871[0]
  i870.maximumDeltaTime = i871[1]
  i870.timeScale = i871[2]
  i870.maximumParticleTimestep = i871[3]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i873 = data
  i872.gravity = new pc.Vec3( i873[0], i873[1], i873[2] )
  i872.defaultSolverIterations = i873[3]
  i872.bounceThreshold = i873[4]
  i872.autoSyncTransforms = !!i873[5]
  i872.autoSimulation = !!i873[6]
  var i875 = i873[7]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i875[i + 0]) );
  }
  i872.collisionMatrix = i874
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i879 = data
  i878.enabled = !!i879[0]
  i878.layerId = i879[1]
  i878.otherLayerId = i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'material')
  i880.gravity = new pc.Vec2( i881[2], i881[3] )
  i880.positionIterations = i881[4]
  i880.velocityIterations = i881[5]
  i880.velocityThreshold = i881[6]
  i880.maxLinearCorrection = i881[7]
  i880.maxAngularCorrection = i881[8]
  i880.maxTranslationSpeed = i881[9]
  i880.maxRotationSpeed = i881[10]
  i880.baumgarteScale = i881[11]
  i880.baumgarteTOIScale = i881[12]
  i880.timeToSleep = i881[13]
  i880.linearSleepTolerance = i881[14]
  i880.angularSleepTolerance = i881[15]
  i880.defaultContactOffset = i881[16]
  i880.autoSimulation = !!i881[17]
  i880.queriesHitTriggers = !!i881[18]
  i880.queriesStartInColliders = !!i881[19]
  i880.callbacksOnDisable = !!i881[20]
  i880.reuseCollisionCallbacks = !!i881[21]
  i880.autoSyncTransforms = !!i881[22]
  var i883 = i881[23]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i883[i + 0]) );
  }
  i880.collisionMatrix = i882
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i887 = data
  i886.enabled = !!i887[0]
  i886.layerId = i887[1]
  i886.otherLayerId = i887[2]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i889 = data
  var i891 = i889[0]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i891[i + 0]) );
  }
  i888.qualityLevels = i890
  var i893 = i889[1]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( i893[i + 0] );
  }
  i888.names = i892
  i888.shadows = i889[2]
  i888.anisotropicFiltering = i889[3]
  i888.antiAliasing = i889[4]
  i888.lodBias = i889[5]
  i888.shadowCascades = i889[6]
  i888.shadowDistance = i889[7]
  i888.shadowmaskMode = i889[8]
  i888.shadowProjection = i889[9]
  i888.shadowResolution = i889[10]
  i888.softParticles = !!i889[11]
  i888.softVegetation = !!i889[12]
  i888.activeColorSpace = i889[13]
  i888.desiredColorSpace = i889[14]
  i888.masterTextureLimit = i889[15]
  i888.maxQueuedFrames = i889[16]
  i888.particleRaycastBudget = i889[17]
  i888.pixelLightCount = i889[18]
  i888.realtimeReflectionProbes = !!i889[19]
  i888.shadowCascade2Split = i889[20]
  i888.shadowCascade4Split = new pc.Vec3( i889[21], i889[22], i889[23] )
  i888.streamingMipmapsActive = !!i889[24]
  i888.vSyncCount = i889[25]
  i888.asyncUploadBufferSize = i889[26]
  i888.asyncUploadTimeSlice = i889[27]
  i888.billboardsFaceCameraPosition = !!i889[28]
  i888.shadowNearPlaneOffset = i889[29]
  i888.streamingMipmapsMemoryBudget = i889[30]
  i888.maximumLODLevel = i889[31]
  i888.streamingMipmapsAddAllCameras = !!i889[32]
  i888.streamingMipmapsMaxLevelReduction = i889[33]
  i888.streamingMipmapsRenderersPerFrame = i889[34]
  i888.resolutionScalingFixedDPIFactor = i889[35]
  i888.streamingMipmapsMaxFileIORequests = i889[36]
  i888.currentQualityLevel = i889[37]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i899 = data
  i898.weight = i899[0]
  i898.vertices = i899[1]
  i898.normals = i899[2]
  i898.tangents = i899[3]
  return i898
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[76],"77":[34],"78":[27],"79":[27],"80":[27],"81":[27],"82":[27],"83":[27],"84":[27],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[34],"100":[10],"101":[102],"103":[102],"21":[0],"104":[14],"16":[14],"105":[38],"106":[8],"107":[38],"108":[0],"109":[34],"110":[34],"111":[38],"112":[34],"113":[114],"115":[0],"116":[0],"23":[21],"3":[1,0],"60":[0],"22":[21],"117":[0],"118":[0],"119":[0],"120":[0],"121":[0],"122":[0],"123":[0],"124":[0],"125":[0],"126":[1,0],"127":[0],"128":[0],"129":[0],"130":[0],"53":[1,0],"131":[0],"132":[62],"133":[62],"63":[62],"134":[62],"135":[34],"136":[34],"137":[114],"138":[114],"139":[34],"140":[141]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","VariableJoystick","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CFX_AutoDestructShuriken","UnityEngine.BoxCollider","BehaviourAI.TankAI","ExclamationMark","UnityEngine.GameObject","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TitnSprite","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Rigidbody","Howitzer.Projectile","UnityEngine.CapsuleCollider","UnityEngine.LODGroup","UnityEngine.SpriteRenderer","UnityEngine.MeshCollider","UnityEngine.Cubemap","UnityEngine.Camera","UnityEngine.AudioListener","Howitzer.LookAtCrosshair","InteractiveArt","UnityEngine.Light","Howitzer.LookAtReticle","FollowBullet","HandAnimation","UI.PlayerUIController","UnityEngine.UI.Button","Cross","TutorialHand2","Howitzer.PlayerZoom","Howitzer.PlayerShooting","Howitzer.PlayerShootingCooldown","ManagerCamers","TimeController","Fabric.TanksFabric","Pumping","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","UnityEngine.Font","TutorialHand","UI.CrosshairMovement","UI.EndCardAnimation","UnityEngine.CanvasGroup","UnityEngine.UI.AspectRatioFitter","UI.ButtonPulse","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Bootstraps.Bootstrap","Bootstraps.ScenarioGame","UI.TankKillStatistics","Shopping","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CFX_AutoStopLoopedEffect","CFX_LightIntensityFade","WFX_BulletHoleDecal","WFX_LightFlicker","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/12/2025 18:23:14";

Deserializers.lunaDaysRunning = "7.8";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "vfrfv";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1806";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3600";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, mecanim-wasm";

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

Deserializers.buildID = "142676f7-0b68-40b1-974e-cb45d1622a69";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

