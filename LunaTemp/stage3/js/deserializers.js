var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1352 = root || request.c( 'UnityEngine.JointSpring' )
  var i1353 = data
  i1352.spring = i1353[0]
  i1352.damper = i1353[1]
  i1352.targetPosition = i1353[2]
  return i1352
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1354 = root || request.c( 'UnityEngine.JointMotor' )
  var i1355 = data
  i1354.m_TargetVelocity = i1355[0]
  i1354.m_Force = i1355[1]
  i1354.m_FreeSpin = i1355[2]
  return i1354
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1356 = root || request.c( 'UnityEngine.JointLimits' )
  var i1357 = data
  i1356.m_Min = i1357[0]
  i1356.m_Max = i1357[1]
  i1356.m_Bounciness = i1357[2]
  i1356.m_BounceMinVelocity = i1357[3]
  i1356.m_ContactDistance = i1357[4]
  i1356.minBounce = i1357[5]
  i1356.maxBounce = i1357[6]
  return i1356
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1358 = root || request.c( 'UnityEngine.JointDrive' )
  var i1359 = data
  i1358.m_PositionSpring = i1359[0]
  i1358.m_PositionDamper = i1359[1]
  i1358.m_MaximumForce = i1359[2]
  i1358.m_UseAcceleration = i1359[3]
  return i1358
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1361 = data
  i1360.m_Spring = i1361[0]
  i1360.m_Damper = i1361[1]
  return i1360
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1362 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1363 = data
  i1362.m_Limit = i1363[0]
  i1362.m_Bounciness = i1363[1]
  i1362.m_ContactDistance = i1363[2]
  return i1362
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1364 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1365 = data
  i1364.m_ExtremumSlip = i1365[0]
  i1364.m_ExtremumValue = i1365[1]
  i1364.m_AsymptoteSlip = i1365[2]
  i1364.m_AsymptoteValue = i1365[3]
  i1364.m_Stiffness = i1365[4]
  return i1364
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1366 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1367 = data
  i1366.m_LowerAngle = i1367[0]
  i1366.m_UpperAngle = i1367[1]
  return i1366
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1369 = data
  i1368.m_MotorSpeed = i1369[0]
  i1368.m_MaximumMotorTorque = i1369[1]
  return i1368
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1370 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1371 = data
  i1370.m_DampingRatio = i1371[0]
  i1370.m_Frequency = i1371[1]
  i1370.m_Angle = i1371[2]
  return i1370
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1372 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1373 = data
  i1372.m_LowerTranslation = i1373[0]
  i1372.m_UpperTranslation = i1373[1]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1375 = data
  i1374.pivot = new pc.Vec2( i1375[0], i1375[1] )
  i1374.anchorMin = new pc.Vec2( i1375[2], i1375[3] )
  i1374.anchorMax = new pc.Vec2( i1375[4], i1375[5] )
  i1374.sizeDelta = new pc.Vec2( i1375[6], i1375[7] )
  i1374.anchoredPosition3D = new pc.Vec3( i1375[8], i1375[9], i1375[10] )
  i1374.rotation = new pc.Quat(i1375[11], i1375[12], i1375[13], i1375[14])
  i1374.scale = new pc.Vec3( i1375[15], i1375[16], i1375[17] )
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1377 = data
  i1376.cullTransparentMesh = !!i1377[0]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1379 = data
  i1378.name = i1379[0]
  i1378.tagId = i1379[1]
  i1378.enabled = !!i1379[2]
  i1378.isStatic = !!i1379[3]
  i1378.layer = i1379[4]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1381 = data
  i1380.name = i1381[0]
  i1380.width = i1381[1]
  i1380.height = i1381[2]
  i1380.mipmapCount = i1381[3]
  i1380.anisoLevel = i1381[4]
  i1380.filterMode = i1381[5]
  i1380.hdr = !!i1381[6]
  i1380.format = i1381[7]
  i1380.wrapMode = i1381[8]
  i1380.alphaIsTransparency = !!i1381[9]
  i1380.alphaSource = i1381[10]
  i1380.graphicsFormat = i1381[11]
  i1380.sRGBTexture = !!i1381[12]
  i1380.desiredColorSpace = i1381[13]
  i1380.wrapU = i1381[14]
  i1380.wrapV = i1381[15]
  return i1380
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.UI.Image' )
  var i1383 = data
  request.r(i1383[0], i1383[1], 0, i1382, 'm_Sprite')
  i1382.m_Type = i1383[2]
  i1382.m_PreserveAspect = !!i1383[3]
  i1382.m_FillCenter = !!i1383[4]
  i1382.m_FillMethod = i1383[5]
  i1382.m_FillAmount = i1383[6]
  i1382.m_FillClockwise = !!i1383[7]
  i1382.m_FillOrigin = i1383[8]
  i1382.m_UseSpriteMesh = !!i1383[9]
  i1382.m_PixelsPerUnitMultiplier = i1383[10]
  request.r(i1383[11], i1383[12], 0, i1382, 'm_Material')
  i1382.m_Maskable = !!i1383[13]
  i1382.m_Color = new pc.Color(i1383[14], i1383[15], i1383[16], i1383[17])
  i1382.m_RaycastTarget = !!i1383[18]
  i1382.m_RaycastPadding = new pc.Vec4( i1383[19], i1383[20], i1383[21], i1383[22] )
  return i1382
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i1384 = root || request.c( 'VariableJoystick' )
  var i1385 = data
  request.r(i1385[0], i1385[1], 0, i1384, 'handle')
  i1384.moveThreshold = i1385[2]
  i1384.joystickType = i1385[3]
  request.r(i1385[4], i1385[5], 0, i1384, 'background')
  i1384.handleRange = i1385[6]
  i1384.deadZone = i1385[7]
  i1384.axisOptions = i1385[8]
  i1384.snapX = !!i1385[9]
  i1384.snapY = !!i1385[10]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1387 = data
  i1386.position = new pc.Vec3( i1387[0], i1387[1], i1387[2] )
  i1386.scale = new pc.Vec3( i1387[3], i1387[4], i1387[5] )
  i1386.rotation = new pc.Quat(i1387[6], i1387[7], i1387[8], i1387[9])
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1389 = data
  request.r(i1389[0], i1389[1], 0, i1388, 'sharedMesh')
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1391 = data
  request.r(i1391[0], i1391[1], 0, i1390, 'additionalVertexStreams')
  i1390.enabled = !!i1391[2]
  request.r(i1391[3], i1391[4], 0, i1390, 'sharedMaterial')
  var i1393 = i1391[5]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 2) {
  request.r(i1393[i + 0], i1393[i + 1], 2, i1392, '')
  }
  i1390.sharedMaterials = i1392
  i1390.receiveShadows = !!i1391[6]
  i1390.shadowCastingMode = i1391[7]
  i1390.sortingLayerID = i1391[8]
  i1390.sortingOrder = i1391[9]
  i1390.lightmapIndex = i1391[10]
  i1390.lightmapSceneIndex = i1391[11]
  i1390.lightmapScaleOffset = new pc.Vec4( i1391[12], i1391[13], i1391[14], i1391[15] )
  i1390.lightProbeUsage = i1391[16]
  i1390.reflectionProbeUsage = i1391[17]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1397 = data
  i1396.name = i1397[0]
  i1396.halfPrecision = !!i1397[1]
  i1396.useUInt32IndexFormat = !!i1397[2]
  i1396.vertexCount = i1397[3]
  i1396.aabb = i1397[4]
  var i1399 = i1397[5]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( !!i1399[i + 0] );
  }
  i1396.streams = i1398
  i1396.vertices = i1397[6]
  var i1401 = i1397[7]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1401[i + 0]) );
  }
  i1396.subMeshes = i1400
  var i1403 = i1397[8]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 16) {
    i1402.push( new pc.Mat4().setData(i1403[i + 0], i1403[i + 1], i1403[i + 2], i1403[i + 3],  i1403[i + 4], i1403[i + 5], i1403[i + 6], i1403[i + 7],  i1403[i + 8], i1403[i + 9], i1403[i + 10], i1403[i + 11],  i1403[i + 12], i1403[i + 13], i1403[i + 14], i1403[i + 15]) );
  }
  i1396.bindposes = i1402
  var i1405 = i1397[9]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1405[i + 0]) );
  }
  i1396.blendShapes = i1404
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1411 = data
  i1410.triangles = i1411[0]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1417 = data
  i1416.name = i1417[0]
  var i1419 = i1417[1]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1419[i + 0]) );
  }
  i1416.frames = i1418
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1420 = root || new pc.UnityMaterial()
  var i1421 = data
  i1420.name = i1421[0]
  request.r(i1421[1], i1421[2], 0, i1420, 'shader')
  i1420.renderQueue = i1421[3]
  i1420.enableInstancing = !!i1421[4]
  var i1423 = i1421[5]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1423[i + 0]) );
  }
  i1420.floatParameters = i1422
  var i1425 = i1421[6]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1425[i + 0]) );
  }
  i1420.colorParameters = i1424
  var i1427 = i1421[7]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1427[i + 0]) );
  }
  i1420.vectorParameters = i1426
  var i1429 = i1421[8]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1429[i + 0]) );
  }
  i1420.textureParameters = i1428
  var i1431 = i1421[9]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1431[i + 0]) );
  }
  i1420.materialFlags = i1430
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1435 = data
  i1434.name = i1435[0]
  i1434.value = i1435[1]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1439 = data
  i1438.name = i1439[0]
  i1438.value = new pc.Color(i1439[1], i1439[2], i1439[3], i1439[4])
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1443 = data
  i1442.name = i1443[0]
  i1442.value = new pc.Vec4( i1443[1], i1443[2], i1443[3], i1443[4] )
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1447 = data
  i1446.name = i1447[0]
  request.r(i1447[1], i1447[2], 0, i1446, 'value')
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1451 = data
  i1450.name = i1451[0]
  i1450.enabled = !!i1451[1]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1453 = data
  i1452.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1453[0], i1452.main)
  i1452.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1453[1], i1452.colorBySpeed)
  i1452.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1453[2], i1452.colorOverLifetime)
  i1452.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1453[3], i1452.emission)
  i1452.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1453[4], i1452.rotationBySpeed)
  i1452.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1453[5], i1452.rotationOverLifetime)
  i1452.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1453[6], i1452.shape)
  i1452.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1453[7], i1452.sizeBySpeed)
  i1452.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1453[8], i1452.sizeOverLifetime)
  i1452.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1453[9], i1452.textureSheetAnimation)
  i1452.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1453[10], i1452.velocityOverLifetime)
  i1452.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1453[11], i1452.noise)
  i1452.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1453[12], i1452.inheritVelocity)
  i1452.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1453[13], i1452.forceOverLifetime)
  i1452.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1453[14], i1452.limitVelocityOverLifetime)
  i1452.useAutoRandomSeed = !!i1453[15]
  i1452.randomSeed = i1453[16]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1454 = root || new pc.ParticleSystemMain()
  var i1455 = data
  i1454.duration = i1455[0]
  i1454.loop = !!i1455[1]
  i1454.prewarm = !!i1455[2]
  i1454.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[3], i1454.startDelay)
  i1454.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[4], i1454.startLifetime)
  i1454.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[5], i1454.startSpeed)
  i1454.startSize3D = !!i1455[6]
  i1454.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[7], i1454.startSizeX)
  i1454.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[8], i1454.startSizeY)
  i1454.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[9], i1454.startSizeZ)
  i1454.startRotation3D = !!i1455[10]
  i1454.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[11], i1454.startRotationX)
  i1454.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[12], i1454.startRotationY)
  i1454.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[13], i1454.startRotationZ)
  i1454.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1455[14], i1454.startColor)
  i1454.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[15], i1454.gravityModifier)
  i1454.simulationSpace = i1455[16]
  request.r(i1455[17], i1455[18], 0, i1454, 'customSimulationSpace')
  i1454.simulationSpeed = i1455[19]
  i1454.useUnscaledTime = !!i1455[20]
  i1454.scalingMode = i1455[21]
  i1454.playOnAwake = !!i1455[22]
  i1454.maxParticles = i1455[23]
  i1454.emitterVelocityMode = i1455[24]
  i1454.stopAction = i1455[25]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1456 = root || new pc.MinMaxCurve()
  var i1457 = data
  i1456.mode = i1457[0]
  i1456.curveMin = new pc.AnimationCurve( { keys_flow: i1457[1] } )
  i1456.curveMax = new pc.AnimationCurve( { keys_flow: i1457[2] } )
  i1456.curveMultiplier = i1457[3]
  i1456.constantMin = i1457[4]
  i1456.constantMax = i1457[5]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1458 = root || new pc.MinMaxGradient()
  var i1459 = data
  i1458.mode = i1459[0]
  i1458.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1459[1], i1458.gradientMin)
  i1458.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1459[2], i1458.gradientMax)
  i1458.colorMin = new pc.Color(i1459[3], i1459[4], i1459[5], i1459[6])
  i1458.colorMax = new pc.Color(i1459[7], i1459[8], i1459[9], i1459[10])
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1461 = data
  i1460.mode = i1461[0]
  var i1463 = i1461[1]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1463[i + 0]) );
  }
  i1460.colorKeys = i1462
  var i1465 = i1461[2]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1465[i + 0]) );
  }
  i1460.alphaKeys = i1464
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1466 = root || new pc.ParticleSystemColorBySpeed()
  var i1467 = data
  i1466.enabled = !!i1467[0]
  i1466.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1467[1], i1466.color)
  i1466.range = new pc.Vec2( i1467[2], i1467[3] )
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1471 = data
  i1470.color = new pc.Color(i1471[0], i1471[1], i1471[2], i1471[3])
  i1470.time = i1471[4]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1475 = data
  i1474.alpha = i1475[0]
  i1474.time = i1475[1]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1476 = root || new pc.ParticleSystemColorOverLifetime()
  var i1477 = data
  i1476.enabled = !!i1477[0]
  i1476.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1477[1], i1476.color)
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1478 = root || new pc.ParticleSystemEmitter()
  var i1479 = data
  i1478.enabled = !!i1479[0]
  i1478.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1479[1], i1478.rateOverTime)
  i1478.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1479[2], i1478.rateOverDistance)
  var i1481 = i1479[3]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1481[i + 0]) );
  }
  i1478.bursts = i1480
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1484 = root || new pc.ParticleSystemBurst()
  var i1485 = data
  i1484.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1485[0], i1484.count)
  i1484.cycleCount = i1485[1]
  i1484.minCount = i1485[2]
  i1484.maxCount = i1485[3]
  i1484.repeatInterval = i1485[4]
  i1484.time = i1485[5]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1486 = root || new pc.ParticleSystemRotationBySpeed()
  var i1487 = data
  i1486.enabled = !!i1487[0]
  i1486.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[1], i1486.x)
  i1486.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[2], i1486.y)
  i1486.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1487[3], i1486.z)
  i1486.separateAxes = !!i1487[4]
  i1486.range = new pc.Vec2( i1487[5], i1487[6] )
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1488 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1489 = data
  i1488.enabled = !!i1489[0]
  i1488.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1489[1], i1488.x)
  i1488.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1489[2], i1488.y)
  i1488.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1489[3], i1488.z)
  i1488.separateAxes = !!i1489[4]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1490 = root || new pc.ParticleSystemShape()
  var i1491 = data
  i1490.enabled = !!i1491[0]
  i1490.shapeType = i1491[1]
  i1490.randomDirectionAmount = i1491[2]
  i1490.sphericalDirectionAmount = i1491[3]
  i1490.randomPositionAmount = i1491[4]
  i1490.alignToDirection = !!i1491[5]
  i1490.radius = i1491[6]
  i1490.radiusMode = i1491[7]
  i1490.radiusSpread = i1491[8]
  i1490.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[9], i1490.radiusSpeed)
  i1490.radiusThickness = i1491[10]
  i1490.angle = i1491[11]
  i1490.length = i1491[12]
  i1490.boxThickness = new pc.Vec3( i1491[13], i1491[14], i1491[15] )
  i1490.meshShapeType = i1491[16]
  request.r(i1491[17], i1491[18], 0, i1490, 'mesh')
  request.r(i1491[19], i1491[20], 0, i1490, 'meshRenderer')
  request.r(i1491[21], i1491[22], 0, i1490, 'skinnedMeshRenderer')
  i1490.useMeshMaterialIndex = !!i1491[23]
  i1490.meshMaterialIndex = i1491[24]
  i1490.useMeshColors = !!i1491[25]
  i1490.normalOffset = i1491[26]
  i1490.arc = i1491[27]
  i1490.arcMode = i1491[28]
  i1490.arcSpread = i1491[29]
  i1490.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1491[30], i1490.arcSpeed)
  i1490.donutRadius = i1491[31]
  i1490.position = new pc.Vec3( i1491[32], i1491[33], i1491[34] )
  i1490.rotation = new pc.Vec3( i1491[35], i1491[36], i1491[37] )
  i1490.scale = new pc.Vec3( i1491[38], i1491[39], i1491[40] )
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1492 = root || new pc.ParticleSystemSizeBySpeed()
  var i1493 = data
  i1492.enabled = !!i1493[0]
  i1492.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[1], i1492.x)
  i1492.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[2], i1492.y)
  i1492.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1493[3], i1492.z)
  i1492.separateAxes = !!i1493[4]
  i1492.range = new pc.Vec2( i1493[5], i1493[6] )
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1494 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1495 = data
  i1494.enabled = !!i1495[0]
  i1494.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1495[1], i1494.x)
  i1494.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1495[2], i1494.y)
  i1494.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1495[3], i1494.z)
  i1494.separateAxes = !!i1495[4]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1496 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1497 = data
  i1496.enabled = !!i1497[0]
  i1496.mode = i1497[1]
  i1496.animation = i1497[2]
  i1496.numTilesX = i1497[3]
  i1496.numTilesY = i1497[4]
  i1496.useRandomRow = !!i1497[5]
  i1496.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1497[6], i1496.frameOverTime)
  i1496.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1497[7], i1496.startFrame)
  i1496.cycleCount = i1497[8]
  i1496.rowIndex = i1497[9]
  i1496.flipU = i1497[10]
  i1496.flipV = i1497[11]
  i1496.spriteCount = i1497[12]
  var i1499 = i1497[13]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 2) {
  request.r(i1499[i + 0], i1499[i + 1], 2, i1498, '')
  }
  i1496.sprites = i1498
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1502 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1503 = data
  i1502.enabled = !!i1503[0]
  i1502.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[1], i1502.x)
  i1502.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[2], i1502.y)
  i1502.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[3], i1502.z)
  i1502.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[4], i1502.radial)
  i1502.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[5], i1502.speedModifier)
  i1502.space = i1503[6]
  i1502.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[7], i1502.orbitalX)
  i1502.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[8], i1502.orbitalY)
  i1502.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[9], i1502.orbitalZ)
  i1502.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[10], i1502.orbitalOffsetX)
  i1502.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[11], i1502.orbitalOffsetY)
  i1502.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1503[12], i1502.orbitalOffsetZ)
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1504 = root || new pc.ParticleSystemNoise()
  var i1505 = data
  i1504.enabled = !!i1505[0]
  i1504.separateAxes = !!i1505[1]
  i1504.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[2], i1504.strengthX)
  i1504.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[3], i1504.strengthY)
  i1504.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[4], i1504.strengthZ)
  i1504.frequency = i1505[5]
  i1504.damping = !!i1505[6]
  i1504.octaveCount = i1505[7]
  i1504.octaveMultiplier = i1505[8]
  i1504.octaveScale = i1505[9]
  i1504.quality = i1505[10]
  i1504.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[11], i1504.scrollSpeed)
  i1504.scrollSpeedMultiplier = i1505[12]
  i1504.remapEnabled = !!i1505[13]
  i1504.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[14], i1504.remapX)
  i1504.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[15], i1504.remapY)
  i1504.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[16], i1504.remapZ)
  i1504.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[17], i1504.positionAmount)
  i1504.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[18], i1504.rotationAmount)
  i1504.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1505[19], i1504.sizeAmount)
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1506 = root || new pc.ParticleSystemInheritVelocity()
  var i1507 = data
  i1506.enabled = !!i1507[0]
  i1506.mode = i1507[1]
  i1506.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1507[2], i1506.curve)
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1508 = root || new pc.ParticleSystemForceOverLifetime()
  var i1509 = data
  i1508.enabled = !!i1509[0]
  i1508.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1509[1], i1508.x)
  i1508.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1509[2], i1508.y)
  i1508.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1509[3], i1508.z)
  i1508.space = i1509[4]
  i1508.randomized = !!i1509[5]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1510 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1511 = data
  i1510.enabled = !!i1511[0]
  i1510.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1511[1], i1510.limit)
  i1510.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1511[2], i1510.limitX)
  i1510.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1511[3], i1510.limitY)
  i1510.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1511[4], i1510.limitZ)
  i1510.dampen = i1511[5]
  i1510.separateAxes = !!i1511[6]
  i1510.space = i1511[7]
  i1510.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1511[8], i1510.drag)
  i1510.multiplyDragByParticleSize = !!i1511[9]
  i1510.multiplyDragByParticleVelocity = !!i1511[10]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1513 = data
  i1512.enabled = !!i1513[0]
  request.r(i1513[1], i1513[2], 0, i1512, 'sharedMaterial')
  var i1515 = i1513[3]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 2) {
  request.r(i1515[i + 0], i1515[i + 1], 2, i1514, '')
  }
  i1512.sharedMaterials = i1514
  i1512.receiveShadows = !!i1513[4]
  i1512.shadowCastingMode = i1513[5]
  i1512.sortingLayerID = i1513[6]
  i1512.sortingOrder = i1513[7]
  i1512.lightmapIndex = i1513[8]
  i1512.lightmapSceneIndex = i1513[9]
  i1512.lightmapScaleOffset = new pc.Vec4( i1513[10], i1513[11], i1513[12], i1513[13] )
  i1512.lightProbeUsage = i1513[14]
  i1512.reflectionProbeUsage = i1513[15]
  request.r(i1513[16], i1513[17], 0, i1512, 'mesh')
  i1512.meshCount = i1513[18]
  i1512.activeVertexStreamsCount = i1513[19]
  i1512.alignment = i1513[20]
  i1512.renderMode = i1513[21]
  i1512.sortMode = i1513[22]
  i1512.lengthScale = i1513[23]
  i1512.velocityScale = i1513[24]
  i1512.cameraVelocityScale = i1513[25]
  i1512.normalDirection = i1513[26]
  i1512.sortingFudge = i1513[27]
  i1512.minParticleSize = i1513[28]
  i1512.maxParticleSize = i1513[29]
  i1512.pivot = new pc.Vec3( i1513[30], i1513[31], i1513[32] )
  request.r(i1513[33], i1513[34], 0, i1512, 'trailMaterial')
  return i1512
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i1516 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i1517 = data
  i1516.OnlyDeactivate = !!i1517[0]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'clip')
  request.r(i1519[2], i1519[3], 0, i1518, 'outputAudioMixerGroup')
  i1518.playOnAwake = !!i1519[4]
  i1518.loop = !!i1519[5]
  i1518.time = i1519[6]
  i1518.volume = i1519[7]
  i1518.pitch = i1519[8]
  i1518.enabled = !!i1519[9]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1521 = data
  i1520.mass = i1521[0]
  i1520.drag = i1521[1]
  i1520.angularDrag = i1521[2]
  i1520.useGravity = !!i1521[3]
  i1520.isKinematic = !!i1521[4]
  i1520.constraints = i1521[5]
  i1520.maxAngularVelocity = i1521[6]
  i1520.collisionDetectionMode = i1521[7]
  i1520.interpolation = i1521[8]
  return i1520
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i1522 = root || request.c( 'Howitzer.Projectile' )
  var i1523 = data
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1525 = data
  i1524.center = new pc.Vec3( i1525[0], i1525[1], i1525[2] )
  i1524.radius = i1525[3]
  i1524.height = i1525[4]
  i1524.direction = i1525[5]
  i1524.enabled = !!i1525[6]
  i1524.isTrigger = !!i1525[7]
  request.r(i1525[8], i1525[9], 0, i1524, 'material')
  return i1524
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i1526 = root || request.c( 'BehaviourAI.TankAI' )
  var i1527 = data
  i1526.stopDistance = i1527[0]
  i1526.rotationSpeed = i1527[1]
  i1526.moveSpeed = i1527[2]
  request.r(i1527[3], i1527[4], 0, i1526, '_exclamationMark')
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1529 = data
  i1528.center = new pc.Vec3( i1529[0], i1529[1], i1529[2] )
  i1528.size = new pc.Vec3( i1529[3], i1529[4], i1529[5] )
  i1528.enabled = !!i1529[6]
  i1528.isTrigger = !!i1529[7]
  request.r(i1529[8], i1529[9], 0, i1528, 'material')
  return i1528
}

Deserializers["OutlineScript"] = function (request, data, root) {
  var i1530 = root || request.c( 'OutlineScript' )
  var i1531 = data
  i1530.outlineMode = i1531[0]
  i1530.outlineColor = new pc.Color(i1531[1], i1531[2], i1531[3], i1531[4])
  i1530.outlineWidth = i1531[5]
  i1530.precomputeOutline = !!i1531[6]
  var i1533 = i1531[7]
  var i1532 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Mesh')))
  for(var i = 0; i < i1533.length; i += 2) {
  request.r(i1533[i + 0], i1533[i + 1], 1, i1532, '')
  }
  i1530.bakeKeys = i1532
  var i1535 = i1531[8]
  var i1534 = new (System.Collections.Generic.List$1(Bridge.ns('OutlineScript+ListVector3')))
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.add(request.d('OutlineScript+ListVector3', i1535[i + 0]));
  }
  i1530.bakeValues = i1534
  return i1530
}

Deserializers["OutlineScript+ListVector3"] = function (request, data, root) {
  var i1540 = root || request.c( 'OutlineScript+ListVector3' )
  var i1541 = data
  var i1543 = i1541[0]
  var i1542 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i1543.length; i += 3) {
    i1542.add(new pc.Vec3( i1543[i + 0], i1543[i + 1], i1543[i + 2] ));
  }
  i1540.data = i1542
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1545 = data
  i1544.enabled = !!i1545[0]
  i1544.planeDistance = i1545[1]
  i1544.referencePixelsPerUnit = i1545[2]
  i1544.isFallbackOverlay = !!i1545[3]
  i1544.renderMode = i1545[4]
  i1544.renderOrder = i1545[5]
  i1544.sortingLayerName = i1545[6]
  i1544.sortingOrder = i1545[7]
  i1544.scaleFactor = i1545[8]
  request.r(i1545[9], i1545[10], 0, i1544, 'worldCamera')
  i1544.overrideSorting = !!i1545[11]
  i1544.pixelPerfect = !!i1545[12]
  i1544.targetDisplay = i1545[13]
  i1544.overridePixelPerfect = !!i1545[14]
  return i1544
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1547 = data
  i1546.m_UiScaleMode = i1547[0]
  i1546.m_ReferencePixelsPerUnit = i1547[1]
  i1546.m_ScaleFactor = i1547[2]
  i1546.m_ReferenceResolution = new pc.Vec2( i1547[3], i1547[4] )
  i1546.m_ScreenMatchMode = i1547[5]
  i1546.m_MatchWidthOrHeight = i1547[6]
  i1546.m_PhysicalUnit = i1547[7]
  i1546.m_FallbackScreenDPI = i1547[8]
  i1546.m_DefaultSpriteDPI = i1547[9]
  i1546.m_DynamicPixelsPerUnit = i1547[10]
  i1546.m_PresetInfoIsWorld = !!i1547[11]
  return i1546
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1549 = data
  i1548.m_IgnoreReversedGraphics = !!i1549[0]
  i1548.m_BlockingObjects = i1549[1]
  i1548.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1549[2] )
  return i1548
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i1550 = root || request.c( 'ExclamationMark' )
  var i1551 = data
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1553 = data
  i1552.enabled = !!i1553[0]
  request.r(i1553[1], i1553[2], 0, i1552, 'sharedMaterial')
  var i1555 = i1553[3]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 2) {
  request.r(i1555[i + 0], i1555[i + 1], 2, i1554, '')
  }
  i1552.sharedMaterials = i1554
  i1552.receiveShadows = !!i1553[4]
  i1552.shadowCastingMode = i1553[5]
  i1552.sortingLayerID = i1553[6]
  i1552.sortingOrder = i1553[7]
  i1552.lightmapIndex = i1553[8]
  i1552.lightmapSceneIndex = i1553[9]
  i1552.lightmapScaleOffset = new pc.Vec4( i1553[10], i1553[11], i1553[12], i1553[13] )
  i1552.lightProbeUsage = i1553[14]
  i1552.reflectionProbeUsage = i1553[15]
  i1552.color = new pc.Color(i1553[16], i1553[17], i1553[18], i1553[19])
  request.r(i1553[20], i1553[21], 0, i1552, 'sprite')
  i1552.flipX = !!i1553[22]
  i1552.flipY = !!i1553[23]
  i1552.drawMode = i1553[24]
  i1552.size = new pc.Vec2( i1553[25], i1553[26] )
  i1552.tileMode = i1553[27]
  i1552.adaptiveModeThreshold = i1553[28]
  i1552.maskInteraction = i1553[29]
  i1552.spriteSortPoint = i1553[30]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1557 = data
  i1556.name = i1557[0]
  i1556.atlasId = i1557[1]
  i1556.mipmapCount = i1557[2]
  i1556.hdr = !!i1557[3]
  i1556.size = i1557[4]
  i1556.anisoLevel = i1557[5]
  i1556.filterMode = i1557[6]
  var i1559 = i1557[7]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 4) {
    i1558.push( UnityEngine.Rect.MinMaxRect(i1559[i + 0], i1559[i + 1], i1559[i + 2], i1559[i + 3]) );
  }
  i1556.rects = i1558
  i1556.wrapU = i1557[8]
  i1556.wrapV = i1557[9]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1563 = data
  i1562.name = i1563[0]
  i1562.index = i1563[1]
  i1562.startup = !!i1563[2]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1565 = data
  i1564.enabled = !!i1565[0]
  i1564.aspect = i1565[1]
  i1564.orthographic = !!i1565[2]
  i1564.orthographicSize = i1565[3]
  i1564.backgroundColor = new pc.Color(i1565[4], i1565[5], i1565[6], i1565[7])
  i1564.nearClipPlane = i1565[8]
  i1564.farClipPlane = i1565[9]
  i1564.fieldOfView = i1565[10]
  i1564.depth = i1565[11]
  i1564.clearFlags = i1565[12]
  i1564.cullingMask = i1565[13]
  i1564.rect = i1565[14]
  request.r(i1565[15], i1565[16], 0, i1564, 'targetTexture')
  i1564.usePhysicalProperties = !!i1565[17]
  i1564.focalLength = i1565[18]
  i1564.sensorSize = new pc.Vec2( i1565[19], i1565[20] )
  i1564.lensShift = new pc.Vec2( i1565[21], i1565[22] )
  i1564.gateFit = i1565[23]
  i1564.commandBufferCount = i1565[24]
  i1564.cameraType = i1565[25]
  return i1564
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i1566 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i1567 = data
  request.r(i1567[0], i1567[1], 0, i1566, 'joystick')
  i1566.minYAngle = i1567[2]
  i1566.maxYAngle = i1567[3]
  i1566.rotationSpeed = i1567[4]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1569 = data
  i1568.enabled = !!i1569[0]
  i1568.type = i1569[1]
  i1568.color = new pc.Color(i1569[2], i1569[3], i1569[4], i1569[5])
  i1568.cullingMask = i1569[6]
  i1568.intensity = i1569[7]
  i1568.range = i1569[8]
  i1568.spotAngle = i1569[9]
  i1568.shadows = i1569[10]
  i1568.shadowNormalBias = i1569[11]
  i1568.shadowBias = i1569[12]
  i1568.shadowStrength = i1569[13]
  i1568.shadowResolution = i1569[14]
  i1568.lightmapBakeType = i1569[15]
  i1568.renderMode = i1569[16]
  request.r(i1569[17], i1569[18], 0, i1568, 'cookie')
  i1568.cookieSize = i1569[19]
  return i1568
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i1570 = root || request.c( 'Howitzer.LookAtReticle' )
  var i1571 = data
  request.r(i1571[0], i1571[1], 0, i1570, 'reticle')
  request.r(i1571[2], i1571[3], 0, i1570, 'mainCamera')
  i1570.rotationSpeed = i1571[4]
  i1570.maxPitchAngle = i1571[5]
  i1570.minPitchAngle = i1571[6]
  return i1570
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i1572 = root || request.c( 'FollowBullet' )
  var i1573 = data
  i1572._smoothSpeed = i1573[0]
  i1572._offset = new pc.Vec3( i1573[1], i1573[2], i1573[3] )
  return i1572
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i1574 = root || request.c( 'UI.PlayerUIController' )
  var i1575 = data
  request.r(i1575[0], i1575[1], 0, i1574, 'shootButton')
  request.r(i1575[2], i1575[3], 0, i1574, 'zoomButton')
  request.r(i1575[4], i1575[5], 0, i1574, '_cross')
  return i1574
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i1576 = root || request.c( 'Howitzer.PlayerZoom' )
  var i1577 = data
  request.r(i1577[0], i1577[1], 0, i1576, 'crosshair')
  request.r(i1577[2], i1577[3], 0, i1576, 'mainCamera')
  request.r(i1577[4], i1577[5], 0, i1576, 'zoomImage')
  var i1579 = i1577[6]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 2) {
  request.r(i1579[i + 0], i1579[i + 1], 2, i1578, '')
  }
  i1576.objectsToDisable = i1578
  i1576.zoomFOV = i1577[7]
  i1576.normalFOV = i1577[8]
  i1576.zoomSpeed = i1577[9]
  request.r(i1577[10], i1577[11], 0, i1576, 'joystick')
  i1576.rotationSpeed = i1577[12]
  return i1576
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i1582 = root || request.c( 'Howitzer.PlayerShooting' )
  var i1583 = data
  request.r(i1583[0], i1583[1], 0, i1582, 'playerShootingCooldown')
  request.r(i1583[2], i1583[3], 0, i1582, 'mainCamera')
  request.r(i1583[4], i1583[5], 0, i1582, 'crosshairUI')
  request.r(i1583[6], i1583[7], 0, i1582, 'muzzleFlash')
  request.r(i1583[8], i1583[9], 0, i1582, 'explosionEffect')
  request.r(i1583[10], i1583[11], 0, i1582, 'projectilePosition')
  request.r(i1583[12], i1583[13], 0, i1582, 'prefabProjectile')
  i1582.projectileSpeed = i1583[14]
  i1582.poolSize = i1583[15]
  request.r(i1583[16], i1583[17], 0, i1582, '_followBullet')
  request.r(i1583[18], i1583[19], 0, i1582, '_managerCamers')
  request.r(i1583[20], i1583[21], 0, i1582, '_timeController')
  request.r(i1583[22], i1583[23], 0, i1582, '_playerUIController')
  request.r(i1583[24], i1583[25], 0, i1582, '_tanksFabric')
  return i1582
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i1584 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'shootButton')
  request.r(i1585[2], i1585[3], 0, i1584, 'cooldownText')
  request.r(i1585[4], i1585[5], 0, i1584, 'cooldownImage')
  i1584.cooldownTime = i1585[6]
  return i1584
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.UI.Button' )
  var i1587 = data
  i1586.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1587[0], i1586.m_OnClick)
  i1586.m_Navigation = request.d('UnityEngine.UI.Navigation', i1587[1], i1586.m_Navigation)
  i1586.m_Transition = i1587[2]
  i1586.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1587[3], i1586.m_Colors)
  i1586.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1587[4], i1586.m_SpriteState)
  i1586.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1587[5], i1586.m_AnimationTriggers)
  i1586.m_Interactable = !!i1587[6]
  request.r(i1587[7], i1587[8], 0, i1586, 'm_TargetGraphic')
  return i1586
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1589 = data
  i1588.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1589[0], i1588.m_PersistentCalls)
  return i1588
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1591 = data
  var i1593 = i1591[0]
  var i1592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.add(request.d('UnityEngine.Events.PersistentCall', i1593[i + 0]));
  }
  i1590.m_Calls = i1592
  return i1590
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1597 = data
  request.r(i1597[0], i1597[1], 0, i1596, 'm_Target')
  i1596.m_TargetAssemblyTypeName = i1597[2]
  i1596.m_MethodName = i1597[3]
  i1596.m_Mode = i1597[4]
  i1596.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1597[5], i1596.m_Arguments)
  i1596.m_CallState = i1597[6]
  return i1596
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1599 = data
  i1598.m_Mode = i1599[0]
  i1598.m_WrapAround = !!i1599[1]
  request.r(i1599[2], i1599[3], 0, i1598, 'm_SelectOnUp')
  request.r(i1599[4], i1599[5], 0, i1598, 'm_SelectOnDown')
  request.r(i1599[6], i1599[7], 0, i1598, 'm_SelectOnLeft')
  request.r(i1599[8], i1599[9], 0, i1598, 'm_SelectOnRight')
  return i1598
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1601 = data
  i1600.m_NormalColor = new pc.Color(i1601[0], i1601[1], i1601[2], i1601[3])
  i1600.m_HighlightedColor = new pc.Color(i1601[4], i1601[5], i1601[6], i1601[7])
  i1600.m_PressedColor = new pc.Color(i1601[8], i1601[9], i1601[10], i1601[11])
  i1600.m_SelectedColor = new pc.Color(i1601[12], i1601[13], i1601[14], i1601[15])
  i1600.m_DisabledColor = new pc.Color(i1601[16], i1601[17], i1601[18], i1601[19])
  i1600.m_ColorMultiplier = i1601[20]
  i1600.m_FadeDuration = i1601[21]
  return i1600
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1603 = data
  request.r(i1603[0], i1603[1], 0, i1602, 'm_HighlightedSprite')
  request.r(i1603[2], i1603[3], 0, i1602, 'm_PressedSprite')
  request.r(i1603[4], i1603[5], 0, i1602, 'm_SelectedSprite')
  request.r(i1603[6], i1603[7], 0, i1602, 'm_DisabledSprite')
  return i1602
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1605 = data
  i1604.m_NormalTrigger = i1605[0]
  i1604.m_HighlightedTrigger = i1605[1]
  i1604.m_PressedTrigger = i1605[2]
  i1604.m_SelectedTrigger = i1605[3]
  i1604.m_DisabledTrigger = i1605[4]
  return i1604
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.UI.Text' )
  var i1607 = data
  i1606.m_FontData = request.d('UnityEngine.UI.FontData', i1607[0], i1606.m_FontData)
  i1606.m_Text = i1607[1]
  request.r(i1607[2], i1607[3], 0, i1606, 'm_Material')
  i1606.m_Maskable = !!i1607[4]
  i1606.m_Color = new pc.Color(i1607[5], i1607[6], i1607[7], i1607[8])
  i1606.m_RaycastTarget = !!i1607[9]
  i1606.m_RaycastPadding = new pc.Vec4( i1607[10], i1607[11], i1607[12], i1607[13] )
  return i1606
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'm_Font')
  i1608.m_FontSize = i1609[2]
  i1608.m_FontStyle = i1609[3]
  i1608.m_BestFit = !!i1609[4]
  i1608.m_MinSize = i1609[5]
  i1608.m_MaxSize = i1609[6]
  i1608.m_Alignment = i1609[7]
  i1608.m_AlignByGeometry = !!i1609[8]
  i1608.m_RichText = !!i1609[9]
  i1608.m_HorizontalOverflow = i1609[10]
  i1608.m_VerticalOverflow = i1609[11]
  i1608.m_LineSpacing = i1609[12]
  return i1608
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i1610 = root || request.c( 'TutorialHand' )
  var i1611 = data
  request.r(i1611[0], i1611[1], 0, i1610, 'handImage')
  i1610.moveDistance = i1611[2]
  i1610.moveDuration = i1611[3]
  return i1610
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i1612 = root || request.c( 'UI.CrosshairMovement' )
  var i1613 = data
  request.r(i1613[0], i1613[1], 0, i1612, 'joystick')
  request.r(i1613[2], i1613[3], 0, i1612, 'crosshair')
  i1612.moveSpeed = i1613[4]
  request.r(i1613[5], i1613[6], 0, i1612, 'canvasRect')
  return i1612
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i1614 = root || request.c( 'UI.EndCardAnimation' )
  var i1615 = data
  request.r(i1615[0], i1615[1], 0, i1614, 'background')
  request.r(i1615[2], i1615[3], 0, i1614, 'title')
  request.r(i1615[4], i1615[5], 0, i1614, 'logoAndButton')
  request.r(i1615[6], i1615[7], 0, i1614, 'titleText')
  i1614.fadeDuration = i1615[8]
  i1614.scaleDuration = i1615[9]
  i1614.scaleEase = i1615[10]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1617 = data
  i1616.m_Alpha = i1617[0]
  i1616.m_Interactable = !!i1617[1]
  i1616.m_BlocksRaycasts = !!i1617[2]
  i1616.m_IgnoreParentGroups = !!i1617[3]
  i1616.enabled = !!i1617[4]
  return i1616
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1619 = data
  i1618.m_AspectMode = i1619[0]
  i1618.m_AspectRatio = i1619[1]
  return i1618
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i1620 = root || request.c( 'UI.ButtonPulse' )
  var i1621 = data
  i1620.scaleMultiplier = i1621[0]
  i1620.duration = i1621[1]
  return i1620
}

Deserializers["Cross"] = function (request, data, root) {
  var i1622 = root || request.c( 'Cross' )
  var i1623 = data
  return i1622
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'm_FirstSelected')
  i1624.m_sendNavigationEvents = !!i1625[2]
  i1624.m_DragThreshold = i1625[3]
  return i1624
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1627 = data
  i1626.m_HorizontalAxis = i1627[0]
  i1626.m_VerticalAxis = i1627[1]
  i1626.m_SubmitButton = i1627[2]
  i1626.m_CancelButton = i1627[3]
  i1626.m_InputActionsPerSecond = i1627[4]
  i1626.m_RepeatDelay = i1627[5]
  i1626.m_ForceModuleActive = !!i1627[6]
  i1626.m_SendPointerHoverToParent = !!i1627[7]
  return i1626
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i1628 = root || request.c( 'Bootstraps.Bootstrap' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'tanksFabric')
  request.r(i1629[2], i1629[3], 0, i1628, 'scenarioGame')
  return i1628
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i1630 = root || request.c( 'Fabric.TanksFabric' )
  var i1631 = data
  request.r(i1631[0], i1631[1], 0, i1630, 'tankPrefab')
  var i1633 = i1631[2]
  var i1632 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1633.length; i += 2) {
  request.r(i1633[i + 0], i1633[i + 1], 1, i1632, '')
  }
  i1630.spawnPoints = i1632
  var i1635 = i1631[3]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 2) {
  request.r(i1635[i + 0], i1635[i + 1], 2, i1634, '')
  }
  i1630.targets = i1634
  return i1630
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i1640 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'endCard')
  return i1640
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i1642 = root || request.c( 'UI.TankKillStatistics' )
  var i1643 = data
  return i1642
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i1644 = root || request.c( 'ManagerCamers' )
  var i1645 = data
  request.r(i1645[0], i1645[1], 0, i1644, '_plauerCamera')
  request.r(i1645[2], i1645[3], 0, i1644, '_bulletCamera')
  request.r(i1645[4], i1645[5], 0, i1644, '_timeController')
  request.r(i1645[6], i1645[7], 0, i1644, '_playerZoom')
  return i1644
}

Deserializers["TimeController"] = function (request, data, root) {
  var i1646 = root || request.c( 'TimeController' )
  var i1647 = data
  i1646.slowMotionScale = i1647[0]
  i1646.slowMotionDuration = i1647[1]
  i1646.restoreSpeedDuration = i1647[2]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1649 = data
  i1648.ambientIntensity = i1649[0]
  i1648.reflectionIntensity = i1649[1]
  i1648.ambientMode = i1649[2]
  i1648.ambientLight = new pc.Color(i1649[3], i1649[4], i1649[5], i1649[6])
  i1648.ambientSkyColor = new pc.Color(i1649[7], i1649[8], i1649[9], i1649[10])
  i1648.ambientGroundColor = new pc.Color(i1649[11], i1649[12], i1649[13], i1649[14])
  i1648.ambientEquatorColor = new pc.Color(i1649[15], i1649[16], i1649[17], i1649[18])
  i1648.fogColor = new pc.Color(i1649[19], i1649[20], i1649[21], i1649[22])
  i1648.fogEndDistance = i1649[23]
  i1648.fogStartDistance = i1649[24]
  i1648.fogDensity = i1649[25]
  i1648.fog = !!i1649[26]
  request.r(i1649[27], i1649[28], 0, i1648, 'skybox')
  i1648.fogMode = i1649[29]
  var i1651 = i1649[30]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1651[i + 0]) );
  }
  i1648.lightmaps = i1650
  i1648.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1649[31], i1648.lightProbes)
  i1648.lightmapsMode = i1649[32]
  i1648.mixedBakeMode = i1649[33]
  i1648.environmentLightingMode = i1649[34]
  i1648.ambientProbe = new pc.SphericalHarmonicsL2(i1649[35])
  i1648.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1649[36])
  i1648.useReferenceAmbientProbe = !!i1649[37]
  request.r(i1649[38], i1649[39], 0, i1648, 'customReflection')
  request.r(i1649[40], i1649[41], 0, i1648, 'defaultReflection')
  i1648.defaultReflectionMode = i1649[42]
  i1648.defaultReflectionResolution = i1649[43]
  i1648.sunLightObjectId = i1649[44]
  i1648.pixelLightCount = i1649[45]
  i1648.defaultReflectionHDR = !!i1649[46]
  i1648.hasLightDataAsset = !!i1649[47]
  i1648.hasManualGenerate = !!i1649[48]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'lightmapColor')
  request.r(i1655[2], i1655[3], 0, i1654, 'lightmapDirection')
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1656 = root || new UnityEngine.LightProbes()
  var i1657 = data
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1665 = data
  var i1667 = i1665[0]
  var i1666 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1667[i + 0]));
  }
  i1664.ShaderCompilationErrors = i1666
  i1664.name = i1665[1]
  i1664.guid = i1665[2]
  var i1669 = i1665[3]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( i1669[i + 0] );
  }
  i1664.shaderDefinedKeywords = i1668
  var i1671 = i1665[4]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1671[i + 0]) );
  }
  i1664.passes = i1670
  var i1673 = i1665[5]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1673[i + 0]) );
  }
  i1664.usePasses = i1672
  var i1675 = i1665[6]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1675[i + 0]) );
  }
  i1664.defaultParameterValues = i1674
  request.r(i1665[7], i1665[8], 0, i1664, 'unityFallbackShader')
  i1664.readDepth = !!i1665[9]
  i1664.isCreatedByShaderGraph = !!i1665[10]
  i1664.compiled = !!i1665[11]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1679 = data
  i1678.shaderName = i1679[0]
  i1678.errorMessage = i1679[1]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1684 = root || new pc.UnityShaderPass()
  var i1685 = data
  i1684.id = i1685[0]
  i1684.subShaderIndex = i1685[1]
  i1684.name = i1685[2]
  i1684.passType = i1685[3]
  i1684.grabPassTextureName = i1685[4]
  i1684.usePass = !!i1685[5]
  i1684.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[6], i1684.zTest)
  i1684.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[7], i1684.zWrite)
  i1684.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[8], i1684.culling)
  i1684.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1685[9], i1684.blending)
  i1684.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1685[10], i1684.alphaBlending)
  i1684.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[11], i1684.colorWriteMask)
  i1684.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[12], i1684.offsetUnits)
  i1684.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[13], i1684.offsetFactor)
  i1684.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[14], i1684.stencilRef)
  i1684.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[15], i1684.stencilReadMask)
  i1684.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[16], i1684.stencilWriteMask)
  i1684.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[17], i1684.stencilOp)
  i1684.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[18], i1684.stencilOpFront)
  i1684.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[19], i1684.stencilOpBack)
  var i1687 = i1685[20]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1687[i + 0]) );
  }
  i1684.tags = i1686
  var i1689 = i1685[21]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( i1689[i + 0] );
  }
  i1684.passDefinedKeywords = i1688
  var i1691 = i1685[22]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1691[i + 0]) );
  }
  i1684.passDefinedKeywordGroups = i1690
  var i1693 = i1685[23]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1693[i + 0]) );
  }
  i1684.variants = i1692
  var i1695 = i1685[24]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1695[i + 0]) );
  }
  i1684.excludedVariants = i1694
  i1684.hasDepthReader = !!i1685[25]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1697 = data
  i1696.val = i1697[0]
  i1696.name = i1697[1]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1699 = data
  i1698.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[0], i1698.src)
  i1698.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[1], i1698.dst)
  i1698.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[2], i1698.op)
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1701 = data
  i1700.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[0], i1700.pass)
  i1700.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[1], i1700.fail)
  i1700.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[2], i1700.zFail)
  i1700.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[3], i1700.comp)
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1705 = data
  i1704.name = i1705[0]
  i1704.value = i1705[1]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1709 = data
  var i1711 = i1709[0]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( i1711[i + 0] );
  }
  i1708.keywords = i1710
  i1708.hasDiscard = !!i1709[1]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1715 = data
  i1714.passId = i1715[0]
  i1714.subShaderIndex = i1715[1]
  var i1717 = i1715[2]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( i1717[i + 0] );
  }
  i1714.keywords = i1716
  i1714.vertexProgram = i1715[3]
  i1714.fragmentProgram = i1715[4]
  i1714.exportedForWebGl2 = !!i1715[5]
  i1714.readDepth = !!i1715[6]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'shader')
  i1720.pass = i1721[2]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1725 = data
  i1724.name = i1725[0]
  i1724.type = i1725[1]
  i1724.value = new pc.Vec4( i1725[2], i1725[3], i1725[4], i1725[5] )
  i1724.textureValue = i1725[6]
  i1724.shaderPropertyFlag = i1725[7]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1727 = data
  i1726.name = i1727[0]
  request.r(i1727[1], i1727[2], 0, i1726, 'texture')
  i1726.aabb = i1727[3]
  i1726.vertices = i1727[4]
  i1726.triangles = i1727[5]
  i1726.textureRect = UnityEngine.Rect.MinMaxRect(i1727[6], i1727[7], i1727[8], i1727[9])
  i1726.packedRect = UnityEngine.Rect.MinMaxRect(i1727[10], i1727[11], i1727[12], i1727[13])
  i1726.border = new pc.Vec4( i1727[14], i1727[15], i1727[16], i1727[17] )
  i1726.transparency = i1727[18]
  i1726.bounds = i1727[19]
  i1726.pixelsPerUnit = i1727[20]
  i1726.textureWidth = i1727[21]
  i1726.textureHeight = i1727[22]
  i1726.nativeSize = new pc.Vec2( i1727[23], i1727[24] )
  i1726.pivot = new pc.Vec2( i1727[25], i1727[26] )
  i1726.textureRectOffset = new pc.Vec2( i1727[27], i1727[28] )
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1729 = data
  i1728.name = i1729[0]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1731 = data
  i1730.name = i1731[0]
  i1730.ascent = i1731[1]
  i1730.originalLineHeight = i1731[2]
  i1730.fontSize = i1731[3]
  var i1733 = i1731[4]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1733[i + 0]) );
  }
  i1730.characterInfo = i1732
  request.r(i1731[5], i1731[6], 0, i1730, 'texture')
  i1730.originalFontSize = i1731[7]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1737 = data
  i1736.index = i1737[0]
  i1736.advance = i1737[1]
  i1736.bearing = i1737[2]
  i1736.glyphWidth = i1737[3]
  i1736.glyphHeight = i1737[4]
  i1736.minX = i1737[5]
  i1736.maxX = i1737[6]
  i1736.minY = i1737[7]
  i1736.maxY = i1737[8]
  i1736.uvBottomLeftX = i1737[9]
  i1736.uvBottomLeftY = i1737[10]
  i1736.uvBottomRightX = i1737[11]
  i1736.uvBottomRightY = i1737[12]
  i1736.uvTopLeftX = i1737[13]
  i1736.uvTopLeftY = i1737[14]
  i1736.uvTopRightX = i1737[15]
  i1736.uvTopRightY = i1737[16]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1739 = data
  i1738.name = i1739[0]
  i1738.bytes64 = i1739[1]
  i1738.data = i1739[2]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1741 = data
  var i1743 = i1741[0]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1743[i + 0]) );
  }
  i1740.files = i1742
  i1740.componentToPrefabIds = i1741[1]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1747 = data
  i1746.path = i1747[0]
  request.r(i1747[1], i1747[2], 0, i1746, 'unityObject')
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1749 = data
  var i1751 = i1749[0]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1751[i + 0]) );
  }
  i1748.scriptsExecutionOrder = i1750
  var i1753 = i1749[1]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1753[i + 0]) );
  }
  i1748.sortingLayers = i1752
  var i1755 = i1749[2]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1755[i + 0]) );
  }
  i1748.cullingLayers = i1754
  i1748.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1749[3], i1748.timeSettings)
  i1748.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1749[4], i1748.physicsSettings)
  i1748.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1749[5], i1748.physics2DSettings)
  i1748.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1749[6], i1748.qualitySettings)
  i1748.enableRealtimeShadows = !!i1749[7]
  i1748.enableAutoInstancing = !!i1749[8]
  i1748.enableDynamicBatching = !!i1749[9]
  i1748.lightmapEncodingQuality = i1749[10]
  i1748.desiredColorSpace = i1749[11]
  var i1757 = i1749[12]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( i1757[i + 0] );
  }
  i1748.allTags = i1756
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1761 = data
  i1760.name = i1761[0]
  i1760.value = i1761[1]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1765 = data
  i1764.id = i1765[0]
  i1764.name = i1765[1]
  i1764.value = i1765[2]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1769 = data
  i1768.id = i1769[0]
  i1768.name = i1769[1]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1771 = data
  i1770.fixedDeltaTime = i1771[0]
  i1770.maximumDeltaTime = i1771[1]
  i1770.timeScale = i1771[2]
  i1770.maximumParticleTimestep = i1771[3]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1773 = data
  i1772.gravity = new pc.Vec3( i1773[0], i1773[1], i1773[2] )
  i1772.defaultSolverIterations = i1773[3]
  i1772.bounceThreshold = i1773[4]
  i1772.autoSyncTransforms = !!i1773[5]
  i1772.autoSimulation = !!i1773[6]
  var i1775 = i1773[7]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1775[i + 0]) );
  }
  i1772.collisionMatrix = i1774
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1779 = data
  i1778.enabled = !!i1779[0]
  i1778.layerId = i1779[1]
  i1778.otherLayerId = i1779[2]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1781 = data
  request.r(i1781[0], i1781[1], 0, i1780, 'material')
  i1780.gravity = new pc.Vec2( i1781[2], i1781[3] )
  i1780.positionIterations = i1781[4]
  i1780.velocityIterations = i1781[5]
  i1780.velocityThreshold = i1781[6]
  i1780.maxLinearCorrection = i1781[7]
  i1780.maxAngularCorrection = i1781[8]
  i1780.maxTranslationSpeed = i1781[9]
  i1780.maxRotationSpeed = i1781[10]
  i1780.baumgarteScale = i1781[11]
  i1780.baumgarteTOIScale = i1781[12]
  i1780.timeToSleep = i1781[13]
  i1780.linearSleepTolerance = i1781[14]
  i1780.angularSleepTolerance = i1781[15]
  i1780.defaultContactOffset = i1781[16]
  i1780.autoSimulation = !!i1781[17]
  i1780.queriesHitTriggers = !!i1781[18]
  i1780.queriesStartInColliders = !!i1781[19]
  i1780.callbacksOnDisable = !!i1781[20]
  i1780.reuseCollisionCallbacks = !!i1781[21]
  i1780.autoSyncTransforms = !!i1781[22]
  var i1783 = i1781[23]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1783[i + 0]) );
  }
  i1780.collisionMatrix = i1782
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1787 = data
  i1786.enabled = !!i1787[0]
  i1786.layerId = i1787[1]
  i1786.otherLayerId = i1787[2]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1789 = data
  var i1791 = i1789[0]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1791[i + 0]) );
  }
  i1788.qualityLevels = i1790
  var i1793 = i1789[1]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( i1793[i + 0] );
  }
  i1788.names = i1792
  i1788.shadows = i1789[2]
  i1788.anisotropicFiltering = i1789[3]
  i1788.antiAliasing = i1789[4]
  i1788.lodBias = i1789[5]
  i1788.shadowCascades = i1789[6]
  i1788.shadowDistance = i1789[7]
  i1788.shadowmaskMode = i1789[8]
  i1788.shadowProjection = i1789[9]
  i1788.shadowResolution = i1789[10]
  i1788.softParticles = !!i1789[11]
  i1788.softVegetation = !!i1789[12]
  i1788.activeColorSpace = i1789[13]
  i1788.desiredColorSpace = i1789[14]
  i1788.masterTextureLimit = i1789[15]
  i1788.maxQueuedFrames = i1789[16]
  i1788.particleRaycastBudget = i1789[17]
  i1788.pixelLightCount = i1789[18]
  i1788.realtimeReflectionProbes = !!i1789[19]
  i1788.shadowCascade2Split = i1789[20]
  i1788.shadowCascade4Split = new pc.Vec3( i1789[21], i1789[22], i1789[23] )
  i1788.streamingMipmapsActive = !!i1789[24]
  i1788.vSyncCount = i1789[25]
  i1788.asyncUploadBufferSize = i1789[26]
  i1788.asyncUploadTimeSlice = i1789[27]
  i1788.billboardsFaceCameraPosition = !!i1789[28]
  i1788.shadowNearPlaneOffset = i1789[29]
  i1788.streamingMipmapsMemoryBudget = i1789[30]
  i1788.maximumLODLevel = i1789[31]
  i1788.streamingMipmapsAddAllCameras = !!i1789[32]
  i1788.streamingMipmapsMaxLevelReduction = i1789[33]
  i1788.streamingMipmapsRenderersPerFrame = i1789[34]
  i1788.resolutionScalingFixedDPIFactor = i1789[35]
  i1788.streamingMipmapsMaxFileIORequests = i1789[36]
  i1788.currentQualityLevel = i1789[37]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1799 = data
  i1798.weight = i1799[0]
  i1798.vertices = i1799[1]
  i1798.normals = i1799[2]
  i1798.tangents = i1799[3]
  return i1798
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, 'm_ObjectArgument')
  i1802.m_ObjectArgumentAssemblyTypeName = i1803[2]
  i1802.m_IntArgument = i1803[3]
  i1802.m_FloatArgument = i1803[4]
  i1802.m_StringArgument = i1803[5]
  i1802.m_BoolArgument = !!i1803[6]
  return i1802
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[31],"71":[19],"72":[19],"73":[19],"74":[19],"75":[19],"76":[19],"77":[19],"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[79],"86":[79],"87":[79],"88":[79],"89":[79],"90":[79],"91":[79],"92":[31],"93":[10],"94":[95],"96":[95],"26":[0],"97":[13],"15":[13],"98":[35],"99":[8],"100":[35],"101":[0],"102":[31],"103":[31],"104":[35],"105":[31],"106":[107],"108":[0],"109":[0],"28":[26],"3":[1,0],"54":[0],"27":[26],"110":[0],"111":[0],"112":[0],"113":[0],"114":[0],"115":[0],"116":[0],"117":[0],"118":[0],"119":[1,0],"120":[0],"121":[0],"122":[0],"123":[0],"48":[1,0],"124":[0],"125":[56],"126":[56],"57":[56],"127":[56],"128":[31],"129":[31],"130":[107],"131":[107],"132":[31],"133":[134]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","VariableJoystick","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CFX_AutoDestructShuriken","UnityEngine.Texture2D","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Rigidbody","Howitzer.Projectile","UnityEngine.CapsuleCollider","BehaviourAI.TankAI","ExclamationMark","UnityEngine.BoxCollider","OutlineScript","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.LODGroup","UnityEngine.SpriteRenderer","UnityEngine.Camera","UnityEngine.Cubemap","UnityEngine.AudioListener","Howitzer.LookAtCrosshair","UnityEngine.Light","Howitzer.LookAtReticle","FollowBullet","UI.PlayerUIController","UnityEngine.UI.Button","Cross","Howitzer.PlayerZoom","UnityEngine.GameObject","Howitzer.PlayerShooting","Howitzer.PlayerShootingCooldown","ManagerCamers","TimeController","Fabric.TanksFabric","UnityEngine.UI.Text","UnityEngine.Font","TutorialHand","UI.CrosshairMovement","UI.EndCardAnimation","UnityEngine.CanvasGroup","UnityEngine.UI.AspectRatioFitter","UI.ButtonPulse","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Bootstraps.Bootstrap","Bootstraps.ScenarioGame","UI.TankKillStatistics","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CFX_AutoStopLoopedEffect","CFX_LightIntensityFade","WFX_BulletHoleDecal","WFX_LightFlicker","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/12/2025 18:23:14";

Deserializers.lunaDaysRunning = "4.6";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1809";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3624";

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

Deserializers.buildID = "5c15f94c-1e12-4f4e-9728-3f9073eb8e89";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

