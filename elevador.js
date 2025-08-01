function createElevador() {
    const group = new THREE.Group();
    
    // PRIMEIRO - Tenta carregar com MTL
    const mtlLoader = new THREE.MTLLoader();
    
    mtlLoader.load(
        'elevador_v2b.mtl',
        function(materials) {
            console.log('✅ MTL CARREGADO!');
            materials.preload();
            
            const objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            
            objLoader.load(
                'elevador_v2b.obj', // ✅ ARQUIVO CORRETO AGORA!
                function(object) {
                    console.log('✅ OBJ CARREGADO COM MTL!');
                    
                    object.scale.setScalar(0.01);
                    
                    const box = new THREE.Box3().setFromObject(object);
                    const center = box.getCenter(new THREE.Vector3());
                    object.position.sub(center);
                    
                    // ✅ FORÇA A APLICAÇÃO DAS TEXTURAS DO MTL
                    object.traverse(function(child) {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                            
                            // DEBUG: Mostra qual material está sendo usado
                            if (child.material) {
                                console.log('🎨 MATERIAL:', child.material.name);
                                if (child.material.map) {
                                    console.log('🖼️ TEXTURA ENCONTRADA!');
                                } else {
                                    console.log('❌ SEM TEXTURA NO MATERIAL');
                                }
                            }
                        }
                    });
                    
                    group.add(object);
                    console.log('✅ ELEVADOR ADICIONADO!');
                },
                function(progress) {
                    console.log('📦 CARREGANDO OBJ...');
                },
                function(error) {
                    console.error('❌ ERRO OBJ:', error);
                }
            );
        },
        function(progress) {
            console.log('�� CARREGANDO MTL...');
        },
        function(error) {
            console.error('❌ ERRO MTL:', error);
            console.log('❌ ERRO MTL - CARREGANDO SEM TEXTURA');
            loadWithoutMTL(group);
        }
    );
    
    group.position.set(0, 0, 0);
    return group;
}

// FUNÇÃO FALLBACK SEM MTL
function loadWithoutMTL(group) {
    const loader = new THREE.OBJLoader();
    
    loader.load('elevador_v2b.obj', function(object) { // ✅ ARQUIVO CORRETO!
        console.log('✅ OBJ CARREGADO SEM MTL!');
        
        object.scale.setScalar(0.01);
        
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        object.position.sub(center);
        
        // ✅ APLICA APENAS A TEXTURA MDF
        const textureLoader = new THREE.TextureLoader();
        const mdfTexture = textureLoader.load('MDF.jpg');
        
        object.traverse(function(child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.material = new THREE.MeshPhongMaterial({
                    map: mdfTexture,
                    shininess: 30
                });
                console.log('🎨 TEXTURA MDF APLICADA MANUALMENTE!');
            }
        });
        
        group.add(object);
        console.log('✅ ELEVADOR FALLBACK ADICIONADO!');
    });
}