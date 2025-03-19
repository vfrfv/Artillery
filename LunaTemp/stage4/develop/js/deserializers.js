var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointSpring' )
  var i441 = data
  i440.spring = i441[0]
  i440.damper = i441[1]
  i440.targetPosition = i441[2]
  return i440
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointMotor' )
  var i443 = data
  i442.m_TargetVelocity = i443[0]
  i442.m_Force = i443[1]
  i442.m_FreeSpin = i443[2]
  return i442
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointLimits' )
  var i445 = data
  i444.m_Min = i445[0]
  i444.m_Max = i445[1]
  i444.m_Bounciness = i445[2]
  i444.m_BounceMinVelocity = i445[3]
  i444.m_ContactDistance = i445[4]
  i444.minBounce = i445[5]
  i444.maxBounce = i445[6]
  return i444
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointDrive' )
  var i447 = data
  i446.m_PositionSpring = i447[0]
  i446.m_PositionDamper = i447[1]
  i446.m_MaximumForce = i447[2]
  i446.m_UseAcceleration = i447[3]
  return i446
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i449 = data
  i448.m_Spring = i449[0]
  i448.m_Damper = i449[1]
  return i448
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i451 = data
  i450.m_Limit = i451[0]
  i450.m_Bounciness = i451[1]
  i450.m_ContactDistance = i451[2]
  return i450
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i453 = data
  i452.m_ExtremumSlip = i453[0]
  i452.m_ExtremumValue = i453[1]
  i452.m_AsymptoteSlip = i453[2]
  i452.m_AsymptoteValue = i453[3]
  i452.m_Stiffness = i453[4]
  return i452
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i455 = data
  i454.m_LowerAngle = i455[0]
  i454.m_UpperAngle = i455[1]
  return i454
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i457 = data
  i456.m_MotorSpeed = i457[0]
  i456.m_MaximumMotorTorque = i457[1]
  return i456
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i459 = data
  i458.m_DampingRatio = i459[0]
  i458.m_Frequency = i459[1]
  i458.m_Angle = i459[2]
  return i458
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i461 = data
  i460.m_LowerTranslation = i461[0]
  i460.m_UpperTranslation = i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i463 = data
  i462.pivot = new pc.Vec2( i463[0], i463[1] )
  i462.anchorMin = new pc.Vec2( i463[2], i463[3] )
  i462.anchorMax = new pc.Vec2( i463[4], i463[5] )
  i462.sizeDelta = new pc.Vec2( i463[6], i463[7] )
  i462.anchoredPosition3D = new pc.Vec3( i463[8], i463[9], i463[10] )
  i462.rotation = new pc.Quat(i463[11], i463[12], i463[13], i463[14])
  i462.scale = new pc.Vec3( i463[15], i463[16], i463[17] )
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i465 = data
  i464.cullTransparentMesh = !!i465[0]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i467 = data
  i466.name = i467[0]
  i466.tagId = i467[1]
  i466.enabled = !!i467[2]
  i466.isStatic = !!i467[3]
  i466.layer = i467[4]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i469 = data
  i468.name = i469[0]
  i468.width = i469[1]
  i468.height = i469[2]
  i468.mipmapCount = i469[3]
  i468.anisoLevel = i469[4]
  i468.filterMode = i469[5]
  i468.hdr = !!i469[6]
  i468.format = i469[7]
  i468.wrapMode = i469[8]
  i468.alphaIsTransparency = !!i469[9]
  i468.alphaSource = i469[10]
  i468.graphicsFormat = i469[11]
  i468.sRGBTexture = !!i469[12]
  i468.desiredColorSpace = i469[13]
  i468.wrapU = i469[14]
  i468.wrapV = i469[15]
  return i468
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.UI.Image' )
  var i471 = data
  request.r(i471[0], i471[1], 0, i470, 'm_Sprite')
  i470.m_Type = i471[2]
  i470.m_PreserveAspect = !!i471[3]
  i470.m_FillCenter = !!i471[4]
  i470.m_FillMethod = i471[5]
  i470.m_FillAmount = i471[6]
  i470.m_FillClockwise = !!i471[7]
  i470.m_FillOrigin = i471[8]
  i470.m_UseSpriteMesh = !!i471[9]
  i470.m_PixelsPerUnitMultiplier = i471[10]
  request.r(i471[11], i471[12], 0, i470, 'm_Material')
  i470.m_Maskable = !!i471[13]
  i470.m_Color = new pc.Color(i471[14], i471[15], i471[16], i471[17])
  i470.m_RaycastTarget = !!i471[18]
  i470.m_RaycastPadding = new pc.Vec4( i471[19], i471[20], i471[21], i471[22] )
  return i470
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i472 = root || request.c( 'VariableJoystick' )
  var i473 = data
  request.r(i473[0], i473[1], 0, i472, 'handle')
  i472.moveThreshold = i473[2]
  i472.joystickType = i473[3]
  request.r(i473[4], i473[5], 0, i472, 'background')
  i472.handleRange = i473[6]
  i472.deadZone = i473[7]
  i472.axisOptions = i473[8]
  i472.snapX = !!i473[9]
  i472.snapY = !!i473[10]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i475 = data
  i474.position = new pc.Vec3( i475[0], i475[1], i475[2] )
  i474.scale = new pc.Vec3( i475[3], i475[4], i475[5] )
  i474.rotation = new pc.Quat(i475[6], i475[7], i475[8], i475[9])
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i477 = data
  request.r(i477[0], i477[1], 0, i476, 'sharedMesh')
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i479 = data
  request.r(i479[0], i479[1], 0, i478, 'additionalVertexStreams')
  i478.enabled = !!i479[2]
  request.r(i479[3], i479[4], 0, i478, 'sharedMaterial')
  var i481 = i479[5]
  var i480 = []
  for(var i = 0; i < i481.length; i += 2) {
  request.r(i481[i + 0], i481[i + 1], 2, i480, '')
  }
  i478.sharedMaterials = i480
  i478.receiveShadows = !!i479[6]
  i478.shadowCastingMode = i479[7]
  i478.sortingLayerID = i479[8]
  i478.sortingOrder = i479[9]
  i478.lightmapIndex = i479[10]
  i478.lightmapSceneIndex = i479[11]
  i478.lightmapScaleOffset = new pc.Vec4( i479[12], i479[13], i479[14], i479[15] )
  i478.lightProbeUsage = i479[16]
  i478.reflectionProbeUsage = i479[17]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i485 = data
  i484.name = i485[0]
  i484.halfPrecision = !!i485[1]
  i484.useUInt32IndexFormat = !!i485[2]
  i484.vertexCount = i485[3]
  i484.aabb = i485[4]
  var i487 = i485[5]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( !!i487[i + 0] );
  }
  i484.streams = i486
  i484.vertices = i485[6]
  var i489 = i485[7]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i489[i + 0]) );
  }
  i484.subMeshes = i488
  var i491 = i485[8]
  var i490 = []
  for(var i = 0; i < i491.length; i += 16) {
    i490.push( new pc.Mat4().setData(i491[i + 0], i491[i + 1], i491[i + 2], i491[i + 3],  i491[i + 4], i491[i + 5], i491[i + 6], i491[i + 7],  i491[i + 8], i491[i + 9], i491[i + 10], i491[i + 11],  i491[i + 12], i491[i + 13], i491[i + 14], i491[i + 15]) );
  }
  i484.bindposes = i490
  var i493 = i485[9]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i493[i + 0]) );
  }
  i484.blendShapes = i492
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i499 = data
  i498.triangles = i499[0]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i505 = data
  i504.name = i505[0]
  var i507 = i505[1]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i507[i + 0]) );
  }
  i504.frames = i506
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i508 = root || new pc.UnityMaterial()
  var i509 = data
  i508.name = i509[0]
  request.r(i509[1], i509[2], 0, i508, 'shader')
  i508.renderQueue = i509[3]
  i508.enableInstancing = !!i509[4]
  var i511 = i509[5]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i511[i + 0]) );
  }
  i508.floatParameters = i510
  var i513 = i509[6]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i513[i + 0]) );
  }
  i508.colorParameters = i512
  var i515 = i509[7]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i515[i + 0]) );
  }
  i508.vectorParameters = i514
  var i517 = i509[8]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i517[i + 0]) );
  }
  i508.textureParameters = i516
  var i519 = i509[9]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i519[i + 0]) );
  }
  i508.materialFlags = i518
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i523 = data
  i522.name = i523[0]
  i522.value = i523[1]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i527 = data
  i526.name = i527[0]
  i526.value = new pc.Color(i527[1], i527[2], i527[3], i527[4])
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i531 = data
  i530.name = i531[0]
  i530.value = new pc.Vec4( i531[1], i531[2], i531[3], i531[4] )
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i535 = data
  i534.name = i535[0]
  request.r(i535[1], i535[2], 0, i534, 'value')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i539 = data
  i538.name = i539[0]
  i538.enabled = !!i539[1]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i541 = data
  i540.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i541[0], i540.main)
  i540.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i541[1], i540.colorBySpeed)
  i540.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i541[2], i540.colorOverLifetime)
  i540.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i541[3], i540.emission)
  i540.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i541[4], i540.rotationBySpeed)
  i540.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i541[5], i540.rotationOverLifetime)
  i540.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i541[6], i540.shape)
  i540.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i541[7], i540.sizeBySpeed)
  i540.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i541[8], i540.sizeOverLifetime)
  i540.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i541[9], i540.textureSheetAnimation)
  i540.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i541[10], i540.velocityOverLifetime)
  i540.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i541[11], i540.noise)
  i540.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i541[12], i540.inheritVelocity)
  i540.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i541[13], i540.forceOverLifetime)
  i540.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i541[14], i540.limitVelocityOverLifetime)
  i540.useAutoRandomSeed = !!i541[15]
  i540.randomSeed = i541[16]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i542 = root || new pc.ParticleSystemMain()
  var i543 = data
  i542.duration = i543[0]
  i542.loop = !!i543[1]
  i542.prewarm = !!i543[2]
  i542.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[3], i542.startDelay)
  i542.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[4], i542.startLifetime)
  i542.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[5], i542.startSpeed)
  i542.startSize3D = !!i543[6]
  i542.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[7], i542.startSizeX)
  i542.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[8], i542.startSizeY)
  i542.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[9], i542.startSizeZ)
  i542.startRotation3D = !!i543[10]
  i542.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[11], i542.startRotationX)
  i542.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[12], i542.startRotationY)
  i542.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[13], i542.startRotationZ)
  i542.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i543[14], i542.startColor)
  i542.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[15], i542.gravityModifier)
  i542.simulationSpace = i543[16]
  request.r(i543[17], i543[18], 0, i542, 'customSimulationSpace')
  i542.simulationSpeed = i543[19]
  i542.useUnscaledTime = !!i543[20]
  i542.scalingMode = i543[21]
  i542.playOnAwake = !!i543[22]
  i542.maxParticles = i543[23]
  i542.emitterVelocityMode = i543[24]
  i542.stopAction = i543[25]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i544 = root || new pc.MinMaxCurve()
  var i545 = data
  i544.mode = i545[0]
  i544.curveMin = new pc.AnimationCurve( { keys_flow: i545[1] } )
  i544.curveMax = new pc.AnimationCurve( { keys_flow: i545[2] } )
  i544.curveMultiplier = i545[3]
  i544.constantMin = i545[4]
  i544.constantMax = i545[5]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i546 = root || new pc.MinMaxGradient()
  var i547 = data
  i546.mode = i547[0]
  i546.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i547[1], i546.gradientMin)
  i546.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i547[2], i546.gradientMax)
  i546.colorMin = new pc.Color(i547[3], i547[4], i547[5], i547[6])
  i546.colorMax = new pc.Color(i547[7], i547[8], i547[9], i547[10])
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i549 = data
  i548.mode = i549[0]
  var i551 = i549[1]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i551[i + 0]) );
  }
  i548.colorKeys = i550
  var i553 = i549[2]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i553[i + 0]) );
  }
  i548.alphaKeys = i552
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemColorBySpeed()
  var i555 = data
  i554.enabled = !!i555[0]
  i554.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i555[1], i554.color)
  i554.range = new pc.Vec2( i555[2], i555[3] )
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i559 = data
  i558.color = new pc.Color(i559[0], i559[1], i559[2], i559[3])
  i558.time = i559[4]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i563 = data
  i562.alpha = i563[0]
  i562.time = i563[1]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemColorOverLifetime()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i565[1], i564.color)
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemEmitter()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[1], i566.rateOverTime)
  i566.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[2], i566.rateOverDistance)
  var i569 = i567[3]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i569[i + 0]) );
  }
  i566.bursts = i568
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemBurst()
  var i573 = data
  i572.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[0], i572.count)
  i572.cycleCount = i573[1]
  i572.minCount = i573[2]
  i572.maxCount = i573[3]
  i572.repeatInterval = i573[4]
  i572.time = i573[5]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemRotationBySpeed()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[1], i574.x)
  i574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.y)
  i574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.z)
  i574.separateAxes = !!i575[4]
  i574.range = new pc.Vec2( i575[5], i575[6] )
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemRotationOverLifetime()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[1], i576.x)
  i576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.y)
  i576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[3], i576.z)
  i576.separateAxes = !!i577[4]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemShape()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.shapeType = i579[1]
  i578.randomDirectionAmount = i579[2]
  i578.sphericalDirectionAmount = i579[3]
  i578.randomPositionAmount = i579[4]
  i578.alignToDirection = !!i579[5]
  i578.radius = i579[6]
  i578.radiusMode = i579[7]
  i578.radiusSpread = i579[8]
  i578.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[9], i578.radiusSpeed)
  i578.radiusThickness = i579[10]
  i578.angle = i579[11]
  i578.length = i579[12]
  i578.boxThickness = new pc.Vec3( i579[13], i579[14], i579[15] )
  i578.meshShapeType = i579[16]
  request.r(i579[17], i579[18], 0, i578, 'mesh')
  request.r(i579[19], i579[20], 0, i578, 'meshRenderer')
  request.r(i579[21], i579[22], 0, i578, 'skinnedMeshRenderer')
  i578.useMeshMaterialIndex = !!i579[23]
  i578.meshMaterialIndex = i579[24]
  i578.useMeshColors = !!i579[25]
  i578.normalOffset = i579[26]
  i578.arc = i579[27]
  i578.arcMode = i579[28]
  i578.arcSpread = i579[29]
  i578.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[30], i578.arcSpeed)
  i578.donutRadius = i579[31]
  i578.position = new pc.Vec3( i579[32], i579[33], i579[34] )
  i578.rotation = new pc.Vec3( i579[35], i579[36], i579[37] )
  i578.scale = new pc.Vec3( i579[38], i579[39], i579[40] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemSizeBySpeed()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[1], i580.x)
  i580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[2], i580.y)
  i580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[3], i580.z)
  i580.separateAxes = !!i581[4]
  i580.range = new pc.Vec2( i581[5], i581[6] )
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemSizeOverLifetime()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[1], i582.x)
  i582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[2], i582.y)
  i582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[3], i582.z)
  i582.separateAxes = !!i583[4]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i585 = data
  i584.enabled = !!i585[0]
  i584.mode = i585[1]
  i584.animation = i585[2]
  i584.numTilesX = i585[3]
  i584.numTilesY = i585[4]
  i584.useRandomRow = !!i585[5]
  i584.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[6], i584.frameOverTime)
  i584.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[7], i584.startFrame)
  i584.cycleCount = i585[8]
  i584.rowIndex = i585[9]
  i584.flipU = i585[10]
  i584.flipV = i585[11]
  i584.spriteCount = i585[12]
  var i587 = i585[13]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i584.sprites = i586
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[1], i590.x)
  i590.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.y)
  i590.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.z)
  i590.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[4], i590.radial)
  i590.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[5], i590.speedModifier)
  i590.space = i591[6]
  i590.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[7], i590.orbitalX)
  i590.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[8], i590.orbitalY)
  i590.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[9], i590.orbitalZ)
  i590.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[10], i590.orbitalOffsetX)
  i590.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[11], i590.orbitalOffsetY)
  i590.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[12], i590.orbitalOffsetZ)
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemNoise()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.separateAxes = !!i593[1]
  i592.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.strengthX)
  i592.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[3], i592.strengthY)
  i592.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[4], i592.strengthZ)
  i592.frequency = i593[5]
  i592.damping = !!i593[6]
  i592.octaveCount = i593[7]
  i592.octaveMultiplier = i593[8]
  i592.octaveScale = i593[9]
  i592.quality = i593[10]
  i592.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[11], i592.scrollSpeed)
  i592.scrollSpeedMultiplier = i593[12]
  i592.remapEnabled = !!i593[13]
  i592.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[14], i592.remapX)
  i592.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[15], i592.remapY)
  i592.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[16], i592.remapZ)
  i592.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[17], i592.positionAmount)
  i592.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[18], i592.rotationAmount)
  i592.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[19], i592.sizeAmount)
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemInheritVelocity()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.mode = i595[1]
  i594.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[2], i594.curve)
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemForceOverLifetime()
  var i597 = data
  i596.enabled = !!i597[0]
  i596.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[1], i596.x)
  i596.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[2], i596.y)
  i596.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[3], i596.z)
  i596.space = i597[4]
  i596.randomized = !!i597[5]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i598 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i599 = data
  i598.enabled = !!i599[0]
  i598.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[1], i598.limit)
  i598.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[2], i598.limitX)
  i598.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[3], i598.limitY)
  i598.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[4], i598.limitZ)
  i598.dampen = i599[5]
  i598.separateAxes = !!i599[6]
  i598.space = i599[7]
  i598.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i599[8], i598.drag)
  i598.multiplyDragByParticleSize = !!i599[9]
  i598.multiplyDragByParticleVelocity = !!i599[10]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i601 = data
  i600.enabled = !!i601[0]
  request.r(i601[1], i601[2], 0, i600, 'sharedMaterial')
  var i603 = i601[3]
  var i602 = []
  for(var i = 0; i < i603.length; i += 2) {
  request.r(i603[i + 0], i603[i + 1], 2, i602, '')
  }
  i600.sharedMaterials = i602
  i600.receiveShadows = !!i601[4]
  i600.shadowCastingMode = i601[5]
  i600.sortingLayerID = i601[6]
  i600.sortingOrder = i601[7]
  i600.lightmapIndex = i601[8]
  i600.lightmapSceneIndex = i601[9]
  i600.lightmapScaleOffset = new pc.Vec4( i601[10], i601[11], i601[12], i601[13] )
  i600.lightProbeUsage = i601[14]
  i600.reflectionProbeUsage = i601[15]
  request.r(i601[16], i601[17], 0, i600, 'mesh')
  i600.meshCount = i601[18]
  i600.activeVertexStreamsCount = i601[19]
  i600.alignment = i601[20]
  i600.renderMode = i601[21]
  i600.sortMode = i601[22]
  i600.lengthScale = i601[23]
  i600.velocityScale = i601[24]
  i600.cameraVelocityScale = i601[25]
  i600.normalDirection = i601[26]
  i600.sortingFudge = i601[27]
  i600.minParticleSize = i601[28]
  i600.maxParticleSize = i601[29]
  i600.pivot = new pc.Vec3( i601[30], i601[31], i601[32] )
  request.r(i601[33], i601[34], 0, i600, 'trailMaterial')
  return i600
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i604 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i605 = data
  i604.OnlyDeactivate = !!i605[0]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'clip')
  request.r(i607[2], i607[3], 0, i606, 'outputAudioMixerGroup')
  i606.playOnAwake = !!i607[4]
  i606.loop = !!i607[5]
  i606.time = i607[6]
  i606.volume = i607[7]
  i606.pitch = i607[8]
  i606.enabled = !!i607[9]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i609 = data
  i608.mass = i609[0]
  i608.drag = i609[1]
  i608.angularDrag = i609[2]
  i608.useGravity = !!i609[3]
  i608.isKinematic = !!i609[4]
  i608.constraints = i609[5]
  i608.maxAngularVelocity = i609[6]
  i608.collisionDetectionMode = i609[7]
  i608.interpolation = i609[8]
  return i608
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i610 = root || request.c( 'Howitzer.Projectile' )
  var i611 = data
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i613 = data
  i612.center = new pc.Vec3( i613[0], i613[1], i613[2] )
  i612.radius = i613[3]
  i612.height = i613[4]
  i612.direction = i613[5]
  i612.enabled = !!i613[6]
  i612.isTrigger = !!i613[7]
  request.r(i613[8], i613[9], 0, i612, 'material')
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i615 = data
  i614.center = new pc.Vec3( i615[0], i615[1], i615[2] )
  i614.size = new pc.Vec3( i615[3], i615[4], i615[5] )
  i614.enabled = !!i615[6]
  i614.isTrigger = !!i615[7]
  request.r(i615[8], i615[9], 0, i614, 'material')
  return i614
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i616 = root || request.c( 'BehaviourAI.TankAI' )
  var i617 = data
  i616.stopDistance = i617[0]
  i616.rotationSpeed = i617[1]
  i616.moveSpeed = i617[2]
  request.r(i617[3], i617[4], 0, i616, '_exclamationMark')
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i619 = data
  i618.enabled = !!i619[0]
  i618.planeDistance = i619[1]
  i618.referencePixelsPerUnit = i619[2]
  i618.isFallbackOverlay = !!i619[3]
  i618.renderMode = i619[4]
  i618.renderOrder = i619[5]
  i618.sortingLayerName = i619[6]
  i618.sortingOrder = i619[7]
  i618.scaleFactor = i619[8]
  request.r(i619[9], i619[10], 0, i618, 'worldCamera')
  i618.overrideSorting = !!i619[11]
  i618.pixelPerfect = !!i619[12]
  i618.targetDisplay = i619[13]
  i618.overridePixelPerfect = !!i619[14]
  return i618
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i621 = data
  i620.m_UiScaleMode = i621[0]
  i620.m_ReferencePixelsPerUnit = i621[1]
  i620.m_ScaleFactor = i621[2]
  i620.m_ReferenceResolution = new pc.Vec2( i621[3], i621[4] )
  i620.m_ScreenMatchMode = i621[5]
  i620.m_MatchWidthOrHeight = i621[6]
  i620.m_PhysicalUnit = i621[7]
  i620.m_FallbackScreenDPI = i621[8]
  i620.m_DefaultSpriteDPI = i621[9]
  i620.m_DynamicPixelsPerUnit = i621[10]
  i620.m_PresetInfoIsWorld = !!i621[11]
  return i620
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i623 = data
  i622.m_IgnoreReversedGraphics = !!i623[0]
  i622.m_BlockingObjects = i623[1]
  i622.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i623[2] )
  return i622
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i624 = root || request.c( 'ExclamationMark' )
  var i625 = data
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
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
  i626.color = new pc.Color(i627[16], i627[17], i627[18], i627[19])
  request.r(i627[20], i627[21], 0, i626, 'sprite')
  i626.flipX = !!i627[22]
  i626.flipY = !!i627[23]
  i626.drawMode = i627[24]
  i626.size = new pc.Vec2( i627[25], i627[26] )
  i626.tileMode = i627[27]
  i626.adaptiveModeThreshold = i627[28]
  i626.maskInteraction = i627[29]
  i626.spriteSortPoint = i627[30]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i631 = data
  i630.enabled = !!i631[0]
  i630.isTrigger = !!i631[1]
  request.r(i631[2], i631[3], 0, i630, 'material')
  request.r(i631[4], i631[5], 0, i630, 'sharedMesh')
  i630.convex = !!i631[6]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i633 = data
  i632.name = i633[0]
  i632.atlasId = i633[1]
  i632.mipmapCount = i633[2]
  i632.hdr = !!i633[3]
  i632.size = i633[4]
  i632.anisoLevel = i633[5]
  i632.filterMode = i633[6]
  var i635 = i633[7]
  var i634 = []
  for(var i = 0; i < i635.length; i += 4) {
    i634.push( UnityEngine.Rect.MinMaxRect(i635[i + 0], i635[i + 1], i635[i + 2], i635[i + 3]) );
  }
  i632.rects = i634
  i632.wrapU = i633[8]
  i632.wrapV = i633[9]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i639 = data
  i638.name = i639[0]
  i638.index = i639[1]
  i638.startup = !!i639[2]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i641 = data
  i640.enabled = !!i641[0]
  i640.aspect = i641[1]
  i640.orthographic = !!i641[2]
  i640.orthographicSize = i641[3]
  i640.backgroundColor = new pc.Color(i641[4], i641[5], i641[6], i641[7])
  i640.nearClipPlane = i641[8]
  i640.farClipPlane = i641[9]
  i640.fieldOfView = i641[10]
  i640.depth = i641[11]
  i640.clearFlags = i641[12]
  i640.cullingMask = i641[13]
  i640.rect = i641[14]
  request.r(i641[15], i641[16], 0, i640, 'targetTexture')
  i640.usePhysicalProperties = !!i641[17]
  i640.focalLength = i641[18]
  i640.sensorSize = new pc.Vec2( i641[19], i641[20] )
  i640.lensShift = new pc.Vec2( i641[21], i641[22] )
  i640.gateFit = i641[23]
  i640.commandBufferCount = i641[24]
  i640.cameraType = i641[25]
  return i640
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i642 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'joystick')
  i642.minYAngle = i643[2]
  i642.maxYAngle = i643[3]
  i642.rotationSpeed = i643[4]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i645 = data
  i644.enabled = !!i645[0]
  i644.type = i645[1]
  i644.color = new pc.Color(i645[2], i645[3], i645[4], i645[5])
  i644.cullingMask = i645[6]
  i644.intensity = i645[7]
  i644.range = i645[8]
  i644.spotAngle = i645[9]
  i644.shadows = i645[10]
  i644.shadowNormalBias = i645[11]
  i644.shadowBias = i645[12]
  i644.shadowStrength = i645[13]
  i644.shadowResolution = i645[14]
  i644.lightmapBakeType = i645[15]
  i644.renderMode = i645[16]
  request.r(i645[17], i645[18], 0, i644, 'cookie')
  i644.cookieSize = i645[19]
  return i644
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i646 = root || request.c( 'Howitzer.LookAtReticle' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'reticle')
  request.r(i647[2], i647[3], 0, i646, 'mainCamera')
  i646.rotationSpeed = i647[4]
  i646.maxPitchAngle = i647[5]
  i646.minPitchAngle = i647[6]
  return i646
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i648 = root || request.c( 'FollowBullet' )
  var i649 = data
  i648._smoothSpeed = i649[0]
  i648._offset = new pc.Vec3( i649[1], i649[2], i649[3] )
  return i648
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i650 = root || request.c( 'UI.PlayerUIController' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'shootButton')
  request.r(i651[2], i651[3], 0, i650, 'zoomButton')
  request.r(i651[4], i651[5], 0, i650, '_cross')
  request.r(i651[6], i651[7], 0, i650, '_mark')
  request.r(i651[8], i651[9], 0, i650, '_tutorialHand2')
  return i650
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i652 = root || request.c( 'Howitzer.PlayerZoom' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'crosshair')
  request.r(i653[2], i653[3], 0, i652, 'mainCamera')
  request.r(i653[4], i653[5], 0, i652, 'zoomImage')
  var i655 = i653[6]
  var i654 = []
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 2, i654, '')
  }
  i652.objectsToDisable = i654
  i652.zoomFOV = i653[7]
  i652.normalFOV = i653[8]
  i652.zoomSpeed = i653[9]
  request.r(i653[10], i653[11], 0, i652, 'joystick')
  i652.rotationSpeed = i653[12]
  return i652
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i658 = root || request.c( 'Howitzer.PlayerShooting' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'playerShootingCooldown')
  request.r(i659[2], i659[3], 0, i658, 'mainCamera')
  request.r(i659[4], i659[5], 0, i658, 'crosshairUI')
  request.r(i659[6], i659[7], 0, i658, 'muzzleFlash')
  request.r(i659[8], i659[9], 0, i658, 'explosionEffect')
  request.r(i659[10], i659[11], 0, i658, 'projectilePosition')
  request.r(i659[12], i659[13], 0, i658, 'prefabProjectile')
  i658.projectileSpeed = i659[14]
  i658.poolSize = i659[15]
  request.r(i659[16], i659[17], 0, i658, '_followBullet')
  request.r(i659[18], i659[19], 0, i658, '_managerCamers')
  request.r(i659[20], i659[21], 0, i658, '_timeController')
  request.r(i659[22], i659[23], 0, i658, '_playerUIController')
  request.r(i659[24], i659[25], 0, i658, '_tanksFabric')
  request.r(i659[26], i659[27], 0, i658, '_missPoint')
  return i658
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i660 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'shootButton')
  request.r(i661[2], i661[3], 0, i660, 'cooldownText')
  request.r(i661[4], i661[5], 0, i660, 'cooldownImage')
  i660.cooldownTime = i661[6]
  return i660
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.Button' )
  var i663 = data
  i662.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i663[0], i662.m_OnClick)
  i662.m_Navigation = request.d('UnityEngine.UI.Navigation', i663[1], i662.m_Navigation)
  i662.m_Transition = i663[2]
  i662.m_Colors = request.d('UnityEngine.UI.ColorBlock', i663[3], i662.m_Colors)
  i662.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i663[4], i662.m_SpriteState)
  i662.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i663[5], i662.m_AnimationTriggers)
  i662.m_Interactable = !!i663[6]
  request.r(i663[7], i663[8], 0, i662, 'm_TargetGraphic')
  return i662
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i665 = data
  i664.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i665[0], i664.m_PersistentCalls)
  return i664
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i667 = data
  var i669 = i667[0]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i669.length; i += 1) {
    i668.add(request.d('UnityEngine.Events.PersistentCall', i669[i + 0]));
  }
  i666.m_Calls = i668
  return i666
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'm_Target')
  i672.m_TargetAssemblyTypeName = i673[2]
  i672.m_MethodName = i673[3]
  i672.m_Mode = i673[4]
  i672.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i673[5], i672.m_Arguments)
  i672.m_CallState = i673[6]
  return i672
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i675 = data
  i674.m_Mode = i675[0]
  i674.m_WrapAround = !!i675[1]
  request.r(i675[2], i675[3], 0, i674, 'm_SelectOnUp')
  request.r(i675[4], i675[5], 0, i674, 'm_SelectOnDown')
  request.r(i675[6], i675[7], 0, i674, 'm_SelectOnLeft')
  request.r(i675[8], i675[9], 0, i674, 'm_SelectOnRight')
  return i674
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i677 = data
  i676.m_NormalColor = new pc.Color(i677[0], i677[1], i677[2], i677[3])
  i676.m_HighlightedColor = new pc.Color(i677[4], i677[5], i677[6], i677[7])
  i676.m_PressedColor = new pc.Color(i677[8], i677[9], i677[10], i677[11])
  i676.m_SelectedColor = new pc.Color(i677[12], i677[13], i677[14], i677[15])
  i676.m_DisabledColor = new pc.Color(i677[16], i677[17], i677[18], i677[19])
  i676.m_ColorMultiplier = i677[20]
  i676.m_FadeDuration = i677[21]
  return i676
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'm_HighlightedSprite')
  request.r(i679[2], i679[3], 0, i678, 'm_PressedSprite')
  request.r(i679[4], i679[5], 0, i678, 'm_SelectedSprite')
  request.r(i679[6], i679[7], 0, i678, 'm_DisabledSprite')
  return i678
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i681 = data
  i680.m_NormalTrigger = i681[0]
  i680.m_HighlightedTrigger = i681[1]
  i680.m_PressedTrigger = i681[2]
  i680.m_SelectedTrigger = i681[3]
  i680.m_DisabledTrigger = i681[4]
  return i680
}

Deserializers["TutorialHand2"] = function (request, data, root) {
  var i682 = root || request.c( 'TutorialHand2' )
  var i683 = data
  i682.scaleSpeed = i683[0]
  i682.scaleAmount = i683[1]
  request.r(i683[2], i683[3], 0, i682, '_shootButton')
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i685 = data
  i684.usedByComposite = !!i685[0]
  i684.autoTiling = !!i685[1]
  i684.size = new pc.Vec2( i685[2], i685[3] )
  i684.edgeRadius = i685[4]
  i684.enabled = !!i685[5]
  i684.isTrigger = !!i685[6]
  i684.usedByEffector = !!i685[7]
  i684.density = i685[8]
  i684.offset = new pc.Vec2( i685[9], i685[10] )
  request.r(i685[11], i685[12], 0, i684, 'material')
  return i684
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Text' )
  var i687 = data
  i686.m_FontData = request.d('UnityEngine.UI.FontData', i687[0], i686.m_FontData)
  i686.m_Text = i687[1]
  request.r(i687[2], i687[3], 0, i686, 'm_Material')
  i686.m_Maskable = !!i687[4]
  i686.m_Color = new pc.Color(i687[5], i687[6], i687[7], i687[8])
  i686.m_RaycastTarget = !!i687[9]
  i686.m_RaycastPadding = new pc.Vec4( i687[10], i687[11], i687[12], i687[13] )
  return i686
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.FontData' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'm_Font')
  i688.m_FontSize = i689[2]
  i688.m_FontStyle = i689[3]
  i688.m_BestFit = !!i689[4]
  i688.m_MinSize = i689[5]
  i688.m_MaxSize = i689[6]
  i688.m_Alignment = i689[7]
  i688.m_AlignByGeometry = !!i689[8]
  i688.m_RichText = !!i689[9]
  i688.m_HorizontalOverflow = i689[10]
  i688.m_VerticalOverflow = i689[11]
  i688.m_LineSpacing = i689[12]
  return i688
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i690 = root || request.c( 'TutorialHand' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'handImage')
  i690.moveDistance = i691[2]
  i690.moveDuration = i691[3]
  request.r(i691[4], i691[5], 0, i690, '_tutorialHand2')
  request.r(i691[6], i691[7], 0, i690, '_shootButton')
  request.r(i691[8], i691[9], 0, i690, '_zoomButton')
  return i690
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i692 = root || request.c( 'UI.CrosshairMovement' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'joystick')
  request.r(i693[2], i693[3], 0, i692, 'crosshair')
  i692.moveSpeed = i693[4]
  request.r(i693[5], i693[6], 0, i692, 'canvasRect')
  return i692
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i694 = root || request.c( 'UI.EndCardAnimation' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'background')
  request.r(i695[2], i695[3], 0, i694, 'title')
  request.r(i695[4], i695[5], 0, i694, 'logoAndButton')
  request.r(i695[6], i695[7], 0, i694, 'titleText')
  i694.fadeDuration = i695[8]
  i694.scaleDuration = i695[9]
  i694.scaleEase = i695[10]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i697 = data
  i696.m_Alpha = i697[0]
  i696.m_Interactable = !!i697[1]
  i696.m_BlocksRaycasts = !!i697[2]
  i696.m_IgnoreParentGroups = !!i697[3]
  i696.enabled = !!i697[4]
  return i696
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i699 = data
  i698.m_AspectMode = i699[0]
  i698.m_AspectRatio = i699[1]
  return i698
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i700 = root || request.c( 'UI.ButtonPulse' )
  var i701 = data
  i700.scaleMultiplier = i701[0]
  i700.duration = i701[1]
  return i700
}

Deserializers["Cross"] = function (request, data, root) {
  var i702 = root || request.c( 'Cross' )
  var i703 = data
  return i702
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_FirstSelected')
  i704.m_sendNavigationEvents = !!i705[2]
  i704.m_DragThreshold = i705[3]
  return i704
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i707 = data
  i706.m_HorizontalAxis = i707[0]
  i706.m_VerticalAxis = i707[1]
  i706.m_SubmitButton = i707[2]
  i706.m_CancelButton = i707[3]
  i706.m_InputActionsPerSecond = i707[4]
  i706.m_RepeatDelay = i707[5]
  i706.m_ForceModuleActive = !!i707[6]
  i706.m_SendPointerHoverToParent = !!i707[7]
  return i706
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i708 = root || request.c( 'Bootstraps.Bootstrap' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'tanksFabric')
  request.r(i709[2], i709[3], 0, i708, 'scenarioGame')
  return i708
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i710 = root || request.c( 'Fabric.TanksFabric' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'tankPrefab')
  var i713 = i711[2]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 1, i712, '')
  }
  i710.spawnPoints = i712
  var i715 = i711[3]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i710.targets = i714
  return i710
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i720 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'endCard')
  return i720
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i722 = root || request.c( 'UI.TankKillStatistics' )
  var i723 = data
  return i722
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i724 = root || request.c( 'ManagerCamers' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, '_plauerCamera')
  request.r(i725[2], i725[3], 0, i724, '_bulletCamera')
  request.r(i725[4], i725[5], 0, i724, '_timeController')
  request.r(i725[6], i725[7], 0, i724, '_playerZoom')
  return i724
}

Deserializers["TimeController"] = function (request, data, root) {
  var i726 = root || request.c( 'TimeController' )
  var i727 = data
  i726.slowMotionScale = i727[0]
  i726.slowMotionDuration = i727[1]
  i726.restoreSpeedDuration = i727[2]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i729 = data
  i728.ambientIntensity = i729[0]
  i728.reflectionIntensity = i729[1]
  i728.ambientMode = i729[2]
  i728.ambientLight = new pc.Color(i729[3], i729[4], i729[5], i729[6])
  i728.ambientSkyColor = new pc.Color(i729[7], i729[8], i729[9], i729[10])
  i728.ambientGroundColor = new pc.Color(i729[11], i729[12], i729[13], i729[14])
  i728.ambientEquatorColor = new pc.Color(i729[15], i729[16], i729[17], i729[18])
  i728.fogColor = new pc.Color(i729[19], i729[20], i729[21], i729[22])
  i728.fogEndDistance = i729[23]
  i728.fogStartDistance = i729[24]
  i728.fogDensity = i729[25]
  i728.fog = !!i729[26]
  request.r(i729[27], i729[28], 0, i728, 'skybox')
  i728.fogMode = i729[29]
  var i731 = i729[30]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i731[i + 0]) );
  }
  i728.lightmaps = i730
  i728.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i729[31], i728.lightProbes)
  i728.lightmapsMode = i729[32]
  i728.mixedBakeMode = i729[33]
  i728.environmentLightingMode = i729[34]
  i728.ambientProbe = new pc.SphericalHarmonicsL2(i729[35])
  i728.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i729[36])
  i728.useReferenceAmbientProbe = !!i729[37]
  request.r(i729[38], i729[39], 0, i728, 'customReflection')
  request.r(i729[40], i729[41], 0, i728, 'defaultReflection')
  i728.defaultReflectionMode = i729[42]
  i728.defaultReflectionResolution = i729[43]
  i728.sunLightObjectId = i729[44]
  i728.pixelLightCount = i729[45]
  i728.defaultReflectionHDR = !!i729[46]
  i728.hasLightDataAsset = !!i729[47]
  i728.hasManualGenerate = !!i729[48]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'lightmapColor')
  request.r(i735[2], i735[3], 0, i734, 'lightmapDirection')
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i736 = root || new UnityEngine.LightProbes()
  var i737 = data
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i745 = data
  var i747 = i745[0]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i747[i + 0]));
  }
  i744.ShaderCompilationErrors = i746
  i744.name = i745[1]
  i744.guid = i745[2]
  var i749 = i745[3]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i744.shaderDefinedKeywords = i748
  var i751 = i745[4]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i751[i + 0]) );
  }
  i744.passes = i750
  var i753 = i745[5]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i753[i + 0]) );
  }
  i744.usePasses = i752
  var i755 = i745[6]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i755[i + 0]) );
  }
  i744.defaultParameterValues = i754
  request.r(i745[7], i745[8], 0, i744, 'unityFallbackShader')
  i744.readDepth = !!i745[9]
  i744.isCreatedByShaderGraph = !!i745[10]
  i744.compiled = !!i745[11]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i759 = data
  i758.shaderName = i759[0]
  i758.errorMessage = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i764 = root || new pc.UnityShaderPass()
  var i765 = data
  i764.id = i765[0]
  i764.subShaderIndex = i765[1]
  i764.name = i765[2]
  i764.passType = i765[3]
  i764.grabPassTextureName = i765[4]
  i764.usePass = !!i765[5]
  i764.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[6], i764.zTest)
  i764.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[7], i764.zWrite)
  i764.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[8], i764.culling)
  i764.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i765[9], i764.blending)
  i764.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i765[10], i764.alphaBlending)
  i764.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[11], i764.colorWriteMask)
  i764.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[12], i764.offsetUnits)
  i764.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[13], i764.offsetFactor)
  i764.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[14], i764.stencilRef)
  i764.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[15], i764.stencilReadMask)
  i764.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[16], i764.stencilWriteMask)
  i764.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i765[17], i764.stencilOp)
  i764.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i765[18], i764.stencilOpFront)
  i764.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i765[19], i764.stencilOpBack)
  var i767 = i765[20]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i767[i + 0]) );
  }
  i764.tags = i766
  var i769 = i765[21]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( i769[i + 0] );
  }
  i764.passDefinedKeywords = i768
  var i771 = i765[22]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i771[i + 0]) );
  }
  i764.passDefinedKeywordGroups = i770
  var i773 = i765[23]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i773[i + 0]) );
  }
  i764.variants = i772
  var i775 = i765[24]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i775[i + 0]) );
  }
  i764.excludedVariants = i774
  i764.hasDepthReader = !!i765[25]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i777 = data
  i776.val = i777[0]
  i776.name = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i779 = data
  i778.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[0], i778.src)
  i778.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[1], i778.dst)
  i778.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[2], i778.op)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i781 = data
  i780.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[0], i780.pass)
  i780.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[1], i780.fail)
  i780.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[2], i780.zFail)
  i780.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i781[3], i780.comp)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i785 = data
  i784.name = i785[0]
  i784.value = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i789 = data
  var i791 = i789[0]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( i791[i + 0] );
  }
  i788.keywords = i790
  i788.hasDiscard = !!i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i795 = data
  i794.passId = i795[0]
  i794.subShaderIndex = i795[1]
  var i797 = i795[2]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i794.keywords = i796
  i794.vertexProgram = i795[3]
  i794.fragmentProgram = i795[4]
  i794.exportedForWebGl2 = !!i795[5]
  i794.readDepth = !!i795[6]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'shader')
  i800.pass = i801[2]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i805 = data
  i804.name = i805[0]
  i804.type = i805[1]
  i804.value = new pc.Vec4( i805[2], i805[3], i805[4], i805[5] )
  i804.textureValue = i805[6]
  i804.shaderPropertyFlag = i805[7]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i807 = data
  i806.name = i807[0]
  request.r(i807[1], i807[2], 0, i806, 'texture')
  i806.aabb = i807[3]
  i806.vertices = i807[4]
  i806.triangles = i807[5]
  i806.textureRect = UnityEngine.Rect.MinMaxRect(i807[6], i807[7], i807[8], i807[9])
  i806.packedRect = UnityEngine.Rect.MinMaxRect(i807[10], i807[11], i807[12], i807[13])
  i806.border = new pc.Vec4( i807[14], i807[15], i807[16], i807[17] )
  i806.transparency = i807[18]
  i806.bounds = i807[19]
  i806.pixelsPerUnit = i807[20]
  i806.textureWidth = i807[21]
  i806.textureHeight = i807[22]
  i806.nativeSize = new pc.Vec2( i807[23], i807[24] )
  i806.pivot = new pc.Vec2( i807[25], i807[26] )
  i806.textureRectOffset = new pc.Vec2( i807[27], i807[28] )
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i809 = data
  i808.name = i809[0]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i811 = data
  i810.name = i811[0]
  i810.ascent = i811[1]
  i810.originalLineHeight = i811[2]
  i810.fontSize = i811[3]
  var i813 = i811[4]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i813[i + 0]) );
  }
  i810.characterInfo = i812
  request.r(i811[5], i811[6], 0, i810, 'texture')
  i810.originalFontSize = i811[7]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i817 = data
  i816.index = i817[0]
  i816.advance = i817[1]
  i816.bearing = i817[2]
  i816.glyphWidth = i817[3]
  i816.glyphHeight = i817[4]
  i816.minX = i817[5]
  i816.maxX = i817[6]
  i816.minY = i817[7]
  i816.maxY = i817[8]
  i816.uvBottomLeftX = i817[9]
  i816.uvBottomLeftY = i817[10]
  i816.uvBottomRightX = i817[11]
  i816.uvBottomRightY = i817[12]
  i816.uvTopLeftX = i817[13]
  i816.uvTopLeftY = i817[14]
  i816.uvTopRightX = i817[15]
  i816.uvTopRightY = i817[16]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i819 = data
  var i821 = i819[0]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i821[i + 0]) );
  }
  i818.files = i820
  i818.componentToPrefabIds = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i825 = data
  i824.path = i825[0]
  request.r(i825[1], i825[2], 0, i824, 'unityObject')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i827 = data
  var i829 = i827[0]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i829[i + 0]) );
  }
  i826.scriptsExecutionOrder = i828
  var i831 = i827[1]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i831[i + 0]) );
  }
  i826.sortingLayers = i830
  var i833 = i827[2]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i833[i + 0]) );
  }
  i826.cullingLayers = i832
  i826.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i827[3], i826.timeSettings)
  i826.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i827[4], i826.physicsSettings)
  i826.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i827[5], i826.physics2DSettings)
  i826.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i827[6], i826.qualitySettings)
  i826.enableRealtimeShadows = !!i827[7]
  i826.enableAutoInstancing = !!i827[8]
  i826.enableDynamicBatching = !!i827[9]
  i826.lightmapEncodingQuality = i827[10]
  i826.desiredColorSpace = i827[11]
  var i835 = i827[12]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( i835[i + 0] );
  }
  i826.allTags = i834
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i839 = data
  i838.name = i839[0]
  i838.value = i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i843 = data
  i842.id = i843[0]
  i842.name = i843[1]
  i842.value = i843[2]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i847 = data
  i846.id = i847[0]
  i846.name = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i849 = data
  i848.fixedDeltaTime = i849[0]
  i848.maximumDeltaTime = i849[1]
  i848.timeScale = i849[2]
  i848.maximumParticleTimestep = i849[3]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i851 = data
  i850.gravity = new pc.Vec3( i851[0], i851[1], i851[2] )
  i850.defaultSolverIterations = i851[3]
  i850.bounceThreshold = i851[4]
  i850.autoSyncTransforms = !!i851[5]
  i850.autoSimulation = !!i851[6]
  var i853 = i851[7]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i853[i + 0]) );
  }
  i850.collisionMatrix = i852
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i857 = data
  i856.enabled = !!i857[0]
  i856.layerId = i857[1]
  i856.otherLayerId = i857[2]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'material')
  i858.gravity = new pc.Vec2( i859[2], i859[3] )
  i858.positionIterations = i859[4]
  i858.velocityIterations = i859[5]
  i858.velocityThreshold = i859[6]
  i858.maxLinearCorrection = i859[7]
  i858.maxAngularCorrection = i859[8]
  i858.maxTranslationSpeed = i859[9]
  i858.maxRotationSpeed = i859[10]
  i858.baumgarteScale = i859[11]
  i858.baumgarteTOIScale = i859[12]
  i858.timeToSleep = i859[13]
  i858.linearSleepTolerance = i859[14]
  i858.angularSleepTolerance = i859[15]
  i858.defaultContactOffset = i859[16]
  i858.autoSimulation = !!i859[17]
  i858.queriesHitTriggers = !!i859[18]
  i858.queriesStartInColliders = !!i859[19]
  i858.callbacksOnDisable = !!i859[20]
  i858.reuseCollisionCallbacks = !!i859[21]
  i858.autoSyncTransforms = !!i859[22]
  var i861 = i859[23]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i861[i + 0]) );
  }
  i858.collisionMatrix = i860
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i865 = data
  i864.enabled = !!i865[0]
  i864.layerId = i865[1]
  i864.otherLayerId = i865[2]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i867 = data
  var i869 = i867[0]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i869[i + 0]) );
  }
  i866.qualityLevels = i868
  var i871 = i867[1]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i866.names = i870
  i866.shadows = i867[2]
  i866.anisotropicFiltering = i867[3]
  i866.antiAliasing = i867[4]
  i866.lodBias = i867[5]
  i866.shadowCascades = i867[6]
  i866.shadowDistance = i867[7]
  i866.shadowmaskMode = i867[8]
  i866.shadowProjection = i867[9]
  i866.shadowResolution = i867[10]
  i866.softParticles = !!i867[11]
  i866.softVegetation = !!i867[12]
  i866.activeColorSpace = i867[13]
  i866.desiredColorSpace = i867[14]
  i866.masterTextureLimit = i867[15]
  i866.maxQueuedFrames = i867[16]
  i866.particleRaycastBudget = i867[17]
  i866.pixelLightCount = i867[18]
  i866.realtimeReflectionProbes = !!i867[19]
  i866.shadowCascade2Split = i867[20]
  i866.shadowCascade4Split = new pc.Vec3( i867[21], i867[22], i867[23] )
  i866.streamingMipmapsActive = !!i867[24]
  i866.vSyncCount = i867[25]
  i866.asyncUploadBufferSize = i867[26]
  i866.asyncUploadTimeSlice = i867[27]
  i866.billboardsFaceCameraPosition = !!i867[28]
  i866.shadowNearPlaneOffset = i867[29]
  i866.streamingMipmapsMemoryBudget = i867[30]
  i866.maximumLODLevel = i867[31]
  i866.streamingMipmapsAddAllCameras = !!i867[32]
  i866.streamingMipmapsMaxLevelReduction = i867[33]
  i866.streamingMipmapsRenderersPerFrame = i867[34]
  i866.resolutionScalingFixedDPIFactor = i867[35]
  i866.streamingMipmapsMaxFileIORequests = i867[36]
  i866.currentQualityLevel = i867[37]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i877 = data
  i876.weight = i877[0]
  i876.vertices = i877[1]
  i876.normals = i877[2]
  i876.tangents = i877[3]
  return i876
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'm_ObjectArgument')
  i878.m_ObjectArgumentAssemblyTypeName = i879[2]
  i878.m_IntArgument = i879[3]
  i878.m_FloatArgument = i879[4]
  i878.m_StringArgument = i879[5]
  i878.m_BoolArgument = !!i879[6]
  return i878
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[71],"72":[32],"73":[19],"74":[19],"75":[19],"76":[19],"77":[19],"78":[19],"79":[19],"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[81],"88":[81],"89":[81],"90":[81],"91":[81],"92":[81],"93":[81],"94":[32],"95":[10],"96":[97],"98":[97],"25":[0],"99":[13],"15":[13],"100":[35],"101":[8],"102":[35],"103":[0],"104":[32],"105":[32],"106":[35],"107":[32],"108":[109],"110":[0],"111":[0],"27":[25],"3":[1,0],"56":[0],"26":[25],"112":[0],"113":[0],"114":[0],"115":[0],"116":[0],"117":[0],"118":[0],"119":[0],"120":[0],"121":[1,0],"122":[0],"123":[0],"124":[0],"125":[0],"49":[1,0],"126":[0],"127":[58],"128":[58],"59":[58],"129":[58],"130":[32],"131":[32],"132":[109],"133":[109],"134":[32],"135":[136]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","VariableJoystick","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CFX_AutoDestructShuriken","UnityEngine.Texture2D","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Rigidbody","Howitzer.Projectile","UnityEngine.CapsuleCollider","UnityEngine.BoxCollider","BehaviourAI.TankAI","ExclamationMark","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.LODGroup","UnityEngine.SpriteRenderer","UnityEngine.MeshCollider","UnityEngine.Cubemap","UnityEngine.Camera","UnityEngine.AudioListener","Howitzer.LookAtCrosshair","UnityEngine.Light","Howitzer.LookAtReticle","FollowBullet","UI.PlayerUIController","UnityEngine.UI.Button","Cross","TutorialHand2","Howitzer.PlayerZoom","UnityEngine.GameObject","Howitzer.PlayerShooting","Howitzer.PlayerShootingCooldown","ManagerCamers","TimeController","Fabric.TanksFabric","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","UnityEngine.Font","TutorialHand","UI.CrosshairMovement","UI.EndCardAnimation","UnityEngine.CanvasGroup","UnityEngine.UI.AspectRatioFitter","UI.ButtonPulse","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Bootstraps.Bootstrap","Bootstraps.ScenarioGame","UI.TankKillStatistics","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CFX_AutoStopLoopedEffect","CFX_LightIntensityFade","WFX_BulletHoleDecal","WFX_LightFlicker","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/12/2025 18:23:14";

Deserializers.lunaDaysRunning = "6.7";

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

Deserializers.buildID = "566b6f11-19bd-4537-af7d-58505303cae2";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

