var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3150 = root || request.c( 'UnityEngine.JointSpring' )
  var i3151 = data
  i3150.spring = i3151[0]
  i3150.damper = i3151[1]
  i3150.targetPosition = i3151[2]
  return i3150
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3152 = root || request.c( 'UnityEngine.JointMotor' )
  var i3153 = data
  i3152.m_TargetVelocity = i3153[0]
  i3152.m_Force = i3153[1]
  i3152.m_FreeSpin = i3153[2]
  return i3152
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3154 = root || request.c( 'UnityEngine.JointLimits' )
  var i3155 = data
  i3154.m_Min = i3155[0]
  i3154.m_Max = i3155[1]
  i3154.m_Bounciness = i3155[2]
  i3154.m_BounceMinVelocity = i3155[3]
  i3154.m_ContactDistance = i3155[4]
  i3154.minBounce = i3155[5]
  i3154.maxBounce = i3155[6]
  return i3154
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3156 = root || request.c( 'UnityEngine.JointDrive' )
  var i3157 = data
  i3156.m_PositionSpring = i3157[0]
  i3156.m_PositionDamper = i3157[1]
  i3156.m_MaximumForce = i3157[2]
  i3156.m_UseAcceleration = i3157[3]
  return i3156
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3158 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3159 = data
  i3158.m_Spring = i3159[0]
  i3158.m_Damper = i3159[1]
  return i3158
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3160 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3161 = data
  i3160.m_Limit = i3161[0]
  i3160.m_Bounciness = i3161[1]
  i3160.m_ContactDistance = i3161[2]
  return i3160
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3162 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3163 = data
  i3162.m_ExtremumSlip = i3163[0]
  i3162.m_ExtremumValue = i3163[1]
  i3162.m_AsymptoteSlip = i3163[2]
  i3162.m_AsymptoteValue = i3163[3]
  i3162.m_Stiffness = i3163[4]
  return i3162
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3164 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3165 = data
  i3164.m_LowerAngle = i3165[0]
  i3164.m_UpperAngle = i3165[1]
  return i3164
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3166 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3167 = data
  i3166.m_MotorSpeed = i3167[0]
  i3166.m_MaximumMotorTorque = i3167[1]
  return i3166
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3168 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3169 = data
  i3168.m_DampingRatio = i3169[0]
  i3168.m_Frequency = i3169[1]
  i3168.m_Angle = i3169[2]
  return i3168
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3170 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3171 = data
  i3170.m_LowerTranslation = i3171[0]
  i3170.m_UpperTranslation = i3171[1]
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3173 = data
  i3172.pivot = new pc.Vec2( i3173[0], i3173[1] )
  i3172.anchorMin = new pc.Vec2( i3173[2], i3173[3] )
  i3172.anchorMax = new pc.Vec2( i3173[4], i3173[5] )
  i3172.sizeDelta = new pc.Vec2( i3173[6], i3173[7] )
  i3172.anchoredPosition3D = new pc.Vec3( i3173[8], i3173[9], i3173[10] )
  i3172.rotation = new pc.Quat(i3173[11], i3173[12], i3173[13], i3173[14])
  i3172.scale = new pc.Vec3( i3173[15], i3173[16], i3173[17] )
  return i3172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3175 = data
  i3174.cullTransparentMesh = !!i3175[0]
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3177 = data
  i3176.name = i3177[0]
  i3176.tagId = i3177[1]
  i3176.enabled = !!i3177[2]
  i3176.isStatic = !!i3177[3]
  i3176.layer = i3177[4]
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3179 = data
  i3178.name = i3179[0]
  i3178.width = i3179[1]
  i3178.height = i3179[2]
  i3178.mipmapCount = i3179[3]
  i3178.anisoLevel = i3179[4]
  i3178.filterMode = i3179[5]
  i3178.hdr = !!i3179[6]
  i3178.format = i3179[7]
  i3178.wrapMode = i3179[8]
  i3178.alphaIsTransparency = !!i3179[9]
  i3178.alphaSource = i3179[10]
  i3178.graphicsFormat = i3179[11]
  i3178.sRGBTexture = !!i3179[12]
  i3178.desiredColorSpace = i3179[13]
  i3178.wrapU = i3179[14]
  i3178.wrapV = i3179[15]
  return i3178
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3180 = root || request.c( 'UnityEngine.UI.Image' )
  var i3181 = data
  request.r(i3181[0], i3181[1], 0, i3180, 'm_Sprite')
  i3180.m_Type = i3181[2]
  i3180.m_PreserveAspect = !!i3181[3]
  i3180.m_FillCenter = !!i3181[4]
  i3180.m_FillMethod = i3181[5]
  i3180.m_FillAmount = i3181[6]
  i3180.m_FillClockwise = !!i3181[7]
  i3180.m_FillOrigin = i3181[8]
  i3180.m_UseSpriteMesh = !!i3181[9]
  i3180.m_PixelsPerUnitMultiplier = i3181[10]
  request.r(i3181[11], i3181[12], 0, i3180, 'm_Material')
  i3180.m_Maskable = !!i3181[13]
  i3180.m_Color = new pc.Color(i3181[14], i3181[15], i3181[16], i3181[17])
  i3180.m_RaycastTarget = !!i3181[18]
  i3180.m_RaycastPadding = new pc.Vec4( i3181[19], i3181[20], i3181[21], i3181[22] )
  return i3180
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i3182 = root || request.c( 'VariableJoystick' )
  var i3183 = data
  request.r(i3183[0], i3183[1], 0, i3182, 'handle')
  i3182.moveThreshold = i3183[2]
  i3182.joystickType = i3183[3]
  request.r(i3183[4], i3183[5], 0, i3182, 'background')
  i3182.handleRange = i3183[6]
  i3182.deadZone = i3183[7]
  i3182.axisOptions = i3183[8]
  i3182.snapX = !!i3183[9]
  i3182.snapY = !!i3183[10]
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3185 = data
  i3184.position = new pc.Vec3( i3185[0], i3185[1], i3185[2] )
  i3184.scale = new pc.Vec3( i3185[3], i3185[4], i3185[5] )
  i3184.rotation = new pc.Quat(i3185[6], i3185[7], i3185[8], i3185[9])
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3187 = data
  request.r(i3187[0], i3187[1], 0, i3186, 'sharedMesh')
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3189 = data
  request.r(i3189[0], i3189[1], 0, i3188, 'additionalVertexStreams')
  i3188.enabled = !!i3189[2]
  request.r(i3189[3], i3189[4], 0, i3188, 'sharedMaterial')
  var i3191 = i3189[5]
  var i3190 = []
  for(var i = 0; i < i3191.length; i += 2) {
  request.r(i3191[i + 0], i3191[i + 1], 2, i3190, '')
  }
  i3188.sharedMaterials = i3190
  i3188.receiveShadows = !!i3189[6]
  i3188.shadowCastingMode = i3189[7]
  i3188.sortingLayerID = i3189[8]
  i3188.sortingOrder = i3189[9]
  i3188.lightmapIndex = i3189[10]
  i3188.lightmapSceneIndex = i3189[11]
  i3188.lightmapScaleOffset = new pc.Vec4( i3189[12], i3189[13], i3189[14], i3189[15] )
  i3188.lightProbeUsage = i3189[16]
  i3188.reflectionProbeUsage = i3189[17]
  return i3188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3195 = data
  i3194.name = i3195[0]
  i3194.halfPrecision = !!i3195[1]
  i3194.useUInt32IndexFormat = !!i3195[2]
  i3194.vertexCount = i3195[3]
  i3194.aabb = i3195[4]
  var i3197 = i3195[5]
  var i3196 = []
  for(var i = 0; i < i3197.length; i += 1) {
    i3196.push( !!i3197[i + 0] );
  }
  i3194.streams = i3196
  i3194.vertices = i3195[6]
  var i3199 = i3195[7]
  var i3198 = []
  for(var i = 0; i < i3199.length; i += 1) {
    i3198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3199[i + 0]) );
  }
  i3194.subMeshes = i3198
  var i3201 = i3195[8]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 16) {
    i3200.push( new pc.Mat4().setData(i3201[i + 0], i3201[i + 1], i3201[i + 2], i3201[i + 3],  i3201[i + 4], i3201[i + 5], i3201[i + 6], i3201[i + 7],  i3201[i + 8], i3201[i + 9], i3201[i + 10], i3201[i + 11],  i3201[i + 12], i3201[i + 13], i3201[i + 14], i3201[i + 15]) );
  }
  i3194.bindposes = i3200
  var i3203 = i3195[9]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3203[i + 0]) );
  }
  i3194.blendShapes = i3202
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3209 = data
  i3208.triangles = i3209[0]
  return i3208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3215 = data
  i3214.name = i3215[0]
  var i3217 = i3215[1]
  var i3216 = []
  for(var i = 0; i < i3217.length; i += 1) {
    i3216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3217[i + 0]) );
  }
  i3214.frames = i3216
  return i3214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3218 = root || new pc.UnityMaterial()
  var i3219 = data
  i3218.name = i3219[0]
  request.r(i3219[1], i3219[2], 0, i3218, 'shader')
  i3218.renderQueue = i3219[3]
  i3218.enableInstancing = !!i3219[4]
  var i3221 = i3219[5]
  var i3220 = []
  for(var i = 0; i < i3221.length; i += 1) {
    i3220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3221[i + 0]) );
  }
  i3218.floatParameters = i3220
  var i3223 = i3219[6]
  var i3222 = []
  for(var i = 0; i < i3223.length; i += 1) {
    i3222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3223[i + 0]) );
  }
  i3218.colorParameters = i3222
  var i3225 = i3219[7]
  var i3224 = []
  for(var i = 0; i < i3225.length; i += 1) {
    i3224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3225[i + 0]) );
  }
  i3218.vectorParameters = i3224
  var i3227 = i3219[8]
  var i3226 = []
  for(var i = 0; i < i3227.length; i += 1) {
    i3226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3227[i + 0]) );
  }
  i3218.textureParameters = i3226
  var i3229 = i3219[9]
  var i3228 = []
  for(var i = 0; i < i3229.length; i += 1) {
    i3228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3229[i + 0]) );
  }
  i3218.materialFlags = i3228
  return i3218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3233 = data
  i3232.name = i3233[0]
  i3232.value = i3233[1]
  return i3232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3237 = data
  i3236.name = i3237[0]
  i3236.value = new pc.Color(i3237[1], i3237[2], i3237[3], i3237[4])
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3241 = data
  i3240.name = i3241[0]
  i3240.value = new pc.Vec4( i3241[1], i3241[2], i3241[3], i3241[4] )
  return i3240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3245 = data
  i3244.name = i3245[0]
  request.r(i3245[1], i3245[2], 0, i3244, 'value')
  return i3244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3249 = data
  i3248.name = i3249[0]
  i3248.enabled = !!i3249[1]
  return i3248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3251 = data
  i3250.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3251[0], i3250.main)
  i3250.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3251[1], i3250.colorBySpeed)
  i3250.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3251[2], i3250.colorOverLifetime)
  i3250.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3251[3], i3250.emission)
  i3250.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3251[4], i3250.rotationBySpeed)
  i3250.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3251[5], i3250.rotationOverLifetime)
  i3250.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3251[6], i3250.shape)
  i3250.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3251[7], i3250.sizeBySpeed)
  i3250.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3251[8], i3250.sizeOverLifetime)
  i3250.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3251[9], i3250.textureSheetAnimation)
  i3250.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3251[10], i3250.velocityOverLifetime)
  i3250.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3251[11], i3250.noise)
  i3250.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3251[12], i3250.inheritVelocity)
  i3250.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3251[13], i3250.forceOverLifetime)
  i3250.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3251[14], i3250.limitVelocityOverLifetime)
  i3250.useAutoRandomSeed = !!i3251[15]
  i3250.randomSeed = i3251[16]
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3252 = root || new pc.ParticleSystemMain()
  var i3253 = data
  i3252.duration = i3253[0]
  i3252.loop = !!i3253[1]
  i3252.prewarm = !!i3253[2]
  i3252.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3253[3], i3252.startDelay)
  i3252.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3253[4], i3252.startLifetime)
  i3252.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3253[5], i3252.startSpeed)
  i3252.startSize3D = !!i3253[6]
  i3252.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3253[7], i3252.startSizeX)
  i3252.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3253[8], i3252.startSizeY)
  i3252.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3253[9], i3252.startSizeZ)
  i3252.startRotation3D = !!i3253[10]
  i3252.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3253[11], i3252.startRotationX)
  i3252.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3253[12], i3252.startRotationY)
  i3252.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3253[13], i3252.startRotationZ)
  i3252.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3253[14], i3252.startColor)
  i3252.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3253[15], i3252.gravityModifier)
  i3252.simulationSpace = i3253[16]
  request.r(i3253[17], i3253[18], 0, i3252, 'customSimulationSpace')
  i3252.simulationSpeed = i3253[19]
  i3252.useUnscaledTime = !!i3253[20]
  i3252.scalingMode = i3253[21]
  i3252.playOnAwake = !!i3253[22]
  i3252.maxParticles = i3253[23]
  i3252.emitterVelocityMode = i3253[24]
  i3252.stopAction = i3253[25]
  return i3252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3254 = root || new pc.MinMaxCurve()
  var i3255 = data
  i3254.mode = i3255[0]
  i3254.curveMin = new pc.AnimationCurve( { keys_flow: i3255[1] } )
  i3254.curveMax = new pc.AnimationCurve( { keys_flow: i3255[2] } )
  i3254.curveMultiplier = i3255[3]
  i3254.constantMin = i3255[4]
  i3254.constantMax = i3255[5]
  return i3254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3256 = root || new pc.MinMaxGradient()
  var i3257 = data
  i3256.mode = i3257[0]
  i3256.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3257[1], i3256.gradientMin)
  i3256.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3257[2], i3256.gradientMax)
  i3256.colorMin = new pc.Color(i3257[3], i3257[4], i3257[5], i3257[6])
  i3256.colorMax = new pc.Color(i3257[7], i3257[8], i3257[9], i3257[10])
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3259 = data
  i3258.mode = i3259[0]
  var i3261 = i3259[1]
  var i3260 = []
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3261[i + 0]) );
  }
  i3258.colorKeys = i3260
  var i3263 = i3259[2]
  var i3262 = []
  for(var i = 0; i < i3263.length; i += 1) {
    i3262.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3263[i + 0]) );
  }
  i3258.alphaKeys = i3262
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3264 = root || new pc.ParticleSystemColorBySpeed()
  var i3265 = data
  i3264.enabled = !!i3265[0]
  i3264.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3265[1], i3264.color)
  i3264.range = new pc.Vec2( i3265[2], i3265[3] )
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3269 = data
  i3268.color = new pc.Color(i3269[0], i3269[1], i3269[2], i3269[3])
  i3268.time = i3269[4]
  return i3268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3273 = data
  i3272.alpha = i3273[0]
  i3272.time = i3273[1]
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3274 = root || new pc.ParticleSystemColorOverLifetime()
  var i3275 = data
  i3274.enabled = !!i3275[0]
  i3274.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3275[1], i3274.color)
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3276 = root || new pc.ParticleSystemEmitter()
  var i3277 = data
  i3276.enabled = !!i3277[0]
  i3276.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3277[1], i3276.rateOverTime)
  i3276.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3277[2], i3276.rateOverDistance)
  var i3279 = i3277[3]
  var i3278 = []
  for(var i = 0; i < i3279.length; i += 1) {
    i3278.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3279[i + 0]) );
  }
  i3276.bursts = i3278
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3282 = root || new pc.ParticleSystemBurst()
  var i3283 = data
  i3282.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3283[0], i3282.count)
  i3282.cycleCount = i3283[1]
  i3282.minCount = i3283[2]
  i3282.maxCount = i3283[3]
  i3282.repeatInterval = i3283[4]
  i3282.time = i3283[5]
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3284 = root || new pc.ParticleSystemRotationBySpeed()
  var i3285 = data
  i3284.enabled = !!i3285[0]
  i3284.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3285[1], i3284.x)
  i3284.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3285[2], i3284.y)
  i3284.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3285[3], i3284.z)
  i3284.separateAxes = !!i3285[4]
  i3284.range = new pc.Vec2( i3285[5], i3285[6] )
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3286 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3287 = data
  i3286.enabled = !!i3287[0]
  i3286.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3287[1], i3286.x)
  i3286.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3287[2], i3286.y)
  i3286.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3287[3], i3286.z)
  i3286.separateAxes = !!i3287[4]
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3288 = root || new pc.ParticleSystemShape()
  var i3289 = data
  i3288.enabled = !!i3289[0]
  i3288.shapeType = i3289[1]
  i3288.randomDirectionAmount = i3289[2]
  i3288.sphericalDirectionAmount = i3289[3]
  i3288.randomPositionAmount = i3289[4]
  i3288.alignToDirection = !!i3289[5]
  i3288.radius = i3289[6]
  i3288.radiusMode = i3289[7]
  i3288.radiusSpread = i3289[8]
  i3288.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3289[9], i3288.radiusSpeed)
  i3288.radiusThickness = i3289[10]
  i3288.angle = i3289[11]
  i3288.length = i3289[12]
  i3288.boxThickness = new pc.Vec3( i3289[13], i3289[14], i3289[15] )
  i3288.meshShapeType = i3289[16]
  request.r(i3289[17], i3289[18], 0, i3288, 'mesh')
  request.r(i3289[19], i3289[20], 0, i3288, 'meshRenderer')
  request.r(i3289[21], i3289[22], 0, i3288, 'skinnedMeshRenderer')
  i3288.useMeshMaterialIndex = !!i3289[23]
  i3288.meshMaterialIndex = i3289[24]
  i3288.useMeshColors = !!i3289[25]
  i3288.normalOffset = i3289[26]
  i3288.arc = i3289[27]
  i3288.arcMode = i3289[28]
  i3288.arcSpread = i3289[29]
  i3288.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3289[30], i3288.arcSpeed)
  i3288.donutRadius = i3289[31]
  i3288.position = new pc.Vec3( i3289[32], i3289[33], i3289[34] )
  i3288.rotation = new pc.Vec3( i3289[35], i3289[36], i3289[37] )
  i3288.scale = new pc.Vec3( i3289[38], i3289[39], i3289[40] )
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3290 = root || new pc.ParticleSystemSizeBySpeed()
  var i3291 = data
  i3290.enabled = !!i3291[0]
  i3290.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3291[1], i3290.x)
  i3290.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3291[2], i3290.y)
  i3290.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3291[3], i3290.z)
  i3290.separateAxes = !!i3291[4]
  i3290.range = new pc.Vec2( i3291[5], i3291[6] )
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3292 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3293 = data
  i3292.enabled = !!i3293[0]
  i3292.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3293[1], i3292.x)
  i3292.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3293[2], i3292.y)
  i3292.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3293[3], i3292.z)
  i3292.separateAxes = !!i3293[4]
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3294 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3295 = data
  i3294.enabled = !!i3295[0]
  i3294.mode = i3295[1]
  i3294.animation = i3295[2]
  i3294.numTilesX = i3295[3]
  i3294.numTilesY = i3295[4]
  i3294.useRandomRow = !!i3295[5]
  i3294.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[6], i3294.frameOverTime)
  i3294.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[7], i3294.startFrame)
  i3294.cycleCount = i3295[8]
  i3294.rowIndex = i3295[9]
  i3294.flipU = i3295[10]
  i3294.flipV = i3295[11]
  i3294.spriteCount = i3295[12]
  var i3297 = i3295[13]
  var i3296 = []
  for(var i = 0; i < i3297.length; i += 2) {
  request.r(i3297[i + 0], i3297[i + 1], 2, i3296, '')
  }
  i3294.sprites = i3296
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3300 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3301 = data
  i3300.enabled = !!i3301[0]
  i3300.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[1], i3300.x)
  i3300.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[2], i3300.y)
  i3300.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[3], i3300.z)
  i3300.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[4], i3300.radial)
  i3300.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[5], i3300.speedModifier)
  i3300.space = i3301[6]
  i3300.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[7], i3300.orbitalX)
  i3300.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[8], i3300.orbitalY)
  i3300.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[9], i3300.orbitalZ)
  i3300.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[10], i3300.orbitalOffsetX)
  i3300.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[11], i3300.orbitalOffsetY)
  i3300.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3301[12], i3300.orbitalOffsetZ)
  return i3300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3302 = root || new pc.ParticleSystemNoise()
  var i3303 = data
  i3302.enabled = !!i3303[0]
  i3302.separateAxes = !!i3303[1]
  i3302.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[2], i3302.strengthX)
  i3302.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[3], i3302.strengthY)
  i3302.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[4], i3302.strengthZ)
  i3302.frequency = i3303[5]
  i3302.damping = !!i3303[6]
  i3302.octaveCount = i3303[7]
  i3302.octaveMultiplier = i3303[8]
  i3302.octaveScale = i3303[9]
  i3302.quality = i3303[10]
  i3302.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[11], i3302.scrollSpeed)
  i3302.scrollSpeedMultiplier = i3303[12]
  i3302.remapEnabled = !!i3303[13]
  i3302.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[14], i3302.remapX)
  i3302.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[15], i3302.remapY)
  i3302.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[16], i3302.remapZ)
  i3302.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[17], i3302.positionAmount)
  i3302.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[18], i3302.rotationAmount)
  i3302.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3303[19], i3302.sizeAmount)
  return i3302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3304 = root || new pc.ParticleSystemInheritVelocity()
  var i3305 = data
  i3304.enabled = !!i3305[0]
  i3304.mode = i3305[1]
  i3304.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3305[2], i3304.curve)
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3306 = root || new pc.ParticleSystemForceOverLifetime()
  var i3307 = data
  i3306.enabled = !!i3307[0]
  i3306.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[1], i3306.x)
  i3306.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[2], i3306.y)
  i3306.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3307[3], i3306.z)
  i3306.space = i3307[4]
  i3306.randomized = !!i3307[5]
  return i3306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3308 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3309 = data
  i3308.enabled = !!i3309[0]
  i3308.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[1], i3308.limit)
  i3308.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[2], i3308.limitX)
  i3308.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[3], i3308.limitY)
  i3308.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[4], i3308.limitZ)
  i3308.dampen = i3309[5]
  i3308.separateAxes = !!i3309[6]
  i3308.space = i3309[7]
  i3308.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3309[8], i3308.drag)
  i3308.multiplyDragByParticleSize = !!i3309[9]
  i3308.multiplyDragByParticleVelocity = !!i3309[10]
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3311 = data
  i3310.enabled = !!i3311[0]
  request.r(i3311[1], i3311[2], 0, i3310, 'sharedMaterial')
  var i3313 = i3311[3]
  var i3312 = []
  for(var i = 0; i < i3313.length; i += 2) {
  request.r(i3313[i + 0], i3313[i + 1], 2, i3312, '')
  }
  i3310.sharedMaterials = i3312
  i3310.receiveShadows = !!i3311[4]
  i3310.shadowCastingMode = i3311[5]
  i3310.sortingLayerID = i3311[6]
  i3310.sortingOrder = i3311[7]
  i3310.lightmapIndex = i3311[8]
  i3310.lightmapSceneIndex = i3311[9]
  i3310.lightmapScaleOffset = new pc.Vec4( i3311[10], i3311[11], i3311[12], i3311[13] )
  i3310.lightProbeUsage = i3311[14]
  i3310.reflectionProbeUsage = i3311[15]
  request.r(i3311[16], i3311[17], 0, i3310, 'mesh')
  i3310.meshCount = i3311[18]
  i3310.activeVertexStreamsCount = i3311[19]
  i3310.alignment = i3311[20]
  i3310.renderMode = i3311[21]
  i3310.sortMode = i3311[22]
  i3310.lengthScale = i3311[23]
  i3310.velocityScale = i3311[24]
  i3310.cameraVelocityScale = i3311[25]
  i3310.normalDirection = i3311[26]
  i3310.sortingFudge = i3311[27]
  i3310.minParticleSize = i3311[28]
  i3310.maxParticleSize = i3311[29]
  i3310.pivot = new pc.Vec3( i3311[30], i3311[31], i3311[32] )
  request.r(i3311[33], i3311[34], 0, i3310, 'trailMaterial')
  return i3310
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i3314 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i3315 = data
  i3314.OnlyDeactivate = !!i3315[0]
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3317 = data
  i3316.center = new pc.Vec3( i3317[0], i3317[1], i3317[2] )
  i3316.size = new pc.Vec3( i3317[3], i3317[4], i3317[5] )
  i3316.enabled = !!i3317[6]
  i3316.isTrigger = !!i3317[7]
  request.r(i3317[8], i3317[9], 0, i3316, 'material')
  return i3316
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i3318 = root || request.c( 'BehaviourAI.TankAI' )
  var i3319 = data
  i3318.stopDistance = i3319[0]
  i3318.rotationSpeed = i3319[1]
  i3318.moveSpeed = i3319[2]
  request.r(i3319[3], i3319[4], 0, i3318, '_exclamationMark')
  request.r(i3319[5], i3319[6], 0, i3318, '_guidance')
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3321 = data
  i3320.enabled = !!i3321[0]
  i3320.planeDistance = i3321[1]
  i3320.referencePixelsPerUnit = i3321[2]
  i3320.isFallbackOverlay = !!i3321[3]
  i3320.renderMode = i3321[4]
  i3320.renderOrder = i3321[5]
  i3320.sortingLayerName = i3321[6]
  i3320.sortingOrder = i3321[7]
  i3320.scaleFactor = i3321[8]
  request.r(i3321[9], i3321[10], 0, i3320, 'worldCamera')
  i3320.overrideSorting = !!i3321[11]
  i3320.pixelPerfect = !!i3321[12]
  i3320.targetDisplay = i3321[13]
  i3320.overridePixelPerfect = !!i3321[14]
  return i3320
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3322 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3323 = data
  i3322.m_UiScaleMode = i3323[0]
  i3322.m_ReferencePixelsPerUnit = i3323[1]
  i3322.m_ScaleFactor = i3323[2]
  i3322.m_ReferenceResolution = new pc.Vec2( i3323[3], i3323[4] )
  i3322.m_ScreenMatchMode = i3323[5]
  i3322.m_MatchWidthOrHeight = i3323[6]
  i3322.m_PhysicalUnit = i3323[7]
  i3322.m_FallbackScreenDPI = i3323[8]
  i3322.m_DefaultSpriteDPI = i3323[9]
  i3322.m_DynamicPixelsPerUnit = i3323[10]
  i3322.m_PresetInfoIsWorld = !!i3323[11]
  return i3322
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3324 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3325 = data
  i3324.m_IgnoreReversedGraphics = !!i3325[0]
  i3324.m_BlockingObjects = i3325[1]
  i3324.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3325[2] )
  return i3324
}

Deserializers["ExclamationMark"] = function (request, data, root) {
  var i3326 = root || request.c( 'ExclamationMark' )
  var i3327 = data
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3329 = data
  i3328.enabled = !!i3329[0]
  request.r(i3329[1], i3329[2], 0, i3328, 'sharedMaterial')
  var i3331 = i3329[3]
  var i3330 = []
  for(var i = 0; i < i3331.length; i += 2) {
  request.r(i3331[i + 0], i3331[i + 1], 2, i3330, '')
  }
  i3328.sharedMaterials = i3330
  i3328.receiveShadows = !!i3329[4]
  i3328.shadowCastingMode = i3329[5]
  i3328.sortingLayerID = i3329[6]
  i3328.sortingOrder = i3329[7]
  i3328.lightmapIndex = i3329[8]
  i3328.lightmapSceneIndex = i3329[9]
  i3328.lightmapScaleOffset = new pc.Vec4( i3329[10], i3329[11], i3329[12], i3329[13] )
  i3328.lightProbeUsage = i3329[14]
  i3328.reflectionProbeUsage = i3329[15]
  i3328.color = new pc.Color(i3329[16], i3329[17], i3329[18], i3329[19])
  request.r(i3329[20], i3329[21], 0, i3328, 'sprite')
  i3328.flipX = !!i3329[22]
  i3328.flipY = !!i3329[23]
  i3328.drawMode = i3329[24]
  i3328.size = new pc.Vec2( i3329[25], i3329[26] )
  i3328.tileMode = i3329[27]
  i3328.adaptiveModeThreshold = i3329[28]
  i3328.maskInteraction = i3329[29]
  i3328.spriteSortPoint = i3329[30]
  return i3328
}

Deserializers["TitnSprite"] = function (request, data, root) {
  var i3332 = root || request.c( 'TitnSprite' )
  var i3333 = data
  i3332.offsetDistance = i3333[0]
  i3332.heightOffset = i3333[1]
  request.r(i3333[2], i3333[3], 0, i3332, '_tank')
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3335 = data
  i3334.enabled = !!i3335[0]
  i3334.type = i3335[1]
  i3334.color = new pc.Color(i3335[2], i3335[3], i3335[4], i3335[5])
  i3334.cullingMask = i3335[6]
  i3334.intensity = i3335[7]
  i3334.range = i3335[8]
  i3334.spotAngle = i3335[9]
  i3334.shadows = i3335[10]
  i3334.shadowNormalBias = i3335[11]
  i3334.shadowBias = i3335[12]
  i3334.shadowStrength = i3335[13]
  i3334.shadowResolution = i3335[14]
  i3334.lightmapBakeType = i3335[15]
  i3334.renderMode = i3335[16]
  request.r(i3335[17], i3335[18], 0, i3334, 'cookie')
  i3334.cookieSize = i3335[19]
  return i3334
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i3336 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i3337 = data
  i3336.m_Version = i3337[0]
  i3336.m_UsePipelineSettings = !!i3337[1]
  i3336.m_AdditionalLightsShadowResolutionTier = i3337[2]
  i3336.m_LightLayerMask = i3337[3]
  i3336.m_RenderingLayers = i3337[4]
  i3336.m_CustomShadowLayers = !!i3337[5]
  i3336.m_ShadowLayerMask = i3337[6]
  i3336.m_ShadowRenderingLayers = i3337[7]
  i3336.m_LightCookieSize = new pc.Vec2( i3337[8], i3337[9] )
  i3336.m_LightCookieOffset = new pc.Vec2( i3337[10], i3337[11] )
  i3336.m_SoftShadowQuality = i3337[12]
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3339 = data
  request.r(i3339[0], i3339[1], 0, i3338, 'clip')
  request.r(i3339[2], i3339[3], 0, i3338, 'outputAudioMixerGroup')
  i3338.playOnAwake = !!i3339[4]
  i3338.loop = !!i3339[5]
  i3338.time = i3339[6]
  i3338.volume = i3339[7]
  i3338.pitch = i3339[8]
  i3338.enabled = !!i3339[9]
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3341 = data
  i3340.mass = i3341[0]
  i3340.drag = i3341[1]
  i3340.angularDrag = i3341[2]
  i3340.useGravity = !!i3341[3]
  i3340.isKinematic = !!i3341[4]
  i3340.constraints = i3341[5]
  i3340.maxAngularVelocity = i3341[6]
  i3340.collisionDetectionMode = i3341[7]
  i3340.interpolation = i3341[8]
  return i3340
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i3342 = root || request.c( 'Howitzer.Projectile' )
  var i3343 = data
  return i3342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i3344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i3345 = data
  i3344.center = new pc.Vec3( i3345[0], i3345[1], i3345[2] )
  i3344.radius = i3345[3]
  i3344.height = i3345[4]
  i3344.direction = i3345[5]
  i3344.enabled = !!i3345[6]
  i3344.isTrigger = !!i3345[7]
  request.r(i3345[8], i3345[9], 0, i3344, 'material')
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3347 = data
  i3346.name = i3347[0]
  i3346.atlasId = i3347[1]
  i3346.mipmapCount = i3347[2]
  i3346.hdr = !!i3347[3]
  i3346.size = i3347[4]
  i3346.anisoLevel = i3347[5]
  i3346.filterMode = i3347[6]
  var i3349 = i3347[7]
  var i3348 = []
  for(var i = 0; i < i3349.length; i += 4) {
    i3348.push( UnityEngine.Rect.MinMaxRect(i3349[i + 0], i3349[i + 1], i3349[i + 2], i3349[i + 3]) );
  }
  i3346.rects = i3348
  i3346.wrapU = i3347[8]
  i3346.wrapV = i3347[9]
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3353 = data
  i3352.name = i3353[0]
  i3352.index = i3353[1]
  i3352.startup = !!i3353[2]
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3355 = data
  i3354.enabled = !!i3355[0]
  i3354.aspect = i3355[1]
  i3354.orthographic = !!i3355[2]
  i3354.orthographicSize = i3355[3]
  i3354.backgroundColor = new pc.Color(i3355[4], i3355[5], i3355[6], i3355[7])
  i3354.nearClipPlane = i3355[8]
  i3354.farClipPlane = i3355[9]
  i3354.fieldOfView = i3355[10]
  i3354.depth = i3355[11]
  i3354.clearFlags = i3355[12]
  i3354.cullingMask = i3355[13]
  i3354.rect = i3355[14]
  request.r(i3355[15], i3355[16], 0, i3354, 'targetTexture')
  i3354.usePhysicalProperties = !!i3355[17]
  i3354.focalLength = i3355[18]
  i3354.sensorSize = new pc.Vec2( i3355[19], i3355[20] )
  i3354.lensShift = new pc.Vec2( i3355[21], i3355[22] )
  i3354.gateFit = i3355[23]
  i3354.commandBufferCount = i3355[24]
  i3354.cameraType = i3355[25]
  return i3354
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i3356 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i3357 = data
  request.r(i3357[0], i3357[1], 0, i3356, 'joystick')
  i3356.minYAngle = i3357[2]
  i3356.maxYAngle = i3357[3]
  i3356.rotationSpeed = i3357[4]
  return i3356
}

Deserializers["InteractiveArt"] = function (request, data, root) {
  var i3358 = root || request.c( 'InteractiveArt' )
  var i3359 = data
  request.r(i3359[0], i3359[1], 0, i3358, 'secondCamera')
  i3358.transitionSpeed = i3359[2]
  request.r(i3359[3], i3359[4], 0, i3358, '_shopping')
  request.r(i3359[5], i3359[6], 0, i3358, '_arm')
  request.r(i3359[7], i3359[8], 0, i3358, '_arta1')
  request.r(i3359[9], i3359[10], 0, i3358, '_arta2')
  request.r(i3359[11], i3359[12], 0, i3358, '_particleSystem')
  return i3358
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i3360 = root || request.c( 'Howitzer.LookAtReticle' )
  var i3361 = data
  request.r(i3361[0], i3361[1], 0, i3360, 'reticle')
  request.r(i3361[2], i3361[3], 0, i3360, 'mainCamera')
  i3360.rotationSpeed = i3361[4]
  i3360.maxPitchAngle = i3361[5]
  i3360.minPitchAngle = i3361[6]
  return i3360
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i3362 = root || request.c( 'FollowBullet' )
  var i3363 = data
  i3362._smoothSpeed = i3363[0]
  i3362._offset = new pc.Vec3( i3363[1], i3363[2], i3363[3] )
  return i3362
}

Deserializers["HandAnimation"] = function (request, data, root) {
  var i3364 = root || request.c( 'HandAnimation' )
  var i3365 = data
  i3364.scaleSpeed = i3365[0]
  i3364.scaleAmount = i3365[1]
  return i3364
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i3366 = root || request.c( 'UI.PlayerUIController' )
  var i3367 = data
  request.r(i3367[0], i3367[1], 0, i3366, 'shootButton')
  request.r(i3367[2], i3367[3], 0, i3366, 'zoomButton')
  request.r(i3367[4], i3367[5], 0, i3366, '_cross')
  request.r(i3367[6], i3367[7], 0, i3366, '_mark')
  request.r(i3367[8], i3367[9], 0, i3366, '_tutorialHand2')
  return i3366
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i3368 = root || request.c( 'Howitzer.PlayerZoom' )
  var i3369 = data
  request.r(i3369[0], i3369[1], 0, i3368, 'crosshair')
  request.r(i3369[2], i3369[3], 0, i3368, 'mainCamera')
  request.r(i3369[4], i3369[5], 0, i3368, 'zoomImage')
  var i3371 = i3369[6]
  var i3370 = []
  for(var i = 0; i < i3371.length; i += 2) {
  request.r(i3371[i + 0], i3371[i + 1], 2, i3370, '')
  }
  i3368.objectsToDisable = i3370
  i3368.zoomFOV = i3369[7]
  i3368.normalFOV = i3369[8]
  i3368.zoomSpeed = i3369[9]
  request.r(i3369[10], i3369[11], 0, i3368, 'joystick')
  i3368.rotationSpeed = i3369[12]
  return i3368
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i3374 = root || request.c( 'Howitzer.PlayerShooting' )
  var i3375 = data
  request.r(i3375[0], i3375[1], 0, i3374, 'playerShootingCooldown')
  request.r(i3375[2], i3375[3], 0, i3374, 'mainCamera')
  request.r(i3375[4], i3375[5], 0, i3374, 'crosshairUI')
  request.r(i3375[6], i3375[7], 0, i3374, 'muzzleFlash')
  request.r(i3375[8], i3375[9], 0, i3374, 'explosionEffect')
  request.r(i3375[10], i3375[11], 0, i3374, 'projectilePosition')
  request.r(i3375[12], i3375[13], 0, i3374, 'prefabProjectile')
  i3374.projectileSpeed = i3375[14]
  i3374.poolSize = i3375[15]
  request.r(i3375[16], i3375[17], 0, i3374, '_followBullet')
  request.r(i3375[18], i3375[19], 0, i3374, '_managerCamers')
  request.r(i3375[20], i3375[21], 0, i3374, '_timeController')
  request.r(i3375[22], i3375[23], 0, i3374, '_playerUIController')
  request.r(i3375[24], i3375[25], 0, i3374, '_tanksFabric')
  request.r(i3375[26], i3375[27], 0, i3374, '_missPoint')
  request.r(i3375[28], i3375[29], 0, i3374, '_pumping')
  request.r(i3375[30], i3375[31], 0, i3374, 'button')
  return i3374
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i3376 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i3377 = data
  request.r(i3377[0], i3377[1], 0, i3376, 'shootButton')
  request.r(i3377[2], i3377[3], 0, i3376, 'cooldownText')
  request.r(i3377[4], i3377[5], 0, i3376, 'cooldownImage')
  i3376.cooldownTime = i3377[6]
  return i3376
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3378 = root || request.c( 'UnityEngine.UI.Button' )
  var i3379 = data
  i3378.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3379[0], i3378.m_OnClick)
  i3378.m_Navigation = request.d('UnityEngine.UI.Navigation', i3379[1], i3378.m_Navigation)
  i3378.m_Transition = i3379[2]
  i3378.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3379[3], i3378.m_Colors)
  i3378.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3379[4], i3378.m_SpriteState)
  i3378.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3379[5], i3378.m_AnimationTriggers)
  i3378.m_Interactable = !!i3379[6]
  request.r(i3379[7], i3379[8], 0, i3378, 'm_TargetGraphic')
  return i3378
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3380 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3381 = data
  i3380.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3381[0], i3380.m_PersistentCalls)
  return i3380
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3382 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3383 = data
  var i3385 = i3383[0]
  var i3384 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3385.length; i += 1) {
    i3384.add(request.d('UnityEngine.Events.PersistentCall', i3385[i + 0]));
  }
  i3382.m_Calls = i3384
  return i3382
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3388 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3389 = data
  request.r(i3389[0], i3389[1], 0, i3388, 'm_Target')
  i3388.m_TargetAssemblyTypeName = i3389[2]
  i3388.m_MethodName = i3389[3]
  i3388.m_Mode = i3389[4]
  i3388.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3389[5], i3388.m_Arguments)
  i3388.m_CallState = i3389[6]
  return i3388
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3390 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3391 = data
  i3390.m_Mode = i3391[0]
  i3390.m_WrapAround = !!i3391[1]
  request.r(i3391[2], i3391[3], 0, i3390, 'm_SelectOnUp')
  request.r(i3391[4], i3391[5], 0, i3390, 'm_SelectOnDown')
  request.r(i3391[6], i3391[7], 0, i3390, 'm_SelectOnLeft')
  request.r(i3391[8], i3391[9], 0, i3390, 'm_SelectOnRight')
  return i3390
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3392 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3393 = data
  i3392.m_NormalColor = new pc.Color(i3393[0], i3393[1], i3393[2], i3393[3])
  i3392.m_HighlightedColor = new pc.Color(i3393[4], i3393[5], i3393[6], i3393[7])
  i3392.m_PressedColor = new pc.Color(i3393[8], i3393[9], i3393[10], i3393[11])
  i3392.m_SelectedColor = new pc.Color(i3393[12], i3393[13], i3393[14], i3393[15])
  i3392.m_DisabledColor = new pc.Color(i3393[16], i3393[17], i3393[18], i3393[19])
  i3392.m_ColorMultiplier = i3393[20]
  i3392.m_FadeDuration = i3393[21]
  return i3392
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3394 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3395 = data
  request.r(i3395[0], i3395[1], 0, i3394, 'm_HighlightedSprite')
  request.r(i3395[2], i3395[3], 0, i3394, 'm_PressedSprite')
  request.r(i3395[4], i3395[5], 0, i3394, 'm_SelectedSprite')
  request.r(i3395[6], i3395[7], 0, i3394, 'm_DisabledSprite')
  return i3394
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3396 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3397 = data
  i3396.m_NormalTrigger = i3397[0]
  i3396.m_HighlightedTrigger = i3397[1]
  i3396.m_PressedTrigger = i3397[2]
  i3396.m_SelectedTrigger = i3397[3]
  i3396.m_DisabledTrigger = i3397[4]
  return i3396
}

Deserializers["TutorialHand2"] = function (request, data, root) {
  var i3398 = root || request.c( 'TutorialHand2' )
  var i3399 = data
  i3398.scaleSpeed = i3399[0]
  i3398.scaleAmount = i3399[1]
  request.r(i3399[2], i3399[3], 0, i3398, '_shootButton')
  return i3398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3401 = data
  i3400.usedByComposite = !!i3401[0]
  i3400.autoTiling = !!i3401[1]
  i3400.size = new pc.Vec2( i3401[2], i3401[3] )
  i3400.edgeRadius = i3401[4]
  i3400.enabled = !!i3401[5]
  i3400.isTrigger = !!i3401[6]
  i3400.usedByEffector = !!i3401[7]
  i3400.density = i3401[8]
  i3400.offset = new pc.Vec2( i3401[9], i3401[10] )
  request.r(i3401[11], i3401[12], 0, i3400, 'material')
  return i3400
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3402 = root || request.c( 'UnityEngine.UI.Text' )
  var i3403 = data
  i3402.m_FontData = request.d('UnityEngine.UI.FontData', i3403[0], i3402.m_FontData)
  i3402.m_Text = i3403[1]
  request.r(i3403[2], i3403[3], 0, i3402, 'm_Material')
  i3402.m_Maskable = !!i3403[4]
  i3402.m_Color = new pc.Color(i3403[5], i3403[6], i3403[7], i3403[8])
  i3402.m_RaycastTarget = !!i3403[9]
  i3402.m_RaycastPadding = new pc.Vec4( i3403[10], i3403[11], i3403[12], i3403[13] )
  return i3402
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3404 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3405 = data
  request.r(i3405[0], i3405[1], 0, i3404, 'm_Font')
  i3404.m_FontSize = i3405[2]
  i3404.m_FontStyle = i3405[3]
  i3404.m_BestFit = !!i3405[4]
  i3404.m_MinSize = i3405[5]
  i3404.m_MaxSize = i3405[6]
  i3404.m_Alignment = i3405[7]
  i3404.m_AlignByGeometry = !!i3405[8]
  i3404.m_RichText = !!i3405[9]
  i3404.m_HorizontalOverflow = i3405[10]
  i3404.m_VerticalOverflow = i3405[11]
  i3404.m_LineSpacing = i3405[12]
  return i3404
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i3406 = root || request.c( 'TutorialHand' )
  var i3407 = data
  request.r(i3407[0], i3407[1], 0, i3406, 'handImage')
  i3406.moveDistance = i3407[2]
  i3406.moveDuration = i3407[3]
  request.r(i3407[4], i3407[5], 0, i3406, '_tutorialHand2')
  request.r(i3407[6], i3407[7], 0, i3406, '_shootButton')
  request.r(i3407[8], i3407[9], 0, i3406, '_zoomButton')
  return i3406
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i3408 = root || request.c( 'UI.CrosshairMovement' )
  var i3409 = data
  request.r(i3409[0], i3409[1], 0, i3408, 'joystick')
  request.r(i3409[2], i3409[3], 0, i3408, 'crosshair')
  i3408.moveSpeed = i3409[4]
  request.r(i3409[5], i3409[6], 0, i3408, 'canvasRect')
  return i3408
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i3410 = root || request.c( 'UI.EndCardAnimation' )
  var i3411 = data
  request.r(i3411[0], i3411[1], 0, i3410, 'background')
  request.r(i3411[2], i3411[3], 0, i3410, 'title')
  request.r(i3411[4], i3411[5], 0, i3410, 'logoAndButton')
  request.r(i3411[6], i3411[7], 0, i3410, 'titleText')
  i3410.fadeDuration = i3411[8]
  i3410.scaleDuration = i3411[9]
  i3410.scaleEase = i3411[10]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3413 = data
  i3412.m_Alpha = i3413[0]
  i3412.m_Interactable = !!i3413[1]
  i3412.m_BlocksRaycasts = !!i3413[2]
  i3412.m_IgnoreParentGroups = !!i3413[3]
  i3412.enabled = !!i3413[4]
  return i3412
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i3414 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i3415 = data
  i3414.m_AspectMode = i3415[0]
  i3414.m_AspectRatio = i3415[1]
  return i3414
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i3416 = root || request.c( 'UI.ButtonPulse' )
  var i3417 = data
  i3416.scaleMultiplier = i3417[0]
  i3416.duration = i3417[1]
  return i3416
}

Deserializers["Cross"] = function (request, data, root) {
  var i3418 = root || request.c( 'Cross' )
  var i3419 = data
  return i3418
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3420 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3421 = data
  request.r(i3421[0], i3421[1], 0, i3420, 'm_FirstSelected')
  i3420.m_sendNavigationEvents = !!i3421[2]
  i3420.m_DragThreshold = i3421[3]
  return i3420
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3422 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3423 = data
  i3422.m_HorizontalAxis = i3423[0]
  i3422.m_VerticalAxis = i3423[1]
  i3422.m_SubmitButton = i3423[2]
  i3422.m_CancelButton = i3423[3]
  i3422.m_InputActionsPerSecond = i3423[4]
  i3422.m_RepeatDelay = i3423[5]
  i3422.m_ForceModuleActive = !!i3423[6]
  i3422.m_SendPointerHoverToParent = !!i3423[7]
  return i3422
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i3424 = root || request.c( 'Bootstraps.Bootstrap' )
  var i3425 = data
  request.r(i3425[0], i3425[1], 0, i3424, 'tanksFabric')
  request.r(i3425[2], i3425[3], 0, i3424, 'scenarioGame')
  return i3424
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i3426 = root || request.c( 'Fabric.TanksFabric' )
  var i3427 = data
  request.r(i3427[0], i3427[1], 0, i3426, 'tankPrefab')
  var i3429 = i3427[2]
  var i3428 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3429.length; i += 2) {
  request.r(i3429[i + 0], i3429[i + 1], 1, i3428, '')
  }
  i3426.spawnPoints = i3428
  var i3431 = i3427[3]
  var i3430 = []
  for(var i = 0; i < i3431.length; i += 2) {
  request.r(i3431[i + 0], i3431[i + 1], 2, i3430, '')
  }
  i3426.targets = i3430
  return i3426
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i3436 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i3437 = data
  request.r(i3437[0], i3437[1], 0, i3436, 'endCard')
  return i3436
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i3438 = root || request.c( 'UI.TankKillStatistics' )
  var i3439 = data
  return i3438
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i3440 = root || request.c( 'ManagerCamers' )
  var i3441 = data
  request.r(i3441[0], i3441[1], 0, i3440, '_plauerCamera')
  request.r(i3441[2], i3441[3], 0, i3440, '_bulletCamera')
  request.r(i3441[4], i3441[5], 0, i3440, '_timeController')
  request.r(i3441[6], i3441[7], 0, i3440, '_playerZoom')
  return i3440
}

Deserializers["TimeController"] = function (request, data, root) {
  var i3442 = root || request.c( 'TimeController' )
  var i3443 = data
  i3442.slowMotionScale = i3443[0]
  i3442.slowMotionDuration = i3443[1]
  i3442.restoreSpeedDuration = i3443[2]
  return i3442
}

Deserializers["Pumping"] = function (request, data, root) {
  var i3444 = root || request.c( 'Pumping' )
  var i3445 = data
  request.r(i3445[0], i3445[1], 0, i3444, 'm_Camera')
  request.r(i3445[2], i3445[3], 0, i3444, '_pumpingCamera')
  request.r(i3445[4], i3445[5], 0, i3444, '_UI')
  request.r(i3445[6], i3445[7], 0, i3444, '_arta1')
  request.r(i3445[8], i3445[9], 0, i3444, '_arm')
  request.r(i3445[10], i3445[11], 0, i3444, '_shopping')
  request.r(i3445[12], i3445[13], 0, i3444, '_interactiveArt')
  request.r(i3445[14], i3445[15], 0, i3444, '_tacticsFabric')
  request.r(i3445[16], i3445[17], 0, i3444, '_button')
  request.r(i3445[18], i3445[19], 0, i3444, '_titnSprite')
  return i3444
}

Deserializers["Shopping"] = function (request, data, root) {
  var i3446 = root || request.c( 'Shopping' )
  var i3447 = data
  request.r(i3447[0], i3447[1], 0, i3446, '_improveButton')
  request.r(i3447[2], i3447[3], 0, i3446, '_purchase')
  request.r(i3447[4], i3447[5], 0, i3446, '_shopping')
  request.r(i3447[6], i3447[7], 0, i3446, '_shoppingPlayer')
  request.r(i3447[8], i3447[9], 0, i3446, '_tanksFabric')
  request.r(i3447[10], i3447[11], 0, i3446, '_interactiveArt')
  return i3446
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3448 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3449 = data
  request.r(i3449[0], i3449[1], 0, i3448, 'm_ObjectArgument')
  i3448.m_ObjectArgumentAssemblyTypeName = i3449[2]
  i3448.m_IntArgument = i3449[3]
  i3448.m_FloatArgument = i3449[4]
  i3448.m_StringArgument = i3449[5]
  i3448.m_BoolArgument = !!i3449[6]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3451 = data
  i3450.ambientIntensity = i3451[0]
  i3450.reflectionIntensity = i3451[1]
  i3450.ambientMode = i3451[2]
  i3450.ambientLight = new pc.Color(i3451[3], i3451[4], i3451[5], i3451[6])
  i3450.ambientSkyColor = new pc.Color(i3451[7], i3451[8], i3451[9], i3451[10])
  i3450.ambientGroundColor = new pc.Color(i3451[11], i3451[12], i3451[13], i3451[14])
  i3450.ambientEquatorColor = new pc.Color(i3451[15], i3451[16], i3451[17], i3451[18])
  i3450.fogColor = new pc.Color(i3451[19], i3451[20], i3451[21], i3451[22])
  i3450.fogEndDistance = i3451[23]
  i3450.fogStartDistance = i3451[24]
  i3450.fogDensity = i3451[25]
  i3450.fog = !!i3451[26]
  request.r(i3451[27], i3451[28], 0, i3450, 'skybox')
  i3450.fogMode = i3451[29]
  var i3453 = i3451[30]
  var i3452 = []
  for(var i = 0; i < i3453.length; i += 1) {
    i3452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3453[i + 0]) );
  }
  i3450.lightmaps = i3452
  i3450.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3451[31], i3450.lightProbes)
  i3450.lightmapsMode = i3451[32]
  i3450.mixedBakeMode = i3451[33]
  i3450.environmentLightingMode = i3451[34]
  i3450.ambientProbe = new pc.SphericalHarmonicsL2(i3451[35])
  i3450.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3451[36])
  i3450.useReferenceAmbientProbe = !!i3451[37]
  request.r(i3451[38], i3451[39], 0, i3450, 'customReflection')
  request.r(i3451[40], i3451[41], 0, i3450, 'defaultReflection')
  i3450.defaultReflectionMode = i3451[42]
  i3450.defaultReflectionResolution = i3451[43]
  i3450.sunLightObjectId = i3451[44]
  i3450.pixelLightCount = i3451[45]
  i3450.defaultReflectionHDR = !!i3451[46]
  i3450.hasLightDataAsset = !!i3451[47]
  i3450.hasManualGenerate = !!i3451[48]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3457 = data
  request.r(i3457[0], i3457[1], 0, i3456, 'lightmapColor')
  request.r(i3457[2], i3457[3], 0, i3456, 'lightmapDirection')
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3458 = root || new UnityEngine.LightProbes()
  var i3459 = data
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3467 = data
  var i3469 = i3467[0]
  var i3468 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3469.length; i += 1) {
    i3468.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3469[i + 0]));
  }
  i3466.ShaderCompilationErrors = i3468
  i3466.name = i3467[1]
  i3466.guid = i3467[2]
  var i3471 = i3467[3]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.push( i3471[i + 0] );
  }
  i3466.shaderDefinedKeywords = i3470
  var i3473 = i3467[4]
  var i3472 = []
  for(var i = 0; i < i3473.length; i += 1) {
    i3472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3473[i + 0]) );
  }
  i3466.passes = i3472
  var i3475 = i3467[5]
  var i3474 = []
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3475[i + 0]) );
  }
  i3466.usePasses = i3474
  var i3477 = i3467[6]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3477[i + 0]) );
  }
  i3466.defaultParameterValues = i3476
  request.r(i3467[7], i3467[8], 0, i3466, 'unityFallbackShader')
  i3466.readDepth = !!i3467[9]
  i3466.isCreatedByShaderGraph = !!i3467[10]
  i3466.compiled = !!i3467[11]
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3481 = data
  i3480.shaderName = i3481[0]
  i3480.errorMessage = i3481[1]
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3486 = root || new pc.UnityShaderPass()
  var i3487 = data
  i3486.id = i3487[0]
  i3486.subShaderIndex = i3487[1]
  i3486.name = i3487[2]
  i3486.passType = i3487[3]
  i3486.grabPassTextureName = i3487[4]
  i3486.usePass = !!i3487[5]
  i3486.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3487[6], i3486.zTest)
  i3486.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3487[7], i3486.zWrite)
  i3486.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3487[8], i3486.culling)
  i3486.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3487[9], i3486.blending)
  i3486.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3487[10], i3486.alphaBlending)
  i3486.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3487[11], i3486.colorWriteMask)
  i3486.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3487[12], i3486.offsetUnits)
  i3486.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3487[13], i3486.offsetFactor)
  i3486.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3487[14], i3486.stencilRef)
  i3486.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3487[15], i3486.stencilReadMask)
  i3486.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3487[16], i3486.stencilWriteMask)
  i3486.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3487[17], i3486.stencilOp)
  i3486.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3487[18], i3486.stencilOpFront)
  i3486.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3487[19], i3486.stencilOpBack)
  var i3489 = i3487[20]
  var i3488 = []
  for(var i = 0; i < i3489.length; i += 1) {
    i3488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3489[i + 0]) );
  }
  i3486.tags = i3488
  var i3491 = i3487[21]
  var i3490 = []
  for(var i = 0; i < i3491.length; i += 1) {
    i3490.push( i3491[i + 0] );
  }
  i3486.passDefinedKeywords = i3490
  var i3493 = i3487[22]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3493[i + 0]) );
  }
  i3486.passDefinedKeywordGroups = i3492
  var i3495 = i3487[23]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3495[i + 0]) );
  }
  i3486.variants = i3494
  var i3497 = i3487[24]
  var i3496 = []
  for(var i = 0; i < i3497.length; i += 1) {
    i3496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3497[i + 0]) );
  }
  i3486.excludedVariants = i3496
  i3486.hasDepthReader = !!i3487[25]
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3499 = data
  i3498.val = i3499[0]
  i3498.name = i3499[1]
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3501 = data
  i3500.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3501[0], i3500.src)
  i3500.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3501[1], i3500.dst)
  i3500.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3501[2], i3500.op)
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3503 = data
  i3502.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3503[0], i3502.pass)
  i3502.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3503[1], i3502.fail)
  i3502.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3503[2], i3502.zFail)
  i3502.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3503[3], i3502.comp)
  return i3502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3507 = data
  i3506.name = i3507[0]
  i3506.value = i3507[1]
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3511 = data
  var i3513 = i3511[0]
  var i3512 = []
  for(var i = 0; i < i3513.length; i += 1) {
    i3512.push( i3513[i + 0] );
  }
  i3510.keywords = i3512
  i3510.hasDiscard = !!i3511[1]
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3517 = data
  i3516.passId = i3517[0]
  i3516.subShaderIndex = i3517[1]
  var i3519 = i3517[2]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( i3519[i + 0] );
  }
  i3516.keywords = i3518
  i3516.vertexProgram = i3517[3]
  i3516.fragmentProgram = i3517[4]
  i3516.exportedForWebGl2 = !!i3517[5]
  i3516.readDepth = !!i3517[6]
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3523 = data
  request.r(i3523[0], i3523[1], 0, i3522, 'shader')
  i3522.pass = i3523[2]
  return i3522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3527 = data
  i3526.name = i3527[0]
  i3526.type = i3527[1]
  i3526.value = new pc.Vec4( i3527[2], i3527[3], i3527[4], i3527[5] )
  i3526.textureValue = i3527[6]
  i3526.shaderPropertyFlag = i3527[7]
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3529 = data
  i3528.name = i3529[0]
  request.r(i3529[1], i3529[2], 0, i3528, 'texture')
  i3528.aabb = i3529[3]
  i3528.vertices = i3529[4]
  i3528.triangles = i3529[5]
  i3528.textureRect = UnityEngine.Rect.MinMaxRect(i3529[6], i3529[7], i3529[8], i3529[9])
  i3528.packedRect = UnityEngine.Rect.MinMaxRect(i3529[10], i3529[11], i3529[12], i3529[13])
  i3528.border = new pc.Vec4( i3529[14], i3529[15], i3529[16], i3529[17] )
  i3528.transparency = i3529[18]
  i3528.bounds = i3529[19]
  i3528.pixelsPerUnit = i3529[20]
  i3528.textureWidth = i3529[21]
  i3528.textureHeight = i3529[22]
  i3528.nativeSize = new pc.Vec2( i3529[23], i3529[24] )
  i3528.pivot = new pc.Vec2( i3529[25], i3529[26] )
  i3528.textureRectOffset = new pc.Vec2( i3529[27], i3529[28] )
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3531 = data
  i3530.name = i3531[0]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3533 = data
  i3532.name = i3533[0]
  i3532.ascent = i3533[1]
  i3532.originalLineHeight = i3533[2]
  i3532.fontSize = i3533[3]
  var i3535 = i3533[4]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3535[i + 0]) );
  }
  i3532.characterInfo = i3534
  request.r(i3533[5], i3533[6], 0, i3532, 'texture')
  i3532.originalFontSize = i3533[7]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3539 = data
  i3538.index = i3539[0]
  i3538.advance = i3539[1]
  i3538.bearing = i3539[2]
  i3538.glyphWidth = i3539[3]
  i3538.glyphHeight = i3539[4]
  i3538.minX = i3539[5]
  i3538.maxX = i3539[6]
  i3538.minY = i3539[7]
  i3538.maxY = i3539[8]
  i3538.uvBottomLeftX = i3539[9]
  i3538.uvBottomLeftY = i3539[10]
  i3538.uvBottomRightX = i3539[11]
  i3538.uvBottomRightY = i3539[12]
  i3538.uvTopLeftX = i3539[13]
  i3538.uvTopLeftY = i3539[14]
  i3538.uvTopRightX = i3539[15]
  i3538.uvTopRightY = i3539[16]
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3541 = data
  var i3543 = i3541[0]
  var i3542 = []
  for(var i = 0; i < i3543.length; i += 1) {
    i3542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3543[i + 0]) );
  }
  i3540.files = i3542
  i3540.componentToPrefabIds = i3541[1]
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3547 = data
  i3546.path = i3547[0]
  request.r(i3547[1], i3547[2], 0, i3546, 'unityObject')
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3549 = data
  var i3551 = i3549[0]
  var i3550 = []
  for(var i = 0; i < i3551.length; i += 1) {
    i3550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3551[i + 0]) );
  }
  i3548.scriptsExecutionOrder = i3550
  var i3553 = i3549[1]
  var i3552 = []
  for(var i = 0; i < i3553.length; i += 1) {
    i3552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3553[i + 0]) );
  }
  i3548.sortingLayers = i3552
  var i3555 = i3549[2]
  var i3554 = []
  for(var i = 0; i < i3555.length; i += 1) {
    i3554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3555[i + 0]) );
  }
  i3548.cullingLayers = i3554
  i3548.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3549[3], i3548.timeSettings)
  i3548.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3549[4], i3548.physicsSettings)
  i3548.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3549[5], i3548.physics2DSettings)
  i3548.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3549[6], i3548.qualitySettings)
  i3548.enableRealtimeShadows = !!i3549[7]
  i3548.enableAutoInstancing = !!i3549[8]
  i3548.enableDynamicBatching = !!i3549[9]
  i3548.lightmapEncodingQuality = i3549[10]
  i3548.desiredColorSpace = i3549[11]
  var i3557 = i3549[12]
  var i3556 = []
  for(var i = 0; i < i3557.length; i += 1) {
    i3556.push( i3557[i + 0] );
  }
  i3548.allTags = i3556
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3561 = data
  i3560.name = i3561[0]
  i3560.value = i3561[1]
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3565 = data
  i3564.id = i3565[0]
  i3564.name = i3565[1]
  i3564.value = i3565[2]
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3569 = data
  i3568.id = i3569[0]
  i3568.name = i3569[1]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3571 = data
  i3570.fixedDeltaTime = i3571[0]
  i3570.maximumDeltaTime = i3571[1]
  i3570.timeScale = i3571[2]
  i3570.maximumParticleTimestep = i3571[3]
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3573 = data
  i3572.gravity = new pc.Vec3( i3573[0], i3573[1], i3573[2] )
  i3572.defaultSolverIterations = i3573[3]
  i3572.bounceThreshold = i3573[4]
  i3572.autoSyncTransforms = !!i3573[5]
  i3572.autoSimulation = !!i3573[6]
  var i3575 = i3573[7]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 1) {
    i3574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3575[i + 0]) );
  }
  i3572.collisionMatrix = i3574
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3579 = data
  i3578.enabled = !!i3579[0]
  i3578.layerId = i3579[1]
  i3578.otherLayerId = i3579[2]
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3581 = data
  request.r(i3581[0], i3581[1], 0, i3580, 'material')
  i3580.gravity = new pc.Vec2( i3581[2], i3581[3] )
  i3580.positionIterations = i3581[4]
  i3580.velocityIterations = i3581[5]
  i3580.velocityThreshold = i3581[6]
  i3580.maxLinearCorrection = i3581[7]
  i3580.maxAngularCorrection = i3581[8]
  i3580.maxTranslationSpeed = i3581[9]
  i3580.maxRotationSpeed = i3581[10]
  i3580.baumgarteScale = i3581[11]
  i3580.baumgarteTOIScale = i3581[12]
  i3580.timeToSleep = i3581[13]
  i3580.linearSleepTolerance = i3581[14]
  i3580.angularSleepTolerance = i3581[15]
  i3580.defaultContactOffset = i3581[16]
  i3580.autoSimulation = !!i3581[17]
  i3580.queriesHitTriggers = !!i3581[18]
  i3580.queriesStartInColliders = !!i3581[19]
  i3580.callbacksOnDisable = !!i3581[20]
  i3580.reuseCollisionCallbacks = !!i3581[21]
  i3580.autoSyncTransforms = !!i3581[22]
  var i3583 = i3581[23]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3583[i + 0]) );
  }
  i3580.collisionMatrix = i3582
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3587 = data
  i3586.enabled = !!i3587[0]
  i3586.layerId = i3587[1]
  i3586.otherLayerId = i3587[2]
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3589 = data
  var i3591 = i3589[0]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 1) {
    i3590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3591[i + 0]) );
  }
  i3588.qualityLevels = i3590
  var i3593 = i3589[1]
  var i3592 = []
  for(var i = 0; i < i3593.length; i += 1) {
    i3592.push( i3593[i + 0] );
  }
  i3588.names = i3592
  i3588.shadows = i3589[2]
  i3588.anisotropicFiltering = i3589[3]
  i3588.antiAliasing = i3589[4]
  i3588.lodBias = i3589[5]
  i3588.shadowCascades = i3589[6]
  i3588.shadowDistance = i3589[7]
  i3588.shadowmaskMode = i3589[8]
  i3588.shadowProjection = i3589[9]
  i3588.shadowResolution = i3589[10]
  i3588.softParticles = !!i3589[11]
  i3588.softVegetation = !!i3589[12]
  i3588.activeColorSpace = i3589[13]
  i3588.desiredColorSpace = i3589[14]
  i3588.masterTextureLimit = i3589[15]
  i3588.maxQueuedFrames = i3589[16]
  i3588.particleRaycastBudget = i3589[17]
  i3588.pixelLightCount = i3589[18]
  i3588.realtimeReflectionProbes = !!i3589[19]
  i3588.shadowCascade2Split = i3589[20]
  i3588.shadowCascade4Split = new pc.Vec3( i3589[21], i3589[22], i3589[23] )
  i3588.streamingMipmapsActive = !!i3589[24]
  i3588.vSyncCount = i3589[25]
  i3588.asyncUploadBufferSize = i3589[26]
  i3588.asyncUploadTimeSlice = i3589[27]
  i3588.billboardsFaceCameraPosition = !!i3589[28]
  i3588.shadowNearPlaneOffset = i3589[29]
  i3588.streamingMipmapsMemoryBudget = i3589[30]
  i3588.maximumLODLevel = i3589[31]
  i3588.streamingMipmapsAddAllCameras = !!i3589[32]
  i3588.streamingMipmapsMaxLevelReduction = i3589[33]
  i3588.streamingMipmapsRenderersPerFrame = i3589[34]
  i3588.resolutionScalingFixedDPIFactor = i3589[35]
  i3588.streamingMipmapsMaxFileIORequests = i3589[36]
  i3588.currentQualityLevel = i3589[37]
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3599 = data
  i3598.weight = i3599[0]
  i3598.vertices = i3599[1]
  i3598.normals = i3599[2]
  i3598.tangents = i3599[3]
  return i3598
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

Deserializers.buildID = "0f736374-1d8e-47c0-a1a6-22ec8b8fba18";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

