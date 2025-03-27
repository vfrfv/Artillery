var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointSpring' )
  var i453 = data
  i452.spring = i453[0]
  i452.damper = i453[1]
  i452.targetPosition = i453[2]
  return i452
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointMotor' )
  var i455 = data
  i454.m_TargetVelocity = i455[0]
  i454.m_Force = i455[1]
  i454.m_FreeSpin = i455[2]
  return i454
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointLimits' )
  var i457 = data
  i456.m_Min = i457[0]
  i456.m_Max = i457[1]
  i456.m_Bounciness = i457[2]
  i456.m_BounceMinVelocity = i457[3]
  i456.m_ContactDistance = i457[4]
  i456.minBounce = i457[5]
  i456.maxBounce = i457[6]
  return i456
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointDrive' )
  var i459 = data
  i458.m_PositionSpring = i459[0]
  i458.m_PositionDamper = i459[1]
  i458.m_MaximumForce = i459[2]
  i458.m_UseAcceleration = i459[3]
  return i458
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i461 = data
  i460.m_Spring = i461[0]
  i460.m_Damper = i461[1]
  return i460
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i463 = data
  i462.m_Limit = i463[0]
  i462.m_Bounciness = i463[1]
  i462.m_ContactDistance = i463[2]
  return i462
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i465 = data
  i464.m_ExtremumSlip = i465[0]
  i464.m_ExtremumValue = i465[1]
  i464.m_AsymptoteSlip = i465[2]
  i464.m_AsymptoteValue = i465[3]
  i464.m_Stiffness = i465[4]
  return i464
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i467 = data
  i466.m_LowerAngle = i467[0]
  i466.m_UpperAngle = i467[1]
  return i466
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i469 = data
  i468.m_MotorSpeed = i469[0]
  i468.m_MaximumMotorTorque = i469[1]
  return i468
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i471 = data
  i470.m_DampingRatio = i471[0]
  i470.m_Frequency = i471[1]
  i470.m_Angle = i471[2]
  return i470
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i473 = data
  i472.m_LowerTranslation = i473[0]
  i472.m_UpperTranslation = i473[1]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i475 = data
  i474.pivot = new pc.Vec2( i475[0], i475[1] )
  i474.anchorMin = new pc.Vec2( i475[2], i475[3] )
  i474.anchorMax = new pc.Vec2( i475[4], i475[5] )
  i474.sizeDelta = new pc.Vec2( i475[6], i475[7] )
  i474.anchoredPosition3D = new pc.Vec3( i475[8], i475[9], i475[10] )
  i474.rotation = new pc.Quat(i475[11], i475[12], i475[13], i475[14])
  i474.scale = new pc.Vec3( i475[15], i475[16], i475[17] )
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i477 = data
  i476.cullTransparentMesh = !!i477[0]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i479 = data
  i478.name = i479[0]
  i478.tagId = i479[1]
  i478.enabled = !!i479[2]
  i478.isStatic = !!i479[3]
  i478.layer = i479[4]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i481 = data
  i480.name = i481[0]
  i480.width = i481[1]
  i480.height = i481[2]
  i480.mipmapCount = i481[3]
  i480.anisoLevel = i481[4]
  i480.filterMode = i481[5]
  i480.hdr = !!i481[6]
  i480.format = i481[7]
  i480.wrapMode = i481[8]
  i480.alphaIsTransparency = !!i481[9]
  i480.alphaSource = i481[10]
  i480.graphicsFormat = i481[11]
  i480.sRGBTexture = !!i481[12]
  i480.desiredColorSpace = i481[13]
  i480.wrapU = i481[14]
  i480.wrapV = i481[15]
  return i480
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.UI.Image' )
  var i483 = data
  request.r(i483[0], i483[1], 0, i482, 'm_Sprite')
  i482.m_Type = i483[2]
  i482.m_PreserveAspect = !!i483[3]
  i482.m_FillCenter = !!i483[4]
  i482.m_FillMethod = i483[5]
  i482.m_FillAmount = i483[6]
  i482.m_FillClockwise = !!i483[7]
  i482.m_FillOrigin = i483[8]
  i482.m_UseSpriteMesh = !!i483[9]
  i482.m_PixelsPerUnitMultiplier = i483[10]
  request.r(i483[11], i483[12], 0, i482, 'm_Material')
  i482.m_Maskable = !!i483[13]
  i482.m_Color = new pc.Color(i483[14], i483[15], i483[16], i483[17])
  i482.m_RaycastTarget = !!i483[18]
  i482.m_RaycastPadding = new pc.Vec4( i483[19], i483[20], i483[21], i483[22] )
  return i482
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i484 = root || request.c( 'VariableJoystick' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'handle')
  i484.moveThreshold = i485[2]
  i484.joystickType = i485[3]
  request.r(i485[4], i485[5], 0, i484, 'background')
  i484.handleRange = i485[6]
  i484.deadZone = i485[7]
  i484.axisOptions = i485[8]
  i484.snapX = !!i485[9]
  i484.snapY = !!i485[10]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i487 = data
  i486.position = new pc.Vec3( i487[0], i487[1], i487[2] )
  i486.scale = new pc.Vec3( i487[3], i487[4], i487[5] )
  i486.rotation = new pc.Quat(i487[6], i487[7], i487[8], i487[9])
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i489 = data
  request.r(i489[0], i489[1], 0, i488, 'sharedMesh')
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'additionalVertexStreams')
  i490.enabled = !!i491[2]
  request.r(i491[3], i491[4], 0, i490, 'sharedMaterial')
  var i493 = i491[5]
  var i492 = []
  for(var i = 0; i < i493.length; i += 2) {
  request.r(i493[i + 0], i493[i + 1], 2, i492, '')
  }
  i490.sharedMaterials = i492
  i490.receiveShadows = !!i491[6]
  i490.shadowCastingMode = i491[7]
  i490.sortingLayerID = i491[8]
  i490.sortingOrder = i491[9]
  i490.lightmapIndex = i491[10]
  i490.lightmapSceneIndex = i491[11]
  i490.lightmapScaleOffset = new pc.Vec4( i491[12], i491[13], i491[14], i491[15] )
  i490.lightProbeUsage = i491[16]
  i490.reflectionProbeUsage = i491[17]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i497 = data
  i496.name = i497[0]
  i496.halfPrecision = !!i497[1]
  i496.useUInt32IndexFormat = !!i497[2]
  i496.vertexCount = i497[3]
  i496.aabb = i497[4]
  var i499 = i497[5]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( !!i499[i + 0] );
  }
  i496.streams = i498
  i496.vertices = i497[6]
  var i501 = i497[7]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i501[i + 0]) );
  }
  i496.subMeshes = i500
  var i503 = i497[8]
  var i502 = []
  for(var i = 0; i < i503.length; i += 16) {
    i502.push( new pc.Mat4().setData(i503[i + 0], i503[i + 1], i503[i + 2], i503[i + 3],  i503[i + 4], i503[i + 5], i503[i + 6], i503[i + 7],  i503[i + 8], i503[i + 9], i503[i + 10], i503[i + 11],  i503[i + 12], i503[i + 13], i503[i + 14], i503[i + 15]) );
  }
  i496.bindposes = i502
  var i505 = i497[9]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i505[i + 0]) );
  }
  i496.blendShapes = i504
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i511 = data
  i510.triangles = i511[0]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i517 = data
  i516.name = i517[0]
  var i519 = i517[1]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i519[i + 0]) );
  }
  i516.frames = i518
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i520 = root || new pc.UnityMaterial()
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'shader')
  i520.renderQueue = i521[3]
  i520.enableInstancing = !!i521[4]
  var i523 = i521[5]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i523[i + 0]) );
  }
  i520.floatParameters = i522
  var i525 = i521[6]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i525[i + 0]) );
  }
  i520.colorParameters = i524
  var i527 = i521[7]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i527[i + 0]) );
  }
  i520.vectorParameters = i526
  var i529 = i521[8]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i529[i + 0]) );
  }
  i520.textureParameters = i528
  var i531 = i521[9]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i531[i + 0]) );
  }
  i520.materialFlags = i530
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i535 = data
  i534.name = i535[0]
  i534.value = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i539 = data
  i538.name = i539[0]
  i538.value = new pc.Color(i539[1], i539[2], i539[3], i539[4])
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i543 = data
  i542.name = i543[0]
  i542.value = new pc.Vec4( i543[1], i543[2], i543[3], i543[4] )
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i547 = data
  i546.name = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'value')
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i551 = data
  i550.name = i551[0]
  i550.enabled = !!i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i553 = data
  i552.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i553[0], i552.main)
  i552.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i553[1], i552.colorBySpeed)
  i552.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i553[2], i552.colorOverLifetime)
  i552.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i553[3], i552.emission)
  i552.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i553[4], i552.rotationBySpeed)
  i552.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i553[5], i552.rotationOverLifetime)
  i552.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i553[6], i552.shape)
  i552.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i553[7], i552.sizeBySpeed)
  i552.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i553[8], i552.sizeOverLifetime)
  i552.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i553[9], i552.textureSheetAnimation)
  i552.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i553[10], i552.velocityOverLifetime)
  i552.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i553[11], i552.noise)
  i552.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i553[12], i552.inheritVelocity)
  i552.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i553[13], i552.forceOverLifetime)
  i552.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i553[14], i552.limitVelocityOverLifetime)
  i552.useAutoRandomSeed = !!i553[15]
  i552.randomSeed = i553[16]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemMain()
  var i555 = data
  i554.duration = i555[0]
  i554.loop = !!i555[1]
  i554.prewarm = !!i555[2]
  i554.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[3], i554.startDelay)
  i554.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[4], i554.startLifetime)
  i554.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[5], i554.startSpeed)
  i554.startSize3D = !!i555[6]
  i554.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[7], i554.startSizeX)
  i554.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[8], i554.startSizeY)
  i554.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[9], i554.startSizeZ)
  i554.startRotation3D = !!i555[10]
  i554.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[11], i554.startRotationX)
  i554.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[12], i554.startRotationY)
  i554.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[13], i554.startRotationZ)
  i554.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i555[14], i554.startColor)
  i554.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[15], i554.gravityModifier)
  i554.simulationSpace = i555[16]
  request.r(i555[17], i555[18], 0, i554, 'customSimulationSpace')
  i554.simulationSpeed = i555[19]
  i554.useUnscaledTime = !!i555[20]
  i554.scalingMode = i555[21]
  i554.playOnAwake = !!i555[22]
  i554.maxParticles = i555[23]
  i554.emitterVelocityMode = i555[24]
  i554.stopAction = i555[25]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i556 = root || new pc.MinMaxCurve()
  var i557 = data
  i556.mode = i557[0]
  i556.curveMin = new pc.AnimationCurve( { keys_flow: i557[1] } )
  i556.curveMax = new pc.AnimationCurve( { keys_flow: i557[2] } )
  i556.curveMultiplier = i557[3]
  i556.constantMin = i557[4]
  i556.constantMax = i557[5]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i558 = root || new pc.MinMaxGradient()
  var i559 = data
  i558.mode = i559[0]
  i558.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i559[1], i558.gradientMin)
  i558.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i559[2], i558.gradientMax)
  i558.colorMin = new pc.Color(i559[3], i559[4], i559[5], i559[6])
  i558.colorMax = new pc.Color(i559[7], i559[8], i559[9], i559[10])
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i561 = data
  i560.mode = i561[0]
  var i563 = i561[1]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i563[i + 0]) );
  }
  i560.colorKeys = i562
  var i565 = i561[2]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i565[i + 0]) );
  }
  i560.alphaKeys = i564
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemColorBySpeed()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i567[1], i566.color)
  i566.range = new pc.Vec2( i567[2], i567[3] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i571 = data
  i570.color = new pc.Color(i571[0], i571[1], i571[2], i571[3])
  i570.time = i571[4]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i575 = data
  i574.alpha = i575[0]
  i574.time = i575[1]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemColorOverLifetime()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i577[1], i576.color)
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemEmitter()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.rateOverTime)
  i578.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.rateOverDistance)
  var i581 = i579[3]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i581[i + 0]) );
  }
  i578.bursts = i580
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemBurst()
  var i585 = data
  i584.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[0], i584.count)
  i584.cycleCount = i585[1]
  i584.minCount = i585[2]
  i584.maxCount = i585[3]
  i584.repeatInterval = i585[4]
  i584.time = i585[5]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemRotationBySpeed()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[1], i586.x)
  i586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[2], i586.y)
  i586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[3], i586.z)
  i586.separateAxes = !!i587[4]
  i586.range = new pc.Vec2( i587[5], i587[6] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemRotationOverLifetime()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[1], i588.x)
  i588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[2], i588.y)
  i588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.z)
  i588.separateAxes = !!i589[4]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemShape()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.shapeType = i591[1]
  i590.randomDirectionAmount = i591[2]
  i590.sphericalDirectionAmount = i591[3]
  i590.randomPositionAmount = i591[4]
  i590.alignToDirection = !!i591[5]
  i590.radius = i591[6]
  i590.radiusMode = i591[7]
  i590.radiusSpread = i591[8]
  i590.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[9], i590.radiusSpeed)
  i590.radiusThickness = i591[10]
  i590.angle = i591[11]
  i590.length = i591[12]
  i590.boxThickness = new pc.Vec3( i591[13], i591[14], i591[15] )
  i590.meshShapeType = i591[16]
  request.r(i591[17], i591[18], 0, i590, 'mesh')
  request.r(i591[19], i591[20], 0, i590, 'meshRenderer')
  request.r(i591[21], i591[22], 0, i590, 'skinnedMeshRenderer')
  i590.useMeshMaterialIndex = !!i591[23]
  i590.meshMaterialIndex = i591[24]
  i590.useMeshColors = !!i591[25]
  i590.normalOffset = i591[26]
  i590.arc = i591[27]
  i590.arcMode = i591[28]
  i590.arcSpread = i591[29]
  i590.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[30], i590.arcSpeed)
  i590.donutRadius = i591[31]
  i590.position = new pc.Vec3( i591[32], i591[33], i591[34] )
  i590.rotation = new pc.Vec3( i591[35], i591[36], i591[37] )
  i590.scale = new pc.Vec3( i591[38], i591[39], i591[40] )
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemSizeBySpeed()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[1], i592.x)
  i592.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.y)
  i592.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[3], i592.z)
  i592.separateAxes = !!i593[4]
  i592.range = new pc.Vec2( i593[5], i593[6] )
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemSizeOverLifetime()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[1], i594.x)
  i594.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[2], i594.y)
  i594.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[3], i594.z)
  i594.separateAxes = !!i595[4]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i597 = data
  i596.enabled = !!i597[0]
  i596.mode = i597[1]
  i596.animation = i597[2]
  i596.numTilesX = i597[3]
  i596.numTilesY = i597[4]
  i596.useRandomRow = !!i597[5]
  i596.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[6], i596.frameOverTime)
  i596.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[7], i596.startFrame)
  i596.cycleCount = i597[8]
  i596.rowIndex = i597[9]
  i596.flipU = i597[10]
  i596.flipV = i597[11]
  i596.spriteCount = i597[12]
  var i599 = i597[13]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i596.sprites = i598
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i603 = data
  i602.enabled = !!i603[0]
  i602.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[1], i602.x)
  i602.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[2], i602.y)
  i602.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[3], i602.z)
  i602.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[4], i602.radial)
  i602.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[5], i602.speedModifier)
  i602.space = i603[6]
  i602.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[7], i602.orbitalX)
  i602.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[8], i602.orbitalY)
  i602.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[9], i602.orbitalZ)
  i602.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[10], i602.orbitalOffsetX)
  i602.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[11], i602.orbitalOffsetY)
  i602.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i603[12], i602.orbitalOffsetZ)
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemNoise()
  var i605 = data
  i604.enabled = !!i605[0]
  i604.separateAxes = !!i605[1]
  i604.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[2], i604.strengthX)
  i604.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[3], i604.strengthY)
  i604.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[4], i604.strengthZ)
  i604.frequency = i605[5]
  i604.damping = !!i605[6]
  i604.octaveCount = i605[7]
  i604.octaveMultiplier = i605[8]
  i604.octaveScale = i605[9]
  i604.quality = i605[10]
  i604.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[11], i604.scrollSpeed)
  i604.scrollSpeedMultiplier = i605[12]
  i604.remapEnabled = !!i605[13]
  i604.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[14], i604.remapX)
  i604.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[15], i604.remapY)
  i604.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[16], i604.remapZ)
  i604.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[17], i604.positionAmount)
  i604.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[18], i604.rotationAmount)
  i604.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[19], i604.sizeAmount)
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemInheritVelocity()
  var i607 = data
  i606.enabled = !!i607[0]
  i606.mode = i607[1]
  i606.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[2], i606.curve)
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i608 = root || new pc.ParticleSystemForceOverLifetime()
  var i609 = data
  i608.enabled = !!i609[0]
  i608.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[1], i608.x)
  i608.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[2], i608.y)
  i608.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i609[3], i608.z)
  i608.space = i609[4]
  i608.randomized = !!i609[5]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i610 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i611 = data
  i610.enabled = !!i611[0]
  i610.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[1], i610.limit)
  i610.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[2], i610.limitX)
  i610.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[3], i610.limitY)
  i610.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[4], i610.limitZ)
  i610.dampen = i611[5]
  i610.separateAxes = !!i611[6]
  i610.space = i611[7]
  i610.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i611[8], i610.drag)
  i610.multiplyDragByParticleSize = !!i611[9]
  i610.multiplyDragByParticleVelocity = !!i611[10]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i613 = data
  i612.enabled = !!i613[0]
  request.r(i613[1], i613[2], 0, i612, 'sharedMaterial')
  var i615 = i613[3]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i612.sharedMaterials = i614
  i612.receiveShadows = !!i613[4]
  i612.shadowCastingMode = i613[5]
  i612.sortingLayerID = i613[6]
  i612.sortingOrder = i613[7]
  i612.lightmapIndex = i613[8]
  i612.lightmapSceneIndex = i613[9]
  i612.lightmapScaleOffset = new pc.Vec4( i613[10], i613[11], i613[12], i613[13] )
  i612.lightProbeUsage = i613[14]
  i612.reflectionProbeUsage = i613[15]
  request.r(i613[16], i613[17], 0, i612, 'mesh')
  i612.meshCount = i613[18]
  i612.activeVertexStreamsCount = i613[19]
  i612.alignment = i613[20]
  i612.renderMode = i613[21]
  i612.sortMode = i613[22]
  i612.lengthScale = i613[23]
  i612.velocityScale = i613[24]
  i612.cameraVelocityScale = i613[25]
  i612.normalDirection = i613[26]
  i612.sortingFudge = i613[27]
  i612.minParticleSize = i613[28]
  i612.maxParticleSize = i613[29]
  i612.pivot = new pc.Vec3( i613[30], i613[31], i613[32] )
  request.r(i613[33], i613[34], 0, i612, 'trailMaterial')
  return i612
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i616 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i617 = data
  i616.OnlyDeactivate = !!i617[0]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i619 = data
  i618.center = new pc.Vec3( i619[0], i619[1], i619[2] )
  i618.size = new pc.Vec3( i619[3], i619[4], i619[5] )
  i618.enabled = !!i619[6]
  i618.isTrigger = !!i619[7]
  request.r(i619[8], i619[9], 0, i618, 'material')
  return i618
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i620 = root || request.c( 'BehaviourAI.TankAI' )
  var i621 = data
  i620.stopDistance = i621[0]
  i620.rotationSpeed = i621[1]
  i620.moveSpeed = i621[2]
  request.r(i621[3], i621[4], 0, i620, '_exclamationMark')
  request.r(i621[5], i621[6], 0, i620, '_guidance')
  i620.avoidanceDistance = i621[7]
  i620.tankLayer = UnityEngine.LayerMask.FromIntegerValue( i621[8] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i623 = data
  i622.enabled = !!i623[0]
  i622.planeDistance = i623[1]
  i622.referencePixelsPerUnit = i623[2]
  i622.isFallbackOverlay = !!i623[3]
  i622.renderMode = i623[4]
  i622.renderOrder = i623[5]
  i622.sortingLayerName = i623[6]
  i622.sortingOrder = i623[7]
  i622.scaleFactor = i623[8]
  request.r(i623[9], i623[10], 0, i622, 'worldCamera')
  i622.overrideSorting = !!i623[11]
  i622.pixelPerfect = !!i623[12]
  i622.targetDisplay = i623[13]
  i622.overridePixelPerfect = !!i623[14]
  return i622
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i625 = data
  i624.m_UiScaleMode = i625[0]
  i624.m_ReferencePixelsPerUnit = i625[1]
  i624.m_ScaleFactor = i625[2]
  i624.m_ReferenceResolution = new pc.Vec2( i625[3], i625[4] )
  i624.m_ScreenMatchMode = i625[5]
  i624.m_MatchWidthOrHeight = i625[6]
  i624.m_PhysicalUnit = i625[7]
  i624.m_FallbackScreenDPI = i625[8]
  i624.m_DefaultSpriteDPI = i625[9]
  i624.m_DynamicPixelsPerUnit = i625[10]
  i624.m_PresetInfoIsWorld = !!i625[11]
  return i624
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i627 = data
  i626.m_IgnoreReversedGraphics = !!i627[0]
  i626.m_BlockingObjects = i627[1]
  i626.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i627[2] )
  return i626
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i628 = root || request.c( 'ExclamationMark' )
  var i629 = data
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i631 = data
  i630.enabled = !!i631[0]
  request.r(i631[1], i631[2], 0, i630, 'sharedMaterial')
  var i633 = i631[3]
  var i632 = []
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 2, i632, '')
  }
  i630.sharedMaterials = i632
  i630.receiveShadows = !!i631[4]
  i630.shadowCastingMode = i631[5]
  i630.sortingLayerID = i631[6]
  i630.sortingOrder = i631[7]
  i630.lightmapIndex = i631[8]
  i630.lightmapSceneIndex = i631[9]
  i630.lightmapScaleOffset = new pc.Vec4( i631[10], i631[11], i631[12], i631[13] )
  i630.lightProbeUsage = i631[14]
  i630.reflectionProbeUsage = i631[15]
  i630.color = new pc.Color(i631[16], i631[17], i631[18], i631[19])
  request.r(i631[20], i631[21], 0, i630, 'sprite')
  i630.flipX = !!i631[22]
  i630.flipY = !!i631[23]
  i630.drawMode = i631[24]
  i630.size = new pc.Vec2( i631[25], i631[26] )
  i630.tileMode = i631[27]
  i630.adaptiveModeThreshold = i631[28]
  i630.maskInteraction = i631[29]
  i630.spriteSortPoint = i631[30]
  return i630
}

Deserializers["TitnSprite"] = function (request, data, root) {
  var i634 = root || request.c( 'TitnSprite' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, '_tank')
  i634.offsetDistance = i635[2]
  i634.heightOffset = i635[3]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i637 = data
  i636.enabled = !!i637[0]
  i636.type = i637[1]
  i636.color = new pc.Color(i637[2], i637[3], i637[4], i637[5])
  i636.cullingMask = i637[6]
  i636.intensity = i637[7]
  i636.range = i637[8]
  i636.spotAngle = i637[9]
  i636.shadows = i637[10]
  i636.shadowNormalBias = i637[11]
  i636.shadowBias = i637[12]
  i636.shadowStrength = i637[13]
  i636.shadowResolution = i637[14]
  i636.lightmapBakeType = i637[15]
  i636.renderMode = i637[16]
  request.r(i637[17], i637[18], 0, i636, 'cookie')
  i636.cookieSize = i637[19]
  return i636
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i639 = data
  i638.m_Version = i639[0]
  i638.m_UsePipelineSettings = !!i639[1]
  i638.m_AdditionalLightsShadowResolutionTier = i639[2]
  i638.m_LightLayerMask = i639[3]
  i638.m_RenderingLayers = i639[4]
  i638.m_CustomShadowLayers = !!i639[5]
  i638.m_ShadowLayerMask = i639[6]
  i638.m_ShadowRenderingLayers = i639[7]
  i638.m_LightCookieSize = new pc.Vec2( i639[8], i639[9] )
  i638.m_LightCookieOffset = new pc.Vec2( i639[10], i639[11] )
  i638.m_SoftShadowQuality = i639[12]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'clip')
  request.r(i641[2], i641[3], 0, i640, 'outputAudioMixerGroup')
  i640.playOnAwake = !!i641[4]
  i640.loop = !!i641[5]
  i640.time = i641[6]
  i640.volume = i641[7]
  i640.pitch = i641[8]
  i640.enabled = !!i641[9]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i643 = data
  i642.mass = i643[0]
  i642.drag = i643[1]
  i642.angularDrag = i643[2]
  i642.useGravity = !!i643[3]
  i642.isKinematic = !!i643[4]
  i642.constraints = i643[5]
  i642.maxAngularVelocity = i643[6]
  i642.collisionDetectionMode = i643[7]
  i642.interpolation = i643[8]
  return i642
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i644 = root || request.c( 'Howitzer.Projectile' )
  var i645 = data
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i647 = data
  i646.center = new pc.Vec3( i647[0], i647[1], i647[2] )
  i646.radius = i647[3]
  i646.height = i647[4]
  i646.direction = i647[5]
  i646.enabled = !!i647[6]
  i646.isTrigger = !!i647[7]
  request.r(i647[8], i647[9], 0, i646, 'material')
  return i646
}

Deserializers["MissPoint"] = function (request, data, root) {
  var i648 = root || request.c( 'MissPoint' )
  var i649 = data
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i651 = data
  i650.name = i651[0]
  i650.atlasId = i651[1]
  i650.mipmapCount = i651[2]
  i650.hdr = !!i651[3]
  i650.size = i651[4]
  i650.anisoLevel = i651[5]
  i650.filterMode = i651[6]
  var i653 = i651[7]
  var i652 = []
  for(var i = 0; i < i653.length; i += 4) {
    i652.push( UnityEngine.Rect.MinMaxRect(i653[i + 0], i653[i + 1], i653[i + 2], i653[i + 3]) );
  }
  i650.rects = i652
  i650.wrapU = i651[8]
  i650.wrapV = i651[9]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i657 = data
  i656.name = i657[0]
  i656.index = i657[1]
  i656.startup = !!i657[2]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i659 = data
  i658.enabled = !!i659[0]
  i658.aspect = i659[1]
  i658.orthographic = !!i659[2]
  i658.orthographicSize = i659[3]
  i658.backgroundColor = new pc.Color(i659[4], i659[5], i659[6], i659[7])
  i658.nearClipPlane = i659[8]
  i658.farClipPlane = i659[9]
  i658.fieldOfView = i659[10]
  i658.depth = i659[11]
  i658.clearFlags = i659[12]
  i658.cullingMask = i659[13]
  i658.rect = i659[14]
  request.r(i659[15], i659[16], 0, i658, 'targetTexture')
  i658.usePhysicalProperties = !!i659[17]
  i658.focalLength = i659[18]
  i658.sensorSize = new pc.Vec2( i659[19], i659[20] )
  i658.lensShift = new pc.Vec2( i659[21], i659[22] )
  i658.gateFit = i659[23]
  i658.commandBufferCount = i659[24]
  i658.cameraType = i659[25]
  return i658
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i660 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'joystick')
  i660.minYAngle = i661[2]
  i660.maxYAngle = i661[3]
  i660.rotationSpeed = i661[4]
  return i660
}

Deserializers["InteractiveArt"] = function (request, data, root) {
  var i662 = root || request.c( 'InteractiveArt' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, '_shopping')
  request.r(i663[2], i663[3], 0, i662, '_arm')
  request.r(i663[4], i663[5], 0, i662, '_arta1')
  request.r(i663[6], i663[7], 0, i662, '_arta2')
  request.r(i663[8], i663[9], 0, i662, '_particleSystem')
  request.r(i663[10], i663[11], 0, i662, 'secondCamera')
  i662.transitionSpeed = i663[12]
  request.r(i663[13], i663[14], 0, i662, '_audioSource')
  return i662
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i664 = root || request.c( 'Howitzer.LookAtReticle' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'reticle')
  request.r(i665[2], i665[3], 0, i664, 'mainCamera')
  i664.rotationSpeed = i665[4]
  i664.maxPitchAngle = i665[5]
  i664.minPitchAngle = i665[6]
  return i664
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i666 = root || request.c( 'FollowBullet' )
  var i667 = data
  i666._smoothSpeed = i667[0]
  i666._offset = new pc.Vec3( i667[1], i667[2], i667[3] )
  return i666
}

Deserializers["HandAnimation"] = function (request, data, root) {
  var i668 = root || request.c( 'HandAnimation' )
  var i669 = data
  i668.scaleSpeed = i669[0]
  i668.scaleAmount = i669[1]
  return i668
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i670 = root || request.c( 'UI.PlayerUIController' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'shootButton')
  request.r(i671[2], i671[3], 0, i670, 'zoomButton')
  request.r(i671[4], i671[5], 0, i670, '_cross')
  request.r(i671[6], i671[7], 0, i670, '_mark')
  request.r(i671[8], i671[9], 0, i670, '_tutorialHand2')
  return i670
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i672 = root || request.c( 'Howitzer.PlayerZoom' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'crosshair')
  request.r(i673[2], i673[3], 0, i672, 'mainCamera')
  request.r(i673[4], i673[5], 0, i672, 'zoomImage')
  var i675 = i673[6]
  var i674 = []
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 2, i674, '')
  }
  i672.objectsToDisable = i674
  i672.zoomFOV = i673[7]
  i672.normalFOV = i673[8]
  i672.zoomSpeed = i673[9]
  request.r(i673[10], i673[11], 0, i672, 'joystick')
  i672.rotationSpeed = i673[12]
  return i672
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i678 = root || request.c( 'Howitzer.PlayerShooting' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'playerShootingCooldown')
  request.r(i679[2], i679[3], 0, i678, 'mainCamera')
  request.r(i679[4], i679[5], 0, i678, 'crosshairUI')
  request.r(i679[6], i679[7], 0, i678, 'muzzleFlash')
  request.r(i679[8], i679[9], 0, i678, 'explosionEffect')
  request.r(i679[10], i679[11], 0, i678, 'projectilePosition')
  request.r(i679[12], i679[13], 0, i678, 'prefabProjectile')
  i678.projectileSpeed = i679[14]
  i678.poolSize = i679[15]
  request.r(i679[16], i679[17], 0, i678, '_followBullet')
  request.r(i679[18], i679[19], 0, i678, '_managerCamers')
  request.r(i679[20], i679[21], 0, i678, '_timeController')
  request.r(i679[22], i679[23], 0, i678, '_playerUIController')
  request.r(i679[24], i679[25], 0, i678, '_tanksFabric')
  request.r(i679[26], i679[27], 0, i678, '_missPoint')
  request.r(i679[28], i679[29], 0, i678, '_pumping')
  request.r(i679[30], i679[31], 0, i678, 'button')
  return i678
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i680 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'shootButton')
  request.r(i681[2], i681[3], 0, i680, 'cooldownText')
  request.r(i681[4], i681[5], 0, i680, 'cooldownImage')
  i680.cooldownTime = i681[6]
  return i680
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.Button' )
  var i683 = data
  i682.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i683[0], i682.m_OnClick)
  i682.m_Navigation = request.d('UnityEngine.UI.Navigation', i683[1], i682.m_Navigation)
  i682.m_Transition = i683[2]
  i682.m_Colors = request.d('UnityEngine.UI.ColorBlock', i683[3], i682.m_Colors)
  i682.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i683[4], i682.m_SpriteState)
  i682.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i683[5], i682.m_AnimationTriggers)
  i682.m_Interactable = !!i683[6]
  request.r(i683[7], i683[8], 0, i682, 'm_TargetGraphic')
  return i682
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i685 = data
  i684.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i685[0], i684.m_PersistentCalls)
  return i684
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i687 = data
  var i689 = i687[0]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i689.length; i += 1) {
    i688.add(request.d('UnityEngine.Events.PersistentCall', i689[i + 0]));
  }
  i686.m_Calls = i688
  return i686
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'm_Target')
  i692.m_TargetAssemblyTypeName = i693[2]
  i692.m_MethodName = i693[3]
  i692.m_Mode = i693[4]
  i692.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i693[5], i692.m_Arguments)
  i692.m_CallState = i693[6]
  return i692
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i695 = data
  i694.m_Mode = i695[0]
  i694.m_WrapAround = !!i695[1]
  request.r(i695[2], i695[3], 0, i694, 'm_SelectOnUp')
  request.r(i695[4], i695[5], 0, i694, 'm_SelectOnDown')
  request.r(i695[6], i695[7], 0, i694, 'm_SelectOnLeft')
  request.r(i695[8], i695[9], 0, i694, 'm_SelectOnRight')
  return i694
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i697 = data
  i696.m_NormalColor = new pc.Color(i697[0], i697[1], i697[2], i697[3])
  i696.m_HighlightedColor = new pc.Color(i697[4], i697[5], i697[6], i697[7])
  i696.m_PressedColor = new pc.Color(i697[8], i697[9], i697[10], i697[11])
  i696.m_SelectedColor = new pc.Color(i697[12], i697[13], i697[14], i697[15])
  i696.m_DisabledColor = new pc.Color(i697[16], i697[17], i697[18], i697[19])
  i696.m_ColorMultiplier = i697[20]
  i696.m_FadeDuration = i697[21]
  return i696
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'm_HighlightedSprite')
  request.r(i699[2], i699[3], 0, i698, 'm_PressedSprite')
  request.r(i699[4], i699[5], 0, i698, 'm_SelectedSprite')
  request.r(i699[6], i699[7], 0, i698, 'm_DisabledSprite')
  return i698
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i701 = data
  i700.m_NormalTrigger = i701[0]
  i700.m_HighlightedTrigger = i701[1]
  i700.m_PressedTrigger = i701[2]
  i700.m_SelectedTrigger = i701[3]
  i700.m_DisabledTrigger = i701[4]
  return i700
}

Deserializers["TutorialHand2"] = function (request, data, root) {
  var i702 = root || request.c( 'TutorialHand2' )
  var i703 = data
  i702.scaleSpeed = i703[0]
  i702.scaleAmount = i703[1]
  request.r(i703[2], i703[3], 0, i702, '_shootButton')
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i705 = data
  i704.usedByComposite = !!i705[0]
  i704.autoTiling = !!i705[1]
  i704.size = new pc.Vec2( i705[2], i705[3] )
  i704.edgeRadius = i705[4]
  i704.enabled = !!i705[5]
  i704.isTrigger = !!i705[6]
  i704.usedByEffector = !!i705[7]
  i704.density = i705[8]
  i704.offset = new pc.Vec2( i705[9], i705[10] )
  request.r(i705[11], i705[12], 0, i704, 'material')
  return i704
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.Text' )
  var i707 = data
  i706.m_FontData = request.d('UnityEngine.UI.FontData', i707[0], i706.m_FontData)
  i706.m_Text = i707[1]
  request.r(i707[2], i707[3], 0, i706, 'm_Material')
  i706.m_Maskable = !!i707[4]
  i706.m_Color = new pc.Color(i707[5], i707[6], i707[7], i707[8])
  i706.m_RaycastTarget = !!i707[9]
  i706.m_RaycastPadding = new pc.Vec4( i707[10], i707[11], i707[12], i707[13] )
  return i706
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.FontData' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'm_Font')
  i708.m_FontSize = i709[2]
  i708.m_FontStyle = i709[3]
  i708.m_BestFit = !!i709[4]
  i708.m_MinSize = i709[5]
  i708.m_MaxSize = i709[6]
  i708.m_Alignment = i709[7]
  i708.m_AlignByGeometry = !!i709[8]
  i708.m_RichText = !!i709[9]
  i708.m_HorizontalOverflow = i709[10]
  i708.m_VerticalOverflow = i709[11]
  i708.m_LineSpacing = i709[12]
  return i708
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i710 = root || request.c( 'TutorialHand' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'handImage')
  i710.moveDistance = i711[2]
  i710.moveDuration = i711[3]
  request.r(i711[4], i711[5], 0, i710, '_tutorialHand2')
  request.r(i711[6], i711[7], 0, i710, '_shootButton')
  request.r(i711[8], i711[9], 0, i710, '_zoomButton')
  return i710
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i712 = root || request.c( 'UI.CrosshairMovement' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'joystick')
  request.r(i713[2], i713[3], 0, i712, 'crosshair')
  i712.moveSpeed = i713[4]
  request.r(i713[5], i713[6], 0, i712, 'canvasRect')
  return i712
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i714 = root || request.c( 'UI.EndCardAnimation' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'background')
  request.r(i715[2], i715[3], 0, i714, 'title')
  request.r(i715[4], i715[5], 0, i714, 'logoAndButton')
  request.r(i715[6], i715[7], 0, i714, 'titleText')
  i714.fadeDuration = i715[8]
  i714.scaleDuration = i715[9]
  i714.scaleEase = i715[10]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i717 = data
  i716.m_Alpha = i717[0]
  i716.m_Interactable = !!i717[1]
  i716.m_BlocksRaycasts = !!i717[2]
  i716.m_IgnoreParentGroups = !!i717[3]
  i716.enabled = !!i717[4]
  return i716
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i719 = data
  i718.m_AspectMode = i719[0]
  i718.m_AspectRatio = i719[1]
  return i718
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i720 = root || request.c( 'UI.ButtonPulse' )
  var i721 = data
  i720.scaleMultiplier = i721[0]
  i720.duration = i721[1]
  return i720
}

Deserializers["Cross"] = function (request, data, root) {
  var i722 = root || request.c( 'Cross' )
  var i723 = data
  return i722
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'm_FirstSelected')
  i724.m_sendNavigationEvents = !!i725[2]
  i724.m_DragThreshold = i725[3]
  return i724
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i727 = data
  i726.m_HorizontalAxis = i727[0]
  i726.m_VerticalAxis = i727[1]
  i726.m_SubmitButton = i727[2]
  i726.m_CancelButton = i727[3]
  i726.m_InputActionsPerSecond = i727[4]
  i726.m_RepeatDelay = i727[5]
  i726.m_ForceModuleActive = !!i727[6]
  i726.m_SendPointerHoverToParent = !!i727[7]
  return i726
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i728 = root || request.c( 'Bootstraps.Bootstrap' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'tanksFabric')
  request.r(i729[2], i729[3], 0, i728, 'scenarioGame')
  return i728
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i730 = root || request.c( 'Fabric.TanksFabric' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'tankPrefab')
  var i733 = i731[2]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 1, i732, '')
  }
  i730.spawnPoints = i732
  var i735 = i731[3]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i730.targets = i734
  return i730
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i740 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'endCard')
  request.r(i741[2], i741[3], 0, i740, '_audioSource')
  return i740
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i742 = root || request.c( 'UI.TankKillStatistics' )
  var i743 = data
  return i742
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i744 = root || request.c( 'ManagerCamers' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, '_plauerCamera')
  request.r(i745[2], i745[3], 0, i744, '_bulletCamera')
  request.r(i745[4], i745[5], 0, i744, '_timeController')
  request.r(i745[6], i745[7], 0, i744, '_playerZoom')
  return i744
}

Deserializers["TimeController"] = function (request, data, root) {
  var i746 = root || request.c( 'TimeController' )
  var i747 = data
  i746.slowMotionScale = i747[0]
  i746.slowMotionDuration = i747[1]
  i746.restoreSpeedDuration = i747[2]
  return i746
}

Deserializers["Pumping"] = function (request, data, root) {
  var i748 = root || request.c( 'Pumping' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_Camera')
  request.r(i749[2], i749[3], 0, i748, '_pumpingCamera')
  request.r(i749[4], i749[5], 0, i748, '_UI')
  request.r(i749[6], i749[7], 0, i748, '_arta1')
  request.r(i749[8], i749[9], 0, i748, '_arm')
  request.r(i749[10], i749[11], 0, i748, '_shopping')
  request.r(i749[12], i749[13], 0, i748, '_interactiveArt')
  request.r(i749[14], i749[15], 0, i748, '_tacticsFabric')
  request.r(i749[16], i749[17], 0, i748, '_button')
  request.r(i749[18], i749[19], 0, i748, '_titnSprite')
  return i748
}

Deserializers["Shopping"] = function (request, data, root) {
  var i750 = root || request.c( 'Shopping' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, '_improveButton')
  request.r(i751[2], i751[3], 0, i750, '_purchase')
  request.r(i751[4], i751[5], 0, i750, '_shopping')
  request.r(i751[6], i751[7], 0, i750, '_shoppingPlayer')
  request.r(i751[8], i751[9], 0, i750, '_tanksFabric')
  request.r(i751[10], i751[11], 0, i750, '_interactiveArt')
  return i750
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'm_ObjectArgument')
  i752.m_ObjectArgumentAssemblyTypeName = i753[2]
  i752.m_IntArgument = i753[3]
  i752.m_FloatArgument = i753[4]
  i752.m_StringArgument = i753[5]
  i752.m_BoolArgument = !!i753[6]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i755 = data
  i754.ambientIntensity = i755[0]
  i754.reflectionIntensity = i755[1]
  i754.ambientMode = i755[2]
  i754.ambientLight = new pc.Color(i755[3], i755[4], i755[5], i755[6])
  i754.ambientSkyColor = new pc.Color(i755[7], i755[8], i755[9], i755[10])
  i754.ambientGroundColor = new pc.Color(i755[11], i755[12], i755[13], i755[14])
  i754.ambientEquatorColor = new pc.Color(i755[15], i755[16], i755[17], i755[18])
  i754.fogColor = new pc.Color(i755[19], i755[20], i755[21], i755[22])
  i754.fogEndDistance = i755[23]
  i754.fogStartDistance = i755[24]
  i754.fogDensity = i755[25]
  i754.fog = !!i755[26]
  request.r(i755[27], i755[28], 0, i754, 'skybox')
  i754.fogMode = i755[29]
  var i757 = i755[30]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i757[i + 0]) );
  }
  i754.lightmaps = i756
  i754.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i755[31], i754.lightProbes)
  i754.lightmapsMode = i755[32]
  i754.mixedBakeMode = i755[33]
  i754.environmentLightingMode = i755[34]
  i754.ambientProbe = new pc.SphericalHarmonicsL2(i755[35])
  i754.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i755[36])
  i754.useReferenceAmbientProbe = !!i755[37]
  request.r(i755[38], i755[39], 0, i754, 'customReflection')
  request.r(i755[40], i755[41], 0, i754, 'defaultReflection')
  i754.defaultReflectionMode = i755[42]
  i754.defaultReflectionResolution = i755[43]
  i754.sunLightObjectId = i755[44]
  i754.pixelLightCount = i755[45]
  i754.defaultReflectionHDR = !!i755[46]
  i754.hasLightDataAsset = !!i755[47]
  i754.hasManualGenerate = !!i755[48]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'lightmapColor')
  request.r(i761[2], i761[3], 0, i760, 'lightmapDirection')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i762 = root || new UnityEngine.LightProbes()
  var i763 = data
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i771 = data
  var i773 = i771[0]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i773[i + 0]));
  }
  i770.ShaderCompilationErrors = i772
  i770.name = i771[1]
  i770.guid = i771[2]
  var i775 = i771[3]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( i775[i + 0] );
  }
  i770.shaderDefinedKeywords = i774
  var i777 = i771[4]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i777[i + 0]) );
  }
  i770.passes = i776
  var i779 = i771[5]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i779[i + 0]) );
  }
  i770.usePasses = i778
  var i781 = i771[6]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i781[i + 0]) );
  }
  i770.defaultParameterValues = i780
  request.r(i771[7], i771[8], 0, i770, 'unityFallbackShader')
  i770.readDepth = !!i771[9]
  i770.isCreatedByShaderGraph = !!i771[10]
  i770.compiled = !!i771[11]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i785 = data
  i784.shaderName = i785[0]
  i784.errorMessage = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i790 = root || new pc.UnityShaderPass()
  var i791 = data
  i790.id = i791[0]
  i790.subShaderIndex = i791[1]
  i790.name = i791[2]
  i790.passType = i791[3]
  i790.grabPassTextureName = i791[4]
  i790.usePass = !!i791[5]
  i790.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[6], i790.zTest)
  i790.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[7], i790.zWrite)
  i790.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[8], i790.culling)
  i790.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i791[9], i790.blending)
  i790.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i791[10], i790.alphaBlending)
  i790.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[11], i790.colorWriteMask)
  i790.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[12], i790.offsetUnits)
  i790.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[13], i790.offsetFactor)
  i790.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[14], i790.stencilRef)
  i790.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[15], i790.stencilReadMask)
  i790.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[16], i790.stencilWriteMask)
  i790.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i791[17], i790.stencilOp)
  i790.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i791[18], i790.stencilOpFront)
  i790.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i791[19], i790.stencilOpBack)
  var i793 = i791[20]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i793[i + 0]) );
  }
  i790.tags = i792
  var i795 = i791[21]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( i795[i + 0] );
  }
  i790.passDefinedKeywords = i794
  var i797 = i791[22]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i797[i + 0]) );
  }
  i790.passDefinedKeywordGroups = i796
  var i799 = i791[23]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i799[i + 0]) );
  }
  i790.variants = i798
  var i801 = i791[24]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i801[i + 0]) );
  }
  i790.excludedVariants = i800
  i790.hasDepthReader = !!i791[25]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i803 = data
  i802.val = i803[0]
  i802.name = i803[1]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i805 = data
  i804.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[0], i804.src)
  i804.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[1], i804.dst)
  i804.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[2], i804.op)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i807 = data
  i806.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[0], i806.pass)
  i806.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[1], i806.fail)
  i806.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[2], i806.zFail)
  i806.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[3], i806.comp)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i811 = data
  i810.name = i811[0]
  i810.value = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i815 = data
  var i817 = i815[0]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i814.keywords = i816
  i814.hasDiscard = !!i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i821 = data
  i820.passId = i821[0]
  i820.subShaderIndex = i821[1]
  var i823 = i821[2]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i820.keywords = i822
  i820.vertexProgram = i821[3]
  i820.fragmentProgram = i821[4]
  i820.exportedForWebGl2 = !!i821[5]
  i820.readDepth = !!i821[6]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'shader')
  i826.pass = i827[2]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i831 = data
  i830.name = i831[0]
  i830.type = i831[1]
  i830.value = new pc.Vec4( i831[2], i831[3], i831[4], i831[5] )
  i830.textureValue = i831[6]
  i830.shaderPropertyFlag = i831[7]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i833 = data
  i832.name = i833[0]
  request.r(i833[1], i833[2], 0, i832, 'texture')
  i832.aabb = i833[3]
  i832.vertices = i833[4]
  i832.triangles = i833[5]
  i832.textureRect = UnityEngine.Rect.MinMaxRect(i833[6], i833[7], i833[8], i833[9])
  i832.packedRect = UnityEngine.Rect.MinMaxRect(i833[10], i833[11], i833[12], i833[13])
  i832.border = new pc.Vec4( i833[14], i833[15], i833[16], i833[17] )
  i832.transparency = i833[18]
  i832.bounds = i833[19]
  i832.pixelsPerUnit = i833[20]
  i832.textureWidth = i833[21]
  i832.textureHeight = i833[22]
  i832.nativeSize = new pc.Vec2( i833[23], i833[24] )
  i832.pivot = new pc.Vec2( i833[25], i833[26] )
  i832.textureRectOffset = new pc.Vec2( i833[27], i833[28] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i835 = data
  i834.name = i835[0]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i837 = data
  i836.name = i837[0]
  i836.ascent = i837[1]
  i836.originalLineHeight = i837[2]
  i836.fontSize = i837[3]
  var i839 = i837[4]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i839[i + 0]) );
  }
  i836.characterInfo = i838
  request.r(i837[5], i837[6], 0, i836, 'texture')
  i836.originalFontSize = i837[7]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i843 = data
  i842.index = i843[0]
  i842.advance = i843[1]
  i842.bearing = i843[2]
  i842.glyphWidth = i843[3]
  i842.glyphHeight = i843[4]
  i842.minX = i843[5]
  i842.maxX = i843[6]
  i842.minY = i843[7]
  i842.maxY = i843[8]
  i842.uvBottomLeftX = i843[9]
  i842.uvBottomLeftY = i843[10]
  i842.uvBottomRightX = i843[11]
  i842.uvBottomRightY = i843[12]
  i842.uvTopLeftX = i843[13]
  i842.uvTopLeftY = i843[14]
  i842.uvTopRightX = i843[15]
  i842.uvTopRightY = i843[16]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i845 = data
  var i847 = i845[0]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i847[i + 0]) );
  }
  i844.files = i846
  i844.componentToPrefabIds = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i851 = data
  i850.path = i851[0]
  request.r(i851[1], i851[2], 0, i850, 'unityObject')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i853 = data
  var i855 = i853[0]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i855[i + 0]) );
  }
  i852.scriptsExecutionOrder = i854
  var i857 = i853[1]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i857[i + 0]) );
  }
  i852.sortingLayers = i856
  var i859 = i853[2]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i859[i + 0]) );
  }
  i852.cullingLayers = i858
  i852.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i853[3], i852.timeSettings)
  i852.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i853[4], i852.physicsSettings)
  i852.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i853[5], i852.physics2DSettings)
  i852.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i853[6], i852.qualitySettings)
  i852.enableRealtimeShadows = !!i853[7]
  i852.enableAutoInstancing = !!i853[8]
  i852.enableDynamicBatching = !!i853[9]
  i852.lightmapEncodingQuality = i853[10]
  i852.desiredColorSpace = i853[11]
  var i861 = i853[12]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i852.allTags = i860
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i865 = data
  i864.name = i865[0]
  i864.value = i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i869 = data
  i868.id = i869[0]
  i868.name = i869[1]
  i868.value = i869[2]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i873 = data
  i872.id = i873[0]
  i872.name = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i875 = data
  i874.fixedDeltaTime = i875[0]
  i874.maximumDeltaTime = i875[1]
  i874.timeScale = i875[2]
  i874.maximumParticleTimestep = i875[3]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i877 = data
  i876.gravity = new pc.Vec3( i877[0], i877[1], i877[2] )
  i876.defaultSolverIterations = i877[3]
  i876.bounceThreshold = i877[4]
  i876.autoSyncTransforms = !!i877[5]
  i876.autoSimulation = !!i877[6]
  var i879 = i877[7]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i879[i + 0]) );
  }
  i876.collisionMatrix = i878
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i883 = data
  i882.enabled = !!i883[0]
  i882.layerId = i883[1]
  i882.otherLayerId = i883[2]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'material')
  i884.gravity = new pc.Vec2( i885[2], i885[3] )
  i884.positionIterations = i885[4]
  i884.velocityIterations = i885[5]
  i884.velocityThreshold = i885[6]
  i884.maxLinearCorrection = i885[7]
  i884.maxAngularCorrection = i885[8]
  i884.maxTranslationSpeed = i885[9]
  i884.maxRotationSpeed = i885[10]
  i884.baumgarteScale = i885[11]
  i884.baumgarteTOIScale = i885[12]
  i884.timeToSleep = i885[13]
  i884.linearSleepTolerance = i885[14]
  i884.angularSleepTolerance = i885[15]
  i884.defaultContactOffset = i885[16]
  i884.autoSimulation = !!i885[17]
  i884.queriesHitTriggers = !!i885[18]
  i884.queriesStartInColliders = !!i885[19]
  i884.callbacksOnDisable = !!i885[20]
  i884.reuseCollisionCallbacks = !!i885[21]
  i884.autoSyncTransforms = !!i885[22]
  var i887 = i885[23]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i887[i + 0]) );
  }
  i884.collisionMatrix = i886
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i891 = data
  i890.enabled = !!i891[0]
  i890.layerId = i891[1]
  i890.otherLayerId = i891[2]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i893 = data
  var i895 = i893[0]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i895[i + 0]) );
  }
  i892.qualityLevels = i894
  var i897 = i893[1]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i892.names = i896
  i892.shadows = i893[2]
  i892.anisotropicFiltering = i893[3]
  i892.antiAliasing = i893[4]
  i892.lodBias = i893[5]
  i892.shadowCascades = i893[6]
  i892.shadowDistance = i893[7]
  i892.shadowmaskMode = i893[8]
  i892.shadowProjection = i893[9]
  i892.shadowResolution = i893[10]
  i892.softParticles = !!i893[11]
  i892.softVegetation = !!i893[12]
  i892.activeColorSpace = i893[13]
  i892.desiredColorSpace = i893[14]
  i892.masterTextureLimit = i893[15]
  i892.maxQueuedFrames = i893[16]
  i892.particleRaycastBudget = i893[17]
  i892.pixelLightCount = i893[18]
  i892.realtimeReflectionProbes = !!i893[19]
  i892.shadowCascade2Split = i893[20]
  i892.shadowCascade4Split = new pc.Vec3( i893[21], i893[22], i893[23] )
  i892.streamingMipmapsActive = !!i893[24]
  i892.vSyncCount = i893[25]
  i892.asyncUploadBufferSize = i893[26]
  i892.asyncUploadTimeSlice = i893[27]
  i892.billboardsFaceCameraPosition = !!i893[28]
  i892.shadowNearPlaneOffset = i893[29]
  i892.streamingMipmapsMemoryBudget = i893[30]
  i892.maximumLODLevel = i893[31]
  i892.streamingMipmapsAddAllCameras = !!i893[32]
  i892.streamingMipmapsMaxLevelReduction = i893[33]
  i892.streamingMipmapsRenderersPerFrame = i893[34]
  i892.resolutionScalingFixedDPIFactor = i893[35]
  i892.streamingMipmapsMaxFileIORequests = i893[36]
  i892.currentQualityLevel = i893[37]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i903 = data
  i902.weight = i903[0]
  i902.vertices = i903[1]
  i902.normals = i903[2]
  i902.tangents = i903[3]
  return i902
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[35],"79":[29],"80":[29],"81":[29],"82":[29],"83":[29],"84":[29],"85":[29],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[87],"95":[87],"96":[87],"97":[87],"98":[87],"99":[87],"100":[35],"101":[10],"102":[103],"104":[103],"20":[0],"105":[14],"16":[14],"106":[25],"107":[8],"108":[25],"109":[0],"110":[35],"111":[35],"26":[25],"112":[35],"113":[114],"115":[0],"116":[0],"22":[20],"3":[1,0],"61":[0],"21":[20],"117":[0],"118":[0],"119":[0],"120":[0],"121":[0],"122":[0],"123":[0],"124":[0],"125":[0],"126":[1,0],"127":[0],"128":[0],"129":[0],"130":[0],"54":[1,0],"131":[0],"132":[63],"133":[63],"64":[63],"134":[63],"135":[35],"136":[35],"137":[114],"138":[114],"139":[35],"140":[141]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","VariableJoystick","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CFX_AutoDestructShuriken","UnityEngine.BoxCollider","BehaviourAI.TankAI","ExclamationMark","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.SpriteRenderer","TitnSprite","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Rigidbody","Howitzer.Projectile","UnityEngine.CapsuleCollider","MissPoint","UnityEngine.LODGroup","UnityEngine.Cubemap","UnityEngine.Camera","UnityEngine.AudioListener","Howitzer.LookAtCrosshair","InteractiveArt","UnityEngine.GameObject","Howitzer.LookAtReticle","FollowBullet","HandAnimation","UI.PlayerUIController","UnityEngine.UI.Button","Cross","TutorialHand2","Howitzer.PlayerZoom","Howitzer.PlayerShooting","Howitzer.PlayerShootingCooldown","ManagerCamers","TimeController","Fabric.TanksFabric","Pumping","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","UnityEngine.Font","TutorialHand","UI.CrosshairMovement","UI.EndCardAnimation","UnityEngine.CanvasGroup","UnityEngine.UI.AspectRatioFitter","UI.ButtonPulse","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Bootstraps.Bootstrap","Bootstraps.ScenarioGame","UI.TankKillStatistics","Shopping","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CFX_AutoStopLoopedEffect","CFX_LightIntensityFade","WFX_BulletHoleDecal","WFX_LightFlicker","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/12/2025 18:23:14";

Deserializers.lunaDaysRunning = "12.8";

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

Deserializers.buildID = "91120da1-d0e1-4e63-b6be-8f5bc27a5c43";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

