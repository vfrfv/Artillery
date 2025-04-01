var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1374 = root || request.c( 'UnityEngine.JointSpring' )
  var i1375 = data
  i1374.spring = i1375[0]
  i1374.damper = i1375[1]
  i1374.targetPosition = i1375[2]
  return i1374
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.JointMotor' )
  var i1377 = data
  i1376.m_TargetVelocity = i1377[0]
  i1376.m_Force = i1377[1]
  i1376.m_FreeSpin = i1377[2]
  return i1376
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1378 = root || request.c( 'UnityEngine.JointLimits' )
  var i1379 = data
  i1378.m_Min = i1379[0]
  i1378.m_Max = i1379[1]
  i1378.m_Bounciness = i1379[2]
  i1378.m_BounceMinVelocity = i1379[3]
  i1378.m_ContactDistance = i1379[4]
  i1378.minBounce = i1379[5]
  i1378.maxBounce = i1379[6]
  return i1378
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.JointDrive' )
  var i1381 = data
  i1380.m_PositionSpring = i1381[0]
  i1380.m_PositionDamper = i1381[1]
  i1380.m_MaximumForce = i1381[2]
  i1380.m_UseAcceleration = i1381[3]
  return i1380
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1383 = data
  i1382.m_Spring = i1383[0]
  i1382.m_Damper = i1383[1]
  return i1382
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1385 = data
  i1384.m_Limit = i1385[0]
  i1384.m_Bounciness = i1385[1]
  i1384.m_ContactDistance = i1385[2]
  return i1384
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1387 = data
  i1386.m_ExtremumSlip = i1387[0]
  i1386.m_ExtremumValue = i1387[1]
  i1386.m_AsymptoteSlip = i1387[2]
  i1386.m_AsymptoteValue = i1387[3]
  i1386.m_Stiffness = i1387[4]
  return i1386
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1388 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1389 = data
  i1388.m_LowerAngle = i1389[0]
  i1388.m_UpperAngle = i1389[1]
  return i1388
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1391 = data
  i1390.m_MotorSpeed = i1391[0]
  i1390.m_MaximumMotorTorque = i1391[1]
  return i1390
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1393 = data
  i1392.m_DampingRatio = i1393[0]
  i1392.m_Frequency = i1393[1]
  i1392.m_Angle = i1393[2]
  return i1392
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1395 = data
  i1394.m_LowerTranslation = i1395[0]
  i1394.m_UpperTranslation = i1395[1]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1397 = data
  i1396.pivot = new pc.Vec2( i1397[0], i1397[1] )
  i1396.anchorMin = new pc.Vec2( i1397[2], i1397[3] )
  i1396.anchorMax = new pc.Vec2( i1397[4], i1397[5] )
  i1396.sizeDelta = new pc.Vec2( i1397[6], i1397[7] )
  i1396.anchoredPosition3D = new pc.Vec3( i1397[8], i1397[9], i1397[10] )
  i1396.rotation = new pc.Quat(i1397[11], i1397[12], i1397[13], i1397[14])
  i1396.scale = new pc.Vec3( i1397[15], i1397[16], i1397[17] )
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1399 = data
  i1398.cullTransparentMesh = !!i1399[0]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1401 = data
  i1400.name = i1401[0]
  i1400.tagId = i1401[1]
  i1400.enabled = !!i1401[2]
  i1400.isStatic = !!i1401[3]
  i1400.layer = i1401[4]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1403 = data
  i1402.name = i1403[0]
  i1402.width = i1403[1]
  i1402.height = i1403[2]
  i1402.mipmapCount = i1403[3]
  i1402.anisoLevel = i1403[4]
  i1402.filterMode = i1403[5]
  i1402.hdr = !!i1403[6]
  i1402.format = i1403[7]
  i1402.wrapMode = i1403[8]
  i1402.alphaIsTransparency = !!i1403[9]
  i1402.alphaSource = i1403[10]
  i1402.graphicsFormat = i1403[11]
  i1402.sRGBTexture = !!i1403[12]
  i1402.desiredColorSpace = i1403[13]
  i1402.wrapU = i1403[14]
  i1402.wrapV = i1403[15]
  return i1402
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.UI.Image' )
  var i1405 = data
  request.r(i1405[0], i1405[1], 0, i1404, 'm_Sprite')
  i1404.m_Type = i1405[2]
  i1404.m_PreserveAspect = !!i1405[3]
  i1404.m_FillCenter = !!i1405[4]
  i1404.m_FillMethod = i1405[5]
  i1404.m_FillAmount = i1405[6]
  i1404.m_FillClockwise = !!i1405[7]
  i1404.m_FillOrigin = i1405[8]
  i1404.m_UseSpriteMesh = !!i1405[9]
  i1404.m_PixelsPerUnitMultiplier = i1405[10]
  request.r(i1405[11], i1405[12], 0, i1404, 'm_Material')
  i1404.m_Maskable = !!i1405[13]
  i1404.m_Color = new pc.Color(i1405[14], i1405[15], i1405[16], i1405[17])
  i1404.m_RaycastTarget = !!i1405[18]
  i1404.m_RaycastPadding = new pc.Vec4( i1405[19], i1405[20], i1405[21], i1405[22] )
  return i1404
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i1406 = root || request.c( 'VariableJoystick' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'handle')
  i1406.moveThreshold = i1407[2]
  i1406.joystickType = i1407[3]
  request.r(i1407[4], i1407[5], 0, i1406, 'background')
  i1406.handleRange = i1407[6]
  i1406.deadZone = i1407[7]
  i1406.axisOptions = i1407[8]
  i1406.snapX = !!i1407[9]
  i1406.snapY = !!i1407[10]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1409 = data
  i1408.position = new pc.Vec3( i1409[0], i1409[1], i1409[2] )
  i1408.scale = new pc.Vec3( i1409[3], i1409[4], i1409[5] )
  i1408.rotation = new pc.Quat(i1409[6], i1409[7], i1409[8], i1409[9])
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1411 = data
  i1410.center = new pc.Vec3( i1411[0], i1411[1], i1411[2] )
  i1410.size = new pc.Vec3( i1411[3], i1411[4], i1411[5] )
  i1410.enabled = !!i1411[6]
  i1410.isTrigger = !!i1411[7]
  request.r(i1411[8], i1411[9], 0, i1410, 'material')
  return i1410
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i1412 = root || request.c( 'BehaviourAI.TankAI' )
  var i1413 = data
  i1412._arrived = !!i1413[0]
  i1412.stopDistance = i1413[1]
  i1412.rotationSpeed = i1413[2]
  i1412.moveSpeed = i1413[3]
  i1412.avoidanceDistance = i1413[4]
  i1412.tankLayer = UnityEngine.LayerMask.FromIntegerValue( i1413[5] )
  request.r(i1413[6], i1413[7], 0, i1412, '_tower')
  request.r(i1413[8], i1413[9], 0, i1412, '_gun')
  request.r(i1413[10], i1413[11], 0, i1412, '_target')
  request.r(i1413[12], i1413[13], 0, i1412, 'Tower')
  request.r(i1413[14], i1413[15], 0, i1412, 'Gun')
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1415 = data
  request.r(i1415[0], i1415[1], 0, i1414, 'sharedMesh')
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1417 = data
  request.r(i1417[0], i1417[1], 0, i1416, 'additionalVertexStreams')
  i1416.enabled = !!i1417[2]
  request.r(i1417[3], i1417[4], 0, i1416, 'sharedMaterial')
  var i1419 = i1417[5]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 2) {
  request.r(i1419[i + 0], i1419[i + 1], 2, i1418, '')
  }
  i1416.sharedMaterials = i1418
  i1416.receiveShadows = !!i1417[6]
  i1416.shadowCastingMode = i1417[7]
  i1416.sortingLayerID = i1417[8]
  i1416.sortingOrder = i1417[9]
  i1416.lightmapIndex = i1417[10]
  i1416.lightmapSceneIndex = i1417[11]
  i1416.lightmapScaleOffset = new pc.Vec4( i1417[12], i1417[13], i1417[14], i1417[15] )
  i1416.lightProbeUsage = i1417[16]
  i1416.reflectionProbeUsage = i1417[17]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1423 = data
  i1422.enabled = !!i1423[0]
  i1422.planeDistance = i1423[1]
  i1422.referencePixelsPerUnit = i1423[2]
  i1422.isFallbackOverlay = !!i1423[3]
  i1422.renderMode = i1423[4]
  i1422.renderOrder = i1423[5]
  i1422.sortingLayerName = i1423[6]
  i1422.sortingOrder = i1423[7]
  i1422.scaleFactor = i1423[8]
  request.r(i1423[9], i1423[10], 0, i1422, 'worldCamera')
  i1422.overrideSorting = !!i1423[11]
  i1422.pixelPerfect = !!i1423[12]
  i1422.targetDisplay = i1423[13]
  i1422.overridePixelPerfect = !!i1423[14]
  return i1422
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1425 = data
  i1424.m_UiScaleMode = i1425[0]
  i1424.m_ReferencePixelsPerUnit = i1425[1]
  i1424.m_ScaleFactor = i1425[2]
  i1424.m_ReferenceResolution = new pc.Vec2( i1425[3], i1425[4] )
  i1424.m_ScreenMatchMode = i1425[5]
  i1424.m_MatchWidthOrHeight = i1425[6]
  i1424.m_PhysicalUnit = i1425[7]
  i1424.m_FallbackScreenDPI = i1425[8]
  i1424.m_DefaultSpriteDPI = i1425[9]
  i1424.m_DynamicPixelsPerUnit = i1425[10]
  i1424.m_PresetInfoIsWorld = !!i1425[11]
  return i1424
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1427 = data
  i1426.m_IgnoreReversedGraphics = !!i1427[0]
  i1426.m_BlockingObjects = i1427[1]
  i1426.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1427[2] )
  return i1426
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i1428 = root || request.c( 'ExclamationMark' )
  var i1429 = data
  return i1428
}

Deserializers["Tower"] = function (request, data, root) {
  var i1430 = root || request.c( 'Tower' )
  var i1431 = data
  i1430.rotationSpeed = i1431[0]
  return i1430
}

Deserializers["Gun"] = function (request, data, root) {
  var i1432 = root || request.c( 'Gun' )
  var i1433 = data
  i1432.rotationSpeed = i1433[0]
  request.r(i1433[1], i1433[2], 0, i1432, 'particleSystem')
  i1432.minParticleInterval = i1433[3]
  i1432.maxParticleInterval = i1433[4]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1435 = data
  i1434.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1435[0], i1434.main)
  i1434.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1435[1], i1434.colorBySpeed)
  i1434.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1435[2], i1434.colorOverLifetime)
  i1434.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1435[3], i1434.emission)
  i1434.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1435[4], i1434.rotationBySpeed)
  i1434.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1435[5], i1434.rotationOverLifetime)
  i1434.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1435[6], i1434.shape)
  i1434.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1435[7], i1434.sizeBySpeed)
  i1434.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1435[8], i1434.sizeOverLifetime)
  i1434.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1435[9], i1434.textureSheetAnimation)
  i1434.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1435[10], i1434.velocityOverLifetime)
  i1434.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1435[11], i1434.noise)
  i1434.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1435[12], i1434.inheritVelocity)
  i1434.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1435[13], i1434.forceOverLifetime)
  i1434.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1435[14], i1434.limitVelocityOverLifetime)
  i1434.useAutoRandomSeed = !!i1435[15]
  i1434.randomSeed = i1435[16]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1436 = root || new pc.ParticleSystemMain()
  var i1437 = data
  i1436.duration = i1437[0]
  i1436.loop = !!i1437[1]
  i1436.prewarm = !!i1437[2]
  i1436.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[3], i1436.startDelay)
  i1436.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[4], i1436.startLifetime)
  i1436.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[5], i1436.startSpeed)
  i1436.startSize3D = !!i1437[6]
  i1436.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[7], i1436.startSizeX)
  i1436.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[8], i1436.startSizeY)
  i1436.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[9], i1436.startSizeZ)
  i1436.startRotation3D = !!i1437[10]
  i1436.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[11], i1436.startRotationX)
  i1436.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[12], i1436.startRotationY)
  i1436.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[13], i1436.startRotationZ)
  i1436.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1437[14], i1436.startColor)
  i1436.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[15], i1436.gravityModifier)
  i1436.simulationSpace = i1437[16]
  request.r(i1437[17], i1437[18], 0, i1436, 'customSimulationSpace')
  i1436.simulationSpeed = i1437[19]
  i1436.useUnscaledTime = !!i1437[20]
  i1436.scalingMode = i1437[21]
  i1436.playOnAwake = !!i1437[22]
  i1436.maxParticles = i1437[23]
  i1436.emitterVelocityMode = i1437[24]
  i1436.stopAction = i1437[25]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1438 = root || new pc.MinMaxCurve()
  var i1439 = data
  i1438.mode = i1439[0]
  i1438.curveMin = new pc.AnimationCurve( { keys_flow: i1439[1] } )
  i1438.curveMax = new pc.AnimationCurve( { keys_flow: i1439[2] } )
  i1438.curveMultiplier = i1439[3]
  i1438.constantMin = i1439[4]
  i1438.constantMax = i1439[5]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1440 = root || new pc.MinMaxGradient()
  var i1441 = data
  i1440.mode = i1441[0]
  i1440.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1441[1], i1440.gradientMin)
  i1440.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1441[2], i1440.gradientMax)
  i1440.colorMin = new pc.Color(i1441[3], i1441[4], i1441[5], i1441[6])
  i1440.colorMax = new pc.Color(i1441[7], i1441[8], i1441[9], i1441[10])
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1443 = data
  i1442.mode = i1443[0]
  var i1445 = i1443[1]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1445[i + 0]) );
  }
  i1442.colorKeys = i1444
  var i1447 = i1443[2]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1447[i + 0]) );
  }
  i1442.alphaKeys = i1446
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1448 = root || new pc.ParticleSystemColorBySpeed()
  var i1449 = data
  i1448.enabled = !!i1449[0]
  i1448.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1449[1], i1448.color)
  i1448.range = new pc.Vec2( i1449[2], i1449[3] )
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1453 = data
  i1452.color = new pc.Color(i1453[0], i1453[1], i1453[2], i1453[3])
  i1452.time = i1453[4]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1457 = data
  i1456.alpha = i1457[0]
  i1456.time = i1457[1]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1458 = root || new pc.ParticleSystemColorOverLifetime()
  var i1459 = data
  i1458.enabled = !!i1459[0]
  i1458.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1459[1], i1458.color)
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1460 = root || new pc.ParticleSystemEmitter()
  var i1461 = data
  i1460.enabled = !!i1461[0]
  i1460.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[1], i1460.rateOverTime)
  i1460.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[2], i1460.rateOverDistance)
  var i1463 = i1461[3]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1463[i + 0]) );
  }
  i1460.bursts = i1462
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1466 = root || new pc.ParticleSystemBurst()
  var i1467 = data
  i1466.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[0], i1466.count)
  i1466.cycleCount = i1467[1]
  i1466.minCount = i1467[2]
  i1466.maxCount = i1467[3]
  i1466.repeatInterval = i1467[4]
  i1466.time = i1467[5]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1468 = root || new pc.ParticleSystemRotationBySpeed()
  var i1469 = data
  i1468.enabled = !!i1469[0]
  i1468.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1469[1], i1468.x)
  i1468.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1469[2], i1468.y)
  i1468.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1469[3], i1468.z)
  i1468.separateAxes = !!i1469[4]
  i1468.range = new pc.Vec2( i1469[5], i1469[6] )
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1470 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1471 = data
  i1470.enabled = !!i1471[0]
  i1470.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1471[1], i1470.x)
  i1470.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1471[2], i1470.y)
  i1470.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1471[3], i1470.z)
  i1470.separateAxes = !!i1471[4]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1472 = root || new pc.ParticleSystemShape()
  var i1473 = data
  i1472.enabled = !!i1473[0]
  i1472.shapeType = i1473[1]
  i1472.randomDirectionAmount = i1473[2]
  i1472.sphericalDirectionAmount = i1473[3]
  i1472.randomPositionAmount = i1473[4]
  i1472.alignToDirection = !!i1473[5]
  i1472.radius = i1473[6]
  i1472.radiusMode = i1473[7]
  i1472.radiusSpread = i1473[8]
  i1472.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1473[9], i1472.radiusSpeed)
  i1472.radiusThickness = i1473[10]
  i1472.angle = i1473[11]
  i1472.length = i1473[12]
  i1472.boxThickness = new pc.Vec3( i1473[13], i1473[14], i1473[15] )
  i1472.meshShapeType = i1473[16]
  request.r(i1473[17], i1473[18], 0, i1472, 'mesh')
  request.r(i1473[19], i1473[20], 0, i1472, 'meshRenderer')
  request.r(i1473[21], i1473[22], 0, i1472, 'skinnedMeshRenderer')
  i1472.useMeshMaterialIndex = !!i1473[23]
  i1472.meshMaterialIndex = i1473[24]
  i1472.useMeshColors = !!i1473[25]
  i1472.normalOffset = i1473[26]
  i1472.arc = i1473[27]
  i1472.arcMode = i1473[28]
  i1472.arcSpread = i1473[29]
  i1472.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1473[30], i1472.arcSpeed)
  i1472.donutRadius = i1473[31]
  i1472.position = new pc.Vec3( i1473[32], i1473[33], i1473[34] )
  i1472.rotation = new pc.Vec3( i1473[35], i1473[36], i1473[37] )
  i1472.scale = new pc.Vec3( i1473[38], i1473[39], i1473[40] )
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1474 = root || new pc.ParticleSystemSizeBySpeed()
  var i1475 = data
  i1474.enabled = !!i1475[0]
  i1474.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1475[1], i1474.x)
  i1474.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1475[2], i1474.y)
  i1474.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1475[3], i1474.z)
  i1474.separateAxes = !!i1475[4]
  i1474.range = new pc.Vec2( i1475[5], i1475[6] )
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1476 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1477 = data
  i1476.enabled = !!i1477[0]
  i1476.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[1], i1476.x)
  i1476.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[2], i1476.y)
  i1476.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[3], i1476.z)
  i1476.separateAxes = !!i1477[4]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1478 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1479 = data
  i1478.enabled = !!i1479[0]
  i1478.mode = i1479[1]
  i1478.animation = i1479[2]
  i1478.numTilesX = i1479[3]
  i1478.numTilesY = i1479[4]
  i1478.useRandomRow = !!i1479[5]
  i1478.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1479[6], i1478.frameOverTime)
  i1478.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1479[7], i1478.startFrame)
  i1478.cycleCount = i1479[8]
  i1478.rowIndex = i1479[9]
  i1478.flipU = i1479[10]
  i1478.flipV = i1479[11]
  i1478.spriteCount = i1479[12]
  var i1481 = i1479[13]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 2) {
  request.r(i1481[i + 0], i1481[i + 1], 2, i1480, '')
  }
  i1478.sprites = i1480
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1484 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1485 = data
  i1484.enabled = !!i1485[0]
  i1484.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[1], i1484.x)
  i1484.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[2], i1484.y)
  i1484.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[3], i1484.z)
  i1484.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[4], i1484.radial)
  i1484.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[5], i1484.speedModifier)
  i1484.space = i1485[6]
  i1484.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[7], i1484.orbitalX)
  i1484.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[8], i1484.orbitalY)
  i1484.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[9], i1484.orbitalZ)
  i1484.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[10], i1484.orbitalOffsetX)
  i1484.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[11], i1484.orbitalOffsetY)
  i1484.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[12], i1484.orbitalOffsetZ)
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1486 = root || new pc.ParticleSystemNoise()
  var i1487 = data
  i1486.enabled = !!i1487[0]
  i1486.separateAxes = !!i1487[1]
  i1486.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[2], i1486.strengthX)
  i1486.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[3], i1486.strengthY)
  i1486.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[4], i1486.strengthZ)
  i1486.frequency = i1487[5]
  i1486.damping = !!i1487[6]
  i1486.octaveCount = i1487[7]
  i1486.octaveMultiplier = i1487[8]
  i1486.octaveScale = i1487[9]
  i1486.quality = i1487[10]
  i1486.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[11], i1486.scrollSpeed)
  i1486.scrollSpeedMultiplier = i1487[12]
  i1486.remapEnabled = !!i1487[13]
  i1486.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[14], i1486.remapX)
  i1486.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[15], i1486.remapY)
  i1486.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[16], i1486.remapZ)
  i1486.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[17], i1486.positionAmount)
  i1486.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[18], i1486.rotationAmount)
  i1486.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[19], i1486.sizeAmount)
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1488 = root || new pc.ParticleSystemInheritVelocity()
  var i1489 = data
  i1488.enabled = !!i1489[0]
  i1488.mode = i1489[1]
  i1488.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1489[2], i1488.curve)
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1490 = root || new pc.ParticleSystemForceOverLifetime()
  var i1491 = data
  i1490.enabled = !!i1491[0]
  i1490.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[1], i1490.x)
  i1490.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[2], i1490.y)
  i1490.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[3], i1490.z)
  i1490.space = i1491[4]
  i1490.randomized = !!i1491[5]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1492 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1493 = data
  i1492.enabled = !!i1493[0]
  i1492.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[1], i1492.limit)
  i1492.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[2], i1492.limitX)
  i1492.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[3], i1492.limitY)
  i1492.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[4], i1492.limitZ)
  i1492.dampen = i1493[5]
  i1492.separateAxes = !!i1493[6]
  i1492.space = i1493[7]
  i1492.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[8], i1492.drag)
  i1492.multiplyDragByParticleSize = !!i1493[9]
  i1492.multiplyDragByParticleVelocity = !!i1493[10]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1495 = data
  i1494.enabled = !!i1495[0]
  request.r(i1495[1], i1495[2], 0, i1494, 'sharedMaterial')
  var i1497 = i1495[3]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 2) {
  request.r(i1497[i + 0], i1497[i + 1], 2, i1496, '')
  }
  i1494.sharedMaterials = i1496
  i1494.receiveShadows = !!i1495[4]
  i1494.shadowCastingMode = i1495[5]
  i1494.sortingLayerID = i1495[6]
  i1494.sortingOrder = i1495[7]
  i1494.lightmapIndex = i1495[8]
  i1494.lightmapSceneIndex = i1495[9]
  i1494.lightmapScaleOffset = new pc.Vec4( i1495[10], i1495[11], i1495[12], i1495[13] )
  i1494.lightProbeUsage = i1495[14]
  i1494.reflectionProbeUsage = i1495[15]
  request.r(i1495[16], i1495[17], 0, i1494, 'mesh')
  i1494.meshCount = i1495[18]
  i1494.activeVertexStreamsCount = i1495[19]
  i1494.alignment = i1495[20]
  i1494.renderMode = i1495[21]
  i1494.sortMode = i1495[22]
  i1494.lengthScale = i1495[23]
  i1494.velocityScale = i1495[24]
  i1494.cameraVelocityScale = i1495[25]
  i1494.normalDirection = i1495[26]
  i1494.sortingFudge = i1495[27]
  i1494.minParticleSize = i1495[28]
  i1494.maxParticleSize = i1495[29]
  i1494.pivot = new pc.Vec3( i1495[30], i1495[31], i1495[32] )
  request.r(i1495[33], i1495[34], 0, i1494, 'trailMaterial')
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1499 = data
  i1498.name = i1499[0]
  i1498.halfPrecision = !!i1499[1]
  i1498.useUInt32IndexFormat = !!i1499[2]
  i1498.vertexCount = i1499[3]
  i1498.aabb = i1499[4]
  var i1501 = i1499[5]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( !!i1501[i + 0] );
  }
  i1498.streams = i1500
  i1498.vertices = i1499[6]
  var i1503 = i1499[7]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1503[i + 0]) );
  }
  i1498.subMeshes = i1502
  var i1505 = i1499[8]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 16) {
    i1504.push( new pc.Mat4().setData(i1505[i + 0], i1505[i + 1], i1505[i + 2], i1505[i + 3],  i1505[i + 4], i1505[i + 5], i1505[i + 6], i1505[i + 7],  i1505[i + 8], i1505[i + 9], i1505[i + 10], i1505[i + 11],  i1505[i + 12], i1505[i + 13], i1505[i + 14], i1505[i + 15]) );
  }
  i1498.bindposes = i1504
  var i1507 = i1499[9]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1507[i + 0]) );
  }
  i1498.blendShapes = i1506
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1513 = data
  i1512.triangles = i1513[0]
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1519 = data
  i1518.name = i1519[0]
  var i1521 = i1519[1]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1521[i + 0]) );
  }
  i1518.frames = i1520
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1522 = root || new pc.UnityMaterial()
  var i1523 = data
  i1522.name = i1523[0]
  request.r(i1523[1], i1523[2], 0, i1522, 'shader')
  i1522.renderQueue = i1523[3]
  i1522.enableInstancing = !!i1523[4]
  var i1525 = i1523[5]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1525[i + 0]) );
  }
  i1522.floatParameters = i1524
  var i1527 = i1523[6]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1527[i + 0]) );
  }
  i1522.colorParameters = i1526
  var i1529 = i1523[7]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1529[i + 0]) );
  }
  i1522.vectorParameters = i1528
  var i1531 = i1523[8]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1531[i + 0]) );
  }
  i1522.textureParameters = i1530
  var i1533 = i1523[9]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1533[i + 0]) );
  }
  i1522.materialFlags = i1532
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1537 = data
  i1536.name = i1537[0]
  i1536.value = i1537[1]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1541 = data
  i1540.name = i1541[0]
  i1540.value = new pc.Color(i1541[1], i1541[2], i1541[3], i1541[4])
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1545 = data
  i1544.name = i1545[0]
  i1544.value = new pc.Vec4( i1545[1], i1545[2], i1545[3], i1545[4] )
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1549 = data
  i1548.name = i1549[0]
  request.r(i1549[1], i1549[2], 0, i1548, 'value')
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1553 = data
  i1552.name = i1553[0]
  i1552.enabled = !!i1553[1]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1555 = data
  i1554.enabled = !!i1555[0]
  i1554.type = i1555[1]
  i1554.color = new pc.Color(i1555[2], i1555[3], i1555[4], i1555[5])
  i1554.cullingMask = i1555[6]
  i1554.intensity = i1555[7]
  i1554.range = i1555[8]
  i1554.spotAngle = i1555[9]
  i1554.shadows = i1555[10]
  i1554.shadowNormalBias = i1555[11]
  i1554.shadowBias = i1555[12]
  i1554.shadowStrength = i1555[13]
  i1554.shadowResolution = i1555[14]
  i1554.lightmapBakeType = i1555[15]
  i1554.renderMode = i1555[16]
  request.r(i1555[17], i1555[18], 0, i1554, 'cookie')
  i1554.cookieSize = i1555[19]
  return i1554
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i1557 = data
  i1556.m_Version = i1557[0]
  i1556.m_UsePipelineSettings = !!i1557[1]
  i1556.m_AdditionalLightsShadowResolutionTier = i1557[2]
  i1556.m_LightLayerMask = i1557[3]
  i1556.m_RenderingLayers = i1557[4]
  i1556.m_CustomShadowLayers = !!i1557[5]
  i1556.m_ShadowLayerMask = i1557[6]
  i1556.m_ShadowRenderingLayers = i1557[7]
  i1556.m_LightCookieSize = new pc.Vec2( i1557[8], i1557[9] )
  i1556.m_LightCookieOffset = new pc.Vec2( i1557[10], i1557[11] )
  i1556.m_SoftShadowQuality = i1557[12]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1559 = data
  i1558.enabled = !!i1559[0]
  request.r(i1559[1], i1559[2], 0, i1558, 'sharedMaterial')
  var i1561 = i1559[3]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 2) {
  request.r(i1561[i + 0], i1561[i + 1], 2, i1560, '')
  }
  i1558.sharedMaterials = i1560
  i1558.receiveShadows = !!i1559[4]
  i1558.shadowCastingMode = i1559[5]
  i1558.sortingLayerID = i1559[6]
  i1558.sortingOrder = i1559[7]
  i1558.lightmapIndex = i1559[8]
  i1558.lightmapSceneIndex = i1559[9]
  i1558.lightmapScaleOffset = new pc.Vec4( i1559[10], i1559[11], i1559[12], i1559[13] )
  i1558.lightProbeUsage = i1559[14]
  i1558.reflectionProbeUsage = i1559[15]
  i1558.color = new pc.Color(i1559[16], i1559[17], i1559[18], i1559[19])
  request.r(i1559[20], i1559[21], 0, i1558, 'sprite')
  i1558.flipX = !!i1559[22]
  i1558.flipY = !!i1559[23]
  i1558.drawMode = i1559[24]
  i1558.size = new pc.Vec2( i1559[25], i1559[26] )
  i1558.tileMode = i1559[27]
  i1558.adaptiveModeThreshold = i1559[28]
  i1558.maskInteraction = i1559[29]
  i1558.spriteSortPoint = i1559[30]
  return i1558
}

Deserializers["TitnSprite"] = function (request, data, root) {
  var i1562 = root || request.c( 'TitnSprite' )
  var i1563 = data
  request.r(i1563[0], i1563[1], 0, i1562, '_tank')
  i1562.offsetDistance = i1563[2]
  i1562.heightOffset = i1563[3]
  return i1562
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i1564 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i1565 = data
  i1564.OnlyDeactivate = !!i1565[0]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1567 = data
  request.r(i1567[0], i1567[1], 0, i1566, 'clip')
  request.r(i1567[2], i1567[3], 0, i1566, 'outputAudioMixerGroup')
  i1566.playOnAwake = !!i1567[4]
  i1566.loop = !!i1567[5]
  i1566.time = i1567[6]
  i1566.volume = i1567[7]
  i1566.pitch = i1567[8]
  i1566.enabled = !!i1567[9]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1569 = data
  i1568.mass = i1569[0]
  i1568.drag = i1569[1]
  i1568.angularDrag = i1569[2]
  i1568.useGravity = !!i1569[3]
  i1568.isKinematic = !!i1569[4]
  i1568.constraints = i1569[5]
  i1568.maxAngularVelocity = i1569[6]
  i1568.collisionDetectionMode = i1569[7]
  i1568.interpolation = i1569[8]
  return i1568
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i1570 = root || request.c( 'Howitzer.Projectile' )
  var i1571 = data
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1573 = data
  i1572.center = new pc.Vec3( i1573[0], i1573[1], i1573[2] )
  i1572.radius = i1573[3]
  i1572.height = i1573[4]
  i1572.direction = i1573[5]
  i1572.enabled = !!i1573[6]
  i1572.isTrigger = !!i1573[7]
  request.r(i1573[8], i1573[9], 0, i1572, 'material')
  return i1572
}

Deserializers["MissPoint"] = function (request, data, root) {
  var i1574 = root || request.c( 'MissPoint' )
  var i1575 = data
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1577 = data
  i1576.name = i1577[0]
  i1576.atlasId = i1577[1]
  i1576.mipmapCount = i1577[2]
  i1576.hdr = !!i1577[3]
  i1576.size = i1577[4]
  i1576.anisoLevel = i1577[5]
  i1576.filterMode = i1577[6]
  var i1579 = i1577[7]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 4) {
    i1578.push( UnityEngine.Rect.MinMaxRect(i1579[i + 0], i1579[i + 1], i1579[i + 2], i1579[i + 3]) );
  }
  i1576.rects = i1578
  i1576.wrapU = i1577[8]
  i1576.wrapV = i1577[9]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1583 = data
  i1582.name = i1583[0]
  i1582.index = i1583[1]
  i1582.startup = !!i1583[2]
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1585 = data
  i1584.enabled = !!i1585[0]
  i1584.aspect = i1585[1]
  i1584.orthographic = !!i1585[2]
  i1584.orthographicSize = i1585[3]
  i1584.backgroundColor = new pc.Color(i1585[4], i1585[5], i1585[6], i1585[7])
  i1584.nearClipPlane = i1585[8]
  i1584.farClipPlane = i1585[9]
  i1584.fieldOfView = i1585[10]
  i1584.depth = i1585[11]
  i1584.clearFlags = i1585[12]
  i1584.cullingMask = i1585[13]
  i1584.rect = i1585[14]
  request.r(i1585[15], i1585[16], 0, i1584, 'targetTexture')
  i1584.usePhysicalProperties = !!i1585[17]
  i1584.focalLength = i1585[18]
  i1584.sensorSize = new pc.Vec2( i1585[19], i1585[20] )
  i1584.lensShift = new pc.Vec2( i1585[21], i1585[22] )
  i1584.gateFit = i1585[23]
  i1584.commandBufferCount = i1585[24]
  i1584.cameraType = i1585[25]
  return i1584
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i1586 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i1587 = data
  request.r(i1587[0], i1587[1], 0, i1586, 'joystick')
  i1586.minYAngle = i1587[2]
  i1586.maxYAngle = i1587[3]
  i1586.rotationSpeed = i1587[4]
  return i1586
}

Deserializers["InteractiveArt"] = function (request, data, root) {
  var i1588 = root || request.c( 'InteractiveArt' )
  var i1589 = data
  request.r(i1589[0], i1589[1], 0, i1588, '_shopping')
  request.r(i1589[2], i1589[3], 0, i1588, '_arm')
  request.r(i1589[4], i1589[5], 0, i1588, '_arta1')
  request.r(i1589[6], i1589[7], 0, i1588, '_arta2')
  request.r(i1589[8], i1589[9], 0, i1588, '_particleSystem')
  request.r(i1589[10], i1589[11], 0, i1588, 'secondCamera')
  i1588.transitionSpeed = i1589[12]
  request.r(i1589[13], i1589[14], 0, i1588, '_audioSource')
  return i1588
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i1590 = root || request.c( 'Howitzer.LookAtReticle' )
  var i1591 = data
  request.r(i1591[0], i1591[1], 0, i1590, 'reticle')
  request.r(i1591[2], i1591[3], 0, i1590, 'mainCamera')
  i1590.rotationSpeed = i1591[4]
  i1590.maxPitchAngle = i1591[5]
  i1590.minPitchAngle = i1591[6]
  i1590.maxYawAngle = i1591[7]
  i1590.minYawAngle = i1591[8]
  return i1590
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i1592 = root || request.c( 'FollowBullet' )
  var i1593 = data
  i1592._smoothSpeed = i1593[0]
  i1592._offset = new pc.Vec3( i1593[1], i1593[2], i1593[3] )
  request.r(i1593[4], i1593[5], 0, i1592, '_aim')
  return i1592
}

Deserializers["HandAnimation"] = function (request, data, root) {
  var i1594 = root || request.c( 'HandAnimation' )
  var i1595 = data
  i1594.scaleSpeed = i1595[0]
  i1594.scaleAmount = i1595[1]
  return i1594
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i1596 = root || request.c( 'UI.PlayerUIController' )
  var i1597 = data
  request.r(i1597[0], i1597[1], 0, i1596, 'shootButton')
  request.r(i1597[2], i1597[3], 0, i1596, 'zoomButton')
  request.r(i1597[4], i1597[5], 0, i1596, '_cross')
  request.r(i1597[6], i1597[7], 0, i1596, '_mark')
  request.r(i1597[8], i1597[9], 0, i1596, '_tutorialHand2')
  return i1596
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i1598 = root || request.c( 'Howitzer.PlayerZoom' )
  var i1599 = data
  request.r(i1599[0], i1599[1], 0, i1598, 'crosshair')
  request.r(i1599[2], i1599[3], 0, i1598, 'mainCamera')
  request.r(i1599[4], i1599[5], 0, i1598, 'zoomImage')
  var i1601 = i1599[6]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 2) {
  request.r(i1601[i + 0], i1601[i + 1], 2, i1600, '')
  }
  i1598.objectsToDisable = i1600
  i1598.zoomFOV = i1599[7]
  i1598.normalFOV = i1599[8]
  i1598.zoomSpeed = i1599[9]
  request.r(i1599[10], i1599[11], 0, i1598, 'joystick')
  i1598.rotationSpeed = i1599[12]
  request.r(i1599[13], i1599[14], 0, i1598, 'pumping')
  request.r(i1599[15], i1599[16], 0, i1598, '_arm')
  request.r(i1599[17], i1599[18], 0, i1598, '_tacticsFabric')
  request.r(i1599[19], i1599[20], 0, i1598, '_titnSprite')
  return i1598
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i1604 = root || request.c( 'Howitzer.PlayerShooting' )
  var i1605 = data
  request.r(i1605[0], i1605[1], 0, i1604, 'playerShootingCooldown')
  request.r(i1605[2], i1605[3], 0, i1604, 'mainCamera')
  request.r(i1605[4], i1605[5], 0, i1604, 'crosshairUI')
  request.r(i1605[6], i1605[7], 0, i1604, 'muzzleFlash')
  request.r(i1605[8], i1605[9], 0, i1604, 'explosionEffect')
  request.r(i1605[10], i1605[11], 0, i1604, 'projectilePosition')
  request.r(i1605[12], i1605[13], 0, i1604, 'prefabProjectile')
  i1604.projectileSpeed = i1605[14]
  i1604.poolSize = i1605[15]
  request.r(i1605[16], i1605[17], 0, i1604, '_followBullet')
  request.r(i1605[18], i1605[19], 0, i1604, '_managerCamers')
  request.r(i1605[20], i1605[21], 0, i1604, '_timeController')
  request.r(i1605[22], i1605[23], 0, i1604, '_playerUIController')
  request.r(i1605[24], i1605[25], 0, i1604, '_tanksFabric')
  request.r(i1605[26], i1605[27], 0, i1604, '_missPoint')
  request.r(i1605[28], i1605[29], 0, i1604, '_pumping')
  request.r(i1605[30], i1605[31], 0, i1604, '_playerZoom')
  request.r(i1605[32], i1605[33], 0, i1604, '_aim')
  return i1604
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i1606 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i1607 = data
  request.r(i1607[0], i1607[1], 0, i1606, 'shootButton')
  request.r(i1607[2], i1607[3], 0, i1606, 'cooldownText')
  request.r(i1607[4], i1607[5], 0, i1606, 'cooldownImage')
  i1606.cooldownTime = i1607[6]
  return i1606
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.UI.Button' )
  var i1609 = data
  i1608.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1609[0], i1608.m_OnClick)
  i1608.m_Navigation = request.d('UnityEngine.UI.Navigation', i1609[1], i1608.m_Navigation)
  i1608.m_Transition = i1609[2]
  i1608.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1609[3], i1608.m_Colors)
  i1608.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1609[4], i1608.m_SpriteState)
  i1608.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1609[5], i1608.m_AnimationTriggers)
  i1608.m_Interactable = !!i1609[6]
  request.r(i1609[7], i1609[8], 0, i1608, 'm_TargetGraphic')
  return i1608
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1611 = data
  i1610.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1611[0], i1610.m_PersistentCalls)
  return i1610
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1613 = data
  var i1615 = i1613[0]
  var i1614 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.add(request.d('UnityEngine.Events.PersistentCall', i1615[i + 0]));
  }
  i1612.m_Calls = i1614
  return i1612
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'm_Target')
  i1618.m_TargetAssemblyTypeName = i1619[2]
  i1618.m_MethodName = i1619[3]
  i1618.m_Mode = i1619[4]
  i1618.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1619[5], i1618.m_Arguments)
  i1618.m_CallState = i1619[6]
  return i1618
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1621 = data
  i1620.m_Mode = i1621[0]
  i1620.m_WrapAround = !!i1621[1]
  request.r(i1621[2], i1621[3], 0, i1620, 'm_SelectOnUp')
  request.r(i1621[4], i1621[5], 0, i1620, 'm_SelectOnDown')
  request.r(i1621[6], i1621[7], 0, i1620, 'm_SelectOnLeft')
  request.r(i1621[8], i1621[9], 0, i1620, 'm_SelectOnRight')
  return i1620
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1623 = data
  i1622.m_NormalColor = new pc.Color(i1623[0], i1623[1], i1623[2], i1623[3])
  i1622.m_HighlightedColor = new pc.Color(i1623[4], i1623[5], i1623[6], i1623[7])
  i1622.m_PressedColor = new pc.Color(i1623[8], i1623[9], i1623[10], i1623[11])
  i1622.m_SelectedColor = new pc.Color(i1623[12], i1623[13], i1623[14], i1623[15])
  i1622.m_DisabledColor = new pc.Color(i1623[16], i1623[17], i1623[18], i1623[19])
  i1622.m_ColorMultiplier = i1623[20]
  i1622.m_FadeDuration = i1623[21]
  return i1622
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'm_HighlightedSprite')
  request.r(i1625[2], i1625[3], 0, i1624, 'm_PressedSprite')
  request.r(i1625[4], i1625[5], 0, i1624, 'm_SelectedSprite')
  request.r(i1625[6], i1625[7], 0, i1624, 'm_DisabledSprite')
  return i1624
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1627 = data
  i1626.m_NormalTrigger = i1627[0]
  i1626.m_HighlightedTrigger = i1627[1]
  i1626.m_PressedTrigger = i1627[2]
  i1626.m_SelectedTrigger = i1627[3]
  i1626.m_DisabledTrigger = i1627[4]
  return i1626
}

Deserializers["TutorialHand2"] = function (request, data, root) {
  var i1628 = root || request.c( 'TutorialHand2' )
  var i1629 = data
  i1628.scaleSpeed = i1629[0]
  i1628.scaleAmount = i1629[1]
  request.r(i1629[2], i1629[3], 0, i1628, '_shootButton')
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1631 = data
  i1630.usedByComposite = !!i1631[0]
  i1630.autoTiling = !!i1631[1]
  i1630.size = new pc.Vec2( i1631[2], i1631[3] )
  i1630.edgeRadius = i1631[4]
  i1630.enabled = !!i1631[5]
  i1630.isTrigger = !!i1631[6]
  i1630.usedByEffector = !!i1631[7]
  i1630.density = i1631[8]
  i1630.offset = new pc.Vec2( i1631[9], i1631[10] )
  request.r(i1631[11], i1631[12], 0, i1630, 'material')
  return i1630
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.UI.Text' )
  var i1633 = data
  i1632.m_FontData = request.d('UnityEngine.UI.FontData', i1633[0], i1632.m_FontData)
  i1632.m_Text = i1633[1]
  request.r(i1633[2], i1633[3], 0, i1632, 'm_Material')
  i1632.m_Maskable = !!i1633[4]
  i1632.m_Color = new pc.Color(i1633[5], i1633[6], i1633[7], i1633[8])
  i1632.m_RaycastTarget = !!i1633[9]
  i1632.m_RaycastPadding = new pc.Vec4( i1633[10], i1633[11], i1633[12], i1633[13] )
  return i1632
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'm_Font')
  i1634.m_FontSize = i1635[2]
  i1634.m_FontStyle = i1635[3]
  i1634.m_BestFit = !!i1635[4]
  i1634.m_MinSize = i1635[5]
  i1634.m_MaxSize = i1635[6]
  i1634.m_Alignment = i1635[7]
  i1634.m_AlignByGeometry = !!i1635[8]
  i1634.m_RichText = !!i1635[9]
  i1634.m_HorizontalOverflow = i1635[10]
  i1634.m_VerticalOverflow = i1635[11]
  i1634.m_LineSpacing = i1635[12]
  return i1634
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i1636 = root || request.c( 'TutorialHand' )
  var i1637 = data
  request.r(i1637[0], i1637[1], 0, i1636, 'handImage')
  i1636.moveDistance = i1637[2]
  i1636.moveDuration = i1637[3]
  request.r(i1637[4], i1637[5], 0, i1636, '_tutorialHand2')
  request.r(i1637[6], i1637[7], 0, i1636, '_shootButton')
  request.r(i1637[8], i1637[9], 0, i1636, '_zoomButton')
  return i1636
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i1638 = root || request.c( 'UI.CrosshairMovement' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'joystick')
  request.r(i1639[2], i1639[3], 0, i1638, 'crosshair')
  i1638.moveSpeed = i1639[4]
  request.r(i1639[5], i1639[6], 0, i1638, 'canvasRect')
  return i1638
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i1640 = root || request.c( 'UI.EndCardAnimation' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'background')
  request.r(i1641[2], i1641[3], 0, i1640, 'title')
  request.r(i1641[4], i1641[5], 0, i1640, 'logoAndButton')
  request.r(i1641[6], i1641[7], 0, i1640, 'titleText')
  i1640.fadeDuration = i1641[8]
  i1640.scaleDuration = i1641[9]
  i1640.scaleEase = i1641[10]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1643 = data
  i1642.m_Alpha = i1643[0]
  i1642.m_Interactable = !!i1643[1]
  i1642.m_BlocksRaycasts = !!i1643[2]
  i1642.m_IgnoreParentGroups = !!i1643[3]
  i1642.enabled = !!i1643[4]
  return i1642
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1645 = data
  i1644.m_AspectMode = i1645[0]
  i1644.m_AspectRatio = i1645[1]
  return i1644
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i1646 = root || request.c( 'UI.ButtonPulse' )
  var i1647 = data
  i1646.scaleMultiplier = i1647[0]
  i1646.duration = i1647[1]
  return i1646
}

Deserializers["Cross"] = function (request, data, root) {
  var i1648 = root || request.c( 'Cross' )
  var i1649 = data
  return i1648
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1651 = data
  request.r(i1651[0], i1651[1], 0, i1650, 'm_FirstSelected')
  i1650.m_sendNavigationEvents = !!i1651[2]
  i1650.m_DragThreshold = i1651[3]
  return i1650
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1653 = data
  i1652.m_HorizontalAxis = i1653[0]
  i1652.m_VerticalAxis = i1653[1]
  i1652.m_SubmitButton = i1653[2]
  i1652.m_CancelButton = i1653[3]
  i1652.m_InputActionsPerSecond = i1653[4]
  i1652.m_RepeatDelay = i1653[5]
  i1652.m_ForceModuleActive = !!i1653[6]
  i1652.m_SendPointerHoverToParent = !!i1653[7]
  return i1652
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i1654 = root || request.c( 'Bootstraps.Bootstrap' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'tanksFabric')
  request.r(i1655[2], i1655[3], 0, i1654, 'scenarioGame')
  return i1654
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i1656 = root || request.c( 'Fabric.TanksFabric' )
  var i1657 = data
  request.r(i1657[0], i1657[1], 0, i1656, 'tankPrefab')
  var i1659 = i1657[2]
  var i1658 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1659.length; i += 2) {
  request.r(i1659[i + 0], i1659[i + 1], 1, i1658, '')
  }
  i1656.spawnPoints = i1658
  var i1661 = i1657[3]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 2) {
  request.r(i1661[i + 0], i1661[i + 1], 2, i1660, '')
  }
  i1656.targets = i1660
  request.r(i1657[4], i1657[5], 0, i1656, '_target')
  return i1656
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i1666 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i1667 = data
  request.r(i1667[0], i1667[1], 0, i1666, 'endCard')
  request.r(i1667[2], i1667[3], 0, i1666, '_audioSource')
  return i1666
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i1668 = root || request.c( 'UI.TankKillStatistics' )
  var i1669 = data
  return i1668
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i1670 = root || request.c( 'ManagerCamers' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, '_plauerCamera')
  request.r(i1671[2], i1671[3], 0, i1670, '_bulletCamera')
  request.r(i1671[4], i1671[5], 0, i1670, '_timeController')
  request.r(i1671[6], i1671[7], 0, i1670, '_playerZoom')
  return i1670
}

Deserializers["TimeController"] = function (request, data, root) {
  var i1672 = root || request.c( 'TimeController' )
  var i1673 = data
  i1672.slowMotionScale = i1673[0]
  i1672.slowMotionDuration = i1673[1]
  i1672.restoreSpeedDuration = i1673[2]
  return i1672
}

Deserializers["Pumping"] = function (request, data, root) {
  var i1674 = root || request.c( 'Pumping' )
  var i1675 = data
  request.r(i1675[0], i1675[1], 0, i1674, 'm_Camera')
  request.r(i1675[2], i1675[3], 0, i1674, '_pumpingCamera')
  request.r(i1675[4], i1675[5], 0, i1674, '_UI')
  request.r(i1675[6], i1675[7], 0, i1674, '_arta1')
  request.r(i1675[8], i1675[9], 0, i1674, '_arm')
  request.r(i1675[10], i1675[11], 0, i1674, '_shopping')
  request.r(i1675[12], i1675[13], 0, i1674, '_interactiveArt')
  request.r(i1675[14], i1675[15], 0, i1674, '_tacticsFabric')
  request.r(i1675[16], i1675[17], 0, i1674, '_button')
  request.r(i1675[18], i1675[19], 0, i1674, '_titnSprite')
  request.r(i1675[20], i1675[21], 0, i1674, '_arm2')
  return i1674
}

Deserializers["Shopping"] = function (request, data, root) {
  var i1676 = root || request.c( 'Shopping' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, '_improveButton')
  request.r(i1677[2], i1677[3], 0, i1676, '_purchase')
  request.r(i1677[4], i1677[5], 0, i1676, '_unavailableWeaponButton')
  request.r(i1677[6], i1677[7], 0, i1676, '_shopping')
  request.r(i1677[8], i1677[9], 0, i1676, '_shoppingPlayer')
  request.r(i1677[10], i1677[11], 0, i1676, '_tanksFabric')
  request.r(i1677[12], i1677[13], 0, i1676, '_interactiveArt')
  request.r(i1677[14], i1677[15], 0, i1676, '_indicatorr')
  return i1676
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'm_ObjectArgument')
  i1678.m_ObjectArgumentAssemblyTypeName = i1679[2]
  i1678.m_IntArgument = i1679[3]
  i1678.m_FloatArgument = i1679[4]
  i1678.m_StringArgument = i1679[5]
  i1678.m_BoolArgument = !!i1679[6]
  return i1678
}

Deserializers["Indicatorr"] = function (request, data, root) {
  var i1680 = root || request.c( 'Indicatorr' )
  var i1681 = data
  i1680.fadeDuration = i1681[0]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1683 = data
  i1682.ambientIntensity = i1683[0]
  i1682.reflectionIntensity = i1683[1]
  i1682.ambientMode = i1683[2]
  i1682.ambientLight = new pc.Color(i1683[3], i1683[4], i1683[5], i1683[6])
  i1682.ambientSkyColor = new pc.Color(i1683[7], i1683[8], i1683[9], i1683[10])
  i1682.ambientGroundColor = new pc.Color(i1683[11], i1683[12], i1683[13], i1683[14])
  i1682.ambientEquatorColor = new pc.Color(i1683[15], i1683[16], i1683[17], i1683[18])
  i1682.fogColor = new pc.Color(i1683[19], i1683[20], i1683[21], i1683[22])
  i1682.fogEndDistance = i1683[23]
  i1682.fogStartDistance = i1683[24]
  i1682.fogDensity = i1683[25]
  i1682.fog = !!i1683[26]
  request.r(i1683[27], i1683[28], 0, i1682, 'skybox')
  i1682.fogMode = i1683[29]
  var i1685 = i1683[30]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1685[i + 0]) );
  }
  i1682.lightmaps = i1684
  i1682.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1683[31], i1682.lightProbes)
  i1682.lightmapsMode = i1683[32]
  i1682.mixedBakeMode = i1683[33]
  i1682.environmentLightingMode = i1683[34]
  i1682.ambientProbe = new pc.SphericalHarmonicsL2(i1683[35])
  i1682.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1683[36])
  i1682.useReferenceAmbientProbe = !!i1683[37]
  request.r(i1683[38], i1683[39], 0, i1682, 'customReflection')
  request.r(i1683[40], i1683[41], 0, i1682, 'defaultReflection')
  i1682.defaultReflectionMode = i1683[42]
  i1682.defaultReflectionResolution = i1683[43]
  i1682.sunLightObjectId = i1683[44]
  i1682.pixelLightCount = i1683[45]
  i1682.defaultReflectionHDR = !!i1683[46]
  i1682.hasLightDataAsset = !!i1683[47]
  i1682.hasManualGenerate = !!i1683[48]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1689 = data
  request.r(i1689[0], i1689[1], 0, i1688, 'lightmapColor')
  request.r(i1689[2], i1689[3], 0, i1688, 'lightmapDirection')
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1690 = root || new UnityEngine.LightProbes()
  var i1691 = data
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1699 = data
  var i1701 = i1699[0]
  var i1700 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1701[i + 0]));
  }
  i1698.ShaderCompilationErrors = i1700
  i1698.name = i1699[1]
  i1698.guid = i1699[2]
  var i1703 = i1699[3]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( i1703[i + 0] );
  }
  i1698.shaderDefinedKeywords = i1702
  var i1705 = i1699[4]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1705[i + 0]) );
  }
  i1698.passes = i1704
  var i1707 = i1699[5]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1707[i + 0]) );
  }
  i1698.usePasses = i1706
  var i1709 = i1699[6]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1709[i + 0]) );
  }
  i1698.defaultParameterValues = i1708
  request.r(i1699[7], i1699[8], 0, i1698, 'unityFallbackShader')
  i1698.readDepth = !!i1699[9]
  i1698.isCreatedByShaderGraph = !!i1699[10]
  i1698.compiled = !!i1699[11]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1713 = data
  i1712.shaderName = i1713[0]
  i1712.errorMessage = i1713[1]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1718 = root || new pc.UnityShaderPass()
  var i1719 = data
  i1718.id = i1719[0]
  i1718.subShaderIndex = i1719[1]
  i1718.name = i1719[2]
  i1718.passType = i1719[3]
  i1718.grabPassTextureName = i1719[4]
  i1718.usePass = !!i1719[5]
  i1718.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[6], i1718.zTest)
  i1718.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[7], i1718.zWrite)
  i1718.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[8], i1718.culling)
  i1718.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1719[9], i1718.blending)
  i1718.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1719[10], i1718.alphaBlending)
  i1718.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[11], i1718.colorWriteMask)
  i1718.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[12], i1718.offsetUnits)
  i1718.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[13], i1718.offsetFactor)
  i1718.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[14], i1718.stencilRef)
  i1718.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[15], i1718.stencilReadMask)
  i1718.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[16], i1718.stencilWriteMask)
  i1718.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1719[17], i1718.stencilOp)
  i1718.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1719[18], i1718.stencilOpFront)
  i1718.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1719[19], i1718.stencilOpBack)
  var i1721 = i1719[20]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1721[i + 0]) );
  }
  i1718.tags = i1720
  var i1723 = i1719[21]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( i1723[i + 0] );
  }
  i1718.passDefinedKeywords = i1722
  var i1725 = i1719[22]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1725[i + 0]) );
  }
  i1718.passDefinedKeywordGroups = i1724
  var i1727 = i1719[23]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1727[i + 0]) );
  }
  i1718.variants = i1726
  var i1729 = i1719[24]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1729[i + 0]) );
  }
  i1718.excludedVariants = i1728
  i1718.hasDepthReader = !!i1719[25]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1731 = data
  i1730.val = i1731[0]
  i1730.name = i1731[1]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1733 = data
  i1732.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[0], i1732.src)
  i1732.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[1], i1732.dst)
  i1732.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[2], i1732.op)
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1735 = data
  i1734.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1735[0], i1734.pass)
  i1734.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1735[1], i1734.fail)
  i1734.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1735[2], i1734.zFail)
  i1734.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1735[3], i1734.comp)
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1739 = data
  i1738.name = i1739[0]
  i1738.value = i1739[1]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1743 = data
  var i1745 = i1743[0]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( i1745[i + 0] );
  }
  i1742.keywords = i1744
  i1742.hasDiscard = !!i1743[1]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1749 = data
  i1748.passId = i1749[0]
  i1748.subShaderIndex = i1749[1]
  var i1751 = i1749[2]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( i1751[i + 0] );
  }
  i1748.keywords = i1750
  i1748.vertexProgram = i1749[3]
  i1748.fragmentProgram = i1749[4]
  i1748.exportedForWebGl2 = !!i1749[5]
  i1748.readDepth = !!i1749[6]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1755 = data
  request.r(i1755[0], i1755[1], 0, i1754, 'shader')
  i1754.pass = i1755[2]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1759 = data
  i1758.name = i1759[0]
  i1758.type = i1759[1]
  i1758.value = new pc.Vec4( i1759[2], i1759[3], i1759[4], i1759[5] )
  i1758.textureValue = i1759[6]
  i1758.shaderPropertyFlag = i1759[7]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1761 = data
  i1760.name = i1761[0]
  request.r(i1761[1], i1761[2], 0, i1760, 'texture')
  i1760.aabb = i1761[3]
  i1760.vertices = i1761[4]
  i1760.triangles = i1761[5]
  i1760.textureRect = UnityEngine.Rect.MinMaxRect(i1761[6], i1761[7], i1761[8], i1761[9])
  i1760.packedRect = UnityEngine.Rect.MinMaxRect(i1761[10], i1761[11], i1761[12], i1761[13])
  i1760.border = new pc.Vec4( i1761[14], i1761[15], i1761[16], i1761[17] )
  i1760.transparency = i1761[18]
  i1760.bounds = i1761[19]
  i1760.pixelsPerUnit = i1761[20]
  i1760.textureWidth = i1761[21]
  i1760.textureHeight = i1761[22]
  i1760.nativeSize = new pc.Vec2( i1761[23], i1761[24] )
  i1760.pivot = new pc.Vec2( i1761[25], i1761[26] )
  i1760.textureRectOffset = new pc.Vec2( i1761[27], i1761[28] )
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1763 = data
  i1762.name = i1763[0]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1765 = data
  i1764.name = i1765[0]
  i1764.ascent = i1765[1]
  i1764.originalLineHeight = i1765[2]
  i1764.fontSize = i1765[3]
  var i1767 = i1765[4]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1767[i + 0]) );
  }
  i1764.characterInfo = i1766
  request.r(i1765[5], i1765[6], 0, i1764, 'texture')
  i1764.originalFontSize = i1765[7]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1771 = data
  i1770.index = i1771[0]
  i1770.advance = i1771[1]
  i1770.bearing = i1771[2]
  i1770.glyphWidth = i1771[3]
  i1770.glyphHeight = i1771[4]
  i1770.minX = i1771[5]
  i1770.maxX = i1771[6]
  i1770.minY = i1771[7]
  i1770.maxY = i1771[8]
  i1770.uvBottomLeftX = i1771[9]
  i1770.uvBottomLeftY = i1771[10]
  i1770.uvBottomRightX = i1771[11]
  i1770.uvBottomRightY = i1771[12]
  i1770.uvTopLeftX = i1771[13]
  i1770.uvTopLeftY = i1771[14]
  i1770.uvTopRightX = i1771[15]
  i1770.uvTopRightY = i1771[16]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1773 = data
  var i1775 = i1773[0]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1775[i + 0]) );
  }
  i1772.files = i1774
  i1772.componentToPrefabIds = i1773[1]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1779 = data
  i1778.path = i1779[0]
  request.r(i1779[1], i1779[2], 0, i1778, 'unityObject')
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1781 = data
  var i1783 = i1781[0]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1783[i + 0]) );
  }
  i1780.scriptsExecutionOrder = i1782
  var i1785 = i1781[1]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1785[i + 0]) );
  }
  i1780.sortingLayers = i1784
  var i1787 = i1781[2]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1787[i + 0]) );
  }
  i1780.cullingLayers = i1786
  i1780.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1781[3], i1780.timeSettings)
  i1780.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1781[4], i1780.physicsSettings)
  i1780.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1781[5], i1780.physics2DSettings)
  i1780.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1781[6], i1780.qualitySettings)
  i1780.enableRealtimeShadows = !!i1781[7]
  i1780.enableAutoInstancing = !!i1781[8]
  i1780.enableDynamicBatching = !!i1781[9]
  i1780.lightmapEncodingQuality = i1781[10]
  i1780.desiredColorSpace = i1781[11]
  var i1789 = i1781[12]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( i1789[i + 0] );
  }
  i1780.allTags = i1788
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1793 = data
  i1792.name = i1793[0]
  i1792.value = i1793[1]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1797 = data
  i1796.id = i1797[0]
  i1796.name = i1797[1]
  i1796.value = i1797[2]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1801 = data
  i1800.id = i1801[0]
  i1800.name = i1801[1]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1803 = data
  i1802.fixedDeltaTime = i1803[0]
  i1802.maximumDeltaTime = i1803[1]
  i1802.timeScale = i1803[2]
  i1802.maximumParticleTimestep = i1803[3]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1805 = data
  i1804.gravity = new pc.Vec3( i1805[0], i1805[1], i1805[2] )
  i1804.defaultSolverIterations = i1805[3]
  i1804.bounceThreshold = i1805[4]
  i1804.autoSyncTransforms = !!i1805[5]
  i1804.autoSimulation = !!i1805[6]
  var i1807 = i1805[7]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1807[i + 0]) );
  }
  i1804.collisionMatrix = i1806
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1811 = data
  i1810.enabled = !!i1811[0]
  i1810.layerId = i1811[1]
  i1810.otherLayerId = i1811[2]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1813 = data
  request.r(i1813[0], i1813[1], 0, i1812, 'material')
  i1812.gravity = new pc.Vec2( i1813[2], i1813[3] )
  i1812.positionIterations = i1813[4]
  i1812.velocityIterations = i1813[5]
  i1812.velocityThreshold = i1813[6]
  i1812.maxLinearCorrection = i1813[7]
  i1812.maxAngularCorrection = i1813[8]
  i1812.maxTranslationSpeed = i1813[9]
  i1812.maxRotationSpeed = i1813[10]
  i1812.baumgarteScale = i1813[11]
  i1812.baumgarteTOIScale = i1813[12]
  i1812.timeToSleep = i1813[13]
  i1812.linearSleepTolerance = i1813[14]
  i1812.angularSleepTolerance = i1813[15]
  i1812.defaultContactOffset = i1813[16]
  i1812.autoSimulation = !!i1813[17]
  i1812.queriesHitTriggers = !!i1813[18]
  i1812.queriesStartInColliders = !!i1813[19]
  i1812.callbacksOnDisable = !!i1813[20]
  i1812.reuseCollisionCallbacks = !!i1813[21]
  i1812.autoSyncTransforms = !!i1813[22]
  var i1815 = i1813[23]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1815[i + 0]) );
  }
  i1812.collisionMatrix = i1814
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1819 = data
  i1818.enabled = !!i1819[0]
  i1818.layerId = i1819[1]
  i1818.otherLayerId = i1819[2]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1821 = data
  var i1823 = i1821[0]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1823[i + 0]) );
  }
  i1820.qualityLevels = i1822
  var i1825 = i1821[1]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( i1825[i + 0] );
  }
  i1820.names = i1824
  i1820.shadows = i1821[2]
  i1820.anisotropicFiltering = i1821[3]
  i1820.antiAliasing = i1821[4]
  i1820.lodBias = i1821[5]
  i1820.shadowCascades = i1821[6]
  i1820.shadowDistance = i1821[7]
  i1820.shadowmaskMode = i1821[8]
  i1820.shadowProjection = i1821[9]
  i1820.shadowResolution = i1821[10]
  i1820.softParticles = !!i1821[11]
  i1820.softVegetation = !!i1821[12]
  i1820.activeColorSpace = i1821[13]
  i1820.desiredColorSpace = i1821[14]
  i1820.masterTextureLimit = i1821[15]
  i1820.maxQueuedFrames = i1821[16]
  i1820.particleRaycastBudget = i1821[17]
  i1820.pixelLightCount = i1821[18]
  i1820.realtimeReflectionProbes = !!i1821[19]
  i1820.shadowCascade2Split = i1821[20]
  i1820.shadowCascade4Split = new pc.Vec3( i1821[21], i1821[22], i1821[23] )
  i1820.streamingMipmapsActive = !!i1821[24]
  i1820.vSyncCount = i1821[25]
  i1820.asyncUploadBufferSize = i1821[26]
  i1820.asyncUploadTimeSlice = i1821[27]
  i1820.billboardsFaceCameraPosition = !!i1821[28]
  i1820.shadowNearPlaneOffset = i1821[29]
  i1820.streamingMipmapsMemoryBudget = i1821[30]
  i1820.maximumLODLevel = i1821[31]
  i1820.streamingMipmapsAddAllCameras = !!i1821[32]
  i1820.streamingMipmapsMaxLevelReduction = i1821[33]
  i1820.streamingMipmapsRenderersPerFrame = i1821[34]
  i1820.resolutionScalingFixedDPIFactor = i1821[35]
  i1820.streamingMipmapsMaxFileIORequests = i1821[36]
  i1820.currentQualityLevel = i1821[37]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1831 = data
  i1830.weight = i1831[0]
  i1830.vertices = i1831[1]
  i1830.normals = i1831[2]
  i1830.tangents = i1831[3]
  return i1830
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[80],"81":[38],"82":[32],"83":[32],"84":[32],"85":[32],"86":[32],"87":[32],"88":[32],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[90],"98":[90],"99":[90],"100":[90],"101":[90],"102":[90],"103":[38],"104":[15],"105":[106],"107":[106],"17":[0],"108":[21],"29":[21],"109":[25],"110":[13],"111":[25],"112":[0],"113":[38],"114":[38],"26":[25],"115":[38],"116":[117],"118":[0],"119":[0],"19":[17],"3":[1,0],"63":[0],"18":[17],"120":[0],"121":[0],"122":[0],"123":[0],"124":[0],"125":[0],"126":[0],"127":[0],"128":[0],"129":[1,0],"130":[0],"131":[0],"132":[0],"133":[0],"56":[1,0],"134":[0],"135":[65],"136":[65],"66":[65],"137":[65],"138":[38],"139":[38],"140":[117],"141":[117],"142":[38],"143":[144]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","VariableJoystick","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.BoxCollider","BehaviourAI.TankAI","UnityEngine.GameObject","Tower","Gun","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","ExclamationMark","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.SpriteRenderer","TitnSprite","CFX_AutoDestructShuriken","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Rigidbody","Howitzer.Projectile","UnityEngine.CapsuleCollider","MissPoint","UnityEngine.LODGroup","UnityEngine.Cubemap","UnityEngine.Camera","UnityEngine.AudioListener","Howitzer.LookAtCrosshair","InteractiveArt","Howitzer.LookAtReticle","FollowBullet","HandAnimation","UI.PlayerUIController","UnityEngine.UI.Button","Cross","TutorialHand2","Howitzer.PlayerZoom","Pumping","Fabric.TanksFabric","Howitzer.PlayerShooting","Howitzer.PlayerShootingCooldown","ManagerCamers","TimeController","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","UnityEngine.Font","TutorialHand","UI.CrosshairMovement","UI.EndCardAnimation","UnityEngine.CanvasGroup","UnityEngine.UI.AspectRatioFitter","UI.ButtonPulse","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Bootstraps.Bootstrap","Bootstraps.ScenarioGame","UI.TankKillStatistics","Shopping","Indicatorr","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CFX_AutoStopLoopedEffect","CFX_LightIntensityFade","WFX_BulletHoleDecal","WFX_LightFlicker","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/12/2025 18:23:14";

Deserializers.lunaDaysRunning = "18.9";

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

Deserializers.buildID = "22d8e2db-bd2a-4981-bdd4-90aa5edaad50";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

