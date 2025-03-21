var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3250 = root || request.c( 'UnityEngine.JointSpring' )
  var i3251 = data
  i3250.spring = i3251[0]
  i3250.damper = i3251[1]
  i3250.targetPosition = i3251[2]
  return i3250
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3252 = root || request.c( 'UnityEngine.JointMotor' )
  var i3253 = data
  i3252.m_TargetVelocity = i3253[0]
  i3252.m_Force = i3253[1]
  i3252.m_FreeSpin = i3253[2]
  return i3252
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3254 = root || request.c( 'UnityEngine.JointLimits' )
  var i3255 = data
  i3254.m_Min = i3255[0]
  i3254.m_Max = i3255[1]
  i3254.m_Bounciness = i3255[2]
  i3254.m_BounceMinVelocity = i3255[3]
  i3254.m_ContactDistance = i3255[4]
  i3254.minBounce = i3255[5]
  i3254.maxBounce = i3255[6]
  return i3254
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3256 = root || request.c( 'UnityEngine.JointDrive' )
  var i3257 = data
  i3256.m_PositionSpring = i3257[0]
  i3256.m_PositionDamper = i3257[1]
  i3256.m_MaximumForce = i3257[2]
  i3256.m_UseAcceleration = i3257[3]
  return i3256
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3258 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3259 = data
  i3258.m_Spring = i3259[0]
  i3258.m_Damper = i3259[1]
  return i3258
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3260 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3261 = data
  i3260.m_Limit = i3261[0]
  i3260.m_Bounciness = i3261[1]
  i3260.m_ContactDistance = i3261[2]
  return i3260
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3262 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3263 = data
  i3262.m_ExtremumSlip = i3263[0]
  i3262.m_ExtremumValue = i3263[1]
  i3262.m_AsymptoteSlip = i3263[2]
  i3262.m_AsymptoteValue = i3263[3]
  i3262.m_Stiffness = i3263[4]
  return i3262
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3264 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3265 = data
  i3264.m_LowerAngle = i3265[0]
  i3264.m_UpperAngle = i3265[1]
  return i3264
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3266 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3267 = data
  i3266.m_MotorSpeed = i3267[0]
  i3266.m_MaximumMotorTorque = i3267[1]
  return i3266
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3268 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3269 = data
  i3268.m_DampingRatio = i3269[0]
  i3268.m_Frequency = i3269[1]
  i3268.m_Angle = i3269[2]
  return i3268
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3270 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3271 = data
  i3270.m_LowerTranslation = i3271[0]
  i3270.m_UpperTranslation = i3271[1]
  return i3270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3273 = data
  i3272.pivot = new pc.Vec2( i3273[0], i3273[1] )
  i3272.anchorMin = new pc.Vec2( i3273[2], i3273[3] )
  i3272.anchorMax = new pc.Vec2( i3273[4], i3273[5] )
  i3272.sizeDelta = new pc.Vec2( i3273[6], i3273[7] )
  i3272.anchoredPosition3D = new pc.Vec3( i3273[8], i3273[9], i3273[10] )
  i3272.rotation = new pc.Quat(i3273[11], i3273[12], i3273[13], i3273[14])
  i3272.scale = new pc.Vec3( i3273[15], i3273[16], i3273[17] )
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3275 = data
  i3274.cullTransparentMesh = !!i3275[0]
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3277 = data
  i3276.name = i3277[0]
  i3276.tagId = i3277[1]
  i3276.enabled = !!i3277[2]
  i3276.isStatic = !!i3277[3]
  i3276.layer = i3277[4]
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3279 = data
  i3278.name = i3279[0]
  i3278.width = i3279[1]
  i3278.height = i3279[2]
  i3278.mipmapCount = i3279[3]
  i3278.anisoLevel = i3279[4]
  i3278.filterMode = i3279[5]
  i3278.hdr = !!i3279[6]
  i3278.format = i3279[7]
  i3278.wrapMode = i3279[8]
  i3278.alphaIsTransparency = !!i3279[9]
  i3278.alphaSource = i3279[10]
  i3278.graphicsFormat = i3279[11]
  i3278.sRGBTexture = !!i3279[12]
  i3278.desiredColorSpace = i3279[13]
  i3278.wrapU = i3279[14]
  i3278.wrapV = i3279[15]
  return i3278
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3280 = root || request.c( 'UnityEngine.UI.Image' )
  var i3281 = data
  request.r(i3281[0], i3281[1], 0, i3280, 'm_Sprite')
  i3280.m_Type = i3281[2]
  i3280.m_PreserveAspect = !!i3281[3]
  i3280.m_FillCenter = !!i3281[4]
  i3280.m_FillMethod = i3281[5]
  i3280.m_FillAmount = i3281[6]
  i3280.m_FillClockwise = !!i3281[7]
  i3280.m_FillOrigin = i3281[8]
  i3280.m_UseSpriteMesh = !!i3281[9]
  i3280.m_PixelsPerUnitMultiplier = i3281[10]
  request.r(i3281[11], i3281[12], 0, i3280, 'm_Material')
  i3280.m_Maskable = !!i3281[13]
  i3280.m_Color = new pc.Color(i3281[14], i3281[15], i3281[16], i3281[17])
  i3280.m_RaycastTarget = !!i3281[18]
  i3280.m_RaycastPadding = new pc.Vec4( i3281[19], i3281[20], i3281[21], i3281[22] )
  return i3280
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i3282 = root || request.c( 'VariableJoystick' )
  var i3283 = data
  request.r(i3283[0], i3283[1], 0, i3282, 'handle')
  i3282.moveThreshold = i3283[2]
  i3282.joystickType = i3283[3]
  request.r(i3283[4], i3283[5], 0, i3282, 'background')
  i3282.handleRange = i3283[6]
  i3282.deadZone = i3283[7]
  i3282.axisOptions = i3283[8]
  i3282.snapX = !!i3283[9]
  i3282.snapY = !!i3283[10]
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3285 = data
  i3284.position = new pc.Vec3( i3285[0], i3285[1], i3285[2] )
  i3284.scale = new pc.Vec3( i3285[3], i3285[4], i3285[5] )
  i3284.rotation = new pc.Quat(i3285[6], i3285[7], i3285[8], i3285[9])
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3287 = data
  request.r(i3287[0], i3287[1], 0, i3286, 'sharedMesh')
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3289 = data
  request.r(i3289[0], i3289[1], 0, i3288, 'additionalVertexStreams')
  i3288.enabled = !!i3289[2]
  request.r(i3289[3], i3289[4], 0, i3288, 'sharedMaterial')
  var i3291 = i3289[5]
  var i3290 = []
  for(var i = 0; i < i3291.length; i += 2) {
  request.r(i3291[i + 0], i3291[i + 1], 2, i3290, '')
  }
  i3288.sharedMaterials = i3290
  i3288.receiveShadows = !!i3289[6]
  i3288.shadowCastingMode = i3289[7]
  i3288.sortingLayerID = i3289[8]
  i3288.sortingOrder = i3289[9]
  i3288.lightmapIndex = i3289[10]
  i3288.lightmapSceneIndex = i3289[11]
  i3288.lightmapScaleOffset = new pc.Vec4( i3289[12], i3289[13], i3289[14], i3289[15] )
  i3288.lightProbeUsage = i3289[16]
  i3288.reflectionProbeUsage = i3289[17]
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3295 = data
  i3294.name = i3295[0]
  i3294.halfPrecision = !!i3295[1]
  i3294.useUInt32IndexFormat = !!i3295[2]
  i3294.vertexCount = i3295[3]
  i3294.aabb = i3295[4]
  var i3297 = i3295[5]
  var i3296 = []
  for(var i = 0; i < i3297.length; i += 1) {
    i3296.push( !!i3297[i + 0] );
  }
  i3294.streams = i3296
  i3294.vertices = i3295[6]
  var i3299 = i3295[7]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3299[i + 0]) );
  }
  i3294.subMeshes = i3298
  var i3301 = i3295[8]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 16) {
    i3300.push( new pc.Mat4().setData(i3301[i + 0], i3301[i + 1], i3301[i + 2], i3301[i + 3],  i3301[i + 4], i3301[i + 5], i3301[i + 6], i3301[i + 7],  i3301[i + 8], i3301[i + 9], i3301[i + 10], i3301[i + 11],  i3301[i + 12], i3301[i + 13], i3301[i + 14], i3301[i + 15]) );
  }
  i3294.bindposes = i3300
  var i3303 = i3295[9]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 1) {
    i3302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3303[i + 0]) );
  }
  i3294.blendShapes = i3302
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3309 = data
  i3308.triangles = i3309[0]
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3315 = data
  i3314.name = i3315[0]
  var i3317 = i3315[1]
  var i3316 = []
  for(var i = 0; i < i3317.length; i += 1) {
    i3316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3317[i + 0]) );
  }
  i3314.frames = i3316
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3318 = root || new pc.UnityMaterial()
  var i3319 = data
  i3318.name = i3319[0]
  request.r(i3319[1], i3319[2], 0, i3318, 'shader')
  i3318.renderQueue = i3319[3]
  i3318.enableInstancing = !!i3319[4]
  var i3321 = i3319[5]
  var i3320 = []
  for(var i = 0; i < i3321.length; i += 1) {
    i3320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3321[i + 0]) );
  }
  i3318.floatParameters = i3320
  var i3323 = i3319[6]
  var i3322 = []
  for(var i = 0; i < i3323.length; i += 1) {
    i3322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3323[i + 0]) );
  }
  i3318.colorParameters = i3322
  var i3325 = i3319[7]
  var i3324 = []
  for(var i = 0; i < i3325.length; i += 1) {
    i3324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3325[i + 0]) );
  }
  i3318.vectorParameters = i3324
  var i3327 = i3319[8]
  var i3326 = []
  for(var i = 0; i < i3327.length; i += 1) {
    i3326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3327[i + 0]) );
  }
  i3318.textureParameters = i3326
  var i3329 = i3319[9]
  var i3328 = []
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3329[i + 0]) );
  }
  i3318.materialFlags = i3328
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3333 = data
  i3332.name = i3333[0]
  i3332.value = i3333[1]
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3337 = data
  i3336.name = i3337[0]
  i3336.value = new pc.Color(i3337[1], i3337[2], i3337[3], i3337[4])
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3341 = data
  i3340.name = i3341[0]
  i3340.value = new pc.Vec4( i3341[1], i3341[2], i3341[3], i3341[4] )
  return i3340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3345 = data
  i3344.name = i3345[0]
  request.r(i3345[1], i3345[2], 0, i3344, 'value')
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3349 = data
  i3348.name = i3349[0]
  i3348.enabled = !!i3349[1]
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3351 = data
  i3350.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3351[0], i3350.main)
  i3350.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3351[1], i3350.colorBySpeed)
  i3350.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3351[2], i3350.colorOverLifetime)
  i3350.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3351[3], i3350.emission)
  i3350.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3351[4], i3350.rotationBySpeed)
  i3350.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3351[5], i3350.rotationOverLifetime)
  i3350.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3351[6], i3350.shape)
  i3350.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3351[7], i3350.sizeBySpeed)
  i3350.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3351[8], i3350.sizeOverLifetime)
  i3350.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3351[9], i3350.textureSheetAnimation)
  i3350.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3351[10], i3350.velocityOverLifetime)
  i3350.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3351[11], i3350.noise)
  i3350.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3351[12], i3350.inheritVelocity)
  i3350.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3351[13], i3350.forceOverLifetime)
  i3350.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3351[14], i3350.limitVelocityOverLifetime)
  i3350.useAutoRandomSeed = !!i3351[15]
  i3350.randomSeed = i3351[16]
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3352 = root || new pc.ParticleSystemMain()
  var i3353 = data
  i3352.duration = i3353[0]
  i3352.loop = !!i3353[1]
  i3352.prewarm = !!i3353[2]
  i3352.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[3], i3352.startDelay)
  i3352.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[4], i3352.startLifetime)
  i3352.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[5], i3352.startSpeed)
  i3352.startSize3D = !!i3353[6]
  i3352.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[7], i3352.startSizeX)
  i3352.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[8], i3352.startSizeY)
  i3352.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[9], i3352.startSizeZ)
  i3352.startRotation3D = !!i3353[10]
  i3352.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[11], i3352.startRotationX)
  i3352.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[12], i3352.startRotationY)
  i3352.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[13], i3352.startRotationZ)
  i3352.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3353[14], i3352.startColor)
  i3352.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[15], i3352.gravityModifier)
  i3352.simulationSpace = i3353[16]
  request.r(i3353[17], i3353[18], 0, i3352, 'customSimulationSpace')
  i3352.simulationSpeed = i3353[19]
  i3352.useUnscaledTime = !!i3353[20]
  i3352.scalingMode = i3353[21]
  i3352.playOnAwake = !!i3353[22]
  i3352.maxParticles = i3353[23]
  i3352.emitterVelocityMode = i3353[24]
  i3352.stopAction = i3353[25]
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3354 = root || new pc.MinMaxCurve()
  var i3355 = data
  i3354.mode = i3355[0]
  i3354.curveMin = new pc.AnimationCurve( { keys_flow: i3355[1] } )
  i3354.curveMax = new pc.AnimationCurve( { keys_flow: i3355[2] } )
  i3354.curveMultiplier = i3355[3]
  i3354.constantMin = i3355[4]
  i3354.constantMax = i3355[5]
  return i3354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3356 = root || new pc.MinMaxGradient()
  var i3357 = data
  i3356.mode = i3357[0]
  i3356.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3357[1], i3356.gradientMin)
  i3356.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3357[2], i3356.gradientMax)
  i3356.colorMin = new pc.Color(i3357[3], i3357[4], i3357[5], i3357[6])
  i3356.colorMax = new pc.Color(i3357[7], i3357[8], i3357[9], i3357[10])
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3359 = data
  i3358.mode = i3359[0]
  var i3361 = i3359[1]
  var i3360 = []
  for(var i = 0; i < i3361.length; i += 1) {
    i3360.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3361[i + 0]) );
  }
  i3358.colorKeys = i3360
  var i3363 = i3359[2]
  var i3362 = []
  for(var i = 0; i < i3363.length; i += 1) {
    i3362.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3363[i + 0]) );
  }
  i3358.alphaKeys = i3362
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3364 = root || new pc.ParticleSystemColorBySpeed()
  var i3365 = data
  i3364.enabled = !!i3365[0]
  i3364.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3365[1], i3364.color)
  i3364.range = new pc.Vec2( i3365[2], i3365[3] )
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3369 = data
  i3368.color = new pc.Color(i3369[0], i3369[1], i3369[2], i3369[3])
  i3368.time = i3369[4]
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3373 = data
  i3372.alpha = i3373[0]
  i3372.time = i3373[1]
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3374 = root || new pc.ParticleSystemColorOverLifetime()
  var i3375 = data
  i3374.enabled = !!i3375[0]
  i3374.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3375[1], i3374.color)
  return i3374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3376 = root || new pc.ParticleSystemEmitter()
  var i3377 = data
  i3376.enabled = !!i3377[0]
  i3376.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3377[1], i3376.rateOverTime)
  i3376.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3377[2], i3376.rateOverDistance)
  var i3379 = i3377[3]
  var i3378 = []
  for(var i = 0; i < i3379.length; i += 1) {
    i3378.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3379[i + 0]) );
  }
  i3376.bursts = i3378
  return i3376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3382 = root || new pc.ParticleSystemBurst()
  var i3383 = data
  i3382.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3383[0], i3382.count)
  i3382.cycleCount = i3383[1]
  i3382.minCount = i3383[2]
  i3382.maxCount = i3383[3]
  i3382.repeatInterval = i3383[4]
  i3382.time = i3383[5]
  return i3382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3384 = root || new pc.ParticleSystemRotationBySpeed()
  var i3385 = data
  i3384.enabled = !!i3385[0]
  i3384.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3385[1], i3384.x)
  i3384.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3385[2], i3384.y)
  i3384.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3385[3], i3384.z)
  i3384.separateAxes = !!i3385[4]
  i3384.range = new pc.Vec2( i3385[5], i3385[6] )
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3386 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3387 = data
  i3386.enabled = !!i3387[0]
  i3386.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3387[1], i3386.x)
  i3386.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3387[2], i3386.y)
  i3386.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3387[3], i3386.z)
  i3386.separateAxes = !!i3387[4]
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3388 = root || new pc.ParticleSystemShape()
  var i3389 = data
  i3388.enabled = !!i3389[0]
  i3388.shapeType = i3389[1]
  i3388.randomDirectionAmount = i3389[2]
  i3388.sphericalDirectionAmount = i3389[3]
  i3388.randomPositionAmount = i3389[4]
  i3388.alignToDirection = !!i3389[5]
  i3388.radius = i3389[6]
  i3388.radiusMode = i3389[7]
  i3388.radiusSpread = i3389[8]
  i3388.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3389[9], i3388.radiusSpeed)
  i3388.radiusThickness = i3389[10]
  i3388.angle = i3389[11]
  i3388.length = i3389[12]
  i3388.boxThickness = new pc.Vec3( i3389[13], i3389[14], i3389[15] )
  i3388.meshShapeType = i3389[16]
  request.r(i3389[17], i3389[18], 0, i3388, 'mesh')
  request.r(i3389[19], i3389[20], 0, i3388, 'meshRenderer')
  request.r(i3389[21], i3389[22], 0, i3388, 'skinnedMeshRenderer')
  i3388.useMeshMaterialIndex = !!i3389[23]
  i3388.meshMaterialIndex = i3389[24]
  i3388.useMeshColors = !!i3389[25]
  i3388.normalOffset = i3389[26]
  i3388.arc = i3389[27]
  i3388.arcMode = i3389[28]
  i3388.arcSpread = i3389[29]
  i3388.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3389[30], i3388.arcSpeed)
  i3388.donutRadius = i3389[31]
  i3388.position = new pc.Vec3( i3389[32], i3389[33], i3389[34] )
  i3388.rotation = new pc.Vec3( i3389[35], i3389[36], i3389[37] )
  i3388.scale = new pc.Vec3( i3389[38], i3389[39], i3389[40] )
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3390 = root || new pc.ParticleSystemSizeBySpeed()
  var i3391 = data
  i3390.enabled = !!i3391[0]
  i3390.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3391[1], i3390.x)
  i3390.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3391[2], i3390.y)
  i3390.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3391[3], i3390.z)
  i3390.separateAxes = !!i3391[4]
  i3390.range = new pc.Vec2( i3391[5], i3391[6] )
  return i3390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3392 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3393 = data
  i3392.enabled = !!i3393[0]
  i3392.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3393[1], i3392.x)
  i3392.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3393[2], i3392.y)
  i3392.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3393[3], i3392.z)
  i3392.separateAxes = !!i3393[4]
  return i3392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3394 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3395 = data
  i3394.enabled = !!i3395[0]
  i3394.mode = i3395[1]
  i3394.animation = i3395[2]
  i3394.numTilesX = i3395[3]
  i3394.numTilesY = i3395[4]
  i3394.useRandomRow = !!i3395[5]
  i3394.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3395[6], i3394.frameOverTime)
  i3394.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3395[7], i3394.startFrame)
  i3394.cycleCount = i3395[8]
  i3394.rowIndex = i3395[9]
  i3394.flipU = i3395[10]
  i3394.flipV = i3395[11]
  i3394.spriteCount = i3395[12]
  var i3397 = i3395[13]
  var i3396 = []
  for(var i = 0; i < i3397.length; i += 2) {
  request.r(i3397[i + 0], i3397[i + 1], 2, i3396, '')
  }
  i3394.sprites = i3396
  return i3394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3400 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3401 = data
  i3400.enabled = !!i3401[0]
  i3400.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[1], i3400.x)
  i3400.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[2], i3400.y)
  i3400.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[3], i3400.z)
  i3400.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[4], i3400.radial)
  i3400.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[5], i3400.speedModifier)
  i3400.space = i3401[6]
  i3400.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[7], i3400.orbitalX)
  i3400.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[8], i3400.orbitalY)
  i3400.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[9], i3400.orbitalZ)
  i3400.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[10], i3400.orbitalOffsetX)
  i3400.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[11], i3400.orbitalOffsetY)
  i3400.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3401[12], i3400.orbitalOffsetZ)
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3402 = root || new pc.ParticleSystemNoise()
  var i3403 = data
  i3402.enabled = !!i3403[0]
  i3402.separateAxes = !!i3403[1]
  i3402.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3403[2], i3402.strengthX)
  i3402.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3403[3], i3402.strengthY)
  i3402.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3403[4], i3402.strengthZ)
  i3402.frequency = i3403[5]
  i3402.damping = !!i3403[6]
  i3402.octaveCount = i3403[7]
  i3402.octaveMultiplier = i3403[8]
  i3402.octaveScale = i3403[9]
  i3402.quality = i3403[10]
  i3402.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3403[11], i3402.scrollSpeed)
  i3402.scrollSpeedMultiplier = i3403[12]
  i3402.remapEnabled = !!i3403[13]
  i3402.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3403[14], i3402.remapX)
  i3402.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3403[15], i3402.remapY)
  i3402.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3403[16], i3402.remapZ)
  i3402.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3403[17], i3402.positionAmount)
  i3402.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3403[18], i3402.rotationAmount)
  i3402.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3403[19], i3402.sizeAmount)
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3404 = root || new pc.ParticleSystemInheritVelocity()
  var i3405 = data
  i3404.enabled = !!i3405[0]
  i3404.mode = i3405[1]
  i3404.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3405[2], i3404.curve)
  return i3404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3406 = root || new pc.ParticleSystemForceOverLifetime()
  var i3407 = data
  i3406.enabled = !!i3407[0]
  i3406.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[1], i3406.x)
  i3406.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[2], i3406.y)
  i3406.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3407[3], i3406.z)
  i3406.space = i3407[4]
  i3406.randomized = !!i3407[5]
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3408 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3409 = data
  i3408.enabled = !!i3409[0]
  i3408.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[1], i3408.limit)
  i3408.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[2], i3408.limitX)
  i3408.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[3], i3408.limitY)
  i3408.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[4], i3408.limitZ)
  i3408.dampen = i3409[5]
  i3408.separateAxes = !!i3409[6]
  i3408.space = i3409[7]
  i3408.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3409[8], i3408.drag)
  i3408.multiplyDragByParticleSize = !!i3409[9]
  i3408.multiplyDragByParticleVelocity = !!i3409[10]
  return i3408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3411 = data
  i3410.enabled = !!i3411[0]
  request.r(i3411[1], i3411[2], 0, i3410, 'sharedMaterial')
  var i3413 = i3411[3]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 2) {
  request.r(i3413[i + 0], i3413[i + 1], 2, i3412, '')
  }
  i3410.sharedMaterials = i3412
  i3410.receiveShadows = !!i3411[4]
  i3410.shadowCastingMode = i3411[5]
  i3410.sortingLayerID = i3411[6]
  i3410.sortingOrder = i3411[7]
  i3410.lightmapIndex = i3411[8]
  i3410.lightmapSceneIndex = i3411[9]
  i3410.lightmapScaleOffset = new pc.Vec4( i3411[10], i3411[11], i3411[12], i3411[13] )
  i3410.lightProbeUsage = i3411[14]
  i3410.reflectionProbeUsage = i3411[15]
  request.r(i3411[16], i3411[17], 0, i3410, 'mesh')
  i3410.meshCount = i3411[18]
  i3410.activeVertexStreamsCount = i3411[19]
  i3410.alignment = i3411[20]
  i3410.renderMode = i3411[21]
  i3410.sortMode = i3411[22]
  i3410.lengthScale = i3411[23]
  i3410.velocityScale = i3411[24]
  i3410.cameraVelocityScale = i3411[25]
  i3410.normalDirection = i3411[26]
  i3410.sortingFudge = i3411[27]
  i3410.minParticleSize = i3411[28]
  i3410.maxParticleSize = i3411[29]
  i3410.pivot = new pc.Vec3( i3411[30], i3411[31], i3411[32] )
  request.r(i3411[33], i3411[34], 0, i3410, 'trailMaterial')
  return i3410
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i3414 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i3415 = data
  i3414.OnlyDeactivate = !!i3415[0]
  return i3414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3417 = data
  i3416.center = new pc.Vec3( i3417[0], i3417[1], i3417[2] )
  i3416.size = new pc.Vec3( i3417[3], i3417[4], i3417[5] )
  i3416.enabled = !!i3417[6]
  i3416.isTrigger = !!i3417[7]
  request.r(i3417[8], i3417[9], 0, i3416, 'material')
  return i3416
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i3418 = root || request.c( 'BehaviourAI.TankAI' )
  var i3419 = data
  i3418.stopDistance = i3419[0]
  i3418.rotationSpeed = i3419[1]
  i3418.moveSpeed = i3419[2]
  request.r(i3419[3], i3419[4], 0, i3418, '_exclamationMark')
  request.r(i3419[5], i3419[6], 0, i3418, '_guidance')
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3421 = data
  i3420.enabled = !!i3421[0]
  i3420.planeDistance = i3421[1]
  i3420.referencePixelsPerUnit = i3421[2]
  i3420.isFallbackOverlay = !!i3421[3]
  i3420.renderMode = i3421[4]
  i3420.renderOrder = i3421[5]
  i3420.sortingLayerName = i3421[6]
  i3420.sortingOrder = i3421[7]
  i3420.scaleFactor = i3421[8]
  request.r(i3421[9], i3421[10], 0, i3420, 'worldCamera')
  i3420.overrideSorting = !!i3421[11]
  i3420.pixelPerfect = !!i3421[12]
  i3420.targetDisplay = i3421[13]
  i3420.overridePixelPerfect = !!i3421[14]
  return i3420
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3422 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3423 = data
  i3422.m_UiScaleMode = i3423[0]
  i3422.m_ReferencePixelsPerUnit = i3423[1]
  i3422.m_ScaleFactor = i3423[2]
  i3422.m_ReferenceResolution = new pc.Vec2( i3423[3], i3423[4] )
  i3422.m_ScreenMatchMode = i3423[5]
  i3422.m_MatchWidthOrHeight = i3423[6]
  i3422.m_PhysicalUnit = i3423[7]
  i3422.m_FallbackScreenDPI = i3423[8]
  i3422.m_DefaultSpriteDPI = i3423[9]
  i3422.m_DynamicPixelsPerUnit = i3423[10]
  i3422.m_PresetInfoIsWorld = !!i3423[11]
  return i3422
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3424 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3425 = data
  i3424.m_IgnoreReversedGraphics = !!i3425[0]
  i3424.m_BlockingObjects = i3425[1]
  i3424.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3425[2] )
  return i3424
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i3426 = root || request.c( 'ExclamationMark' )
  var i3427 = data
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3429 = data
  i3428.enabled = !!i3429[0]
  request.r(i3429[1], i3429[2], 0, i3428, 'sharedMaterial')
  var i3431 = i3429[3]
  var i3430 = []
  for(var i = 0; i < i3431.length; i += 2) {
  request.r(i3431[i + 0], i3431[i + 1], 2, i3430, '')
  }
  i3428.sharedMaterials = i3430
  i3428.receiveShadows = !!i3429[4]
  i3428.shadowCastingMode = i3429[5]
  i3428.sortingLayerID = i3429[6]
  i3428.sortingOrder = i3429[7]
  i3428.lightmapIndex = i3429[8]
  i3428.lightmapSceneIndex = i3429[9]
  i3428.lightmapScaleOffset = new pc.Vec4( i3429[10], i3429[11], i3429[12], i3429[13] )
  i3428.lightProbeUsage = i3429[14]
  i3428.reflectionProbeUsage = i3429[15]
  i3428.color = new pc.Color(i3429[16], i3429[17], i3429[18], i3429[19])
  request.r(i3429[20], i3429[21], 0, i3428, 'sprite')
  i3428.flipX = !!i3429[22]
  i3428.flipY = !!i3429[23]
  i3428.drawMode = i3429[24]
  i3428.size = new pc.Vec2( i3429[25], i3429[26] )
  i3428.tileMode = i3429[27]
  i3428.adaptiveModeThreshold = i3429[28]
  i3428.maskInteraction = i3429[29]
  i3428.spriteSortPoint = i3429[30]
  return i3428
}

Deserializers["TitnSprite"] = function (request, data, root) {
  var i3432 = root || request.c( 'TitnSprite' )
  var i3433 = data
  i3432.offsetDistance = i3433[0]
  i3432.heightOffset = i3433[1]
  request.r(i3433[2], i3433[3], 0, i3432, '_tank')
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3435 = data
  i3434.enabled = !!i3435[0]
  i3434.type = i3435[1]
  i3434.color = new pc.Color(i3435[2], i3435[3], i3435[4], i3435[5])
  i3434.cullingMask = i3435[6]
  i3434.intensity = i3435[7]
  i3434.range = i3435[8]
  i3434.spotAngle = i3435[9]
  i3434.shadows = i3435[10]
  i3434.shadowNormalBias = i3435[11]
  i3434.shadowBias = i3435[12]
  i3434.shadowStrength = i3435[13]
  i3434.shadowResolution = i3435[14]
  i3434.lightmapBakeType = i3435[15]
  i3434.renderMode = i3435[16]
  request.r(i3435[17], i3435[18], 0, i3434, 'cookie')
  i3434.cookieSize = i3435[19]
  return i3434
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i3436 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i3437 = data
  i3436.m_Version = i3437[0]
  i3436.m_UsePipelineSettings = !!i3437[1]
  i3436.m_AdditionalLightsShadowResolutionTier = i3437[2]
  i3436.m_LightLayerMask = i3437[3]
  i3436.m_RenderingLayers = i3437[4]
  i3436.m_CustomShadowLayers = !!i3437[5]
  i3436.m_ShadowLayerMask = i3437[6]
  i3436.m_ShadowRenderingLayers = i3437[7]
  i3436.m_LightCookieSize = new pc.Vec2( i3437[8], i3437[9] )
  i3436.m_LightCookieOffset = new pc.Vec2( i3437[10], i3437[11] )
  i3436.m_SoftShadowQuality = i3437[12]
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3439 = data
  request.r(i3439[0], i3439[1], 0, i3438, 'clip')
  request.r(i3439[2], i3439[3], 0, i3438, 'outputAudioMixerGroup')
  i3438.playOnAwake = !!i3439[4]
  i3438.loop = !!i3439[5]
  i3438.time = i3439[6]
  i3438.volume = i3439[7]
  i3438.pitch = i3439[8]
  i3438.enabled = !!i3439[9]
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3441 = data
  i3440.mass = i3441[0]
  i3440.drag = i3441[1]
  i3440.angularDrag = i3441[2]
  i3440.useGravity = !!i3441[3]
  i3440.isKinematic = !!i3441[4]
  i3440.constraints = i3441[5]
  i3440.maxAngularVelocity = i3441[6]
  i3440.collisionDetectionMode = i3441[7]
  i3440.interpolation = i3441[8]
  return i3440
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i3442 = root || request.c( 'Howitzer.Projectile' )
  var i3443 = data
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i3445 = data
  i3444.center = new pc.Vec3( i3445[0], i3445[1], i3445[2] )
  i3444.radius = i3445[3]
  i3444.height = i3445[4]
  i3444.direction = i3445[5]
  i3444.enabled = !!i3445[6]
  i3444.isTrigger = !!i3445[7]
  request.r(i3445[8], i3445[9], 0, i3444, 'material')
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3447 = data
  i3446.name = i3447[0]
  i3446.atlasId = i3447[1]
  i3446.mipmapCount = i3447[2]
  i3446.hdr = !!i3447[3]
  i3446.size = i3447[4]
  i3446.anisoLevel = i3447[5]
  i3446.filterMode = i3447[6]
  var i3449 = i3447[7]
  var i3448 = []
  for(var i = 0; i < i3449.length; i += 4) {
    i3448.push( UnityEngine.Rect.MinMaxRect(i3449[i + 0], i3449[i + 1], i3449[i + 2], i3449[i + 3]) );
  }
  i3446.rects = i3448
  i3446.wrapU = i3447[8]
  i3446.wrapV = i3447[9]
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3453 = data
  i3452.name = i3453[0]
  i3452.index = i3453[1]
  i3452.startup = !!i3453[2]
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3455 = data
  i3454.enabled = !!i3455[0]
  i3454.aspect = i3455[1]
  i3454.orthographic = !!i3455[2]
  i3454.orthographicSize = i3455[3]
  i3454.backgroundColor = new pc.Color(i3455[4], i3455[5], i3455[6], i3455[7])
  i3454.nearClipPlane = i3455[8]
  i3454.farClipPlane = i3455[9]
  i3454.fieldOfView = i3455[10]
  i3454.depth = i3455[11]
  i3454.clearFlags = i3455[12]
  i3454.cullingMask = i3455[13]
  i3454.rect = i3455[14]
  request.r(i3455[15], i3455[16], 0, i3454, 'targetTexture')
  i3454.usePhysicalProperties = !!i3455[17]
  i3454.focalLength = i3455[18]
  i3454.sensorSize = new pc.Vec2( i3455[19], i3455[20] )
  i3454.lensShift = new pc.Vec2( i3455[21], i3455[22] )
  i3454.gateFit = i3455[23]
  i3454.commandBufferCount = i3455[24]
  i3454.cameraType = i3455[25]
  return i3454
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i3456 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i3457 = data
  request.r(i3457[0], i3457[1], 0, i3456, 'joystick')
  i3456.minYAngle = i3457[2]
  i3456.maxYAngle = i3457[3]
  i3456.rotationSpeed = i3457[4]
  return i3456
}

Deserializers["InteractiveArt"] = function (request, data, root) {
  var i3458 = root || request.c( 'InteractiveArt' )
  var i3459 = data
  request.r(i3459[0], i3459[1], 0, i3458, 'secondCamera')
  i3458.transitionSpeed = i3459[2]
  request.r(i3459[3], i3459[4], 0, i3458, '_shopping')
  request.r(i3459[5], i3459[6], 0, i3458, '_arm')
  request.r(i3459[7], i3459[8], 0, i3458, '_arta1')
  request.r(i3459[9], i3459[10], 0, i3458, '_arta2')
  request.r(i3459[11], i3459[12], 0, i3458, '_particleSystem')
  return i3458
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i3460 = root || request.c( 'Howitzer.LookAtReticle' )
  var i3461 = data
  request.r(i3461[0], i3461[1], 0, i3460, 'reticle')
  request.r(i3461[2], i3461[3], 0, i3460, 'mainCamera')
  i3460.rotationSpeed = i3461[4]
  i3460.maxPitchAngle = i3461[5]
  i3460.minPitchAngle = i3461[6]
  return i3460
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i3462 = root || request.c( 'FollowBullet' )
  var i3463 = data
  i3462._smoothSpeed = i3463[0]
  i3462._offset = new pc.Vec3( i3463[1], i3463[2], i3463[3] )
  return i3462
}

Deserializers["HandAnimation"] = function (request, data, root) {
  var i3464 = root || request.c( 'HandAnimation' )
  var i3465 = data
  i3464.scaleSpeed = i3465[0]
  i3464.scaleAmount = i3465[1]
  return i3464
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i3466 = root || request.c( 'UI.PlayerUIController' )
  var i3467 = data
  request.r(i3467[0], i3467[1], 0, i3466, 'shootButton')
  request.r(i3467[2], i3467[3], 0, i3466, 'zoomButton')
  request.r(i3467[4], i3467[5], 0, i3466, '_cross')
  request.r(i3467[6], i3467[7], 0, i3466, '_mark')
  request.r(i3467[8], i3467[9], 0, i3466, '_tutorialHand2')
  return i3466
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i3468 = root || request.c( 'Howitzer.PlayerZoom' )
  var i3469 = data
  request.r(i3469[0], i3469[1], 0, i3468, 'crosshair')
  request.r(i3469[2], i3469[3], 0, i3468, 'mainCamera')
  request.r(i3469[4], i3469[5], 0, i3468, 'zoomImage')
  var i3471 = i3469[6]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 2) {
  request.r(i3471[i + 0], i3471[i + 1], 2, i3470, '')
  }
  i3468.objectsToDisable = i3470
  i3468.zoomFOV = i3469[7]
  i3468.normalFOV = i3469[8]
  i3468.zoomSpeed = i3469[9]
  request.r(i3469[10], i3469[11], 0, i3468, 'joystick')
  i3468.rotationSpeed = i3469[12]
  return i3468
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i3474 = root || request.c( 'Howitzer.PlayerShooting' )
  var i3475 = data
  request.r(i3475[0], i3475[1], 0, i3474, 'playerShootingCooldown')
  request.r(i3475[2], i3475[3], 0, i3474, 'mainCamera')
  request.r(i3475[4], i3475[5], 0, i3474, 'crosshairUI')
  request.r(i3475[6], i3475[7], 0, i3474, 'muzzleFlash')
  request.r(i3475[8], i3475[9], 0, i3474, 'explosionEffect')
  request.r(i3475[10], i3475[11], 0, i3474, 'projectilePosition')
  request.r(i3475[12], i3475[13], 0, i3474, 'prefabProjectile')
  i3474.projectileSpeed = i3475[14]
  i3474.poolSize = i3475[15]
  request.r(i3475[16], i3475[17], 0, i3474, '_followBullet')
  request.r(i3475[18], i3475[19], 0, i3474, '_managerCamers')
  request.r(i3475[20], i3475[21], 0, i3474, '_timeController')
  request.r(i3475[22], i3475[23], 0, i3474, '_playerUIController')
  request.r(i3475[24], i3475[25], 0, i3474, '_tanksFabric')
  request.r(i3475[26], i3475[27], 0, i3474, '_missPoint')
  request.r(i3475[28], i3475[29], 0, i3474, '_pumping')
  return i3474
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i3476 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i3477 = data
  request.r(i3477[0], i3477[1], 0, i3476, 'shootButton')
  request.r(i3477[2], i3477[3], 0, i3476, 'cooldownText')
  request.r(i3477[4], i3477[5], 0, i3476, 'cooldownImage')
  i3476.cooldownTime = i3477[6]
  return i3476
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3478 = root || request.c( 'UnityEngine.UI.Button' )
  var i3479 = data
  i3478.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3479[0], i3478.m_OnClick)
  i3478.m_Navigation = request.d('UnityEngine.UI.Navigation', i3479[1], i3478.m_Navigation)
  i3478.m_Transition = i3479[2]
  i3478.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3479[3], i3478.m_Colors)
  i3478.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3479[4], i3478.m_SpriteState)
  i3478.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3479[5], i3478.m_AnimationTriggers)
  i3478.m_Interactable = !!i3479[6]
  request.r(i3479[7], i3479[8], 0, i3478, 'm_TargetGraphic')
  return i3478
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3480 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3481 = data
  i3480.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3481[0], i3480.m_PersistentCalls)
  return i3480
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3482 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3483 = data
  var i3485 = i3483[0]
  var i3484 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3485.length; i += 1) {
    i3484.add(request.d('UnityEngine.Events.PersistentCall', i3485[i + 0]));
  }
  i3482.m_Calls = i3484
  return i3482
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3488 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3489 = data
  request.r(i3489[0], i3489[1], 0, i3488, 'm_Target')
  i3488.m_TargetAssemblyTypeName = i3489[2]
  i3488.m_MethodName = i3489[3]
  i3488.m_Mode = i3489[4]
  i3488.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3489[5], i3488.m_Arguments)
  i3488.m_CallState = i3489[6]
  return i3488
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3490 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3491 = data
  i3490.m_Mode = i3491[0]
  i3490.m_WrapAround = !!i3491[1]
  request.r(i3491[2], i3491[3], 0, i3490, 'm_SelectOnUp')
  request.r(i3491[4], i3491[5], 0, i3490, 'm_SelectOnDown')
  request.r(i3491[6], i3491[7], 0, i3490, 'm_SelectOnLeft')
  request.r(i3491[8], i3491[9], 0, i3490, 'm_SelectOnRight')
  return i3490
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3492 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3493 = data
  i3492.m_NormalColor = new pc.Color(i3493[0], i3493[1], i3493[2], i3493[3])
  i3492.m_HighlightedColor = new pc.Color(i3493[4], i3493[5], i3493[6], i3493[7])
  i3492.m_PressedColor = new pc.Color(i3493[8], i3493[9], i3493[10], i3493[11])
  i3492.m_SelectedColor = new pc.Color(i3493[12], i3493[13], i3493[14], i3493[15])
  i3492.m_DisabledColor = new pc.Color(i3493[16], i3493[17], i3493[18], i3493[19])
  i3492.m_ColorMultiplier = i3493[20]
  i3492.m_FadeDuration = i3493[21]
  return i3492
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3494 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3495 = data
  request.r(i3495[0], i3495[1], 0, i3494, 'm_HighlightedSprite')
  request.r(i3495[2], i3495[3], 0, i3494, 'm_PressedSprite')
  request.r(i3495[4], i3495[5], 0, i3494, 'm_SelectedSprite')
  request.r(i3495[6], i3495[7], 0, i3494, 'm_DisabledSprite')
  return i3494
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3496 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3497 = data
  i3496.m_NormalTrigger = i3497[0]
  i3496.m_HighlightedTrigger = i3497[1]
  i3496.m_PressedTrigger = i3497[2]
  i3496.m_SelectedTrigger = i3497[3]
  i3496.m_DisabledTrigger = i3497[4]
  return i3496
}

Deserializers["TutorialHand2"] = function (request, data, root) {
  var i3498 = root || request.c( 'TutorialHand2' )
  var i3499 = data
  i3498.scaleSpeed = i3499[0]
  i3498.scaleAmount = i3499[1]
  request.r(i3499[2], i3499[3], 0, i3498, '_shootButton')
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3501 = data
  i3500.usedByComposite = !!i3501[0]
  i3500.autoTiling = !!i3501[1]
  i3500.size = new pc.Vec2( i3501[2], i3501[3] )
  i3500.edgeRadius = i3501[4]
  i3500.enabled = !!i3501[5]
  i3500.isTrigger = !!i3501[6]
  i3500.usedByEffector = !!i3501[7]
  i3500.density = i3501[8]
  i3500.offset = new pc.Vec2( i3501[9], i3501[10] )
  request.r(i3501[11], i3501[12], 0, i3500, 'material')
  return i3500
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3502 = root || request.c( 'UnityEngine.UI.Text' )
  var i3503 = data
  i3502.m_FontData = request.d('UnityEngine.UI.FontData', i3503[0], i3502.m_FontData)
  i3502.m_Text = i3503[1]
  request.r(i3503[2], i3503[3], 0, i3502, 'm_Material')
  i3502.m_Maskable = !!i3503[4]
  i3502.m_Color = new pc.Color(i3503[5], i3503[6], i3503[7], i3503[8])
  i3502.m_RaycastTarget = !!i3503[9]
  i3502.m_RaycastPadding = new pc.Vec4( i3503[10], i3503[11], i3503[12], i3503[13] )
  return i3502
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3504 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3505 = data
  request.r(i3505[0], i3505[1], 0, i3504, 'm_Font')
  i3504.m_FontSize = i3505[2]
  i3504.m_FontStyle = i3505[3]
  i3504.m_BestFit = !!i3505[4]
  i3504.m_MinSize = i3505[5]
  i3504.m_MaxSize = i3505[6]
  i3504.m_Alignment = i3505[7]
  i3504.m_AlignByGeometry = !!i3505[8]
  i3504.m_RichText = !!i3505[9]
  i3504.m_HorizontalOverflow = i3505[10]
  i3504.m_VerticalOverflow = i3505[11]
  i3504.m_LineSpacing = i3505[12]
  return i3504
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i3506 = root || request.c( 'TutorialHand' )
  var i3507 = data
  request.r(i3507[0], i3507[1], 0, i3506, 'handImage')
  i3506.moveDistance = i3507[2]
  i3506.moveDuration = i3507[3]
  request.r(i3507[4], i3507[5], 0, i3506, '_tutorialHand2')
  request.r(i3507[6], i3507[7], 0, i3506, '_shootButton')
  request.r(i3507[8], i3507[9], 0, i3506, '_zoomButton')
  return i3506
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i3508 = root || request.c( 'UI.CrosshairMovement' )
  var i3509 = data
  request.r(i3509[0], i3509[1], 0, i3508, 'joystick')
  request.r(i3509[2], i3509[3], 0, i3508, 'crosshair')
  i3508.moveSpeed = i3509[4]
  request.r(i3509[5], i3509[6], 0, i3508, 'canvasRect')
  return i3508
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i3510 = root || request.c( 'UI.EndCardAnimation' )
  var i3511 = data
  request.r(i3511[0], i3511[1], 0, i3510, 'background')
  request.r(i3511[2], i3511[3], 0, i3510, 'title')
  request.r(i3511[4], i3511[5], 0, i3510, 'logoAndButton')
  request.r(i3511[6], i3511[7], 0, i3510, 'titleText')
  i3510.fadeDuration = i3511[8]
  i3510.scaleDuration = i3511[9]
  i3510.scaleEase = i3511[10]
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3513 = data
  i3512.m_Alpha = i3513[0]
  i3512.m_Interactable = !!i3513[1]
  i3512.m_BlocksRaycasts = !!i3513[2]
  i3512.m_IgnoreParentGroups = !!i3513[3]
  i3512.enabled = !!i3513[4]
  return i3512
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i3514 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i3515 = data
  i3514.m_AspectMode = i3515[0]
  i3514.m_AspectRatio = i3515[1]
  return i3514
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i3516 = root || request.c( 'UI.ButtonPulse' )
  var i3517 = data
  i3516.scaleMultiplier = i3517[0]
  i3516.duration = i3517[1]
  return i3516
}

Deserializers["Cross"] = function (request, data, root) {
  var i3518 = root || request.c( 'Cross' )
  var i3519 = data
  return i3518
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3520 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3521 = data
  request.r(i3521[0], i3521[1], 0, i3520, 'm_FirstSelected')
  i3520.m_sendNavigationEvents = !!i3521[2]
  i3520.m_DragThreshold = i3521[3]
  return i3520
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3522 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3523 = data
  i3522.m_HorizontalAxis = i3523[0]
  i3522.m_VerticalAxis = i3523[1]
  i3522.m_SubmitButton = i3523[2]
  i3522.m_CancelButton = i3523[3]
  i3522.m_InputActionsPerSecond = i3523[4]
  i3522.m_RepeatDelay = i3523[5]
  i3522.m_ForceModuleActive = !!i3523[6]
  i3522.m_SendPointerHoverToParent = !!i3523[7]
  return i3522
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i3524 = root || request.c( 'Bootstraps.Bootstrap' )
  var i3525 = data
  request.r(i3525[0], i3525[1], 0, i3524, 'tanksFabric')
  request.r(i3525[2], i3525[3], 0, i3524, 'scenarioGame')
  return i3524
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i3526 = root || request.c( 'Fabric.TanksFabric' )
  var i3527 = data
  request.r(i3527[0], i3527[1], 0, i3526, 'tankPrefab')
  var i3529 = i3527[2]
  var i3528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3529.length; i += 2) {
  request.r(i3529[i + 0], i3529[i + 1], 1, i3528, '')
  }
  i3526.spawnPoints = i3528
  var i3531 = i3527[3]
  var i3530 = []
  for(var i = 0; i < i3531.length; i += 2) {
  request.r(i3531[i + 0], i3531[i + 1], 2, i3530, '')
  }
  i3526.targets = i3530
  return i3526
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i3536 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i3537 = data
  request.r(i3537[0], i3537[1], 0, i3536, 'endCard')
  return i3536
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i3538 = root || request.c( 'UI.TankKillStatistics' )
  var i3539 = data
  return i3538
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i3540 = root || request.c( 'ManagerCamers' )
  var i3541 = data
  request.r(i3541[0], i3541[1], 0, i3540, '_plauerCamera')
  request.r(i3541[2], i3541[3], 0, i3540, '_bulletCamera')
  request.r(i3541[4], i3541[5], 0, i3540, '_timeController')
  request.r(i3541[6], i3541[7], 0, i3540, '_playerZoom')
  return i3540
}

Deserializers["TimeController"] = function (request, data, root) {
  var i3542 = root || request.c( 'TimeController' )
  var i3543 = data
  i3542.slowMotionScale = i3543[0]
  i3542.slowMotionDuration = i3543[1]
  i3542.restoreSpeedDuration = i3543[2]
  return i3542
}

Deserializers["Pumping"] = function (request, data, root) {
  var i3544 = root || request.c( 'Pumping' )
  var i3545 = data
  request.r(i3545[0], i3545[1], 0, i3544, 'm_Camera')
  request.r(i3545[2], i3545[3], 0, i3544, '_pumpingCamera')
  request.r(i3545[4], i3545[5], 0, i3544, '_UI')
  request.r(i3545[6], i3545[7], 0, i3544, '_arta1')
  request.r(i3545[8], i3545[9], 0, i3544, '_arm')
  request.r(i3545[10], i3545[11], 0, i3544, '_shopping')
  request.r(i3545[12], i3545[13], 0, i3544, '_interactiveArt')
  request.r(i3545[14], i3545[15], 0, i3544, '_tacticsFabric')
  request.r(i3545[16], i3545[17], 0, i3544, '_titnSprite')
  return i3544
}

Deserializers["Shopping"] = function (request, data, root) {
  var i3546 = root || request.c( 'Shopping' )
  var i3547 = data
  request.r(i3547[0], i3547[1], 0, i3546, '_improveButton')
  request.r(i3547[2], i3547[3], 0, i3546, '_purchase')
  request.r(i3547[4], i3547[5], 0, i3546, '_shopping')
  request.r(i3547[6], i3547[7], 0, i3546, '_shoppingPlayer')
  request.r(i3547[8], i3547[9], 0, i3546, '_tanksFabric')
  request.r(i3547[10], i3547[11], 0, i3546, '_interactiveArt')
  return i3546
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3548 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3549 = data
  request.r(i3549[0], i3549[1], 0, i3548, 'm_ObjectArgument')
  i3548.m_ObjectArgumentAssemblyTypeName = i3549[2]
  i3548.m_IntArgument = i3549[3]
  i3548.m_FloatArgument = i3549[4]
  i3548.m_StringArgument = i3549[5]
  i3548.m_BoolArgument = !!i3549[6]
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3551 = data
  i3550.ambientIntensity = i3551[0]
  i3550.reflectionIntensity = i3551[1]
  i3550.ambientMode = i3551[2]
  i3550.ambientLight = new pc.Color(i3551[3], i3551[4], i3551[5], i3551[6])
  i3550.ambientSkyColor = new pc.Color(i3551[7], i3551[8], i3551[9], i3551[10])
  i3550.ambientGroundColor = new pc.Color(i3551[11], i3551[12], i3551[13], i3551[14])
  i3550.ambientEquatorColor = new pc.Color(i3551[15], i3551[16], i3551[17], i3551[18])
  i3550.fogColor = new pc.Color(i3551[19], i3551[20], i3551[21], i3551[22])
  i3550.fogEndDistance = i3551[23]
  i3550.fogStartDistance = i3551[24]
  i3550.fogDensity = i3551[25]
  i3550.fog = !!i3551[26]
  request.r(i3551[27], i3551[28], 0, i3550, 'skybox')
  i3550.fogMode = i3551[29]
  var i3553 = i3551[30]
  var i3552 = []
  for(var i = 0; i < i3553.length; i += 1) {
    i3552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3553[i + 0]) );
  }
  i3550.lightmaps = i3552
  i3550.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3551[31], i3550.lightProbes)
  i3550.lightmapsMode = i3551[32]
  i3550.mixedBakeMode = i3551[33]
  i3550.environmentLightingMode = i3551[34]
  i3550.ambientProbe = new pc.SphericalHarmonicsL2(i3551[35])
  i3550.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3551[36])
  i3550.useReferenceAmbientProbe = !!i3551[37]
  request.r(i3551[38], i3551[39], 0, i3550, 'customReflection')
  request.r(i3551[40], i3551[41], 0, i3550, 'defaultReflection')
  i3550.defaultReflectionMode = i3551[42]
  i3550.defaultReflectionResolution = i3551[43]
  i3550.sunLightObjectId = i3551[44]
  i3550.pixelLightCount = i3551[45]
  i3550.defaultReflectionHDR = !!i3551[46]
  i3550.hasLightDataAsset = !!i3551[47]
  i3550.hasManualGenerate = !!i3551[48]
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3557 = data
  request.r(i3557[0], i3557[1], 0, i3556, 'lightmapColor')
  request.r(i3557[2], i3557[3], 0, i3556, 'lightmapDirection')
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3558 = root || new UnityEngine.LightProbes()
  var i3559 = data
  return i3558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3567 = data
  var i3569 = i3567[0]
  var i3568 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3569.length; i += 1) {
    i3568.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3569[i + 0]));
  }
  i3566.ShaderCompilationErrors = i3568
  i3566.name = i3567[1]
  i3566.guid = i3567[2]
  var i3571 = i3567[3]
  var i3570 = []
  for(var i = 0; i < i3571.length; i += 1) {
    i3570.push( i3571[i + 0] );
  }
  i3566.shaderDefinedKeywords = i3570
  var i3573 = i3567[4]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 1) {
    i3572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3573[i + 0]) );
  }
  i3566.passes = i3572
  var i3575 = i3567[5]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 1) {
    i3574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3575[i + 0]) );
  }
  i3566.usePasses = i3574
  var i3577 = i3567[6]
  var i3576 = []
  for(var i = 0; i < i3577.length; i += 1) {
    i3576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3577[i + 0]) );
  }
  i3566.defaultParameterValues = i3576
  request.r(i3567[7], i3567[8], 0, i3566, 'unityFallbackShader')
  i3566.readDepth = !!i3567[9]
  i3566.isCreatedByShaderGraph = !!i3567[10]
  i3566.compiled = !!i3567[11]
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3581 = data
  i3580.shaderName = i3581[0]
  i3580.errorMessage = i3581[1]
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3586 = root || new pc.UnityShaderPass()
  var i3587 = data
  i3586.id = i3587[0]
  i3586.subShaderIndex = i3587[1]
  i3586.name = i3587[2]
  i3586.passType = i3587[3]
  i3586.grabPassTextureName = i3587[4]
  i3586.usePass = !!i3587[5]
  i3586.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3587[6], i3586.zTest)
  i3586.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3587[7], i3586.zWrite)
  i3586.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3587[8], i3586.culling)
  i3586.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3587[9], i3586.blending)
  i3586.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3587[10], i3586.alphaBlending)
  i3586.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3587[11], i3586.colorWriteMask)
  i3586.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3587[12], i3586.offsetUnits)
  i3586.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3587[13], i3586.offsetFactor)
  i3586.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3587[14], i3586.stencilRef)
  i3586.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3587[15], i3586.stencilReadMask)
  i3586.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3587[16], i3586.stencilWriteMask)
  i3586.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3587[17], i3586.stencilOp)
  i3586.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3587[18], i3586.stencilOpFront)
  i3586.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3587[19], i3586.stencilOpBack)
  var i3589 = i3587[20]
  var i3588 = []
  for(var i = 0; i < i3589.length; i += 1) {
    i3588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3589[i + 0]) );
  }
  i3586.tags = i3588
  var i3591 = i3587[21]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 1) {
    i3590.push( i3591[i + 0] );
  }
  i3586.passDefinedKeywords = i3590
  var i3593 = i3587[22]
  var i3592 = []
  for(var i = 0; i < i3593.length; i += 1) {
    i3592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3593[i + 0]) );
  }
  i3586.passDefinedKeywordGroups = i3592
  var i3595 = i3587[23]
  var i3594 = []
  for(var i = 0; i < i3595.length; i += 1) {
    i3594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3595[i + 0]) );
  }
  i3586.variants = i3594
  var i3597 = i3587[24]
  var i3596 = []
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3597[i + 0]) );
  }
  i3586.excludedVariants = i3596
  i3586.hasDepthReader = !!i3587[25]
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3599 = data
  i3598.val = i3599[0]
  i3598.name = i3599[1]
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3601 = data
  i3600.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3601[0], i3600.src)
  i3600.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3601[1], i3600.dst)
  i3600.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3601[2], i3600.op)
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3603 = data
  i3602.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3603[0], i3602.pass)
  i3602.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3603[1], i3602.fail)
  i3602.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3603[2], i3602.zFail)
  i3602.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3603[3], i3602.comp)
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3607 = data
  i3606.name = i3607[0]
  i3606.value = i3607[1]
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3611 = data
  var i3613 = i3611[0]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.push( i3613[i + 0] );
  }
  i3610.keywords = i3612
  i3610.hasDiscard = !!i3611[1]
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3617 = data
  i3616.passId = i3617[0]
  i3616.subShaderIndex = i3617[1]
  var i3619 = i3617[2]
  var i3618 = []
  for(var i = 0; i < i3619.length; i += 1) {
    i3618.push( i3619[i + 0] );
  }
  i3616.keywords = i3618
  i3616.vertexProgram = i3617[3]
  i3616.fragmentProgram = i3617[4]
  i3616.exportedForWebGl2 = !!i3617[5]
  i3616.readDepth = !!i3617[6]
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3623 = data
  request.r(i3623[0], i3623[1], 0, i3622, 'shader')
  i3622.pass = i3623[2]
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3627 = data
  i3626.name = i3627[0]
  i3626.type = i3627[1]
  i3626.value = new pc.Vec4( i3627[2], i3627[3], i3627[4], i3627[5] )
  i3626.textureValue = i3627[6]
  i3626.shaderPropertyFlag = i3627[7]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3629 = data
  i3628.name = i3629[0]
  request.r(i3629[1], i3629[2], 0, i3628, 'texture')
  i3628.aabb = i3629[3]
  i3628.vertices = i3629[4]
  i3628.triangles = i3629[5]
  i3628.textureRect = UnityEngine.Rect.MinMaxRect(i3629[6], i3629[7], i3629[8], i3629[9])
  i3628.packedRect = UnityEngine.Rect.MinMaxRect(i3629[10], i3629[11], i3629[12], i3629[13])
  i3628.border = new pc.Vec4( i3629[14], i3629[15], i3629[16], i3629[17] )
  i3628.transparency = i3629[18]
  i3628.bounds = i3629[19]
  i3628.pixelsPerUnit = i3629[20]
  i3628.textureWidth = i3629[21]
  i3628.textureHeight = i3629[22]
  i3628.nativeSize = new pc.Vec2( i3629[23], i3629[24] )
  i3628.pivot = new pc.Vec2( i3629[25], i3629[26] )
  i3628.textureRectOffset = new pc.Vec2( i3629[27], i3629[28] )
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3631 = data
  i3630.name = i3631[0]
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3633 = data
  i3632.name = i3633[0]
  i3632.ascent = i3633[1]
  i3632.originalLineHeight = i3633[2]
  i3632.fontSize = i3633[3]
  var i3635 = i3633[4]
  var i3634 = []
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3635[i + 0]) );
  }
  i3632.characterInfo = i3634
  request.r(i3633[5], i3633[6], 0, i3632, 'texture')
  i3632.originalFontSize = i3633[7]
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3639 = data
  i3638.index = i3639[0]
  i3638.advance = i3639[1]
  i3638.bearing = i3639[2]
  i3638.glyphWidth = i3639[3]
  i3638.glyphHeight = i3639[4]
  i3638.minX = i3639[5]
  i3638.maxX = i3639[6]
  i3638.minY = i3639[7]
  i3638.maxY = i3639[8]
  i3638.uvBottomLeftX = i3639[9]
  i3638.uvBottomLeftY = i3639[10]
  i3638.uvBottomRightX = i3639[11]
  i3638.uvBottomRightY = i3639[12]
  i3638.uvTopLeftX = i3639[13]
  i3638.uvTopLeftY = i3639[14]
  i3638.uvTopRightX = i3639[15]
  i3638.uvTopRightY = i3639[16]
  return i3638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3641 = data
  var i3643 = i3641[0]
  var i3642 = []
  for(var i = 0; i < i3643.length; i += 1) {
    i3642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3643[i + 0]) );
  }
  i3640.files = i3642
  i3640.componentToPrefabIds = i3641[1]
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3647 = data
  i3646.path = i3647[0]
  request.r(i3647[1], i3647[2], 0, i3646, 'unityObject')
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3649 = data
  var i3651 = i3649[0]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3651[i + 0]) );
  }
  i3648.scriptsExecutionOrder = i3650
  var i3653 = i3649[1]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 1) {
    i3652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3653[i + 0]) );
  }
  i3648.sortingLayers = i3652
  var i3655 = i3649[2]
  var i3654 = []
  for(var i = 0; i < i3655.length; i += 1) {
    i3654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3655[i + 0]) );
  }
  i3648.cullingLayers = i3654
  i3648.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3649[3], i3648.timeSettings)
  i3648.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3649[4], i3648.physicsSettings)
  i3648.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3649[5], i3648.physics2DSettings)
  i3648.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3649[6], i3648.qualitySettings)
  i3648.enableRealtimeShadows = !!i3649[7]
  i3648.enableAutoInstancing = !!i3649[8]
  i3648.enableDynamicBatching = !!i3649[9]
  i3648.lightmapEncodingQuality = i3649[10]
  i3648.desiredColorSpace = i3649[11]
  var i3657 = i3649[12]
  var i3656 = []
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.push( i3657[i + 0] );
  }
  i3648.allTags = i3656
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3661 = data
  i3660.name = i3661[0]
  i3660.value = i3661[1]
  return i3660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3665 = data
  i3664.id = i3665[0]
  i3664.name = i3665[1]
  i3664.value = i3665[2]
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3669 = data
  i3668.id = i3669[0]
  i3668.name = i3669[1]
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3671 = data
  i3670.fixedDeltaTime = i3671[0]
  i3670.maximumDeltaTime = i3671[1]
  i3670.timeScale = i3671[2]
  i3670.maximumParticleTimestep = i3671[3]
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3673 = data
  i3672.gravity = new pc.Vec3( i3673[0], i3673[1], i3673[2] )
  i3672.defaultSolverIterations = i3673[3]
  i3672.bounceThreshold = i3673[4]
  i3672.autoSyncTransforms = !!i3673[5]
  i3672.autoSimulation = !!i3673[6]
  var i3675 = i3673[7]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3675[i + 0]) );
  }
  i3672.collisionMatrix = i3674
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3679 = data
  i3678.enabled = !!i3679[0]
  i3678.layerId = i3679[1]
  i3678.otherLayerId = i3679[2]
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3681 = data
  request.r(i3681[0], i3681[1], 0, i3680, 'material')
  i3680.gravity = new pc.Vec2( i3681[2], i3681[3] )
  i3680.positionIterations = i3681[4]
  i3680.velocityIterations = i3681[5]
  i3680.velocityThreshold = i3681[6]
  i3680.maxLinearCorrection = i3681[7]
  i3680.maxAngularCorrection = i3681[8]
  i3680.maxTranslationSpeed = i3681[9]
  i3680.maxRotationSpeed = i3681[10]
  i3680.baumgarteScale = i3681[11]
  i3680.baumgarteTOIScale = i3681[12]
  i3680.timeToSleep = i3681[13]
  i3680.linearSleepTolerance = i3681[14]
  i3680.angularSleepTolerance = i3681[15]
  i3680.defaultContactOffset = i3681[16]
  i3680.autoSimulation = !!i3681[17]
  i3680.queriesHitTriggers = !!i3681[18]
  i3680.queriesStartInColliders = !!i3681[19]
  i3680.callbacksOnDisable = !!i3681[20]
  i3680.reuseCollisionCallbacks = !!i3681[21]
  i3680.autoSyncTransforms = !!i3681[22]
  var i3683 = i3681[23]
  var i3682 = []
  for(var i = 0; i < i3683.length; i += 1) {
    i3682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3683[i + 0]) );
  }
  i3680.collisionMatrix = i3682
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3687 = data
  i3686.enabled = !!i3687[0]
  i3686.layerId = i3687[1]
  i3686.otherLayerId = i3687[2]
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3689 = data
  var i3691 = i3689[0]
  var i3690 = []
  for(var i = 0; i < i3691.length; i += 1) {
    i3690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3691[i + 0]) );
  }
  i3688.qualityLevels = i3690
  var i3693 = i3689[1]
  var i3692 = []
  for(var i = 0; i < i3693.length; i += 1) {
    i3692.push( i3693[i + 0] );
  }
  i3688.names = i3692
  i3688.shadows = i3689[2]
  i3688.anisotropicFiltering = i3689[3]
  i3688.antiAliasing = i3689[4]
  i3688.lodBias = i3689[5]
  i3688.shadowCascades = i3689[6]
  i3688.shadowDistance = i3689[7]
  i3688.shadowmaskMode = i3689[8]
  i3688.shadowProjection = i3689[9]
  i3688.shadowResolution = i3689[10]
  i3688.softParticles = !!i3689[11]
  i3688.softVegetation = !!i3689[12]
  i3688.activeColorSpace = i3689[13]
  i3688.desiredColorSpace = i3689[14]
  i3688.masterTextureLimit = i3689[15]
  i3688.maxQueuedFrames = i3689[16]
  i3688.particleRaycastBudget = i3689[17]
  i3688.pixelLightCount = i3689[18]
  i3688.realtimeReflectionProbes = !!i3689[19]
  i3688.shadowCascade2Split = i3689[20]
  i3688.shadowCascade4Split = new pc.Vec3( i3689[21], i3689[22], i3689[23] )
  i3688.streamingMipmapsActive = !!i3689[24]
  i3688.vSyncCount = i3689[25]
  i3688.asyncUploadBufferSize = i3689[26]
  i3688.asyncUploadTimeSlice = i3689[27]
  i3688.billboardsFaceCameraPosition = !!i3689[28]
  i3688.shadowNearPlaneOffset = i3689[29]
  i3688.streamingMipmapsMemoryBudget = i3689[30]
  i3688.maximumLODLevel = i3689[31]
  i3688.streamingMipmapsAddAllCameras = !!i3689[32]
  i3688.streamingMipmapsMaxLevelReduction = i3689[33]
  i3688.streamingMipmapsRenderersPerFrame = i3689[34]
  i3688.resolutionScalingFixedDPIFactor = i3689[35]
  i3688.streamingMipmapsMaxFileIORequests = i3689[36]
  i3688.currentQualityLevel = i3689[37]
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3699 = data
  i3698.weight = i3699[0]
  i3698.vertices = i3699[1]
  i3698.normals = i3699[2]
  i3698.tangents = i3699[3]
  return i3698
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[76],"77":[34],"78":[29],"79":[29],"80":[29],"81":[29],"82":[29],"83":[29],"84":[29],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[34],"100":[10],"101":[102],"103":[102],"20":[0],"104":[14],"16":[14],"105":[25],"106":[8],"107":[25],"108":[0],"109":[34],"110":[34],"26":[25],"111":[34],"112":[113],"114":[0],"115":[0],"22":[20],"3":[1,0],"60":[0],"21":[20],"116":[0],"117":[0],"118":[0],"119":[0],"120":[0],"121":[0],"122":[0],"123":[0],"124":[0],"125":[1,0],"126":[0],"127":[0],"128":[0],"129":[0],"53":[1,0],"130":[0],"131":[62],"132":[62],"63":[62],"133":[62],"134":[34],"135":[34],"136":[113],"137":[113],"138":[34],"139":[140]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","VariableJoystick","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","CFX_AutoDestructShuriken","UnityEngine.BoxCollider","BehaviourAI.TankAI","ExclamationMark","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.SpriteRenderer","TitnSprite","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Rigidbody","Howitzer.Projectile","UnityEngine.CapsuleCollider","UnityEngine.LODGroup","UnityEngine.Cubemap","UnityEngine.Camera","UnityEngine.AudioListener","Howitzer.LookAtCrosshair","InteractiveArt","UnityEngine.GameObject","Howitzer.LookAtReticle","FollowBullet","HandAnimation","UI.PlayerUIController","UnityEngine.UI.Button","Cross","TutorialHand2","Howitzer.PlayerZoom","Howitzer.PlayerShooting","Howitzer.PlayerShootingCooldown","ManagerCamers","TimeController","Fabric.TanksFabric","Pumping","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","UnityEngine.Font","TutorialHand","UI.CrosshairMovement","UI.EndCardAnimation","UnityEngine.CanvasGroup","UnityEngine.UI.AspectRatioFitter","UI.ButtonPulse","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Bootstraps.Bootstrap","Bootstraps.ScenarioGame","UI.TankKillStatistics","Shopping","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CFX_AutoStopLoopedEffect","CFX_LightIntensityFade","WFX_BulletHoleDecal","WFX_LightFlicker","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.PostProcessing.PostProcessLayer","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.7f1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/12/2025 18:23:14";

Deserializers.lunaDaysRunning = "8.7";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3637";

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

Deserializers.buildID = "7d5fc630-888c-4aac-bcd2-b2c0d97a4d7f";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

