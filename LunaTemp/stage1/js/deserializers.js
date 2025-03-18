var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.JointSpring' )
  var i1309 = data
  i1308.spring = i1309[0]
  i1308.damper = i1309[1]
  i1308.targetPosition = i1309[2]
  return i1308
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.JointMotor' )
  var i1311 = data
  i1310.m_TargetVelocity = i1311[0]
  i1310.m_Force = i1311[1]
  i1310.m_FreeSpin = i1311[2]
  return i1310
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1312 = root || request.c( 'UnityEngine.JointLimits' )
  var i1313 = data
  i1312.m_Min = i1313[0]
  i1312.m_Max = i1313[1]
  i1312.m_Bounciness = i1313[2]
  i1312.m_BounceMinVelocity = i1313[3]
  i1312.m_ContactDistance = i1313[4]
  i1312.minBounce = i1313[5]
  i1312.maxBounce = i1313[6]
  return i1312
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.JointDrive' )
  var i1315 = data
  i1314.m_PositionSpring = i1315[0]
  i1314.m_PositionDamper = i1315[1]
  i1314.m_MaximumForce = i1315[2]
  i1314.m_UseAcceleration = i1315[3]
  return i1314
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1316 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1317 = data
  i1316.m_Spring = i1317[0]
  i1316.m_Damper = i1317[1]
  return i1316
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1318 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1319 = data
  i1318.m_Limit = i1319[0]
  i1318.m_Bounciness = i1319[1]
  i1318.m_ContactDistance = i1319[2]
  return i1318
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1320 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1321 = data
  i1320.m_ExtremumSlip = i1321[0]
  i1320.m_ExtremumValue = i1321[1]
  i1320.m_AsymptoteSlip = i1321[2]
  i1320.m_AsymptoteValue = i1321[3]
  i1320.m_Stiffness = i1321[4]
  return i1320
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1323 = data
  i1322.m_LowerAngle = i1323[0]
  i1322.m_UpperAngle = i1323[1]
  return i1322
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1325 = data
  i1324.m_MotorSpeed = i1325[0]
  i1324.m_MaximumMotorTorque = i1325[1]
  return i1324
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1327 = data
  i1326.m_DampingRatio = i1327[0]
  i1326.m_Frequency = i1327[1]
  i1326.m_Angle = i1327[2]
  return i1326
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1329 = data
  i1328.m_LowerTranslation = i1329[0]
  i1328.m_UpperTranslation = i1329[1]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1331 = data
  i1330.pivot = new pc.Vec2( i1331[0], i1331[1] )
  i1330.anchorMin = new pc.Vec2( i1331[2], i1331[3] )
  i1330.anchorMax = new pc.Vec2( i1331[4], i1331[5] )
  i1330.sizeDelta = new pc.Vec2( i1331[6], i1331[7] )
  i1330.anchoredPosition3D = new pc.Vec3( i1331[8], i1331[9], i1331[10] )
  i1330.rotation = new pc.Quat(i1331[11], i1331[12], i1331[13], i1331[14])
  i1330.scale = new pc.Vec3( i1331[15], i1331[16], i1331[17] )
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1333 = data
  i1332.cullTransparentMesh = !!i1333[0]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1335 = data
  i1334.name = i1335[0]
  i1334.tagId = i1335[1]
  i1334.enabled = !!i1335[2]
  i1334.isStatic = !!i1335[3]
  i1334.layer = i1335[4]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1337 = data
  i1336.name = i1337[0]
  i1336.width = i1337[1]
  i1336.height = i1337[2]
  i1336.mipmapCount = i1337[3]
  i1336.anisoLevel = i1337[4]
  i1336.filterMode = i1337[5]
  i1336.hdr = !!i1337[6]
  i1336.format = i1337[7]
  i1336.wrapMode = i1337[8]
  i1336.alphaIsTransparency = !!i1337[9]
  i1336.alphaSource = i1337[10]
  i1336.graphicsFormat = i1337[11]
  i1336.sRGBTexture = !!i1337[12]
  i1336.desiredColorSpace = i1337[13]
  i1336.wrapU = i1337[14]
  i1336.wrapV = i1337[15]
  return i1336
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1338 = root || request.c( 'UnityEngine.UI.Image' )
  var i1339 = data
  request.r(i1339[0], i1339[1], 0, i1338, 'm_Sprite')
  i1338.m_Type = i1339[2]
  i1338.m_PreserveAspect = !!i1339[3]
  i1338.m_FillCenter = !!i1339[4]
  i1338.m_FillMethod = i1339[5]
  i1338.m_FillAmount = i1339[6]
  i1338.m_FillClockwise = !!i1339[7]
  i1338.m_FillOrigin = i1339[8]
  i1338.m_UseSpriteMesh = !!i1339[9]
  i1338.m_PixelsPerUnitMultiplier = i1339[10]
  request.r(i1339[11], i1339[12], 0, i1338, 'm_Material')
  i1338.m_Maskable = !!i1339[13]
  i1338.m_Color = new pc.Color(i1339[14], i1339[15], i1339[16], i1339[17])
  i1338.m_RaycastTarget = !!i1339[18]
  i1338.m_RaycastPadding = new pc.Vec4( i1339[19], i1339[20], i1339[21], i1339[22] )
  return i1338
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i1340 = root || request.c( 'VariableJoystick' )
  var i1341 = data
  request.r(i1341[0], i1341[1], 0, i1340, 'handle')
  i1340.moveThreshold = i1341[2]
  i1340.joystickType = i1341[3]
  request.r(i1341[4], i1341[5], 0, i1340, 'background')
  i1340.handleRange = i1341[6]
  i1340.deadZone = i1341[7]
  i1340.axisOptions = i1341[8]
  i1340.snapX = !!i1341[9]
  i1340.snapY = !!i1341[10]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1343 = data
  i1342.position = new pc.Vec3( i1343[0], i1343[1], i1343[2] )
  i1342.scale = new pc.Vec3( i1343[3], i1343[4], i1343[5] )
  i1342.rotation = new pc.Quat(i1343[6], i1343[7], i1343[8], i1343[9])
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1345 = data
  request.r(i1345[0], i1345[1], 0, i1344, 'sharedMesh')
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1347 = data
  request.r(i1347[0], i1347[1], 0, i1346, 'additionalVertexStreams')
  i1346.enabled = !!i1347[2]
  request.r(i1347[3], i1347[4], 0, i1346, 'sharedMaterial')
  var i1349 = i1347[5]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 2) {
  request.r(i1349[i + 0], i1349[i + 1], 2, i1348, '')
  }
  i1346.sharedMaterials = i1348
  i1346.receiveShadows = !!i1347[6]
  i1346.shadowCastingMode = i1347[7]
  i1346.sortingLayerID = i1347[8]
  i1346.sortingOrder = i1347[9]
  i1346.lightmapIndex = i1347[10]
  i1346.lightmapSceneIndex = i1347[11]
  i1346.lightmapScaleOffset = new pc.Vec4( i1347[12], i1347[13], i1347[14], i1347[15] )
  i1346.lightProbeUsage = i1347[16]
  i1346.reflectionProbeUsage = i1347[17]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1353 = data
  i1352.name = i1353[0]
  i1352.halfPrecision = !!i1353[1]
  i1352.useUInt32IndexFormat = !!i1353[2]
  i1352.vertexCount = i1353[3]
  i1352.aabb = i1353[4]
  var i1355 = i1353[5]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( !!i1355[i + 0] );
  }
  i1352.streams = i1354
  i1352.vertices = i1353[6]
  var i1357 = i1353[7]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1357[i + 0]) );
  }
  i1352.subMeshes = i1356
  var i1359 = i1353[8]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 16) {
    i1358.push( new pc.Mat4().setData(i1359[i + 0], i1359[i + 1], i1359[i + 2], i1359[i + 3],  i1359[i + 4], i1359[i + 5], i1359[i + 6], i1359[i + 7],  i1359[i + 8], i1359[i + 9], i1359[i + 10], i1359[i + 11],  i1359[i + 12], i1359[i + 13], i1359[i + 14], i1359[i + 15]) );
  }
  i1352.bindposes = i1358
  var i1361 = i1353[9]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1361[i + 0]) );
  }
  i1352.blendShapes = i1360
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1367 = data
  i1366.triangles = i1367[0]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1373 = data
  i1372.name = i1373[0]
  var i1375 = i1373[1]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1375[i + 0]) );
  }
  i1372.frames = i1374
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1376 = root || new pc.UnityMaterial()
  var i1377 = data
  i1376.name = i1377[0]
  request.r(i1377[1], i1377[2], 0, i1376, 'shader')
  i1376.renderQueue = i1377[3]
  i1376.enableInstancing = !!i1377[4]
  var i1379 = i1377[5]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1379[i + 0]) );
  }
  i1376.floatParameters = i1378
  var i1381 = i1377[6]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1381[i + 0]) );
  }
  i1376.colorParameters = i1380
  var i1383 = i1377[7]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1383[i + 0]) );
  }
  i1376.vectorParameters = i1382
  var i1385 = i1377[8]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1385[i + 0]) );
  }
  i1376.textureParameters = i1384
  var i1387 = i1377[9]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1387[i + 0]) );
  }
  i1376.materialFlags = i1386
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1391 = data
  i1390.name = i1391[0]
  i1390.value = i1391[1]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1395 = data
  i1394.name = i1395[0]
  i1394.value = new pc.Color(i1395[1], i1395[2], i1395[3], i1395[4])
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1399 = data
  i1398.name = i1399[0]
  i1398.value = new pc.Vec4( i1399[1], i1399[2], i1399[3], i1399[4] )
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1403 = data
  i1402.name = i1403[0]
  request.r(i1403[1], i1403[2], 0, i1402, 'value')
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1407 = data
  i1406.name = i1407[0]
  i1406.enabled = !!i1407[1]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1409 = data
  i1408.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1409[0], i1408.main)
  i1408.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1409[1], i1408.colorBySpeed)
  i1408.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1409[2], i1408.colorOverLifetime)
  i1408.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1409[3], i1408.emission)
  i1408.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1409[4], i1408.rotationBySpeed)
  i1408.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1409[5], i1408.rotationOverLifetime)
  i1408.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1409[6], i1408.shape)
  i1408.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1409[7], i1408.sizeBySpeed)
  i1408.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1409[8], i1408.sizeOverLifetime)
  i1408.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1409[9], i1408.textureSheetAnimation)
  i1408.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1409[10], i1408.velocityOverLifetime)
  i1408.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1409[11], i1408.noise)
  i1408.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1409[12], i1408.inheritVelocity)
  i1408.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1409[13], i1408.forceOverLifetime)
  i1408.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1409[14], i1408.limitVelocityOverLifetime)
  i1408.useAutoRandomSeed = !!i1409[15]
  i1408.randomSeed = i1409[16]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1410 = root || new pc.ParticleSystemMain()
  var i1411 = data
  i1410.duration = i1411[0]
  i1410.loop = !!i1411[1]
  i1410.prewarm = !!i1411[2]
  i1410.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[3], i1410.startDelay)
  i1410.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[4], i1410.startLifetime)
  i1410.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[5], i1410.startSpeed)
  i1410.startSize3D = !!i1411[6]
  i1410.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[7], i1410.startSizeX)
  i1410.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[8], i1410.startSizeY)
  i1410.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[9], i1410.startSizeZ)
  i1410.startRotation3D = !!i1411[10]
  i1410.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[11], i1410.startRotationX)
  i1410.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[12], i1410.startRotationY)
  i1410.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[13], i1410.startRotationZ)
  i1410.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1411[14], i1410.startColor)
  i1410.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1411[15], i1410.gravityModifier)
  i1410.simulationSpace = i1411[16]
  request.r(i1411[17], i1411[18], 0, i1410, 'customSimulationSpace')
  i1410.simulationSpeed = i1411[19]
  i1410.useUnscaledTime = !!i1411[20]
  i1410.scalingMode = i1411[21]
  i1410.playOnAwake = !!i1411[22]
  i1410.maxParticles = i1411[23]
  i1410.emitterVelocityMode = i1411[24]
  i1410.stopAction = i1411[25]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1412 = root || new pc.MinMaxCurve()
  var i1413 = data
  i1412.mode = i1413[0]
  i1412.curveMin = new pc.AnimationCurve( { keys_flow: i1413[1] } )
  i1412.curveMax = new pc.AnimationCurve( { keys_flow: i1413[2] } )
  i1412.curveMultiplier = i1413[3]
  i1412.constantMin = i1413[4]
  i1412.constantMax = i1413[5]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1414 = root || new pc.MinMaxGradient()
  var i1415 = data
  i1414.mode = i1415[0]
  i1414.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1415[1], i1414.gradientMin)
  i1414.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1415[2], i1414.gradientMax)
  i1414.colorMin = new pc.Color(i1415[3], i1415[4], i1415[5], i1415[6])
  i1414.colorMax = new pc.Color(i1415[7], i1415[8], i1415[9], i1415[10])
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1417 = data
  i1416.mode = i1417[0]
  var i1419 = i1417[1]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1419[i + 0]) );
  }
  i1416.colorKeys = i1418
  var i1421 = i1417[2]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1421[i + 0]) );
  }
  i1416.alphaKeys = i1420
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1422 = root || new pc.ParticleSystemColorBySpeed()
  var i1423 = data
  i1422.enabled = !!i1423[0]
  i1422.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1423[1], i1422.color)
  i1422.range = new pc.Vec2( i1423[2], i1423[3] )
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1427 = data
  i1426.color = new pc.Color(i1427[0], i1427[1], i1427[2], i1427[3])
  i1426.time = i1427[4]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1431 = data
  i1430.alpha = i1431[0]
  i1430.time = i1431[1]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1432 = root || new pc.ParticleSystemColorOverLifetime()
  var i1433 = data
  i1432.enabled = !!i1433[0]
  i1432.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1433[1], i1432.color)
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1434 = root || new pc.ParticleSystemEmitter()
  var i1435 = data
  i1434.enabled = !!i1435[0]
  i1434.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[1], i1434.rateOverTime)
  i1434.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[2], i1434.rateOverDistance)
  var i1437 = i1435[3]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1437[i + 0]) );
  }
  i1434.bursts = i1436
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1440 = root || new pc.ParticleSystemBurst()
  var i1441 = data
  i1440.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[0], i1440.count)
  i1440.cycleCount = i1441[1]
  i1440.minCount = i1441[2]
  i1440.maxCount = i1441[3]
  i1440.repeatInterval = i1441[4]
  i1440.time = i1441[5]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1442 = root || new pc.ParticleSystemRotationBySpeed()
  var i1443 = data
  i1442.enabled = !!i1443[0]
  i1442.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[1], i1442.x)
  i1442.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[2], i1442.y)
  i1442.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[3], i1442.z)
  i1442.separateAxes = !!i1443[4]
  i1442.range = new pc.Vec2( i1443[5], i1443[6] )
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1444 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1445 = data
  i1444.enabled = !!i1445[0]
  i1444.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[1], i1444.x)
  i1444.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[2], i1444.y)
  i1444.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[3], i1444.z)
  i1444.separateAxes = !!i1445[4]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1446 = root || new pc.ParticleSystemShape()
  var i1447 = data
  i1446.enabled = !!i1447[0]
  i1446.shapeType = i1447[1]
  i1446.randomDirectionAmount = i1447[2]
  i1446.sphericalDirectionAmount = i1447[3]
  i1446.randomPositionAmount = i1447[4]
  i1446.alignToDirection = !!i1447[5]
  i1446.radius = i1447[6]
  i1446.radiusMode = i1447[7]
  i1446.radiusSpread = i1447[8]
  i1446.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[9], i1446.radiusSpeed)
  i1446.radiusThickness = i1447[10]
  i1446.angle = i1447[11]
  i1446.length = i1447[12]
  i1446.boxThickness = new pc.Vec3( i1447[13], i1447[14], i1447[15] )
  i1446.meshShapeType = i1447[16]
  request.r(i1447[17], i1447[18], 0, i1446, 'mesh')
  request.r(i1447[19], i1447[20], 0, i1446, 'meshRenderer')
  request.r(i1447[21], i1447[22], 0, i1446, 'skinnedMeshRenderer')
  i1446.useMeshMaterialIndex = !!i1447[23]
  i1446.meshMaterialIndex = i1447[24]
  i1446.useMeshColors = !!i1447[25]
  i1446.normalOffset = i1447[26]
  i1446.arc = i1447[27]
  i1446.arcMode = i1447[28]
  i1446.arcSpread = i1447[29]
  i1446.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[30], i1446.arcSpeed)
  i1446.donutRadius = i1447[31]
  i1446.position = new pc.Vec3( i1447[32], i1447[33], i1447[34] )
  i1446.rotation = new pc.Vec3( i1447[35], i1447[36], i1447[37] )
  i1446.scale = new pc.Vec3( i1447[38], i1447[39], i1447[40] )
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1448 = root || new pc.ParticleSystemSizeBySpeed()
  var i1449 = data
  i1448.enabled = !!i1449[0]
  i1448.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[1], i1448.x)
  i1448.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[2], i1448.y)
  i1448.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[3], i1448.z)
  i1448.separateAxes = !!i1449[4]
  i1448.range = new pc.Vec2( i1449[5], i1449[6] )
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1450 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1451 = data
  i1450.enabled = !!i1451[0]
  i1450.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[1], i1450.x)
  i1450.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[2], i1450.y)
  i1450.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[3], i1450.z)
  i1450.separateAxes = !!i1451[4]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1452 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1453 = data
  i1452.enabled = !!i1453[0]
  i1452.mode = i1453[1]
  i1452.animation = i1453[2]
  i1452.numTilesX = i1453[3]
  i1452.numTilesY = i1453[4]
  i1452.useRandomRow = !!i1453[5]
  i1452.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[6], i1452.frameOverTime)
  i1452.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[7], i1452.startFrame)
  i1452.cycleCount = i1453[8]
  i1452.rowIndex = i1453[9]
  i1452.flipU = i1453[10]
  i1452.flipV = i1453[11]
  i1452.spriteCount = i1453[12]
  var i1455 = i1453[13]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 2) {
  request.r(i1455[i + 0], i1455[i + 1], 2, i1454, '')
  }
  i1452.sprites = i1454
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1458 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1459 = data
  i1458.enabled = !!i1459[0]
  i1458.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[1], i1458.x)
  i1458.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[2], i1458.y)
  i1458.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[3], i1458.z)
  i1458.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[4], i1458.radial)
  i1458.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[5], i1458.speedModifier)
  i1458.space = i1459[6]
  i1458.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[7], i1458.orbitalX)
  i1458.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[8], i1458.orbitalY)
  i1458.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[9], i1458.orbitalZ)
  i1458.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[10], i1458.orbitalOffsetX)
  i1458.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[11], i1458.orbitalOffsetY)
  i1458.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[12], i1458.orbitalOffsetZ)
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1460 = root || new pc.ParticleSystemNoise()
  var i1461 = data
  i1460.enabled = !!i1461[0]
  i1460.separateAxes = !!i1461[1]
  i1460.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[2], i1460.strengthX)
  i1460.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[3], i1460.strengthY)
  i1460.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[4], i1460.strengthZ)
  i1460.frequency = i1461[5]
  i1460.damping = !!i1461[6]
  i1460.octaveCount = i1461[7]
  i1460.octaveMultiplier = i1461[8]
  i1460.octaveScale = i1461[9]
  i1460.quality = i1461[10]
  i1460.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[11], i1460.scrollSpeed)
  i1460.scrollSpeedMultiplier = i1461[12]
  i1460.remapEnabled = !!i1461[13]
  i1460.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[14], i1460.remapX)
  i1460.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[15], i1460.remapY)
  i1460.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[16], i1460.remapZ)
  i1460.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[17], i1460.positionAmount)
  i1460.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[18], i1460.rotationAmount)
  i1460.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[19], i1460.sizeAmount)
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1462 = root || new pc.ParticleSystemInheritVelocity()
  var i1463 = data
  i1462.enabled = !!i1463[0]
  i1462.mode = i1463[1]
  i1462.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1463[2], i1462.curve)
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1464 = root || new pc.ParticleSystemForceOverLifetime()
  var i1465 = data
  i1464.enabled = !!i1465[0]
  i1464.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[1], i1464.x)
  i1464.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[2], i1464.y)
  i1464.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1465[3], i1464.z)
  i1464.space = i1465[4]
  i1464.randomized = !!i1465[5]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1466 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1467 = data
  i1466.enabled = !!i1467[0]
  i1466.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[1], i1466.limit)
  i1466.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[2], i1466.limitX)
  i1466.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[3], i1466.limitY)
  i1466.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[4], i1466.limitZ)
  i1466.dampen = i1467[5]
  i1466.separateAxes = !!i1467[6]
  i1466.space = i1467[7]
  i1466.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1467[8], i1466.drag)
  i1466.multiplyDragByParticleSize = !!i1467[9]
  i1466.multiplyDragByParticleVelocity = !!i1467[10]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1469 = data
  i1468.enabled = !!i1469[0]
  request.r(i1469[1], i1469[2], 0, i1468, 'sharedMaterial')
  var i1471 = i1469[3]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 2) {
  request.r(i1471[i + 0], i1471[i + 1], 2, i1470, '')
  }
  i1468.sharedMaterials = i1470
  i1468.receiveShadows = !!i1469[4]
  i1468.shadowCastingMode = i1469[5]
  i1468.sortingLayerID = i1469[6]
  i1468.sortingOrder = i1469[7]
  i1468.lightmapIndex = i1469[8]
  i1468.lightmapSceneIndex = i1469[9]
  i1468.lightmapScaleOffset = new pc.Vec4( i1469[10], i1469[11], i1469[12], i1469[13] )
  i1468.lightProbeUsage = i1469[14]
  i1468.reflectionProbeUsage = i1469[15]
  request.r(i1469[16], i1469[17], 0, i1468, 'mesh')
  i1468.meshCount = i1469[18]
  i1468.activeVertexStreamsCount = i1469[19]
  i1468.alignment = i1469[20]
  i1468.renderMode = i1469[21]
  i1468.sortMode = i1469[22]
  i1468.lengthScale = i1469[23]
  i1468.velocityScale = i1469[24]
  i1468.cameraVelocityScale = i1469[25]
  i1468.normalDirection = i1469[26]
  i1468.sortingFudge = i1469[27]
  i1468.minParticleSize = i1469[28]
  i1468.maxParticleSize = i1469[29]
  i1468.pivot = new pc.Vec3( i1469[30], i1469[31], i1469[32] )
  request.r(i1469[33], i1469[34], 0, i1468, 'trailMaterial')
  return i1468
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i1472 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i1473 = data
  i1472.OnlyDeactivate = !!i1473[0]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1475 = data
  request.r(i1475[0], i1475[1], 0, i1474, 'clip')
  request.r(i1475[2], i1475[3], 0, i1474, 'outputAudioMixerGroup')
  i1474.playOnAwake = !!i1475[4]
  i1474.loop = !!i1475[5]
  i1474.time = i1475[6]
  i1474.volume = i1475[7]
  i1474.pitch = i1475[8]
  i1474.enabled = !!i1475[9]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1477 = data
  i1476.mass = i1477[0]
  i1476.drag = i1477[1]
  i1476.angularDrag = i1477[2]
  i1476.useGravity = !!i1477[3]
  i1476.isKinematic = !!i1477[4]
  i1476.constraints = i1477[5]
  i1476.maxAngularVelocity = i1477[6]
  i1476.collisionDetectionMode = i1477[7]
  i1476.interpolation = i1477[8]
  return i1476
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i1478 = root || request.c( 'Howitzer.Projectile' )
  var i1479 = data
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1481 = data
  i1480.center = new pc.Vec3( i1481[0], i1481[1], i1481[2] )
  i1480.radius = i1481[3]
  i1480.height = i1481[4]
  i1480.direction = i1481[5]
  i1480.enabled = !!i1481[6]
  i1480.isTrigger = !!i1481[7]
  request.r(i1481[8], i1481[9], 0, i1480, 'material')
  return i1480
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i1482 = root || request.c( 'BehaviourAI.TankAI' )
  var i1483 = data
  i1482.stopDistance = i1483[0]
  i1482.rotationSpeed = i1483[1]
  i1482.moveSpeed = i1483[2]
  request.r(i1483[3], i1483[4], 0, i1482, '_exclamationMark')
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1485 = data
  i1484.center = new pc.Vec3( i1485[0], i1485[1], i1485[2] )
  i1484.size = new pc.Vec3( i1485[3], i1485[4], i1485[5] )
  i1484.enabled = !!i1485[6]
  i1484.isTrigger = !!i1485[7]
  request.r(i1485[8], i1485[9], 0, i1484, 'material')
  return i1484
}

Deserializers["BlinkingObject"] = function (request, data, root) {
  var i1486 = root || request.c( 'BlinkingObject' )
  var i1487 = data
  request.r(i1487[0], i1487[1], 0, i1486, '_tower')
  i1486.blinkColor = new pc.Color(i1487[2], i1487[3], i1487[4], i1487[5])
  i1486.blinkInterval = i1487[6]
  i1486.blinkDuration = i1487[7]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1489 = data
  i1488.enabled = !!i1489[0]
  i1488.planeDistance = i1489[1]
  i1488.referencePixelsPerUnit = i1489[2]
  i1488.isFallbackOverlay = !!i1489[3]
  i1488.renderMode = i1489[4]
  i1488.renderOrder = i1489[5]
  i1488.sortingLayerName = i1489[6]
  i1488.sortingOrder = i1489[7]
  i1488.scaleFactor = i1489[8]
  request.r(i1489[9], i1489[10], 0, i1488, 'worldCamera')
  i1488.overrideSorting = !!i1489[11]
  i1488.pixelPerfect = !!i1489[12]
  i1488.targetDisplay = i1489[13]
  i1488.overridePixelPerfect = !!i1489[14]
  return i1488
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1491 = data
  i1490.m_UiScaleMode = i1491[0]
  i1490.m_ReferencePixelsPerUnit = i1491[1]
  i1490.m_ScaleFactor = i1491[2]
  i1490.m_ReferenceResolution = new pc.Vec2( i1491[3], i1491[4] )
  i1490.m_ScreenMatchMode = i1491[5]
  i1490.m_MatchWidthOrHeight = i1491[6]
  i1490.m_PhysicalUnit = i1491[7]
  i1490.m_FallbackScreenDPI = i1491[8]
  i1490.m_DefaultSpriteDPI = i1491[9]
  i1490.m_DynamicPixelsPerUnit = i1491[10]
  i1490.m_PresetInfoIsWorld = !!i1491[11]
  return i1490
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1493 = data
  i1492.m_IgnoreReversedGraphics = !!i1493[0]
  i1492.m_BlockingObjects = i1493[1]
  i1492.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1493[2] )
  return i1492
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i1494 = root || request.c( 'ExclamationMark' )
  var i1495 = data
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1497 = data
  i1496.enabled = !!i1497[0]
  request.r(i1497[1], i1497[2], 0, i1496, 'sharedMaterial')
  var i1499 = i1497[3]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 2) {
  request.r(i1499[i + 0], i1499[i + 1], 2, i1498, '')
  }
  i1496.sharedMaterials = i1498
  i1496.receiveShadows = !!i1497[4]
  i1496.shadowCastingMode = i1497[5]
  i1496.sortingLayerID = i1497[6]
  i1496.sortingOrder = i1497[7]
  i1496.lightmapIndex = i1497[8]
  i1496.lightmapSceneIndex = i1497[9]
  i1496.lightmapScaleOffset = new pc.Vec4( i1497[10], i1497[11], i1497[12], i1497[13] )
  i1496.lightProbeUsage = i1497[14]
  i1496.reflectionProbeUsage = i1497[15]
  i1496.color = new pc.Color(i1497[16], i1497[17], i1497[18], i1497[19])
  request.r(i1497[20], i1497[21], 0, i1496, 'sprite')
  i1496.flipX = !!i1497[22]
  i1496.flipY = !!i1497[23]
  i1496.drawMode = i1497[24]
  i1496.size = new pc.Vec2( i1497[25], i1497[26] )
  i1496.tileMode = i1497[27]
  i1496.adaptiveModeThreshold = i1497[28]
  i1496.maskInteraction = i1497[29]
  i1496.spriteSortPoint = i1497[30]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1501 = data
  i1500.name = i1501[0]
  i1500.atlasId = i1501[1]
  i1500.mipmapCount = i1501[2]
  i1500.hdr = !!i1501[3]
  i1500.size = i1501[4]
  i1500.anisoLevel = i1501[5]
  i1500.filterMode = i1501[6]
  var i1503 = i1501[7]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 4) {
    i1502.push( UnityEngine.Rect.MinMaxRect(i1503[i + 0], i1503[i + 1], i1503[i + 2], i1503[i + 3]) );
  }
  i1500.rects = i1502
  i1500.wrapU = i1501[8]
  i1500.wrapV = i1501[9]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1507 = data
  i1506.name = i1507[0]
  i1506.index = i1507[1]
  i1506.startup = !!i1507[2]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1509 = data
  i1508.enabled = !!i1509[0]
  i1508.aspect = i1509[1]
  i1508.orthographic = !!i1509[2]
  i1508.orthographicSize = i1509[3]
  i1508.backgroundColor = new pc.Color(i1509[4], i1509[5], i1509[6], i1509[7])
  i1508.nearClipPlane = i1509[8]
  i1508.farClipPlane = i1509[9]
  i1508.fieldOfView = i1509[10]
  i1508.depth = i1509[11]
  i1508.clearFlags = i1509[12]
  i1508.cullingMask = i1509[13]
  i1508.rect = i1509[14]
  request.r(i1509[15], i1509[16], 0, i1508, 'targetTexture')
  i1508.usePhysicalProperties = !!i1509[17]
  i1508.focalLength = i1509[18]
  i1508.sensorSize = new pc.Vec2( i1509[19], i1509[20] )
  i1508.lensShift = new pc.Vec2( i1509[21], i1509[22] )
  i1508.gateFit = i1509[23]
  i1508.commandBufferCount = i1509[24]
  i1508.cameraType = i1509[25]
  return i1508
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i1510 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i1511 = data
  request.r(i1511[0], i1511[1], 0, i1510, 'joystick')
  i1510.minYAngle = i1511[2]
  i1510.maxYAngle = i1511[3]
  i1510.rotationSpeed = i1511[4]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1513 = data
  i1512.enabled = !!i1513[0]
  i1512.type = i1513[1]
  i1512.color = new pc.Color(i1513[2], i1513[3], i1513[4], i1513[5])
  i1512.cullingMask = i1513[6]
  i1512.intensity = i1513[7]
  i1512.range = i1513[8]
  i1512.spotAngle = i1513[9]
  i1512.shadows = i1513[10]
  i1512.shadowNormalBias = i1513[11]
  i1512.shadowBias = i1513[12]
  i1512.shadowStrength = i1513[13]
  i1512.shadowResolution = i1513[14]
  i1512.lightmapBakeType = i1513[15]
  i1512.renderMode = i1513[16]
  request.r(i1513[17], i1513[18], 0, i1512, 'cookie')
  i1512.cookieSize = i1513[19]
  return i1512
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i1514 = root || request.c( 'Howitzer.LookAtReticle' )
  var i1515 = data
  request.r(i1515[0], i1515[1], 0, i1514, 'reticle')
  request.r(i1515[2], i1515[3], 0, i1514, 'mainCamera')
  i1514.rotationSpeed = i1515[4]
  i1514.maxPitchAngle = i1515[5]
  i1514.minPitchAngle = i1515[6]
  return i1514
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i1516 = root || request.c( 'FollowBullet' )
  var i1517 = data
  i1516._smoothSpeed = i1517[0]
  i1516._offset = new pc.Vec3( i1517[1], i1517[2], i1517[3] )
  return i1516
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i1518 = root || request.c( 'UI.PlayerUIController' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'shootButton')
  request.r(i1519[2], i1519[3], 0, i1518, 'zoomButton')
  request.r(i1519[4], i1519[5], 0, i1518, '_cross')
  request.r(i1519[6], i1519[7], 0, i1518, '_mark')
  return i1518
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i1520 = root || request.c( 'Howitzer.PlayerZoom' )
  var i1521 = data
  request.r(i1521[0], i1521[1], 0, i1520, 'crosshair')
  request.r(i1521[2], i1521[3], 0, i1520, 'mainCamera')
  request.r(i1521[4], i1521[5], 0, i1520, 'zoomImage')
  var i1523 = i1521[6]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 2) {
  request.r(i1523[i + 0], i1523[i + 1], 2, i1522, '')
  }
  i1520.objectsToDisable = i1522
  i1520.zoomFOV = i1521[7]
  i1520.normalFOV = i1521[8]
  i1520.zoomSpeed = i1521[9]
  request.r(i1521[10], i1521[11], 0, i1520, 'joystick')
  i1520.rotationSpeed = i1521[12]
  return i1520
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i1526 = root || request.c( 'Howitzer.PlayerShooting' )
  var i1527 = data
  request.r(i1527[0], i1527[1], 0, i1526, 'playerShootingCooldown')
  request.r(i1527[2], i1527[3], 0, i1526, 'mainCamera')
  request.r(i1527[4], i1527[5], 0, i1526, 'crosshairUI')
  request.r(i1527[6], i1527[7], 0, i1526, 'muzzleFlash')
  request.r(i1527[8], i1527[9], 0, i1526, 'explosionEffect')
  request.r(i1527[10], i1527[11], 0, i1526, 'projectilePosition')
  request.r(i1527[12], i1527[13], 0, i1526, 'prefabProjectile')
  i1526.projectileSpeed = i1527[14]
  i1526.poolSize = i1527[15]
  request.r(i1527[16], i1527[17], 0, i1526, '_followBullet')
  request.r(i1527[18], i1527[19], 0, i1526, '_managerCamers')
  request.r(i1527[20], i1527[21], 0, i1526, '_timeController')
  request.r(i1527[22], i1527[23], 0, i1526, '_playerUIController')
  request.r(i1527[24], i1527[25], 0, i1526, '_tanksFabric')
  return i1526
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i1528 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i1529 = data
  request.r(i1529[0], i1529[1], 0, i1528, 'shootButton')
  request.r(i1529[2], i1529[3], 0, i1528, 'cooldownText')
  request.r(i1529[4], i1529[5], 0, i1528, 'cooldownImage')
  i1528.cooldownTime = i1529[6]
  return i1528
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.UI.Button' )
  var i1531 = data
  i1530.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1531[0], i1530.m_OnClick)
  i1530.m_Navigation = request.d('UnityEngine.UI.Navigation', i1531[1], i1530.m_Navigation)
  i1530.m_Transition = i1531[2]
  i1530.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1531[3], i1530.m_Colors)
  i1530.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1531[4], i1530.m_SpriteState)
  i1530.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1531[5], i1530.m_AnimationTriggers)
  i1530.m_Interactable = !!i1531[6]
  request.r(i1531[7], i1531[8], 0, i1530, 'm_TargetGraphic')
  return i1530
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1533 = data
  i1532.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1533[0], i1532.m_PersistentCalls)
  return i1532
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1535 = data
  var i1537 = i1535[0]
  var i1536 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.add(request.d('UnityEngine.Events.PersistentCall', i1537[i + 0]));
  }
  i1534.m_Calls = i1536
  return i1534
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1541 = data
  request.r(i1541[0], i1541[1], 0, i1540, 'm_Target')
  i1540.m_TargetAssemblyTypeName = i1541[2]
  i1540.m_MethodName = i1541[3]
  i1540.m_Mode = i1541[4]
  i1540.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1541[5], i1540.m_Arguments)
  i1540.m_CallState = i1541[6]
  return i1540
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1543 = data
  i1542.m_Mode = i1543[0]
  i1542.m_WrapAround = !!i1543[1]
  request.r(i1543[2], i1543[3], 0, i1542, 'm_SelectOnUp')
  request.r(i1543[4], i1543[5], 0, i1542, 'm_SelectOnDown')
  request.r(i1543[6], i1543[7], 0, i1542, 'm_SelectOnLeft')
  request.r(i1543[8], i1543[9], 0, i1542, 'm_SelectOnRight')
  return i1542
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1545 = data
  i1544.m_NormalColor = new pc.Color(i1545[0], i1545[1], i1545[2], i1545[3])
  i1544.m_HighlightedColor = new pc.Color(i1545[4], i1545[5], i1545[6], i1545[7])
  i1544.m_PressedColor = new pc.Color(i1545[8], i1545[9], i1545[10], i1545[11])
  i1544.m_SelectedColor = new pc.Color(i1545[12], i1545[13], i1545[14], i1545[15])
  i1544.m_DisabledColor = new pc.Color(i1545[16], i1545[17], i1545[18], i1545[19])
  i1544.m_ColorMultiplier = i1545[20]
  i1544.m_FadeDuration = i1545[21]
  return i1544
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1547 = data
  request.r(i1547[0], i1547[1], 0, i1546, 'm_HighlightedSprite')
  request.r(i1547[2], i1547[3], 0, i1546, 'm_PressedSprite')
  request.r(i1547[4], i1547[5], 0, i1546, 'm_SelectedSprite')
  request.r(i1547[6], i1547[7], 0, i1546, 'm_DisabledSprite')
  return i1546
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1549 = data
  i1548.m_NormalTrigger = i1549[0]
  i1548.m_HighlightedTrigger = i1549[1]
  i1548.m_PressedTrigger = i1549[2]
  i1548.m_SelectedTrigger = i1549[3]
  i1548.m_DisabledTrigger = i1549[4]
  return i1548
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.UI.Text' )
  var i1551 = data
  i1550.m_FontData = request.d('UnityEngine.UI.FontData', i1551[0], i1550.m_FontData)
  i1550.m_Text = i1551[1]
  request.r(i1551[2], i1551[3], 0, i1550, 'm_Material')
  i1550.m_Maskable = !!i1551[4]
  i1550.m_Color = new pc.Color(i1551[5], i1551[6], i1551[7], i1551[8])
  i1550.m_RaycastTarget = !!i1551[9]
  i1550.m_RaycastPadding = new pc.Vec4( i1551[10], i1551[11], i1551[12], i1551[13] )
  return i1550
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1553 = data
  request.r(i1553[0], i1553[1], 0, i1552, 'm_Font')
  i1552.m_FontSize = i1553[2]
  i1552.m_FontStyle = i1553[3]
  i1552.m_BestFit = !!i1553[4]
  i1552.m_MinSize = i1553[5]
  i1552.m_MaxSize = i1553[6]
  i1552.m_Alignment = i1553[7]
  i1552.m_AlignByGeometry = !!i1553[8]
  i1552.m_RichText = !!i1553[9]
  i1552.m_HorizontalOverflow = i1553[10]
  i1552.m_VerticalOverflow = i1553[11]
  i1552.m_LineSpacing = i1553[12]
  return i1552
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i1554 = root || request.c( 'TutorialHand' )
  var i1555 = data
  request.r(i1555[0], i1555[1], 0, i1554, 'handImage')
  i1554.moveDistance = i1555[2]
  i1554.moveDuration = i1555[3]
  return i1554
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i1556 = root || request.c( 'UI.CrosshairMovement' )
  var i1557 = data
  request.r(i1557[0], i1557[1], 0, i1556, 'joystick')
  request.r(i1557[2], i1557[3], 0, i1556, 'crosshair')
  i1556.moveSpeed = i1557[4]
  request.r(i1557[5], i1557[6], 0, i1556, 'canvasRect')
  return i1556
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i1558 = root || request.c( 'UI.EndCardAnimation' )
  var i1559 = data
  request.r(i1559[0], i1559[1], 0, i1558, 'background')
  request.r(i1559[2], i1559[3], 0, i1558, 'title')
  request.r(i1559[4], i1559[5], 0, i1558, 'logoAndButton')
  request.r(i1559[6], i1559[7], 0, i1558, 'titleText')
  i1558.fadeDuration = i1559[8]
  i1558.scaleDuration = i1559[9]
  i1558.scaleEase = i1559[10]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1561 = data
  i1560.m_Alpha = i1561[0]
  i1560.m_Interactable = !!i1561[1]
  i1560.m_BlocksRaycasts = !!i1561[2]
  i1560.m_IgnoreParentGroups = !!i1561[3]
  i1560.enabled = !!i1561[4]
  return i1560
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1563 = data
  i1562.m_AspectMode = i1563[0]
  i1562.m_AspectRatio = i1563[1]
  return i1562
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i1564 = root || request.c( 'UI.ButtonPulse' )
  var i1565 = data
  i1564.scaleMultiplier = i1565[0]
  i1564.duration = i1565[1]
  return i1564
}

Deserializers["Cross"] = function (request, data, root) {
  var i1566 = root || request.c( 'Cross' )
  var i1567 = data
  return i1566
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1569 = data
  request.r(i1569[0], i1569[1], 0, i1568, 'm_FirstSelected')
  i1568.m_sendNavigationEvents = !!i1569[2]
  i1568.m_DragThreshold = i1569[3]
  return i1568
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1571 = data
  i1570.m_HorizontalAxis = i1571[0]
  i1570.m_VerticalAxis = i1571[1]
  i1570.m_SubmitButton = i1571[2]
  i1570.m_CancelButton = i1571[3]
  i1570.m_InputActionsPerSecond = i1571[4]
  i1570.m_RepeatDelay = i1571[5]
  i1570.m_ForceModuleActive = !!i1571[6]
  i1570.m_SendPointerHoverToParent = !!i1571[7]
  return i1570
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i1572 = root || request.c( 'Bootstraps.Bootstrap' )
  var i1573 = data
  request.r(i1573[0], i1573[1], 0, i1572, 'tanksFabric')
  request.r(i1573[2], i1573[3], 0, i1572, 'scenarioGame')
  return i1572
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i1574 = root || request.c( 'Fabric.TanksFabric' )
  var i1575 = data
  request.r(i1575[0], i1575[1], 0, i1574, 'tankPrefab')
  var i1577 = i1575[2]
  var i1576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1577.length; i += 2) {
  request.r(i1577[i + 0], i1577[i + 1], 1, i1576, '')
  }
  i1574.spawnPoints = i1576
  var i1579 = i1575[3]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 2) {
  request.r(i1579[i + 0], i1579[i + 1], 2, i1578, '')
  }
  i1574.targets = i1578
  return i1574
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i1584 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'endCard')
  return i1584
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i1586 = root || request.c( 'UI.TankKillStatistics' )
  var i1587 = data
  return i1586
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i1588 = root || request.c( 'ManagerCamers' )
  var i1589 = data
  request.r(i1589[0], i1589[1], 0, i1588, '_plauerCamera')
  request.r(i1589[2], i1589[3], 0, i1588, '_bulletCamera')
  request.r(i1589[4], i1589[5], 0, i1588, '_timeController')
  request.r(i1589[6], i1589[7], 0, i1588, '_playerZoom')
  return i1588
}

Deserializers["TimeController"] = function (request, data, root) {
  var i1590 = root || request.c( 'TimeController' )
  var i1591 = data
  i1590.slowMotionScale = i1591[0]
  i1590.slowMotionDuration = i1591[1]
  i1590.restoreSpeedDuration = i1591[2]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1593 = data
  i1592.ambientIntensity = i1593[0]
  i1592.reflectionIntensity = i1593[1]
  i1592.ambientMode = i1593[2]
  i1592.ambientLight = new pc.Color(i1593[3], i1593[4], i1593[5], i1593[6])
  i1592.ambientSkyColor = new pc.Color(i1593[7], i1593[8], i1593[9], i1593[10])
  i1592.ambientGroundColor = new pc.Color(i1593[11], i1593[12], i1593[13], i1593[14])
  i1592.ambientEquatorColor = new pc.Color(i1593[15], i1593[16], i1593[17], i1593[18])
  i1592.fogColor = new pc.Color(i1593[19], i1593[20], i1593[21], i1593[22])
  i1592.fogEndDistance = i1593[23]
  i1592.fogStartDistance = i1593[24]
  i1592.fogDensity = i1593[25]
  i1592.fog = !!i1593[26]
  request.r(i1593[27], i1593[28], 0, i1592, 'skybox')
  i1592.fogMode = i1593[29]
  var i1595 = i1593[30]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1595[i + 0]) );
  }
  i1592.lightmaps = i1594
  i1592.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1593[31], i1592.lightProbes)
  i1592.lightmapsMode = i1593[32]
  i1592.mixedBakeMode = i1593[33]
  i1592.environmentLightingMode = i1593[34]
  i1592.ambientProbe = new pc.SphericalHarmonicsL2(i1593[35])
  i1592.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1593[36])
  i1592.useReferenceAmbientProbe = !!i1593[37]
  request.r(i1593[38], i1593[39], 0, i1592, 'customReflection')
  request.r(i1593[40], i1593[41], 0, i1592, 'defaultReflection')
  i1592.defaultReflectionMode = i1593[42]
  i1592.defaultReflectionResolution = i1593[43]
  i1592.sunLightObjectId = i1593[44]
  i1592.pixelLightCount = i1593[45]
  i1592.defaultReflectionHDR = !!i1593[46]
  i1592.hasLightDataAsset = !!i1593[47]
  i1592.hasManualGenerate = !!i1593[48]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1599 = data
  request.r(i1599[0], i1599[1], 0, i1598, 'lightmapColor')
  request.r(i1599[2], i1599[3], 0, i1598, 'lightmapDirection')
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1600 = root || new UnityEngine.LightProbes()
  var i1601 = data
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1609 = data
  var i1611 = i1609[0]
  var i1610 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1611[i + 0]));
  }
  i1608.ShaderCompilationErrors = i1610
  i1608.name = i1609[1]
  i1608.guid = i1609[2]
  var i1613 = i1609[3]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( i1613[i + 0] );
  }
  i1608.shaderDefinedKeywords = i1612
  var i1615 = i1609[4]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1615[i + 0]) );
  }
  i1608.passes = i1614
  var i1617 = i1609[5]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1617[i + 0]) );
  }
  i1608.usePasses = i1616
  var i1619 = i1609[6]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1619[i + 0]) );
  }
  i1608.defaultParameterValues = i1618
  request.r(i1609[7], i1609[8], 0, i1608, 'unityFallbackShader')
  i1608.readDepth = !!i1609[9]
  i1608.isCreatedByShaderGraph = !!i1609[10]
  i1608.compiled = !!i1609[11]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1623 = data
  i1622.shaderName = i1623[0]
  i1622.errorMessage = i1623[1]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1628 = root || new pc.UnityShaderPass()
  var i1629 = data
  i1628.id = i1629[0]
  i1628.subShaderIndex = i1629[1]
  i1628.name = i1629[2]
  i1628.passType = i1629[3]
  i1628.grabPassTextureName = i1629[4]
  i1628.usePass = !!i1629[5]
  i1628.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[6], i1628.zTest)
  i1628.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[7], i1628.zWrite)
  i1628.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[8], i1628.culling)
  i1628.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1629[9], i1628.blending)
  i1628.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1629[10], i1628.alphaBlending)
  i1628.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[11], i1628.colorWriteMask)
  i1628.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[12], i1628.offsetUnits)
  i1628.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[13], i1628.offsetFactor)
  i1628.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[14], i1628.stencilRef)
  i1628.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[15], i1628.stencilReadMask)
  i1628.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1629[16], i1628.stencilWriteMask)
  i1628.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1629[17], i1628.stencilOp)
  i1628.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1629[18], i1628.stencilOpFront)
  i1628.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1629[19], i1628.stencilOpBack)
  var i1631 = i1629[20]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1631[i + 0]) );
  }
  i1628.tags = i1630
  var i1633 = i1629[21]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( i1633[i + 0] );
  }
  i1628.passDefinedKeywords = i1632
  var i1635 = i1629[22]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1635[i + 0]) );
  }
  i1628.passDefinedKeywordGroups = i1634
  var i1637 = i1629[23]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1637[i + 0]) );
  }
  i1628.variants = i1636
  var i1639 = i1629[24]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1639[i + 0]) );
  }
  i1628.excludedVariants = i1638
  i1628.hasDepthReader = !!i1629[25]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1641 = data
  i1640.val = i1641[0]
  i1640.name = i1641[1]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1643 = data
  i1642.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[0], i1642.src)
  i1642.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[1], i1642.dst)
  i1642.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1643[2], i1642.op)
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1645 = data
  i1644.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1645[0], i1644.pass)
  i1644.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1645[1], i1644.fail)
  i1644.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1645[2], i1644.zFail)
  i1644.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1645[3], i1644.comp)
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1649 = data
  i1648.name = i1649[0]
  i1648.value = i1649[1]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1653 = data
  var i1655 = i1653[0]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( i1655[i + 0] );
  }
  i1652.keywords = i1654
  i1652.hasDiscard = !!i1653[1]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1659 = data
  i1658.passId = i1659[0]
  i1658.subShaderIndex = i1659[1]
  var i1661 = i1659[2]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( i1661[i + 0] );
  }
  i1658.keywords = i1660
  i1658.vertexProgram = i1659[3]
  i1658.fragmentProgram = i1659[4]
  i1658.exportedForWebGl2 = !!i1659[5]
  i1658.readDepth = !!i1659[6]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1665 = data
  request.r(i1665[0], i1665[1], 0, i1664, 'shader')
  i1664.pass = i1665[2]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1669 = data
  i1668.name = i1669[0]
  i1668.type = i1669[1]
  i1668.value = new pc.Vec4( i1669[2], i1669[3], i1669[4], i1669[5] )
  i1668.textureValue = i1669[6]
  i1668.shaderPropertyFlag = i1669[7]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1671 = data
  i1670.name = i1671[0]
  request.r(i1671[1], i1671[2], 0, i1670, 'texture')
  i1670.aabb = i1671[3]
  i1670.vertices = i1671[4]
  i1670.triangles = i1671[5]
  i1670.textureRect = UnityEngine.Rect.MinMaxRect(i1671[6], i1671[7], i1671[8], i1671[9])
  i1670.packedRect = UnityEngine.Rect.MinMaxRect(i1671[10], i1671[11], i1671[12], i1671[13])
  i1670.border = new pc.Vec4( i1671[14], i1671[15], i1671[16], i1671[17] )
  i1670.transparency = i1671[18]
  i1670.bounds = i1671[19]
  i1670.pixelsPerUnit = i1671[20]
  i1670.textureWidth = i1671[21]
  i1670.textureHeight = i1671[22]
  i1670.nativeSize = new pc.Vec2( i1671[23], i1671[24] )
  i1670.pivot = new pc.Vec2( i1671[25], i1671[26] )
  i1670.textureRectOffset = new pc.Vec2( i1671[27], i1671[28] )
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1673 = data
  i1672.name = i1673[0]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1675 = data
  i1674.name = i1675[0]
  i1674.ascent = i1675[1]
  i1674.originalLineHeight = i1675[2]
  i1674.fontSize = i1675[3]
  var i1677 = i1675[4]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1677[i + 0]) );
  }
  i1674.characterInfo = i1676
  request.r(i1675[5], i1675[6], 0, i1674, 'texture')
  i1674.originalFontSize = i1675[7]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1681 = data
  i1680.index = i1681[0]
  i1680.advance = i1681[1]
  i1680.bearing = i1681[2]
  i1680.glyphWidth = i1681[3]
  i1680.glyphHeight = i1681[4]
  i1680.minX = i1681[5]
  i1680.maxX = i1681[6]
  i1680.minY = i1681[7]
  i1680.maxY = i1681[8]
  i1680.uvBottomLeftX = i1681[9]
  i1680.uvBottomLeftY = i1681[10]
  i1680.uvBottomRightX = i1681[11]
  i1680.uvBottomRightY = i1681[12]
  i1680.uvTopLeftX = i1681[13]
  i1680.uvTopLeftY = i1681[14]
  i1680.uvTopRightX = i1681[15]
  i1680.uvTopRightY = i1681[16]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1683 = data
  var i1685 = i1683[0]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1685[i + 0]) );
  }
  i1682.files = i1684
  i1682.componentToPrefabIds = i1683[1]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1689 = data
  i1688.path = i1689[0]
  request.r(i1689[1], i1689[2], 0, i1688, 'unityObject')
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1691 = data
  var i1693 = i1691[0]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1693[i + 0]) );
  }
  i1690.scriptsExecutionOrder = i1692
  var i1695 = i1691[1]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1695[i + 0]) );
  }
  i1690.sortingLayers = i1694
  var i1697 = i1691[2]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1697[i + 0]) );
  }
  i1690.cullingLayers = i1696
  i1690.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1691[3], i1690.timeSettings)
  i1690.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1691[4], i1690.physicsSettings)
  i1690.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1691[5], i1690.physics2DSettings)
  i1690.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1691[6], i1690.qualitySettings)
  i1690.enableRealtimeShadows = !!i1691[7]
  i1690.enableAutoInstancing = !!i1691[8]
  i1690.enableDynamicBatching = !!i1691[9]
  i1690.lightmapEncodingQuality = i1691[10]
  i1690.desiredColorSpace = i1691[11]
  var i1699 = i1691[12]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( i1699[i + 0] );
  }
  i1690.allTags = i1698
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1703 = data
  i1702.name = i1703[0]
  i1702.value = i1703[1]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1707 = data
  i1706.id = i1707[0]
  i1706.name = i1707[1]
  i1706.value = i1707[2]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1711 = data
  i1710.id = i1711[0]
  i1710.name = i1711[1]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1713 = data
  i1712.fixedDeltaTime = i1713[0]
  i1712.maximumDeltaTime = i1713[1]
  i1712.timeScale = i1713[2]
  i1712.maximumParticleTimestep = i1713[3]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1715 = data
  i1714.gravity = new pc.Vec3( i1715[0], i1715[1], i1715[2] )
  i1714.defaultSolverIterations = i1715[3]
  i1714.bounceThreshold = i1715[4]
  i1714.autoSyncTransforms = !!i1715[5]
  i1714.autoSimulation = !!i1715[6]
  var i1717 = i1715[7]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1717[i + 0]) );
  }
  i1714.collisionMatrix = i1716
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1721 = data
  i1720.enabled = !!i1721[0]
  i1720.layerId = i1721[1]
  i1720.otherLayerId = i1721[2]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1723 = data
  request.r(i1723[0], i1723[1], 0, i1722, 'material')
  i1722.gravity = new pc.Vec2( i1723[2], i1723[3] )
  i1722.positionIterations = i1723[4]
  i1722.velocityIterations = i1723[5]
  i1722.velocityThreshold = i1723[6]
  i1722.maxLinearCorrection = i1723[7]
  i1722.maxAngularCorrection = i1723[8]
  i1722.maxTranslationSpeed = i1723[9]
  i1722.maxRotationSpeed = i1723[10]
  i1722.baumgarteScale = i1723[11]
  i1722.baumgarteTOIScale = i1723[12]
  i1722.timeToSleep = i1723[13]
  i1722.linearSleepTolerance = i1723[14]
  i1722.angularSleepTolerance = i1723[15]
  i1722.defaultContactOffset = i1723[16]
  i1722.autoSimulation = !!i1723[17]
  i1722.queriesHitTriggers = !!i1723[18]
  i1722.queriesStartInColliders = !!i1723[19]
  i1722.callbacksOnDisable = !!i1723[20]
  i1722.reuseCollisionCallbacks = !!i1723[21]
  i1722.autoSyncTransforms = !!i1723[22]
  var i1725 = i1723[23]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1725[i + 0]) );
  }
  i1722.collisionMatrix = i1724
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1729 = data
  i1728.enabled = !!i1729[0]
  i1728.layerId = i1729[1]
  i1728.otherLayerId = i1729[2]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1731 = data
  var i1733 = i1731[0]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1733[i + 0]) );
  }
  i1730.qualityLevels = i1732
  var i1735 = i1731[1]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( i1735[i + 0] );
  }
  i1730.names = i1734
  i1730.shadows = i1731[2]
  i1730.anisotropicFiltering = i1731[3]
  i1730.antiAliasing = i1731[4]
  i1730.lodBias = i1731[5]
  i1730.shadowCascades = i1731[6]
  i1730.shadowDistance = i1731[7]
  i1730.shadowmaskMode = i1731[8]
  i1730.shadowProjection = i1731[9]
  i1730.shadowResolution = i1731[10]
  i1730.softParticles = !!i1731[11]
  i1730.softVegetation = !!i1731[12]
  i1730.activeColorSpace = i1731[13]
  i1730.desiredColorSpace = i1731[14]
  i1730.masterTextureLimit = i1731[15]
  i1730.maxQueuedFrames = i1731[16]
  i1730.particleRaycastBudget = i1731[17]
  i1730.pixelLightCount = i1731[18]
  i1730.realtimeReflectionProbes = !!i1731[19]
  i1730.shadowCascade2Split = i1731[20]
  i1730.shadowCascade4Split = new pc.Vec3( i1731[21], i1731[22], i1731[23] )
  i1730.streamingMipmapsActive = !!i1731[24]
  i1730.vSyncCount = i1731[25]
  i1730.asyncUploadBufferSize = i1731[26]
  i1730.asyncUploadTimeSlice = i1731[27]
  i1730.billboardsFaceCameraPosition = !!i1731[28]
  i1730.shadowNearPlaneOffset = i1731[29]
  i1730.streamingMipmapsMemoryBudget = i1731[30]
  i1730.maximumLODLevel = i1731[31]
  i1730.streamingMipmapsAddAllCameras = !!i1731[32]
  i1730.streamingMipmapsMaxLevelReduction = i1731[33]
  i1730.streamingMipmapsRenderersPerFrame = i1731[34]
  i1730.resolutionScalingFixedDPIFactor = i1731[35]
  i1730.streamingMipmapsMaxFileIORequests = i1731[36]
  i1730.currentQualityLevel = i1731[37]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1741 = data
  i1740.weight = i1741[0]
  i1740.vertices = i1741[1]
  i1740.normals = i1741[2]
  i1740.tangents = i1741[3]
  return i1740
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1742 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1743 = data
  request.r(i1743[0], i1743[1], 0, i1742, 'm_ObjectArgument')
  i1742.m_ObjectArgumentAssemblyTypeName = i1743[2]
  i1742.m_IntArgument = i1743[3]
  i1742.m_FloatArgument = i1743[4]
  i1742.m_StringArgument = i1743[5]
  i1742.m_BoolArgument = !!i1743[6]
  return i1742
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

Deserializers.buildID = "f5b446b6-18d2-4410-a8e5-51c7ff4d0f5d";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

