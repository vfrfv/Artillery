var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.JointSpring' )
  var i1291 = data
  i1290.spring = i1291[0]
  i1290.damper = i1291[1]
  i1290.targetPosition = i1291[2]
  return i1290
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.JointMotor' )
  var i1293 = data
  i1292.m_TargetVelocity = i1293[0]
  i1292.m_Force = i1293[1]
  i1292.m_FreeSpin = i1293[2]
  return i1292
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.JointLimits' )
  var i1295 = data
  i1294.m_Min = i1295[0]
  i1294.m_Max = i1295[1]
  i1294.m_Bounciness = i1295[2]
  i1294.m_BounceMinVelocity = i1295[3]
  i1294.m_ContactDistance = i1295[4]
  i1294.minBounce = i1295[5]
  i1294.maxBounce = i1295[6]
  return i1294
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.JointDrive' )
  var i1297 = data
  i1296.m_PositionSpring = i1297[0]
  i1296.m_PositionDamper = i1297[1]
  i1296.m_MaximumForce = i1297[2]
  i1296.m_UseAcceleration = i1297[3]
  return i1296
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1299 = data
  i1298.m_Spring = i1299[0]
  i1298.m_Damper = i1299[1]
  return i1298
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1301 = data
  i1300.m_Limit = i1301[0]
  i1300.m_Bounciness = i1301[1]
  i1300.m_ContactDistance = i1301[2]
  return i1300
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1303 = data
  i1302.m_ExtremumSlip = i1303[0]
  i1302.m_ExtremumValue = i1303[1]
  i1302.m_AsymptoteSlip = i1303[2]
  i1302.m_AsymptoteValue = i1303[3]
  i1302.m_Stiffness = i1303[4]
  return i1302
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1305 = data
  i1304.m_LowerAngle = i1305[0]
  i1304.m_UpperAngle = i1305[1]
  return i1304
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1306 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1307 = data
  i1306.m_MotorSpeed = i1307[0]
  i1306.m_MaximumMotorTorque = i1307[1]
  return i1306
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1309 = data
  i1308.m_DampingRatio = i1309[0]
  i1308.m_Frequency = i1309[1]
  i1308.m_Angle = i1309[2]
  return i1308
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1311 = data
  i1310.m_LowerTranslation = i1311[0]
  i1310.m_UpperTranslation = i1311[1]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1313 = data
  i1312.pivot = new pc.Vec2( i1313[0], i1313[1] )
  i1312.anchorMin = new pc.Vec2( i1313[2], i1313[3] )
  i1312.anchorMax = new pc.Vec2( i1313[4], i1313[5] )
  i1312.sizeDelta = new pc.Vec2( i1313[6], i1313[7] )
  i1312.anchoredPosition3D = new pc.Vec3( i1313[8], i1313[9], i1313[10] )
  i1312.rotation = new pc.Quat(i1313[11], i1313[12], i1313[13], i1313[14])
  i1312.scale = new pc.Vec3( i1313[15], i1313[16], i1313[17] )
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1315 = data
  i1314.cullTransparentMesh = !!i1315[0]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1317 = data
  i1316.name = i1317[0]
  i1316.tagId = i1317[1]
  i1316.enabled = !!i1317[2]
  i1316.isStatic = !!i1317[3]
  i1316.layer = i1317[4]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1319 = data
  i1318.name = i1319[0]
  i1318.width = i1319[1]
  i1318.height = i1319[2]
  i1318.mipmapCount = i1319[3]
  i1318.anisoLevel = i1319[4]
  i1318.filterMode = i1319[5]
  i1318.hdr = !!i1319[6]
  i1318.format = i1319[7]
  i1318.wrapMode = i1319[8]
  i1318.alphaIsTransparency = !!i1319[9]
  i1318.alphaSource = i1319[10]
  i1318.graphicsFormat = i1319[11]
  i1318.sRGBTexture = !!i1319[12]
  i1318.desiredColorSpace = i1319[13]
  i1318.wrapU = i1319[14]
  i1318.wrapV = i1319[15]
  return i1318
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1320 = root || request.c( 'UnityEngine.UI.Image' )
  var i1321 = data
  request.r(i1321[0], i1321[1], 0, i1320, 'm_Sprite')
  i1320.m_Type = i1321[2]
  i1320.m_PreserveAspect = !!i1321[3]
  i1320.m_FillCenter = !!i1321[4]
  i1320.m_FillMethod = i1321[5]
  i1320.m_FillAmount = i1321[6]
  i1320.m_FillClockwise = !!i1321[7]
  i1320.m_FillOrigin = i1321[8]
  i1320.m_UseSpriteMesh = !!i1321[9]
  i1320.m_PixelsPerUnitMultiplier = i1321[10]
  request.r(i1321[11], i1321[12], 0, i1320, 'm_Material')
  i1320.m_Maskable = !!i1321[13]
  i1320.m_Color = new pc.Color(i1321[14], i1321[15], i1321[16], i1321[17])
  i1320.m_RaycastTarget = !!i1321[18]
  i1320.m_RaycastPadding = new pc.Vec4( i1321[19], i1321[20], i1321[21], i1321[22] )
  return i1320
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i1322 = root || request.c( 'VariableJoystick' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'handle')
  i1322.moveThreshold = i1323[2]
  i1322.joystickType = i1323[3]
  request.r(i1323[4], i1323[5], 0, i1322, 'background')
  i1322.handleRange = i1323[6]
  i1322.deadZone = i1323[7]
  i1322.axisOptions = i1323[8]
  i1322.snapX = !!i1323[9]
  i1322.snapY = !!i1323[10]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1325 = data
  i1324.position = new pc.Vec3( i1325[0], i1325[1], i1325[2] )
  i1324.scale = new pc.Vec3( i1325[3], i1325[4], i1325[5] )
  i1324.rotation = new pc.Quat(i1325[6], i1325[7], i1325[8], i1325[9])
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1327 = data
  request.r(i1327[0], i1327[1], 0, i1326, 'sharedMesh')
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'additionalVertexStreams')
  i1328.enabled = !!i1329[2]
  request.r(i1329[3], i1329[4], 0, i1328, 'sharedMaterial')
  var i1331 = i1329[5]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 2) {
  request.r(i1331[i + 0], i1331[i + 1], 2, i1330, '')
  }
  i1328.sharedMaterials = i1330
  i1328.receiveShadows = !!i1329[6]
  i1328.shadowCastingMode = i1329[7]
  i1328.sortingLayerID = i1329[8]
  i1328.sortingOrder = i1329[9]
  i1328.lightmapIndex = i1329[10]
  i1328.lightmapSceneIndex = i1329[11]
  i1328.lightmapScaleOffset = new pc.Vec4( i1329[12], i1329[13], i1329[14], i1329[15] )
  i1328.lightProbeUsage = i1329[16]
  i1328.reflectionProbeUsage = i1329[17]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1335 = data
  i1334.name = i1335[0]
  i1334.halfPrecision = !!i1335[1]
  i1334.useUInt32IndexFormat = !!i1335[2]
  i1334.vertexCount = i1335[3]
  i1334.aabb = i1335[4]
  var i1337 = i1335[5]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( !!i1337[i + 0] );
  }
  i1334.streams = i1336
  i1334.vertices = i1335[6]
  var i1339 = i1335[7]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1339[i + 0]) );
  }
  i1334.subMeshes = i1338
  var i1341 = i1335[8]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 16) {
    i1340.push( new pc.Mat4().setData(i1341[i + 0], i1341[i + 1], i1341[i + 2], i1341[i + 3],  i1341[i + 4], i1341[i + 5], i1341[i + 6], i1341[i + 7],  i1341[i + 8], i1341[i + 9], i1341[i + 10], i1341[i + 11],  i1341[i + 12], i1341[i + 13], i1341[i + 14], i1341[i + 15]) );
  }
  i1334.bindposes = i1340
  var i1343 = i1335[9]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1343[i + 0]) );
  }
  i1334.blendShapes = i1342
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1349 = data
  i1348.triangles = i1349[0]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1355 = data
  i1354.name = i1355[0]
  var i1357 = i1355[1]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1357[i + 0]) );
  }
  i1354.frames = i1356
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1358 = root || new pc.UnityMaterial()
  var i1359 = data
  i1358.name = i1359[0]
  request.r(i1359[1], i1359[2], 0, i1358, 'shader')
  i1358.renderQueue = i1359[3]
  i1358.enableInstancing = !!i1359[4]
  var i1361 = i1359[5]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1361[i + 0]) );
  }
  i1358.floatParameters = i1360
  var i1363 = i1359[6]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1363[i + 0]) );
  }
  i1358.colorParameters = i1362
  var i1365 = i1359[7]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1365[i + 0]) );
  }
  i1358.vectorParameters = i1364
  var i1367 = i1359[8]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1367[i + 0]) );
  }
  i1358.textureParameters = i1366
  var i1369 = i1359[9]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1369[i + 0]) );
  }
  i1358.materialFlags = i1368
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1373 = data
  i1372.name = i1373[0]
  i1372.value = i1373[1]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1377 = data
  i1376.name = i1377[0]
  i1376.value = new pc.Color(i1377[1], i1377[2], i1377[3], i1377[4])
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1381 = data
  i1380.name = i1381[0]
  i1380.value = new pc.Vec4( i1381[1], i1381[2], i1381[3], i1381[4] )
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1385 = data
  i1384.name = i1385[0]
  request.r(i1385[1], i1385[2], 0, i1384, 'value')
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1389 = data
  i1388.name = i1389[0]
  i1388.enabled = !!i1389[1]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1391 = data
  i1390.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1391[0], i1390.main)
  i1390.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1391[1], i1390.colorBySpeed)
  i1390.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1391[2], i1390.colorOverLifetime)
  i1390.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1391[3], i1390.emission)
  i1390.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1391[4], i1390.rotationBySpeed)
  i1390.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1391[5], i1390.rotationOverLifetime)
  i1390.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1391[6], i1390.shape)
  i1390.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1391[7], i1390.sizeBySpeed)
  i1390.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1391[8], i1390.sizeOverLifetime)
  i1390.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1391[9], i1390.textureSheetAnimation)
  i1390.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1391[10], i1390.velocityOverLifetime)
  i1390.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1391[11], i1390.noise)
  i1390.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1391[12], i1390.inheritVelocity)
  i1390.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1391[13], i1390.forceOverLifetime)
  i1390.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1391[14], i1390.limitVelocityOverLifetime)
  i1390.useAutoRandomSeed = !!i1391[15]
  i1390.randomSeed = i1391[16]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1392 = root || new pc.ParticleSystemMain()
  var i1393 = data
  i1392.duration = i1393[0]
  i1392.loop = !!i1393[1]
  i1392.prewarm = !!i1393[2]
  i1392.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[3], i1392.startDelay)
  i1392.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[4], i1392.startLifetime)
  i1392.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[5], i1392.startSpeed)
  i1392.startSize3D = !!i1393[6]
  i1392.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[7], i1392.startSizeX)
  i1392.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[8], i1392.startSizeY)
  i1392.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[9], i1392.startSizeZ)
  i1392.startRotation3D = !!i1393[10]
  i1392.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[11], i1392.startRotationX)
  i1392.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[12], i1392.startRotationY)
  i1392.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[13], i1392.startRotationZ)
  i1392.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1393[14], i1392.startColor)
  i1392.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1393[15], i1392.gravityModifier)
  i1392.simulationSpace = i1393[16]
  request.r(i1393[17], i1393[18], 0, i1392, 'customSimulationSpace')
  i1392.simulationSpeed = i1393[19]
  i1392.useUnscaledTime = !!i1393[20]
  i1392.scalingMode = i1393[21]
  i1392.playOnAwake = !!i1393[22]
  i1392.maxParticles = i1393[23]
  i1392.emitterVelocityMode = i1393[24]
  i1392.stopAction = i1393[25]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1394 = root || new pc.MinMaxCurve()
  var i1395 = data
  i1394.mode = i1395[0]
  i1394.curveMin = new pc.AnimationCurve( { keys_flow: i1395[1] } )
  i1394.curveMax = new pc.AnimationCurve( { keys_flow: i1395[2] } )
  i1394.curveMultiplier = i1395[3]
  i1394.constantMin = i1395[4]
  i1394.constantMax = i1395[5]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1396 = root || new pc.MinMaxGradient()
  var i1397 = data
  i1396.mode = i1397[0]
  i1396.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1397[1], i1396.gradientMin)
  i1396.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1397[2], i1396.gradientMax)
  i1396.colorMin = new pc.Color(i1397[3], i1397[4], i1397[5], i1397[6])
  i1396.colorMax = new pc.Color(i1397[7], i1397[8], i1397[9], i1397[10])
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1399 = data
  i1398.mode = i1399[0]
  var i1401 = i1399[1]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1401[i + 0]) );
  }
  i1398.colorKeys = i1400
  var i1403 = i1399[2]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1403[i + 0]) );
  }
  i1398.alphaKeys = i1402
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1404 = root || new pc.ParticleSystemColorBySpeed()
  var i1405 = data
  i1404.enabled = !!i1405[0]
  i1404.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1405[1], i1404.color)
  i1404.range = new pc.Vec2( i1405[2], i1405[3] )
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1409 = data
  i1408.color = new pc.Color(i1409[0], i1409[1], i1409[2], i1409[3])
  i1408.time = i1409[4]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1413 = data
  i1412.alpha = i1413[0]
  i1412.time = i1413[1]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1414 = root || new pc.ParticleSystemColorOverLifetime()
  var i1415 = data
  i1414.enabled = !!i1415[0]
  i1414.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1415[1], i1414.color)
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1416 = root || new pc.ParticleSystemEmitter()
  var i1417 = data
  i1416.enabled = !!i1417[0]
  i1416.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[1], i1416.rateOverTime)
  i1416.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1417[2], i1416.rateOverDistance)
  var i1419 = i1417[3]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1419[i + 0]) );
  }
  i1416.bursts = i1418
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1422 = root || new pc.ParticleSystemBurst()
  var i1423 = data
  i1422.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1423[0], i1422.count)
  i1422.cycleCount = i1423[1]
  i1422.minCount = i1423[2]
  i1422.maxCount = i1423[3]
  i1422.repeatInterval = i1423[4]
  i1422.time = i1423[5]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1424 = root || new pc.ParticleSystemRotationBySpeed()
  var i1425 = data
  i1424.enabled = !!i1425[0]
  i1424.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1425[1], i1424.x)
  i1424.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1425[2], i1424.y)
  i1424.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1425[3], i1424.z)
  i1424.separateAxes = !!i1425[4]
  i1424.range = new pc.Vec2( i1425[5], i1425[6] )
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1426 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1427 = data
  i1426.enabled = !!i1427[0]
  i1426.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1427[1], i1426.x)
  i1426.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1427[2], i1426.y)
  i1426.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1427[3], i1426.z)
  i1426.separateAxes = !!i1427[4]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1428 = root || new pc.ParticleSystemShape()
  var i1429 = data
  i1428.enabled = !!i1429[0]
  i1428.shapeType = i1429[1]
  i1428.randomDirectionAmount = i1429[2]
  i1428.sphericalDirectionAmount = i1429[3]
  i1428.randomPositionAmount = i1429[4]
  i1428.alignToDirection = !!i1429[5]
  i1428.radius = i1429[6]
  i1428.radiusMode = i1429[7]
  i1428.radiusSpread = i1429[8]
  i1428.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[9], i1428.radiusSpeed)
  i1428.radiusThickness = i1429[10]
  i1428.angle = i1429[11]
  i1428.length = i1429[12]
  i1428.boxThickness = new pc.Vec3( i1429[13], i1429[14], i1429[15] )
  i1428.meshShapeType = i1429[16]
  request.r(i1429[17], i1429[18], 0, i1428, 'mesh')
  request.r(i1429[19], i1429[20], 0, i1428, 'meshRenderer')
  request.r(i1429[21], i1429[22], 0, i1428, 'skinnedMeshRenderer')
  i1428.useMeshMaterialIndex = !!i1429[23]
  i1428.meshMaterialIndex = i1429[24]
  i1428.useMeshColors = !!i1429[25]
  i1428.normalOffset = i1429[26]
  i1428.arc = i1429[27]
  i1428.arcMode = i1429[28]
  i1428.arcSpread = i1429[29]
  i1428.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[30], i1428.arcSpeed)
  i1428.donutRadius = i1429[31]
  i1428.position = new pc.Vec3( i1429[32], i1429[33], i1429[34] )
  i1428.rotation = new pc.Vec3( i1429[35], i1429[36], i1429[37] )
  i1428.scale = new pc.Vec3( i1429[38], i1429[39], i1429[40] )
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1430 = root || new pc.ParticleSystemSizeBySpeed()
  var i1431 = data
  i1430.enabled = !!i1431[0]
  i1430.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[1], i1430.x)
  i1430.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[2], i1430.y)
  i1430.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[3], i1430.z)
  i1430.separateAxes = !!i1431[4]
  i1430.range = new pc.Vec2( i1431[5], i1431[6] )
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1432 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1433 = data
  i1432.enabled = !!i1433[0]
  i1432.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1433[1], i1432.x)
  i1432.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1433[2], i1432.y)
  i1432.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1433[3], i1432.z)
  i1432.separateAxes = !!i1433[4]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1434 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1435 = data
  i1434.enabled = !!i1435[0]
  i1434.mode = i1435[1]
  i1434.animation = i1435[2]
  i1434.numTilesX = i1435[3]
  i1434.numTilesY = i1435[4]
  i1434.useRandomRow = !!i1435[5]
  i1434.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[6], i1434.frameOverTime)
  i1434.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[7], i1434.startFrame)
  i1434.cycleCount = i1435[8]
  i1434.rowIndex = i1435[9]
  i1434.flipU = i1435[10]
  i1434.flipV = i1435[11]
  i1434.spriteCount = i1435[12]
  var i1437 = i1435[13]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 2) {
  request.r(i1437[i + 0], i1437[i + 1], 2, i1436, '')
  }
  i1434.sprites = i1436
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1440 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1441 = data
  i1440.enabled = !!i1441[0]
  i1440.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[1], i1440.x)
  i1440.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[2], i1440.y)
  i1440.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[3], i1440.z)
  i1440.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[4], i1440.radial)
  i1440.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[5], i1440.speedModifier)
  i1440.space = i1441[6]
  i1440.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[7], i1440.orbitalX)
  i1440.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[8], i1440.orbitalY)
  i1440.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[9], i1440.orbitalZ)
  i1440.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[10], i1440.orbitalOffsetX)
  i1440.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[11], i1440.orbitalOffsetY)
  i1440.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[12], i1440.orbitalOffsetZ)
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1442 = root || new pc.ParticleSystemNoise()
  var i1443 = data
  i1442.enabled = !!i1443[0]
  i1442.separateAxes = !!i1443[1]
  i1442.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[2], i1442.strengthX)
  i1442.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[3], i1442.strengthY)
  i1442.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[4], i1442.strengthZ)
  i1442.frequency = i1443[5]
  i1442.damping = !!i1443[6]
  i1442.octaveCount = i1443[7]
  i1442.octaveMultiplier = i1443[8]
  i1442.octaveScale = i1443[9]
  i1442.quality = i1443[10]
  i1442.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[11], i1442.scrollSpeed)
  i1442.scrollSpeedMultiplier = i1443[12]
  i1442.remapEnabled = !!i1443[13]
  i1442.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[14], i1442.remapX)
  i1442.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[15], i1442.remapY)
  i1442.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[16], i1442.remapZ)
  i1442.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[17], i1442.positionAmount)
  i1442.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[18], i1442.rotationAmount)
  i1442.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[19], i1442.sizeAmount)
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1444 = root || new pc.ParticleSystemInheritVelocity()
  var i1445 = data
  i1444.enabled = !!i1445[0]
  i1444.mode = i1445[1]
  i1444.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[2], i1444.curve)
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1446 = root || new pc.ParticleSystemForceOverLifetime()
  var i1447 = data
  i1446.enabled = !!i1447[0]
  i1446.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[1], i1446.x)
  i1446.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[2], i1446.y)
  i1446.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[3], i1446.z)
  i1446.space = i1447[4]
  i1446.randomized = !!i1447[5]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1448 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1449 = data
  i1448.enabled = !!i1449[0]
  i1448.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[1], i1448.limit)
  i1448.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[2], i1448.limitX)
  i1448.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[3], i1448.limitY)
  i1448.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[4], i1448.limitZ)
  i1448.dampen = i1449[5]
  i1448.separateAxes = !!i1449[6]
  i1448.space = i1449[7]
  i1448.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[8], i1448.drag)
  i1448.multiplyDragByParticleSize = !!i1449[9]
  i1448.multiplyDragByParticleVelocity = !!i1449[10]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1451 = data
  i1450.enabled = !!i1451[0]
  request.r(i1451[1], i1451[2], 0, i1450, 'sharedMaterial')
  var i1453 = i1451[3]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 2) {
  request.r(i1453[i + 0], i1453[i + 1], 2, i1452, '')
  }
  i1450.sharedMaterials = i1452
  i1450.receiveShadows = !!i1451[4]
  i1450.shadowCastingMode = i1451[5]
  i1450.sortingLayerID = i1451[6]
  i1450.sortingOrder = i1451[7]
  i1450.lightmapIndex = i1451[8]
  i1450.lightmapSceneIndex = i1451[9]
  i1450.lightmapScaleOffset = new pc.Vec4( i1451[10], i1451[11], i1451[12], i1451[13] )
  i1450.lightProbeUsage = i1451[14]
  i1450.reflectionProbeUsage = i1451[15]
  request.r(i1451[16], i1451[17], 0, i1450, 'mesh')
  i1450.meshCount = i1451[18]
  i1450.activeVertexStreamsCount = i1451[19]
  i1450.alignment = i1451[20]
  i1450.renderMode = i1451[21]
  i1450.sortMode = i1451[22]
  i1450.lengthScale = i1451[23]
  i1450.velocityScale = i1451[24]
  i1450.cameraVelocityScale = i1451[25]
  i1450.normalDirection = i1451[26]
  i1450.sortingFudge = i1451[27]
  i1450.minParticleSize = i1451[28]
  i1450.maxParticleSize = i1451[29]
  i1450.pivot = new pc.Vec3( i1451[30], i1451[31], i1451[32] )
  request.r(i1451[33], i1451[34], 0, i1450, 'trailMaterial')
  return i1450
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i1454 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i1455 = data
  i1454.OnlyDeactivate = !!i1455[0]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1457 = data
  request.r(i1457[0], i1457[1], 0, i1456, 'clip')
  request.r(i1457[2], i1457[3], 0, i1456, 'outputAudioMixerGroup')
  i1456.playOnAwake = !!i1457[4]
  i1456.loop = !!i1457[5]
  i1456.time = i1457[6]
  i1456.volume = i1457[7]
  i1456.pitch = i1457[8]
  i1456.enabled = !!i1457[9]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1459 = data
  i1458.mass = i1459[0]
  i1458.drag = i1459[1]
  i1458.angularDrag = i1459[2]
  i1458.useGravity = !!i1459[3]
  i1458.isKinematic = !!i1459[4]
  i1458.constraints = i1459[5]
  i1458.maxAngularVelocity = i1459[6]
  i1458.collisionDetectionMode = i1459[7]
  i1458.interpolation = i1459[8]
  return i1458
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i1460 = root || request.c( 'Howitzer.Projectile' )
  var i1461 = data
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1463 = data
  i1462.center = new pc.Vec3( i1463[0], i1463[1], i1463[2] )
  i1462.radius = i1463[3]
  i1462.height = i1463[4]
  i1462.direction = i1463[5]
  i1462.enabled = !!i1463[6]
  i1462.isTrigger = !!i1463[7]
  request.r(i1463[8], i1463[9], 0, i1462, 'material')
  return i1462
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i1464 = root || request.c( 'BehaviourAI.TankAI' )
  var i1465 = data
  i1464.stopDistance = i1465[0]
  i1464.rotationSpeed = i1465[1]
  i1464.moveSpeed = i1465[2]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1467 = data
  i1466.center = new pc.Vec3( i1467[0], i1467[1], i1467[2] )
  i1466.size = new pc.Vec3( i1467[3], i1467[4], i1467[5] )
  i1466.enabled = !!i1467[6]
  i1466.isTrigger = !!i1467[7]
  request.r(i1467[8], i1467[9], 0, i1466, 'material')
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
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
  i1468.color = new pc.Color(i1469[16], i1469[17], i1469[18], i1469[19])
  request.r(i1469[20], i1469[21], 0, i1468, 'sprite')
  i1468.flipX = !!i1469[22]
  i1468.flipY = !!i1469[23]
  i1468.drawMode = i1469[24]
  i1468.size = new pc.Vec2( i1469[25], i1469[26] )
  i1468.tileMode = i1469[27]
  i1468.adaptiveModeThreshold = i1469[28]
  i1468.maskInteraction = i1469[29]
  i1468.spriteSortPoint = i1469[30]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1473 = data
  i1472.name = i1473[0]
  i1472.atlasId = i1473[1]
  i1472.mipmapCount = i1473[2]
  i1472.hdr = !!i1473[3]
  i1472.size = i1473[4]
  i1472.anisoLevel = i1473[5]
  i1472.filterMode = i1473[6]
  var i1475 = i1473[7]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 4) {
    i1474.push( UnityEngine.Rect.MinMaxRect(i1475[i + 0], i1475[i + 1], i1475[i + 2], i1475[i + 3]) );
  }
  i1472.rects = i1474
  i1472.wrapU = i1473[8]
  i1472.wrapV = i1473[9]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1479 = data
  i1478.name = i1479[0]
  i1478.index = i1479[1]
  i1478.startup = !!i1479[2]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1481 = data
  i1480.enabled = !!i1481[0]
  i1480.aspect = i1481[1]
  i1480.orthographic = !!i1481[2]
  i1480.orthographicSize = i1481[3]
  i1480.backgroundColor = new pc.Color(i1481[4], i1481[5], i1481[6], i1481[7])
  i1480.nearClipPlane = i1481[8]
  i1480.farClipPlane = i1481[9]
  i1480.fieldOfView = i1481[10]
  i1480.depth = i1481[11]
  i1480.clearFlags = i1481[12]
  i1480.cullingMask = i1481[13]
  i1480.rect = i1481[14]
  request.r(i1481[15], i1481[16], 0, i1480, 'targetTexture')
  i1480.usePhysicalProperties = !!i1481[17]
  i1480.focalLength = i1481[18]
  i1480.sensorSize = new pc.Vec2( i1481[19], i1481[20] )
  i1480.lensShift = new pc.Vec2( i1481[21], i1481[22] )
  i1480.gateFit = i1481[23]
  i1480.commandBufferCount = i1481[24]
  i1480.cameraType = i1481[25]
  return i1480
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i1482 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i1483 = data
  request.r(i1483[0], i1483[1], 0, i1482, 'joystick')
  i1482.minYAngle = i1483[2]
  i1482.maxYAngle = i1483[3]
  i1482.rotationSpeed = i1483[4]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1485 = data
  i1484.enabled = !!i1485[0]
  i1484.type = i1485[1]
  i1484.color = new pc.Color(i1485[2], i1485[3], i1485[4], i1485[5])
  i1484.cullingMask = i1485[6]
  i1484.intensity = i1485[7]
  i1484.range = i1485[8]
  i1484.spotAngle = i1485[9]
  i1484.shadows = i1485[10]
  i1484.shadowNormalBias = i1485[11]
  i1484.shadowBias = i1485[12]
  i1484.shadowStrength = i1485[13]
  i1484.shadowResolution = i1485[14]
  i1484.lightmapBakeType = i1485[15]
  i1484.renderMode = i1485[16]
  request.r(i1485[17], i1485[18], 0, i1484, 'cookie')
  i1484.cookieSize = i1485[19]
  return i1484
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i1486 = root || request.c( 'Howitzer.LookAtReticle' )
  var i1487 = data
  request.r(i1487[0], i1487[1], 0, i1486, 'reticle')
  request.r(i1487[2], i1487[3], 0, i1486, 'mainCamera')
  i1486.rotationSpeed = i1487[4]
  i1486.maxPitchAngle = i1487[5]
  i1486.minPitchAngle = i1487[6]
  return i1486
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i1488 = root || request.c( 'FollowBullet' )
  var i1489 = data
  i1488._smoothSpeed = i1489[0]
  i1488._offset = new pc.Vec3( i1489[1], i1489[2], i1489[3] )
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1491 = data
  i1490.enabled = !!i1491[0]
  i1490.planeDistance = i1491[1]
  i1490.referencePixelsPerUnit = i1491[2]
  i1490.isFallbackOverlay = !!i1491[3]
  i1490.renderMode = i1491[4]
  i1490.renderOrder = i1491[5]
  i1490.sortingLayerName = i1491[6]
  i1490.sortingOrder = i1491[7]
  i1490.scaleFactor = i1491[8]
  request.r(i1491[9], i1491[10], 0, i1490, 'worldCamera')
  i1490.overrideSorting = !!i1491[11]
  i1490.pixelPerfect = !!i1491[12]
  i1490.targetDisplay = i1491[13]
  i1490.overridePixelPerfect = !!i1491[14]
  return i1490
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1493 = data
  i1492.m_UiScaleMode = i1493[0]
  i1492.m_ReferencePixelsPerUnit = i1493[1]
  i1492.m_ScaleFactor = i1493[2]
  i1492.m_ReferenceResolution = new pc.Vec2( i1493[3], i1493[4] )
  i1492.m_ScreenMatchMode = i1493[5]
  i1492.m_MatchWidthOrHeight = i1493[6]
  i1492.m_PhysicalUnit = i1493[7]
  i1492.m_FallbackScreenDPI = i1493[8]
  i1492.m_DefaultSpriteDPI = i1493[9]
  i1492.m_DynamicPixelsPerUnit = i1493[10]
  i1492.m_PresetInfoIsWorld = !!i1493[11]
  return i1492
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1495 = data
  i1494.m_IgnoreReversedGraphics = !!i1495[0]
  i1494.m_BlockingObjects = i1495[1]
  i1494.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1495[2] )
  return i1494
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i1496 = root || request.c( 'UI.PlayerUIController' )
  var i1497 = data
  request.r(i1497[0], i1497[1], 0, i1496, 'shootButton')
  request.r(i1497[2], i1497[3], 0, i1496, 'zoomButton')
  return i1496
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i1498 = root || request.c( 'Howitzer.PlayerZoom' )
  var i1499 = data
  request.r(i1499[0], i1499[1], 0, i1498, 'crosshair')
  request.r(i1499[2], i1499[3], 0, i1498, 'mainCamera')
  request.r(i1499[4], i1499[5], 0, i1498, 'zoomImage')
  var i1501 = i1499[6]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 2) {
  request.r(i1501[i + 0], i1501[i + 1], 2, i1500, '')
  }
  i1498.objectsToDisable = i1500
  i1498.zoomFOV = i1499[7]
  i1498.normalFOV = i1499[8]
  i1498.zoomSpeed = i1499[9]
  request.r(i1499[10], i1499[11], 0, i1498, 'joystick')
  i1498.rotationSpeed = i1499[12]
  return i1498
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i1504 = root || request.c( 'Howitzer.PlayerShooting' )
  var i1505 = data
  request.r(i1505[0], i1505[1], 0, i1504, 'playerShootingCooldown')
  request.r(i1505[2], i1505[3], 0, i1504, 'mainCamera')
  request.r(i1505[4], i1505[5], 0, i1504, 'crosshairUI')
  request.r(i1505[6], i1505[7], 0, i1504, 'muzzleFlash')
  request.r(i1505[8], i1505[9], 0, i1504, 'explosionEffect')
  request.r(i1505[10], i1505[11], 0, i1504, 'projectilePosition')
  request.r(i1505[12], i1505[13], 0, i1504, 'prefabProjectile')
  i1504.projectileSpeed = i1505[14]
  i1504.poolSize = i1505[15]
  request.r(i1505[16], i1505[17], 0, i1504, '_followBullet')
  request.r(i1505[18], i1505[19], 0, i1504, '_managerCamers')
  request.r(i1505[20], i1505[21], 0, i1504, '_timeController')
  return i1504
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i1506 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i1507 = data
  request.r(i1507[0], i1507[1], 0, i1506, 'shootButton')
  request.r(i1507[2], i1507[3], 0, i1506, 'cooldownText')
  request.r(i1507[4], i1507[5], 0, i1506, 'cooldownImage')
  i1506.cooldownTime = i1507[6]
  return i1506
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.UI.Button' )
  var i1509 = data
  i1508.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1509[0], i1508.m_OnClick)
  i1508.m_Navigation = request.d('UnityEngine.UI.Navigation', i1509[1], i1508.m_Navigation)
  i1508.m_Transition = i1509[2]
  i1508.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1509[3], i1508.m_Colors)
  i1508.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1509[4], i1508.m_SpriteState)
  i1508.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1509[5], i1508.m_AnimationTriggers)
  i1508.m_Interactable = !!i1509[6]
  request.r(i1509[7], i1509[8], 0, i1508, 'm_TargetGraphic')
  return i1508
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1511 = data
  i1510.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1511[0], i1510.m_PersistentCalls)
  return i1510
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1513 = data
  var i1515 = i1513[0]
  var i1514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.add(request.d('UnityEngine.Events.PersistentCall', i1515[i + 0]));
  }
  i1512.m_Calls = i1514
  return i1512
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'm_Target')
  i1518.m_TargetAssemblyTypeName = i1519[2]
  i1518.m_MethodName = i1519[3]
  i1518.m_Mode = i1519[4]
  i1518.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1519[5], i1518.m_Arguments)
  i1518.m_CallState = i1519[6]
  return i1518
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1521 = data
  i1520.m_Mode = i1521[0]
  i1520.m_WrapAround = !!i1521[1]
  request.r(i1521[2], i1521[3], 0, i1520, 'm_SelectOnUp')
  request.r(i1521[4], i1521[5], 0, i1520, 'm_SelectOnDown')
  request.r(i1521[6], i1521[7], 0, i1520, 'm_SelectOnLeft')
  request.r(i1521[8], i1521[9], 0, i1520, 'm_SelectOnRight')
  return i1520
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1523 = data
  i1522.m_NormalColor = new pc.Color(i1523[0], i1523[1], i1523[2], i1523[3])
  i1522.m_HighlightedColor = new pc.Color(i1523[4], i1523[5], i1523[6], i1523[7])
  i1522.m_PressedColor = new pc.Color(i1523[8], i1523[9], i1523[10], i1523[11])
  i1522.m_SelectedColor = new pc.Color(i1523[12], i1523[13], i1523[14], i1523[15])
  i1522.m_DisabledColor = new pc.Color(i1523[16], i1523[17], i1523[18], i1523[19])
  i1522.m_ColorMultiplier = i1523[20]
  i1522.m_FadeDuration = i1523[21]
  return i1522
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1525 = data
  request.r(i1525[0], i1525[1], 0, i1524, 'm_HighlightedSprite')
  request.r(i1525[2], i1525[3], 0, i1524, 'm_PressedSprite')
  request.r(i1525[4], i1525[5], 0, i1524, 'm_SelectedSprite')
  request.r(i1525[6], i1525[7], 0, i1524, 'm_DisabledSprite')
  return i1524
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1527 = data
  i1526.m_NormalTrigger = i1527[0]
  i1526.m_HighlightedTrigger = i1527[1]
  i1526.m_PressedTrigger = i1527[2]
  i1526.m_SelectedTrigger = i1527[3]
  i1526.m_DisabledTrigger = i1527[4]
  return i1526
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1528 = root || request.c( 'UnityEngine.UI.Text' )
  var i1529 = data
  i1528.m_FontData = request.d('UnityEngine.UI.FontData', i1529[0], i1528.m_FontData)
  i1528.m_Text = i1529[1]
  request.r(i1529[2], i1529[3], 0, i1528, 'm_Material')
  i1528.m_Maskable = !!i1529[4]
  i1528.m_Color = new pc.Color(i1529[5], i1529[6], i1529[7], i1529[8])
  i1528.m_RaycastTarget = !!i1529[9]
  i1528.m_RaycastPadding = new pc.Vec4( i1529[10], i1529[11], i1529[12], i1529[13] )
  return i1528
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1531 = data
  request.r(i1531[0], i1531[1], 0, i1530, 'm_Font')
  i1530.m_FontSize = i1531[2]
  i1530.m_FontStyle = i1531[3]
  i1530.m_BestFit = !!i1531[4]
  i1530.m_MinSize = i1531[5]
  i1530.m_MaxSize = i1531[6]
  i1530.m_Alignment = i1531[7]
  i1530.m_AlignByGeometry = !!i1531[8]
  i1530.m_RichText = !!i1531[9]
  i1530.m_HorizontalOverflow = i1531[10]
  i1530.m_VerticalOverflow = i1531[11]
  i1530.m_LineSpacing = i1531[12]
  return i1530
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i1532 = root || request.c( 'TutorialHand' )
  var i1533 = data
  request.r(i1533[0], i1533[1], 0, i1532, 'handImage')
  i1532.moveDistance = i1533[2]
  i1532.moveDuration = i1533[3]
  return i1532
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i1534 = root || request.c( 'UI.CrosshairMovement' )
  var i1535 = data
  request.r(i1535[0], i1535[1], 0, i1534, 'joystick')
  request.r(i1535[2], i1535[3], 0, i1534, 'crosshair')
  i1534.moveSpeed = i1535[4]
  request.r(i1535[5], i1535[6], 0, i1534, 'canvasRect')
  return i1534
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i1536 = root || request.c( 'UI.EndCardAnimation' )
  var i1537 = data
  request.r(i1537[0], i1537[1], 0, i1536, 'background')
  request.r(i1537[2], i1537[3], 0, i1536, 'title')
  request.r(i1537[4], i1537[5], 0, i1536, 'logoAndButton')
  request.r(i1537[6], i1537[7], 0, i1536, 'titleText')
  i1536.fadeDuration = i1537[8]
  i1536.scaleDuration = i1537[9]
  i1536.scaleEase = i1537[10]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1539 = data
  i1538.m_Alpha = i1539[0]
  i1538.m_Interactable = !!i1539[1]
  i1538.m_BlocksRaycasts = !!i1539[2]
  i1538.m_IgnoreParentGroups = !!i1539[3]
  i1538.enabled = !!i1539[4]
  return i1538
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1541 = data
  i1540.m_AspectMode = i1541[0]
  i1540.m_AspectRatio = i1541[1]
  return i1540
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i1542 = root || request.c( 'UI.ButtonPulse' )
  var i1543 = data
  i1542.scaleMultiplier = i1543[0]
  i1542.duration = i1543[1]
  return i1542
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1545 = data
  request.r(i1545[0], i1545[1], 0, i1544, 'm_FirstSelected')
  i1544.m_sendNavigationEvents = !!i1545[2]
  i1544.m_DragThreshold = i1545[3]
  return i1544
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1547 = data
  i1546.m_HorizontalAxis = i1547[0]
  i1546.m_VerticalAxis = i1547[1]
  i1546.m_SubmitButton = i1547[2]
  i1546.m_CancelButton = i1547[3]
  i1546.m_InputActionsPerSecond = i1547[4]
  i1546.m_RepeatDelay = i1547[5]
  i1546.m_ForceModuleActive = !!i1547[6]
  i1546.m_SendPointerHoverToParent = !!i1547[7]
  return i1546
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i1548 = root || request.c( 'Bootstraps.Bootstrap' )
  var i1549 = data
  request.r(i1549[0], i1549[1], 0, i1548, 'tanksFabric')
  request.r(i1549[2], i1549[3], 0, i1548, 'scenarioGame')
  return i1548
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i1550 = root || request.c( 'Fabric.TanksFabric' )
  var i1551 = data
  request.r(i1551[0], i1551[1], 0, i1550, 'tankPrefab')
  var i1553 = i1551[2]
  var i1552 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1553.length; i += 2) {
  request.r(i1553[i + 0], i1553[i + 1], 1, i1552, '')
  }
  i1550.spawnPoints = i1552
  var i1555 = i1551[3]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 2) {
  request.r(i1555[i + 0], i1555[i + 1], 2, i1554, '')
  }
  i1550.targets = i1554
  return i1550
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i1560 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i1561 = data
  request.r(i1561[0], i1561[1], 0, i1560, 'endCard')
  return i1560
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i1562 = root || request.c( 'UI.TankKillStatistics' )
  var i1563 = data
  return i1562
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i1564 = root || request.c( 'ManagerCamers' )
  var i1565 = data
  request.r(i1565[0], i1565[1], 0, i1564, '_plauerCamera')
  request.r(i1565[2], i1565[3], 0, i1564, '_bulletCamera')
  request.r(i1565[4], i1565[5], 0, i1564, '_timeController')
  request.r(i1565[6], i1565[7], 0, i1564, '_playerZoom')
  return i1564
}

Deserializers["TimeController"] = function (request, data, root) {
  var i1566 = root || request.c( 'TimeController' )
  var i1567 = data
  i1566.slowMotionScale = i1567[0]
  i1566.slowMotionDuration = i1567[1]
  i1566.restoreSpeedDuration = i1567[2]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1569 = data
  i1568.ambientIntensity = i1569[0]
  i1568.reflectionIntensity = i1569[1]
  i1568.ambientMode = i1569[2]
  i1568.ambientLight = new pc.Color(i1569[3], i1569[4], i1569[5], i1569[6])
  i1568.ambientSkyColor = new pc.Color(i1569[7], i1569[8], i1569[9], i1569[10])
  i1568.ambientGroundColor = new pc.Color(i1569[11], i1569[12], i1569[13], i1569[14])
  i1568.ambientEquatorColor = new pc.Color(i1569[15], i1569[16], i1569[17], i1569[18])
  i1568.fogColor = new pc.Color(i1569[19], i1569[20], i1569[21], i1569[22])
  i1568.fogEndDistance = i1569[23]
  i1568.fogStartDistance = i1569[24]
  i1568.fogDensity = i1569[25]
  i1568.fog = !!i1569[26]
  request.r(i1569[27], i1569[28], 0, i1568, 'skybox')
  i1568.fogMode = i1569[29]
  var i1571 = i1569[30]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1571[i + 0]) );
  }
  i1568.lightmaps = i1570
  i1568.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1569[31], i1568.lightProbes)
  i1568.lightmapsMode = i1569[32]
  i1568.mixedBakeMode = i1569[33]
  i1568.environmentLightingMode = i1569[34]
  i1568.ambientProbe = new pc.SphericalHarmonicsL2(i1569[35])
  i1568.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1569[36])
  i1568.useReferenceAmbientProbe = !!i1569[37]
  request.r(i1569[38], i1569[39], 0, i1568, 'customReflection')
  request.r(i1569[40], i1569[41], 0, i1568, 'defaultReflection')
  i1568.defaultReflectionMode = i1569[42]
  i1568.defaultReflectionResolution = i1569[43]
  i1568.sunLightObjectId = i1569[44]
  i1568.pixelLightCount = i1569[45]
  i1568.defaultReflectionHDR = !!i1569[46]
  i1568.hasLightDataAsset = !!i1569[47]
  i1568.hasManualGenerate = !!i1569[48]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1575 = data
  request.r(i1575[0], i1575[1], 0, i1574, 'lightmapColor')
  request.r(i1575[2], i1575[3], 0, i1574, 'lightmapDirection')
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1576 = root || new UnityEngine.LightProbes()
  var i1577 = data
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1585 = data
  var i1587 = i1585[0]
  var i1586 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1587[i + 0]));
  }
  i1584.ShaderCompilationErrors = i1586
  i1584.name = i1585[1]
  i1584.guid = i1585[2]
  var i1589 = i1585[3]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( i1589[i + 0] );
  }
  i1584.shaderDefinedKeywords = i1588
  var i1591 = i1585[4]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1591[i + 0]) );
  }
  i1584.passes = i1590
  var i1593 = i1585[5]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1593[i + 0]) );
  }
  i1584.usePasses = i1592
  var i1595 = i1585[6]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1595[i + 0]) );
  }
  i1584.defaultParameterValues = i1594
  request.r(i1585[7], i1585[8], 0, i1584, 'unityFallbackShader')
  i1584.readDepth = !!i1585[9]
  i1584.isCreatedByShaderGraph = !!i1585[10]
  i1584.compiled = !!i1585[11]
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1599 = data
  i1598.shaderName = i1599[0]
  i1598.errorMessage = i1599[1]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1604 = root || new pc.UnityShaderPass()
  var i1605 = data
  i1604.id = i1605[0]
  i1604.subShaderIndex = i1605[1]
  i1604.name = i1605[2]
  i1604.passType = i1605[3]
  i1604.grabPassTextureName = i1605[4]
  i1604.usePass = !!i1605[5]
  i1604.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[6], i1604.zTest)
  i1604.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[7], i1604.zWrite)
  i1604.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[8], i1604.culling)
  i1604.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1605[9], i1604.blending)
  i1604.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1605[10], i1604.alphaBlending)
  i1604.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[11], i1604.colorWriteMask)
  i1604.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[12], i1604.offsetUnits)
  i1604.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[13], i1604.offsetFactor)
  i1604.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[14], i1604.stencilRef)
  i1604.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[15], i1604.stencilReadMask)
  i1604.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1605[16], i1604.stencilWriteMask)
  i1604.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1605[17], i1604.stencilOp)
  i1604.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1605[18], i1604.stencilOpFront)
  i1604.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1605[19], i1604.stencilOpBack)
  var i1607 = i1605[20]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1607[i + 0]) );
  }
  i1604.tags = i1606
  var i1609 = i1605[21]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( i1609[i + 0] );
  }
  i1604.passDefinedKeywords = i1608
  var i1611 = i1605[22]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1611[i + 0]) );
  }
  i1604.passDefinedKeywordGroups = i1610
  var i1613 = i1605[23]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1613[i + 0]) );
  }
  i1604.variants = i1612
  var i1615 = i1605[24]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1615[i + 0]) );
  }
  i1604.excludedVariants = i1614
  i1604.hasDepthReader = !!i1605[25]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1617 = data
  i1616.val = i1617[0]
  i1616.name = i1617[1]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1619 = data
  i1618.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[0], i1618.src)
  i1618.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[1], i1618.dst)
  i1618.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1619[2], i1618.op)
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1621 = data
  i1620.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[0], i1620.pass)
  i1620.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[1], i1620.fail)
  i1620.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[2], i1620.zFail)
  i1620.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1621[3], i1620.comp)
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1625 = data
  i1624.name = i1625[0]
  i1624.value = i1625[1]
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1629 = data
  var i1631 = i1629[0]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.push( i1631[i + 0] );
  }
  i1628.keywords = i1630
  i1628.hasDiscard = !!i1629[1]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1635 = data
  i1634.passId = i1635[0]
  i1634.subShaderIndex = i1635[1]
  var i1637 = i1635[2]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( i1637[i + 0] );
  }
  i1634.keywords = i1636
  i1634.vertexProgram = i1635[3]
  i1634.fragmentProgram = i1635[4]
  i1634.exportedForWebGl2 = !!i1635[5]
  i1634.readDepth = !!i1635[6]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'shader')
  i1640.pass = i1641[2]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1645 = data
  i1644.name = i1645[0]
  i1644.type = i1645[1]
  i1644.value = new pc.Vec4( i1645[2], i1645[3], i1645[4], i1645[5] )
  i1644.textureValue = i1645[6]
  i1644.shaderPropertyFlag = i1645[7]
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1647 = data
  i1646.name = i1647[0]
  request.r(i1647[1], i1647[2], 0, i1646, 'texture')
  i1646.aabb = i1647[3]
  i1646.vertices = i1647[4]
  i1646.triangles = i1647[5]
  i1646.textureRect = UnityEngine.Rect.MinMaxRect(i1647[6], i1647[7], i1647[8], i1647[9])
  i1646.packedRect = UnityEngine.Rect.MinMaxRect(i1647[10], i1647[11], i1647[12], i1647[13])
  i1646.border = new pc.Vec4( i1647[14], i1647[15], i1647[16], i1647[17] )
  i1646.transparency = i1647[18]
  i1646.bounds = i1647[19]
  i1646.pixelsPerUnit = i1647[20]
  i1646.textureWidth = i1647[21]
  i1646.textureHeight = i1647[22]
  i1646.nativeSize = new pc.Vec2( i1647[23], i1647[24] )
  i1646.pivot = new pc.Vec2( i1647[25], i1647[26] )
  i1646.textureRectOffset = new pc.Vec2( i1647[27], i1647[28] )
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1649 = data
  i1648.name = i1649[0]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1651 = data
  i1650.name = i1651[0]
  i1650.ascent = i1651[1]
  i1650.originalLineHeight = i1651[2]
  i1650.fontSize = i1651[3]
  var i1653 = i1651[4]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1653[i + 0]) );
  }
  i1650.characterInfo = i1652
  request.r(i1651[5], i1651[6], 0, i1650, 'texture')
  i1650.originalFontSize = i1651[7]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1657 = data
  i1656.index = i1657[0]
  i1656.advance = i1657[1]
  i1656.bearing = i1657[2]
  i1656.glyphWidth = i1657[3]
  i1656.glyphHeight = i1657[4]
  i1656.minX = i1657[5]
  i1656.maxX = i1657[6]
  i1656.minY = i1657[7]
  i1656.maxY = i1657[8]
  i1656.uvBottomLeftX = i1657[9]
  i1656.uvBottomLeftY = i1657[10]
  i1656.uvBottomRightX = i1657[11]
  i1656.uvBottomRightY = i1657[12]
  i1656.uvTopLeftX = i1657[13]
  i1656.uvTopLeftY = i1657[14]
  i1656.uvTopRightX = i1657[15]
  i1656.uvTopRightY = i1657[16]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1659 = data
  var i1661 = i1659[0]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1661[i + 0]) );
  }
  i1658.files = i1660
  i1658.componentToPrefabIds = i1659[1]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1665 = data
  i1664.path = i1665[0]
  request.r(i1665[1], i1665[2], 0, i1664, 'unityObject')
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1667 = data
  var i1669 = i1667[0]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1669[i + 0]) );
  }
  i1666.scriptsExecutionOrder = i1668
  var i1671 = i1667[1]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1671[i + 0]) );
  }
  i1666.sortingLayers = i1670
  var i1673 = i1667[2]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1673[i + 0]) );
  }
  i1666.cullingLayers = i1672
  i1666.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1667[3], i1666.timeSettings)
  i1666.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1667[4], i1666.physicsSettings)
  i1666.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1667[5], i1666.physics2DSettings)
  i1666.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1667[6], i1666.qualitySettings)
  i1666.enableRealtimeShadows = !!i1667[7]
  i1666.enableAutoInstancing = !!i1667[8]
  i1666.enableDynamicBatching = !!i1667[9]
  i1666.lightmapEncodingQuality = i1667[10]
  i1666.desiredColorSpace = i1667[11]
  var i1675 = i1667[12]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( i1675[i + 0] );
  }
  i1666.allTags = i1674
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1679 = data
  i1678.name = i1679[0]
  i1678.value = i1679[1]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1683 = data
  i1682.id = i1683[0]
  i1682.name = i1683[1]
  i1682.value = i1683[2]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1687 = data
  i1686.id = i1687[0]
  i1686.name = i1687[1]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1689 = data
  i1688.fixedDeltaTime = i1689[0]
  i1688.maximumDeltaTime = i1689[1]
  i1688.timeScale = i1689[2]
  i1688.maximumParticleTimestep = i1689[3]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1691 = data
  i1690.gravity = new pc.Vec3( i1691[0], i1691[1], i1691[2] )
  i1690.defaultSolverIterations = i1691[3]
  i1690.bounceThreshold = i1691[4]
  i1690.autoSyncTransforms = !!i1691[5]
  i1690.autoSimulation = !!i1691[6]
  var i1693 = i1691[7]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1693[i + 0]) );
  }
  i1690.collisionMatrix = i1692
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1697 = data
  i1696.enabled = !!i1697[0]
  i1696.layerId = i1697[1]
  i1696.otherLayerId = i1697[2]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1699 = data
  request.r(i1699[0], i1699[1], 0, i1698, 'material')
  i1698.gravity = new pc.Vec2( i1699[2], i1699[3] )
  i1698.positionIterations = i1699[4]
  i1698.velocityIterations = i1699[5]
  i1698.velocityThreshold = i1699[6]
  i1698.maxLinearCorrection = i1699[7]
  i1698.maxAngularCorrection = i1699[8]
  i1698.maxTranslationSpeed = i1699[9]
  i1698.maxRotationSpeed = i1699[10]
  i1698.baumgarteScale = i1699[11]
  i1698.baumgarteTOIScale = i1699[12]
  i1698.timeToSleep = i1699[13]
  i1698.linearSleepTolerance = i1699[14]
  i1698.angularSleepTolerance = i1699[15]
  i1698.defaultContactOffset = i1699[16]
  i1698.autoSimulation = !!i1699[17]
  i1698.queriesHitTriggers = !!i1699[18]
  i1698.queriesStartInColliders = !!i1699[19]
  i1698.callbacksOnDisable = !!i1699[20]
  i1698.reuseCollisionCallbacks = !!i1699[21]
  i1698.autoSyncTransforms = !!i1699[22]
  var i1701 = i1699[23]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1701[i + 0]) );
  }
  i1698.collisionMatrix = i1700
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1705 = data
  i1704.enabled = !!i1705[0]
  i1704.layerId = i1705[1]
  i1704.otherLayerId = i1705[2]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1707 = data
  var i1709 = i1707[0]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1709[i + 0]) );
  }
  i1706.qualityLevels = i1708
  var i1711 = i1707[1]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( i1711[i + 0] );
  }
  i1706.names = i1710
  i1706.shadows = i1707[2]
  i1706.anisotropicFiltering = i1707[3]
  i1706.antiAliasing = i1707[4]
  i1706.lodBias = i1707[5]
  i1706.shadowCascades = i1707[6]
  i1706.shadowDistance = i1707[7]
  i1706.shadowmaskMode = i1707[8]
  i1706.shadowProjection = i1707[9]
  i1706.shadowResolution = i1707[10]
  i1706.softParticles = !!i1707[11]
  i1706.softVegetation = !!i1707[12]
  i1706.activeColorSpace = i1707[13]
  i1706.desiredColorSpace = i1707[14]
  i1706.masterTextureLimit = i1707[15]
  i1706.maxQueuedFrames = i1707[16]
  i1706.particleRaycastBudget = i1707[17]
  i1706.pixelLightCount = i1707[18]
  i1706.realtimeReflectionProbes = !!i1707[19]
  i1706.shadowCascade2Split = i1707[20]
  i1706.shadowCascade4Split = new pc.Vec3( i1707[21], i1707[22], i1707[23] )
  i1706.streamingMipmapsActive = !!i1707[24]
  i1706.vSyncCount = i1707[25]
  i1706.asyncUploadBufferSize = i1707[26]
  i1706.asyncUploadTimeSlice = i1707[27]
  i1706.billboardsFaceCameraPosition = !!i1707[28]
  i1706.shadowNearPlaneOffset = i1707[29]
  i1706.streamingMipmapsMemoryBudget = i1707[30]
  i1706.maximumLODLevel = i1707[31]
  i1706.streamingMipmapsAddAllCameras = !!i1707[32]
  i1706.streamingMipmapsMaxLevelReduction = i1707[33]
  i1706.streamingMipmapsRenderersPerFrame = i1707[34]
  i1706.resolutionScalingFixedDPIFactor = i1707[35]
  i1706.streamingMipmapsMaxFileIORequests = i1707[36]
  i1706.currentQualityLevel = i1707[37]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1717 = data
  i1716.weight = i1717[0]
  i1716.vertices = i1717[1]
  i1716.normals = i1717[2]
  i1716.tangents = i1717[3]
  return i1716
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1718 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, 'm_ObjectArgument')
  i1718.m_ObjectArgumentAssemblyTypeName = i1719[2]
  i1718.m_IntArgument = i1719[3]
  i1718.m_FloatArgument = i1719[4]
  i1718.m_StringArgument = i1719[5]
  i1718.m_BoolArgument = !!i1719[6]
  return i1718
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[66],"67":[27],"68":[19],"69":[19],"70":[19],"71":[19],"72":[19],"73":[19],"74":[19],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[76],"84":[76],"85":[76],"86":[76],"87":[76],"88":[76],"89":[27],"90":[10],"91":[92],"93":[92],"33":[0],"94":[13],"15":[13],"95":[30],"96":[8],"97":[30],"98":[0],"99":[27],"100":[27],"101":[30],"102":[27],"103":[104],"105":[0],"106":[0],"35":[33],"3":[1,0],"50":[0],"34":[33],"107":[0],"108":[0],"109":[0],"110":[0],"111":[0],"112":[0],"113":[0],"114":[0],"115":[0],"116":[1,0],"117":[0],"118":[0],"119":[0],"120":[0],"44":[1,0],"121":[0],"122":[52],"123":[52],"53":[52],"124":[52],"125":[27],"126":[27],"127":[104],"128":[104],"129":[27],"130":[131]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","VariableJoystick","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CFX_AutoDestructShuriken","UnityEngine.Texture2D","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Rigidbody","Howitzer.Projectile","UnityEngine.CapsuleCollider","BehaviourAI.TankAI","UnityEngine.BoxCollider","UnityEngine.LODGroup","UnityEngine.SpriteRenderer","UnityEngine.Cubemap","UnityEngine.Camera","UnityEngine.AudioListener","Howitzer.LookAtCrosshair","UnityEngine.Light","Howitzer.LookAtReticle","FollowBullet","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UI.PlayerUIController","UnityEngine.UI.Button","Howitzer.PlayerZoom","UnityEngine.GameObject","Howitzer.PlayerShooting","Howitzer.PlayerShootingCooldown","ManagerCamers","TimeController","UnityEngine.UI.Text","UnityEngine.Font","TutorialHand","UI.CrosshairMovement","UI.EndCardAnimation","UnityEngine.CanvasGroup","UnityEngine.UI.AspectRatioFitter","UI.ButtonPulse","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Bootstraps.Bootstrap","Fabric.TanksFabric","Bootstraps.ScenarioGame","UI.TankKillStatistics","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CFX_AutoStopLoopedEffect","CFX_LightIntensityFade","WFX_BulletHoleDecal","WFX_LightFlicker","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/12/2025 18:23:14";

Deserializers.lunaDaysRunning = "3.8";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3619";

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

Deserializers.buildID = "0859dfdc-a49d-4c22-8b80-4454378292be";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

