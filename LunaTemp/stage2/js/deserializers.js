var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1362 = root || request.c( 'UnityEngine.JointSpring' )
  var i1363 = data
  i1362.spring = i1363[0]
  i1362.damper = i1363[1]
  i1362.targetPosition = i1363[2]
  return i1362
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1364 = root || request.c( 'UnityEngine.JointMotor' )
  var i1365 = data
  i1364.m_TargetVelocity = i1365[0]
  i1364.m_Force = i1365[1]
  i1364.m_FreeSpin = i1365[2]
  return i1364
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1366 = root || request.c( 'UnityEngine.JointLimits' )
  var i1367 = data
  i1366.m_Min = i1367[0]
  i1366.m_Max = i1367[1]
  i1366.m_Bounciness = i1367[2]
  i1366.m_BounceMinVelocity = i1367[3]
  i1366.m_ContactDistance = i1367[4]
  i1366.minBounce = i1367[5]
  i1366.maxBounce = i1367[6]
  return i1366
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.JointDrive' )
  var i1369 = data
  i1368.m_PositionSpring = i1369[0]
  i1368.m_PositionDamper = i1369[1]
  i1368.m_MaximumForce = i1369[2]
  i1368.m_UseAcceleration = i1369[3]
  return i1368
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1370 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1371 = data
  i1370.m_Spring = i1371[0]
  i1370.m_Damper = i1371[1]
  return i1370
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1372 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1373 = data
  i1372.m_Limit = i1373[0]
  i1372.m_Bounciness = i1373[1]
  i1372.m_ContactDistance = i1373[2]
  return i1372
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1374 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1375 = data
  i1374.m_ExtremumSlip = i1375[0]
  i1374.m_ExtremumValue = i1375[1]
  i1374.m_AsymptoteSlip = i1375[2]
  i1374.m_AsymptoteValue = i1375[3]
  i1374.m_Stiffness = i1375[4]
  return i1374
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1377 = data
  i1376.m_LowerAngle = i1377[0]
  i1376.m_UpperAngle = i1377[1]
  return i1376
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1378 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1379 = data
  i1378.m_MotorSpeed = i1379[0]
  i1378.m_MaximumMotorTorque = i1379[1]
  return i1378
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1381 = data
  i1380.m_DampingRatio = i1381[0]
  i1380.m_Frequency = i1381[1]
  i1380.m_Angle = i1381[2]
  return i1380
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1383 = data
  i1382.m_LowerTranslation = i1383[0]
  i1382.m_UpperTranslation = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1385 = data
  i1384.pivot = new pc.Vec2( i1385[0], i1385[1] )
  i1384.anchorMin = new pc.Vec2( i1385[2], i1385[3] )
  i1384.anchorMax = new pc.Vec2( i1385[4], i1385[5] )
  i1384.sizeDelta = new pc.Vec2( i1385[6], i1385[7] )
  i1384.anchoredPosition3D = new pc.Vec3( i1385[8], i1385[9], i1385[10] )
  i1384.rotation = new pc.Quat(i1385[11], i1385[12], i1385[13], i1385[14])
  i1384.scale = new pc.Vec3( i1385[15], i1385[16], i1385[17] )
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1387 = data
  i1386.cullTransparentMesh = !!i1387[0]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1389 = data
  i1388.name = i1389[0]
  i1388.tagId = i1389[1]
  i1388.enabled = !!i1389[2]
  i1388.isStatic = !!i1389[3]
  i1388.layer = i1389[4]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1391 = data
  i1390.name = i1391[0]
  i1390.width = i1391[1]
  i1390.height = i1391[2]
  i1390.mipmapCount = i1391[3]
  i1390.anisoLevel = i1391[4]
  i1390.filterMode = i1391[5]
  i1390.hdr = !!i1391[6]
  i1390.format = i1391[7]
  i1390.wrapMode = i1391[8]
  i1390.alphaIsTransparency = !!i1391[9]
  i1390.alphaSource = i1391[10]
  i1390.graphicsFormat = i1391[11]
  i1390.sRGBTexture = !!i1391[12]
  i1390.desiredColorSpace = i1391[13]
  i1390.wrapU = i1391[14]
  i1390.wrapV = i1391[15]
  return i1390
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.UI.Image' )
  var i1393 = data
  request.r(i1393[0], i1393[1], 0, i1392, 'm_Sprite')
  i1392.m_Type = i1393[2]
  i1392.m_PreserveAspect = !!i1393[3]
  i1392.m_FillCenter = !!i1393[4]
  i1392.m_FillMethod = i1393[5]
  i1392.m_FillAmount = i1393[6]
  i1392.m_FillClockwise = !!i1393[7]
  i1392.m_FillOrigin = i1393[8]
  i1392.m_UseSpriteMesh = !!i1393[9]
  i1392.m_PixelsPerUnitMultiplier = i1393[10]
  request.r(i1393[11], i1393[12], 0, i1392, 'm_Material')
  i1392.m_Maskable = !!i1393[13]
  i1392.m_Color = new pc.Color(i1393[14], i1393[15], i1393[16], i1393[17])
  i1392.m_RaycastTarget = !!i1393[18]
  i1392.m_RaycastPadding = new pc.Vec4( i1393[19], i1393[20], i1393[21], i1393[22] )
  return i1392
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i1394 = root || request.c( 'VariableJoystick' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'handle')
  i1394.moveThreshold = i1395[2]
  i1394.joystickType = i1395[3]
  request.r(i1395[4], i1395[5], 0, i1394, 'background')
  i1394.handleRange = i1395[6]
  i1394.deadZone = i1395[7]
  i1394.axisOptions = i1395[8]
  i1394.snapX = !!i1395[9]
  i1394.snapY = !!i1395[10]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1397 = data
  i1396.position = new pc.Vec3( i1397[0], i1397[1], i1397[2] )
  i1396.scale = new pc.Vec3( i1397[3], i1397[4], i1397[5] )
  i1396.rotation = new pc.Quat(i1397[6], i1397[7], i1397[8], i1397[9])
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1399 = data
  i1398.center = new pc.Vec3( i1399[0], i1399[1], i1399[2] )
  i1398.size = new pc.Vec3( i1399[3], i1399[4], i1399[5] )
  i1398.enabled = !!i1399[6]
  i1398.isTrigger = !!i1399[7]
  request.r(i1399[8], i1399[9], 0, i1398, 'material')
  return i1398
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i1400 = root || request.c( 'BehaviourAI.TankAI' )
  var i1401 = data
  i1400.stopDistance = i1401[0]
  i1400.rotationSpeed = i1401[1]
  i1400.moveSpeed = i1401[2]
  request.r(i1401[3], i1401[4], 0, i1400, '_exclamationMark')
  request.r(i1401[5], i1401[6], 0, i1400, '_guidance')
  i1400.avoidanceDistance = i1401[7]
  i1400.tankLayer = UnityEngine.LayerMask.FromIntegerValue( i1401[8] )
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1403 = data
  request.r(i1403[0], i1403[1], 0, i1402, 'sharedMesh')
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1405 = data
  request.r(i1405[0], i1405[1], 0, i1404, 'additionalVertexStreams')
  i1404.enabled = !!i1405[2]
  request.r(i1405[3], i1405[4], 0, i1404, 'sharedMaterial')
  var i1407 = i1405[5]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 2) {
  request.r(i1407[i + 0], i1407[i + 1], 2, i1406, '')
  }
  i1404.sharedMaterials = i1406
  i1404.receiveShadows = !!i1405[6]
  i1404.shadowCastingMode = i1405[7]
  i1404.sortingLayerID = i1405[8]
  i1404.sortingOrder = i1405[9]
  i1404.lightmapIndex = i1405[10]
  i1404.lightmapSceneIndex = i1405[11]
  i1404.lightmapScaleOffset = new pc.Vec4( i1405[12], i1405[13], i1405[14], i1405[15] )
  i1404.lightProbeUsage = i1405[16]
  i1404.reflectionProbeUsage = i1405[17]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1411 = data
  i1410.enabled = !!i1411[0]
  i1410.planeDistance = i1411[1]
  i1410.referencePixelsPerUnit = i1411[2]
  i1410.isFallbackOverlay = !!i1411[3]
  i1410.renderMode = i1411[4]
  i1410.renderOrder = i1411[5]
  i1410.sortingLayerName = i1411[6]
  i1410.sortingOrder = i1411[7]
  i1410.scaleFactor = i1411[8]
  request.r(i1411[9], i1411[10], 0, i1410, 'worldCamera')
  i1410.overrideSorting = !!i1411[11]
  i1410.pixelPerfect = !!i1411[12]
  i1410.targetDisplay = i1411[13]
  i1410.overridePixelPerfect = !!i1411[14]
  return i1410
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1413 = data
  i1412.m_UiScaleMode = i1413[0]
  i1412.m_ReferencePixelsPerUnit = i1413[1]
  i1412.m_ScaleFactor = i1413[2]
  i1412.m_ReferenceResolution = new pc.Vec2( i1413[3], i1413[4] )
  i1412.m_ScreenMatchMode = i1413[5]
  i1412.m_MatchWidthOrHeight = i1413[6]
  i1412.m_PhysicalUnit = i1413[7]
  i1412.m_FallbackScreenDPI = i1413[8]
  i1412.m_DefaultSpriteDPI = i1413[9]
  i1412.m_DynamicPixelsPerUnit = i1413[10]
  i1412.m_PresetInfoIsWorld = !!i1413[11]
  return i1412
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1414 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1415 = data
  i1414.m_IgnoreReversedGraphics = !!i1415[0]
  i1414.m_BlockingObjects = i1415[1]
  i1414.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1415[2] )
  return i1414
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i1416 = root || request.c( 'ExclamationMark' )
  var i1417 = data
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1419 = data
  i1418.name = i1419[0]
  i1418.halfPrecision = !!i1419[1]
  i1418.useUInt32IndexFormat = !!i1419[2]
  i1418.vertexCount = i1419[3]
  i1418.aabb = i1419[4]
  var i1421 = i1419[5]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( !!i1421[i + 0] );
  }
  i1418.streams = i1420
  i1418.vertices = i1419[6]
  var i1423 = i1419[7]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1423[i + 0]) );
  }
  i1418.subMeshes = i1422
  var i1425 = i1419[8]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 16) {
    i1424.push( new pc.Mat4().setData(i1425[i + 0], i1425[i + 1], i1425[i + 2], i1425[i + 3],  i1425[i + 4], i1425[i + 5], i1425[i + 6], i1425[i + 7],  i1425[i + 8], i1425[i + 9], i1425[i + 10], i1425[i + 11],  i1425[i + 12], i1425[i + 13], i1425[i + 14], i1425[i + 15]) );
  }
  i1418.bindposes = i1424
  var i1427 = i1419[9]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1427[i + 0]) );
  }
  i1418.blendShapes = i1426
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1433 = data
  i1432.triangles = i1433[0]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1439 = data
  i1438.name = i1439[0]
  var i1441 = i1439[1]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1441[i + 0]) );
  }
  i1438.frames = i1440
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1442 = root || new pc.UnityMaterial()
  var i1443 = data
  i1442.name = i1443[0]
  request.r(i1443[1], i1443[2], 0, i1442, 'shader')
  i1442.renderQueue = i1443[3]
  i1442.enableInstancing = !!i1443[4]
  var i1445 = i1443[5]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1445[i + 0]) );
  }
  i1442.floatParameters = i1444
  var i1447 = i1443[6]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1447[i + 0]) );
  }
  i1442.colorParameters = i1446
  var i1449 = i1443[7]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1449[i + 0]) );
  }
  i1442.vectorParameters = i1448
  var i1451 = i1443[8]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1451[i + 0]) );
  }
  i1442.textureParameters = i1450
  var i1453 = i1443[9]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1453[i + 0]) );
  }
  i1442.materialFlags = i1452
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1457 = data
  i1456.name = i1457[0]
  i1456.value = i1457[1]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1461 = data
  i1460.name = i1461[0]
  i1460.value = new pc.Color(i1461[1], i1461[2], i1461[3], i1461[4])
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1465 = data
  i1464.name = i1465[0]
  i1464.value = new pc.Vec4( i1465[1], i1465[2], i1465[3], i1465[4] )
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1469 = data
  i1468.name = i1469[0]
  request.r(i1469[1], i1469[2], 0, i1468, 'value')
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1473 = data
  i1472.name = i1473[0]
  i1472.enabled = !!i1473[1]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1475 = data
  i1474.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1475[0], i1474.main)
  i1474.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1475[1], i1474.colorBySpeed)
  i1474.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1475[2], i1474.colorOverLifetime)
  i1474.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1475[3], i1474.emission)
  i1474.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1475[4], i1474.rotationBySpeed)
  i1474.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1475[5], i1474.rotationOverLifetime)
  i1474.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1475[6], i1474.shape)
  i1474.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1475[7], i1474.sizeBySpeed)
  i1474.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1475[8], i1474.sizeOverLifetime)
  i1474.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1475[9], i1474.textureSheetAnimation)
  i1474.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1475[10], i1474.velocityOverLifetime)
  i1474.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1475[11], i1474.noise)
  i1474.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1475[12], i1474.inheritVelocity)
  i1474.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1475[13], i1474.forceOverLifetime)
  i1474.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1475[14], i1474.limitVelocityOverLifetime)
  i1474.useAutoRandomSeed = !!i1475[15]
  i1474.randomSeed = i1475[16]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1476 = root || new pc.ParticleSystemMain()
  var i1477 = data
  i1476.duration = i1477[0]
  i1476.loop = !!i1477[1]
  i1476.prewarm = !!i1477[2]
  i1476.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[3], i1476.startDelay)
  i1476.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[4], i1476.startLifetime)
  i1476.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[5], i1476.startSpeed)
  i1476.startSize3D = !!i1477[6]
  i1476.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[7], i1476.startSizeX)
  i1476.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[8], i1476.startSizeY)
  i1476.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[9], i1476.startSizeZ)
  i1476.startRotation3D = !!i1477[10]
  i1476.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[11], i1476.startRotationX)
  i1476.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[12], i1476.startRotationY)
  i1476.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[13], i1476.startRotationZ)
  i1476.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1477[14], i1476.startColor)
  i1476.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1477[15], i1476.gravityModifier)
  i1476.simulationSpace = i1477[16]
  request.r(i1477[17], i1477[18], 0, i1476, 'customSimulationSpace')
  i1476.simulationSpeed = i1477[19]
  i1476.useUnscaledTime = !!i1477[20]
  i1476.scalingMode = i1477[21]
  i1476.playOnAwake = !!i1477[22]
  i1476.maxParticles = i1477[23]
  i1476.emitterVelocityMode = i1477[24]
  i1476.stopAction = i1477[25]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1478 = root || new pc.MinMaxCurve()
  var i1479 = data
  i1478.mode = i1479[0]
  i1478.curveMin = new pc.AnimationCurve( { keys_flow: i1479[1] } )
  i1478.curveMax = new pc.AnimationCurve( { keys_flow: i1479[2] } )
  i1478.curveMultiplier = i1479[3]
  i1478.constantMin = i1479[4]
  i1478.constantMax = i1479[5]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1480 = root || new pc.MinMaxGradient()
  var i1481 = data
  i1480.mode = i1481[0]
  i1480.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1481[1], i1480.gradientMin)
  i1480.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1481[2], i1480.gradientMax)
  i1480.colorMin = new pc.Color(i1481[3], i1481[4], i1481[5], i1481[6])
  i1480.colorMax = new pc.Color(i1481[7], i1481[8], i1481[9], i1481[10])
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1483 = data
  i1482.mode = i1483[0]
  var i1485 = i1483[1]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1485[i + 0]) );
  }
  i1482.colorKeys = i1484
  var i1487 = i1483[2]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1487[i + 0]) );
  }
  i1482.alphaKeys = i1486
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1488 = root || new pc.ParticleSystemColorBySpeed()
  var i1489 = data
  i1488.enabled = !!i1489[0]
  i1488.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1489[1], i1488.color)
  i1488.range = new pc.Vec2( i1489[2], i1489[3] )
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1493 = data
  i1492.color = new pc.Color(i1493[0], i1493[1], i1493[2], i1493[3])
  i1492.time = i1493[4]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1497 = data
  i1496.alpha = i1497[0]
  i1496.time = i1497[1]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1498 = root || new pc.ParticleSystemColorOverLifetime()
  var i1499 = data
  i1498.enabled = !!i1499[0]
  i1498.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1499[1], i1498.color)
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1500 = root || new pc.ParticleSystemEmitter()
  var i1501 = data
  i1500.enabled = !!i1501[0]
  i1500.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[1], i1500.rateOverTime)
  i1500.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1501[2], i1500.rateOverDistance)
  var i1503 = i1501[3]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1503[i + 0]) );
  }
  i1500.bursts = i1502
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1506 = root || new pc.ParticleSystemBurst()
  var i1507 = data
  i1506.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1507[0], i1506.count)
  i1506.cycleCount = i1507[1]
  i1506.minCount = i1507[2]
  i1506.maxCount = i1507[3]
  i1506.repeatInterval = i1507[4]
  i1506.time = i1507[5]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1508 = root || new pc.ParticleSystemRotationBySpeed()
  var i1509 = data
  i1508.enabled = !!i1509[0]
  i1508.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1509[1], i1508.x)
  i1508.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1509[2], i1508.y)
  i1508.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1509[3], i1508.z)
  i1508.separateAxes = !!i1509[4]
  i1508.range = new pc.Vec2( i1509[5], i1509[6] )
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1510 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1511 = data
  i1510.enabled = !!i1511[0]
  i1510.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1511[1], i1510.x)
  i1510.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1511[2], i1510.y)
  i1510.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1511[3], i1510.z)
  i1510.separateAxes = !!i1511[4]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1512 = root || new pc.ParticleSystemShape()
  var i1513 = data
  i1512.enabled = !!i1513[0]
  i1512.shapeType = i1513[1]
  i1512.randomDirectionAmount = i1513[2]
  i1512.sphericalDirectionAmount = i1513[3]
  i1512.randomPositionAmount = i1513[4]
  i1512.alignToDirection = !!i1513[5]
  i1512.radius = i1513[6]
  i1512.radiusMode = i1513[7]
  i1512.radiusSpread = i1513[8]
  i1512.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1513[9], i1512.radiusSpeed)
  i1512.radiusThickness = i1513[10]
  i1512.angle = i1513[11]
  i1512.length = i1513[12]
  i1512.boxThickness = new pc.Vec3( i1513[13], i1513[14], i1513[15] )
  i1512.meshShapeType = i1513[16]
  request.r(i1513[17], i1513[18], 0, i1512, 'mesh')
  request.r(i1513[19], i1513[20], 0, i1512, 'meshRenderer')
  request.r(i1513[21], i1513[22], 0, i1512, 'skinnedMeshRenderer')
  i1512.useMeshMaterialIndex = !!i1513[23]
  i1512.meshMaterialIndex = i1513[24]
  i1512.useMeshColors = !!i1513[25]
  i1512.normalOffset = i1513[26]
  i1512.arc = i1513[27]
  i1512.arcMode = i1513[28]
  i1512.arcSpread = i1513[29]
  i1512.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1513[30], i1512.arcSpeed)
  i1512.donutRadius = i1513[31]
  i1512.position = new pc.Vec3( i1513[32], i1513[33], i1513[34] )
  i1512.rotation = new pc.Vec3( i1513[35], i1513[36], i1513[37] )
  i1512.scale = new pc.Vec3( i1513[38], i1513[39], i1513[40] )
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1514 = root || new pc.ParticleSystemSizeBySpeed()
  var i1515 = data
  i1514.enabled = !!i1515[0]
  i1514.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1515[1], i1514.x)
  i1514.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1515[2], i1514.y)
  i1514.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1515[3], i1514.z)
  i1514.separateAxes = !!i1515[4]
  i1514.range = new pc.Vec2( i1515[5], i1515[6] )
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1516 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1517 = data
  i1516.enabled = !!i1517[0]
  i1516.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[1], i1516.x)
  i1516.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[2], i1516.y)
  i1516.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1517[3], i1516.z)
  i1516.separateAxes = !!i1517[4]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1518 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1519 = data
  i1518.enabled = !!i1519[0]
  i1518.mode = i1519[1]
  i1518.animation = i1519[2]
  i1518.numTilesX = i1519[3]
  i1518.numTilesY = i1519[4]
  i1518.useRandomRow = !!i1519[5]
  i1518.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1519[6], i1518.frameOverTime)
  i1518.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1519[7], i1518.startFrame)
  i1518.cycleCount = i1519[8]
  i1518.rowIndex = i1519[9]
  i1518.flipU = i1519[10]
  i1518.flipV = i1519[11]
  i1518.spriteCount = i1519[12]
  var i1521 = i1519[13]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 2) {
  request.r(i1521[i + 0], i1521[i + 1], 2, i1520, '')
  }
  i1518.sprites = i1520
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1524 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1525 = data
  i1524.enabled = !!i1525[0]
  i1524.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[1], i1524.x)
  i1524.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[2], i1524.y)
  i1524.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[3], i1524.z)
  i1524.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[4], i1524.radial)
  i1524.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[5], i1524.speedModifier)
  i1524.space = i1525[6]
  i1524.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[7], i1524.orbitalX)
  i1524.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[8], i1524.orbitalY)
  i1524.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[9], i1524.orbitalZ)
  i1524.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[10], i1524.orbitalOffsetX)
  i1524.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[11], i1524.orbitalOffsetY)
  i1524.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1525[12], i1524.orbitalOffsetZ)
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1526 = root || new pc.ParticleSystemNoise()
  var i1527 = data
  i1526.enabled = !!i1527[0]
  i1526.separateAxes = !!i1527[1]
  i1526.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[2], i1526.strengthX)
  i1526.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[3], i1526.strengthY)
  i1526.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[4], i1526.strengthZ)
  i1526.frequency = i1527[5]
  i1526.damping = !!i1527[6]
  i1526.octaveCount = i1527[7]
  i1526.octaveMultiplier = i1527[8]
  i1526.octaveScale = i1527[9]
  i1526.quality = i1527[10]
  i1526.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[11], i1526.scrollSpeed)
  i1526.scrollSpeedMultiplier = i1527[12]
  i1526.remapEnabled = !!i1527[13]
  i1526.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[14], i1526.remapX)
  i1526.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[15], i1526.remapY)
  i1526.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[16], i1526.remapZ)
  i1526.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[17], i1526.positionAmount)
  i1526.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[18], i1526.rotationAmount)
  i1526.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1527[19], i1526.sizeAmount)
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1528 = root || new pc.ParticleSystemInheritVelocity()
  var i1529 = data
  i1528.enabled = !!i1529[0]
  i1528.mode = i1529[1]
  i1528.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1529[2], i1528.curve)
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1530 = root || new pc.ParticleSystemForceOverLifetime()
  var i1531 = data
  i1530.enabled = !!i1531[0]
  i1530.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[1], i1530.x)
  i1530.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[2], i1530.y)
  i1530.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1531[3], i1530.z)
  i1530.space = i1531[4]
  i1530.randomized = !!i1531[5]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1532 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1533 = data
  i1532.enabled = !!i1533[0]
  i1532.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1533[1], i1532.limit)
  i1532.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1533[2], i1532.limitX)
  i1532.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1533[3], i1532.limitY)
  i1532.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1533[4], i1532.limitZ)
  i1532.dampen = i1533[5]
  i1532.separateAxes = !!i1533[6]
  i1532.space = i1533[7]
  i1532.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1533[8], i1532.drag)
  i1532.multiplyDragByParticleSize = !!i1533[9]
  i1532.multiplyDragByParticleVelocity = !!i1533[10]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1535 = data
  i1534.enabled = !!i1535[0]
  request.r(i1535[1], i1535[2], 0, i1534, 'sharedMaterial')
  var i1537 = i1535[3]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 2) {
  request.r(i1537[i + 0], i1537[i + 1], 2, i1536, '')
  }
  i1534.sharedMaterials = i1536
  i1534.receiveShadows = !!i1535[4]
  i1534.shadowCastingMode = i1535[5]
  i1534.sortingLayerID = i1535[6]
  i1534.sortingOrder = i1535[7]
  i1534.lightmapIndex = i1535[8]
  i1534.lightmapSceneIndex = i1535[9]
  i1534.lightmapScaleOffset = new pc.Vec4( i1535[10], i1535[11], i1535[12], i1535[13] )
  i1534.lightProbeUsage = i1535[14]
  i1534.reflectionProbeUsage = i1535[15]
  request.r(i1535[16], i1535[17], 0, i1534, 'mesh')
  i1534.meshCount = i1535[18]
  i1534.activeVertexStreamsCount = i1535[19]
  i1534.alignment = i1535[20]
  i1534.renderMode = i1535[21]
  i1534.sortMode = i1535[22]
  i1534.lengthScale = i1535[23]
  i1534.velocityScale = i1535[24]
  i1534.cameraVelocityScale = i1535[25]
  i1534.normalDirection = i1535[26]
  i1534.sortingFudge = i1535[27]
  i1534.minParticleSize = i1535[28]
  i1534.maxParticleSize = i1535[29]
  i1534.pivot = new pc.Vec3( i1535[30], i1535[31], i1535[32] )
  request.r(i1535[33], i1535[34], 0, i1534, 'trailMaterial')
  return i1534
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i1538 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i1539 = data
  i1538.OnlyDeactivate = !!i1539[0]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1541 = data
  i1540.enabled = !!i1541[0]
  i1540.type = i1541[1]
  i1540.color = new pc.Color(i1541[2], i1541[3], i1541[4], i1541[5])
  i1540.cullingMask = i1541[6]
  i1540.intensity = i1541[7]
  i1540.range = i1541[8]
  i1540.spotAngle = i1541[9]
  i1540.shadows = i1541[10]
  i1540.shadowNormalBias = i1541[11]
  i1540.shadowBias = i1541[12]
  i1540.shadowStrength = i1541[13]
  i1540.shadowResolution = i1541[14]
  i1540.lightmapBakeType = i1541[15]
  i1540.renderMode = i1541[16]
  request.r(i1541[17], i1541[18], 0, i1540, 'cookie')
  i1540.cookieSize = i1541[19]
  return i1540
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i1543 = data
  i1542.m_Version = i1543[0]
  i1542.m_UsePipelineSettings = !!i1543[1]
  i1542.m_AdditionalLightsShadowResolutionTier = i1543[2]
  i1542.m_LightLayerMask = i1543[3]
  i1542.m_RenderingLayers = i1543[4]
  i1542.m_CustomShadowLayers = !!i1543[5]
  i1542.m_ShadowLayerMask = i1543[6]
  i1542.m_ShadowRenderingLayers = i1543[7]
  i1542.m_LightCookieSize = new pc.Vec2( i1543[8], i1543[9] )
  i1542.m_LightCookieOffset = new pc.Vec2( i1543[10], i1543[11] )
  i1542.m_SoftShadowQuality = i1543[12]
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1545 = data
  i1544.enabled = !!i1545[0]
  request.r(i1545[1], i1545[2], 0, i1544, 'sharedMaterial')
  var i1547 = i1545[3]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 2) {
  request.r(i1547[i + 0], i1547[i + 1], 2, i1546, '')
  }
  i1544.sharedMaterials = i1546
  i1544.receiveShadows = !!i1545[4]
  i1544.shadowCastingMode = i1545[5]
  i1544.sortingLayerID = i1545[6]
  i1544.sortingOrder = i1545[7]
  i1544.lightmapIndex = i1545[8]
  i1544.lightmapSceneIndex = i1545[9]
  i1544.lightmapScaleOffset = new pc.Vec4( i1545[10], i1545[11], i1545[12], i1545[13] )
  i1544.lightProbeUsage = i1545[14]
  i1544.reflectionProbeUsage = i1545[15]
  i1544.color = new pc.Color(i1545[16], i1545[17], i1545[18], i1545[19])
  request.r(i1545[20], i1545[21], 0, i1544, 'sprite')
  i1544.flipX = !!i1545[22]
  i1544.flipY = !!i1545[23]
  i1544.drawMode = i1545[24]
  i1544.size = new pc.Vec2( i1545[25], i1545[26] )
  i1544.tileMode = i1545[27]
  i1544.adaptiveModeThreshold = i1545[28]
  i1544.maskInteraction = i1545[29]
  i1544.spriteSortPoint = i1545[30]
  return i1544
}

Deserializers["TitnSprite"] = function (request, data, root) {
  var i1548 = root || request.c( 'TitnSprite' )
  var i1549 = data
  request.r(i1549[0], i1549[1], 0, i1548, '_tank')
  i1548.offsetDistance = i1549[2]
  i1548.heightOffset = i1549[3]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1551 = data
  request.r(i1551[0], i1551[1], 0, i1550, 'clip')
  request.r(i1551[2], i1551[3], 0, i1550, 'outputAudioMixerGroup')
  i1550.playOnAwake = !!i1551[4]
  i1550.loop = !!i1551[5]
  i1550.time = i1551[6]
  i1550.volume = i1551[7]
  i1550.pitch = i1551[8]
  i1550.enabled = !!i1551[9]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1553 = data
  i1552.mass = i1553[0]
  i1552.drag = i1553[1]
  i1552.angularDrag = i1553[2]
  i1552.useGravity = !!i1553[3]
  i1552.isKinematic = !!i1553[4]
  i1552.constraints = i1553[5]
  i1552.maxAngularVelocity = i1553[6]
  i1552.collisionDetectionMode = i1553[7]
  i1552.interpolation = i1553[8]
  return i1552
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i1554 = root || request.c( 'Howitzer.Projectile' )
  var i1555 = data
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1557 = data
  i1556.center = new pc.Vec3( i1557[0], i1557[1], i1557[2] )
  i1556.radius = i1557[3]
  i1556.height = i1557[4]
  i1556.direction = i1557[5]
  i1556.enabled = !!i1557[6]
  i1556.isTrigger = !!i1557[7]
  request.r(i1557[8], i1557[9], 0, i1556, 'material')
  return i1556
}

Deserializers["MissPoint"] = function (request, data, root) {
  var i1558 = root || request.c( 'MissPoint' )
  var i1559 = data
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1561 = data
  i1560.name = i1561[0]
  i1560.atlasId = i1561[1]
  i1560.mipmapCount = i1561[2]
  i1560.hdr = !!i1561[3]
  i1560.size = i1561[4]
  i1560.anisoLevel = i1561[5]
  i1560.filterMode = i1561[6]
  var i1563 = i1561[7]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 4) {
    i1562.push( UnityEngine.Rect.MinMaxRect(i1563[i + 0], i1563[i + 1], i1563[i + 2], i1563[i + 3]) );
  }
  i1560.rects = i1562
  i1560.wrapU = i1561[8]
  i1560.wrapV = i1561[9]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1567 = data
  i1566.name = i1567[0]
  i1566.index = i1567[1]
  i1566.startup = !!i1567[2]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1569 = data
  i1568.enabled = !!i1569[0]
  i1568.aspect = i1569[1]
  i1568.orthographic = !!i1569[2]
  i1568.orthographicSize = i1569[3]
  i1568.backgroundColor = new pc.Color(i1569[4], i1569[5], i1569[6], i1569[7])
  i1568.nearClipPlane = i1569[8]
  i1568.farClipPlane = i1569[9]
  i1568.fieldOfView = i1569[10]
  i1568.depth = i1569[11]
  i1568.clearFlags = i1569[12]
  i1568.cullingMask = i1569[13]
  i1568.rect = i1569[14]
  request.r(i1569[15], i1569[16], 0, i1568, 'targetTexture')
  i1568.usePhysicalProperties = !!i1569[17]
  i1568.focalLength = i1569[18]
  i1568.sensorSize = new pc.Vec2( i1569[19], i1569[20] )
  i1568.lensShift = new pc.Vec2( i1569[21], i1569[22] )
  i1568.gateFit = i1569[23]
  i1568.commandBufferCount = i1569[24]
  i1568.cameraType = i1569[25]
  return i1568
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i1570 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i1571 = data
  request.r(i1571[0], i1571[1], 0, i1570, 'joystick')
  i1570.minYAngle = i1571[2]
  i1570.maxYAngle = i1571[3]
  i1570.rotationSpeed = i1571[4]
  return i1570
}

Deserializers["InteractiveArt"] = function (request, data, root) {
  var i1572 = root || request.c( 'InteractiveArt' )
  var i1573 = data
  request.r(i1573[0], i1573[1], 0, i1572, '_shopping')
  request.r(i1573[2], i1573[3], 0, i1572, '_arm')
  request.r(i1573[4], i1573[5], 0, i1572, '_arta1')
  request.r(i1573[6], i1573[7], 0, i1572, '_arta2')
  request.r(i1573[8], i1573[9], 0, i1572, '_particleSystem')
  request.r(i1573[10], i1573[11], 0, i1572, 'secondCamera')
  i1572.transitionSpeed = i1573[12]
  request.r(i1573[13], i1573[14], 0, i1572, '_audioSource')
  return i1572
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i1574 = root || request.c( 'Howitzer.LookAtReticle' )
  var i1575 = data
  request.r(i1575[0], i1575[1], 0, i1574, 'reticle')
  request.r(i1575[2], i1575[3], 0, i1574, 'mainCamera')
  i1574.rotationSpeed = i1575[4]
  i1574.maxPitchAngle = i1575[5]
  i1574.minPitchAngle = i1575[6]
  return i1574
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i1576 = root || request.c( 'FollowBullet' )
  var i1577 = data
  i1576._smoothSpeed = i1577[0]
  i1576._offset = new pc.Vec3( i1577[1], i1577[2], i1577[3] )
  return i1576
}

Deserializers["HandAnimation"] = function (request, data, root) {
  var i1578 = root || request.c( 'HandAnimation' )
  var i1579 = data
  i1578.scaleSpeed = i1579[0]
  i1578.scaleAmount = i1579[1]
  return i1578
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i1580 = root || request.c( 'UI.PlayerUIController' )
  var i1581 = data
  request.r(i1581[0], i1581[1], 0, i1580, 'shootButton')
  request.r(i1581[2], i1581[3], 0, i1580, 'zoomButton')
  request.r(i1581[4], i1581[5], 0, i1580, '_cross')
  request.r(i1581[6], i1581[7], 0, i1580, '_mark')
  request.r(i1581[8], i1581[9], 0, i1580, '_tutorialHand2')
  return i1580
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i1582 = root || request.c( 'Howitzer.PlayerZoom' )
  var i1583 = data
  request.r(i1583[0], i1583[1], 0, i1582, 'crosshair')
  request.r(i1583[2], i1583[3], 0, i1582, 'mainCamera')
  request.r(i1583[4], i1583[5], 0, i1582, 'zoomImage')
  var i1585 = i1583[6]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 2) {
  request.r(i1585[i + 0], i1585[i + 1], 2, i1584, '')
  }
  i1582.objectsToDisable = i1584
  i1582.zoomFOV = i1583[7]
  i1582.normalFOV = i1583[8]
  i1582.zoomSpeed = i1583[9]
  request.r(i1583[10], i1583[11], 0, i1582, 'joystick')
  i1582.rotationSpeed = i1583[12]
  request.r(i1583[13], i1583[14], 0, i1582, 'pumping')
  request.r(i1583[15], i1583[16], 0, i1582, '_arm')
  request.r(i1583[17], i1583[18], 0, i1582, '_tacticsFabric')
  request.r(i1583[19], i1583[20], 0, i1582, '_titnSprite')
  return i1582
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i1588 = root || request.c( 'Howitzer.PlayerShooting' )
  var i1589 = data
  request.r(i1589[0], i1589[1], 0, i1588, 'playerShootingCooldown')
  request.r(i1589[2], i1589[3], 0, i1588, 'mainCamera')
  request.r(i1589[4], i1589[5], 0, i1588, 'crosshairUI')
  request.r(i1589[6], i1589[7], 0, i1588, 'muzzleFlash')
  request.r(i1589[8], i1589[9], 0, i1588, 'explosionEffect')
  request.r(i1589[10], i1589[11], 0, i1588, 'projectilePosition')
  request.r(i1589[12], i1589[13], 0, i1588, 'prefabProjectile')
  i1588.projectileSpeed = i1589[14]
  i1588.poolSize = i1589[15]
  request.r(i1589[16], i1589[17], 0, i1588, '_followBullet')
  request.r(i1589[18], i1589[19], 0, i1588, '_managerCamers')
  request.r(i1589[20], i1589[21], 0, i1588, '_timeController')
  request.r(i1589[22], i1589[23], 0, i1588, '_playerUIController')
  request.r(i1589[24], i1589[25], 0, i1588, '_tanksFabric')
  request.r(i1589[26], i1589[27], 0, i1588, '_missPoint')
  request.r(i1589[28], i1589[29], 0, i1588, '_pumping')
  request.r(i1589[30], i1589[31], 0, i1588, '_playerZoom')
  request.r(i1589[32], i1589[33], 0, i1588, '_aim')
  return i1588
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i1590 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i1591 = data
  request.r(i1591[0], i1591[1], 0, i1590, 'shootButton')
  request.r(i1591[2], i1591[3], 0, i1590, 'cooldownText')
  request.r(i1591[4], i1591[5], 0, i1590, 'cooldownImage')
  i1590.cooldownTime = i1591[6]
  return i1590
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.UI.Button' )
  var i1593 = data
  i1592.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1593[0], i1592.m_OnClick)
  i1592.m_Navigation = request.d('UnityEngine.UI.Navigation', i1593[1], i1592.m_Navigation)
  i1592.m_Transition = i1593[2]
  i1592.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1593[3], i1592.m_Colors)
  i1592.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1593[4], i1592.m_SpriteState)
  i1592.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1593[5], i1592.m_AnimationTriggers)
  i1592.m_Interactable = !!i1593[6]
  request.r(i1593[7], i1593[8], 0, i1592, 'm_TargetGraphic')
  return i1592
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1595 = data
  i1594.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1595[0], i1594.m_PersistentCalls)
  return i1594
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1597 = data
  var i1599 = i1597[0]
  var i1598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.add(request.d('UnityEngine.Events.PersistentCall', i1599[i + 0]));
  }
  i1596.m_Calls = i1598
  return i1596
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1603 = data
  request.r(i1603[0], i1603[1], 0, i1602, 'm_Target')
  i1602.m_TargetAssemblyTypeName = i1603[2]
  i1602.m_MethodName = i1603[3]
  i1602.m_Mode = i1603[4]
  i1602.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1603[5], i1602.m_Arguments)
  i1602.m_CallState = i1603[6]
  return i1602
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1605 = data
  i1604.m_Mode = i1605[0]
  i1604.m_WrapAround = !!i1605[1]
  request.r(i1605[2], i1605[3], 0, i1604, 'm_SelectOnUp')
  request.r(i1605[4], i1605[5], 0, i1604, 'm_SelectOnDown')
  request.r(i1605[6], i1605[7], 0, i1604, 'm_SelectOnLeft')
  request.r(i1605[8], i1605[9], 0, i1604, 'm_SelectOnRight')
  return i1604
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1607 = data
  i1606.m_NormalColor = new pc.Color(i1607[0], i1607[1], i1607[2], i1607[3])
  i1606.m_HighlightedColor = new pc.Color(i1607[4], i1607[5], i1607[6], i1607[7])
  i1606.m_PressedColor = new pc.Color(i1607[8], i1607[9], i1607[10], i1607[11])
  i1606.m_SelectedColor = new pc.Color(i1607[12], i1607[13], i1607[14], i1607[15])
  i1606.m_DisabledColor = new pc.Color(i1607[16], i1607[17], i1607[18], i1607[19])
  i1606.m_ColorMultiplier = i1607[20]
  i1606.m_FadeDuration = i1607[21]
  return i1606
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'm_HighlightedSprite')
  request.r(i1609[2], i1609[3], 0, i1608, 'm_PressedSprite')
  request.r(i1609[4], i1609[5], 0, i1608, 'm_SelectedSprite')
  request.r(i1609[6], i1609[7], 0, i1608, 'm_DisabledSprite')
  return i1608
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1611 = data
  i1610.m_NormalTrigger = i1611[0]
  i1610.m_HighlightedTrigger = i1611[1]
  i1610.m_PressedTrigger = i1611[2]
  i1610.m_SelectedTrigger = i1611[3]
  i1610.m_DisabledTrigger = i1611[4]
  return i1610
}

Deserializers["TutorialHand2"] = function (request, data, root) {
  var i1612 = root || request.c( 'TutorialHand2' )
  var i1613 = data
  i1612.scaleSpeed = i1613[0]
  i1612.scaleAmount = i1613[1]
  request.r(i1613[2], i1613[3], 0, i1612, '_shootButton')
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1615 = data
  i1614.usedByComposite = !!i1615[0]
  i1614.autoTiling = !!i1615[1]
  i1614.size = new pc.Vec2( i1615[2], i1615[3] )
  i1614.edgeRadius = i1615[4]
  i1614.enabled = !!i1615[5]
  i1614.isTrigger = !!i1615[6]
  i1614.usedByEffector = !!i1615[7]
  i1614.density = i1615[8]
  i1614.offset = new pc.Vec2( i1615[9], i1615[10] )
  request.r(i1615[11], i1615[12], 0, i1614, 'material')
  return i1614
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.UI.Text' )
  var i1617 = data
  i1616.m_FontData = request.d('UnityEngine.UI.FontData', i1617[0], i1616.m_FontData)
  i1616.m_Text = i1617[1]
  request.r(i1617[2], i1617[3], 0, i1616, 'm_Material')
  i1616.m_Maskable = !!i1617[4]
  i1616.m_Color = new pc.Color(i1617[5], i1617[6], i1617[7], i1617[8])
  i1616.m_RaycastTarget = !!i1617[9]
  i1616.m_RaycastPadding = new pc.Vec4( i1617[10], i1617[11], i1617[12], i1617[13] )
  return i1616
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'm_Font')
  i1618.m_FontSize = i1619[2]
  i1618.m_FontStyle = i1619[3]
  i1618.m_BestFit = !!i1619[4]
  i1618.m_MinSize = i1619[5]
  i1618.m_MaxSize = i1619[6]
  i1618.m_Alignment = i1619[7]
  i1618.m_AlignByGeometry = !!i1619[8]
  i1618.m_RichText = !!i1619[9]
  i1618.m_HorizontalOverflow = i1619[10]
  i1618.m_VerticalOverflow = i1619[11]
  i1618.m_LineSpacing = i1619[12]
  return i1618
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i1620 = root || request.c( 'TutorialHand' )
  var i1621 = data
  request.r(i1621[0], i1621[1], 0, i1620, 'handImage')
  i1620.moveDistance = i1621[2]
  i1620.moveDuration = i1621[3]
  request.r(i1621[4], i1621[5], 0, i1620, '_tutorialHand2')
  request.r(i1621[6], i1621[7], 0, i1620, '_shootButton')
  request.r(i1621[8], i1621[9], 0, i1620, '_zoomButton')
  return i1620
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i1622 = root || request.c( 'UI.CrosshairMovement' )
  var i1623 = data
  request.r(i1623[0], i1623[1], 0, i1622, 'joystick')
  request.r(i1623[2], i1623[3], 0, i1622, 'crosshair')
  i1622.moveSpeed = i1623[4]
  request.r(i1623[5], i1623[6], 0, i1622, 'canvasRect')
  return i1622
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i1624 = root || request.c( 'UI.EndCardAnimation' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'background')
  request.r(i1625[2], i1625[3], 0, i1624, 'title')
  request.r(i1625[4], i1625[5], 0, i1624, 'logoAndButton')
  request.r(i1625[6], i1625[7], 0, i1624, 'titleText')
  i1624.fadeDuration = i1625[8]
  i1624.scaleDuration = i1625[9]
  i1624.scaleEase = i1625[10]
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1627 = data
  i1626.m_Alpha = i1627[0]
  i1626.m_Interactable = !!i1627[1]
  i1626.m_BlocksRaycasts = !!i1627[2]
  i1626.m_IgnoreParentGroups = !!i1627[3]
  i1626.enabled = !!i1627[4]
  return i1626
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1629 = data
  i1628.m_AspectMode = i1629[0]
  i1628.m_AspectRatio = i1629[1]
  return i1628
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i1630 = root || request.c( 'UI.ButtonPulse' )
  var i1631 = data
  i1630.scaleMultiplier = i1631[0]
  i1630.duration = i1631[1]
  return i1630
}

Deserializers["Cross"] = function (request, data, root) {
  var i1632 = root || request.c( 'Cross' )
  var i1633 = data
  return i1632
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'm_FirstSelected')
  i1634.m_sendNavigationEvents = !!i1635[2]
  i1634.m_DragThreshold = i1635[3]
  return i1634
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1637 = data
  i1636.m_HorizontalAxis = i1637[0]
  i1636.m_VerticalAxis = i1637[1]
  i1636.m_SubmitButton = i1637[2]
  i1636.m_CancelButton = i1637[3]
  i1636.m_InputActionsPerSecond = i1637[4]
  i1636.m_RepeatDelay = i1637[5]
  i1636.m_ForceModuleActive = !!i1637[6]
  i1636.m_SendPointerHoverToParent = !!i1637[7]
  return i1636
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i1638 = root || request.c( 'Bootstraps.Bootstrap' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, 'tanksFabric')
  request.r(i1639[2], i1639[3], 0, i1638, 'scenarioGame')
  return i1638
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i1640 = root || request.c( 'Fabric.TanksFabric' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'tankPrefab')
  var i1643 = i1641[2]
  var i1642 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1643.length; i += 2) {
  request.r(i1643[i + 0], i1643[i + 1], 1, i1642, '')
  }
  i1640.spawnPoints = i1642
  var i1645 = i1641[3]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 2) {
  request.r(i1645[i + 0], i1645[i + 1], 2, i1644, '')
  }
  i1640.targets = i1644
  return i1640
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i1650 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i1651 = data
  request.r(i1651[0], i1651[1], 0, i1650, 'endCard')
  request.r(i1651[2], i1651[3], 0, i1650, '_audioSource')
  return i1650
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i1652 = root || request.c( 'UI.TankKillStatistics' )
  var i1653 = data
  return i1652
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i1654 = root || request.c( 'ManagerCamers' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, '_plauerCamera')
  request.r(i1655[2], i1655[3], 0, i1654, '_bulletCamera')
  request.r(i1655[4], i1655[5], 0, i1654, '_timeController')
  request.r(i1655[6], i1655[7], 0, i1654, '_playerZoom')
  return i1654
}

Deserializers["TimeController"] = function (request, data, root) {
  var i1656 = root || request.c( 'TimeController' )
  var i1657 = data
  i1656.slowMotionScale = i1657[0]
  i1656.slowMotionDuration = i1657[1]
  i1656.restoreSpeedDuration = i1657[2]
  return i1656
}

Deserializers["Pumping"] = function (request, data, root) {
  var i1658 = root || request.c( 'Pumping' )
  var i1659 = data
  request.r(i1659[0], i1659[1], 0, i1658, 'm_Camera')
  request.r(i1659[2], i1659[3], 0, i1658, '_pumpingCamera')
  request.r(i1659[4], i1659[5], 0, i1658, '_UI')
  request.r(i1659[6], i1659[7], 0, i1658, '_arta1')
  request.r(i1659[8], i1659[9], 0, i1658, '_arm')
  request.r(i1659[10], i1659[11], 0, i1658, '_shopping')
  request.r(i1659[12], i1659[13], 0, i1658, '_interactiveArt')
  request.r(i1659[14], i1659[15], 0, i1658, '_tacticsFabric')
  request.r(i1659[16], i1659[17], 0, i1658, '_button')
  request.r(i1659[18], i1659[19], 0, i1658, '_titnSprite')
  request.r(i1659[20], i1659[21], 0, i1658, '_arm2')
  return i1658
}

Deserializers["Shopping"] = function (request, data, root) {
  var i1660 = root || request.c( 'Shopping' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, '_improveButton')
  request.r(i1661[2], i1661[3], 0, i1660, '_purchase')
  request.r(i1661[4], i1661[5], 0, i1660, '_unavailableWeaponButton')
  request.r(i1661[6], i1661[7], 0, i1660, '_shopping')
  request.r(i1661[8], i1661[9], 0, i1660, '_shoppingPlayer')
  request.r(i1661[10], i1661[11], 0, i1660, '_tanksFabric')
  request.r(i1661[12], i1661[13], 0, i1660, '_interactiveArt')
  request.r(i1661[14], i1661[15], 0, i1660, '_indicatorr')
  return i1660
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, 'm_ObjectArgument')
  i1662.m_ObjectArgumentAssemblyTypeName = i1663[2]
  i1662.m_IntArgument = i1663[3]
  i1662.m_FloatArgument = i1663[4]
  i1662.m_StringArgument = i1663[5]
  i1662.m_BoolArgument = !!i1663[6]
  return i1662
}

Deserializers["Indicatorr"] = function (request, data, root) {
  var i1664 = root || request.c( 'Indicatorr' )
  var i1665 = data
  i1664.fadeDuration = i1665[0]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1667 = data
  i1666.ambientIntensity = i1667[0]
  i1666.reflectionIntensity = i1667[1]
  i1666.ambientMode = i1667[2]
  i1666.ambientLight = new pc.Color(i1667[3], i1667[4], i1667[5], i1667[6])
  i1666.ambientSkyColor = new pc.Color(i1667[7], i1667[8], i1667[9], i1667[10])
  i1666.ambientGroundColor = new pc.Color(i1667[11], i1667[12], i1667[13], i1667[14])
  i1666.ambientEquatorColor = new pc.Color(i1667[15], i1667[16], i1667[17], i1667[18])
  i1666.fogColor = new pc.Color(i1667[19], i1667[20], i1667[21], i1667[22])
  i1666.fogEndDistance = i1667[23]
  i1666.fogStartDistance = i1667[24]
  i1666.fogDensity = i1667[25]
  i1666.fog = !!i1667[26]
  request.r(i1667[27], i1667[28], 0, i1666, 'skybox')
  i1666.fogMode = i1667[29]
  var i1669 = i1667[30]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1669[i + 0]) );
  }
  i1666.lightmaps = i1668
  i1666.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1667[31], i1666.lightProbes)
  i1666.lightmapsMode = i1667[32]
  i1666.mixedBakeMode = i1667[33]
  i1666.environmentLightingMode = i1667[34]
  i1666.ambientProbe = new pc.SphericalHarmonicsL2(i1667[35])
  i1666.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1667[36])
  i1666.useReferenceAmbientProbe = !!i1667[37]
  request.r(i1667[38], i1667[39], 0, i1666, 'customReflection')
  request.r(i1667[40], i1667[41], 0, i1666, 'defaultReflection')
  i1666.defaultReflectionMode = i1667[42]
  i1666.defaultReflectionResolution = i1667[43]
  i1666.sunLightObjectId = i1667[44]
  i1666.pixelLightCount = i1667[45]
  i1666.defaultReflectionHDR = !!i1667[46]
  i1666.hasLightDataAsset = !!i1667[47]
  i1666.hasManualGenerate = !!i1667[48]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1673 = data
  request.r(i1673[0], i1673[1], 0, i1672, 'lightmapColor')
  request.r(i1673[2], i1673[3], 0, i1672, 'lightmapDirection')
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1674 = root || new UnityEngine.LightProbes()
  var i1675 = data
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1683 = data
  var i1685 = i1683[0]
  var i1684 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1685[i + 0]));
  }
  i1682.ShaderCompilationErrors = i1684
  i1682.name = i1683[1]
  i1682.guid = i1683[2]
  var i1687 = i1683[3]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( i1687[i + 0] );
  }
  i1682.shaderDefinedKeywords = i1686
  var i1689 = i1683[4]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1689[i + 0]) );
  }
  i1682.passes = i1688
  var i1691 = i1683[5]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1691[i + 0]) );
  }
  i1682.usePasses = i1690
  var i1693 = i1683[6]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1693[i + 0]) );
  }
  i1682.defaultParameterValues = i1692
  request.r(i1683[7], i1683[8], 0, i1682, 'unityFallbackShader')
  i1682.readDepth = !!i1683[9]
  i1682.isCreatedByShaderGraph = !!i1683[10]
  i1682.compiled = !!i1683[11]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1697 = data
  i1696.shaderName = i1697[0]
  i1696.errorMessage = i1697[1]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1702 = root || new pc.UnityShaderPass()
  var i1703 = data
  i1702.id = i1703[0]
  i1702.subShaderIndex = i1703[1]
  i1702.name = i1703[2]
  i1702.passType = i1703[3]
  i1702.grabPassTextureName = i1703[4]
  i1702.usePass = !!i1703[5]
  i1702.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1703[6], i1702.zTest)
  i1702.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1703[7], i1702.zWrite)
  i1702.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1703[8], i1702.culling)
  i1702.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1703[9], i1702.blending)
  i1702.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1703[10], i1702.alphaBlending)
  i1702.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1703[11], i1702.colorWriteMask)
  i1702.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1703[12], i1702.offsetUnits)
  i1702.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1703[13], i1702.offsetFactor)
  i1702.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1703[14], i1702.stencilRef)
  i1702.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1703[15], i1702.stencilReadMask)
  i1702.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1703[16], i1702.stencilWriteMask)
  i1702.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1703[17], i1702.stencilOp)
  i1702.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1703[18], i1702.stencilOpFront)
  i1702.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1703[19], i1702.stencilOpBack)
  var i1705 = i1703[20]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1705[i + 0]) );
  }
  i1702.tags = i1704
  var i1707 = i1703[21]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( i1707[i + 0] );
  }
  i1702.passDefinedKeywords = i1706
  var i1709 = i1703[22]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1709[i + 0]) );
  }
  i1702.passDefinedKeywordGroups = i1708
  var i1711 = i1703[23]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1711[i + 0]) );
  }
  i1702.variants = i1710
  var i1713 = i1703[24]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1713[i + 0]) );
  }
  i1702.excludedVariants = i1712
  i1702.hasDepthReader = !!i1703[25]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1715 = data
  i1714.val = i1715[0]
  i1714.name = i1715[1]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1717 = data
  i1716.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[0], i1716.src)
  i1716.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[1], i1716.dst)
  i1716.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[2], i1716.op)
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1719 = data
  i1718.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[0], i1718.pass)
  i1718.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[1], i1718.fail)
  i1718.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[2], i1718.zFail)
  i1718.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1719[3], i1718.comp)
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1723 = data
  i1722.name = i1723[0]
  i1722.value = i1723[1]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1727 = data
  var i1729 = i1727[0]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( i1729[i + 0] );
  }
  i1726.keywords = i1728
  i1726.hasDiscard = !!i1727[1]
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1733 = data
  i1732.passId = i1733[0]
  i1732.subShaderIndex = i1733[1]
  var i1735 = i1733[2]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( i1735[i + 0] );
  }
  i1732.keywords = i1734
  i1732.vertexProgram = i1733[3]
  i1732.fragmentProgram = i1733[4]
  i1732.exportedForWebGl2 = !!i1733[5]
  i1732.readDepth = !!i1733[6]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1739 = data
  request.r(i1739[0], i1739[1], 0, i1738, 'shader')
  i1738.pass = i1739[2]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1743 = data
  i1742.name = i1743[0]
  i1742.type = i1743[1]
  i1742.value = new pc.Vec4( i1743[2], i1743[3], i1743[4], i1743[5] )
  i1742.textureValue = i1743[6]
  i1742.shaderPropertyFlag = i1743[7]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1745 = data
  i1744.name = i1745[0]
  request.r(i1745[1], i1745[2], 0, i1744, 'texture')
  i1744.aabb = i1745[3]
  i1744.vertices = i1745[4]
  i1744.triangles = i1745[5]
  i1744.textureRect = UnityEngine.Rect.MinMaxRect(i1745[6], i1745[7], i1745[8], i1745[9])
  i1744.packedRect = UnityEngine.Rect.MinMaxRect(i1745[10], i1745[11], i1745[12], i1745[13])
  i1744.border = new pc.Vec4( i1745[14], i1745[15], i1745[16], i1745[17] )
  i1744.transparency = i1745[18]
  i1744.bounds = i1745[19]
  i1744.pixelsPerUnit = i1745[20]
  i1744.textureWidth = i1745[21]
  i1744.textureHeight = i1745[22]
  i1744.nativeSize = new pc.Vec2( i1745[23], i1745[24] )
  i1744.pivot = new pc.Vec2( i1745[25], i1745[26] )
  i1744.textureRectOffset = new pc.Vec2( i1745[27], i1745[28] )
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1747 = data
  i1746.name = i1747[0]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1749 = data
  i1748.name = i1749[0]
  i1748.ascent = i1749[1]
  i1748.originalLineHeight = i1749[2]
  i1748.fontSize = i1749[3]
  var i1751 = i1749[4]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1751[i + 0]) );
  }
  i1748.characterInfo = i1750
  request.r(i1749[5], i1749[6], 0, i1748, 'texture')
  i1748.originalFontSize = i1749[7]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1755 = data
  i1754.index = i1755[0]
  i1754.advance = i1755[1]
  i1754.bearing = i1755[2]
  i1754.glyphWidth = i1755[3]
  i1754.glyphHeight = i1755[4]
  i1754.minX = i1755[5]
  i1754.maxX = i1755[6]
  i1754.minY = i1755[7]
  i1754.maxY = i1755[8]
  i1754.uvBottomLeftX = i1755[9]
  i1754.uvBottomLeftY = i1755[10]
  i1754.uvBottomRightX = i1755[11]
  i1754.uvBottomRightY = i1755[12]
  i1754.uvTopLeftX = i1755[13]
  i1754.uvTopLeftY = i1755[14]
  i1754.uvTopRightX = i1755[15]
  i1754.uvTopRightY = i1755[16]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1757 = data
  var i1759 = i1757[0]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1759[i + 0]) );
  }
  i1756.files = i1758
  i1756.componentToPrefabIds = i1757[1]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1763 = data
  i1762.path = i1763[0]
  request.r(i1763[1], i1763[2], 0, i1762, 'unityObject')
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1765 = data
  var i1767 = i1765[0]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1767[i + 0]) );
  }
  i1764.scriptsExecutionOrder = i1766
  var i1769 = i1765[1]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1769[i + 0]) );
  }
  i1764.sortingLayers = i1768
  var i1771 = i1765[2]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1771[i + 0]) );
  }
  i1764.cullingLayers = i1770
  i1764.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1765[3], i1764.timeSettings)
  i1764.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1765[4], i1764.physicsSettings)
  i1764.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1765[5], i1764.physics2DSettings)
  i1764.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1765[6], i1764.qualitySettings)
  i1764.enableRealtimeShadows = !!i1765[7]
  i1764.enableAutoInstancing = !!i1765[8]
  i1764.enableDynamicBatching = !!i1765[9]
  i1764.lightmapEncodingQuality = i1765[10]
  i1764.desiredColorSpace = i1765[11]
  var i1773 = i1765[12]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( i1773[i + 0] );
  }
  i1764.allTags = i1772
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1777 = data
  i1776.name = i1777[0]
  i1776.value = i1777[1]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1781 = data
  i1780.id = i1781[0]
  i1780.name = i1781[1]
  i1780.value = i1781[2]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1785 = data
  i1784.id = i1785[0]
  i1784.name = i1785[1]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1787 = data
  i1786.fixedDeltaTime = i1787[0]
  i1786.maximumDeltaTime = i1787[1]
  i1786.timeScale = i1787[2]
  i1786.maximumParticleTimestep = i1787[3]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1789 = data
  i1788.gravity = new pc.Vec3( i1789[0], i1789[1], i1789[2] )
  i1788.defaultSolverIterations = i1789[3]
  i1788.bounceThreshold = i1789[4]
  i1788.autoSyncTransforms = !!i1789[5]
  i1788.autoSimulation = !!i1789[6]
  var i1791 = i1789[7]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1791[i + 0]) );
  }
  i1788.collisionMatrix = i1790
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1795 = data
  i1794.enabled = !!i1795[0]
  i1794.layerId = i1795[1]
  i1794.otherLayerId = i1795[2]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1797 = data
  request.r(i1797[0], i1797[1], 0, i1796, 'material')
  i1796.gravity = new pc.Vec2( i1797[2], i1797[3] )
  i1796.positionIterations = i1797[4]
  i1796.velocityIterations = i1797[5]
  i1796.velocityThreshold = i1797[6]
  i1796.maxLinearCorrection = i1797[7]
  i1796.maxAngularCorrection = i1797[8]
  i1796.maxTranslationSpeed = i1797[9]
  i1796.maxRotationSpeed = i1797[10]
  i1796.baumgarteScale = i1797[11]
  i1796.baumgarteTOIScale = i1797[12]
  i1796.timeToSleep = i1797[13]
  i1796.linearSleepTolerance = i1797[14]
  i1796.angularSleepTolerance = i1797[15]
  i1796.defaultContactOffset = i1797[16]
  i1796.autoSimulation = !!i1797[17]
  i1796.queriesHitTriggers = !!i1797[18]
  i1796.queriesStartInColliders = !!i1797[19]
  i1796.callbacksOnDisable = !!i1797[20]
  i1796.reuseCollisionCallbacks = !!i1797[21]
  i1796.autoSyncTransforms = !!i1797[22]
  var i1799 = i1797[23]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1799[i + 0]) );
  }
  i1796.collisionMatrix = i1798
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1803 = data
  i1802.enabled = !!i1803[0]
  i1802.layerId = i1803[1]
  i1802.otherLayerId = i1803[2]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1805 = data
  var i1807 = i1805[0]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1807[i + 0]) );
  }
  i1804.qualityLevels = i1806
  var i1809 = i1805[1]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( i1809[i + 0] );
  }
  i1804.names = i1808
  i1804.shadows = i1805[2]
  i1804.anisotropicFiltering = i1805[3]
  i1804.antiAliasing = i1805[4]
  i1804.lodBias = i1805[5]
  i1804.shadowCascades = i1805[6]
  i1804.shadowDistance = i1805[7]
  i1804.shadowmaskMode = i1805[8]
  i1804.shadowProjection = i1805[9]
  i1804.shadowResolution = i1805[10]
  i1804.softParticles = !!i1805[11]
  i1804.softVegetation = !!i1805[12]
  i1804.activeColorSpace = i1805[13]
  i1804.desiredColorSpace = i1805[14]
  i1804.masterTextureLimit = i1805[15]
  i1804.maxQueuedFrames = i1805[16]
  i1804.particleRaycastBudget = i1805[17]
  i1804.pixelLightCount = i1805[18]
  i1804.realtimeReflectionProbes = !!i1805[19]
  i1804.shadowCascade2Split = i1805[20]
  i1804.shadowCascade4Split = new pc.Vec3( i1805[21], i1805[22], i1805[23] )
  i1804.streamingMipmapsActive = !!i1805[24]
  i1804.vSyncCount = i1805[25]
  i1804.asyncUploadBufferSize = i1805[26]
  i1804.asyncUploadTimeSlice = i1805[27]
  i1804.billboardsFaceCameraPosition = !!i1805[28]
  i1804.shadowNearPlaneOffset = i1805[29]
  i1804.streamingMipmapsMemoryBudget = i1805[30]
  i1804.maximumLODLevel = i1805[31]
  i1804.streamingMipmapsAddAllCameras = !!i1805[32]
  i1804.streamingMipmapsMaxLevelReduction = i1805[33]
  i1804.streamingMipmapsRenderersPerFrame = i1805[34]
  i1804.resolutionScalingFixedDPIFactor = i1805[35]
  i1804.streamingMipmapsMaxFileIORequests = i1805[36]
  i1804.currentQualityLevel = i1805[37]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1815 = data
  i1814.weight = i1815[0]
  i1814.vertices = i1815[1]
  i1814.normals = i1815[2]
  i1814.tangents = i1815[3]
  return i1814
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1817";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3632";

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

Deserializers.buildID = "f3fdf20c-46c2-4147-a9ec-f42201d8547a";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

