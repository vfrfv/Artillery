var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.JointSpring' )
  var i2151 = data
  i2150.spring = i2151[0]
  i2150.damper = i2151[1]
  i2150.targetPosition = i2151[2]
  return i2150
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.JointMotor' )
  var i2153 = data
  i2152.m_TargetVelocity = i2153[0]
  i2152.m_Force = i2153[1]
  i2152.m_FreeSpin = i2153[2]
  return i2152
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.JointLimits' )
  var i2155 = data
  i2154.m_Min = i2155[0]
  i2154.m_Max = i2155[1]
  i2154.m_Bounciness = i2155[2]
  i2154.m_BounceMinVelocity = i2155[3]
  i2154.m_ContactDistance = i2155[4]
  i2154.minBounce = i2155[5]
  i2154.maxBounce = i2155[6]
  return i2154
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.JointDrive' )
  var i2157 = data
  i2156.m_PositionSpring = i2157[0]
  i2156.m_PositionDamper = i2157[1]
  i2156.m_MaximumForce = i2157[2]
  i2156.m_UseAcceleration = i2157[3]
  return i2156
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2159 = data
  i2158.m_Spring = i2159[0]
  i2158.m_Damper = i2159[1]
  return i2158
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2161 = data
  i2160.m_Limit = i2161[0]
  i2160.m_Bounciness = i2161[1]
  i2160.m_ContactDistance = i2161[2]
  return i2160
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2163 = data
  i2162.m_ExtremumSlip = i2163[0]
  i2162.m_ExtremumValue = i2163[1]
  i2162.m_AsymptoteSlip = i2163[2]
  i2162.m_AsymptoteValue = i2163[3]
  i2162.m_Stiffness = i2163[4]
  return i2162
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2165 = data
  i2164.m_LowerAngle = i2165[0]
  i2164.m_UpperAngle = i2165[1]
  return i2164
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2167 = data
  i2166.m_MotorSpeed = i2167[0]
  i2166.m_MaximumMotorTorque = i2167[1]
  return i2166
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2169 = data
  i2168.m_DampingRatio = i2169[0]
  i2168.m_Frequency = i2169[1]
  i2168.m_Angle = i2169[2]
  return i2168
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2171 = data
  i2170.m_LowerTranslation = i2171[0]
  i2170.m_UpperTranslation = i2171[1]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2173 = data
  i2172.pivot = new pc.Vec2( i2173[0], i2173[1] )
  i2172.anchorMin = new pc.Vec2( i2173[2], i2173[3] )
  i2172.anchorMax = new pc.Vec2( i2173[4], i2173[5] )
  i2172.sizeDelta = new pc.Vec2( i2173[6], i2173[7] )
  i2172.anchoredPosition3D = new pc.Vec3( i2173[8], i2173[9], i2173[10] )
  i2172.rotation = new pc.Quat(i2173[11], i2173[12], i2173[13], i2173[14])
  i2172.scale = new pc.Vec3( i2173[15], i2173[16], i2173[17] )
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2175 = data
  i2174.cullTransparentMesh = !!i2175[0]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2177 = data
  i2176.name = i2177[0]
  i2176.tagId = i2177[1]
  i2176.enabled = !!i2177[2]
  i2176.isStatic = !!i2177[3]
  i2176.layer = i2177[4]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2179 = data
  i2178.name = i2179[0]
  i2178.width = i2179[1]
  i2178.height = i2179[2]
  i2178.mipmapCount = i2179[3]
  i2178.anisoLevel = i2179[4]
  i2178.filterMode = i2179[5]
  i2178.hdr = !!i2179[6]
  i2178.format = i2179[7]
  i2178.wrapMode = i2179[8]
  i2178.alphaIsTransparency = !!i2179[9]
  i2178.alphaSource = i2179[10]
  i2178.graphicsFormat = i2179[11]
  i2178.sRGBTexture = !!i2179[12]
  i2178.desiredColorSpace = i2179[13]
  i2178.wrapU = i2179[14]
  i2178.wrapV = i2179[15]
  return i2178
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.UI.Image' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'm_Sprite')
  i2180.m_Type = i2181[2]
  i2180.m_PreserveAspect = !!i2181[3]
  i2180.m_FillCenter = !!i2181[4]
  i2180.m_FillMethod = i2181[5]
  i2180.m_FillAmount = i2181[6]
  i2180.m_FillClockwise = !!i2181[7]
  i2180.m_FillOrigin = i2181[8]
  i2180.m_UseSpriteMesh = !!i2181[9]
  i2180.m_PixelsPerUnitMultiplier = i2181[10]
  request.r(i2181[11], i2181[12], 0, i2180, 'm_Material')
  i2180.m_Maskable = !!i2181[13]
  i2180.m_Color = new pc.Color(i2181[14], i2181[15], i2181[16], i2181[17])
  i2180.m_RaycastTarget = !!i2181[18]
  i2180.m_RaycastPadding = new pc.Vec4( i2181[19], i2181[20], i2181[21], i2181[22] )
  return i2180
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i2182 = root || request.c( 'VariableJoystick' )
  var i2183 = data
  request.r(i2183[0], i2183[1], 0, i2182, 'handle')
  i2182.moveThreshold = i2183[2]
  i2182.joystickType = i2183[3]
  request.r(i2183[4], i2183[5], 0, i2182, 'background')
  i2182.handleRange = i2183[6]
  i2182.deadZone = i2183[7]
  i2182.axisOptions = i2183[8]
  i2182.snapX = !!i2183[9]
  i2182.snapY = !!i2183[10]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2185 = data
  i2184.position = new pc.Vec3( i2185[0], i2185[1], i2185[2] )
  i2184.scale = new pc.Vec3( i2185[3], i2185[4], i2185[5] )
  i2184.rotation = new pc.Quat(i2185[6], i2185[7], i2185[8], i2185[9])
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'sharedMesh')
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2189 = data
  request.r(i2189[0], i2189[1], 0, i2188, 'additionalVertexStreams')
  i2188.enabled = !!i2189[2]
  request.r(i2189[3], i2189[4], 0, i2188, 'sharedMaterial')
  var i2191 = i2189[5]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 2) {
  request.r(i2191[i + 0], i2191[i + 1], 2, i2190, '')
  }
  i2188.sharedMaterials = i2190
  i2188.receiveShadows = !!i2189[6]
  i2188.shadowCastingMode = i2189[7]
  i2188.sortingLayerID = i2189[8]
  i2188.sortingOrder = i2189[9]
  i2188.lightmapIndex = i2189[10]
  i2188.lightmapSceneIndex = i2189[11]
  i2188.lightmapScaleOffset = new pc.Vec4( i2189[12], i2189[13], i2189[14], i2189[15] )
  i2188.lightProbeUsage = i2189[16]
  i2188.reflectionProbeUsage = i2189[17]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2195 = data
  i2194.name = i2195[0]
  i2194.halfPrecision = !!i2195[1]
  i2194.useUInt32IndexFormat = !!i2195[2]
  i2194.vertexCount = i2195[3]
  i2194.aabb = i2195[4]
  var i2197 = i2195[5]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( !!i2197[i + 0] );
  }
  i2194.streams = i2196
  i2194.vertices = i2195[6]
  var i2199 = i2195[7]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2199[i + 0]) );
  }
  i2194.subMeshes = i2198
  var i2201 = i2195[8]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 16) {
    i2200.push( new pc.Mat4().setData(i2201[i + 0], i2201[i + 1], i2201[i + 2], i2201[i + 3],  i2201[i + 4], i2201[i + 5], i2201[i + 6], i2201[i + 7],  i2201[i + 8], i2201[i + 9], i2201[i + 10], i2201[i + 11],  i2201[i + 12], i2201[i + 13], i2201[i + 14], i2201[i + 15]) );
  }
  i2194.bindposes = i2200
  var i2203 = i2195[9]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2203[i + 0]) );
  }
  i2194.blendShapes = i2202
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2209 = data
  i2208.triangles = i2209[0]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2215 = data
  i2214.name = i2215[0]
  var i2217 = i2215[1]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2217[i + 0]) );
  }
  i2214.frames = i2216
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2218 = root || new pc.UnityMaterial()
  var i2219 = data
  i2218.name = i2219[0]
  request.r(i2219[1], i2219[2], 0, i2218, 'shader')
  i2218.renderQueue = i2219[3]
  i2218.enableInstancing = !!i2219[4]
  var i2221 = i2219[5]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2221[i + 0]) );
  }
  i2218.floatParameters = i2220
  var i2223 = i2219[6]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2223[i + 0]) );
  }
  i2218.colorParameters = i2222
  var i2225 = i2219[7]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2225[i + 0]) );
  }
  i2218.vectorParameters = i2224
  var i2227 = i2219[8]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2227[i + 0]) );
  }
  i2218.textureParameters = i2226
  var i2229 = i2219[9]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2229[i + 0]) );
  }
  i2218.materialFlags = i2228
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2233 = data
  i2232.name = i2233[0]
  i2232.value = i2233[1]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2237 = data
  i2236.name = i2237[0]
  i2236.value = new pc.Color(i2237[1], i2237[2], i2237[3], i2237[4])
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2241 = data
  i2240.name = i2241[0]
  i2240.value = new pc.Vec4( i2241[1], i2241[2], i2241[3], i2241[4] )
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2245 = data
  i2244.name = i2245[0]
  request.r(i2245[1], i2245[2], 0, i2244, 'value')
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2249 = data
  i2248.name = i2249[0]
  i2248.enabled = !!i2249[1]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2251 = data
  i2250.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2251[0], i2250.main)
  i2250.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2251[1], i2250.colorBySpeed)
  i2250.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2251[2], i2250.colorOverLifetime)
  i2250.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2251[3], i2250.emission)
  i2250.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2251[4], i2250.rotationBySpeed)
  i2250.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2251[5], i2250.rotationOverLifetime)
  i2250.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2251[6], i2250.shape)
  i2250.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2251[7], i2250.sizeBySpeed)
  i2250.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2251[8], i2250.sizeOverLifetime)
  i2250.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2251[9], i2250.textureSheetAnimation)
  i2250.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2251[10], i2250.velocityOverLifetime)
  i2250.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2251[11], i2250.noise)
  i2250.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2251[12], i2250.inheritVelocity)
  i2250.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2251[13], i2250.forceOverLifetime)
  i2250.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2251[14], i2250.limitVelocityOverLifetime)
  i2250.useAutoRandomSeed = !!i2251[15]
  i2250.randomSeed = i2251[16]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2252 = root || new pc.ParticleSystemMain()
  var i2253 = data
  i2252.duration = i2253[0]
  i2252.loop = !!i2253[1]
  i2252.prewarm = !!i2253[2]
  i2252.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[3], i2252.startDelay)
  i2252.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[4], i2252.startLifetime)
  i2252.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[5], i2252.startSpeed)
  i2252.startSize3D = !!i2253[6]
  i2252.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[7], i2252.startSizeX)
  i2252.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[8], i2252.startSizeY)
  i2252.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[9], i2252.startSizeZ)
  i2252.startRotation3D = !!i2253[10]
  i2252.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[11], i2252.startRotationX)
  i2252.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[12], i2252.startRotationY)
  i2252.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[13], i2252.startRotationZ)
  i2252.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2253[14], i2252.startColor)
  i2252.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[15], i2252.gravityModifier)
  i2252.simulationSpace = i2253[16]
  request.r(i2253[17], i2253[18], 0, i2252, 'customSimulationSpace')
  i2252.simulationSpeed = i2253[19]
  i2252.useUnscaledTime = !!i2253[20]
  i2252.scalingMode = i2253[21]
  i2252.playOnAwake = !!i2253[22]
  i2252.maxParticles = i2253[23]
  i2252.emitterVelocityMode = i2253[24]
  i2252.stopAction = i2253[25]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2254 = root || new pc.MinMaxCurve()
  var i2255 = data
  i2254.mode = i2255[0]
  i2254.curveMin = new pc.AnimationCurve( { keys_flow: i2255[1] } )
  i2254.curveMax = new pc.AnimationCurve( { keys_flow: i2255[2] } )
  i2254.curveMultiplier = i2255[3]
  i2254.constantMin = i2255[4]
  i2254.constantMax = i2255[5]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2256 = root || new pc.MinMaxGradient()
  var i2257 = data
  i2256.mode = i2257[0]
  i2256.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2257[1], i2256.gradientMin)
  i2256.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2257[2], i2256.gradientMax)
  i2256.colorMin = new pc.Color(i2257[3], i2257[4], i2257[5], i2257[6])
  i2256.colorMax = new pc.Color(i2257[7], i2257[8], i2257[9], i2257[10])
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2259 = data
  i2258.mode = i2259[0]
  var i2261 = i2259[1]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2261[i + 0]) );
  }
  i2258.colorKeys = i2260
  var i2263 = i2259[2]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2263[i + 0]) );
  }
  i2258.alphaKeys = i2262
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2264 = root || new pc.ParticleSystemColorBySpeed()
  var i2265 = data
  i2264.enabled = !!i2265[0]
  i2264.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2265[1], i2264.color)
  i2264.range = new pc.Vec2( i2265[2], i2265[3] )
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2269 = data
  i2268.color = new pc.Color(i2269[0], i2269[1], i2269[2], i2269[3])
  i2268.time = i2269[4]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2273 = data
  i2272.alpha = i2273[0]
  i2272.time = i2273[1]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2274 = root || new pc.ParticleSystemColorOverLifetime()
  var i2275 = data
  i2274.enabled = !!i2275[0]
  i2274.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2275[1], i2274.color)
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2276 = root || new pc.ParticleSystemEmitter()
  var i2277 = data
  i2276.enabled = !!i2277[0]
  i2276.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[1], i2276.rateOverTime)
  i2276.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[2], i2276.rateOverDistance)
  var i2279 = i2277[3]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2279[i + 0]) );
  }
  i2276.bursts = i2278
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2282 = root || new pc.ParticleSystemBurst()
  var i2283 = data
  i2282.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[0], i2282.count)
  i2282.cycleCount = i2283[1]
  i2282.minCount = i2283[2]
  i2282.maxCount = i2283[3]
  i2282.repeatInterval = i2283[4]
  i2282.time = i2283[5]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2284 = root || new pc.ParticleSystemRotationBySpeed()
  var i2285 = data
  i2284.enabled = !!i2285[0]
  i2284.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2285[1], i2284.x)
  i2284.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2285[2], i2284.y)
  i2284.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2285[3], i2284.z)
  i2284.separateAxes = !!i2285[4]
  i2284.range = new pc.Vec2( i2285[5], i2285[6] )
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2286 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2287 = data
  i2286.enabled = !!i2287[0]
  i2286.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[1], i2286.x)
  i2286.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[2], i2286.y)
  i2286.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[3], i2286.z)
  i2286.separateAxes = !!i2287[4]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2288 = root || new pc.ParticleSystemShape()
  var i2289 = data
  i2288.enabled = !!i2289[0]
  i2288.shapeType = i2289[1]
  i2288.randomDirectionAmount = i2289[2]
  i2288.sphericalDirectionAmount = i2289[3]
  i2288.randomPositionAmount = i2289[4]
  i2288.alignToDirection = !!i2289[5]
  i2288.radius = i2289[6]
  i2288.radiusMode = i2289[7]
  i2288.radiusSpread = i2289[8]
  i2288.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[9], i2288.radiusSpeed)
  i2288.radiusThickness = i2289[10]
  i2288.angle = i2289[11]
  i2288.length = i2289[12]
  i2288.boxThickness = new pc.Vec3( i2289[13], i2289[14], i2289[15] )
  i2288.meshShapeType = i2289[16]
  request.r(i2289[17], i2289[18], 0, i2288, 'mesh')
  request.r(i2289[19], i2289[20], 0, i2288, 'meshRenderer')
  request.r(i2289[21], i2289[22], 0, i2288, 'skinnedMeshRenderer')
  i2288.useMeshMaterialIndex = !!i2289[23]
  i2288.meshMaterialIndex = i2289[24]
  i2288.useMeshColors = !!i2289[25]
  i2288.normalOffset = i2289[26]
  i2288.arc = i2289[27]
  i2288.arcMode = i2289[28]
  i2288.arcSpread = i2289[29]
  i2288.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[30], i2288.arcSpeed)
  i2288.donutRadius = i2289[31]
  i2288.position = new pc.Vec3( i2289[32], i2289[33], i2289[34] )
  i2288.rotation = new pc.Vec3( i2289[35], i2289[36], i2289[37] )
  i2288.scale = new pc.Vec3( i2289[38], i2289[39], i2289[40] )
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2290 = root || new pc.ParticleSystemSizeBySpeed()
  var i2291 = data
  i2290.enabled = !!i2291[0]
  i2290.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[1], i2290.x)
  i2290.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[2], i2290.y)
  i2290.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[3], i2290.z)
  i2290.separateAxes = !!i2291[4]
  i2290.range = new pc.Vec2( i2291[5], i2291[6] )
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2292 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2293 = data
  i2292.enabled = !!i2293[0]
  i2292.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[1], i2292.x)
  i2292.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[2], i2292.y)
  i2292.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[3], i2292.z)
  i2292.separateAxes = !!i2293[4]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2294 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2295 = data
  i2294.enabled = !!i2295[0]
  i2294.mode = i2295[1]
  i2294.animation = i2295[2]
  i2294.numTilesX = i2295[3]
  i2294.numTilesY = i2295[4]
  i2294.useRandomRow = !!i2295[5]
  i2294.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[6], i2294.frameOverTime)
  i2294.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[7], i2294.startFrame)
  i2294.cycleCount = i2295[8]
  i2294.rowIndex = i2295[9]
  i2294.flipU = i2295[10]
  i2294.flipV = i2295[11]
  i2294.spriteCount = i2295[12]
  var i2297 = i2295[13]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 2) {
  request.r(i2297[i + 0], i2297[i + 1], 2, i2296, '')
  }
  i2294.sprites = i2296
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2300 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2301 = data
  i2300.enabled = !!i2301[0]
  i2300.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[1], i2300.x)
  i2300.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[2], i2300.y)
  i2300.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[3], i2300.z)
  i2300.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[4], i2300.radial)
  i2300.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[5], i2300.speedModifier)
  i2300.space = i2301[6]
  i2300.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[7], i2300.orbitalX)
  i2300.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[8], i2300.orbitalY)
  i2300.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[9], i2300.orbitalZ)
  i2300.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[10], i2300.orbitalOffsetX)
  i2300.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[11], i2300.orbitalOffsetY)
  i2300.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[12], i2300.orbitalOffsetZ)
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2302 = root || new pc.ParticleSystemNoise()
  var i2303 = data
  i2302.enabled = !!i2303[0]
  i2302.separateAxes = !!i2303[1]
  i2302.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[2], i2302.strengthX)
  i2302.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[3], i2302.strengthY)
  i2302.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[4], i2302.strengthZ)
  i2302.frequency = i2303[5]
  i2302.damping = !!i2303[6]
  i2302.octaveCount = i2303[7]
  i2302.octaveMultiplier = i2303[8]
  i2302.octaveScale = i2303[9]
  i2302.quality = i2303[10]
  i2302.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[11], i2302.scrollSpeed)
  i2302.scrollSpeedMultiplier = i2303[12]
  i2302.remapEnabled = !!i2303[13]
  i2302.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[14], i2302.remapX)
  i2302.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[15], i2302.remapY)
  i2302.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[16], i2302.remapZ)
  i2302.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[17], i2302.positionAmount)
  i2302.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[18], i2302.rotationAmount)
  i2302.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[19], i2302.sizeAmount)
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2304 = root || new pc.ParticleSystemInheritVelocity()
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.mode = i2305[1]
  i2304.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[2], i2304.curve)
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2306 = root || new pc.ParticleSystemForceOverLifetime()
  var i2307 = data
  i2306.enabled = !!i2307[0]
  i2306.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[1], i2306.x)
  i2306.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[2], i2306.y)
  i2306.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[3], i2306.z)
  i2306.space = i2307[4]
  i2306.randomized = !!i2307[5]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2308 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2309 = data
  i2308.enabled = !!i2309[0]
  i2308.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[1], i2308.limit)
  i2308.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[2], i2308.limitX)
  i2308.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[3], i2308.limitY)
  i2308.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[4], i2308.limitZ)
  i2308.dampen = i2309[5]
  i2308.separateAxes = !!i2309[6]
  i2308.space = i2309[7]
  i2308.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[8], i2308.drag)
  i2308.multiplyDragByParticleSize = !!i2309[9]
  i2308.multiplyDragByParticleVelocity = !!i2309[10]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2311 = data
  i2310.enabled = !!i2311[0]
  request.r(i2311[1], i2311[2], 0, i2310, 'sharedMaterial')
  var i2313 = i2311[3]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 2) {
  request.r(i2313[i + 0], i2313[i + 1], 2, i2312, '')
  }
  i2310.sharedMaterials = i2312
  i2310.receiveShadows = !!i2311[4]
  i2310.shadowCastingMode = i2311[5]
  i2310.sortingLayerID = i2311[6]
  i2310.sortingOrder = i2311[7]
  i2310.lightmapIndex = i2311[8]
  i2310.lightmapSceneIndex = i2311[9]
  i2310.lightmapScaleOffset = new pc.Vec4( i2311[10], i2311[11], i2311[12], i2311[13] )
  i2310.lightProbeUsage = i2311[14]
  i2310.reflectionProbeUsage = i2311[15]
  request.r(i2311[16], i2311[17], 0, i2310, 'mesh')
  i2310.meshCount = i2311[18]
  i2310.activeVertexStreamsCount = i2311[19]
  i2310.alignment = i2311[20]
  i2310.renderMode = i2311[21]
  i2310.sortMode = i2311[22]
  i2310.lengthScale = i2311[23]
  i2310.velocityScale = i2311[24]
  i2310.cameraVelocityScale = i2311[25]
  i2310.normalDirection = i2311[26]
  i2310.sortingFudge = i2311[27]
  i2310.minParticleSize = i2311[28]
  i2310.maxParticleSize = i2311[29]
  i2310.pivot = new pc.Vec3( i2311[30], i2311[31], i2311[32] )
  request.r(i2311[33], i2311[34], 0, i2310, 'trailMaterial')
  return i2310
}

Deserializers["CFX_AutoDestructShuriken"] = function (request, data, root) {
  var i2314 = root || request.c( 'CFX_AutoDestructShuriken' )
  var i2315 = data
  i2314.OnlyDeactivate = !!i2315[0]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'clip')
  request.r(i2317[2], i2317[3], 0, i2316, 'outputAudioMixerGroup')
  i2316.playOnAwake = !!i2317[4]
  i2316.loop = !!i2317[5]
  i2316.time = i2317[6]
  i2316.volume = i2317[7]
  i2316.pitch = i2317[8]
  i2316.enabled = !!i2317[9]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2319 = data
  i2318.mass = i2319[0]
  i2318.drag = i2319[1]
  i2318.angularDrag = i2319[2]
  i2318.useGravity = !!i2319[3]
  i2318.isKinematic = !!i2319[4]
  i2318.constraints = i2319[5]
  i2318.maxAngularVelocity = i2319[6]
  i2318.collisionDetectionMode = i2319[7]
  i2318.interpolation = i2319[8]
  return i2318
}

Deserializers["Howitzer.Projectile"] = function (request, data, root) {
  var i2320 = root || request.c( 'Howitzer.Projectile' )
  var i2321 = data
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2323 = data
  i2322.center = new pc.Vec3( i2323[0], i2323[1], i2323[2] )
  i2322.radius = i2323[3]
  i2322.height = i2323[4]
  i2322.direction = i2323[5]
  i2322.enabled = !!i2323[6]
  i2322.isTrigger = !!i2323[7]
  request.r(i2323[8], i2323[9], 0, i2322, 'material')
  return i2322
}

Deserializers["BehaviourAI.TankAI"] = function (request, data, root) {
  var i2324 = root || request.c( 'BehaviourAI.TankAI' )
  var i2325 = data
  i2324.stopDistance = i2325[0]
  i2324.rotationSpeed = i2325[1]
  i2324.moveSpeed = i2325[2]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2327 = data
  i2326.center = new pc.Vec3( i2327[0], i2327[1], i2327[2] )
  i2326.size = new pc.Vec3( i2327[3], i2327[4], i2327[5] )
  i2326.enabled = !!i2327[6]
  i2326.isTrigger = !!i2327[7]
  request.r(i2327[8], i2327[9], 0, i2326, 'material')
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2329 = data
  i2328.enabled = !!i2329[0]
  request.r(i2329[1], i2329[2], 0, i2328, 'sharedMaterial')
  var i2331 = i2329[3]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 2) {
  request.r(i2331[i + 0], i2331[i + 1], 2, i2330, '')
  }
  i2328.sharedMaterials = i2330
  i2328.receiveShadows = !!i2329[4]
  i2328.shadowCastingMode = i2329[5]
  i2328.sortingLayerID = i2329[6]
  i2328.sortingOrder = i2329[7]
  i2328.lightmapIndex = i2329[8]
  i2328.lightmapSceneIndex = i2329[9]
  i2328.lightmapScaleOffset = new pc.Vec4( i2329[10], i2329[11], i2329[12], i2329[13] )
  i2328.lightProbeUsage = i2329[14]
  i2328.reflectionProbeUsage = i2329[15]
  i2328.color = new pc.Color(i2329[16], i2329[17], i2329[18], i2329[19])
  request.r(i2329[20], i2329[21], 0, i2328, 'sprite')
  i2328.flipX = !!i2329[22]
  i2328.flipY = !!i2329[23]
  i2328.drawMode = i2329[24]
  i2328.size = new pc.Vec2( i2329[25], i2329[26] )
  i2328.tileMode = i2329[27]
  i2328.adaptiveModeThreshold = i2329[28]
  i2328.maskInteraction = i2329[29]
  i2328.spriteSortPoint = i2329[30]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2333 = data
  i2332.name = i2333[0]
  i2332.atlasId = i2333[1]
  i2332.mipmapCount = i2333[2]
  i2332.hdr = !!i2333[3]
  i2332.size = i2333[4]
  i2332.anisoLevel = i2333[5]
  i2332.filterMode = i2333[6]
  var i2335 = i2333[7]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 4) {
    i2334.push( UnityEngine.Rect.MinMaxRect(i2335[i + 0], i2335[i + 1], i2335[i + 2], i2335[i + 3]) );
  }
  i2332.rects = i2334
  i2332.wrapU = i2333[8]
  i2332.wrapV = i2333[9]
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2339 = data
  i2338.name = i2339[0]
  i2338.index = i2339[1]
  i2338.startup = !!i2339[2]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2341 = data
  i2340.enabled = !!i2341[0]
  i2340.aspect = i2341[1]
  i2340.orthographic = !!i2341[2]
  i2340.orthographicSize = i2341[3]
  i2340.backgroundColor = new pc.Color(i2341[4], i2341[5], i2341[6], i2341[7])
  i2340.nearClipPlane = i2341[8]
  i2340.farClipPlane = i2341[9]
  i2340.fieldOfView = i2341[10]
  i2340.depth = i2341[11]
  i2340.clearFlags = i2341[12]
  i2340.cullingMask = i2341[13]
  i2340.rect = i2341[14]
  request.r(i2341[15], i2341[16], 0, i2340, 'targetTexture')
  i2340.usePhysicalProperties = !!i2341[17]
  i2340.focalLength = i2341[18]
  i2340.sensorSize = new pc.Vec2( i2341[19], i2341[20] )
  i2340.lensShift = new pc.Vec2( i2341[21], i2341[22] )
  i2340.gateFit = i2341[23]
  i2340.commandBufferCount = i2341[24]
  i2340.cameraType = i2341[25]
  return i2340
}

Deserializers["Howitzer.LookAtCrosshair"] = function (request, data, root) {
  var i2342 = root || request.c( 'Howitzer.LookAtCrosshair' )
  var i2343 = data
  request.r(i2343[0], i2343[1], 0, i2342, 'joystick')
  i2342.minYAngle = i2343[2]
  i2342.maxYAngle = i2343[3]
  i2342.rotationSpeed = i2343[4]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2345 = data
  i2344.enabled = !!i2345[0]
  i2344.type = i2345[1]
  i2344.color = new pc.Color(i2345[2], i2345[3], i2345[4], i2345[5])
  i2344.cullingMask = i2345[6]
  i2344.intensity = i2345[7]
  i2344.range = i2345[8]
  i2344.spotAngle = i2345[9]
  i2344.shadows = i2345[10]
  i2344.shadowNormalBias = i2345[11]
  i2344.shadowBias = i2345[12]
  i2344.shadowStrength = i2345[13]
  i2344.shadowResolution = i2345[14]
  i2344.lightmapBakeType = i2345[15]
  i2344.renderMode = i2345[16]
  request.r(i2345[17], i2345[18], 0, i2344, 'cookie')
  i2344.cookieSize = i2345[19]
  return i2344
}

Deserializers["Howitzer.LookAtReticle"] = function (request, data, root) {
  var i2346 = root || request.c( 'Howitzer.LookAtReticle' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'reticle')
  request.r(i2347[2], i2347[3], 0, i2346, 'mainCamera')
  i2346.rotationSpeed = i2347[4]
  i2346.maxPitchAngle = i2347[5]
  i2346.minPitchAngle = i2347[6]
  return i2346
}

Deserializers["FollowBullet"] = function (request, data, root) {
  var i2348 = root || request.c( 'FollowBullet' )
  var i2349 = data
  i2348._smoothSpeed = i2349[0]
  i2348._offset = new pc.Vec3( i2349[1], i2349[2], i2349[3] )
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2351 = data
  i2350.enabled = !!i2351[0]
  i2350.planeDistance = i2351[1]
  i2350.referencePixelsPerUnit = i2351[2]
  i2350.isFallbackOverlay = !!i2351[3]
  i2350.renderMode = i2351[4]
  i2350.renderOrder = i2351[5]
  i2350.sortingLayerName = i2351[6]
  i2350.sortingOrder = i2351[7]
  i2350.scaleFactor = i2351[8]
  request.r(i2351[9], i2351[10], 0, i2350, 'worldCamera')
  i2350.overrideSorting = !!i2351[11]
  i2350.pixelPerfect = !!i2351[12]
  i2350.targetDisplay = i2351[13]
  i2350.overridePixelPerfect = !!i2351[14]
  return i2350
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2352 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2353 = data
  i2352.m_UiScaleMode = i2353[0]
  i2352.m_ReferencePixelsPerUnit = i2353[1]
  i2352.m_ScaleFactor = i2353[2]
  i2352.m_ReferenceResolution = new pc.Vec2( i2353[3], i2353[4] )
  i2352.m_ScreenMatchMode = i2353[5]
  i2352.m_MatchWidthOrHeight = i2353[6]
  i2352.m_PhysicalUnit = i2353[7]
  i2352.m_FallbackScreenDPI = i2353[8]
  i2352.m_DefaultSpriteDPI = i2353[9]
  i2352.m_DynamicPixelsPerUnit = i2353[10]
  i2352.m_PresetInfoIsWorld = !!i2353[11]
  return i2352
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2354 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2355 = data
  i2354.m_IgnoreReversedGraphics = !!i2355[0]
  i2354.m_BlockingObjects = i2355[1]
  i2354.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2355[2] )
  return i2354
}

Deserializers["UI.PlayerUIController"] = function (request, data, root) {
  var i2356 = root || request.c( 'UI.PlayerUIController' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'shootButton')
  request.r(i2357[2], i2357[3], 0, i2356, 'zoomButton')
  return i2356
}

Deserializers["Howitzer.PlayerZoom"] = function (request, data, root) {
  var i2358 = root || request.c( 'Howitzer.PlayerZoom' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'crosshair')
  request.r(i2359[2], i2359[3], 0, i2358, 'mainCamera')
  request.r(i2359[4], i2359[5], 0, i2358, 'zoomImage')
  var i2361 = i2359[6]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 2) {
  request.r(i2361[i + 0], i2361[i + 1], 2, i2360, '')
  }
  i2358.objectsToDisable = i2360
  i2358.zoomFOV = i2359[7]
  i2358.normalFOV = i2359[8]
  i2358.zoomSpeed = i2359[9]
  request.r(i2359[10], i2359[11], 0, i2358, 'joystick')
  i2358.rotationSpeed = i2359[12]
  return i2358
}

Deserializers["Howitzer.PlayerShooting"] = function (request, data, root) {
  var i2364 = root || request.c( 'Howitzer.PlayerShooting' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'playerShootingCooldown')
  request.r(i2365[2], i2365[3], 0, i2364, 'mainCamera')
  request.r(i2365[4], i2365[5], 0, i2364, 'crosshairUI')
  request.r(i2365[6], i2365[7], 0, i2364, 'muzzleFlash')
  request.r(i2365[8], i2365[9], 0, i2364, 'explosionEffect')
  request.r(i2365[10], i2365[11], 0, i2364, 'projectilePosition')
  request.r(i2365[12], i2365[13], 0, i2364, 'prefabProjectile')
  i2364.projectileSpeed = i2365[14]
  i2364.poolSize = i2365[15]
  request.r(i2365[16], i2365[17], 0, i2364, '_followBullet')
  request.r(i2365[18], i2365[19], 0, i2364, '_managerCamers')
  request.r(i2365[20], i2365[21], 0, i2364, '_timeController')
  return i2364
}

Deserializers["Howitzer.PlayerShootingCooldown"] = function (request, data, root) {
  var i2366 = root || request.c( 'Howitzer.PlayerShootingCooldown' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, 'shootButton')
  request.r(i2367[2], i2367[3], 0, i2366, 'cooldownText')
  request.r(i2367[4], i2367[5], 0, i2366, 'cooldownImage')
  i2366.cooldownTime = i2367[6]
  return i2366
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2368 = root || request.c( 'UnityEngine.UI.Button' )
  var i2369 = data
  i2368.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2369[0], i2368.m_OnClick)
  i2368.m_Navigation = request.d('UnityEngine.UI.Navigation', i2369[1], i2368.m_Navigation)
  i2368.m_Transition = i2369[2]
  i2368.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2369[3], i2368.m_Colors)
  i2368.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2369[4], i2368.m_SpriteState)
  i2368.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2369[5], i2368.m_AnimationTriggers)
  i2368.m_Interactable = !!i2369[6]
  request.r(i2369[7], i2369[8], 0, i2368, 'm_TargetGraphic')
  return i2368
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2371 = data
  i2370.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2371[0], i2370.m_PersistentCalls)
  return i2370
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2373 = data
  var i2375 = i2373[0]
  var i2374 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.add(request.d('UnityEngine.Events.PersistentCall', i2375[i + 0]));
  }
  i2372.m_Calls = i2374
  return i2372
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2378 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2379 = data
  request.r(i2379[0], i2379[1], 0, i2378, 'm_Target')
  i2378.m_TargetAssemblyTypeName = i2379[2]
  i2378.m_MethodName = i2379[3]
  i2378.m_Mode = i2379[4]
  i2378.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2379[5], i2378.m_Arguments)
  i2378.m_CallState = i2379[6]
  return i2378
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2380 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2381 = data
  i2380.m_Mode = i2381[0]
  i2380.m_WrapAround = !!i2381[1]
  request.r(i2381[2], i2381[3], 0, i2380, 'm_SelectOnUp')
  request.r(i2381[4], i2381[5], 0, i2380, 'm_SelectOnDown')
  request.r(i2381[6], i2381[7], 0, i2380, 'm_SelectOnLeft')
  request.r(i2381[8], i2381[9], 0, i2380, 'm_SelectOnRight')
  return i2380
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2382 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2383 = data
  i2382.m_NormalColor = new pc.Color(i2383[0], i2383[1], i2383[2], i2383[3])
  i2382.m_HighlightedColor = new pc.Color(i2383[4], i2383[5], i2383[6], i2383[7])
  i2382.m_PressedColor = new pc.Color(i2383[8], i2383[9], i2383[10], i2383[11])
  i2382.m_SelectedColor = new pc.Color(i2383[12], i2383[13], i2383[14], i2383[15])
  i2382.m_DisabledColor = new pc.Color(i2383[16], i2383[17], i2383[18], i2383[19])
  i2382.m_ColorMultiplier = i2383[20]
  i2382.m_FadeDuration = i2383[21]
  return i2382
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'm_HighlightedSprite')
  request.r(i2385[2], i2385[3], 0, i2384, 'm_PressedSprite')
  request.r(i2385[4], i2385[5], 0, i2384, 'm_SelectedSprite')
  request.r(i2385[6], i2385[7], 0, i2384, 'm_DisabledSprite')
  return i2384
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2387 = data
  i2386.m_NormalTrigger = i2387[0]
  i2386.m_HighlightedTrigger = i2387[1]
  i2386.m_PressedTrigger = i2387[2]
  i2386.m_SelectedTrigger = i2387[3]
  i2386.m_DisabledTrigger = i2387[4]
  return i2386
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.UI.Text' )
  var i2389 = data
  i2388.m_FontData = request.d('UnityEngine.UI.FontData', i2389[0], i2388.m_FontData)
  i2388.m_Text = i2389[1]
  request.r(i2389[2], i2389[3], 0, i2388, 'm_Material')
  i2388.m_Maskable = !!i2389[4]
  i2388.m_Color = new pc.Color(i2389[5], i2389[6], i2389[7], i2389[8])
  i2388.m_RaycastTarget = !!i2389[9]
  i2388.m_RaycastPadding = new pc.Vec4( i2389[10], i2389[11], i2389[12], i2389[13] )
  return i2388
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'm_Font')
  i2390.m_FontSize = i2391[2]
  i2390.m_FontStyle = i2391[3]
  i2390.m_BestFit = !!i2391[4]
  i2390.m_MinSize = i2391[5]
  i2390.m_MaxSize = i2391[6]
  i2390.m_Alignment = i2391[7]
  i2390.m_AlignByGeometry = !!i2391[8]
  i2390.m_RichText = !!i2391[9]
  i2390.m_HorizontalOverflow = i2391[10]
  i2390.m_VerticalOverflow = i2391[11]
  i2390.m_LineSpacing = i2391[12]
  return i2390
}

Deserializers["TutorialHand"] = function (request, data, root) {
  var i2392 = root || request.c( 'TutorialHand' )
  var i2393 = data
  request.r(i2393[0], i2393[1], 0, i2392, 'handImage')
  i2392.moveDistance = i2393[2]
  i2392.moveDuration = i2393[3]
  return i2392
}

Deserializers["UI.CrosshairMovement"] = function (request, data, root) {
  var i2394 = root || request.c( 'UI.CrosshairMovement' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'joystick')
  request.r(i2395[2], i2395[3], 0, i2394, 'crosshair')
  i2394.moveSpeed = i2395[4]
  request.r(i2395[5], i2395[6], 0, i2394, 'canvasRect')
  return i2394
}

Deserializers["UI.EndCardAnimation"] = function (request, data, root) {
  var i2396 = root || request.c( 'UI.EndCardAnimation' )
  var i2397 = data
  request.r(i2397[0], i2397[1], 0, i2396, 'background')
  request.r(i2397[2], i2397[3], 0, i2396, 'title')
  request.r(i2397[4], i2397[5], 0, i2396, 'logoAndButton')
  request.r(i2397[6], i2397[7], 0, i2396, 'titleText')
  i2396.fadeDuration = i2397[8]
  i2396.scaleDuration = i2397[9]
  i2396.scaleEase = i2397[10]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2399 = data
  i2398.m_Alpha = i2399[0]
  i2398.m_Interactable = !!i2399[1]
  i2398.m_BlocksRaycasts = !!i2399[2]
  i2398.m_IgnoreParentGroups = !!i2399[3]
  i2398.enabled = !!i2399[4]
  return i2398
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i2401 = data
  i2400.m_AspectMode = i2401[0]
  i2400.m_AspectRatio = i2401[1]
  return i2400
}

Deserializers["UI.ButtonPulse"] = function (request, data, root) {
  var i2402 = root || request.c( 'UI.ButtonPulse' )
  var i2403 = data
  i2402.scaleMultiplier = i2403[0]
  i2402.duration = i2403[1]
  return i2402
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2405 = data
  request.r(i2405[0], i2405[1], 0, i2404, 'm_FirstSelected')
  i2404.m_sendNavigationEvents = !!i2405[2]
  i2404.m_DragThreshold = i2405[3]
  return i2404
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2407 = data
  i2406.m_HorizontalAxis = i2407[0]
  i2406.m_VerticalAxis = i2407[1]
  i2406.m_SubmitButton = i2407[2]
  i2406.m_CancelButton = i2407[3]
  i2406.m_InputActionsPerSecond = i2407[4]
  i2406.m_RepeatDelay = i2407[5]
  i2406.m_ForceModuleActive = !!i2407[6]
  i2406.m_SendPointerHoverToParent = !!i2407[7]
  return i2406
}

Deserializers["Bootstraps.Bootstrap"] = function (request, data, root) {
  var i2408 = root || request.c( 'Bootstraps.Bootstrap' )
  var i2409 = data
  request.r(i2409[0], i2409[1], 0, i2408, 'tanksFabric')
  request.r(i2409[2], i2409[3], 0, i2408, 'scenarioGame')
  return i2408
}

Deserializers["Fabric.TanksFabric"] = function (request, data, root) {
  var i2410 = root || request.c( 'Fabric.TanksFabric' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'tankPrefab')
  var i2413 = i2411[2]
  var i2412 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2413.length; i += 2) {
  request.r(i2413[i + 0], i2413[i + 1], 1, i2412, '')
  }
  i2410.spawnPoints = i2412
  var i2415 = i2411[3]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 2) {
  request.r(i2415[i + 0], i2415[i + 1], 2, i2414, '')
  }
  i2410.targets = i2414
  return i2410
}

Deserializers["Bootstraps.ScenarioGame"] = function (request, data, root) {
  var i2420 = root || request.c( 'Bootstraps.ScenarioGame' )
  var i2421 = data
  request.r(i2421[0], i2421[1], 0, i2420, 'endCard')
  return i2420
}

Deserializers["UI.TankKillStatistics"] = function (request, data, root) {
  var i2422 = root || request.c( 'UI.TankKillStatistics' )
  var i2423 = data
  return i2422
}

Deserializers["ManagerCamers"] = function (request, data, root) {
  var i2424 = root || request.c( 'ManagerCamers' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, '_plauerCamera')
  request.r(i2425[2], i2425[3], 0, i2424, '_bulletCamera')
  request.r(i2425[4], i2425[5], 0, i2424, '_timeController')
  request.r(i2425[6], i2425[7], 0, i2424, '_playerZoom')
  return i2424
}

Deserializers["TimeController"] = function (request, data, root) {
  var i2426 = root || request.c( 'TimeController' )
  var i2427 = data
  i2426.slowMotionScale = i2427[0]
  i2426.slowMotionDuration = i2427[1]
  i2426.restoreSpeedDuration = i2427[2]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2429 = data
  i2428.ambientIntensity = i2429[0]
  i2428.reflectionIntensity = i2429[1]
  i2428.ambientMode = i2429[2]
  i2428.ambientLight = new pc.Color(i2429[3], i2429[4], i2429[5], i2429[6])
  i2428.ambientSkyColor = new pc.Color(i2429[7], i2429[8], i2429[9], i2429[10])
  i2428.ambientGroundColor = new pc.Color(i2429[11], i2429[12], i2429[13], i2429[14])
  i2428.ambientEquatorColor = new pc.Color(i2429[15], i2429[16], i2429[17], i2429[18])
  i2428.fogColor = new pc.Color(i2429[19], i2429[20], i2429[21], i2429[22])
  i2428.fogEndDistance = i2429[23]
  i2428.fogStartDistance = i2429[24]
  i2428.fogDensity = i2429[25]
  i2428.fog = !!i2429[26]
  request.r(i2429[27], i2429[28], 0, i2428, 'skybox')
  i2428.fogMode = i2429[29]
  var i2431 = i2429[30]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2431[i + 0]) );
  }
  i2428.lightmaps = i2430
  i2428.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2429[31], i2428.lightProbes)
  i2428.lightmapsMode = i2429[32]
  i2428.mixedBakeMode = i2429[33]
  i2428.environmentLightingMode = i2429[34]
  i2428.ambientProbe = new pc.SphericalHarmonicsL2(i2429[35])
  i2428.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2429[36])
  i2428.useReferenceAmbientProbe = !!i2429[37]
  request.r(i2429[38], i2429[39], 0, i2428, 'customReflection')
  request.r(i2429[40], i2429[41], 0, i2428, 'defaultReflection')
  i2428.defaultReflectionMode = i2429[42]
  i2428.defaultReflectionResolution = i2429[43]
  i2428.sunLightObjectId = i2429[44]
  i2428.pixelLightCount = i2429[45]
  i2428.defaultReflectionHDR = !!i2429[46]
  i2428.hasLightDataAsset = !!i2429[47]
  i2428.hasManualGenerate = !!i2429[48]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'lightmapColor')
  request.r(i2435[2], i2435[3], 0, i2434, 'lightmapDirection')
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2436 = root || new UnityEngine.LightProbes()
  var i2437 = data
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2445 = data
  var i2447 = i2445[0]
  var i2446 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2447[i + 0]));
  }
  i2444.ShaderCompilationErrors = i2446
  i2444.name = i2445[1]
  i2444.guid = i2445[2]
  var i2449 = i2445[3]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( i2449[i + 0] );
  }
  i2444.shaderDefinedKeywords = i2448
  var i2451 = i2445[4]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2451[i + 0]) );
  }
  i2444.passes = i2450
  var i2453 = i2445[5]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2453[i + 0]) );
  }
  i2444.usePasses = i2452
  var i2455 = i2445[6]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2455[i + 0]) );
  }
  i2444.defaultParameterValues = i2454
  request.r(i2445[7], i2445[8], 0, i2444, 'unityFallbackShader')
  i2444.readDepth = !!i2445[9]
  i2444.isCreatedByShaderGraph = !!i2445[10]
  i2444.compiled = !!i2445[11]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2459 = data
  i2458.shaderName = i2459[0]
  i2458.errorMessage = i2459[1]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2464 = root || new pc.UnityShaderPass()
  var i2465 = data
  i2464.id = i2465[0]
  i2464.subShaderIndex = i2465[1]
  i2464.name = i2465[2]
  i2464.passType = i2465[3]
  i2464.grabPassTextureName = i2465[4]
  i2464.usePass = !!i2465[5]
  i2464.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[6], i2464.zTest)
  i2464.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[7], i2464.zWrite)
  i2464.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[8], i2464.culling)
  i2464.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2465[9], i2464.blending)
  i2464.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2465[10], i2464.alphaBlending)
  i2464.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[11], i2464.colorWriteMask)
  i2464.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[12], i2464.offsetUnits)
  i2464.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[13], i2464.offsetFactor)
  i2464.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[14], i2464.stencilRef)
  i2464.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[15], i2464.stencilReadMask)
  i2464.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2465[16], i2464.stencilWriteMask)
  i2464.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2465[17], i2464.stencilOp)
  i2464.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2465[18], i2464.stencilOpFront)
  i2464.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2465[19], i2464.stencilOpBack)
  var i2467 = i2465[20]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2467[i + 0]) );
  }
  i2464.tags = i2466
  var i2469 = i2465[21]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( i2469[i + 0] );
  }
  i2464.passDefinedKeywords = i2468
  var i2471 = i2465[22]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2471[i + 0]) );
  }
  i2464.passDefinedKeywordGroups = i2470
  var i2473 = i2465[23]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2473[i + 0]) );
  }
  i2464.variants = i2472
  var i2475 = i2465[24]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2475[i + 0]) );
  }
  i2464.excludedVariants = i2474
  i2464.hasDepthReader = !!i2465[25]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2477 = data
  i2476.val = i2477[0]
  i2476.name = i2477[1]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2479 = data
  i2478.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[0], i2478.src)
  i2478.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[1], i2478.dst)
  i2478.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2479[2], i2478.op)
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2481 = data
  i2480.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2481[0], i2480.pass)
  i2480.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2481[1], i2480.fail)
  i2480.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2481[2], i2480.zFail)
  i2480.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2481[3], i2480.comp)
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2485 = data
  i2484.name = i2485[0]
  i2484.value = i2485[1]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2489 = data
  var i2491 = i2489[0]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( i2491[i + 0] );
  }
  i2488.keywords = i2490
  i2488.hasDiscard = !!i2489[1]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2495 = data
  i2494.passId = i2495[0]
  i2494.subShaderIndex = i2495[1]
  var i2497 = i2495[2]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( i2497[i + 0] );
  }
  i2494.keywords = i2496
  i2494.vertexProgram = i2495[3]
  i2494.fragmentProgram = i2495[4]
  i2494.exportedForWebGl2 = !!i2495[5]
  i2494.readDepth = !!i2495[6]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2501 = data
  request.r(i2501[0], i2501[1], 0, i2500, 'shader')
  i2500.pass = i2501[2]
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2505 = data
  i2504.name = i2505[0]
  i2504.type = i2505[1]
  i2504.value = new pc.Vec4( i2505[2], i2505[3], i2505[4], i2505[5] )
  i2504.textureValue = i2505[6]
  i2504.shaderPropertyFlag = i2505[7]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2507 = data
  i2506.name = i2507[0]
  request.r(i2507[1], i2507[2], 0, i2506, 'texture')
  i2506.aabb = i2507[3]
  i2506.vertices = i2507[4]
  i2506.triangles = i2507[5]
  i2506.textureRect = UnityEngine.Rect.MinMaxRect(i2507[6], i2507[7], i2507[8], i2507[9])
  i2506.packedRect = UnityEngine.Rect.MinMaxRect(i2507[10], i2507[11], i2507[12], i2507[13])
  i2506.border = new pc.Vec4( i2507[14], i2507[15], i2507[16], i2507[17] )
  i2506.transparency = i2507[18]
  i2506.bounds = i2507[19]
  i2506.pixelsPerUnit = i2507[20]
  i2506.textureWidth = i2507[21]
  i2506.textureHeight = i2507[22]
  i2506.nativeSize = new pc.Vec2( i2507[23], i2507[24] )
  i2506.pivot = new pc.Vec2( i2507[25], i2507[26] )
  i2506.textureRectOffset = new pc.Vec2( i2507[27], i2507[28] )
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2509 = data
  i2508.name = i2509[0]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2511 = data
  i2510.name = i2511[0]
  i2510.ascent = i2511[1]
  i2510.originalLineHeight = i2511[2]
  i2510.fontSize = i2511[3]
  var i2513 = i2511[4]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2513[i + 0]) );
  }
  i2510.characterInfo = i2512
  request.r(i2511[5], i2511[6], 0, i2510, 'texture')
  i2510.originalFontSize = i2511[7]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2517 = data
  i2516.index = i2517[0]
  i2516.advance = i2517[1]
  i2516.bearing = i2517[2]
  i2516.glyphWidth = i2517[3]
  i2516.glyphHeight = i2517[4]
  i2516.minX = i2517[5]
  i2516.maxX = i2517[6]
  i2516.minY = i2517[7]
  i2516.maxY = i2517[8]
  i2516.uvBottomLeftX = i2517[9]
  i2516.uvBottomLeftY = i2517[10]
  i2516.uvBottomRightX = i2517[11]
  i2516.uvBottomRightY = i2517[12]
  i2516.uvTopLeftX = i2517[13]
  i2516.uvTopLeftY = i2517[14]
  i2516.uvTopRightX = i2517[15]
  i2516.uvTopRightY = i2517[16]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2519 = data
  var i2521 = i2519[0]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2521[i + 0]) );
  }
  i2518.files = i2520
  i2518.componentToPrefabIds = i2519[1]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2525 = data
  i2524.path = i2525[0]
  request.r(i2525[1], i2525[2], 0, i2524, 'unityObject')
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2527 = data
  var i2529 = i2527[0]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2529[i + 0]) );
  }
  i2526.scriptsExecutionOrder = i2528
  var i2531 = i2527[1]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2531[i + 0]) );
  }
  i2526.sortingLayers = i2530
  var i2533 = i2527[2]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2533[i + 0]) );
  }
  i2526.cullingLayers = i2532
  i2526.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2527[3], i2526.timeSettings)
  i2526.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2527[4], i2526.physicsSettings)
  i2526.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2527[5], i2526.physics2DSettings)
  i2526.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2527[6], i2526.qualitySettings)
  i2526.enableRealtimeShadows = !!i2527[7]
  i2526.enableAutoInstancing = !!i2527[8]
  i2526.enableDynamicBatching = !!i2527[9]
  i2526.lightmapEncodingQuality = i2527[10]
  i2526.desiredColorSpace = i2527[11]
  var i2535 = i2527[12]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( i2535[i + 0] );
  }
  i2526.allTags = i2534
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2539 = data
  i2538.name = i2539[0]
  i2538.value = i2539[1]
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2543 = data
  i2542.id = i2543[0]
  i2542.name = i2543[1]
  i2542.value = i2543[2]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2547 = data
  i2546.id = i2547[0]
  i2546.name = i2547[1]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2549 = data
  i2548.fixedDeltaTime = i2549[0]
  i2548.maximumDeltaTime = i2549[1]
  i2548.timeScale = i2549[2]
  i2548.maximumParticleTimestep = i2549[3]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2551 = data
  i2550.gravity = new pc.Vec3( i2551[0], i2551[1], i2551[2] )
  i2550.defaultSolverIterations = i2551[3]
  i2550.bounceThreshold = i2551[4]
  i2550.autoSyncTransforms = !!i2551[5]
  i2550.autoSimulation = !!i2551[6]
  var i2553 = i2551[7]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2553[i + 0]) );
  }
  i2550.collisionMatrix = i2552
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2557 = data
  i2556.enabled = !!i2557[0]
  i2556.layerId = i2557[1]
  i2556.otherLayerId = i2557[2]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2559 = data
  request.r(i2559[0], i2559[1], 0, i2558, 'material')
  i2558.gravity = new pc.Vec2( i2559[2], i2559[3] )
  i2558.positionIterations = i2559[4]
  i2558.velocityIterations = i2559[5]
  i2558.velocityThreshold = i2559[6]
  i2558.maxLinearCorrection = i2559[7]
  i2558.maxAngularCorrection = i2559[8]
  i2558.maxTranslationSpeed = i2559[9]
  i2558.maxRotationSpeed = i2559[10]
  i2558.baumgarteScale = i2559[11]
  i2558.baumgarteTOIScale = i2559[12]
  i2558.timeToSleep = i2559[13]
  i2558.linearSleepTolerance = i2559[14]
  i2558.angularSleepTolerance = i2559[15]
  i2558.defaultContactOffset = i2559[16]
  i2558.autoSimulation = !!i2559[17]
  i2558.queriesHitTriggers = !!i2559[18]
  i2558.queriesStartInColliders = !!i2559[19]
  i2558.callbacksOnDisable = !!i2559[20]
  i2558.reuseCollisionCallbacks = !!i2559[21]
  i2558.autoSyncTransforms = !!i2559[22]
  var i2561 = i2559[23]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2561[i + 0]) );
  }
  i2558.collisionMatrix = i2560
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2565 = data
  i2564.enabled = !!i2565[0]
  i2564.layerId = i2565[1]
  i2564.otherLayerId = i2565[2]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2567 = data
  var i2569 = i2567[0]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2569[i + 0]) );
  }
  i2566.qualityLevels = i2568
  var i2571 = i2567[1]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( i2571[i + 0] );
  }
  i2566.names = i2570
  i2566.shadows = i2567[2]
  i2566.anisotropicFiltering = i2567[3]
  i2566.antiAliasing = i2567[4]
  i2566.lodBias = i2567[5]
  i2566.shadowCascades = i2567[6]
  i2566.shadowDistance = i2567[7]
  i2566.shadowmaskMode = i2567[8]
  i2566.shadowProjection = i2567[9]
  i2566.shadowResolution = i2567[10]
  i2566.softParticles = !!i2567[11]
  i2566.softVegetation = !!i2567[12]
  i2566.activeColorSpace = i2567[13]
  i2566.desiredColorSpace = i2567[14]
  i2566.masterTextureLimit = i2567[15]
  i2566.maxQueuedFrames = i2567[16]
  i2566.particleRaycastBudget = i2567[17]
  i2566.pixelLightCount = i2567[18]
  i2566.realtimeReflectionProbes = !!i2567[19]
  i2566.shadowCascade2Split = i2567[20]
  i2566.shadowCascade4Split = new pc.Vec3( i2567[21], i2567[22], i2567[23] )
  i2566.streamingMipmapsActive = !!i2567[24]
  i2566.vSyncCount = i2567[25]
  i2566.asyncUploadBufferSize = i2567[26]
  i2566.asyncUploadTimeSlice = i2567[27]
  i2566.billboardsFaceCameraPosition = !!i2567[28]
  i2566.shadowNearPlaneOffset = i2567[29]
  i2566.streamingMipmapsMemoryBudget = i2567[30]
  i2566.maximumLODLevel = i2567[31]
  i2566.streamingMipmapsAddAllCameras = !!i2567[32]
  i2566.streamingMipmapsMaxLevelReduction = i2567[33]
  i2566.streamingMipmapsRenderersPerFrame = i2567[34]
  i2566.resolutionScalingFixedDPIFactor = i2567[35]
  i2566.streamingMipmapsMaxFileIORequests = i2567[36]
  i2566.currentQualityLevel = i2567[37]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2577 = data
  i2576.weight = i2577[0]
  i2576.vertices = i2577[1]
  i2576.normals = i2577[2]
  i2576.tangents = i2577[3]
  return i2576
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'm_ObjectArgument')
  i2578.m_ObjectArgumentAssemblyTypeName = i2579[2]
  i2578.m_IntArgument = i2579[3]
  i2578.m_FloatArgument = i2579[4]
  i2578.m_StringArgument = i2579[5]
  i2578.m_BoolArgument = !!i2579[6]
  return i2578
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

Deserializers.buildID = "1eb490f5-fc5a-46e2-9e39-a8c2994a3de3";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","PostFX","CinemachineVolumeSettings","InitializeModule"],["Cinemachine","PostFX","CinemachinePostProcessing","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["Cinemachine","CinemachineImpulseManager","InitializeModule"],["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

