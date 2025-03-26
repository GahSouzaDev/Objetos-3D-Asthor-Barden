function createConvMovII() {
    const group = new THREE.Group();
    
    // Definir cores
    const mdfColor = 0x8B5A2B; // Marrom original parecido com MDF
    const darkerMdfColor = 0x5C3A1B; // Marrom mais escuro para a duplicação
    
    // Corpo Original
    const cubeGeometry = new THREE.BoxGeometry(3, 1.5, 0.1);    
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: mdfColor });    
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);    
    cube.position.set(0, 0, 0);    
    const cube1Geometry = new THREE.BoxGeometry(2.6, 0.47, 0.1);
    const cube1Material = new THREE.MeshBasicMaterial({ color: mdfColor });
    const cube1 = new THREE.Mesh(cube1Geometry, cube1Material);
    cube1.position.set(0.2, 0.97, 0);    
    const cube2Geometry = new THREE.BoxGeometry(1.5, 1, 0.1);
    const cube2Material = new THREE.MeshBasicMaterial({ color: mdfColor });
    const cilMaterial = new THREE.MeshBasicMaterial({ color: 0x653A15 });
    const cube2 = new THREE.Mesh(cube2Geometry, cube2Material);
    cube2.position.set(0.75, 1, 0);       
    const cube3Geometry = new THREE.BoxGeometry(1, 3.5, 0.1);
    const cube3Material = new THREE.MeshBasicMaterial({ color: mdfColor });
    const cube3 = new THREE.Mesh(cube3Geometry, cube3Material);
    cube3.position.set(0.75, 1.5, 0);
    // Base horizontal
    const cube4Geometry = new THREE.BoxGeometry(3, 0.1, 2);   
    const cube4Material = new THREE.MeshBasicMaterial({ color: 0x7A4A1E }); 
    const cube4 = new THREE.Mesh(cube4Geometry, cube4Material);
    cube4.position.set(0, -0.8, 0);
    const cube5Geometry = new THREE.BoxGeometry(3.01, 0.09, 2.01);   
    const cube5Material = new THREE.MeshBasicMaterial({ color: 0x3F250E });  
    const cube5 = new THREE.Mesh(cube5Geometry, cube5Material);
    cube5.position.set(0, -0.8, 0);
    
    // Corpo Duplicado (tamanhos +0.01, largura 0.09, cor mais escura)
    const cubeDupGeometry = new THREE.BoxGeometry(3.01, 1.51, 0.09);    
    const cubeDupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });    
    const cubeDup = new THREE.Mesh(cubeDupGeometry, cubeDupMaterial);    
    cubeDup.position.set(0, 0, 0);    
    const cube1DupGeometry = new THREE.BoxGeometry(2.61, 0.48, 0.09);
    const cube1DupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });
    const cube1Dup = new THREE.Mesh(cube1DupGeometry, cube1DupMaterial);
    cube1Dup.position.set(0.2, 0.97, 0);    
    const cube2DupGeometry = new THREE.BoxGeometry(1.51, 1.01, 0.09);
    const cube2DupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });
    const cube2Dup = new THREE.Mesh(cube2DupGeometry, cube2DupMaterial);
    cube2Dup.position.set(0.75, 1, 0);       
    const cube3DupGeometry = new THREE.BoxGeometry(1.01, 3.51, 0.09);
    const cube3DupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });
    const cube3Dup = new THREE.Mesh(cube3DupGeometry, cube3DupMaterial);
    cube3Dup.position.set(0.75, 1.5, 0);
    

 const cube6Geometry = new THREE.BoxGeometry(0.10, 0.6, 0.101);        
 const cube6Material = new THREE.MeshBasicMaterial({ color:  0x3F250E });  
 const cube6 = new THREE.Mesh(cube6Geometry, cubeMaterial);    
 cube6.position.set(0.97, 0.5, 0.62); 
  // Corpo Original
  const cube7Geometry = new THREE.BoxGeometry(0.11, 0.601, 0.095);        
  const cube7 = new THREE.Mesh(cube7Geometry, cube6Material);    
  cube7.position.set(0.97, 0.5, 0.62); 
  cube6.rotation.z = 10.05;
  cube7.rotation.z = 10.05;  
  
  const cube8Geometry = new THREE.BoxGeometry(0.20, 0.6, 0.101);        
  const cube8Material = new THREE.MeshBasicMaterial({ color:  0x3F250E });  
  const cube8 = new THREE.Mesh(cube8Geometry, cubeMaterial);    
  cube8.position.set(0.75, 1.1, 0.52); 
   // Corpo Original
   const cube9Geometry = new THREE.BoxGeometry(0.21, 0.601, 0.095);        
   const cube9 = new THREE.Mesh(cube9Geometry, cube8Material);    
   cube9.position.set(0.75, 1.1, 0.52); 
   
   const cube10Geometry = new THREE.BoxGeometry(0.6, 0.5, 0.101);        
  const cube10Material = new THREE.MeshBasicMaterial({ color:  0x3F250E });  
  const cube10 = new THREE.Mesh(cube10Geometry, cube4Material);    
  cube10.position.set(0.75, 2.5, 0.22); 
   // Corpo Original
   const cube11Geometry = new THREE.BoxGeometry(0.61, 0.51, 0.095);        
   const cube11 = new THREE.Mesh(cube11Geometry, cube10Material);    
   cube11.position.set(0.75, 2.5, 0.22); 
   cube10.rotation.x = Math.PI / 2;
   cube11.rotation.x = Math.PI / 2;

   const cube12 = new THREE.Mesh(cube10Geometry, cube4Material);    
   cube12.position.set(0.75, 3, 0.22); 
    // Corpo Original
            
    const cube13 = new THREE.Mesh(cube11Geometry, cube10Material);    
    cube13.position.set(0.75, 3, 0.22); 
    cube12.rotation.x = Math.PI / 2;
    cube13.rotation.x = Math.PI / 2;


    // Adicionar cubos ao grupo (original e duplicado)
    group.add(cube, cube1, cube2, cube3, cube4, cube5, cube6,cube7, cube8, cube9, cube10, cube11, cube12, cube13,  cubeDup, cube1Dup, cube2Dup, cube3Dup);

    // Cilindros Originais
    const cylinderGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 32);    
    const cylinderMaterial = new THREE.MeshBasicMaterial({ color: mdfColor });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.set(-1.1, 0.8, 0);
    cylinder.rotation.x = Math.PI / 2;    
    const cylinder1 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder1.position.set(0.4, 1.5, 0);
    cylinder1.rotation.x = Math.PI / 2;
    const cylinder2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder2.position.set(1.1, 1.5, 0);
    cylinder2.rotation.x = Math.PI / 2;

    // Cilindros Duplicados (tamanhos +0.01, largura 0.09, cor mais escura)
    const cylinderDupGeometry = new THREE.CylinderGeometry(0.41, 0.41, 0.09, 32);    
    const cylinderDupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });
    const cylinderDup = new THREE.Mesh(cylinderDupGeometry, cylinderDupMaterial);
    cylinderDup.position.set(-1.1, 0.8, 0);
    cylinderDup.rotation.x = Math.PI / 2;    
    const cylinder1Dup = new THREE.Mesh(cylinderDupGeometry, cylinderDupMaterial);
    cylinder1Dup.position.set(0.4, 1.5, 0);
    cylinder1Dup.rotation.x = Math.PI / 2;
    const cylinder2Dup = new THREE.Mesh(cylinderDupGeometry, cylinderDupMaterial);
    cylinder2Dup.position.set(1.1, 1.5, 0);
    cylinder2Dup.rotation.x = Math.PI / 2;

    // Adicionar cilindros ao grupo (original e duplicado)
    group.add(cylinder, cylinder1, cylinder2, cylinderDup, cylinder1Dup, cylinder2Dup);

    // Furos1
    const cylinder1Geometry = new THREE.CylinderGeometry(0.08, 0.08, 0.101, 32);
    const cylinder1Material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const cylinder3 = new THREE.Mesh(cylinder1Geometry, cylinder1Material);
    cylinder3.position.set(0.75, 0.3, 0);
    cylinder3.rotation.x = Math.PI / 2;
    const cylinder4 = new THREE.Mesh(cylinder1Geometry, cylinder1Material);
    cylinder4.position.set(-0.7, 0.3, 0);
    cylinder4.rotation.x = Math.PI / 2;

    const cylinder2Geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.101, 32);
    const cylinder2Material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const cylinder5 = new THREE.Mesh(cylinder2Geometry, cylinder2Material);
    cylinder5.position.set(1, 2.5, 0);
    cylinder5.rotation.x = Math.PI / 2;
    const cylinder6 = new THREE.Mesh(cylinder2Geometry, cylinder2Material);
    cylinder6.position.set(0.55, 2.5, 0);
    cylinder6.rotation.x = Math.PI / 2;     

    // Furos2
    const cylinder7Geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.101, 32);
    const cylinder7Material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const cylinder7 = new THREE.Mesh(cylinder7Geometry, cylinder7Material);
    cylinder7.position.set(1, 3, 0);
    cylinder7.rotation.x = Math.PI / 2;
    const cylinder8 = new THREE.Mesh(cylinder7Geometry, cylinder7Material);
    cylinder8.position.set(0.55, 3, 0);
    cylinder8.rotation.x = Math.PI / 2;

       // Rodas
    // Materiais para as laterais (eixo Z) com cor original
    const cylinder3MaterialLateral = new THREE.MeshBasicMaterial({ color: 0x3F250E }); // Cor original Roda1 e Roda3
    const cylinder4MaterialLateral = new THREE.MeshBasicMaterial({ color: 0x3F250E }); // Cor original Roda2

    // Materiais para as faces superior/inferior (marrom mais escuro)
    const cylinder3MaterialEscuro = new THREE.MeshBasicMaterial({ color: 0x7A4A1E }); // Marrom escuro Roda1 e Roda3
    const cylinder4MaterialEscuro = new THREE.MeshBasicMaterial({ color: 0x7A4A1E }); // Marrom escuro Roda2
        
    // Roda1 (original)
    const cylinder3Geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32);
    const cylinder7Lateral = new THREE.Mesh(cylinder3Geometry, cylinder3MaterialLateral);
    cylinder7Lateral.position.set(0.75, 0.3, 0.12);
    cylinder7Lateral.rotation.x = Math.PI / 2;
    const cylinder3GeometryFace = new THREE.CylinderGeometry(0.49, 0.49, 0.11, 32);
    const cylinder7Face = new THREE.Mesh(cylinder3GeometryFace, cylinder3MaterialEscuro);
    cylinder7Face.position.set(0.75, 0.3, 0.12);
    cylinder7Face.rotation.x = Math.PI / 2;
    
    // Roda3 (original)
    const cylinder9Lateral = new THREE.Mesh(cylinder3Geometry, cylinder3MaterialLateral);
    cylinder9Lateral.position.set(0.75, 0.3, 0.32);
    cylinder9Lateral.rotation.x = Math.PI / 2;
    const cylinder9Face = new THREE.Mesh(cylinder3GeometryFace, cylinder3MaterialEscuro);
    cylinder9Face.position.set(0.75, 0.3, 0.32);
    cylinder9Face.rotation.x = Math.PI / 2;

    // Roda2 (original)
    const cylinder4Geometry = new THREE.CylinderGeometry(0.46, 0.46, 0.1, 32);
    const cylinder8Lateral = new THREE.Mesh(cylinder4Geometry, cylinder4MaterialLateral);
    cylinder8Lateral.position.set(0.75, 0.3, 0.22);
    cylinder8Lateral.rotation.x = Math.PI / 2;
    const cylinder4GeometryFace = new THREE.CylinderGeometry(0.45, 0.45, 0.11, 32);
    const cylinder8Face = new THREE.Mesh(cylinder4GeometryFace, cylinder4MaterialEscuro);
    cylinder8Face.position.set(0.75, 0.3, 0.22);
    cylinder8Face.rotation.x = Math.PI / 2;

    // Nova Roda1 adicional na posição (0.75, 0.3, -0.11)
    const cylinder10Lateral = new THREE.Mesh(cylinder3Geometry, cylinder3MaterialLateral);
    cylinder10Lateral.position.set(0.75, 0.3, -0.11);
    cylinder10Lateral.rotation.x = Math.PI / 2;
    const cylinder10Face = new THREE.Mesh(cylinder3GeometryFace, cylinder3MaterialEscuro);
    cylinder10Face.position.set(0.75, 0.3, -0.11);
    cylinder10Face.rotation.x = Math.PI / 2;

    // Rodas duplicadas (metade do tamanho)
    // Roda1 duplicada
    const cylinder3GeometrySmall = new THREE.CylinderGeometry(0.25, 0.25, 0.09, 32); // Metade do tamanho
    const cylinder7LateralSmall = new THREE.Mesh(cylinder3GeometrySmall, cylinder3MaterialLateral);
    cylinder7LateralSmall.position.set(-0.7, 0.3, 0.12);
    cylinder7LateralSmall.rotation.x = Math.PI / 2;
    const cylinder3GeometryFaceSmall = new THREE.CylinderGeometry(0.245, 0.245, 0.1, 32); // Metade do tamanho
    const cylinder7FaceSmall = new THREE.Mesh(cylinder3GeometryFaceSmall, cylinder3MaterialEscuro);
    cylinder7FaceSmall.position.set(-0.7, 0.3, 0.12);
    cylinder7FaceSmall.rotation.x = Math.PI / 2;

    // Roda3 duplicada
    const cylinder9LateralSmall = new THREE.Mesh(cylinder3GeometrySmall, cylinder3MaterialLateral);
    cylinder9LateralSmall.position.set(-0.7, 0.3, 0.32);
    cylinder9LateralSmall.rotation.x = Math.PI / 2;
    const cylinder9FaceSmall = new THREE.Mesh(cylinder3GeometryFaceSmall, cylinder3MaterialEscuro);
    cylinder9FaceSmall.position.set(-0.7, 0.3, 0.32);
    cylinder9FaceSmall.rotation.x = Math.PI / 2;

    // Roda2 duplicada
    const cylinder4GeometrySmall = new THREE.CylinderGeometry(0.216, 0.216, 0.1, 32); // Metade do tamanho
    const cylinder8LateralSmall = new THREE.Mesh(cylinder4GeometrySmall, cylinder4MaterialLateral);
    cylinder8LateralSmall.position.set(-0.7, 0.3, 0.22);
    cylinder8LateralSmall.rotation.x = Math.PI / 2;
    const cylinder4GeometryFaceSmall = new THREE.CylinderGeometry(0.215, 0.215, 0.09, 32); // Metade do tamanho
    const cylinder8FaceSmall = new THREE.Mesh(cylinder4GeometryFaceSmall, cylinder4MaterialEscuro);
    cylinder8FaceSmall.position.set(-0.7, 0.3, 0.22);
    cylinder8FaceSmall.rotation.x = Math.PI / 2;

    // Rodas duplicadas menores (metade do diâmetro das "small")
    // Roda1 duplicada menor
    const cylinder3GeometryTiny = new THREE.CylinderGeometry(0.108, 0.108, 0.09, 32); // Metade do diâmetro de 0.25
    const cylinder7LateralTiny = new THREE.Mesh(cylinder3GeometryTiny, cylinder3MaterialLateral);
    cylinder7LateralTiny.position.set(1.1, 0.3, 0.72);
    cylinder7LateralTiny.rotation.x = Math.PI / 2;
    const cylinder3GeometryFaceTiny = new THREE.CylinderGeometry(0.107, 0.107, 0.1, 32); // Metade do diâmetro de 0.245
    const cylinder7FaceTiny = new THREE.Mesh(cylinder3GeometryFaceTiny, cilMaterial);
    cylinder7FaceTiny.position.set(1.1, 0.3, 0.72);
    cylinder7FaceTiny.rotation.x = Math.PI / 2;

    // Roda3 duplicada menor
    const cylinder9LateralTiny = new THREE.Mesh(cylinder3GeometryTiny, cylinder3MaterialLateral);
    cylinder9LateralTiny.position.set(0.75, 0.3, -0.22);
    cylinder9LateralTiny.rotation.x = Math.PI / 2;
    const cylinder9FaceTiny = new THREE.Mesh(cylinder3GeometryFaceTiny, cube2Material);
    cylinder9FaceTiny.position.set(0.75, 0.3, -0.22);
    cylinder9FaceTiny.rotation.x = Math.PI / 2;

    // Roda2 duplicada menor
    const cylinder4GeometryTiny = new THREE.CylinderGeometry(0.108, 0.108, 0.09, 32); // Metade do diâmetro de 0.216
    const cylinder8LateralTiny = new THREE.Mesh(cylinder4GeometryTiny, cylinder4MaterialLateral);
    cylinder8LateralTiny.position.set(0.75, 0.3, 0.41);
    cylinder8LateralTiny.rotation.x = Math.PI / 2;
    const cylinder4GeometryFaceTiny = new THREE.CylinderGeometry(0.107, 0.107, 0.1, 32); // Metade do diâmetro de 0.215
    const cylinder8FaceTiny = new THREE.Mesh(cylinder4GeometryFaceTiny, cube2Material);
    cylinder8FaceTiny.position.set(0.75, 0.3, 0.41);
    cylinder8FaceTiny.rotation.x = Math.PI / 2;

//Mecanismo de conversão de movimento

    // Adicionar mais 3 rodas idênticas às últimas "Tiny" na posição (1, 1, 1)
    // Roda adicional 1 (baseada na Roda1 Tiny)
    const cylinder11LateralTiny = new THREE.Mesh(cylinder3GeometryTiny, cylinder3MaterialLateral);
    cylinder11LateralTiny.position.set(-0.7, 0.3, -0.11);
    cylinder11LateralTiny.rotation.x = Math.PI / 2;
    const cylinder11FaceTiny = new THREE.Mesh(cylinder3GeometryFaceTiny, cylinder3MaterialEscuro);
    cylinder11FaceTiny.position.set(-0.7, 0.3, -0.11);
    cylinder11FaceTiny.rotation.x = Math.PI / 2;

    // Roda adicional 2 (baseada na Roda3 Tiny)
    const cylinder12LateralTiny = new THREE.Mesh(cylinder3GeometryTiny, cylinder3MaterialLateral);
    cylinder12LateralTiny.position.set(1.1, 0.3, 0.42);
    cylinder12LateralTiny.rotation.x = Math.PI / 2;
    const cylinder12FaceTiny = new THREE.Mesh(cylinder3GeometryFaceTiny,cilMaterial);
    cylinder12FaceTiny.position.set(1.1, 0.3, 0.42);
    cylinder12FaceTiny.rotation.x = Math.PI / 2;

    // Roda adicional 3 (baseada na Roda2 Tiny)
    const cylinder13LateralTiny = new THREE.Mesh(cylinder4GeometryTiny, cylinder4MaterialLateral);
    cylinder13LateralTiny.position.set(1.1, 0.3, 0.52);
    cylinder13LateralTiny.rotation.x = Math.PI / 2;
    const cylinder13FaceTiny = new THREE.Mesh(cylinder4GeometryFaceTiny,cilMaterial);
    cylinder13FaceTiny.position.set(1.1, 0.3, 0.52);
    cylinder13FaceTiny.rotation.x = Math.PI / 2;

   // Adicionar mais 3 rodas idênticas às "Tiny" na posição (1, 1, 1)
    // Roda adicional 4 (baseada na Roda1 Tiny)
    const cylinder14LateralTiny = new THREE.Mesh(cylinder3GeometryTiny, cylinder3MaterialLateral);
    cylinder14LateralTiny.position.set(1.1, 0.3, 0.62);
    cylinder14LateralTiny.rotation.x = Math.PI / 2;
    const cylinder14FaceTiny = new THREE.Mesh(cylinder3GeometryFaceTiny,cilMaterial);
    cylinder14FaceTiny.position.set(1.1, 0.3, 0.62);
    cylinder14FaceTiny.rotation.x = Math.PI / 2;

    // Roda adicional 5 (baseada na Roda3 Tiny)
    const cylinder15LateralTiny = new THREE.Mesh(cylinder3GeometryTiny, cylinder3MaterialLateral);
    cylinder15LateralTiny.position.set(0.75, 0.8, 0.52);
    cylinder15LateralTiny.rotation.x = Math.PI / 2;
    const cylinder15FaceTiny = new THREE.Mesh(cylinder3GeometryFaceTiny,cilMaterial);
    cylinder15FaceTiny.position.set(0.75, 0.8, 0.52);
    cylinder15FaceTiny.rotation.x = Math.PI / 2;

    // Roda adicional 6 (baseada na Roda2 Tiny)
    const cylinder16LateralTiny = new THREE.Mesh(cylinder4GeometryTiny, cylinder4MaterialLateral);
    cylinder16LateralTiny.position.set(0.75, 0.8, 0.62);
    cylinder16LateralTiny.rotation.x = Math.PI / 2;
    const cylinder16FaceTiny = new THREE.Mesh(cylinder4GeometryFaceTiny,cilMaterial);
    cylinder16FaceTiny.position.set(0.75, 0.8, 0.62);
    cylinder16FaceTiny.rotation.x = Math.PI / 2;


    // Adicionar mais 3 rodas idênticas às "Tiny" na posição (1, 1, 1)
    // Roda adicional 7 (baseada na Roda1 Tiny)
    const cylinder17LateralTiny = new THREE.Mesh(cylinder3GeometryTiny, cylinder3MaterialLateral);
    cylinder17LateralTiny.position.set(0.75, 0.8, 0.42);
    cylinder17LateralTiny.rotation.x = Math.PI / 2;
    const cylinder17FaceTiny = new THREE.Mesh(cylinder3GeometryFaceTiny, cylinder3MaterialEscuro);
    cylinder17FaceTiny.position.set(0.75, 0.8, 0.42);
    cylinder17FaceTiny.rotation.x = Math.PI / 2;

    // Roda adicional 8 (baseada na Roda3 Tiny)
    const cylinder18LateralTiny = new THREE.Mesh(cylinder3GeometryTiny, cylinder3MaterialLateral);
    cylinder18LateralTiny.position.set(0.75, 0.8, 0.72);
    cylinder18LateralTiny.rotation.x = Math.PI / 2;
    const cylinder18FaceTiny = new THREE.Mesh(cylinder3GeometryFaceTiny,cilMaterial);
    cylinder18FaceTiny.position.set(0.75, 0.8, 0.72);
    cylinder18FaceTiny.rotation.x = Math.PI / 2;

    // Roda adicional 9 (baseada na Roda2 Tiny)
    const cylinder19LateralTiny = new THREE.Mesh(cylinder4GeometryTiny, cylinder4MaterialLateral);
    cylinder19LateralTiny.position.set(1.05, 0.2, -0.22);
    cylinder19LateralTiny.rotation.x = Math.PI / 2;
    const cylinder19FaceTiny = new THREE.Mesh(cylinder4GeometryFaceTiny, cylinder4MaterialEscuro);
    cylinder19FaceTiny.position.set(1.05, 0.2, -0.22);
    cylinder19FaceTiny.rotation.x = Math.PI / 2;

    // Nova roda simples com uma única cor (tom de madeira)
    const cylinder20Geometry = new THREE.CylinderGeometry(0.07, 0.07, 0.78, 32);
    const cylinder20Material = new THREE.MeshBasicMaterial({ color: 0xA67B5B }); // Marrom sienna, tom de madeira
    const cylinder20 = new THREE.Mesh(cylinder20Geometry, cylinder20Material);
    cylinder20.position.set(0.75, 0.3, 0.1);
    cylinder20.rotation.x = Math.PI / 2;
    // Nova roda simples com uma única cor (tom de madeira)
    const cylinder21Geometry = new THREE.CylinderGeometry(0.07, 0.07, 0.58, 32);
    const cylinder21Material = new THREE.MeshBasicMaterial({ color: 0xA67B5B }); // Marrom sienna, tom de madeira
    const cylinder21 = new THREE.Mesh(cylinder21Geometry, cylinder20Material);
    cylinder21.position.set(-0.7, 0.3, 0.105);
    cylinder21.rotation.x = Math.PI / 2;
    const cylinder22Geometry = new THREE.CylinderGeometry(0.07, 0.07, 0.9, 32);
    const cylinder22Material = new THREE.MeshBasicMaterial({ color: 0xA67B5B }); // Marrom sienna, tom de madeira
    const cylinder22 = new THREE.Mesh(cylinder22Geometry, cylinder22Material);
    cylinder22.position.set(1.05, 0.2, -0.5);
    cylinder22.rotation.x = Math.PI / 2;
    const cylinder23Geometry = new THREE.CylinderGeometry(0.07, 0.07, 0.58, 32);
    const cylinder23Material = new THREE.MeshBasicMaterial({ color: 0xA67B5B }); // Marrom sienna, tom de madeira
    const cylinder23 = new THREE.Mesh(cylinder23Geometry, cylinder23Material);
    cylinder23.position.set(1.1, 0.3, 0.5);
    cylinder23.rotation.x = Math.PI / 2;
    const cylinder24Geometry = new THREE.CylinderGeometry(0.07, 0.07, 0.43, 32);
    const cylinder24Material = new THREE.MeshBasicMaterial({ color: 0xA67B5B }); // Marrom sienna, tom de madeira
    const cylinder24 = new THREE.Mesh(cylinder24Geometry, cylinder24Material);
    cylinder24.position.set(0.75, 0.8, 0.58);
    cylinder24.rotation.x = Math.PI / 2;

    //Palito vertical
    const cylinder25Geometry = new THREE.CylinderGeometry(0.07, 0.07, 2.3, 32);
    const cylinder25Material = new THREE.MeshBasicMaterial({ color: 0xA67B5B }); // Marrom sienna, tom de madeira
    const cylinder25 = new THREE.Mesh(cylinder25Geometry, cylinder25Material);
    cylinder25.position.set(0.75, 2.1, 0.52);
    cylinder25.rotation.x = Math.PI / 1;

    //Mecanismo superior
    const cylinder30GeometryTiny = new THREE.CylinderGeometry(0.31, 0.31, 0.09, 32);
    const cylinder40GeometryTiny = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32);
    const cylinder20LateralTiny = new THREE.Mesh(cylinder30GeometryTiny, cylinder3MaterialLateral);
    cylinder20LateralTiny.position.set(0.75, 3, 0.52);
    cylinder20LateralTiny.rotation.x = Math.PI / 1;
    const cylinder20FaceTiny = new THREE.Mesh(cylinder40GeometryTiny, cylinder3MaterialEscuro);
    cylinder20FaceTiny.position.set(0.75, 3, 0.52);
    cylinder20FaceTiny.rotation.x = Math.PI / 1;

    const cylinder21LateralTiny = new THREE.Mesh(cylinder30GeometryTiny, cylinder3MaterialLateral);
    cylinder21LateralTiny.position.set(0.75, 2.5, 0.52);
    cylinder21LateralTiny.rotation.x = Math.PI / 1;
    const cylinder21FaceTiny = new THREE.Mesh(cylinder40GeometryTiny, cylinder3MaterialEscuro);
    cylinder21FaceTiny.position.set(0.75, 2.5, 0.52);
    cylinder21FaceTiny.rotation.x = Math.PI / 1;

    // Adicionar os cilindros ao grupo
    group.add(cylinder, cylinder1, cylinder2, cylinder3, cylinder4, cylinder5, cylinder6, cylinder7, cylinder8,
             cylinder7Lateral, cylinder7Face, cylinder8Lateral, cylinder8Face, cylinder9Lateral, cylinder9Face,
             cylinder10Lateral, cylinder20LateralTiny, cylinder21LateralTiny, cylinder20FaceTiny, cylinder21FaceTiny, cylinder10Face,
             cylinder7LateralSmall, cylinder7FaceSmall, cylinder8LateralSmall, cylinder8FaceSmall, 
             cylinder9LateralSmall, cylinder9FaceSmall,
             cylinder7LateralTiny, cylinder7FaceTiny, cylinder8LateralTiny, cylinder8FaceTiny,
             cylinder9LateralTiny, cylinder9FaceTiny,
             cylinder11LateralTiny, cylinder11FaceTiny, cylinder12LateralTiny, cylinder12FaceTiny,
             cylinder13LateralTiny, cylinder13FaceTiny,
             cylinder14LateralTiny, cylinder14FaceTiny, cylinder15LateralTiny, cylinder15FaceTiny,
             cylinder16LateralTiny, cylinder16FaceTiny,
             cylinder17LateralTiny, cylinder17FaceTiny, cylinder18LateralTiny, cylinder18FaceTiny,
             cylinder19LateralTiny, cylinder19FaceTiny,
             cylinder20, cylinder21, cylinder22, cylinder23, cylinder24, cylinder25);

    return group;
}