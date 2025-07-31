function createElevador() {
    const group = new THREE.Group();
    
    // PRIMEIRO - Tenta carregar com MTL
    const mtlLoader = new THREE.MTLLoader();
    
    mtlLoader.load(
        'testeTextura.mtl',
        function(materials) {
            console.log('✅ MTL CARREGADO!');
            materials.preload();
            
            const objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            
            objLoader.load(
                'elevador_v2a.obj',
                function(object) {
                    console.log('✅ OBJ CARREGADO COM MTL!');
                    
                    object.scale.setScalar(0.01);
                    
                    const box = new THREE.Box3().setFromObject(object);
                    const center = box.getCenter(new THREE.Vector3());
                    object.position.sub(center);
                    
                    // VERIFICAR SE AS TEXTURAS FORAM APLICADAS
                    let hasTexture = false;
                    object.traverse(function(child) {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                            
                            if (child.material && child.material.map) {
                                hasTexture = true;
                                console.log('✅ TEXTURA ENCONTRADA!');
                            }
                        }
                    });
                    
                    if (!hasTexture) {
                        console.log('❌ SEM TEXTURA - APLICANDO MANUALMENTE');
                        applyTexturesManually(object);
                    }
                    
                    group.add(object);
                    console.log('✅ ELEVADOR ADICIONADO!');
                }
            );
        },
        undefined,
        function(error) {
            console.log('❌ ERRO MTL - CARREGANDO SEM TEXTURA');
            loadWithoutMTL(group);
        }
    );
    
    group.position.set(0, 0, 0);
    return group;
}

// FUNÇÃO PARA APLICAR TEXTURAS MANUALMENTE
function applyTexturesManually(object) {
    const textureLoader = new THREE.TextureLoader();
    
    // Carrega as 3 texturas
    const cinderTexture = textureLoader.load('Cinder_Block.jpg');
    const beadTexture = textureLoader.load('Beadboard.jpg');
    const roofTexture = textureLoader.load('Roofing_Scalloped.jpg');
    
    let meshCount = 0;
    
    object.traverse(function(child) {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            
            // Aplica texturas diferentes para cada mesh
            let texture;
            switch(meshCount % 3) {
                case 0:
                    texture = cinderTexture;
                    break;
                case 1:
                    texture = beadTexture;
                    break;
                case 2:
                    texture = roofTexture;
                    break;
            }
            
            child.material = new THREE.MeshPhongMaterial({
                map: texture,
                shininess: 30
            });
            
            meshCount++;
            console.log(`✅ TEXTURA ${meshCount} APLICADA MANUALMENTE!`);
        }
    });
}

// FUNÇÃO FALLBACK SEM MTL
function loadWithoutMTL(group) {
    const loader = new THREE.OBJLoader();
    
    loader.load('elevador_v2a.obj', function(object) {
        console.log('✅ OBJ CARREGADO SEM MTL!');
        
        object.scale.setScalar(0.01);
        
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        object.position.sub(center);
        
        // APLICA TEXTURAS MANUALMENTE
        applyTexturesManually(object);
        
        group.add(object);
        console.log('✅ ELEVADOR COM TEXTURAS MANUAIS ADICIONADO!');
    });
}