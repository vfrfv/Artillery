var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.JointSpring' )
  var i265 = data
  i264.spring = i265[0]
  i264.damper = i265[1]
  i264.targetPosition = i265[2]
  return i264
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.JointMotor' )
  var i267 = data
  i266.m_TargetVelocity = i267[0]
  i266.m_Force = i267[1]
  i266.m_FreeSpin = i267[2]
  return i266
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.JointLimits' )
  var i269 = data
  i268.m_Min = i269[0]
  i268.m_Max = i269[1]
  i268.m_Bounciness = i269[2]
  i268.m_BounceMinVelocity = i269[3]
  i268.m_ContactDistance = i269[4]
  i268.minBounce = i269[5]
  i268.maxBounce = i269[6]
  return i268
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.JointDrive' )
  var i271 = data
  i270.m_PositionSpring = i271[0]
  i270.m_PositionDamper = i271[1]
  i270.m_MaximumForce = i271[2]
  i270.m_UseAcceleration = i271[3]
  return i270
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i272 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i273 = data
  i272.m_Spring = i273[0]
  i272.m_Damper = i273[1]
  return i272
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i275 = data
  i274.m_Limit = i275[0]
  i274.m_Bounciness = i275[1]
  i274.m_ContactDistance = i275[2]
  return i274
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i277 = data
  i276.m_ExtremumSlip = i277[0]
  i276.m_ExtremumValue = i277[1]
  i276.m_AsymptoteSlip = i277[2]
  i276.m_AsymptoteValue = i277[3]
  i276.m_Stiffness = i277[4]
  return i276
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i279 = data
  i278.m_LowerAngle = i279[0]
  i278.m_UpperAngle = i279[1]
  return i278
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i281 = data
  i280.m_MotorSpeed = i281[0]
  i280.m_MaximumMotorTorque = i281[1]
  return i280
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i283 = data
  i282.m_DampingRatio = i283[0]
  i282.m_Frequency = i283[1]
  i282.m_Angle = i283[2]
  return i282
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i285 = data
  i284.m_LowerTranslation = i285[0]
  i284.m_UpperTranslation = i285[1]
  return i284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i287 = data
  i286.position = new pc.Vec3( i287[0], i287[1], i287[2] )
  i286.scale = new pc.Vec3( i287[3], i287[4], i287[5] )
  i286.rotation = new pc.Quat(i287[6], i287[7], i287[8], i287[9])
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i289 = data
  request.r(i289[0], i289[1], 0, i288, 'sharedMesh')
  return i288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i291 = data
  request.r(i291[0], i291[1], 0, i290, 'additionalVertexStreams')
  i290.enabled = !!i291[2]
  request.r(i291[3], i291[4], 0, i290, 'sharedMaterial')
  var i293 = i291[5]
  var i292 = []
  for(var i = 0; i < i293.length; i += 2) {
  request.r(i293[i + 0], i293[i + 1], 2, i292, '')
  }
  i290.sharedMaterials = i292
  i290.receiveShadows = !!i291[6]
  i290.shadowCastingMode = i291[7]
  i290.sortingLayerID = i291[8]
  i290.sortingOrder = i291[9]
  i290.lightmapIndex = i291[10]
  i290.lightmapSceneIndex = i291[11]
  i290.lightmapScaleOffset = new pc.Vec4( i291[12], i291[13], i291[14], i291[15] )
  i290.lightProbeUsage = i291[16]
  i290.reflectionProbeUsage = i291[17]
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i297 = data
  i296.name = i297[0]
  i296.tagId = i297[1]
  i296.enabled = !!i297[2]
  i296.isStatic = !!i297[3]
  i296.layer = i297[4]
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i299 = data
  i298.name = i299[0]
  i298.halfPrecision = !!i299[1]
  i298.useUInt32IndexFormat = !!i299[2]
  i298.vertexCount = i299[3]
  i298.aabb = i299[4]
  var i301 = i299[5]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( !!i301[i + 0] );
  }
  i298.streams = i300
  i298.vertices = i299[6]
  var i303 = i299[7]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i303[i + 0]) );
  }
  i298.subMeshes = i302
  var i305 = i299[8]
  var i304 = []
  for(var i = 0; i < i305.length; i += 16) {
    i304.push( new pc.Mat4().setData(i305[i + 0], i305[i + 1], i305[i + 2], i305[i + 3],  i305[i + 4], i305[i + 5], i305[i + 6], i305[i + 7],  i305[i + 8], i305[i + 9], i305[i + 10], i305[i + 11],  i305[i + 12], i305[i + 13], i305[i + 14], i305[i + 15]) );
  }
  i298.bindposes = i304
  var i307 = i299[9]
  var i306 = []
  for(var i = 0; i < i307.length; i += 1) {
    i306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i307[i + 0]) );
  }
  i298.blendShapes = i306
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i313 = data
  i312.triangles = i313[0]
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i319 = data
  i318.name = i319[0]
  var i321 = i319[1]
  var i320 = []
  for(var i = 0; i < i321.length; i += 1) {
    i320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i321[i + 0]) );
  }
  i318.frames = i320
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i322 = root || new pc.UnityMaterial()
  var i323 = data
  i322.name = i323[0]
  request.r(i323[1], i323[2], 0, i322, 'shader')
  i322.renderQueue = i323[3]
  i322.enableInstancing = !!i323[4]
  var i325 = i323[5]
  var i324 = []
  for(var i = 0; i < i325.length; i += 1) {
    i324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i325[i + 0]) );
  }
  i322.floatParameters = i324
  var i327 = i323[6]
  var i326 = []
  for(var i = 0; i < i327.length; i += 1) {
    i326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i327[i + 0]) );
  }
  i322.colorParameters = i326
  var i329 = i323[7]
  var i328 = []
  for(var i = 0; i < i329.length; i += 1) {
    i328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i329[i + 0]) );
  }
  i322.vectorParameters = i328
  var i331 = i323[8]
  var i330 = []
  for(var i = 0; i < i331.length; i += 1) {
    i330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i331[i + 0]) );
  }
  i322.textureParameters = i330
  var i333 = i323[9]
  var i332 = []
  for(var i = 0; i < i333.length; i += 1) {
    i332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i333[i + 0]) );
  }
  i322.materialFlags = i332
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i337 = data
  i336.name = i337[0]
  i336.value = i337[1]
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i341 = data
  i340.name = i341[0]
  i340.value = new pc.Color(i341[1], i341[2], i341[3], i341[4])
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i345 = data
  i344.name = i345[0]
  i344.value = new pc.Vec4( i345[1], i345[2], i345[3], i345[4] )
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i349 = data
  i348.name = i349[0]
  request.r(i349[1], i349[2], 0, i348, 'value')
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i353 = data
  i352.name = i353[0]
  i352.enabled = !!i353[1]
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i355 = data
  i354.name = i355[0]
  i354.width = i355[1]
  i354.height = i355[2]
  i354.mipmapCount = i355[3]
  i354.anisoLevel = i355[4]
  i354.filterMode = i355[5]
  i354.hdr = !!i355[6]
  i354.format = i355[7]
  i354.wrapMode = i355[8]
  i354.alphaIsTransparency = !!i355[9]
  i354.alphaSource = i355[10]
  i354.graphicsFormat = i355[11]
  i354.sRGBTexture = !!i355[12]
  i354.desiredColorSpace = i355[13]
  i354.wrapU = i355[14]
  i354.wrapV = i355[15]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i357 = data
  request.r(i357[0], i357[1], 0, i356, 'animatorController')
  request.r(i357[2], i357[3], 0, i356, 'avatar')
  i356.updateMode = i357[4]
  i356.hasTransformHierarchy = !!i357[5]
  i356.applyRootMotion = !!i357[6]
  var i359 = i357[7]
  var i358 = []
  for(var i = 0; i < i359.length; i += 2) {
  request.r(i359[i + 0], i359[i + 1], 2, i358, '')
  }
  i356.humanBones = i358
  i356.enabled = !!i357[8]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i363 = data
  i362.center = new pc.Vec3( i363[0], i363[1], i363[2] )
  i362.size = new pc.Vec3( i363[3], i363[4], i363[5] )
  i362.enabled = !!i363[6]
  i362.isTrigger = !!i363[7]
  request.r(i363[8], i363[9], 0, i362, 'material')
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i365 = data
  i364.center = new pc.Vec3( i365[0], i365[1], i365[2] )
  i364.radius = i365[3]
  i364.height = i365[4]
  i364.direction = i365[5]
  i364.enabled = !!i365[6]
  i364.isTrigger = !!i365[7]
  request.r(i365[8], i365[9], 0, i364, 'material')
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i367 = data
  i366.name = i367[0]
  i366.atlasId = i367[1]
  i366.mipmapCount = i367[2]
  i366.hdr = !!i367[3]
  i366.size = i367[4]
  i366.anisoLevel = i367[5]
  i366.filterMode = i367[6]
  var i369 = i367[7]
  var i368 = []
  for(var i = 0; i < i369.length; i += 4) {
    i368.push( UnityEngine.Rect.MinMaxRect(i369[i + 0], i369[i + 1], i369[i + 2], i369[i + 3]) );
  }
  i366.rects = i368
  i366.wrapU = i367[8]
  i366.wrapV = i367[9]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i373 = data
  i372.name = i373[0]
  i372.index = i373[1]
  i372.startup = !!i373[2]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i375 = data
  i374.enabled = !!i375[0]
  i374.aspect = i375[1]
  i374.orthographic = !!i375[2]
  i374.orthographicSize = i375[3]
  i374.backgroundColor = new pc.Color(i375[4], i375[5], i375[6], i375[7])
  i374.nearClipPlane = i375[8]
  i374.farClipPlane = i375[9]
  i374.fieldOfView = i375[10]
  i374.depth = i375[11]
  i374.clearFlags = i375[12]
  i374.cullingMask = i375[13]
  i374.rect = i375[14]
  request.r(i375[15], i375[16], 0, i374, 'targetTexture')
  i374.usePhysicalProperties = !!i375[17]
  i374.focalLength = i375[18]
  i374.sensorSize = new pc.Vec2( i375[19], i375[20] )
  i374.lensShift = new pc.Vec2( i375[21], i375[22] )
  i374.gateFit = i375[23]
  i374.commandBufferCount = i375[24]
  i374.cameraType = i375[25]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i377 = data
  i376.enabled = !!i377[0]
  i376.type = i377[1]
  i376.color = new pc.Color(i377[2], i377[3], i377[4], i377[5])
  i376.cullingMask = i377[6]
  i376.intensity = i377[7]
  i376.range = i377[8]
  i376.spotAngle = i377[9]
  i376.shadows = i377[10]
  i376.shadowNormalBias = i377[11]
  i376.shadowBias = i377[12]
  i376.shadowStrength = i377[13]
  i376.shadowResolution = i377[14]
  i376.lightmapBakeType = i377[15]
  i376.renderMode = i377[16]
  request.r(i377[17], i377[18], 0, i376, 'cookie')
  i376.cookieSize = i377[19]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i379 = data
  i378.ambientIntensity = i379[0]
  i378.reflectionIntensity = i379[1]
  i378.ambientMode = i379[2]
  i378.ambientLight = new pc.Color(i379[3], i379[4], i379[5], i379[6])
  i378.ambientSkyColor = new pc.Color(i379[7], i379[8], i379[9], i379[10])
  i378.ambientGroundColor = new pc.Color(i379[11], i379[12], i379[13], i379[14])
  i378.ambientEquatorColor = new pc.Color(i379[15], i379[16], i379[17], i379[18])
  i378.fogColor = new pc.Color(i379[19], i379[20], i379[21], i379[22])
  i378.fogEndDistance = i379[23]
  i378.fogStartDistance = i379[24]
  i378.fogDensity = i379[25]
  i378.fog = !!i379[26]
  request.r(i379[27], i379[28], 0, i378, 'skybox')
  i378.fogMode = i379[29]
  var i381 = i379[30]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i381[i + 0]) );
  }
  i378.lightmaps = i380
  i378.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i379[31], i378.lightProbes)
  i378.lightmapsMode = i379[32]
  i378.mixedBakeMode = i379[33]
  i378.environmentLightingMode = i379[34]
  i378.ambientProbe = new pc.SphericalHarmonicsL2(i379[35])
  i378.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i379[36])
  i378.useReferenceAmbientProbe = !!i379[37]
  request.r(i379[38], i379[39], 0, i378, 'customReflection')
  request.r(i379[40], i379[41], 0, i378, 'defaultReflection')
  i378.defaultReflectionMode = i379[42]
  i378.defaultReflectionResolution = i379[43]
  i378.sunLightObjectId = i379[44]
  i378.pixelLightCount = i379[45]
  i378.defaultReflectionHDR = !!i379[46]
  i378.hasLightDataAsset = !!i379[47]
  i378.hasManualGenerate = !!i379[48]
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i385 = data
  request.r(i385[0], i385[1], 0, i384, 'lightmapColor')
  request.r(i385[2], i385[3], 0, i384, 'lightmapDirection')
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i386 = root || new UnityEngine.LightProbes()
  var i387 = data
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i395 = data
  var i397 = i395[0]
  var i396 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i397.length; i += 1) {
    i396.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i397[i + 0]));
  }
  i394.ShaderCompilationErrors = i396
  i394.name = i395[1]
  i394.guid = i395[2]
  var i399 = i395[3]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( i399[i + 0] );
  }
  i394.shaderDefinedKeywords = i398
  var i401 = i395[4]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i401[i + 0]) );
  }
  i394.passes = i400
  var i403 = i395[5]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i403[i + 0]) );
  }
  i394.usePasses = i402
  var i405 = i395[6]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i405[i + 0]) );
  }
  i394.defaultParameterValues = i404
  request.r(i395[7], i395[8], 0, i394, 'unityFallbackShader')
  i394.readDepth = !!i395[9]
  i394.isCreatedByShaderGraph = !!i395[10]
  i394.compiled = !!i395[11]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i409 = data
  i408.shaderName = i409[0]
  i408.errorMessage = i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i414 = root || new pc.UnityShaderPass()
  var i415 = data
  i414.id = i415[0]
  i414.subShaderIndex = i415[1]
  i414.name = i415[2]
  i414.passType = i415[3]
  i414.grabPassTextureName = i415[4]
  i414.usePass = !!i415[5]
  i414.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[6], i414.zTest)
  i414.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[7], i414.zWrite)
  i414.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[8], i414.culling)
  i414.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i415[9], i414.blending)
  i414.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i415[10], i414.alphaBlending)
  i414.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[11], i414.colorWriteMask)
  i414.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[12], i414.offsetUnits)
  i414.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[13], i414.offsetFactor)
  i414.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[14], i414.stencilRef)
  i414.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[15], i414.stencilReadMask)
  i414.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i415[16], i414.stencilWriteMask)
  i414.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i415[17], i414.stencilOp)
  i414.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i415[18], i414.stencilOpFront)
  i414.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i415[19], i414.stencilOpBack)
  var i417 = i415[20]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i417[i + 0]) );
  }
  i414.tags = i416
  var i419 = i415[21]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( i419[i + 0] );
  }
  i414.passDefinedKeywords = i418
  var i421 = i415[22]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i421[i + 0]) );
  }
  i414.passDefinedKeywordGroups = i420
  var i423 = i415[23]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i423[i + 0]) );
  }
  i414.variants = i422
  var i425 = i415[24]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i425[i + 0]) );
  }
  i414.excludedVariants = i424
  i414.hasDepthReader = !!i415[25]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i427 = data
  i426.val = i427[0]
  i426.name = i427[1]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i429 = data
  i428.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i429[0], i428.src)
  i428.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i429[1], i428.dst)
  i428.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i429[2], i428.op)
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i431 = data
  i430.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[0], i430.pass)
  i430.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[1], i430.fail)
  i430.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[2], i430.zFail)
  i430.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i431[3], i430.comp)
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i435 = data
  i434.name = i435[0]
  i434.value = i435[1]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i439 = data
  var i441 = i439[0]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( i441[i + 0] );
  }
  i438.keywords = i440
  i438.hasDiscard = !!i439[1]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i445 = data
  i444.passId = i445[0]
  i444.subShaderIndex = i445[1]
  var i447 = i445[2]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( i447[i + 0] );
  }
  i444.keywords = i446
  i444.vertexProgram = i445[3]
  i444.fragmentProgram = i445[4]
  i444.exportedForWebGl2 = !!i445[5]
  i444.readDepth = !!i445[6]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i451 = data
  request.r(i451[0], i451[1], 0, i450, 'shader')
  i450.pass = i451[2]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i455 = data
  i454.name = i455[0]
  i454.type = i455[1]
  i454.value = new pc.Vec4( i455[2], i455[3], i455[4], i455[5] )
  i454.textureValue = i455[6]
  i454.shaderPropertyFlag = i455[7]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i457 = data
  var i459 = i457[0]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i459[i + 0]) );
  }
  i456.files = i458
  i456.componentToPrefabIds = i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i463 = data
  i462.path = i463[0]
  request.r(i463[1], i463[2], 0, i462, 'unityObject')
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i465 = data
  var i467 = i465[0]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i467[i + 0]) );
  }
  i464.scriptsExecutionOrder = i466
  var i469 = i465[1]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i469[i + 0]) );
  }
  i464.sortingLayers = i468
  var i471 = i465[2]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i471[i + 0]) );
  }
  i464.cullingLayers = i470
  i464.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i465[3], i464.timeSettings)
  i464.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i465[4], i464.physicsSettings)
  i464.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i465[5], i464.physics2DSettings)
  i464.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i465[6], i464.qualitySettings)
  i464.enableRealtimeShadows = !!i465[7]
  i464.enableAutoInstancing = !!i465[8]
  i464.enableDynamicBatching = !!i465[9]
  i464.lightmapEncodingQuality = i465[10]
  i464.desiredColorSpace = i465[11]
  var i473 = i465[12]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( i473[i + 0] );
  }
  i464.allTags = i472
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i477 = data
  i476.name = i477[0]
  i476.value = i477[1]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i481 = data
  i480.id = i481[0]
  i480.name = i481[1]
  i480.value = i481[2]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i485 = data
  i484.id = i485[0]
  i484.name = i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i487 = data
  i486.fixedDeltaTime = i487[0]
  i486.maximumDeltaTime = i487[1]
  i486.timeScale = i487[2]
  i486.maximumParticleTimestep = i487[3]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i489 = data
  i488.gravity = new pc.Vec3( i489[0], i489[1], i489[2] )
  i488.defaultSolverIterations = i489[3]
  i488.bounceThreshold = i489[4]
  i488.autoSyncTransforms = !!i489[5]
  i488.autoSimulation = !!i489[6]
  var i491 = i489[7]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i491[i + 0]) );
  }
  i488.collisionMatrix = i490
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i495 = data
  i494.enabled = !!i495[0]
  i494.layerId = i495[1]
  i494.otherLayerId = i495[2]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i497 = data
  request.r(i497[0], i497[1], 0, i496, 'material')
  i496.gravity = new pc.Vec2( i497[2], i497[3] )
  i496.positionIterations = i497[4]
  i496.velocityIterations = i497[5]
  i496.velocityThreshold = i497[6]
  i496.maxLinearCorrection = i497[7]
  i496.maxAngularCorrection = i497[8]
  i496.maxTranslationSpeed = i497[9]
  i496.maxRotationSpeed = i497[10]
  i496.baumgarteScale = i497[11]
  i496.baumgarteTOIScale = i497[12]
  i496.timeToSleep = i497[13]
  i496.linearSleepTolerance = i497[14]
  i496.angularSleepTolerance = i497[15]
  i496.defaultContactOffset = i497[16]
  i496.autoSimulation = !!i497[17]
  i496.queriesHitTriggers = !!i497[18]
  i496.queriesStartInColliders = !!i497[19]
  i496.callbacksOnDisable = !!i497[20]
  i496.reuseCollisionCallbacks = !!i497[21]
  i496.autoSyncTransforms = !!i497[22]
  var i499 = i497[23]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i499[i + 0]) );
  }
  i496.collisionMatrix = i498
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i503 = data
  i502.enabled = !!i503[0]
  i502.layerId = i503[1]
  i502.otherLayerId = i503[2]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i505 = data
  var i507 = i505[0]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i507[i + 0]) );
  }
  i504.qualityLevels = i506
  var i509 = i505[1]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( i509[i + 0] );
  }
  i504.names = i508
  i504.shadows = i505[2]
  i504.anisotropicFiltering = i505[3]
  i504.antiAliasing = i505[4]
  i504.lodBias = i505[5]
  i504.shadowCascades = i505[6]
  i504.shadowDistance = i505[7]
  i504.shadowmaskMode = i505[8]
  i504.shadowProjection = i505[9]
  i504.shadowResolution = i505[10]
  i504.softParticles = !!i505[11]
  i504.softVegetation = !!i505[12]
  i504.activeColorSpace = i505[13]
  i504.desiredColorSpace = i505[14]
  i504.masterTextureLimit = i505[15]
  i504.maxQueuedFrames = i505[16]
  i504.particleRaycastBudget = i505[17]
  i504.pixelLightCount = i505[18]
  i504.realtimeReflectionProbes = !!i505[19]
  i504.shadowCascade2Split = i505[20]
  i504.shadowCascade4Split = new pc.Vec3( i505[21], i505[22], i505[23] )
  i504.streamingMipmapsActive = !!i505[24]
  i504.vSyncCount = i505[25]
  i504.asyncUploadBufferSize = i505[26]
  i504.asyncUploadTimeSlice = i505[27]
  i504.billboardsFaceCameraPosition = !!i505[28]
  i504.shadowNearPlaneOffset = i505[29]
  i504.streamingMipmapsMemoryBudget = i505[30]
  i504.maximumLODLevel = i505[31]
  i504.streamingMipmapsAddAllCameras = !!i505[32]
  i504.streamingMipmapsMaxLevelReduction = i505[33]
  i504.streamingMipmapsRenderersPerFrame = i505[34]
  i504.resolutionScalingFixedDPIFactor = i505[35]
  i504.streamingMipmapsMaxFileIORequests = i505[36]
  i504.currentQualityLevel = i505[37]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i513 = data
  i512.name = i513[0]
  var i515 = i513[1]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i515[i + 0]) );
  }
  i512.tos = i514
  var i517 = i513[2]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( i517[i + 0] );
  }
  i512.constant = i516
  i512.isValid = !!i513[3]
  i512.isHuman = !!i513[4]
  i512.hasRootMotion = !!i513[5]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i521 = data
  i520.hash = i521[0]
  i520.path = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i527 = data
  i526.weight = i527[0]
  i526.vertices = i527[1]
  i526.normals = i527[2]
  i526.tangents = i527[3]
  return i526
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"15":[16],"17":[16],"18":[16],"19":[16],"20":[16],"21":[16],"22":[23],"24":[11],"25":[26],"27":[26],"28":[26],"29":[26],"30":[26],"31":[26],"32":[26],"33":[34],"35":[34],"36":[34],"37":[34],"38":[34],"39":[34],"40":[34],"41":[34],"42":[34],"43":[34],"44":[34],"45":[34],"46":[34],"47":[11],"48":[3],"49":[50],"51":[50],"52":[53],"54":[55],"56":[53],"57":[11],"58":[11],"59":[13],"60":[11],"61":[62],"63":[53],"64":[53],"65":[52],"66":[67,53],"68":[53],"69":[52],"70":[53],"71":[53],"72":[53],"73":[53],"74":[53],"75":[53],"76":[53],"77":[53],"78":[53],"79":[67,53],"80":[53],"81":[53],"82":[53],"83":[53],"84":[67,53],"85":[53],"86":[87],"88":[87],"89":[87],"90":[87],"91":[11],"92":[11],"93":[62],"94":[53],"95":[3,53],"96":[53,67],"97":[53],"98":[67,53],"99":[3],"100":[67,53],"101":[53],"102":[62]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.BoxCollider","UnityEngine.CapsuleCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","SimpleCharacterMotor","UnityEngine.CharacterController","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "vfrfv";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "6c12a4f49c2e1c74dbc0beaf340cbc67";

Deserializers.packagesInfo = "com.unity.postprocessing: 3.2.2\ncom.unity.render-pipelines.core: 14.0.8\ncom.unity.render-pipelines.universal: 14.0.8\ncom.unity.shadergraph: 14.0.8\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.5\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1862";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2562";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

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

Deserializers.buildID = "91212c63-e61c-486c-b7d0-f0273994a09e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

