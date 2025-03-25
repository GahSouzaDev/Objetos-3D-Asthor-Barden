function createConvMovI() {
    const group = new THREE.Group();
    
    // Definir a cor de MDF
    const mdfColor = 0x8B5A2B; // Marrom parecido com MDF
    
    // Criar geometria do cubo 
    const cubeGeometry = new THREE.BoxGeometry(3, 1.5, 0.1);
    
    // Criar material básico para o cubo com cor MDF
    const cubeMaterial = new THREE.MeshBasicMaterial({ 
        color: mdfColor 
    });
    
    // Criar o cubo
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    
    // Posicionar o cubo
    cube.position.set(0, 0, 0);
    
    // Segundo cubo
    const cube1Geometry = new THREE.BoxGeometry(2.6, 0.47, 0.1);
    const cube1Material = new THREE.MeshBasicMaterial({ 
        color: mdfColor 
    });
    const cube1 = new THREE.Mesh(cube1Geometry, cube1Material);
    cube1.position.set(0.2, 0.97, 0);
    
    // Terceiro cubo
    const cube2Geometry = new THREE.BoxGeometry(1.5, 1, 0.1);
    const cube2Material = new THREE.MeshBasicMaterial({ 
        color: mdfColor 
    });
    const cube2 = new THREE.Mesh(cube2Geometry, cube2Material);
    cube2.position.set(0.75, 1, 0);
    
    // Quarto cubo
    const cube3Geometry = new THREE.BoxGeometry(0.85, 1, 0.1);
    const cube3Material = new THREE.MeshBasicMaterial({ 
        color: mdfColor 
    });
    const cube3 = new THREE.Mesh(cube3Geometry, cube3Material);
    cube3.position.set(0.75, 1.395, 0);
    
    // Quinto cubo
    const cube4Geometry = new THREE.BoxGeometry(1, 3, 0.1);
    const cube4Material = new THREE.MeshBasicMaterial({ 
        color: mdfColor 
    });
    const cube4 = new THREE.Mesh(cube4Geometry, cube4Material);
    cube4.position.set(0.75, 1.5, 0);
    
    // Adicionar todos os cubos ao grupo
    group.add(cube, cube1, cube2, cube3, cube4);

    // Criar geometria do cilindro
    const cylinderGeometry = new THREE.CylinderGeometry(
        0.4,  // raio superior
        0.4,  // raio inferior
        0.1,  // altura
        32    // segmentos
    );
    
    // Criar material para os cilindros com cor MDF
    const cylinderMaterial = new THREE.MeshBasicMaterial({ 
        color: mdfColor
    });
    
    // Primeiro cilindro
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.set(-1.1, 0.8, 0);
    cylinder.rotation.x = Math.PI / 2;
    
    // Segundo cilindro
    const cylinder1 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder1.position.set(0.4, 1.5, 0);
    cylinder1.rotation.x = Math.PI / 2;
    
    // Terceiro cilindro
    const cylinder2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder2.position.set(1.1, 1.5, 0);
    cylinder2.rotation.x = Math.PI / 2;
    
    //Furos
    const cylinder1Geometry = new THREE.CylinderGeometry(
        0.08,  // raio superior
        0.08,  // raio inferior
        0.101,  // altura
        32    // segmentos
    );
    const cylinder1Material = new THREE.MeshBasicMaterial({ 
        color: 0x000000
    });
     // Terceiro cilindro
     const cylinder3 = new THREE.Mesh(cylinder1Geometry, cylinder1Material);
     cylinder3.position.set(0.75, 0.3, 0);
     cylinder3.rotation.x = Math.PI / 2;
     const cylinder4 = new THREE.Mesh(cylinder1Geometry, cylinder1Material);
     cylinder4.position.set(-0.5, 0.3, 0);
     cylinder4.rotation.x = Math.PI / 2;

     //Furos1
    const cylinder2Geometry = new THREE.CylinderGeometry(
        0.04,  // raio superior
        0.04,  // raio inferior
        0.101,  // altura
        32    // segmentos
    );
    const cylinder2Material = new THREE.MeshBasicMaterial({ 
        color: 0x000000
    });
     // Terceiro cilindro
     const cylinder5 = new THREE.Mesh(cylinder2Geometry, cylinder2Material);
     cylinder5.position.set(1, 2.8, 0);
     cylinder5.rotation.x = Math.PI / 2;
     const cylinder6 = new THREE.Mesh(cylinder2Geometry, cylinder2Material);
     cylinder6.position.set(0.55, 2.8, 0);
     cylinder6.rotation.x = Math.PI / 2;
     

    // Adicionar os cilindros ao grupo
    group.add(cylinder, cylinder1, cylinder2, cylinder3, cylinder4, cylinder5, cylinder6);

    return group;
}