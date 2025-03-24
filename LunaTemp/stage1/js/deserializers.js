var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4050 = root || request.c( 'UnityEngine.JointSpring' )
  var i4051 = data
  i4050.spring = i4051[0]
  i4050.damper = i4051[1]
  i4050.targetPosition = i4051[2]
  return i4050
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4052 = root || request.c( 'UnityEngine.JointMotor' )
  var i4053 = data
  i4052.m_TargetVelocity = i4053[0]
  i4052.m_Force = i4053[1]
  i4052.m_FreeSpin = i4053[2]
  return i4052
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4054 = root || request.c( 'UnityEngine.JointLimits' )
  var i4055 = data
  i4054.m_Min = i4055[0]
  i4054.m_Max = i4055[1]
  i4054.m_Bounciness = i4055[2]
  i4054.m_BounceMinVelocity = i4055[3]
  i4054.m_ContactDistance = i4055[4]
  i4054.minBounce = i4055[5]
  i4054.maxBounce = i4055[6]
  return i4054
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4056 = root || request.c( 'UnityEngine.JointDrive' )
  var i4057 = data
  i4056.m_PositionSpring = i4057[0]
  i4056.m_PositionDamper = i4057[1]
  i4056.m_MaximumForce = i4057[2]
  i4056.m_UseAcceleration = i4057[3]
  return i4056
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4058 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4059 = data
  i4058.m_Spring = i4059[0]
  i4058.m_Damper = i4059[1]
  return i4058
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4060 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4061 = data
  i4060.m_Limit = i4061[0]
  i4060.m_Bounciness = i4061[1]
  i4060.m_ContactDistance = i4061[2]
  return i4060
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4062 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4063 = data
  i4062.m_ExtremumSlip = i4063[0]
  i4062.m_ExtremumValue = i4063[1]
  i4062.m_AsymptoteSlip = i4063[2]
  i4062.m_AsymptoteValue = i4063[3]
  i4062.m_Stiffness = i4063[4]
  return i4062
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4064 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4065 = data
  i4064.m_LowerAngle = i4065[0]
  i4064.m_UpperAngle = i4065[1]
  return i4064
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4066 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4067 = data
  i4066.m_MotorSpeed = i4067[0]
  i4066.m_MaximumMotorTorque = i4067[1]
  return i4066
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4068 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4069 = data
  i4068.m_DampingRatio = i4069[0]
  i4068.m_Frequency = i4069[1]
  i4068.m_Angle = i4069[2]
  return i4068
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4070 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4071 = data
  i4070.m_LowerTranslation = i4071[0]
  i4070.m_UpperTranslation = i4071[1]
  return i4070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4073 = data
  i4072.pivot = new pc.Vec2( i4073[0], i4073[1] )
  i4072.anchorMin = new pc.Vec2( i4073[2], i4073[3] )
  i4072.anchorMax = new pc.Vec2( i4073[4], i4073[5] )
  i4072.sizeDelta = new pc.Vec2( i4073[6], i4073[7] )
  i4072.anchoredPosition3D = new pc.Vec3( i4073[8], i4073[9], i4073[10] )
  i4072.rotation = new pc.Quat(i4073[11], i4073[12], i4073[13], i4073[14])
  i4072.scale = new pc.Vec3( i4073[15], i4073[16], i4073[17] )
  return i4072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4075 = data
  i4074.cullTransparentMesh = !!i4075[0]
  return i4074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4077 = data
  i4076.name = i4077[0]
  i4076.tagId = i4077[1]
  i4076.enabled = !!i4077[2]
  i4076.isStatic = !!i4077[3]
  i4076.layer = i4077[4]
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4079 = data
  i4078.name = i4079[0]
  i4078.width = i4079[1]
  i4078.height = i4079[2]
  i4078.mipmapCount = i4079[3]
  i4078.anisoLevel = i4079[4]
  i4078.filterMode = i4079[5]
  i4078.hdr = !!i4079[6]
  i4078.format = i4079[7]
  i4078.wrapMode = i4079[8]
  i4078.alphaIsTransparency = !!i4079[9]
  i4078.alphaSource = i4079[10]
  i4078.graphicsFormat = i4079[11]
  i4078.sRGBTexture = !!i4079[12]
  i4078.desiredColorSpace = i4079[13]
  i4078.wrapU = i4079[14]
  i4078.wrapV = i4079[15]
  return i4078
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4080 = root || request.c( 'UnityEngine.UI.Image' )
  var i4081 = data
  request.r(i4081[0], i4081[1], 0, i4080, 'm_Sprite')
  i4080.m_Type = i4081[2]
  i4080.m_PreserveAspect = !!i4081[3]
  i4080.m_FillCenter = !!i4081[4]
  i4080.m_FillMethod = i4081[5]
  i4080.m_FillAmount = i4081[6]
  i4080.m_FillClockwise = !!i4081[7]
  i4080.m_FillOrigin = i4081[8]
  i4080.m_UseSpriteMesh = !!i4081[9]
  i4080.m_PixelsPerUnitMultiplier = i4081[10]
  request.r(i4081[11], i4081[12], 0, i4080, 'm_Material')
  i4080.m_Maskable = !!i4081[13]
  i4080.m_Color = new pc.Color(i4081[14], i4081[15], i4081[16], i4081[17])
  i4080.m_RaycastTarget = !!i4081[18]
  i4080.m_RaycastPadding = new pc.Vec4( i4081[19], i4081[20], i4081[21], i4081[22] )
  return i4080
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i4082 = root || request.c( 'VariableJoystick' )
  var i4083 = data
  request.r(i4083[0], i4083[1], 0, i4082, 'handle')
  i4082.moveThreshold = i4083[2]
  i4082.joystickType = i4083[3]
  request.r(i4083[4], i4083[5], 0, i4082, 'background')
  i4082.handleRange = i4083[6]
  i4082.deadZone = i4083[7]
  i4082.axisOptions = i4083[8]
  i4082.snapX = !!i4083[9]
  i4082.snapY = !!i4083[10]
  return i4082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4085 = data
  i4084.position = new pc.Vec3( i4085[0], i4085[1], i4085[2] )
  i4084.scale = new pc.Vec3( i4085[3], i4085[4], i4085[5] )
  i4084.rotation = new pc.Quat(i4085[6], i4085[7], i4085[8], i4085[9])
  return i4084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4087 = data
  request.r(i4087[0], i4087[1], 0, i4086, 'sharedMesh')
  return i4086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4089 = data
  request.r(i4089[0], i4089[1], 0, i4088, 'additionalVertexStreams')
  i4088.enabled = !!i4089[2]
  request.r(i4089[3], i4089[4], 0, i4088, 'sharedMaterial')
  var i4091 = i4089[5]
  var i4090 = []
  for(var i = 0; i < i4091.length; i += 2) {
  request.r(i4091[i + 0], i4091[i + 1], 2, i4090, '')
  }
  i4088.sharedMaterials = i4090
  i4088.receiveShadows = !!i4089[6]
  i4088.shadowCastingMode = i4089[7]
  i4088.sortingLayerID = i4089[8]
  i4088.sortingOrder = i4089[9]
  i4088.lightmapIndex = i4089[10]
  i4088.lightmapSceneIndex = i4089[11]
  i4088.lightmapScaleOffset = new pc.Vec4( i4089[12], i4089[13], i4089[14], i4089[15] )
  i4088.lightProbeUsage = i4089[16]
  i4088.reflectionProbeUsage = i4089[17]
  return i4088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4095 = data
  i4094.name = i4095[0]
  i4094.halfPrecision = !!i4095[1]
  i4094.useUInt32IndexFormat = !!i4095[2]
  i4094.vertexCount = i4095[3]
  i4094.aabb = i4095[4]
  var i4097 = i4095[5]
  var i4096 = []
  for(var i = 0; i < i4097.length; i += 1) {
    i4096.push( !!i4097[i + 0] );
  }
  i4094.streams = i4096
  i4094.vertices = i4095[6]
  var i4099 = i4095[7]
  var i4098 = []
  for(var i = 0; i < i4099.length; i += 1) {
    i4098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4099[i + 0]) );
  }
  i4094.subMeshes = i4098
  var i4101 = i4095[8]
  var i4100 = []
  for(var i = 0; i < i4101.length; i += 16) {
    i4100.push( new pc.Mat4().setData(i4101[i + 0], i4101[i + 1], i4101[i + 2], i4101[i + 3],  i4101[i + 4], i4101[i + 5], i4101[i + 6], i4101[i + 7],  i4101[i + 8], i4101[i + 9], i4101[i + 10], i4101[i + 11],  i4101[i + 12], i4101[i + 13], i4101[i + 14], i4101[i + 15]) );
  }
  i4094.bindposes = i4100
  var i4103 = i4095[9]
  var i4102 = []
  for(var i = 0; i < i4103.length; i += 1) {
    i4102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4103[i + 0]) );
  }
  i4094.blendShapes = i4102
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4109 = data
  i4108.triangles = i4109[0]
  return i4108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4115 = data
  i4114.name = i4115[0]
  var i4117 = i4115[1]
  var i4116 = []
  for(var i = 0; i < i4117.length; i += 1) {
    i4116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4117[i + 0]) );
  }
  i4114.frames = i4116
  return i4114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4118 = root || new pc.UnityMaterial()
  var i4119 = data
  i4118.name = i4119[0]
  request.r(i4119[1], i4119[2], 0, i4118, 'shader')
  i4118.renderQueue = i4119[3]
  i4118.enableInstancing = !!i4119[4]
  var i4121 = i4119[5]
  var i4120 = []
  for(var i = 0; i < i4121.length; i += 1) {
    i4120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4121[i + 0]) );
  }
  i4118.floatParameters = i4120
  var i4123 = i4119[6]
  var i4122 = []
  for(var i = 0; i < i4123.length; i += 1) {
    i4122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4123[i + 0]) );
  }
  i4118.colorParameters = i4122
  var i4125 = i4119[7]
  var i4124 = []
  for(var i = 0; i < i4125.length; i += 1) {
    i4124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4125[i + 0]) );
  }
  i4118.vectorParameters = i4124
  var i4127 = i4119[8]
  var i4126 = []
  for(var i = 0; i < i4127.length; i += 1) {
    i4126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4127[i + 0]) );
  }
  i4118.textureParameters = i4126
  var i4129 = i4119[9]
  var i4128 = []
  for(var i = 0; i < i4129.length; i += 1) {
    i4128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4129[i + 0]) );
  }
  i4118.materialFlags = i4128
  return i4118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4133 = data
  i4132.name = i4133[0]
  i4132.value = i4133[1]
  return i4132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4137 = data
  i4136.name = i4137[0]
  i4136.value = new pc.Color(i4137[1], i4137[2], i4137[3], i4137[4])
  return i4136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4141 = data
  i4140.name = i4141[0]
  i4140.value = new pc.Vec4( i4141[1], i4141[2], i4141[3], i4141[4] )
  return i4140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4145 = data
  i4144.name = i4145[0]
  request.r(i4145[1], i4145[2], 0, i4144, 'value')
  return i4144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4149 = data
  i4148.name = i4149[0]
  i4148.enabled = !!i4149[1]
  return i4148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4151 = data
  i4150.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4151[0], i4150.main)
  i4150.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4151[1], i4150.colorBySpeed)
  i4150.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4151[2], i4150.colorOverLifetime)
  i4150.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4151[3], i4150.emission)
  i4150.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4151[4], i4150.rotationBySpeed)
  i4150.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4151[5], i4150.rotationOverLifetime)
  i4150.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4151[6], i4150.shape)
  i4150.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4151[7], i4150.sizeBySpeed)
  i4150.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4151[8], i4150.sizeOverLifetime)
  i4150.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4151[9], i4150.textureSheetAnimation)
  i4150.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4151[10], i4150.velocityOverLifetime)
  i4150.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4151[11], i4150.noise)
  i4150.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4151[12], i4150.inheritVelocity)
  i4150.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4151[13], i4150.forceOverLifetime)
  i4150.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4151[14], i4150.limitVelocityOverLifetime)
  i4150.useAutoRandomSeed = !!i4151[15]
  i4150.randomSeed = i4151[16]
  return i4150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4152 = root || new pc.ParticleSystemMain()
  var i4153 = data
  i4152.duration = i4153[0]
  i4152.loop = !!i4153[1]
  i4152.prewarm = !!i4153[2]
  i4152.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4153[3], i4152.startDelay)
  i4152.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4153[4], i4152.startLifetime)
  i4152.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4153[5], i4152.startSpeed)
  i4152.startSize3D = !!i4153[6]
  i4152.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4153[7], i4152.startSizeX)
  i4152.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4153[8], i4152.startSizeY)
  i4152.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4153[9], i4152.startSizeZ)
  i4152.startRotation3D = !!i4153[10]
  i4152.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4153[11], i4152.startRotationX)
  i4152.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4153[12], i4152.startRotationY)
  i4152.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4153[13], i4152.startRotationZ)
  i4152.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4153[14], i4152.startColor)
  i4152.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4153[15], i4152.gravityModifier)
  i4152.simulationSpace = i4153[16]
  request.r(i4153[17], i4153[18], 0, i4152, 'customSimulationSpace')
  i4152.simulationSpeed = i4153[19]
  i4152.useUnscaledTime = !!i4153[20]
  i4152.scalingMode = i4153[21]
  i4152.playOnAwake = !!i4153[22]
  i4152.maxParticles = i4153[23]
  i4152.emitterVelocityMode = i4153[24]
  i4152.stopAction = i4153[25]
  return i4152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4154 = root || new pc.MinMaxCurve()
  var i4155 = data
  i4154.mode = i4155[0]
  i4154.curveMin = new pc.AnimationCurve( { keys_flow: i4155[1] } )
  i4154.curveMax = new pc.AnimationCurve( { keys_flow: i4155[2] } )
  i4154.curveMultiplier = i4155[3]
  i4154.constantMin = i4155[4]
  i4154.constantMax = i4155[5]
  return i4154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4156 = root || new pc.MinMaxGradient()
  var i4157 = data
  i4156.mode = i4157[0]
  i4156.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4157[1], i4156.gradientMin)
  i4156.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4157[2], i4156.gradientMax)
  i4156.colorMin = new pc.Color(i4157[3], i4157[4], i4157[5], i4157[6])
  i4156.colorMax = new pc.Color(i4157[7], i4157[8], i4157[9], i4157[10])
  return i4156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4159 = data
  i4158.mode = i4159[0]
  var i4161 = i4159[1]
  var i4160 = []
  for(var i = 0; i < i4161.length; i += 1) {
    i4160.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4161[i + 0]) );
  }
  i4158.colorKeys = i4160
  var i4163 = i4159[2]
  var i4162 = []
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4163[i + 0]) );
  }
  i4158.alphaKeys = i4162
  return i4158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4164 = root || new pc.ParticleSystemColorBySpeed()
  var i4165 = data
  i4164.enabled = !!i4165[0]
  i4164.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4165[1], i4164.color)
  i4164.range = new pc.Vec2( i4165[2], i4165[3] )
  return i4164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4169 = data
  i4168.color = new pc.Color(i4169[0], i4169[1], i4169[2], i4169[3])
  i4168.time = i4169[4]
  return i4168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4173 = data
  i4172.alpha = i4173[0]
  i4172.time = i4173[1]
  return i4172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4174 = root || new pc.ParticleSystemColorOverLifetime()
  var i4175 = data
  i4174.enabled = !!i4175[0]
  i4174.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4175[1], i4174.color)
  return i4174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4176 = root || new pc.ParticleSystemEmitter()
  var i4177 = data
  i4176.enabled = !!i4177[0]
  i4176.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4177[1], i4176.rateOverTime)
  i4176.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4177[2], i4176.rateOverDistance)
  var i4179 = i4177[3]
  var i4178 = []
  for(var i = 0; i < i4179.length; i += 1) {
    i4178.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4179[i + 0]) );
  }
  i4176.bursts = i4178
  return i4176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4182 = root || new pc.ParticleSystemBurst()
  var i4183 = data
  i4182.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4183[0], i4182.count)
  i4182.cycleCount = i4183[1]
  i4182.minCount = i4183[2]
  i4182.maxCount = i4183[3]
  i4182.repeatInterval = i4183[4]
  i4182.time = i4183[5]
  return i4182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4184 = root || new pc.ParticleSystemRotationBySpeed()
  var i4185 = data
  i4184.enabled = !!i4185[0]
  i4184.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4185[1], i4184.x)
  i4184.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4185[2], i4184.y)
  i4184.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4185[3], i4184.z)
  i4184.separateAxes = !!i4185[4]
  i4184.range = new pc.Vec2( i4185[5], i4185[6] )
  return i4184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4186 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4187 = data
  i4186.enabled = !!i4187[0]
  i4186.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4187[1], i4186.x)
  i4186.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4187[2], i4186.y)
  i4186.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4187[3], i4186.z)
  i4186.separateAxes = !!i4187[4]
  return i4186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4188 = root || new pc.ParticleSystemShape()
  var i4189 = data
  i4188.enabled = !!i4189[0]
  i4188.shapeType = i4189[1]
  i4188.randomDirectionAmount = i4189[2]
  i4188.sphericalDirectionAmount = i4189[3]
  i4188.randomPositionAmount = i4189[4]
  i4188.alignToDirection = !!i4189[5]
  i4188.radius = i4189[6]
  i4188.radiusMode = i4189[7]
  i4188.radiusSpread = i4189[8]
  i4188.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4189[9], i4188.radiusSpeed)
  i4188.radiusThickness = i4189[10]
  i4188.angle = i4189[11]
  i4188.length = i4189[12]
  i4188.boxThickness = new pc.Vec3( i4189[13], i4189[14], i4189[15] )
  i4188.meshShapeType = i4189[16]
  request.r(i4189[17], i4189[18], 0, i4188, 'mesh')
  request.r(i4189[19], i4189[20], 0, i4188, 'meshRenderer')
  request.r(i4189[21], i4189[22], 0, i4188, 'skinnedMeshRenderer')
  i4188.useMeshMaterialIndex = !!i4189[23]
  i4188.meshMaterialIndex = i4189[24]
  i4188.useMeshColors = !!i4189[25]
  i4188.normalOffset = i4189[26]
  i4188.arc = i4189[27]
  i4188.arcMode = i4189[28]
  i4188.arcSpread = i4189[29]
  i4188.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4189[30], i4188.arcSpeed)
  i4188.donutRadius = i4189[31]
  i4188.position = new pc.Vec3( i4189[32], i4189[33], i4189[34] )
  i4188.rotation = new pc.Vec3( i4189[35], i4189[36], i4189[37] )
  i4188.scale = new pc.Vec3( i4189[38], i4189[39], i4189[40] )
  return i4188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4190 = root || new pc.ParticleSystemSizeBySpeed()
  var i4191 = data
  i4190.enabled = !!i4191[0]
  i4190.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4191[1], i4190.x)
  i4190.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4191[2], i4190.y)
  i4190.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4191[3], i4190.z)
  i4190.separateAxes = !!i4191[4]
  i4190.range = new pc.Vec2( i4191[5], i4191[6] )
  return i4190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4192 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4193 = data
  i4192.enabled = !!i4193[0]
  i4192.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[1], i4192.x)
  i4192.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[2], i4192.y)
  i4192.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[3], i4192.z)
  i4192.separateAxes = !!i4193[4]
  return i4192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4194 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4195 = data
  i4194.enabled = !!i4195[0]
  i4194.mode = i4195[1]
  i4194.animation = i4195[2]
  i4194.numTilesX = i4195[3]
  i4194.numTilesY = i4195[4]
  i4194.useRandomRow = !!i4195[5]
  i4194.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4195[6], i4194.frameOverTime)
  i4194.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4195[7], i4194.startFrame)
  i4194.cycleCount = i4195[8]
  i4194.rowIndex = i4195[9]
  i4194.flipU = i4195[10]
  i4194.flipV = i4195[11]
  i4194.spriteCount = i4195[12]
  var i4197 = i4195[13]
  var i4196 = []
  for(var i = 0; i < i4197.length; i += 2) {
  request.r(i4197[i + 0], i4197[i + 1], 2, i4196, '')
  }
  i4194.sprites = i4196
  return i4194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4200 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4201 = data
  i4200.enabled = !!i4201[0]
  i4200.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[1], i4200.x)
  i4200.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[2], i4200.y)
  i4200.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[3], i4200.z)
  i4200.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[4], i4200.radial)
  i4200.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[5], i4200.speedModifier)
  i4200.space = i4201[6]
  i4200.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[7], i4200.orbitalX)
  i4200.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[8], i4200.orbitalY)
  i4200.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[9], i4200.orbitalZ)
  i4200.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[10], i4200.orbitalOffsetX)
  i4200.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[11], i4200.orbitalOffsetY)
  i4200.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[12], i4200.orbitalOffsetZ)
  return i4200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4202 = root || new pc.ParticleSystemNoise()
  var i4203 = data
  i4202.enabled = !!i4203[0]
  i4202.separateAxes = !!i4203[1]
  i4202.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4203[2], i4202.strengthX)
  i4202.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4203[3], i4202.strengthY)
  i4202.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4203[4], i4202.strengthZ)
  i4202.frequency = i4203[5]
  i4202.damping = !!i4203[6]
  i4202.octaveCount = i4203[7]
  i4202.octaveMultiplier = i4203[8]
  i4202.octaveScale = i4203[9]
  i4202.quality = i4203[10]
  i4202.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4203[11], i4202.scrollSpeed)
  i4202.scrollSpeedMultiplier = i4203[12]
  i4202.remapEnabled = !!i4203[13]
  i4202.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4203[14], i4202.remapX)
  i4202.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4203[15], i4202.remapY)
  i4202.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4203[16], i4202.remapZ)
  i4202.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4203[17], i4202.positionAmount)
  i4202.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4203[18], i4202.rotationAmount)
  i4202.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4203[19], i4202.sizeAmount)
  return i4202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4204 = root || new pc.ParticleSystemInheritVelocity()
  var i4205 = data
  i4204.enabled = !!i4205[0]
  i4204.mode = i4205[1]
  i4204.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4205[2], i4204.curve)
  return i4204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4206 = root || new pc.ParticleSystemForceOverLifetime()
  var i4207 = data
  i4206.enabled = !!i4207[0]
  i4206.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4207[1], i4206.x)
  i4206.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4207[2], i4206.y)
  i4206.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4207[3], i4206.z)
  i4206.space = i4207[4]
  i4206.randomized = !!i4207[5]
  return i4206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4208 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4209 = data
  i4208.enabled = !!i4209[0]
  i4208.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4209[1], i4208.limit)
  i4208.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4209[2], i4208.limitX)
  i4208.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4209[3], i4208.limitY)
  i4208.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4209[4], i4208.limitZ)
  i4208.dampen = i4209[5]
  i4208.separateAxes = !!i4209[6]
  i4208.space = i4209[7]
  i4208.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4209[8], i4208.drag)
  i4208.multiplyDragByParticleSize = !!i4209[9]
  i4208.multiplyDragByParticleVelocity = !!i4209[10]
  return i4208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4211 = data
  i4210.enabled = !!i4211[0]
  request.r(i4211[1], i4211[2], 0, i4210, 'sharedMaterial')
  var i4213 = i4211[3]
  var i4212 = []
  for(var i = 0; i < i4213.length; i += 2) {
  request.r(i4213[i + 0], i4213[i + 1], 2, i4212, '')
  }
  i4210.sharedMaterials = i4212
  i4210.receiveShadows = !!i4211[4]
  i4210.shadowCastingMode = i4211[5]
  i4210.sortingLayerID = i4211[6]
  i4210.sortingOrder = i4211[7]
  i4210.lightmapIndex = i4211[8]
  i4210.lightmapSceneIndex = i4211[9]
  i4210.lightmapScaleOffset = new pc.Vec4( i4211[10], i4211[11], i4211[12], i4211[13] )
  i4210.lightProbeUsage = i4211[14]
  i4210.reflectionProbeUsage = i4211[15]
  request.r(i4211[16], i4211[17], 0, i4210, 'mesh')
  i4210.meshCount = i4211[18]
  i4210.activeVertexStreamsCount = i4211[19]
  i4210.alignment = i4211[20]
  i4210.renderMode = i4211[21]
  i4210.sortMode = i4211[22]
  i4210.lengthScale = i4211[23]
  i4210.velocityScale = i4211[24]
  i4210.cameraVelocityScale = i4211[25]
  i4210.normalDirection = i4211[26]
  i4210.sortingFudge = i4211[27]
  i4210.minParticleSize = i4211[28]
  i4210.maxParticleSize = i4211[29]
  i4210.pivot = new pc.Vec3( i4211[30], i4211[31], i4211[32] )
  request.r(i4211[33], i4211[34], 0, i4210, 'trailMaterial')
  return i4210
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i4214 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i4215 = data
  i4214.OnlyDeactivate = !!i4215[0]
  return i4214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4217 = data
  i4216.center = new pc.Vec3( i4217[0], i4217[1], i4217[2] )
  i4216.size = new pc.Vec3( i4217[3], i4217[4], i4217[5] )
  i4216.enabled = !!i4217[6]
  i4216.isTrigger = !!i4217[7]
  request.r(i4217[8], i4217[9], 0, i4216, 'material')
  return i4216
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i4218 = root || request.c( 'BehaviourAI.TankAI' )
  var i4219 = data
  i4218.stopDistance = i4219[0]
  i4218.rotationSpeed = i4219[1]
  i4218.moveSpeed = i4219[2]
  request.r(i4219[3], i4219[4], 0, i4218, '_exclamationMark')
  request.r(i4219[5], i4219[6], 0, i4218, '_guidance')
  return i4218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4221 = data
  i4220.enabled = !!i4221[0]
  i4220.planeDistance = i4221[1]
  i4220.referencePixelsPerUnit = i4221[2]
  i4220.isFallbackOverlay = !!i4221[3]
  i4220.renderMode = i4221[4]
  i4220.renderOrder = i4221[5]
  i4220.sortingLayerName = i4221[6]
  i4220.sortingOrder = i4221[7]
  i4220.scaleFactor = i4221[8]
  request.r(i4221[9], i4221[10], 0, i4220, 'worldCamera')
  i4220.overrideSorting = !!i4221[11]
  i4220.pixelPerfect = !!i4221[12]
  i4220.targetDisplay = i4221[13]
  i4220.overridePixelPerfect = !!i4221[14]
  return i4220
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4222 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4223 = data
  i4222.m_UiScaleMode = i4223[0]
  i4222.m_ReferencePixelsPerUnit = i4223[1]
  i4222.m_ScaleFactor = i4223[2]
  i4222.m_ReferenceResolution = new pc.Vec2( i4223[3], i4223[4] )
  i4222.m_ScreenMatchMode = i4223[5]
  i4222.m_MatchWidthOrHeight = i4223[6]
  i4222.m_PhysicalUnit = i4223[7]
  i4222.m_FallbackScreenDPI = i4223[8]
  i4222.m_DefaultSpriteDPI = i4223[9]
  i4222.m_DynamicPixelsPerUnit = i4223[10]
  i4222.m_PresetInfoIsWorld = !!i4223[11]
  return i4222
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4224 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4225 = data
  i4224.m_IgnoreReversedGraphics = !!i4225[0]
  i4224.m_BlockingObjects = i4225[1]
  i4224.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4225[2] )
  return i4224
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i4226 = root || request.c( 'ExclamationMark' )
  var i4227 = data
  return i4226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4229 = data
  i4228.enabled = !!i4229[0]
  request.r(i4229[1], i4229[2], 0, i4228, 'sharedMaterial')
  var i4231 = i4229[3]
  var i4230 = []
  for(var i = 0; i < i4231.length; i += 2) {
  request.r(i4231[i + 0], i4231[i + 1], 2, i4230, '')
  }
  i4228.sharedMaterials = i4230
  i4228.receiveShadows = !!i4229[4]
  i4228.shadowCastingMode = i4229[5]
  i4228.sortingLayerID = i4229[6]
  i4228.sortingOrder = i4229[7]
  i4228.lightmapIndex = i4229[8]
  i4228.lightmapSceneIndex = i4229[9]
  i4228.lightmapScaleOffset = new pc.Vec4( i4229[10], i4229[11], i4229[12], i4229[13] )
  i4228.lightProbeUsage = i4229[14]
  i4228.reflectionProbeUsage = i4229[15]
  i4228.color = new pc.Color(i4229[16], i4229[17], i4229[18], i4229[19])
  request.r(i4229[20], i4229[21], 0, i4228, 'sprite')
  i4228.flipX = !!i4229[22]
  i4228.flipY = !!i4229[23]
  i4228.drawMode = i4229[24]
  i4228.size = new pc.Vec2( i4229[25], i4229[26] )
  i4228.tileMode = i4229[27]
  i4228.adaptiveModeThreshold = i4229[28]
  i4228.maskInteraction = i4229[29]
  i4228.spriteSortPoint = i4229[30]
  return i4228
}

Deserializers["TitnSprite"] = function (request, data, root) {
  var i4232 = root || request.c( 'TitnSprite' )
  var i4233 = data
  i4232.offsetDistance = i4233[0]
  i4232.heightOffset = i4233[1]
  request.r(i4233[2], i4233[3], 0, i4232, '_tank')
  return i4232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i4234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i4235 = data
  i4234.enabled = !!i4235[0]
  i4234.type = i4235[1]
  i4234.color = new pc.Color(i4235[2], i4235[3], i4235[4], i4235[5])
  i4234.cullingMask = i4235[6]
  i4234.intensity = i4235[7]
  i4234.range = i4235[8]
  i4234.spotAngle = i4235[9]
  i4234.shadows = i4235[10]
  i4234.shadowNormalBias = i4235[11]
  i4234.shadowBias = i4235[12]
  i4234.shadowStrength = i4235[13]
  i4234.shadowResolution = i4235[14]
  i4234.lightmapBakeType = i4235[15]
  i4234.renderMode = i4235[16]
  request.r(i4235[17], i4235[18], 0, i4234, 'cookie')
  i4234.cookieSize = i4235[19]
  return i4234
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i4236 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i4237 = data
  i4236.m_Version = i4237[0]
  i4236.m_UsePipelineSettings = !!i4237[1]
  i4236.m_AdditionalLightsShadowResolutionTier = i4237[2]
  i4236.m_LightLayerMask = i4237[3]
  i4236.m_RenderingLayers = i4237[4]
  i4236.m_CustomShadowLayers = !!i4237[5]
  i4236.m_ShadowLayerMask = i4237[6]
  i4236.m_ShadowRenderingLayers = i4237[7]
  i4236.m_LightCookieSize = new pc.Vec2( i4237[8], i4237[9] )
  i4236.m_LightCookieOffset = new pc.Vec2( i4237[10], i4237[11] )
  i4236.m_SoftShadowQuality = i4237[12]
  return i4236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4239 = data
  request.r(i4239[0], i4239[1], 0, i4238, 'clip')
  request.r(i4239[2], i4239[3], 0, i4238, 'outputAudioMixerGroup')
  i4238.playOnAwake = !!i4239[4]
  i4238.loop = !!i4239[5]
  i4238.time = i4239[6]
  i4238.volume = i4239[7]
  i4238.pitch = i4239[8]
  i4238.enabled = !!i4239[9]
  return i4238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i4240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i4241 = data
  i4240.mass = i4241[0]
  i4240.drag = i4241[1]
  i4240.angularDrag = i4241[2]
  i4240.useGravity = !!i4241[3]
  i4240.isKinematic = !!i4241[4]
  i4240.constraints = i4241[5]
  i4240.maxAngularVelocity = i4241[6]
  i4240.collisionDetectionMode = i4241[7]
  i4240.interpolation = i4241[8]
  return i4240
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i4242 = root || request.c( 'Howitzer.Projectile' )
  var i4243 = data
  return i4242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i4244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i4245 = data
  i4244.center = new pc.Vec3( i4245[0], i4245[1], i4245[2] )
  i4244.radius = i4245[3]
  i4244.height = i4245[4]
  i4244.direction = i4245[5]
  i4244.enabled = !!i4245[6]
  i4244.isTrigger = !!i4245[7]
  request.r(i4245[8], i4245[9], 0, i4244, 'material')
  return i4244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4247 = data
  i4246.name = i4247[0]
  i4246.atlasId = i4247[1]
  i4246.mipmapCount = i4247[2]
  i4246.hdr = !!i4247[3]
  i4246.size = i4247[4]
  i4246.anisoLevel = i4247[5]
  i4246.filterMode = i4247[6]
  var i4249 = i4247[7]
  var i4248 = []
  for(var i = 0; i < i4249.length; i += 4) {
    i4248.push( UnityEngine.Rect.MinMaxRect(i4249[i + 0], i4249[i + 1], i4249[i + 2], i4249[i + 3]) );
  }
  i4246.rects = i4248
  i4246.wrapU = i4247[8]
  i4246.wrapV = i4247[9]
  return i4246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4253 = data
  i4252.name = i4253[0]
  i4252.index = i4253[1]
  i4252.startup = !!i4253[2]
  return i4252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4255 = data
  i4254.enabled = !!i4255[0]
  i4254.aspect = i4255[1]
  i4254.orthographic = !!i4255[2]
  i4254.orthographicSize = i4255[3]
  i4254.backgroundColor = new pc.Color(i4255[4], i4255[5], i4255[6], i4255[7])
  i4254.nearClipPlane = i4255[8]
  i4254.farClipPlane = i4255[9]
  i4254.fieldOfView = i4255[10]
  i4254.depth = i4255[11]
  i4254.clearFlags = i4255[12]
  i4254.cullingMask = i4255[13]
  i4254.rect = i4255[14]
  request.r(i4255[15], i4255[16], 0, i4254, 'targetTexture')
  i4254.usePhysicalProperties = !!i4255[17]
  i4254.focalLength = i4255[18]
  i4254.sensorSize = new pc.Vec2( i4255[19], i4255[20] )
  i4254.lensShift = new pc.Vec2( i4255[21], i4255[22] )
  i4254.gateFit = i4255[23]
  i4254.commandBufferCount = i4255[24]
  i4254.cameraType = i4255[25]
  return i4254
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i4256 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i4257 = data
  request.r(i4257[0], i4257[1], 0, i4256, 'joystick')
  i4256.minYAngle = i4257[2]
  i4256.maxYAngle = i4257[3]
  i4256.rotationSpeed = i4257[4]
  return i4256
}

Deserializers["InteractiveArt"] = function (request, data, root) {
  var i4258 = root || request.c( 'InteractiveArt' )
  var i4259 = data
  request.r(i4259[0], i4259[1], 0, i4258, 'secondCamera')
  i4258.transitionSpeed = i4259[2]
  request.r(i4259[3], i4259[4], 0, i4258, '_shopping')
  request.r(i4259[5], i4259[6], 0, i4258, '_arm')
  request.r(i4259[7], i4259[8], 0, i4258, '_arta1')
  request.r(i4259[9], i4259[10], 0, i4258, '_arta2')
  request.r(i4259[11], i4259[12], 0, i4258, '_particleSystem')
  return i4258
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i4260 = root || request.c( 'Howitzer.LookAtReticle' )
  var i4261 = data
  request.r(i4261[0], i4261[1], 0, i4260, 'reticle')
  request.r(i4261[2], i4261[3], 0, i4260, 'mainCamera')
  i4260.rotationSpeed = i4261[4]
  i4260.maxPitchAngle = i4261[5]
  i4260.minPitchAngle = i4261[6]
  return i4260
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i4262 = root || request.c( 'FollowBullet' )
  var i4263 = data
  i4262._smoothSpeed = i4263[0]
  i4262._offset = new pc.Vec3( i4263[1], i4263[2], i4263[3] )
  return i4262
}

Deserializers["HandAnimation"] = function (request, data, root) {
  var i4264 = root || request.c( 'HandAnimation' )
  var i4265 = data
  i4264.scaleSpeed = i4265[0]
  i4264.scaleAmount = i4265[1]
  return i4264
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i4266 = root || request.c( 'UI.PlayerUIController' )
  var i4267 = data
  request.r(i4267[0], i4267[1], 0, i4266, 'shootButton')
  request.r(i4267[2], i4267[3], 0, i4266, 'zoomButton')
  request.r(i4267[4], i4267[5], 0, i4266, '_cross')
  request.r(i4267[6], i4267[7], 0, i4266, '_mark')
  request.r(i4267[8], i4267[9], 0, i4266, '_tutorialHand2')
  return i4266
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i4268 = root || request.c( 'Howitzer.PlayerZoom' )
  var i4269 = data
  request.r(i4269[0], i4269[1], 0, i4268, 'crosshair')
  request.r(i4269[2], i4269[3], 0, i4268, 'mainCamera')
  request.r(i4269[4], i4269[5], 0, i4268, 'zoomImage')
  var i4271 = i4269[6]
  var i4270 = []
  for(var i = 0; i < i4271.length; i += 2) {
  request.r(i4271[i + 0], i4271[i + 1], 2, i4270, '')
  }
  i4268.objectsToDisable = i4270
  i4268.zoomFOV = i4269[7]
  i4268.normalFOV = i4269[8]
  i4268.zoomSpeed = i4269[9]
  request.r(i4269[10], i4269[11], 0, i4268, 'joystick')
  i4268.rotationSpeed = i4269[12]
  return i4268
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i4274 = root || request.c( 'Howitzer.PlayerShooting' )
  var i4275 = data
  request.r(i4275[0], i4275[1], 0, i4274, 'playerShootingCooldown')
  request.r(i4275[2], i4275[3], 0, i4274, 'mainCamera')
  request.r(i4275[4], i4275[5], 0, i4274, 'crosshairUI')
  request.r(i4275[6], i4275[7], 0, i4274, 'muzzleFlash')
  request.r(i4275[8], i4275[9], 0, i4274, 'explosionEffect')
  request.r(i4275[10], i4275[11], 0, i4274, 'projectilePosition')
  request.r(i4275[12], i4275[13], 0, i4274, 'prefabProjectile')
  i4274.projectileSpeed = i4275[14]
  i4274.poolSize = i4275[15]
  request.r(i4275[16], i4275[17], 0, i4274, '_followBullet')
  request.r(i4275[18], i4275[19], 0, i4274, '_managerCamers')
  request.r(i4275[20], i4275[21], 0, i4274, '_timeController')
  request.r(i4275[22], i4275[23], 0, i4274, '_playerUIController')
  request.r(i4275[24], i4275[25], 0, i4274, '_tanksFabric')
  request.r(i4275[26], i4275[27], 0, i4274, '_missPoint')
  request.r(i4275[28], i4275[29], 0, i4274, '_pumping')
  request.r(i4275[30], i4275[31], 0, i4274, 'button')
  return i4274
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i4276 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i4277 = data
  request.r(i4277[0], i4277[1], 0, i4276, 'shootButton')
  request.r(i4277[2], i4277[3], 0, i4276, 'cooldownText')
  request.r(i4277[4], i4277[5], 0, i4276, 'cooldownImage')
  i4276.cooldownTime = i4277[6]
  return i4276
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4278 = root || request.c( 'UnityEngine.UI.Button' )
  var i4279 = data
  i4278.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4279[0], i4278.m_OnClick)
  i4278.m_Navigation = request.d('UnityEngine.UI.Navigation', i4279[1], i4278.m_Navigation)
  i4278.m_Transition = i4279[2]
  i4278.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4279[3], i4278.m_Colors)
  i4278.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4279[4], i4278.m_SpriteState)
  i4278.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4279[5], i4278.m_AnimationTriggers)
  i4278.m_Interactable = !!i4279[6]
  request.r(i4279[7], i4279[8], 0, i4278, 'm_TargetGraphic')
  return i4278
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4280 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4281 = data
  i4280.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4281[0], i4280.m_PersistentCalls)
  return i4280
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4282 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4283 = data
  var i4285 = i4283[0]
  var i4284 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4285.length; i += 1) {
    i4284.add(request.d('UnityEngine.Events.PersistentCall', i4285[i + 0]));
  }
  i4282.m_Calls = i4284
  return i4282
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4288 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4289 = data
  request.r(i4289[0], i4289[1], 0, i4288, 'm_Target')
  i4288.m_TargetAssemblyTypeName = i4289[2]
  i4288.m_MethodName = i4289[3]
  i4288.m_Mode = i4289[4]
  i4288.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4289[5], i4288.m_Arguments)
  i4288.m_CallState = i4289[6]
  return i4288
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4290 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4291 = data
  i4290.m_Mode = i4291[0]
  i4290.m_WrapAround = !!i4291[1]
  request.r(i4291[2], i4291[3], 0, i4290, 'm_SelectOnUp')
  request.r(i4291[4], i4291[5], 0, i4290, 'm_SelectOnDown')
  request.r(i4291[6], i4291[7], 0, i4290, 'm_SelectOnLeft')
  request.r(i4291[8], i4291[9], 0, i4290, 'm_SelectOnRight')
  return i4290
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4292 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4293 = data
  i4292.m_NormalColor = new pc.Color(i4293[0], i4293[1], i4293[2], i4293[3])
  i4292.m_HighlightedColor = new pc.Color(i4293[4], i4293[5], i4293[6], i4293[7])
  i4292.m_PressedColor = new pc.Color(i4293[8], i4293[9], i4293[10], i4293[11])
  i4292.m_SelectedColor = new pc.Color(i4293[12], i4293[13], i4293[14], i4293[15])
  i4292.m_DisabledColor = new pc.Color(i4293[16], i4293[17], i4293[18], i4293[19])
  i4292.m_ColorMultiplier = i4293[20]
  i4292.m_FadeDuration = i4293[21]
  return i4292
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4294 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4295 = data
  request.r(i4295[0], i4295[1], 0, i4294, 'm_HighlightedSprite')
  request.r(i4295[2], i4295[3], 0, i4294, 'm_PressedSprite')
  request.r(i4295[4], i4295[5], 0, i4294, 'm_SelectedSprite')
  request.r(i4295[6], i4295[7], 0, i4294, 'm_DisabledSprite')
  return i4294
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4296 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4297 = data
  i4296.m_NormalTrigger = i4297[0]
  i4296.m_HighlightedTrigger = i4297[1]
  i4296.m_PressedTrigger = i4297[2]
  i4296.m_SelectedTrigger = i4297[3]
  i4296.m_DisabledTrigger = i4297[4]
  return i4296
}

Deserializers["TutorialHand2"] = function (request, data, root) {
  var i4298 = root || request.c( 'TutorialHand2' )
  var i4299 = data
  i4298.scaleSpeed = i4299[0]
  i4298.scaleAmount = i4299[1]
  request.r(i4299[2], i4299[3], 0, i4298, '_shootButton')
  return i4298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i4300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i4301 = data
  i4300.usedByComposite = !!i4301[0]
  i4300.autoTiling = !!i4301[1]
  i4300.size = new pc.Vec2( i4301[2], i4301[3] )
  i4300.edgeRadius = i4301[4]
  i4300.enabled = !!i4301[5]
  i4300.isTrigger = !!i4301[6]
  i4300.usedByEffector = !!i4301[7]
  i4300.density = i4301[8]
  i4300.offset = new pc.Vec2( i4301[9], i4301[10] )
  request.r(i4301[11], i4301[12], 0, i4300, 'material')
  return i4300
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4302 = root || request.c( 'UnityEngine.UI.Text' )
  var i4303 = data
  i4302.m_FontData = request.d('UnityEngine.UI.FontData', i4303[0], i4302.m_FontData)
  i4302.m_Text = i4303[1]
  request.r(i4303[2], i4303[3], 0, i4302, 'm_Material')
  i4302.m_Maskable = !!i4303[4]
  i4302.m_Color = new pc.Color(i4303[5], i4303[6], i4303[7], i4303[8])
  i4302.m_RaycastTarget = !!i4303[9]
  i4302.m_RaycastPadding = new pc.Vec4( i4303[10], i4303[11], i4303[12], i4303[13] )
  return i4302
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4304 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4305 = data
  request.r(i4305[0], i4305[1], 0, i4304, 'm_Font')
  i4304.m_FontSize = i4305[2]
  i4304.m_FontStyle = i4305[3]
  i4304.m_BestFit = !!i4305[4]
  i4304.m_MinSize = i4305[5]
  i4304.m_MaxSize = i4305[6]
  i4304.m_Alignment = i4305[7]
  i4304.m_AlignByGeometry = !!i4305[8]
  i4304.m_RichText = !!i4305[9]
  i4304.m_HorizontalOverflow = i4305[10]
  i4304.m_VerticalOverflow = i4305[11]
  i4304.m_LineSpacing = i4305[12]
  return i4304
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i4306 = root || request.c( 'TutorialHand' )
  var i4307 = data
  request.r(i4307[0], i4307[1], 0, i4306, 'handImage')
  i4306.moveDistance = i4307[2]
  i4306.moveDuration = i4307[3]
  request.r(i4307[4], i4307[5], 0, i4306, '_tutorialHand2')
  request.r(i4307[6], i4307[7], 0, i4306, '_shootButton')
  request.r(i4307[8], i4307[9], 0, i4306, '_zoomButton')
  return i4306
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i4308 = root || request.c( 'UI.CrosshairMovement' )
  var i4309 = data
  request.r(i4309[0], i4309[1], 0, i4308, 'joystick')
  request.r(i4309[2], i4309[3], 0, i4308, 'crosshair')
  i4308.moveSpeed = i4309[4]
  request.r(i4309[5], i4309[6], 0, i4308, 'canvasRect')
  return i4308
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i4310 = root || request.c( 'UI.EndCardAnimation' )
  var i4311 = data
  request.r(i4311[0], i4311[1], 0, i4310, 'background')
  request.r(i4311[2], i4311[3], 0, i4310, 'title')
  request.r(i4311[4], i4311[5], 0, i4310, 'logoAndButton')
  request.r(i4311[6], i4311[7], 0, i4310, 'titleText')
  i4310.fadeDuration = i4311[8]
  i4310.scaleDuration = i4311[9]
  i4310.scaleEase = i4311[10]
  return i4310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4313 = data
  i4312.m_Alpha = i4313[0]
  i4312.m_Interactable = !!i4313[1]
  i4312.m_BlocksRaycasts = !!i4313[2]
  i4312.m_IgnoreParentGroups = !!i4313[3]
  i4312.enabled = !!i4313[4]
  return i4312
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i4314 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i4315 = data
  i4314.m_AspectMode = i4315[0]
  i4314.m_AspectRatio = i4315[1]
  return i4314
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i4316 = root || request.c( 'UI.ButtonPulse' )
  var i4317 = data
  i4316.scaleMultiplier = i4317[0]
  i4316.duration = i4317[1]
  return i4316
}

Deserializers["Cross"] = function (request, data, root) {
  var i4318 = root || request.c( 'Cross' )
  var i4319 = data
  return i4318
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4320 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4321 = data
  request.r(i4321[0], i4321[1], 0, i4320, 'm_FirstSelected')
  i4320.m_sendNavigationEvents = !!i4321[2]
  i4320.m_DragThreshold = i4321[3]
  return i4320
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4322 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4323 = data
  i4322.m_HorizontalAxis = i4323[0]
  i4322.m_VerticalAxis = i4323[1]
  i4322.m_SubmitButton = i4323[2]
  i4322.m_CancelButton = i4323[3]
  i4322.m_InputActionsPerSecond = i4323[4]
  i4322.m_RepeatDelay = i4323[5]
  i4322.m_ForceModuleActive = !!i4323[6]
  i4322.m_SendPointerHoverToParent = !!i4323[7]
  return i4322
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i4324 = root || request.c( 'Bootstraps.Bootstrap' )
  var i4325 = data
  request.r(i4325[0], i4325[1], 0, i4324, 'tanksFabric')
  request.r(i4325[2], i4325[3], 0, i4324, 'scenarioGame')
  return i4324
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i4326 = root || request.c( 'Fabric.TanksFabric' )
  var i4327 = data
  request.r(i4327[0], i4327[1], 0, i4326, 'tankPrefab')
  var i4329 = i4327[2]
  var i4328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4329.length; i += 2) {
  request.r(i4329[i + 0], i4329[i + 1], 1, i4328, '')
  }
  i4326.spawnPoints = i4328
  var i4331 = i4327[3]
  var i4330 = []
  for(var i = 0; i < i4331.length; i += 2) {
  request.r(i4331[i + 0], i4331[i + 1], 2, i4330, '')
  }
  i4326.targets = i4330
  return i4326
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i4336 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i4337 = data
  request.r(i4337[0], i4337[1], 0, i4336, 'endCard')
  return i4336
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i4338 = root || request.c( 'UI.TankKillStatistics' )
  var i4339 = data
  return i4338
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i4340 = root || request.c( 'ManagerCamers' )
  var i4341 = data
  request.r(i4341[0], i4341[1], 0, i4340, '_plauerCamera')
  request.r(i4341[2], i4341[3], 0, i4340, '_bulletCamera')
  request.r(i4341[4], i4341[5], 0, i4340, '_timeController')
  request.r(i4341[6], i4341[7], 0, i4340, '_playerZoom')
  return i4340
}

Deserializers["TimeController"] = function (request, data, root) {
  var i4342 = root || request.c( 'TimeController' )
  var i4343 = data
  i4342.slowMotionScale = i4343[0]
  i4342.slowMotionDuration = i4343[1]
  i4342.restoreSpeedDuration = i4343[2]
  return i4342
}

Deserializers["Pumping"] = function (request, data, root) {
  var i4344 = root || request.c( 'Pumping' )
  var i4345 = data
  request.r(i4345[0], i4345[1], 0, i4344, 'm_Camera')
  request.r(i4345[2], i4345[3], 0, i4344, '_pumpingCamera')
  request.r(i4345[4], i4345[5], 0, i4344, '_UI')
  request.r(i4345[6], i4345[7], 0, i4344, '_arta1')
  request.r(i4345[8], i4345[9], 0, i4344, '_arm')
  request.r(i4345[10], i4345[11], 0, i4344, '_shopping')
  request.r(i4345[12], i4345[13], 0, i4344, '_interactiveArt')
  request.r(i4345[14], i4345[15], 0, i4344, '_tacticsFabric')
  request.r(i4345[16], i4345[17], 0, i4344, '_button')
  request.r(i4345[18], i4345[19], 0, i4344, '_titnSprite')
  return i4344
}

Deserializers["Shopping"] = function (request, data, root) {
  var i4346 = root || request.c( 'Shopping' )
  var i4347 = data
  request.r(i4347[0], i4347[1], 0, i4346, '_improveButton')
  request.r(i4347[2], i4347[3], 0, i4346, '_purchase')
  request.r(i4347[4], i4347[5], 0, i4346, '_shopping')
  request.r(i4347[6], i4347[7], 0, i4346, '_shoppingPlayer')
  request.r(i4347[8], i4347[9], 0, i4346, '_tanksFabric')
  request.r(i4347[10], i4347[11], 0, i4346, '_interactiveArt')
  return i4346
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4348 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4349 = data
  request.r(i4349[0], i4349[1], 0, i4348, 'm_ObjectArgument')
  i4348.m_ObjectArgumentAssemblyTypeName = i4349[2]
  i4348.m_IntArgument = i4349[3]
  i4348.m_FloatArgument = i4349[4]
  i4348.m_StringArgument = i4349[5]
  i4348.m_BoolArgument = !!i4349[6]
  return i4348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4351 = data
  i4350.ambientIntensity = i4351[0]
  i4350.reflectionIntensity = i4351[1]
  i4350.ambientMode = i4351[2]
  i4350.ambientLight = new pc.Color(i4351[3], i4351[4], i4351[5], i4351[6])
  i4350.ambientSkyColor = new pc.Color(i4351[7], i4351[8], i4351[9], i4351[10])
  i4350.ambientGroundColor = new pc.Color(i4351[11], i4351[12], i4351[13], i4351[14])
  i4350.ambientEquatorColor = new pc.Color(i4351[15], i4351[16], i4351[17], i4351[18])
  i4350.fogColor = new pc.Color(i4351[19], i4351[20], i4351[21], i4351[22])
  i4350.fogEndDistance = i4351[23]
  i4350.fogStartDistance = i4351[24]
  i4350.fogDensity = i4351[25]
  i4350.fog = !!i4351[26]
  request.r(i4351[27], i4351[28], 0, i4350, 'skybox')
  i4350.fogMode = i4351[29]
  var i4353 = i4351[30]
  var i4352 = []
  for(var i = 0; i < i4353.length; i += 1) {
    i4352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4353[i + 0]) );
  }
  i4350.lightmaps = i4352
  i4350.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4351[31], i4350.lightProbes)
  i4350.lightmapsMode = i4351[32]
  i4350.mixedBakeMode = i4351[33]
  i4350.environmentLightingMode = i4351[34]
  i4350.ambientProbe = new pc.SphericalHarmonicsL2(i4351[35])
  i4350.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4351[36])
  i4350.useReferenceAmbientProbe = !!i4351[37]
  request.r(i4351[38], i4351[39], 0, i4350, 'customReflection')
  request.r(i4351[40], i4351[41], 0, i4350, 'defaultReflection')
  i4350.defaultReflectionMode = i4351[42]
  i4350.defaultReflectionResolution = i4351[43]
  i4350.sunLightObjectId = i4351[44]
  i4350.pixelLightCount = i4351[45]
  i4350.defaultReflectionHDR = !!i4351[46]
  i4350.hasLightDataAsset = !!i4351[47]
  i4350.hasManualGenerate = !!i4351[48]
  return i4350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4357 = data
  request.r(i4357[0], i4357[1], 0, i4356, 'lightmapColor')
  request.r(i4357[2], i4357[3], 0, i4356, 'lightmapDirection')
  return i4356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4358 = root || new UnityEngine.LightProbes()
  var i4359 = data
  return i4358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4367 = data
  var i4369 = i4367[0]
  var i4368 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4369.length; i += 1) {
    i4368.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4369[i + 0]));
  }
  i4366.ShaderCompilationErrors = i4368
  i4366.name = i4367[1]
  i4366.guid = i4367[2]
  var i4371 = i4367[3]
  var i4370 = []
  for(var i = 0; i < i4371.length; i += 1) {
    i4370.push( i4371[i + 0] );
  }
  i4366.shaderDefinedKeywords = i4370
  var i4373 = i4367[4]
  var i4372 = []
  for(var i = 0; i < i4373.length; i += 1) {
    i4372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4373[i + 0]) );
  }
  i4366.passes = i4372
  var i4375 = i4367[5]
  var i4374 = []
  for(var i = 0; i < i4375.length; i += 1) {
    i4374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4375[i + 0]) );
  }
  i4366.usePasses = i4374
  var i4377 = i4367[6]
  var i4376 = []
  for(var i = 0; i < i4377.length; i += 1) {
    i4376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4377[i + 0]) );
  }
  i4366.defaultParameterValues = i4376
  request.r(i4367[7], i4367[8], 0, i4366, 'unityFallbackShader')
  i4366.readDepth = !!i4367[9]
  i4366.isCreatedByShaderGraph = !!i4367[10]
  i4366.compiled = !!i4367[11]
  return i4366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4381 = data
  i4380.shaderName = i4381[0]
  i4380.errorMessage = i4381[1]
  return i4380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4386 = root || new pc.UnityShaderPass()
  var i4387 = data
  i4386.id = i4387[0]
  i4386.subShaderIndex = i4387[1]
  i4386.name = i4387[2]
  i4386.passType = i4387[3]
  i4386.grabPassTextureName = i4387[4]
  i4386.usePass = !!i4387[5]
  i4386.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4387[6], i4386.zTest)
  i4386.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4387[7], i4386.zWrite)
  i4386.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4387[8], i4386.culling)
  i4386.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4387[9], i4386.blending)
  i4386.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4387[10], i4386.alphaBlending)
  i4386.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4387[11], i4386.colorWriteMask)
  i4386.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4387[12], i4386.offsetUnits)
  i4386.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4387[13], i4386.offsetFactor)
  i4386.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4387[14], i4386.stencilRef)
  i4386.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4387[15], i4386.stencilReadMask)
  i4386.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4387[16], i4386.stencilWriteMask)
  i4386.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4387[17], i4386.stencilOp)
  i4386.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4387[18], i4386.stencilOpFront)
  i4386.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4387[19], i4386.stencilOpBack)
  var i4389 = i4387[20]
  var i4388 = []
  for(var i = 0; i < i4389.length; i += 1) {
    i4388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4389[i + 0]) );
  }
  i4386.tags = i4388
  var i4391 = i4387[21]
  var i4390 = []
  for(var i = 0; i < i4391.length; i += 1) {
    i4390.push( i4391[i + 0] );
  }
  i4386.passDefinedKeywords = i4390
  var i4393 = i4387[22]
  var i4392 = []
  for(var i = 0; i < i4393.length; i += 1) {
    i4392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4393[i + 0]) );
  }
  i4386.passDefinedKeywordGroups = i4392
  var i4395 = i4387[23]
  var i4394 = []
  for(var i = 0; i < i4395.length; i += 1) {
    i4394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4395[i + 0]) );
  }
  i4386.variants = i4394
  var i4397 = i4387[24]
  var i4396 = []
  for(var i = 0; i < i4397.length; i += 1) {
    i4396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4397[i + 0]) );
  }
  i4386.excludedVariants = i4396
  i4386.hasDepthReader = !!i4387[25]
  return i4386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4399 = data
  i4398.val = i4399[0]
  i4398.name = i4399[1]
  return i4398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4401 = data
  i4400.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4401[0], i4400.src)
  i4400.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4401[1], i4400.dst)
  i4400.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4401[2], i4400.op)
  return i4400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4403 = data
  i4402.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4403[0], i4402.pass)
  i4402.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4403[1], i4402.fail)
  i4402.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4403[2], i4402.zFail)
  i4402.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4403[3], i4402.comp)
  return i4402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4407 = data
  i4406.name = i4407[0]
  i4406.value = i4407[1]
  return i4406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4411 = data
  var i4413 = i4411[0]
  var i4412 = []
  for(var i = 0; i < i4413.length; i += 1) {
    i4412.push( i4413[i + 0] );
  }
  i4410.keywords = i4412
  i4410.hasDiscard = !!i4411[1]
  return i4410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4417 = data
  i4416.passId = i4417[0]
  i4416.subShaderIndex = i4417[1]
  var i4419 = i4417[2]
  var i4418 = []
  for(var i = 0; i < i4419.length; i += 1) {
    i4418.push( i4419[i + 0] );
  }
  i4416.keywords = i4418
  i4416.vertexProgram = i4417[3]
  i4416.fragmentProgram = i4417[4]
  i4416.exportedForWebGl2 = !!i4417[5]
  i4416.readDepth = !!i4417[6]
  return i4416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4423 = data
  request.r(i4423[0], i4423[1], 0, i4422, 'shader')
  i4422.pass = i4423[2]
  return i4422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4427 = data
  i4426.name = i4427[0]
  i4426.type = i4427[1]
  i4426.value = new pc.Vec4( i4427[2], i4427[3], i4427[4], i4427[5] )
  i4426.textureValue = i4427[6]
  i4426.shaderPropertyFlag = i4427[7]
  return i4426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4429 = data
  i4428.name = i4429[0]
  request.r(i4429[1], i4429[2], 0, i4428, 'texture')
  i4428.aabb = i4429[3]
  i4428.vertices = i4429[4]
  i4428.triangles = i4429[5]
  i4428.textureRect = UnityEngine.Rect.MinMaxRect(i4429[6], i4429[7], i4429[8], i4429[9])
  i4428.packedRect = UnityEngine.Rect.MinMaxRect(i4429[10], i4429[11], i4429[12], i4429[13])
  i4428.border = new pc.Vec4( i4429[14], i4429[15], i4429[16], i4429[17] )
  i4428.transparency = i4429[18]
  i4428.bounds = i4429[19]
  i4428.pixelsPerUnit = i4429[20]
  i4428.textureWidth = i4429[21]
  i4428.textureHeight = i4429[22]
  i4428.nativeSize = new pc.Vec2( i4429[23], i4429[24] )
  i4428.pivot = new pc.Vec2( i4429[25], i4429[26] )
  i4428.textureRectOffset = new pc.Vec2( i4429[27], i4429[28] )
  return i4428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4431 = data
  i4430.name = i4431[0]
  return i4430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4433 = data
  i4432.name = i4433[0]
  i4432.ascent = i4433[1]
  i4432.originalLineHeight = i4433[2]
  i4432.fontSize = i4433[3]
  var i4435 = i4433[4]
  var i4434 = []
  for(var i = 0; i < i4435.length; i += 1) {
    i4434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4435[i + 0]) );
  }
  i4432.characterInfo = i4434
  request.r(i4433[5], i4433[6], 0, i4432, 'texture')
  i4432.originalFontSize = i4433[7]
  return i4432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4439 = data
  i4438.index = i4439[0]
  i4438.advance = i4439[1]
  i4438.bearing = i4439[2]
  i4438.glyphWidth = i4439[3]
  i4438.glyphHeight = i4439[4]
  i4438.minX = i4439[5]
  i4438.maxX = i4439[6]
  i4438.minY = i4439[7]
  i4438.maxY = i4439[8]
  i4438.uvBottomLeftX = i4439[9]
  i4438.uvBottomLeftY = i4439[10]
  i4438.uvBottomRightX = i4439[11]
  i4438.uvBottomRightY = i4439[12]
  i4438.uvTopLeftX = i4439[13]
  i4438.uvTopLeftY = i4439[14]
  i4438.uvTopRightX = i4439[15]
  i4438.uvTopRightY = i4439[16]
  return i4438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4441 = data
  var i4443 = i4441[0]
  var i4442 = []
  for(var i = 0; i < i4443.length; i += 1) {
    i4442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4443[i + 0]) );
  }
  i4440.files = i4442
  i4440.componentToPrefabIds = i4441[1]
  return i4440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4447 = data
  i4446.path = i4447[0]
  request.r(i4447[1], i4447[2], 0, i4446, 'unityObject')
  return i4446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4449 = data
  var i4451 = i4449[0]
  var i4450 = []
  for(var i = 0; i < i4451.length; i += 1) {
    i4450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4451[i + 0]) );
  }
  i4448.scriptsExecutionOrder = i4450
  var i4453 = i4449[1]
  var i4452 = []
  for(var i = 0; i < i4453.length; i += 1) {
    i4452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4453[i + 0]) );
  }
  i4448.sortingLayers = i4452
  var i4455 = i4449[2]
  var i4454 = []
  for(var i = 0; i < i4455.length; i += 1) {
    i4454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4455[i + 0]) );
  }
  i4448.cullingLayers = i4454
  i4448.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4449[3], i4448.timeSettings)
  i4448.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4449[4], i4448.physicsSettings)
  i4448.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4449[5], i4448.physics2DSettings)
  i4448.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4449[6], i4448.qualitySettings)
  i4448.enableRealtimeShadows = !!i4449[7]
  i4448.enableAutoInstancing = !!i4449[8]
  i4448.enableDynamicBatching = !!i4449[9]
  i4448.lightmapEncodingQuality = i4449[10]
  i4448.desiredColorSpace = i4449[11]
  var i4457 = i4449[12]
  var i4456 = []
  for(var i = 0; i < i4457.length; i += 1) {
    i4456.push( i4457[i + 0] );
  }
  i4448.allTags = i4456
  return i4448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4461 = data
  i4460.name = i4461[0]
  i4460.value = i4461[1]
  return i4460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4465 = data
  i4464.id = i4465[0]
  i4464.name = i4465[1]
  i4464.value = i4465[2]
  return i4464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4469 = data
  i4468.id = i4469[0]
  i4468.name = i4469[1]
  return i4468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4471 = data
  i4470.fixedDeltaTime = i4471[0]
  i4470.maximumDeltaTime = i4471[1]
  i4470.timeScale = i4471[2]
  i4470.maximumParticleTimestep = i4471[3]
  return i4470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4473 = data
  i4472.gravity = new pc.Vec3( i4473[0], i4473[1], i4473[2] )
  i4472.defaultSolverIterations = i4473[3]
  i4472.bounceThreshold = i4473[4]
  i4472.autoSyncTransforms = !!i4473[5]
  i4472.autoSimulation = !!i4473[6]
  var i4475 = i4473[7]
  var i4474 = []
  for(var i = 0; i < i4475.length; i += 1) {
    i4474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4475[i + 0]) );
  }
  i4472.collisionMatrix = i4474
  return i4472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4479 = data
  i4478.enabled = !!i4479[0]
  i4478.layerId = i4479[1]
  i4478.otherLayerId = i4479[2]
  return i4478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4481 = data
  request.r(i4481[0], i4481[1], 0, i4480, 'material')
  i4480.gravity = new pc.Vec2( i4481[2], i4481[3] )
  i4480.positionIterations = i4481[4]
  i4480.velocityIterations = i4481[5]
  i4480.velocityThreshold = i4481[6]
  i4480.maxLinearCorrection = i4481[7]
  i4480.maxAngularCorrection = i4481[8]
  i4480.maxTranslationSpeed = i4481[9]
  i4480.maxRotationSpeed = i4481[10]
  i4480.baumgarteScale = i4481[11]
  i4480.baumgarteTOIScale = i4481[12]
  i4480.timeToSleep = i4481[13]
  i4480.linearSleepTolerance = i4481[14]
  i4480.angularSleepTolerance = i4481[15]
  i4480.defaultContactOffset = i4481[16]
  i4480.autoSimulation = !!i4481[17]
  i4480.queriesHitTriggers = !!i4481[18]
  i4480.queriesStartInColliders = !!i4481[19]
  i4480.callbacksOnDisable = !!i4481[20]
  i4480.reuseCollisionCallbacks = !!i4481[21]
  i4480.autoSyncTransforms = !!i4481[22]
  var i4483 = i4481[23]
  var i4482 = []
  for(var i = 0; i < i4483.length; i += 1) {
    i4482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4483[i + 0]) );
  }
  i4480.collisionMatrix = i4482
  return i4480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4487 = data
  i4486.enabled = !!i4487[0]
  i4486.layerId = i4487[1]
  i4486.otherLayerId = i4487[2]
  return i4486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4489 = data
  var i4491 = i4489[0]
  var i4490 = []
  for(var i = 0; i < i4491.length; i += 1) {
    i4490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4491[i + 0]) );
  }
  i4488.qualityLevels = i4490
  var i4493 = i4489[1]
  var i4492 = []
  for(var i = 0; i < i4493.length; i += 1) {
    i4492.push( i4493[i + 0] );
  }
  i4488.names = i4492
  i4488.shadows = i4489[2]
  i4488.anisotropicFiltering = i4489[3]
  i4488.antiAliasing = i4489[4]
  i4488.lodBias = i4489[5]
  i4488.shadowCascades = i4489[6]
  i4488.shadowDistance = i4489[7]
  i4488.shadowmaskMode = i4489[8]
  i4488.shadowProjection = i4489[9]
  i4488.shadowResolution = i4489[10]
  i4488.softParticles = !!i4489[11]
  i4488.softVegetation = !!i4489[12]
  i4488.activeColorSpace = i4489[13]
  i4488.desiredColorSpace = i4489[14]
  i4488.masterTextureLimit = i4489[15]
  i4488.maxQueuedFrames = i4489[16]
  i4488.particleRaycastBudget = i4489[17]
  i4488.pixelLightCount = i4489[18]
  i4488.realtimeReflectionProbes = !!i4489[19]
  i4488.shadowCascade2Split = i4489[20]
  i4488.shadowCascade4Split = new pc.Vec3( i4489[21], i4489[22], i4489[23] )
  i4488.streamingMipmapsActive = !!i4489[24]
  i4488.vSyncCount = i4489[25]
  i4488.asyncUploadBufferSize = i4489[26]
  i4488.asyncUploadTimeSlice = i4489[27]
  i4488.billboardsFaceCameraPosition = !!i4489[28]
  i4488.shadowNearPlaneOffset = i4489[29]
  i4488.streamingMipmapsMemoryBudget = i4489[30]
  i4488.maximumLODLevel = i4489[31]
  i4488.streamingMipmapsAddAllCameras = !!i4489[32]
  i4488.streamingMipmapsMaxLevelReduction = i4489[33]
  i4488.streamingMipmapsRenderersPerFrame = i4489[34]
  i4488.resolutionScalingFixedDPIFactor = i4489[35]
  i4488.streamingMipmapsMaxFileIORequests = i4489[36]
  i4488.currentQualityLevel = i4489[37]
  return i4488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4499 = data
  i4498.weight = i4499[0]
  i4498.vertices = i4499[1]
  i4498.normals = i4499[2]
  i4498.tangents = i4499[3]
  return i4498
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

Deserializers.buildID = "a70f5bf3-7597-4fea-83f5-bdc9b455c991";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

