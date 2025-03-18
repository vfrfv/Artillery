var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.JointSpring' )
  var i437 = data
  i436.spring = i437[0]
  i436.damper = i437[1]
  i436.targetPosition = i437[2]
  return i436
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointMotor' )
  var i439 = data
  i438.m_TargetVelocity = i439[0]
  i438.m_Force = i439[1]
  i438.m_FreeSpin = i439[2]
  return i438
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointLimits' )
  var i441 = data
  i440.m_Min = i441[0]
  i440.m_Max = i441[1]
  i440.m_Bounciness = i441[2]
  i440.m_BounceMinVelocity = i441[3]
  i440.m_ContactDistance = i441[4]
  i440.minBounce = i441[5]
  i440.maxBounce = i441[6]
  return i440
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointDrive' )
  var i443 = data
  i442.m_PositionSpring = i443[0]
  i442.m_PositionDamper = i443[1]
  i442.m_MaximumForce = i443[2]
  i442.m_UseAcceleration = i443[3]
  return i442
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i445 = data
  i444.m_Spring = i445[0]
  i444.m_Damper = i445[1]
  return i444
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i447 = data
  i446.m_Limit = i447[0]
  i446.m_Bounciness = i447[1]
  i446.m_ContactDistance = i447[2]
  return i446
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i449 = data
  i448.m_ExtremumSlip = i449[0]
  i448.m_ExtremumValue = i449[1]
  i448.m_AsymptoteSlip = i449[2]
  i448.m_AsymptoteValue = i449[3]
  i448.m_Stiffness = i449[4]
  return i448
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i451 = data
  i450.m_LowerAngle = i451[0]
  i450.m_UpperAngle = i451[1]
  return i450
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i453 = data
  i452.m_MotorSpeed = i453[0]
  i452.m_MaximumMotorTorque = i453[1]
  return i452
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i455 = data
  i454.m_DampingRatio = i455[0]
  i454.m_Frequency = i455[1]
  i454.m_Angle = i455[2]
  return i454
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i457 = data
  i456.m_LowerTranslation = i457[0]
  i456.m_UpperTranslation = i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i459 = data
  i458.pivot = new pc.Vec2( i459[0], i459[1] )
  i458.anchorMin = new pc.Vec2( i459[2], i459[3] )
  i458.anchorMax = new pc.Vec2( i459[4], i459[5] )
  i458.sizeDelta = new pc.Vec2( i459[6], i459[7] )
  i458.anchoredPosition3D = new pc.Vec3( i459[8], i459[9], i459[10] )
  i458.rotation = new pc.Quat(i459[11], i459[12], i459[13], i459[14])
  i458.scale = new pc.Vec3( i459[15], i459[16], i459[17] )
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i461 = data
  i460.cullTransparentMesh = !!i461[0]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i463 = data
  i462.name = i463[0]
  i462.tagId = i463[1]
  i462.enabled = !!i463[2]
  i462.isStatic = !!i463[3]
  i462.layer = i463[4]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i465 = data
  i464.name = i465[0]
  i464.width = i465[1]
  i464.height = i465[2]
  i464.mipmapCount = i465[3]
  i464.anisoLevel = i465[4]
  i464.filterMode = i465[5]
  i464.hdr = !!i465[6]
  i464.format = i465[7]
  i464.wrapMode = i465[8]
  i464.alphaIsTransparency = !!i465[9]
  i464.alphaSource = i465[10]
  i464.graphicsFormat = i465[11]
  i464.sRGBTexture = !!i465[12]
  i464.desiredColorSpace = i465[13]
  i464.wrapU = i465[14]
  i464.wrapV = i465[15]
  return i464
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.UI.Image' )
  var i467 = data
  request.r(i467[0], i467[1], 0, i466, 'm_Sprite')
  i466.m_Type = i467[2]
  i466.m_PreserveAspect = !!i467[3]
  i466.m_FillCenter = !!i467[4]
  i466.m_FillMethod = i467[5]
  i466.m_FillAmount = i467[6]
  i466.m_FillClockwise = !!i467[7]
  i466.m_FillOrigin = i467[8]
  i466.m_UseSpriteMesh = !!i467[9]
  i466.m_PixelsPerUnitMultiplier = i467[10]
  request.r(i467[11], i467[12], 0, i466, 'm_Material')
  i466.m_Maskable = !!i467[13]
  i466.m_Color = new pc.Color(i467[14], i467[15], i467[16], i467[17])
  i466.m_RaycastTarget = !!i467[18]
  i466.m_RaycastPadding = new pc.Vec4( i467[19], i467[20], i467[21], i467[22] )
  return i466
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i468 = root || request.c( 'VariableJoystick' )
  var i469 = data
  request.r(i469[0], i469[1], 0, i468, 'handle')
  i468.moveThreshold = i469[2]
  i468.joystickType = i469[3]
  request.r(i469[4], i469[5], 0, i468, 'background')
  i468.handleRange = i469[6]
  i468.deadZone = i469[7]
  i468.axisOptions = i469[8]
  i468.snapX = !!i469[9]
  i468.snapY = !!i469[10]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i471 = data
  i470.position = new pc.Vec3( i471[0], i471[1], i471[2] )
  i470.scale = new pc.Vec3( i471[3], i471[4], i471[5] )
  i470.rotation = new pc.Quat(i471[6], i471[7], i471[8], i471[9])
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i473 = data
  request.r(i473[0], i473[1], 0, i472, 'sharedMesh')
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'additionalVertexStreams')
  i474.enabled = !!i475[2]
  request.r(i475[3], i475[4], 0, i474, 'sharedMaterial')
  var i477 = i475[5]
  var i476 = []
  for(var i = 0; i < i477.length; i += 2) {
  request.r(i477[i + 0], i477[i + 1], 2, i476, '')
  }
  i474.sharedMaterials = i476
  i474.receiveShadows = !!i475[6]
  i474.shadowCastingMode = i475[7]
  i474.sortingLayerID = i475[8]
  i474.sortingOrder = i475[9]
  i474.lightmapIndex = i475[10]
  i474.lightmapSceneIndex = i475[11]
  i474.lightmapScaleOffset = new pc.Vec4( i475[12], i475[13], i475[14], i475[15] )
  i474.lightProbeUsage = i475[16]
  i474.reflectionProbeUsage = i475[17]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i481 = data
  i480.name = i481[0]
  i480.halfPrecision = !!i481[1]
  i480.useUInt32IndexFormat = !!i481[2]
  i480.vertexCount = i481[3]
  i480.aabb = i481[4]
  var i483 = i481[5]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( !!i483[i + 0] );
  }
  i480.streams = i482
  i480.vertices = i481[6]
  var i485 = i481[7]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i485[i + 0]) );
  }
  i480.subMeshes = i484
  var i487 = i481[8]
  var i486 = []
  for(var i = 0; i < i487.length; i += 16) {
    i486.push( new pc.Mat4().setData(i487[i + 0], i487[i + 1], i487[i + 2], i487[i + 3],  i487[i + 4], i487[i + 5], i487[i + 6], i487[i + 7],  i487[i + 8], i487[i + 9], i487[i + 10], i487[i + 11],  i487[i + 12], i487[i + 13], i487[i + 14], i487[i + 15]) );
  }
  i480.bindposes = i486
  var i489 = i481[9]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i489[i + 0]) );
  }
  i480.blendShapes = i488
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i495 = data
  i494.triangles = i495[0]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i501 = data
  i500.name = i501[0]
  var i503 = i501[1]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i503[i + 0]) );
  }
  i500.frames = i502
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i504 = root || new pc.UnityMaterial()
  var i505 = data
  i504.name = i505[0]
  request.r(i505[1], i505[2], 0, i504, 'shader')
  i504.renderQueue = i505[3]
  i504.enableInstancing = !!i505[4]
  var i507 = i505[5]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i507[i + 0]) );
  }
  i504.floatParameters = i506
  var i509 = i505[6]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i509[i + 0]) );
  }
  i504.colorParameters = i508
  var i511 = i505[7]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i511[i + 0]) );
  }
  i504.vectorParameters = i510
  var i513 = i505[8]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i513[i + 0]) );
  }
  i504.textureParameters = i512
  var i515 = i505[9]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i515[i + 0]) );
  }
  i504.materialFlags = i514
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i519 = data
  i518.name = i519[0]
  i518.value = i519[1]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i523 = data
  i522.name = i523[0]
  i522.value = new pc.Color(i523[1], i523[2], i523[3], i523[4])
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i527 = data
  i526.name = i527[0]
  i526.value = new pc.Vec4( i527[1], i527[2], i527[3], i527[4] )
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i531 = data
  i530.name = i531[0]
  request.r(i531[1], i531[2], 0, i530, 'value')
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i535 = data
  i534.name = i535[0]
  i534.enabled = !!i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i537 = data
  i536.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i537[0], i536.main)
  i536.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i537[1], i536.colorBySpeed)
  i536.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i537[2], i536.colorOverLifetime)
  i536.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i537[3], i536.emission)
  i536.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i537[4], i536.rotationBySpeed)
  i536.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i537[5], i536.rotationOverLifetime)
  i536.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i537[6], i536.shape)
  i536.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i537[7], i536.sizeBySpeed)
  i536.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i537[8], i536.sizeOverLifetime)
  i536.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i537[9], i536.textureSheetAnimation)
  i536.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i537[10], i536.velocityOverLifetime)
  i536.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i537[11], i536.noise)
  i536.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i537[12], i536.inheritVelocity)
  i536.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i537[13], i536.forceOverLifetime)
  i536.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i537[14], i536.limitVelocityOverLifetime)
  i536.useAutoRandomSeed = !!i537[15]
  i536.randomSeed = i537[16]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemMain()
  var i539 = data
  i538.duration = i539[0]
  i538.loop = !!i539[1]
  i538.prewarm = !!i539[2]
  i538.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[3], i538.startDelay)
  i538.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[4], i538.startLifetime)
  i538.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[5], i538.startSpeed)
  i538.startSize3D = !!i539[6]
  i538.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[7], i538.startSizeX)
  i538.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[8], i538.startSizeY)
  i538.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[9], i538.startSizeZ)
  i538.startRotation3D = !!i539[10]
  i538.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[11], i538.startRotationX)
  i538.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[12], i538.startRotationY)
  i538.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[13], i538.startRotationZ)
  i538.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i539[14], i538.startColor)
  i538.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[15], i538.gravityModifier)
  i538.simulationSpace = i539[16]
  request.r(i539[17], i539[18], 0, i538, 'customSimulationSpace')
  i538.simulationSpeed = i539[19]
  i538.useUnscaledTime = !!i539[20]
  i538.scalingMode = i539[21]
  i538.playOnAwake = !!i539[22]
  i538.maxParticles = i539[23]
  i538.emitterVelocityMode = i539[24]
  i538.stopAction = i539[25]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i540 = root || new pc.MinMaxCurve()
  var i541 = data
  i540.mode = i541[0]
  i540.curveMin = new pc.AnimationCurve( { keys_flow: i541[1] } )
  i540.curveMax = new pc.AnimationCurve( { keys_flow: i541[2] } )
  i540.curveMultiplier = i541[3]
  i540.constantMin = i541[4]
  i540.constantMax = i541[5]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i542 = root || new pc.MinMaxGradient()
  var i543 = data
  i542.mode = i543[0]
  i542.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i543[1], i542.gradientMin)
  i542.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i543[2], i542.gradientMax)
  i542.colorMin = new pc.Color(i543[3], i543[4], i543[5], i543[6])
  i542.colorMax = new pc.Color(i543[7], i543[8], i543[9], i543[10])
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i545 = data
  i544.mode = i545[0]
  var i547 = i545[1]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i547[i + 0]) );
  }
  i544.colorKeys = i546
  var i549 = i545[2]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i549[i + 0]) );
  }
  i544.alphaKeys = i548
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemColorBySpeed()
  var i551 = data
  i550.enabled = !!i551[0]
  i550.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i551[1], i550.color)
  i550.range = new pc.Vec2( i551[2], i551[3] )
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i555 = data
  i554.color = new pc.Color(i555[0], i555[1], i555[2], i555[3])
  i554.time = i555[4]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i559 = data
  i558.alpha = i559[0]
  i558.time = i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemColorOverLifetime()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i561[1], i560.color)
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemEmitter()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[1], i562.rateOverTime)
  i562.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[2], i562.rateOverDistance)
  var i565 = i563[3]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i565[i + 0]) );
  }
  i562.bursts = i564
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemBurst()
  var i569 = data
  i568.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[0], i568.count)
  i568.cycleCount = i569[1]
  i568.minCount = i569[2]
  i568.maxCount = i569[3]
  i568.repeatInterval = i569[4]
  i568.time = i569[5]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemRotationBySpeed()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[1], i570.x)
  i570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[2], i570.y)
  i570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[3], i570.z)
  i570.separateAxes = !!i571[4]
  i570.range = new pc.Vec2( i571[5], i571[6] )
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemRotationOverLifetime()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[1], i572.x)
  i572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.y)
  i572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[3], i572.z)
  i572.separateAxes = !!i573[4]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemShape()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.shapeType = i575[1]
  i574.randomDirectionAmount = i575[2]
  i574.sphericalDirectionAmount = i575[3]
  i574.randomPositionAmount = i575[4]
  i574.alignToDirection = !!i575[5]
  i574.radius = i575[6]
  i574.radiusMode = i575[7]
  i574.radiusSpread = i575[8]
  i574.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[9], i574.radiusSpeed)
  i574.radiusThickness = i575[10]
  i574.angle = i575[11]
  i574.length = i575[12]
  i574.boxThickness = new pc.Vec3( i575[13], i575[14], i575[15] )
  i574.meshShapeType = i575[16]
  request.r(i575[17], i575[18], 0, i574, 'mesh')
  request.r(i575[19], i575[20], 0, i574, 'meshRenderer')
  request.r(i575[21], i575[22], 0, i574, 'skinnedMeshRenderer')
  i574.useMeshMaterialIndex = !!i575[23]
  i574.meshMaterialIndex = i575[24]
  i574.useMeshColors = !!i575[25]
  i574.normalOffset = i575[26]
  i574.arc = i575[27]
  i574.arcMode = i575[28]
  i574.arcSpread = i575[29]
  i574.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[30], i574.arcSpeed)
  i574.donutRadius = i575[31]
  i574.position = new pc.Vec3( i575[32], i575[33], i575[34] )
  i574.rotation = new pc.Vec3( i575[35], i575[36], i575[37] )
  i574.scale = new pc.Vec3( i575[38], i575[39], i575[40] )
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemSizeBySpeed()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[1], i576.x)
  i576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.y)
  i576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[3], i576.z)
  i576.separateAxes = !!i577[4]
  i576.range = new pc.Vec2( i577[5], i577[6] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemSizeOverLifetime()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.x)
  i578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.y)
  i578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[3], i578.z)
  i578.separateAxes = !!i579[4]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.mode = i581[1]
  i580.animation = i581[2]
  i580.numTilesX = i581[3]
  i580.numTilesY = i581[4]
  i580.useRandomRow = !!i581[5]
  i580.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[6], i580.frameOverTime)
  i580.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[7], i580.startFrame)
  i580.cycleCount = i581[8]
  i580.rowIndex = i581[9]
  i580.flipU = i581[10]
  i580.flipV = i581[11]
  i580.spriteCount = i581[12]
  var i583 = i581[13]
  var i582 = []
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 2, i582, '')
  }
  i580.sprites = i582
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[1], i586.x)
  i586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[2], i586.y)
  i586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[3], i586.z)
  i586.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[4], i586.radial)
  i586.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[5], i586.speedModifier)
  i586.space = i587[6]
  i586.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[7], i586.orbitalX)
  i586.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[8], i586.orbitalY)
  i586.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[9], i586.orbitalZ)
  i586.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[10], i586.orbitalOffsetX)
  i586.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[11], i586.orbitalOffsetY)
  i586.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[12], i586.orbitalOffsetZ)
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemNoise()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.separateAxes = !!i589[1]
  i588.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[2], i588.strengthX)
  i588.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.strengthY)
  i588.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[4], i588.strengthZ)
  i588.frequency = i589[5]
  i588.damping = !!i589[6]
  i588.octaveCount = i589[7]
  i588.octaveMultiplier = i589[8]
  i588.octaveScale = i589[9]
  i588.quality = i589[10]
  i588.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[11], i588.scrollSpeed)
  i588.scrollSpeedMultiplier = i589[12]
  i588.remapEnabled = !!i589[13]
  i588.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[14], i588.remapX)
  i588.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[15], i588.remapY)
  i588.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[16], i588.remapZ)
  i588.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[17], i588.positionAmount)
  i588.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[18], i588.rotationAmount)
  i588.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[19], i588.sizeAmount)
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemInheritVelocity()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.mode = i591[1]
  i590.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.curve)
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemForceOverLifetime()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[1], i592.x)
  i592.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.y)
  i592.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[3], i592.z)
  i592.space = i593[4]
  i592.randomized = !!i593[5]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[1], i594.limit)
  i594.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[2], i594.limitX)
  i594.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[3], i594.limitY)
  i594.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[4], i594.limitZ)
  i594.dampen = i595[5]
  i594.separateAxes = !!i595[6]
  i594.space = i595[7]
  i594.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[8], i594.drag)
  i594.multiplyDragByParticleSize = !!i595[9]
  i594.multiplyDragByParticleVelocity = !!i595[10]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i597 = data
  i596.enabled = !!i597[0]
  request.r(i597[1], i597[2], 0, i596, 'sharedMaterial')
  var i599 = i597[3]
  var i598 = []
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 2, i598, '')
  }
  i596.sharedMaterials = i598
  i596.receiveShadows = !!i597[4]
  i596.shadowCastingMode = i597[5]
  i596.sortingLayerID = i597[6]
  i596.sortingOrder = i597[7]
  i596.lightmapIndex = i597[8]
  i596.lightmapSceneIndex = i597[9]
  i596.lightmapScaleOffset = new pc.Vec4( i597[10], i597[11], i597[12], i597[13] )
  i596.lightProbeUsage = i597[14]
  i596.reflectionProbeUsage = i597[15]
  request.r(i597[16], i597[17], 0, i596, 'mesh')
  i596.meshCount = i597[18]
  i596.activeVertexStreamsCount = i597[19]
  i596.alignment = i597[20]
  i596.renderMode = i597[21]
  i596.sortMode = i597[22]
  i596.lengthScale = i597[23]
  i596.velocityScale = i597[24]
  i596.cameraVelocityScale = i597[25]
  i596.normalDirection = i597[26]
  i596.sortingFudge = i597[27]
  i596.minParticleSize = i597[28]
  i596.maxParticleSize = i597[29]
  i596.pivot = new pc.Vec3( i597[30], i597[31], i597[32] )
  request.r(i597[33], i597[34], 0, i596, 'trailMaterial')
  return i596
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i600 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i601 = data
  i600.OnlyDeactivate = !!i601[0]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'clip')
  request.r(i603[2], i603[3], 0, i602, 'outputAudioMixerGroup')
  i602.playOnAwake = !!i603[4]
  i602.loop = !!i603[5]
  i602.time = i603[6]
  i602.volume = i603[7]
  i602.pitch = i603[8]
  i602.enabled = !!i603[9]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i605 = data
  i604.mass = i605[0]
  i604.drag = i605[1]
  i604.angularDrag = i605[2]
  i604.useGravity = !!i605[3]
  i604.isKinematic = !!i605[4]
  i604.constraints = i605[5]
  i604.maxAngularVelocity = i605[6]
  i604.collisionDetectionMode = i605[7]
  i604.interpolation = i605[8]
  return i604
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i606 = root || request.c( 'Howitzer.Projectile' )
  var i607 = data
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i609 = data
  i608.center = new pc.Vec3( i609[0], i609[1], i609[2] )
  i608.radius = i609[3]
  i608.height = i609[4]
  i608.direction = i609[5]
  i608.enabled = !!i609[6]
  i608.isTrigger = !!i609[7]
  request.r(i609[8], i609[9], 0, i608, 'material')
  return i608
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i610 = root || request.c( 'BehaviourAI.TankAI' )
  var i611 = data
  i610.stopDistance = i611[0]
  i610.rotationSpeed = i611[1]
  i610.moveSpeed = i611[2]
  request.r(i611[3], i611[4], 0, i610, '_exclamationMark')
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i613 = data
  i612.center = new pc.Vec3( i613[0], i613[1], i613[2] )
  i612.size = new pc.Vec3( i613[3], i613[4], i613[5] )
  i612.enabled = !!i613[6]
  i612.isTrigger = !!i613[7]
  request.r(i613[8], i613[9], 0, i612, 'material')
  return i612
}

Deserializers["BlinkingObject"] = function (request, data, root) {
  var i614 = root || request.c( 'BlinkingObject' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, '_tower')
  i614.blinkColor = new pc.Color(i615[2], i615[3], i615[4], i615[5])
  i614.blinkInterval = i615[6]
  i614.blinkDuration = i615[7]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i617 = data
  i616.enabled = !!i617[0]
  i616.planeDistance = i617[1]
  i616.referencePixelsPerUnit = i617[2]
  i616.isFallbackOverlay = !!i617[3]
  i616.renderMode = i617[4]
  i616.renderOrder = i617[5]
  i616.sortingLayerName = i617[6]
  i616.sortingOrder = i617[7]
  i616.scaleFactor = i617[8]
  request.r(i617[9], i617[10], 0, i616, 'worldCamera')
  i616.overrideSorting = !!i617[11]
  i616.pixelPerfect = !!i617[12]
  i616.targetDisplay = i617[13]
  i616.overridePixelPerfect = !!i617[14]
  return i616
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i619 = data
  i618.m_UiScaleMode = i619[0]
  i618.m_ReferencePixelsPerUnit = i619[1]
  i618.m_ScaleFactor = i619[2]
  i618.m_ReferenceResolution = new pc.Vec2( i619[3], i619[4] )
  i618.m_ScreenMatchMode = i619[5]
  i618.m_MatchWidthOrHeight = i619[6]
  i618.m_PhysicalUnit = i619[7]
  i618.m_FallbackScreenDPI = i619[8]
  i618.m_DefaultSpriteDPI = i619[9]
  i618.m_DynamicPixelsPerUnit = i619[10]
  i618.m_PresetInfoIsWorld = !!i619[11]
  return i618
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i621 = data
  i620.m_IgnoreReversedGraphics = !!i621[0]
  i620.m_BlockingObjects = i621[1]
  i620.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i621[2] )
  return i620
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i622 = root || request.c( 'ExclamationMark' )
  var i623 = data
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i625 = data
  i624.enabled = !!i625[0]
  request.r(i625[1], i625[2], 0, i624, 'sharedMaterial')
  var i627 = i625[3]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i624.sharedMaterials = i626
  i624.receiveShadows = !!i625[4]
  i624.shadowCastingMode = i625[5]
  i624.sortingLayerID = i625[6]
  i624.sortingOrder = i625[7]
  i624.lightmapIndex = i625[8]
  i624.lightmapSceneIndex = i625[9]
  i624.lightmapScaleOffset = new pc.Vec4( i625[10], i625[11], i625[12], i625[13] )
  i624.lightProbeUsage = i625[14]
  i624.reflectionProbeUsage = i625[15]
  i624.color = new pc.Color(i625[16], i625[17], i625[18], i625[19])
  request.r(i625[20], i625[21], 0, i624, 'sprite')
  i624.flipX = !!i625[22]
  i624.flipY = !!i625[23]
  i624.drawMode = i625[24]
  i624.size = new pc.Vec2( i625[25], i625[26] )
  i624.tileMode = i625[27]
  i624.adaptiveModeThreshold = i625[28]
  i624.maskInteraction = i625[29]
  i624.spriteSortPoint = i625[30]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i629 = data
  i628.name = i629[0]
  i628.atlasId = i629[1]
  i628.mipmapCount = i629[2]
  i628.hdr = !!i629[3]
  i628.size = i629[4]
  i628.anisoLevel = i629[5]
  i628.filterMode = i629[6]
  var i631 = i629[7]
  var i630 = []
  for(var i = 0; i < i631.length; i += 4) {
    i630.push( UnityEngine.Rect.MinMaxRect(i631[i + 0], i631[i + 1], i631[i + 2], i631[i + 3]) );
  }
  i628.rects = i630
  i628.wrapU = i629[8]
  i628.wrapV = i629[9]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i635 = data
  i634.name = i635[0]
  i634.index = i635[1]
  i634.startup = !!i635[2]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i637 = data
  i636.enabled = !!i637[0]
  i636.aspect = i637[1]
  i636.orthographic = !!i637[2]
  i636.orthographicSize = i637[3]
  i636.backgroundColor = new pc.Color(i637[4], i637[5], i637[6], i637[7])
  i636.nearClipPlane = i637[8]
  i636.farClipPlane = i637[9]
  i636.fieldOfView = i637[10]
  i636.depth = i637[11]
  i636.clearFlags = i637[12]
  i636.cullingMask = i637[13]
  i636.rect = i637[14]
  request.r(i637[15], i637[16], 0, i636, 'targetTexture')
  i636.usePhysicalProperties = !!i637[17]
  i636.focalLength = i637[18]
  i636.sensorSize = new pc.Vec2( i637[19], i637[20] )
  i636.lensShift = new pc.Vec2( i637[21], i637[22] )
  i636.gateFit = i637[23]
  i636.commandBufferCount = i637[24]
  i636.cameraType = i637[25]
  return i636
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i638 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'joystick')
  i638.minYAngle = i639[2]
  i638.maxYAngle = i639[3]
  i638.rotationSpeed = i639[4]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i641 = data
  i640.enabled = !!i641[0]
  i640.type = i641[1]
  i640.color = new pc.Color(i641[2], i641[3], i641[4], i641[5])
  i640.cullingMask = i641[6]
  i640.intensity = i641[7]
  i640.range = i641[8]
  i640.spotAngle = i641[9]
  i640.shadows = i641[10]
  i640.shadowNormalBias = i641[11]
  i640.shadowBias = i641[12]
  i640.shadowStrength = i641[13]
  i640.shadowResolution = i641[14]
  i640.lightmapBakeType = i641[15]
  i640.renderMode = i641[16]
  request.r(i641[17], i641[18], 0, i640, 'cookie')
  i640.cookieSize = i641[19]
  return i640
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i642 = root || request.c( 'Howitzer.LookAtReticle' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'reticle')
  request.r(i643[2], i643[3], 0, i642, 'mainCamera')
  i642.rotationSpeed = i643[4]
  i642.maxPitchAngle = i643[5]
  i642.minPitchAngle = i643[6]
  return i642
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i644 = root || request.c( 'FollowBullet' )
  var i645 = data
  i644._smoothSpeed = i645[0]
  i644._offset = new pc.Vec3( i645[1], i645[2], i645[3] )
  return i644
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i646 = root || request.c( 'UI.PlayerUIController' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'shootButton')
  request.r(i647[2], i647[3], 0, i646, 'zoomButton')
  request.r(i647[4], i647[5], 0, i646, '_cross')
  request.r(i647[6], i647[7], 0, i646, '_mark')
  return i646
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i648 = root || request.c( 'Howitzer.PlayerZoom' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'crosshair')
  request.r(i649[2], i649[3], 0, i648, 'mainCamera')
  request.r(i649[4], i649[5], 0, i648, 'zoomImage')
  var i651 = i649[6]
  var i650 = []
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 2, i650, '')
  }
  i648.objectsToDisable = i650
  i648.zoomFOV = i649[7]
  i648.normalFOV = i649[8]
  i648.zoomSpeed = i649[9]
  request.r(i649[10], i649[11], 0, i648, 'joystick')
  i648.rotationSpeed = i649[12]
  return i648
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i654 = root || request.c( 'Howitzer.PlayerShooting' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'playerShootingCooldown')
  request.r(i655[2], i655[3], 0, i654, 'mainCamera')
  request.r(i655[4], i655[5], 0, i654, 'crosshairUI')
  request.r(i655[6], i655[7], 0, i654, 'muzzleFlash')
  request.r(i655[8], i655[9], 0, i654, 'explosionEffect')
  request.r(i655[10], i655[11], 0, i654, 'projectilePosition')
  request.r(i655[12], i655[13], 0, i654, 'prefabProjectile')
  i654.projectileSpeed = i655[14]
  i654.poolSize = i655[15]
  request.r(i655[16], i655[17], 0, i654, '_followBullet')
  request.r(i655[18], i655[19], 0, i654, '_managerCamers')
  request.r(i655[20], i655[21], 0, i654, '_timeController')
  request.r(i655[22], i655[23], 0, i654, '_playerUIController')
  request.r(i655[24], i655[25], 0, i654, '_tanksFabric')
  return i654
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i656 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'shootButton')
  request.r(i657[2], i657[3], 0, i656, 'cooldownText')
  request.r(i657[4], i657[5], 0, i656, 'cooldownImage')
  i656.cooldownTime = i657[6]
  return i656
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.Button' )
  var i659 = data
  i658.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i659[0], i658.m_OnClick)
  i658.m_Navigation = request.d('UnityEngine.UI.Navigation', i659[1], i658.m_Navigation)
  i658.m_Transition = i659[2]
  i658.m_Colors = request.d('UnityEngine.UI.ColorBlock', i659[3], i658.m_Colors)
  i658.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i659[4], i658.m_SpriteState)
  i658.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i659[5], i658.m_AnimationTriggers)
  i658.m_Interactable = !!i659[6]
  request.r(i659[7], i659[8], 0, i658, 'm_TargetGraphic')
  return i658
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i661 = data
  i660.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i661[0], i660.m_PersistentCalls)
  return i660
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i663 = data
  var i665 = i663[0]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i665.length; i += 1) {
    i664.add(request.d('UnityEngine.Events.PersistentCall', i665[i + 0]));
  }
  i662.m_Calls = i664
  return i662
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'm_Target')
  i668.m_TargetAssemblyTypeName = i669[2]
  i668.m_MethodName = i669[3]
  i668.m_Mode = i669[4]
  i668.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i669[5], i668.m_Arguments)
  i668.m_CallState = i669[6]
  return i668
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i671 = data
  i670.m_Mode = i671[0]
  i670.m_WrapAround = !!i671[1]
  request.r(i671[2], i671[3], 0, i670, 'm_SelectOnUp')
  request.r(i671[4], i671[5], 0, i670, 'm_SelectOnDown')
  request.r(i671[6], i671[7], 0, i670, 'm_SelectOnLeft')
  request.r(i671[8], i671[9], 0, i670, 'm_SelectOnRight')
  return i670
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i673 = data
  i672.m_NormalColor = new pc.Color(i673[0], i673[1], i673[2], i673[3])
  i672.m_HighlightedColor = new pc.Color(i673[4], i673[5], i673[6], i673[7])
  i672.m_PressedColor = new pc.Color(i673[8], i673[9], i673[10], i673[11])
  i672.m_SelectedColor = new pc.Color(i673[12], i673[13], i673[14], i673[15])
  i672.m_DisabledColor = new pc.Color(i673[16], i673[17], i673[18], i673[19])
  i672.m_ColorMultiplier = i673[20]
  i672.m_FadeDuration = i673[21]
  return i672
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_HighlightedSprite')
  request.r(i675[2], i675[3], 0, i674, 'm_PressedSprite')
  request.r(i675[4], i675[5], 0, i674, 'm_SelectedSprite')
  request.r(i675[6], i675[7], 0, i674, 'm_DisabledSprite')
  return i674
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i677 = data
  i676.m_NormalTrigger = i677[0]
  i676.m_HighlightedTrigger = i677[1]
  i676.m_PressedTrigger = i677[2]
  i676.m_SelectedTrigger = i677[3]
  i676.m_DisabledTrigger = i677[4]
  return i676
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.Text' )
  var i679 = data
  i678.m_FontData = request.d('UnityEngine.UI.FontData', i679[0], i678.m_FontData)
  i678.m_Text = i679[1]
  request.r(i679[2], i679[3], 0, i678, 'm_Material')
  i678.m_Maskable = !!i679[4]
  i678.m_Color = new pc.Color(i679[5], i679[6], i679[7], i679[8])
  i678.m_RaycastTarget = !!i679[9]
  i678.m_RaycastPadding = new pc.Vec4( i679[10], i679[11], i679[12], i679[13] )
  return i678
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.FontData' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_Font')
  i680.m_FontSize = i681[2]
  i680.m_FontStyle = i681[3]
  i680.m_BestFit = !!i681[4]
  i680.m_MinSize = i681[5]
  i680.m_MaxSize = i681[6]
  i680.m_Alignment = i681[7]
  i680.m_AlignByGeometry = !!i681[8]
  i680.m_RichText = !!i681[9]
  i680.m_HorizontalOverflow = i681[10]
  i680.m_VerticalOverflow = i681[11]
  i680.m_LineSpacing = i681[12]
  return i680
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i682 = root || request.c( 'TutorialHand' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'handImage')
  i682.moveDistance = i683[2]
  i682.moveDuration = i683[3]
  return i682
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i684 = root || request.c( 'UI.CrosshairMovement' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'joystick')
  request.r(i685[2], i685[3], 0, i684, 'crosshair')
  i684.moveSpeed = i685[4]
  request.r(i685[5], i685[6], 0, i684, 'canvasRect')
  return i684
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i686 = root || request.c( 'UI.EndCardAnimation' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'background')
  request.r(i687[2], i687[3], 0, i686, 'title')
  request.r(i687[4], i687[5], 0, i686, 'logoAndButton')
  request.r(i687[6], i687[7], 0, i686, 'titleText')
  i686.fadeDuration = i687[8]
  i686.scaleDuration = i687[9]
  i686.scaleEase = i687[10]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i689 = data
  i688.m_Alpha = i689[0]
  i688.m_Interactable = !!i689[1]
  i688.m_BlocksRaycasts = !!i689[2]
  i688.m_IgnoreParentGroups = !!i689[3]
  i688.enabled = !!i689[4]
  return i688
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i691 = data
  i690.m_AspectMode = i691[0]
  i690.m_AspectRatio = i691[1]
  return i690
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i692 = root || request.c( 'UI.ButtonPulse' )
  var i693 = data
  i692.scaleMultiplier = i693[0]
  i692.duration = i693[1]
  return i692
}

Deserializers["Cross"] = function (request, data, root) {
  var i694 = root || request.c( 'Cross' )
  var i695 = data
  return i694
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'm_FirstSelected')
  i696.m_sendNavigationEvents = !!i697[2]
  i696.m_DragThreshold = i697[3]
  return i696
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i699 = data
  i698.m_HorizontalAxis = i699[0]
  i698.m_VerticalAxis = i699[1]
  i698.m_SubmitButton = i699[2]
  i698.m_CancelButton = i699[3]
  i698.m_InputActionsPerSecond = i699[4]
  i698.m_RepeatDelay = i699[5]
  i698.m_ForceModuleActive = !!i699[6]
  i698.m_SendPointerHoverToParent = !!i699[7]
  return i698
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i700 = root || request.c( 'Bootstraps.Bootstrap' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'tanksFabric')
  request.r(i701[2], i701[3], 0, i700, 'scenarioGame')
  return i700
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i702 = root || request.c( 'Fabric.TanksFabric' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'tankPrefab')
  var i705 = i703[2]
  var i704 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 1, i704, '')
  }
  i702.spawnPoints = i704
  var i707 = i703[3]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i702.targets = i706
  return i702
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i712 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'endCard')
  return i712
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i714 = root || request.c( 'UI.TankKillStatistics' )
  var i715 = data
  return i714
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i716 = root || request.c( 'ManagerCamers' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, '_plauerCamera')
  request.r(i717[2], i717[3], 0, i716, '_bulletCamera')
  request.r(i717[4], i717[5], 0, i716, '_timeController')
  request.r(i717[6], i717[7], 0, i716, '_playerZoom')
  return i716
}

Deserializers["TimeController"] = function (request, data, root) {
  var i718 = root || request.c( 'TimeController' )
  var i719 = data
  i718.slowMotionScale = i719[0]
  i718.slowMotionDuration = i719[1]
  i718.restoreSpeedDuration = i719[2]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i721 = data
  i720.ambientIntensity = i721[0]
  i720.reflectionIntensity = i721[1]
  i720.ambientMode = i721[2]
  i720.ambientLight = new pc.Color(i721[3], i721[4], i721[5], i721[6])
  i720.ambientSkyColor = new pc.Color(i721[7], i721[8], i721[9], i721[10])
  i720.ambientGroundColor = new pc.Color(i721[11], i721[12], i721[13], i721[14])
  i720.ambientEquatorColor = new pc.Color(i721[15], i721[16], i721[17], i721[18])
  i720.fogColor = new pc.Color(i721[19], i721[20], i721[21], i721[22])
  i720.fogEndDistance = i721[23]
  i720.fogStartDistance = i721[24]
  i720.fogDensity = i721[25]
  i720.fog = !!i721[26]
  request.r(i721[27], i721[28], 0, i720, 'skybox')
  i720.fogMode = i721[29]
  var i723 = i721[30]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i723[i + 0]) );
  }
  i720.lightmaps = i722
  i720.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i721[31], i720.lightProbes)
  i720.lightmapsMode = i721[32]
  i720.mixedBakeMode = i721[33]
  i720.environmentLightingMode = i721[34]
  i720.ambientProbe = new pc.SphericalHarmonicsL2(i721[35])
  i720.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i721[36])
  i720.useReferenceAmbientProbe = !!i721[37]
  request.r(i721[38], i721[39], 0, i720, 'customReflection')
  request.r(i721[40], i721[41], 0, i720, 'defaultReflection')
  i720.defaultReflectionMode = i721[42]
  i720.defaultReflectionResolution = i721[43]
  i720.sunLightObjectId = i721[44]
  i720.pixelLightCount = i721[45]
  i720.defaultReflectionHDR = !!i721[46]
  i720.hasLightDataAsset = !!i721[47]
  i720.hasManualGenerate = !!i721[48]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'lightmapColor')
  request.r(i727[2], i727[3], 0, i726, 'lightmapDirection')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i728 = root || new UnityEngine.LightProbes()
  var i729 = data
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i737 = data
  var i739 = i737[0]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i739[i + 0]));
  }
  i736.ShaderCompilationErrors = i738
  i736.name = i737[1]
  i736.guid = i737[2]
  var i741 = i737[3]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i736.shaderDefinedKeywords = i740
  var i743 = i737[4]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i743[i + 0]) );
  }
  i736.passes = i742
  var i745 = i737[5]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i745[i + 0]) );
  }
  i736.usePasses = i744
  var i747 = i737[6]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i747[i + 0]) );
  }
  i736.defaultParameterValues = i746
  request.r(i737[7], i737[8], 0, i736, 'unityFallbackShader')
  i736.readDepth = !!i737[9]
  i736.isCreatedByShaderGraph = !!i737[10]
  i736.compiled = !!i737[11]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i751 = data
  i750.shaderName = i751[0]
  i750.errorMessage = i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i756 = root || new pc.UnityShaderPass()
  var i757 = data
  i756.id = i757[0]
  i756.subShaderIndex = i757[1]
  i756.name = i757[2]
  i756.passType = i757[3]
  i756.grabPassTextureName = i757[4]
  i756.usePass = !!i757[5]
  i756.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[6], i756.zTest)
  i756.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[7], i756.zWrite)
  i756.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[8], i756.culling)
  i756.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i757[9], i756.blending)
  i756.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i757[10], i756.alphaBlending)
  i756.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[11], i756.colorWriteMask)
  i756.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[12], i756.offsetUnits)
  i756.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[13], i756.offsetFactor)
  i756.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[14], i756.stencilRef)
  i756.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[15], i756.stencilReadMask)
  i756.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[16], i756.stencilWriteMask)
  i756.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i757[17], i756.stencilOp)
  i756.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i757[18], i756.stencilOpFront)
  i756.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i757[19], i756.stencilOpBack)
  var i759 = i757[20]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i759[i + 0]) );
  }
  i756.tags = i758
  var i761 = i757[21]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( i761[i + 0] );
  }
  i756.passDefinedKeywords = i760
  var i763 = i757[22]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i763[i + 0]) );
  }
  i756.passDefinedKeywordGroups = i762
  var i765 = i757[23]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i765[i + 0]) );
  }
  i756.variants = i764
  var i767 = i757[24]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i767[i + 0]) );
  }
  i756.excludedVariants = i766
  i756.hasDepthReader = !!i757[25]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i769 = data
  i768.val = i769[0]
  i768.name = i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i771 = data
  i770.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[0], i770.src)
  i770.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[1], i770.dst)
  i770.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[2], i770.op)
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i773 = data
  i772.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[0], i772.pass)
  i772.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[1], i772.fail)
  i772.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[2], i772.zFail)
  i772.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[3], i772.comp)
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i777 = data
  i776.name = i777[0]
  i776.value = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i781 = data
  var i783 = i781[0]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i780.keywords = i782
  i780.hasDiscard = !!i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i787 = data
  i786.passId = i787[0]
  i786.subShaderIndex = i787[1]
  var i789 = i787[2]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i786.keywords = i788
  i786.vertexProgram = i787[3]
  i786.fragmentProgram = i787[4]
  i786.exportedForWebGl2 = !!i787[5]
  i786.readDepth = !!i787[6]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'shader')
  i792.pass = i793[2]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i797 = data
  i796.name = i797[0]
  i796.type = i797[1]
  i796.value = new pc.Vec4( i797[2], i797[3], i797[4], i797[5] )
  i796.textureValue = i797[6]
  i796.shaderPropertyFlag = i797[7]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i799 = data
  i798.name = i799[0]
  request.r(i799[1], i799[2], 0, i798, 'texture')
  i798.aabb = i799[3]
  i798.vertices = i799[4]
  i798.triangles = i799[5]
  i798.textureRect = UnityEngine.Rect.MinMaxRect(i799[6], i799[7], i799[8], i799[9])
  i798.packedRect = UnityEngine.Rect.MinMaxRect(i799[10], i799[11], i799[12], i799[13])
  i798.border = new pc.Vec4( i799[14], i799[15], i799[16], i799[17] )
  i798.transparency = i799[18]
  i798.bounds = i799[19]
  i798.pixelsPerUnit = i799[20]
  i798.textureWidth = i799[21]
  i798.textureHeight = i799[22]
  i798.nativeSize = new pc.Vec2( i799[23], i799[24] )
  i798.pivot = new pc.Vec2( i799[25], i799[26] )
  i798.textureRectOffset = new pc.Vec2( i799[27], i799[28] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i801 = data
  i800.name = i801[0]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i803 = data
  i802.name = i803[0]
  i802.ascent = i803[1]
  i802.originalLineHeight = i803[2]
  i802.fontSize = i803[3]
  var i805 = i803[4]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i805[i + 0]) );
  }
  i802.characterInfo = i804
  request.r(i803[5], i803[6], 0, i802, 'texture')
  i802.originalFontSize = i803[7]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i809 = data
  i808.index = i809[0]
  i808.advance = i809[1]
  i808.bearing = i809[2]
  i808.glyphWidth = i809[3]
  i808.glyphHeight = i809[4]
  i808.minX = i809[5]
  i808.maxX = i809[6]
  i808.minY = i809[7]
  i808.maxY = i809[8]
  i808.uvBottomLeftX = i809[9]
  i808.uvBottomLeftY = i809[10]
  i808.uvBottomRightX = i809[11]
  i808.uvBottomRightY = i809[12]
  i808.uvTopLeftX = i809[13]
  i808.uvTopLeftY = i809[14]
  i808.uvTopRightX = i809[15]
  i808.uvTopRightY = i809[16]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i811 = data
  var i813 = i811[0]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i813[i + 0]) );
  }
  i810.files = i812
  i810.componentToPrefabIds = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i817 = data
  i816.path = i817[0]
  request.r(i817[1], i817[2], 0, i816, 'unityObject')
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i819 = data
  var i821 = i819[0]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i821[i + 0]) );
  }
  i818.scriptsExecutionOrder = i820
  var i823 = i819[1]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i823[i + 0]) );
  }
  i818.sortingLayers = i822
  var i825 = i819[2]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i825[i + 0]) );
  }
  i818.cullingLayers = i824
  i818.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i819[3], i818.timeSettings)
  i818.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i819[4], i818.physicsSettings)
  i818.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i819[5], i818.physics2DSettings)
  i818.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i819[6], i818.qualitySettings)
  i818.enableRealtimeShadows = !!i819[7]
  i818.enableAutoInstancing = !!i819[8]
  i818.enableDynamicBatching = !!i819[9]
  i818.lightmapEncodingQuality = i819[10]
  i818.desiredColorSpace = i819[11]
  var i827 = i819[12]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i818.allTags = i826
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i831 = data
  i830.name = i831[0]
  i830.value = i831[1]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i835 = data
  i834.id = i835[0]
  i834.name = i835[1]
  i834.value = i835[2]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i839 = data
  i838.id = i839[0]
  i838.name = i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i841 = data
  i840.fixedDeltaTime = i841[0]
  i840.maximumDeltaTime = i841[1]
  i840.timeScale = i841[2]
  i840.maximumParticleTimestep = i841[3]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i843 = data
  i842.gravity = new pc.Vec3( i843[0], i843[1], i843[2] )
  i842.defaultSolverIterations = i843[3]
  i842.bounceThreshold = i843[4]
  i842.autoSyncTransforms = !!i843[5]
  i842.autoSimulation = !!i843[6]
  var i845 = i843[7]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i845[i + 0]) );
  }
  i842.collisionMatrix = i844
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i849 = data
  i848.enabled = !!i849[0]
  i848.layerId = i849[1]
  i848.otherLayerId = i849[2]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'material')
  i850.gravity = new pc.Vec2( i851[2], i851[3] )
  i850.positionIterations = i851[4]
  i850.velocityIterations = i851[5]
  i850.velocityThreshold = i851[6]
  i850.maxLinearCorrection = i851[7]
  i850.maxAngularCorrection = i851[8]
  i850.maxTranslationSpeed = i851[9]
  i850.maxRotationSpeed = i851[10]
  i850.baumgarteScale = i851[11]
  i850.baumgarteTOIScale = i851[12]
  i850.timeToSleep = i851[13]
  i850.linearSleepTolerance = i851[14]
  i850.angularSleepTolerance = i851[15]
  i850.defaultContactOffset = i851[16]
  i850.autoSimulation = !!i851[17]
  i850.queriesHitTriggers = !!i851[18]
  i850.queriesStartInColliders = !!i851[19]
  i850.callbacksOnDisable = !!i851[20]
  i850.reuseCollisionCallbacks = !!i851[21]
  i850.autoSyncTransforms = !!i851[22]
  var i853 = i851[23]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i853[i + 0]) );
  }
  i850.collisionMatrix = i852
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i857 = data
  i856.enabled = !!i857[0]
  i856.layerId = i857[1]
  i856.otherLayerId = i857[2]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i859 = data
  var i861 = i859[0]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i861[i + 0]) );
  }
  i858.qualityLevels = i860
  var i863 = i859[1]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( i863[i + 0] );
  }
  i858.names = i862
  i858.shadows = i859[2]
  i858.anisotropicFiltering = i859[3]
  i858.antiAliasing = i859[4]
  i858.lodBias = i859[5]
  i858.shadowCascades = i859[6]
  i858.shadowDistance = i859[7]
  i858.shadowmaskMode = i859[8]
  i858.shadowProjection = i859[9]
  i858.shadowResolution = i859[10]
  i858.softParticles = !!i859[11]
  i858.softVegetation = !!i859[12]
  i858.activeColorSpace = i859[13]
  i858.desiredColorSpace = i859[14]
  i858.masterTextureLimit = i859[15]
  i858.maxQueuedFrames = i859[16]
  i858.particleRaycastBudget = i859[17]
  i858.pixelLightCount = i859[18]
  i858.realtimeReflectionProbes = !!i859[19]
  i858.shadowCascade2Split = i859[20]
  i858.shadowCascade4Split = new pc.Vec3( i859[21], i859[22], i859[23] )
  i858.streamingMipmapsActive = !!i859[24]
  i858.vSyncCount = i859[25]
  i858.asyncUploadBufferSize = i859[26]
  i858.asyncUploadTimeSlice = i859[27]
  i858.billboardsFaceCameraPosition = !!i859[28]
  i858.shadowNearPlaneOffset = i859[29]
  i858.streamingMipmapsMemoryBudget = i859[30]
  i858.maximumLODLevel = i859[31]
  i858.streamingMipmapsAddAllCameras = !!i859[32]
  i858.streamingMipmapsMaxLevelReduction = i859[33]
  i858.streamingMipmapsRenderersPerFrame = i859[34]
  i858.resolutionScalingFixedDPIFactor = i859[35]
  i858.streamingMipmapsMaxFileIORequests = i859[36]
  i858.currentQualityLevel = i859[37]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i869 = data
  i868.weight = i869[0]
  i868.vertices = i869[1]
  i868.normals = i869[2]
  i868.tangents = i869[3]
  return i868
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'm_ObjectArgument')
  i870.m_ObjectArgumentAssemblyTypeName = i871[2]
  i870.m_IntArgument = i871[3]
  i870.m_FloatArgument = i871[4]
  i870.m_StringArgument = i871[5]
  i870.m_BoolArgument = !!i871[6]
  return i870
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[33],"71":[19],"72":[19],"73":[19],"74":[19],"75":[19],"76":[19],"77":[19],"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[79],"86":[79],"87":[79],"88":[79],"89":[79],"90":[79],"91":[79],"92":[33],"93":[10],"94":[95],"96":[95],"27":[0],"97":[13],"15":[13],"98":[36],"99":[8],"100":[36],"101":[0],"102":[33],"103":[33],"104":[36],"105":[33],"106":[107],"108":[0],"109":[0],"29":[27],"3":[1,0],"54":[0],"28":[27],"110":[0],"111":[0],"112":[0],"113":[0],"114":[0],"115":[0],"116":[0],"117":[0],"118":[0],"119":[1,0],"120":[0],"121":[0],"122":[0],"123":[0],"48":[1,0],"124":[0],"125":[56],"126":[56],"57":[56],"127":[56],"128":[33],"129":[33],"130":[107],"131":[107],"132":[33],"133":[134]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","VariableJoystick","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CFX_AutoDestructShuriken","UnityEngine.Texture2D","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Rigidbody","Howitzer.Projectile","UnityEngine.CapsuleCollider","BehaviourAI.TankAI","ExclamationMark","UnityEngine.BoxCollider","BlinkingObject","UnityEngine.GameObject","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.LODGroup","UnityEngine.SpriteRenderer","UnityEngine.Cubemap","UnityEngine.Camera","UnityEngine.AudioListener","Howitzer.LookAtCrosshair","UnityEngine.Light","Howitzer.LookAtReticle","FollowBullet","UI.PlayerUIController","UnityEngine.UI.Button","Cross","Howitzer.PlayerZoom","Howitzer.PlayerShooting","Howitzer.PlayerShootingCooldown","ManagerCamers","TimeController","Fabric.TanksFabric","UnityEngine.UI.Text","UnityEngine.Font","TutorialHand","UI.CrosshairMovement","UI.EndCardAnimation","UnityEngine.CanvasGroup","UnityEngine.UI.AspectRatioFitter","UI.ButtonPulse","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Bootstraps.Bootstrap","Bootstraps.ScenarioGame","UI.TankKillStatistics","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CFX_AutoStopLoopedEffect","CFX_LightIntensityFade","WFX_BulletHoleDecal","WFX_LightFlicker","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/12/2025 18:23:14";

Deserializers.lunaDaysRunning = "5.7";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1805";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3609";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.My-project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "9176f925-21d6-450d-aa77-1bd24071f43a";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

