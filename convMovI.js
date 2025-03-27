function createConvMovI() {
    const group = new THREE.Group();

    // Definir cores
    const mdfColor = 0x8B5A2B; // Marrom original parecido com MDF (mantido para a base)
    const darkerMdfColor = 0x5C3A1B; // Marrom mais escuro (mantido como base para duplicação)
    const gearColor = 0x7A4A1E; // Tom mais escuro baseado em mdfColor (original das engrenagens)
    const darkerGearColor = 0x3C2510; // Tom mais escuro baseado em darkerMdfColor (duplicação das engrenagens)

    // Base vertical (original)
    const baseGeometry = new THREE.BoxGeometry(0.1, 3.8, 2.5);
    const baseMaterial = new THREE.MeshBasicMaterial({ color: mdfColor });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.set(0, 1.5, 0);

    // Base vertical duplicada (tamanhos +0.01, profundidade 0.09, cor mais escura)
    const baseDupGeometry = new THREE.BoxGeometry(0.09, 3.81, 2.51);
    const baseDupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });
    const baseDup = new THREE.Mesh(baseDupGeometry, baseDupMaterial);
    baseDup.position.set(0, 1.5, 0);

    // Função auxiliar para criar engrenagens trapezoidais
    function createTrapezoidalGear(radius, teeth, thickness, material) {
        const shape = new THREE.Shape();
        const toothHeight = radius * 0.1;
        const toothBaseWidth = (2 * Math.PI * radius) / teeth * 0.6;

        shape.absarc(0, 0, radius - toothHeight, 0, 2 * Math.PI, false);

        for (let i = 0; i < teeth; i++) {
            const angle = (i / teeth) * 2 * Math.PI;
            const nextAngle = ((i + 0.5) / teeth) * 2 * Math.PI;

            const x1 = (radius - toothHeight) * Math.cos(angle);
            const y1 = (radius - toothHeight) * Math.sin(angle);
            const x2 = radius * Math.cos(angle);
            const y2 = radius * Math.sin(angle);
            const x3 = radius * Math.cos(nextAngle);
            const y3 = radius * Math.sin(nextAngle);
            const x4 = (radius - toothHeight) * Math.cos(nextAngle);
            const y4 = (radius - toothHeight) * Math.sin(nextAngle);

            shape.moveTo(x1, y1);
            shape.lineTo(x2, y2);
            shape.lineTo(x3, y3);
            shape.lineTo(x4, y4);
        }

        const extrudeSettings = { depth: thickness, bevelEnabled: false };
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        return new THREE.Mesh(geometry, material);
    }

    // Engrenagem grande (30 dentes, original)
    const largeGearRadius = 0.75;
    const largeGearMaterial = new THREE.MeshBasicMaterial({ color: gearColor });
    const largeGear = createTrapezoidalGear(largeGearRadius, 30, 0.1, largeGearMaterial);
    largeGear.position.set(0.05, 0.5, 0);
    largeGear.rotation.x = Math.PI;
    largeGear.rotation.y = Math.PI / 2;

    // Engrenagem grande duplicada (tamanhos +0.01, espessura 0.09, cor mais escura)
    const largeGearDupMaterial = new THREE.MeshBasicMaterial({ color: darkerGearColor });
    const largeGearDup = createTrapezoidalGear(largeGearRadius + 0.01, 30, 0.09, largeGearDupMaterial);
    largeGearDup.position.set(0.05, 0.5, 0);
    largeGearDup.rotation.x = Math.PI;
    largeGearDup.rotation.y = Math.PI / 2;
    const largeGearDup1 = createTrapezoidalGear(largeGearRadius + 0.01, 30.05, 0.09, largeGearDupMaterial);
    largeGearDup1.position.set(0.05, 0.5, 0);
    largeGearDup1.rotation.x = Math.PI;
    largeGearDup1.rotation.y = Math.PI / 2;
    const largeGearDup2 = createTrapezoidalGear(largeGearRadius + 0.01, 29.95, 0.09, largeGearDupMaterial);
    largeGearDup2.position.set(0.05, 0.5, 0);
    largeGearDup2.rotation.x = Math.PI;
    largeGearDup2.rotation.y = Math.PI / 2;

    // Engrenagem pequena (14 dentes, original)
    const smallGearRadius = 0.35;
    const smallGearMaterial = new THREE.MeshBasicMaterial({ color: gearColor });
    const smallGear = createTrapezoidalGear(smallGearRadius, 14, 0.1, smallGearMaterial);
    smallGear.position.set(0.05, 1.6, 0);
    smallGear.rotation.x = Math.PI;
    smallGear.rotation.y = Math.PI / 2;

    // Engrenagem pequena duplicada (tamanhos +0.01, espessura 0.09, cor mais escura)
    const smallGearDupMaterial = new THREE.MeshBasicMaterial({ color: darkerGearColor });
    const smallGearDup = createTrapezoidalGear(smallGearRadius + 0.01, 14, 0.09, smallGearDupMaterial);
    smallGearDup.position.set(0.05, 1.6, 0);
    smallGearDup.rotation.x = Math.PI;
    smallGearDup.rotation.y = Math.PI / 2;
    const smallGearDup1 = createTrapezoidalGear(smallGearRadius + 0.01, 13.95, 0.09, smallGearDupMaterial);
    smallGearDup1.position.set(0.05, 1.6, 0);
    smallGearDup1.rotation.x = Math.PI;
    smallGearDup1.rotation.y = Math.PI / 2;
    const smallGearDup2 = createTrapezoidalGear(smallGearRadius + 0.01, 14.05, 0.09, smallGearDupMaterial);
    smallGearDup2.position.set(0.05, 1.6, 0);
    smallGearDup2.rotation.x = Math.PI;
    smallGearDup2.rotation.y = Math.PI / 2;

    // Adicionar rodas "Tiny" do createConvMovII na posição (1, 1, 1)
    const tinyWheelGeometry = new THREE.CylinderGeometry(0.108, 0.108, 0.09, 32); // Lateral
    const tinyWheelFaceGeometry = new THREE.CylinderGeometry(0.107, 0.107, 0.1, 32); // Face
    const tinyWheelMaterialLateral = new THREE.MeshBasicMaterial({ color: darkerGearColor }); // 0x3C2510
    const tinyWheelMaterialFace = new THREE.MeshBasicMaterial({ color: gearColor }); // 0x7A4A1E

    // Roda 1
    const tinyWheel1Lateral = new THREE.Mesh(tinyWheelGeometry, tinyWheelMaterialLateral);
    tinyWheel1Lateral.position.set(0.2, 0.5, 0);
    tinyWheel1Lateral.rotation.x = Math.PI / 2;
    tinyWheel1Lateral.rotation.z = Math.PI / 2;
    const tinyWheel1Face = new THREE.Mesh(tinyWheelFaceGeometry, baseMaterial);
    tinyWheel1Face.position.set(0.2, 0.5, 0);
    tinyWheel1Face.rotation.x = Math.PI / 2;
    tinyWheel1Face.rotation.z = Math.PI / 2;

    // Roda 2
    const tinyWheel2Lateral = new THREE.Mesh(tinyWheelGeometry, tinyWheelMaterialLateral);
    tinyWheel2Lateral.position.set(-0.1, 1.6, 0);
    tinyWheel2Lateral.rotation.x = Math.PI / 2;
    tinyWheel2Lateral.rotation.z = Math.PI / 2;
    const tinyWheel2Face = new THREE.Mesh(tinyWheelFaceGeometry, tinyWheelMaterialFace);
    tinyWheel2Face.position.set(-0.1, 1.6, 0);
    tinyWheel2Face.rotation.x = Math.PI / 2;
    tinyWheel2Face.rotation.z = Math.PI / 2;

    // Roda 3
    const tinyWheel3Lateral = new THREE.Mesh(tinyWheelGeometry, tinyWheelMaterialLateral);
    tinyWheel3Lateral.position.set(-0.21, 0.5, 0);
    tinyWheel3Lateral.rotation.x = Math.PI / 2;
    tinyWheel3Lateral.rotation.z = Math.PI / 2;
    const tinyWheel3Face = new THREE.Mesh(tinyWheelFaceGeometry, baseMaterial);
    tinyWheel3Face.position.set(-0.21, 0.5, 0);
    tinyWheel3Face.rotation.x = Math.PI / 2;
    tinyWheel3Face.rotation.z = Math.PI / 2;

    // Nova roda com diâmetro 2 (raio 1)
    const largeWheelGeometry = new THREE.CylinderGeometry(0.75, 0.75, 0.09, 32); // Raio 1, altura 0.09
    const largeWheelFaceGeometry = new THREE.CylinderGeometry(0.749, 0.749, 0.1, 32); // Raio ligeiramente menor para a face
    const largeWheelMaterialLateral = new THREE.MeshBasicMaterial({ color: darkerGearColor });
    const largeWheelMaterialFace = new THREE.MeshBasicMaterial({ color: gearColor });

    const largeWheelLateral = new THREE.Mesh(largeWheelGeometry, largeWheelMaterialLateral);
    largeWheelLateral.position.set(-0.11, 0.5, 0); // Mesma posição inicial das "Tiny"
    largeWheelLateral.rotation.x = Math.PI / 2;
    largeWheelLateral.rotation.z = Math.PI / 2;
    const largeWheelFace = new THREE.Mesh(largeWheelFaceGeometry, largeWheelMaterialFace);
    largeWheelFace.position.set(-0.11, 0.5, 0);
    largeWheelFace.rotation.x = Math.PI / 2;
    largeWheelFace.rotation.z = Math.PI / 2;

   // Nova roda com diâmetro 0.3 (raio 0.15)
   const smallWheelGeometry = new THREE.CylinderGeometry(0.25, 0.25, 0.09, 32); // Raio 0.15, altura 0.09
   const smallWheelFaceGeometry = new THREE.CylinderGeometry(0.24, 0.24, 0.1, 32); // Raio ligeiramente menor para a face
   const smallWheelMaterialLateral = new THREE.MeshBasicMaterial({ color: darkerGearColor });
   const smallWheelMaterialFace = new THREE.MeshBasicMaterial({ color: gearColor });

   const smallWheelLateral = new THREE.Mesh(smallWheelGeometry, baseDupMaterial);
   smallWheelLateral.position.set(0.31, 1.85, 0); // Mesma posição inicial das outras
   smallWheelLateral.rotation.x = Math.PI / 2;
   smallWheelLateral.rotation.z = Math.PI / 2;
   const smallWheelFace = new THREE.Mesh(smallWheelFaceGeometry, baseMaterial);
   smallWheelFace.position.set(0.31, 1.85, 0);
   smallWheelFace.rotation.x = Math.PI / 2;
   smallWheelFace.rotation.z = Math.PI / 2;

       //Palito vertical
       const cylinder1Geometry = new THREE.CylinderGeometry(0.07, 0.07, 0.55, 32);
       const cylinder1Material = new THREE.MeshBasicMaterial({ color: 0xA67B5B }); // Marrom sienna, tom de madeira
       const cylinder2Geometry = new THREE.CylinderGeometry(0.07, 0.07, 0.33, 32);
       const cylinder1 = new THREE.Mesh(cylinder2Geometry, cylinder1Material);
       cylinder1.position.set(0, 1.6, 0);
       cylinder1.rotation.x = Math.PI / 2;
       cylinder1.rotation.z = Math.PI / 2;
       
       const cylinder2 = new THREE.Mesh(cylinder1Geometry, cylinder1Material);
       cylinder2.position.set(0, 0.5, 0);
       cylinder2.rotation.x = Math.PI / 2;
       cylinder2.rotation.z = Math.PI / 2;
       const cylinder3 = new THREE.Mesh(cylinder2Geometry, cylinder1Material);
       cylinder3.position.set(0.21, 1.85, 0);
       cylinder3.rotation.x = Math.PI / 2;
       cylinder3.rotation.z = Math.PI / 2;
       const cylinder4 = new THREE.Mesh(cylinder1Geometry, cylinder1Material);
       cylinder4.position.set(-0.31, 0.6, -0.5);
       cylinder4.rotation.x = Math.PI / 2;
       cylinder4.rotation.z = Math.PI / 2;

       // Base vertical (original)
    const base1Geometry = new THREE.BoxGeometry(0.1, 2.8, 2.5);    
    const base1 = new THREE.Mesh(base1Geometry, smallWheelMaterialFace);
    base1.position.set(0, -0.45, 0);
    base1.rotation.z = Math.PI / 2;
    const base1DupGeometry = new THREE.BoxGeometry(0.09, 2.81, 2.51);    
    const base1Dup = new THREE.Mesh(base1DupGeometry, smallGearDupMaterial);
    base1Dup.position.set(0, -0.45, 0);
    base1Dup.rotation.z = Math.PI / 2;
   // Base horizontal (original)
   const base2Geometry = new THREE.BoxGeometry(0.1, 0.8, 1.3);    
   const base2 = new THREE.Mesh(base2Geometry, smallWheelMaterialFace);
   base2.position.set(0.1, 3, 0);
   base2.rotation.z = Math.PI / 1;
   const base2DupGeometry = new THREE.BoxGeometry(0.09, 0.81, 1.31);    
   const base2Dup = new THREE.Mesh(base2DupGeometry, smallGearDupMaterial);
   base2Dup.position.set(0.1, 3, 0);
   base2Dup.rotation.z = Math.PI / 1;
  
    const base3Geometry = new THREE.BoxGeometry(0.1, 0.8, 0.5);    
    const base3 = new THREE.Mesh(base3Geometry, smallWheelMaterialFace);
    base3.position.set(0.2, 3, 0.4);
    base3.rotation.z = Math.PI / 1;
    const base3DupGeometry = new THREE.BoxGeometry(0.09, 0.81, 0.51);    
    const base3Dup = new THREE.Mesh(base3DupGeometry, smallGearDupMaterial);
    base3Dup.position.set(0.2, 3, 0.4);
    base3Dup.rotation.z = Math.PI / 1;      
    const base4 = new THREE.Mesh(base3Geometry, smallWheelMaterialFace);
    base4.position.set(0.2, 3, -0.4);
    base4.rotation.z = Math.PI / 1;       
    const base4Dup = new THREE.Mesh(base3DupGeometry, smallGearDupMaterial);
    base4Dup.position.set(0.2, 3, -0.4);
    base4Dup.rotation.z = Math.PI / 1;

    // Base vertical (original)
    const base5Geometry = new THREE.BoxGeometry(0.1, 1.9, 0.25);    
    const base5 = new THREE.Mesh(base5Geometry, smallWheelMaterialFace);
    base5.position.set(0.205, 3, 0);
    base5.rotation.z = Math.PI / 1;
    const base5DupGeometry = new THREE.BoxGeometry(0.09, 1.91, 0.26);    
    const base5Dup = new THREE.Mesh(base5DupGeometry, smallGearDupMaterial);
    base5Dup.position.set(0.205, 3, 0);
    base5Dup.rotation.z = Math.PI / 1;

       
       const base6Geometry = new THREE.BoxGeometry(0.1, 0.1, 0.85);    
       const base6 = new THREE.Mesh(base6Geometry, smallWheelMaterialFace);
       base6.position.set(0.205, 1.71, 0);
       base6.rotation.z = Math.PI / 1;
       const base6DupGeometry = new THREE.BoxGeometry(0.09, 0.11, 0.86);    
       const base6Dup = new THREE.Mesh(base6DupGeometry, smallGearDupMaterial);
       base6Dup.position.set(0.205, 1.71, 0);
       base6Dup.rotation.z = Math.PI / 1;
       const base7 = new THREE.Mesh(base6Geometry, smallWheelMaterialFace);
       base7.position.set(0.205, 1.99, 0);
       base7.rotation.z = Math.PI / 1;          
       const base7Dup = new THREE.Mesh(base6DupGeometry, smallGearDupMaterial);
       base7Dup.position.set(0.205, 1.99, 0);
       base7Dup.rotation.z = Math.PI / 1;


    const base8Geometry = new THREE.BoxGeometry(0.1, 0.2, 0.1);    
    const base8 = new THREE.Mesh(base8Geometry, smallWheelMaterialFace);
    base8.position.set(0.205, 1.85, 0.375);
    base8.rotation.z = Math.PI / 1;
    const base8DupGeometry = new THREE.BoxGeometry(0.09, 0.21, 0.11);    
    const base8Dup = new THREE.Mesh(base8DupGeometry, smallGearDupMaterial);
    base8Dup.position.set(0.205, 1.85, 0.375);
    base8Dup.rotation.z = Math.PI / 1;
     
    const base9 = new THREE.Mesh(base8Geometry, smallWheelMaterialFace);
    base9.position.set(0.205, 1.85, -0.375);
    base9.rotation.z = Math.PI / 1;
       
    const base9Dup = new THREE.Mesh(base8DupGeometry, smallGearDupMaterial);
    base9Dup.position.set(0.205, 1.85, -0.375);
    base9Dup.rotation.z = Math.PI / 1;


   // Adicionar todos os objetos ao grupo
   group.add(base, base1, base2, base3, base4, base5, base6, base7, base8, base9 , baseDup, base1Dup, base2Dup, base3Dup, base4Dup, base5Dup, base6Dup, base7Dup, base8Dup, base9Dup, largeGear, largeGearDup, largeGearDup1, largeGearDup2, smallGear, smallGearDup, smallGearDup1, smallGearDup2,
             tinyWheel1Lateral, tinyWheel1Face, tinyWheel2Lateral, tinyWheel2Face, tinyWheel3Lateral, tinyWheel3Face,
             largeWheelLateral, largeWheelFace, smallWheelLateral, smallWheelFace, cylinder1, cylinder2, cylinder3, cylinder4);
   
    // Girar todo o grupo -90 graus no eixo Y
    group.rotation.y = -Math.PI / 2;

    // Mover todo o grupo 1 unidade para baixo no eixo Y
    group.position.y = -0.9;

    return group;
}