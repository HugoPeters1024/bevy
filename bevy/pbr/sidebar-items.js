window.SIDEBAR_ITEMS = {"constant":[["CLUSTERED_FORWARD_HANDLE",""],["CLUSTERED_FORWARD_STORAGE_BUFFER_COUNT",""],["FOG_SHADER_HANDLE","Handle for the fog WGSL Shader internal asset"],["MAX_CASCADES_PER_LIGHT",""],["MAX_DIRECTIONAL_LIGHTS",""],["MAX_UNIFORM_BUFFER_POINT_LIGHTS",""],["MESH_BINDINGS_HANDLE",""],["MESH_FUNCTIONS_HANDLE",""],["MESH_SHADER_HANDLE",""],["MESH_TYPES_HANDLE",""],["MESH_VERTEX_OUTPUT",""],["MESH_VIEW_BINDINGS_HANDLE",""],["MESH_VIEW_TYPES_HANDLE",""],["PBR_AMBIENT_HANDLE",""],["PBR_BINDINGS_SHADER_HANDLE",""],["PBR_FUNCTIONS_HANDLE",""],["PBR_LIGHTING_HANDLE",""],["PBR_PREPASS_SHADER_HANDLE",""],["PBR_SHADER_HANDLE",""],["PBR_TYPES_SHADER_HANDLE",""],["PREPASS_BINDINGS_SHADER_HANDLE",""],["PREPASS_SHADER_HANDLE",""],["PREPASS_UTILS_SHADER_HANDLE",""],["SHADOWS_HANDLE",""],["SHADOW_FORMAT",""],["SKINNING_HANDLE",""],["UTILS_HANDLE",""]],"enum":[["AlphaMode","Sets how a material’s base color alpha channel is used for transparency."],["ClusterConfig","Configuration of the clustering strategy for clustered forward rendering"],["ClusterFarZMode","Configure the far z-plane mode used for the furthest depth slice for clustered forward rendering"],["FogFalloff","Allows switching between different fog falloff modes, and configuring their parameters."],["GpuPointLights",""],["LightEntity",""],["RenderFogSystems","Labels for fog-related systems"],["RenderLightSystems",""],["SimulationLightSystems",""]],"fn":[["add_clusters",""],["calculate_cluster_factors",""],["check_light_mesh_visibility",""],["extract_camera_prepass_phase",""],["extract_clusters",""],["extract_lights",""],["extract_materials","This system extracts all created or modified assets of the corresponding [`Material`] type into the “render world”."],["extract_meshes",""],["extract_skinned_meshes",""],["get_bind_group_layout_entries",""],["get_bindings",""],["prepare_clusters",""],["prepare_fog","Prepares fog metadata and writes the fog-related uniform buffers to the GPU"],["prepare_lights",""],["prepare_materials","This system prepares all assets of the corresponding [`Material`] type which where extracted this frame for the GPU."],["prepare_prepass_textures",""],["prepare_skinned_meshes",""],["queue_material_meshes",""],["queue_mesh_bind_group",""],["queue_mesh_view_bind_groups",""],["queue_prepass_material_meshes",""],["queue_prepass_view_bind_group",""],["queue_shadows",""],["update_directional_light_cascades",""],["update_directional_light_frusta",""],["update_point_light_frusta",""],["update_spot_light_frusta",""]],"mod":[["draw_3d_graph",""],["prelude",""],["wireframe",""]],"struct":[["AmbientLight","An ambient light, which lights the entire scene equally."],["Cascade",""],["CascadeShadowConfig","Controls how cascaded shadow mapping works. Prefer using [`CascadeShadowConfigBuilder`] to construct an instance."],["CascadeShadowConfigBuilder","Builder for [`CascadeShadowConfig`]."],["Cascades",""],["CascadesVisibleEntities",""],["ClusterZConfig","Configure the depth-slicing strategy for clustered forward rendering"],["Clusters",""],["CubemapVisibleEntities",""],["DirectionalLight","A Directional light."],["DirectionalLightBundle","A component bundle for [`DirectionalLight`] entities."],["DirectionalLightShadowMap","Controls the resolution of [`DirectionalLight`] shadow maps."],["DrawMesh",""],["EnvironmentMapLight","Environment map based ambient lighting representing light from distant scenery."],["ExtractedClusterConfig",""],["ExtractedClustersPointLights",""],["ExtractedDirectionalLight",""],["ExtractedMaterials",""],["ExtractedPointLight",""],["FogMeta","Metadata for fog"],["FogPlugin","A plugin that consolidates fog extraction, preparation and related resources/assets"],["FogSettings","Configures the “classic” computer graphics distance fog effect, in which objects appear progressively more covered in atmospheric haze the further away they are from the camera. Affects meshes rendered via the PBR `StandardMaterial`."],["GlobalLightMeta",""],["GlobalVisiblePointLights",""],["GpuDirectionalCascade",""],["GpuDirectionalLight",""],["GpuFog","The GPU-side representation of the fog configuration that’s sent as a uniform to the shader"],["GpuLights",""],["GpuPointLight",""],["GpuPointLightsStorage",""],["GpuPointLightsUniform",""],["LightMeta",""],["MaterialMeshBundle","A component bundle for entities with a [`Mesh`] and a [`Material`]."],["MaterialPipeline","Render pipeline data for a given [`Material`]."],["MaterialPipelineKey","A key uniquely identifying a specialized [`MaterialPipeline`]."],["MaterialPlugin","Adds the necessary ECS resources and render logic to enable rendering entities using the given [`Material`] asset type."],["MaterialProperties","Common [`Material`] properties, calculated for a specific material instance."],["MeshBindGroup",""],["MeshPipeline",""],["MeshPipelineKey","MSAA uses the highest 3 bits for the MSAA log2(sample count) to support up to 128x MSAA."],["MeshRenderPlugin",""],["MeshUniform",""],["MeshViewBindGroup",""],["NotShadowCaster","Add this component to make a `Mesh` not cast shadows."],["NotShadowReceiver","Add this component to make a `Mesh` not receive shadows."],["PbrPlugin","Sets up the entire PBR infrastructure of bevy."],["PointLight","A light that emits light in all directions from a central point."],["PointLightBundle","A component bundle for [`PointLight`] entities."],["PointLightShadowMap",""],["PrepareNextFrameMaterials","All [`Material`] values of a given type that should be prepared next frame."],["PreparedMaterial","Data prepared for a [`Material`] instance."],["PrepassPipeline",""],["PrepassPipelinePlugin","Sets up everything required to use the prepass pipeline."],["PrepassPlugin","Sets up the prepasses for a [`Material`]."],["PrepassViewBindGroup",""],["RenderMaterials","Stores all prepared representations of [`Material`] assets for as long as they exist."],["SetMaterialBindGroup","Sets the bind group for a given [`Material`] at the configured `I` index."],["SetMeshBindGroup",""],["SetMeshViewBindGroup",""],["SetPrepassViewBindGroup",""],["Shadow",""],["ShadowPassNode",""],["ShadowSamplers",""],["ShadowView",""],["SkinnedMeshJoints",""],["SkinnedMeshUniform",""],["SpotLight","A light that emits light in a given direction from a central point. Behaves like a point light in a perfectly absorbent housing that shines light only in a given direction. The direction is taken from the transform, and can be specified with `Transform::looking_at`."],["SpotLightBundle","A component bundle for spot light entities"],["StandardMaterial","A material with “standard” properties used in PBR lighting Standard property values with pictures here https://google.github.io/filament/Material%20Properties.pdf."],["StandardMaterialFlags","Bitflags info about the material a shader is currently rendering. This is accessible in the shader in the [`StandardMaterialUniform`]"],["StandardMaterialKey",""],["StandardMaterialUniform","The GPU representation of the uniform data of a [`StandardMaterial`]."],["ViewClusterBindings",""],["ViewFogUniformOffset","Inserted on each `Entity` with an `ExtractedView` to keep track of its offset in the `gpu_fogs` `DynamicUniformBuffer` within `FogMeta`"],["ViewLightEntities",""],["ViewLightsUniformOffset",""],["ViewShadowBindings",""],["VisiblePointLights",""]],"trait":[["Material","Materials are used alongside [`MaterialPlugin`] and `MaterialMeshBundle` to spawn entities that are rendered with a specific [`Material`] type. They serve as an easy to use high level way to render [`Mesh`] entities with custom shader logic."]],"type":[["DrawPrepass",""],["PbrBundle","A component bundle for PBR entities with a [`Mesh`] and a [`StandardMaterial`]."]]};