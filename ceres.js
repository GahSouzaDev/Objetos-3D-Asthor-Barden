function createCeres() {
    // Criação do grupo que conterá todos os componentes do modelo
    const group = new THREE.Group();

    // --- Corpo principal do motor DC ---
    const motorGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32);
    const motorMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xC0C0C0,
        shininess: 100
    });
    const motor = new THREE.Mesh(motorGeometry, motorMaterial);
    motor.position.set(0, 2, 0);

    // --- Caixa de redução (cubo amarelo) ---
    const gearboxGeometry = new THREE.BoxGeometry(1.1, 2.3, 1.2);
    const gearboxMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xFFFF00,
        shininess: 30
    });

    // Definir cores do MDF1
    const mdfColor = 0x8B5A2B;
    const darkerMdfColor = 0x5C3A1B;

    const gearbox = new THREE.Mesh(gearboxGeometry, gearboxMaterial);
    gearbox.position.set(0, 0.8, 0);

    // --- Parte plástica amarela do motor DC ---
    const motor1Geometry = new THREE.CylinderGeometry(0.55, 0.55, 0.5, 32);
    const motor1 = new THREE.Mesh(motor1Geometry, gearboxMaterial);
    motor1.position.set(0, 2.11, 0);

    // --- Partes pretas do motor DC ---
    const motor2Geometry = new THREE.CylinderGeometry(0.48, 0.5, 0.1, 32);
    const motor2Material = new THREE.MeshPhongMaterial({ 
        color: 0x2B2B2B,
        shininess: 10
    });
    const motor2 = new THREE.Mesh(motor2Geometry, motor2Material);
    motor2.position.set(0, 2.8, 0);

    const motor3Geometry = new THREE.CylinderGeometry(0.3, 0.35, 0.1, 32);
    const motor3 = new THREE.Mesh(motor3Geometry, motor2Material);
    motor3.position.set(0, 2.9, 0);

    // --- Pino central metálico ---
    const motor4Geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.1, 32);
    const motor4 = new THREE.Mesh(motor4Geometry, motorMaterial);
    motor4.position.set(0, 2.91, 0);

    // --- Cilindro horizontal amarelo ---
    const motor5Geometry = new THREE.CylinderGeometry(0.1, 0.1, 1.35, 32);
    const motor5 = new THREE.Mesh(motor5Geometry, gearboxMaterial);
    motor5.position.set(0, 0.9, 0);
    motor5.rotation.z = Math.PI / 2;

    // --- Eixos duplos (esquerdo e direito) ---
    const shaftGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.5, 32);
    const shaftMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x808080,
        shininess: 30
    });

    const leftShaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    leftShaft.rotation.z = Math.PI / 2;
    leftShaft.position.set(-0.7, 0.2, 0);

    const rightShaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    rightShaft.rotation.z = Math.PI / 2;
    rightShaft.position.set(0.7, 0.2, 0);

    // --- Conectores elétricos (terminais) ---
    const terminalGeometry = new THREE.BoxGeometry(0.1, 0.2, 0.05);
    const terminalMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xaaaaaa,
        shininess: 40
    });

    const terminal1 = new THREE.Mesh(terminalGeometry, terminalMaterial);
    terminal1.position.set(0.4, 2.875, -0.25);

    const terminal2 = new THREE.Mesh(terminalGeometry, terminalMaterial);
    terminal2.position.set(0.4, 2.875, 0.25);

    // Corpo lado direito
    const cubeGeometry = new THREE.BoxGeometry(2.3, 1.2, 0.11);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: mdfColor });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0.6, 0.8, 0);
    cube.rotation.y = Math.PI / 2;
    cube.rotation.z = Math.PI / 2;

    const cube1Geometry = new THREE.BoxGeometry(2.31, 1.21, 0.1);
    const cube1Material = new THREE.MeshBasicMaterial({ color: darkerMdfColor });
    const cube1 = new THREE.Mesh(cube1Geometry, cube1Material);
    cube1.position.set(0.6, 0.8, 0);
    cube1.rotation.y = Math.PI / 2;
    cube1.rotation.z = Math.PI / 2;

    // Corpo lado esquerdo
    const cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube2.position.set(-0.6, 0.8, 0);
    cube2.rotation.y = Math.PI / 2;
    cube2.rotation.z = Math.PI / 2;

    const cube3 = new THREE.Mesh(cube1Geometry, cube1Material);
    cube3.position.set(-0.6, 0.8, 0);
    cube3.rotation.y = Math.PI / 2;
    cube3.rotation.z = Math.PI / 2;

    // --- Quarto de cilindro para arredondar bordas ---
    const quarterCylinderGeometry = new THREE.CylinderGeometry(
        0.7, // Raio externo
        0.7, // Raio externo (mantido igual para um cilindro sólido)
        0.11, // Espessura como altura do cilindro
        32, // Segmentos radiais
        1, // Segmentos de altura
        false, // Não aberto
        0, // Ângulo inicial
        Math.PI / 2 // Ângulo de 90 graus (1/4 do cilindro)
    );
    const quarterCylinder1Geometry = new THREE.CylinderGeometry(
        0.71, // Raio externo
        0.71, // Raio externo (mantido igual para um cilindro sólido)
        0.1, // Espessura como altura do cilindro
        32, // Segmentos radiais
        1, // Segmentos de altura
        false, // Não aberto
        0, // Ângulo inicial
        Math.PI / 2 // Ângulo de 90 graus (1/4 do cilindro)
    );
   
    const quarterCylinder = new THREE.Mesh(quarterCylinderGeometry, cubeMaterial);
    
    // Posicionamento inicial (ajuste conforme necessário)
    quarterCylinder.position.set(0.6, 1.8, -0.6); // Centralizado no grupo, ajuste para a junção desejada
    quarterCylinder.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
    quarterCylinder.rotation.z = Math.PI / -2;
    quarterCylinder.rotation.y = Math.PI / 1;

    const quarterCylinder1 = new THREE.Mesh(quarterCylinder1Geometry, cube1Material);
    
    // Posicionamento inicial (ajuste conforme necessário)
    quarterCylinder1.position.set(0.6, 1.8, -0.6); // Centralizado no grupo, ajuste para a junção desejada
    quarterCylinder1.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
    quarterCylinder1.rotation.z = Math.PI / -2;
    quarterCylinder1.rotation.y = Math.PI / 1;

    const quarterCylinder2 = new THREE.Mesh(quarterCylinderGeometry, cubeMaterial);
    
    // Posicionamento inicial 
    quarterCylinder2.position.set(-0.6, 1.8, -0.6); // Centralizado no grupo, ajuste para a junção desejada
    quarterCylinder2.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
    quarterCylinder2.rotation.z = Math.PI / -2;
    quarterCylinder2.rotation.y = Math.PI / 1;

    const quarterCylinder3 = new THREE.Mesh(quarterCylinder1Geometry, cube1Material);
    
    // Posicionamento inicial 
    quarterCylinder3.position.set(-0.6, 1.8, -0.6); // Centralizado no grupo, ajuste para a junção desejada
    quarterCylinder3.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
    quarterCylinder3.rotation.z = Math.PI / -2;
    quarterCylinder3.rotation.y = Math.PI / 1;

    const quarterCylinder4 = new THREE.Mesh(quarterCylinderGeometry, cubeMaterial);

     // Posicionamento inicial 
     quarterCylinder4.position.set(-0.6, 0.353, -0.6); // Centralizado no grupo, ajuste para a junção desejada
     quarterCylinder4.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
     quarterCylinder4.rotation.z = Math.PI / 2;
     quarterCylinder4.rotation.y = Math.PI / 1;
     quarterCylinder4.rotation.x = Math.PI / -2;
 
     const quarterCylinder5 = new THREE.Mesh(quarterCylinder1Geometry, cube1Material);
     
     // Posicionamento inicial 
     quarterCylinder5.position.set(-0.6, 0.353, -0.6); // Centralizado no grupo, ajuste para a junção desejada
     quarterCylinder5.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
     quarterCylinder5.rotation.z = Math.PI / 2;
     quarterCylinder5.rotation.y = Math.PI / 1;
     quarterCylinder5.rotation.x = Math.PI / -2;

     const quarterCylinder6 = new THREE.Mesh(quarterCylinderGeometry, cubeMaterial);

     // Posicionamento inicial 
     quarterCylinder6.position.set(0.6, 0.353, -0.6); // Centralizado no grupo, ajuste para a junção desejada
     quarterCylinder6.rotation.x = Math.PI / 2; // Rotacionado para alinhar no plano correto
     quarterCylinder6.rotation.z = Math.PI / 2;
     quarterCylinder6.rotation.y = Math.PI / 1;
     quarterCylinder6.rotation.x = Math.PI / -2;
 
     const quarterCylinder7 = new THREE.Mesh(quarterCylinder1Geometry, cube1Material);
     
     // Posicionamento inicial 
     quarterCylinder7.position.set(0.6, 0.353, -0.6); 
     quarterCylinder7.rotation.x = Math.PI / 2; 
     quarterCylinder7.rotation.z = Math.PI / 2;
     quarterCylinder7.rotation.y = Math.PI / 1;
     quarterCylinder7.rotation.x = Math.PI / -2;
 
     const cube4Geometry = new THREE.BoxGeometry(1.47,1, 0.11);     
     const cube4 = new THREE.Mesh(cube4Geometry, cubeMaterial);
     cube4.position.set(0.6, 1.07, -0.803);
     cube4.rotation.y = Math.PI / 2;
     cube4.rotation.z = Math.PI / 2;
     const cube5Geometry = new THREE.BoxGeometry(1.48, 1.01, 0.1);     
     const cube5 = new THREE.Mesh(cube5Geometry, cube1Material);
     cube5.position.set(0.6, 1.07, -0.803);
     cube5.rotation.y = Math.PI / 2;
     cube5.rotation.z = Math.PI / 2;         
     const cube6 = new THREE.Mesh(cube4Geometry, cubeMaterial);
     cube6.position.set(-0.6, 1.07, -0.803);
     cube6.rotation.y = Math.PI / 2;
     cube6.rotation.z = Math.PI / 2;      
     const cube7 = new THREE.Mesh(cube5Geometry, cube1Material);
     cube7.position.set(-0.6, 1.07, -0.803);
     cube7.rotation.y = Math.PI / 2;
     cube7.rotation.z = Math.PI / 2;

     //Laterais altas
   
    const cube8Geometry = new THREE.BoxGeometry(4.3, 0.2, 0.11);
   
    const cube8 = new THREE.Mesh(cube8Geometry, cubeMaterial);
    cube8.position.set(0.6, 1.5, 0.5);
    cube8.rotation.y = Math.PI / 2;
    cube8.rotation.z = Math.PI / 2;
    const cube10 = new THREE.Mesh(cube8Geometry, cubeMaterial);
    cube10.position.set(-0.6, 1.5, 0.5);
    cube10.rotation.y = Math.PI / 2;
    cube10.rotation.z = Math.PI / 2;

    const cube9Geometry = new THREE.BoxGeometry(4.31, 0.21, 0.1);   
    const cube9 = new THREE.Mesh(cube9Geometry, cube1Material);
    cube9.position.set(0.6, 1.5, 0.5);
    cube9.rotation.y = Math.PI / 2;
    cube9.rotation.z = Math.PI / 2;
    const cube11 = new THREE.Mesh(cube9Geometry, cube1Material);
    cube11.position.set(-0.6, 1.5, 0.5);
    cube11.rotation.y = Math.PI / 2;
    cube11.rotation.z = Math.PI / 2;

    //Acabamento do arredondamento da base lateral
    const cube12Geometry = new THREE.BoxGeometry(0.7, 0.01, 0.11);   
    const cube12 = new THREE.Mesh(cube12Geometry, cubeMaterial);
    cube12.position.set(0.6, 2.15, -0.6);
    cube12.rotation.y = Math.PI / 2;
    cube12.rotation.z = Math.PI / 2;
    const cube14 = new THREE.Mesh(cube12Geometry, cubeMaterial);
    cube14.position.set(-0.6, 2.15, -0.6);
    cube14.rotation.y = Math.PI / 2;
    cube14.rotation.z = Math.PI / 2;

    const cube13Geometry = new THREE.BoxGeometry(0.71, 0.02, 0.1);   
    const cube13 = new THREE.Mesh(cube13Geometry, cube1Material);
    cube13.position.set(0.6, 2.155, -0.6);
    cube13.rotation.y = Math.PI / 2;
    cube13.rotation.z = Math.PI / 2;
    const cube15 = new THREE.Mesh(cube13Geometry, cube1Material);
    cube15.position.set(-0.6, 2.155, -0.6);
    cube15.rotation.y = Math.PI / 2;
    cube15.rotation.z = Math.PI / 2;

//Aciona partes da frente do suporte lateral
      
        const cube16Geometry = new THREE.BoxGeometry(0.9, 0.6, 0.11);   
        const cube16 = new THREE.Mesh(cube16Geometry, cubeMaterial);
        cube16.position.set(0.6, -0.2, 0.85);
        cube16.rotation.y = Math.PI / 2;
        cube16.rotation.z = Math.PI / 2;
        const cube18 = new THREE.Mesh(cube16Geometry, cubeMaterial);
        cube18.position.set(-0.6, -0.2, 0.85);
        cube18.rotation.y = Math.PI / 2;
        cube18.rotation.z = Math.PI / 2;
        const cube17Geometry = new THREE.BoxGeometry(0.91, 0.61, 0.1);   
        const cube17 = new THREE.Mesh(cube17Geometry, cube1Material);
        cube17.position.set(0.6, -0.2, 0.85);
        cube17.rotation.y = Math.PI / 2;
        cube17.rotation.z = Math.PI / 2;
        const cube19 = new THREE.Mesh(cube17Geometry, cube1Material);
        cube19.position.set(-0.6, -0.2, 0.85);
        cube19.rotation.y = Math.PI / 2;
        cube19.rotation.z = Math.PI / 2;

    //Cria encaixes da parte superior
    const cube20Geometry = new THREE.BoxGeometry(1.7, 0.6, 0.11);   
        const cube20 = new THREE.Mesh(cube20Geometry, cubeMaterial);
        cube20.position.set(0.6, 2.8, 0.85);
        cube20.rotation.y = Math.PI / 2;
        cube20.rotation.z = Math.PI / 2;
        const cube22 = new THREE.Mesh(cube20Geometry, cubeMaterial);
        cube22.position.set(-0.6, 2.8, 0.85);
        cube22.rotation.y = Math.PI / 2;
        cube22.rotation.z = Math.PI / 2;
    const cube21Geometry = new THREE.BoxGeometry(1.71, 0.61, 0.1);   
        const cube21 = new THREE.Mesh(cube21Geometry, cube1Material);
        cube21.position.set(0.6, 2.8, 0.85);
        cube21.rotation.y = Math.PI / 2;
        cube21.rotation.z = Math.PI / 2;
        const cube23 = new THREE.Mesh(cube21Geometry, cube1Material);
        cube23.position.set(-0.6, 2.8, 0.85);
        cube23.rotation.y = Math.PI / 2;
        cube23.rotation.z = Math.PI / 2;
//Cria meio das bases laterais  
        const cube24Geometry = new THREE.BoxGeometry(1.8, 0.5, 0.11);   
        const cube24 = new THREE.Mesh(cube24Geometry, cubeMaterial);
        cube24.position.set(0.6, 1.1, 0.7);
        cube24.rotation.y = Math.PI / 2;
        cube24.rotation.z = Math.PI / 2;
        const cube26 = new THREE.Mesh(cube24Geometry, cubeMaterial);
        cube26.position.set(-0.6, 1.1, 0.7);
        cube26.rotation.y = Math.PI / 2;
        cube26.rotation.z = Math.PI / 2;

        const cube25Geometry = new THREE.BoxGeometry(1.81, 0.51, 0.1);   
        const cube25 = new THREE.Mesh(cube25Geometry, cube1Material);
        cube25.position.set(0.6, 1.1, 0.7);
        cube25.rotation.y = Math.PI / 2;
        cube25.rotation.z = Math.PI / 2;
        const cube27 = new THREE.Mesh(cube25Geometry, cube1Material);
        cube27.position.set(-0.6, 1.1, 0.7);
        cube27.rotation.y = Math.PI / 2;
        cube27.rotation.z = Math.PI / 2;

//Cria suporte do botão
        const cube28Geometry = new THREE.BoxGeometry(1.1, 0.8, 0.11);  
        const cube29Geometry = new THREE.BoxGeometry(1.11, 0.81, 0.1);  
        const cube28Material = new THREE.MeshBasicMaterial({ color: 0x7A4A1E });
        const cube29Material = new THREE.MeshBasicMaterial({ color: 0x3F250E });
        const cube28 = new THREE.Mesh(cube28Geometry, cube28Material);
        cube28.position.set(0, 3.4, 0.95);
        cube28.rotation.y = Math.PI / 1;
        cube28.rotation.z = Math.PI / 1;
        cube28.rotation.x = Math.PI / 2;
        const cube29 = new THREE.Mesh(cube29Geometry, cube29Material);
        cube29.position.set(0, 3.4, 0.95);
        cube29.rotation.y = Math.PI / 1;
        cube29.rotation.z = Math.PI / 1;
        cube29.rotation.x = Math.PI / 2;
        const cube30 = new THREE.Mesh(cube28Geometry, cube28Material);
        cube30.position.set(0, 2.8, 0.95);
        cube30.rotation.y = Math.PI / 1;
        cube30.rotation.z = Math.PI / 1;
        cube30.rotation.x = Math.PI / 2;
        const cube31 = new THREE.Mesh(cube29Geometry, cube29Material);
        cube31.position.set(0, 2.8, 0.95);
        cube31.rotation.y = Math.PI / 1;
        cube31.rotation.z = Math.PI / 1;
        cube31.rotation.x = Math.PI / 2;
        const cube32Geometry = new THREE.BoxGeometry(1.4, 0.5, 0.11);  
        const cube33Geometry = new THREE.BoxGeometry(1.41, 0.51, 0.1);  
        const cube32 = new THREE.Mesh(cube32Geometry, cube28Material);
        cube32.position.set(0, 2.8, 0.8);
        cube32.rotation.y = Math.PI / 1;
        cube32.rotation.z = Math.PI / 1;
        cube32.rotation.x = Math.PI / 2;
        const cube34 = new THREE.Mesh(cube33Geometry, cube29Material);
        cube34.position.set(0, 2.8, 0.8);
        cube34.rotation.y = Math.PI / 1;
        cube34.rotation.z = Math.PI / 1;
        cube34.rotation.x = Math.PI / 2;
        const cube33 = new THREE.Mesh(cube32Geometry, cube28Material);
        cube33.position.set(0, 3.4, 0.8);
        cube33.rotation.y = Math.PI / 1;
        cube33.rotation.z = Math.PI / 1;
        cube33.rotation.x = Math.PI / 2;
        const cube35 = new THREE.Mesh(cube33Geometry, cube29Material);
        cube35.position.set(0, 3.4, 0.8);
        cube35.rotation.y = Math.PI / 1;
        cube35.rotation.z = Math.PI / 1;
        cube35.rotation.x = Math.PI / 2;  
        const cube36 = new THREE.Mesh(cube32Geometry, cube28Material);
        cube36.position.set(0, -0.5, 0.8);
        cube36.rotation.y = Math.PI / 1;
        cube36.rotation.z = Math.PI / 1;
        cube36.rotation.x = Math.PI / 2;
        const cube37 = new THREE.Mesh(cube33Geometry, cube29Material);
        cube37.position.set(0, -0.5, 0.8);
        cube37.rotation.y = Math.PI / 1;
        cube37.rotation.z = Math.PI / 1;
        cube37.rotation.x = Math.PI / 2;   
        
    //Cria parte de baixo
        const cube38Geometry = new THREE.BoxGeometry(1.1, 4.4, 0.11);  
        const cube39Geometry = new THREE.BoxGeometry(1.11, 4.41, 0.1);  
        const cube38 = new THREE.Mesh(cube38Geometry, cube28Material);
        cube38.position.set(0, -0.5, 3);
        cube38.rotation.y = Math.PI / 1;
        cube38.rotation.z = Math.PI / 1;
        cube38.rotation.x = Math.PI /2;
        const cube39 = new THREE.Mesh(cube39Geometry, cube29Material);
        cube39.position.set(0, -0.5, 3);
        cube39.rotation.y = Math.PI / 1;
        cube39.rotation.z = Math.PI / 1;
        cube39.rotation.x = Math.PI /2;

//Cria rodas grandes
const cylinderMaterialEscuro = new THREE.MeshBasicMaterial({ color: 0x3F250E }); // Marrom escuro Roda2
const cylinderMaterialClaro = new THREE.MeshBasicMaterial({ color: 0x7A4A1E }); // Marrom escuro Roda2
const cylinderBlack = new THREE.MeshBasicMaterial({ color: 0x00000 });
        
// Roda1 (original)
const cylinderGeometry = new THREE.CylinderGeometry(2.2, 2.2, 0.11, 162);
const cylinder1Geometry = new THREE.CylinderGeometry(2.21, 2.21, 0.1, 162);
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterialClaro);
    cylinder.position.set(0.8, 0.2, 0);
    cylinder.rotation.x = Math.PI / 2;
    cylinder.rotation.z = Math.PI / 2;
    const cylinder1 = new THREE.Mesh(cylinder1Geometry, cylinderMaterialEscuro);
    cylinder1.position.set(0.8, 0.2, 0);
    cylinder1.rotation.x = Math.PI / 2;
    cylinder1.rotation.z = Math.PI / 2;
const cylinder2 = new THREE.Mesh(cylinderGeometry, cylinderMaterialClaro);
    cylinder2.position.set(-0.8, 0.2, 0);
    cylinder2.rotation.x = Math.PI / 2;
    cylinder2.rotation.z = Math.PI / 2;
    const cylinder3 = new THREE.Mesh(cylinder1Geometry, cylinderMaterialEscuro);
    cylinder3.position.set(-0.8, 0.2, 0);
    cylinder3.rotation.x = Math.PI / 2;
    cylinder3.rotation.z = Math.PI / 2;
   
    const cylinder2Geometry = new THREE.CylinderGeometry(0.55,0.55, 0.11, 32);
    const cylinder4 = new THREE.Mesh(cylinder2Geometry, cylinderMaterialClaro);
        cylinder4.position.set(0, -0.5, 5.2);
        cylinder4.rotation.x = Math.PI / 1;
        cylinder4.rotation.z = Math.PI / 1;  
    const cylinder3Geometry = new THREE.CylinderGeometry(0.56,0.56, 0.1, 32);
        const cylinder5 = new THREE.Mesh(cylinder3Geometry, cylinderMaterialEscuro);
            cylinder5.position.set(0, -0.5, 5.2);
            cylinder5.rotation.x = Math.PI / 1;
            cylinder5.rotation.z = Math.PI / 1; 
    const cylinder4Geometry = new THREE.CylinderGeometry(0.3,0.3, 0.111, 32);
        const cylinder6 = new THREE.Mesh(cylinder4Geometry, cylinderBlack);
            cylinder6.position.set(0, -0.5, 5.2);
            cylinder6.rotation.x = Math.PI / 1;
            cylinder6.rotation.z = Math.PI / 1; 
       
   //Suporte da garrafa
   const cube6Geometry = new THREE.BoxGeometry(0.11, 0.1, 0.2);  
   const cube40 = new THREE.Mesh(cube6Geometry, cube28Material);
   cube40.position.set(-0.52, -0.5, 4.8);
   cube40.rotation.y = Math.PI / 1;
   cube40.rotation.z = Math.PI / 1;
   cube40.rotation.x = Math.PI / 2;
   const cube41 = new THREE.Mesh(cube6Geometry, cube28Material);
   cube41.position.set(-0.52, -0.5, 4);
   cube41.rotation.y = Math.PI / 1;
   cube41.rotation.z = Math.PI / 1;
   cube41.rotation.x = Math.PI / 2;
   const cube42 = new THREE.Mesh(cube6Geometry, cube28Material);
   cube42.position.set(0.52, -0.5, 4.8);
   cube42.rotation.y = Math.PI / 1;
   cube42.rotation.z = Math.PI / 1;
   cube42.rotation.x = Math.PI / 2;
   const cube43 = new THREE.Mesh(cube6Geometry, cube28Material);
   cube43.position.set(0.52, -0.5, 4);
   cube43.rotation.y = Math.PI / 1;
   cube43.rotation.z = Math.PI / 1;
   cube43.rotation.x = Math.PI / 2;

   const cube7Geometry = new THREE.BoxGeometry(0.1, 0.11, 0.21);  
   const cube44 = new THREE.Mesh(cube7Geometry, cube29Material);
   cube44.position.set(-0.52, -0.5, 4.8);
   cube44.rotation.y = Math.PI / 1;
   cube44.rotation.z = Math.PI / 1;
   cube44.rotation.x = Math.PI / 2;
   const cube45 = new THREE.Mesh(cube7Geometry, cube29Material);
   cube45.position.set(-0.52, -0.5, 4);
   cube45.rotation.y = Math.PI / 1;
   cube45.rotation.z = Math.PI / 1;
   cube45.rotation.x = Math.PI / 2;
   const cube46 = new THREE.Mesh(cube7Geometry, cube29Material);
   cube46.position.set(0.52, -0.5, 4.8);
   cube46.rotation.y = Math.PI / 1;
   cube46.rotation.z = Math.PI / 1;
   cube46.rotation.x = Math.PI / 2;
   const cube47 = new THREE.Mesh(cube7Geometry, cube29Material);
   cube47.position.set(0.52, -0.5, 4);
   cube47.rotation.y = Math.PI / 1;
   cube47.rotation.z = Math.PI / 1;
   cube47.rotation.x = Math.PI / 2;
   const cube10Geometry = new THREE.BoxGeometry(0.1, 1.01, 0.11);  
   const cube48 = new THREE.Mesh(cube10Geometry, cube29Material);
   cube48.position.set(-0.52, -0.375, 4.4);
   cube48.rotation.y = Math.PI / 1;
   cube48.rotation.z = Math.PI / 1;
   cube48.rotation.x = Math.PI / 2;
   const cube11Geometry = new THREE.BoxGeometry(0.11, 1, 0.1);  
   const cube49 = new THREE.Mesh(cube11Geometry, cube28Material);
   cube49.position.set(-0.52, -0.375, 4.4);
   cube49.rotation.y = Math.PI / 1;
   cube49.rotation.z = Math.PI / 1;
   cube49.rotation.x = Math.PI / 2;
   const cube50 = new THREE.Mesh(cube10Geometry, cube29Material);
   cube50.position.set(0.52, -0.375, 4.4);
   cube50.rotation.y = Math.PI / 1;
   cube50.rotation.z = Math.PI / 1;
   cube50.rotation.x = Math.PI / 2;   
   const cube51 = new THREE.Mesh(cube11Geometry, cube28Material);
   cube51.position.set(0.52, -0.375, 4.4);
   cube51.rotation.y = Math.PI / 1;
   cube51.rotation.z = Math.PI / 1;
   cube51.rotation.x = Math.PI / 2;

//Cria parte movel do ceres
const cube52Geometry = new THREE.BoxGeometry(1.7, 0.9, 0.11);   
        const cube52 = new THREE.Mesh(cube52Geometry, cubeMaterial);
        cube52.position.set(0,-0.39, 4.65);
        cube52.rotation.y = Math.PI / 1;
        cube52.rotation.z = Math.PI / 2;
        cube52.rotation.x = Math.PI / 2;
        const cube53Geometry = new THREE.BoxGeometry(1.71, 0.91, 0.1);   
        const cube53 = new THREE.Mesh(cube53Geometry, cube1Material);
        cube53.position.set(0,-0.39, 4.65);
        cube53.rotation.y = Math.PI / 1;
        cube53.rotation.z = Math.PI / 2;
        cube53.rotation.x = Math.PI / 2;
    
//Cria criculos pequenos
const cylinder8Geometry = new THREE.CylinderGeometry(0.2, 0.2, 0.11, 32);
const cylinder8 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder8.position.set(0.894, 0.2, 0);
    cylinder8.rotation.x = Math.PI / 2;
    cylinder8.rotation.z = Math.PI / 2;
    const cylinder9Geometry = new THREE.CylinderGeometry(0.21, 0.21, 0.1, 32);
const cylinder9 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder9.position.set(0.894, 0.2, 0);
    cylinder9.rotation.x = Math.PI / 2;
    cylinder9.rotation.z = Math.PI / 2;

const cylinder10 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder10.position.set(-0.894, 0.2, 0);
    cylinder10.rotation.x = Math.PI / 2;
    cylinder10.rotation.z = Math.PI / 2;   
const cylinder11 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder11.position.set(-0.894, 0.2, 0);
    cylinder11.rotation.x = Math.PI / 2;
    cylinder11.rotation.z = Math.PI / 2;

//Cria sistema de movimentação
const cylinder12 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder12.position.set(0.91, 0.2, 0.5);
    cylinder12.rotation.x = Math.PI / 2;
    cylinder12.rotation.z = Math.PI / 2;   
const cylinder13 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder13.position.set(0.91, 0.2, 0.5);
    cylinder13.rotation.x = Math.PI / 2;
    cylinder13.rotation.z = Math.PI / 2;

    const cylinder14 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder14.position.set(1.02, 0.2, 0.5);
    cylinder14.rotation.x = Math.PI / 2;
    cylinder14.rotation.z = Math.PI / 2;   
const cylinder15 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder15.position.set(1.02, 0.2, 0.5);
    cylinder15.rotation.x = Math.PI / 2;
    cylinder15.rotation.z = Math.PI / 2;

    const cylinder16 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder16.position.set(1.14, 0.2, 0.5);
    cylinder16.rotation.x = Math.PI / 2;
    cylinder16.rotation.z = Math.PI / 2;   
const cylinder17 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder17.position.set(1.14, 0.2, 0.5);
    cylinder17.rotation.x = Math.PI / 2;
    cylinder17.rotation.z = Math.PI / 2;

    const cylinder18 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder18.position.set(1.26, 0.2, 0.5);
    cylinder18.rotation.x = Math.PI / 2;
    cylinder18.rotation.z = Math.PI / 2;   
const cylinder19 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder19.position.set(1.26, 0.2, 0.5);
    cylinder19.rotation.x = Math.PI / 2;
    cylinder19.rotation.z = Math.PI / 2;
//------------------------------------------
const cylinder20 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder20.position.set(-0.91, 0.2, 0.5);
    cylinder20.rotation.x = Math.PI / 2;
    cylinder20.rotation.z = Math.PI / 2;   
const cylinder21 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder21.position.set(-0.91, 0.2, 0.5);
    cylinder21.rotation.x = Math.PI / 2;
    cylinder21.rotation.z = Math.PI / 2;

    const cylinder22 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder22.position.set(-1.02, 0.2, 0.5);
    cylinder22.rotation.x = Math.PI / 2;
    cylinder22.rotation.z = Math.PI / 2;   
const cylinder23 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder23.position.set(-1.02, 0.2, 0.5);
    cylinder23.rotation.x = Math.PI / 2;
    cylinder23.rotation.z = Math.PI / 2;

    const cylinder24 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder24.position.set(-1.14, 0.2, 0.5);
    cylinder24.rotation.x = Math.PI / 2;
    cylinder24.rotation.z = Math.PI / 2;   
const cylinder25 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder25.position.set(-1.14, 0.2, 0.5);
    cylinder25.rotation.x = Math.PI / 2;
    cylinder25.rotation.z = Math.PI / 2;

    const cylinder26 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder26.position.set(-1.26, 0.2, 0.5);
    cylinder26.rotation.x = Math.PI / 2;
    cylinder26.rotation.z = Math.PI / 2;   
const cylinder27 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder27.position.set(-1.26, 0.2, 0.5);
    cylinder27.rotation.x = Math.PI / 2;
    cylinder27.rotation.z = Math.PI / 2;

 //Palito vertical
 const cylinder28Geometry = new THREE.CylinderGeometry(0.07, 0.07, 0.8, 32);
 const cylinder28Material = new THREE.MeshBasicMaterial({ color: 0xA67B5B }); // Marrom sienna, tom de madeira

 const cylinder28 = new THREE.Mesh(cylinder28Geometry, cylinder28Material);
 cylinder28.position.set(1.1, 0.2, 0.5);
 cylinder28.rotation.x = Math.PI / 2;
 cylinder28.rotation.z = Math.PI / 2;
 const cylinder29 = new THREE.Mesh(cylinder28Geometry, cylinder28Material);
 cylinder29.position.set(-1.1, 0.2, 0.5);
 cylinder29.rotation.x = Math.PI / 2;
 cylinder29.rotation.z = Math.PI / 2;
 const cylinder30Geometry = new THREE.CylinderGeometry(0.07, 0.07, 2.8, 32);
 const cylinder30Material = new THREE.MeshBasicMaterial({ color: 0xA67B5B }); // Marrom sienna, tom de madeira

 const cylinder30 = new THREE.Mesh(cylinder30Geometry, cylinder28Material);
 cylinder30.position.set(0, -0.37, 3.75);
 cylinder30.rotation.x = Math.PI / 2;
 cylinder30.rotation.z = Math.PI / 2;

 //Continua mecanismo movel

     const cylinder31 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder31.position.set(-1.26, -0.37, 3.75);
    cylinder31.rotation.x = Math.PI / 2;
    cylinder31.rotation.z = Math.PI / 2;   
const cylinder32 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder32.position.set(-1.26, -0.37, 3.75);
    cylinder32.rotation.x = Math.PI / 2;
    cylinder32.rotation.z = Math.PI / 2;
    const cylinder33 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    
    cylinder33.position.set(1.26, -0.37, 3.75);
    cylinder33.rotation.x = Math.PI / 2;
    cylinder33.rotation.z = Math.PI / 2;   
const cylinder34 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder34.position.set(1.26, -0.37, 3.75);
    cylinder34.rotation.x = Math.PI / 2;
    cylinder34.rotation.z = Math.PI / 2;

    const cylinder39 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder39.position.set(-1.14, -0.37, 3.75);
    cylinder39.rotation.x = Math.PI / 2;
    cylinder39.rotation.z = Math.PI / 2;   
const cylinder40 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder40.position.set(-1.14, -0.37, 3.75);
    cylinder40.rotation.x = Math.PI / 2;
    cylinder40.rotation.z = Math.PI / 2;

    const cylinder41 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    
    cylinder41.position.set(1.14, -0.37, 3.75);
    cylinder41.rotation.x = Math.PI / 2;
    cylinder41.rotation.z = Math.PI / 2;   
const cylinder42 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder42.position.set(1.14, -0.37, 3.75);
    cylinder42.rotation.x = Math.PI / 2;
    cylinder42.rotation.z = Math.PI / 2;

    const cylinder35 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder35.position.set(1.14, -0.1, 2.2);
    cylinder35.rotation.x = Math.PI / 2;
    cylinder35.rotation.z = Math.PI / 2;
 
    const cylinder36 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder36.position.set(1.14, -0.1,2.2);
    cylinder36.rotation.x = Math.PI / 2;
    cylinder36.rotation.z = Math.PI / 2;
 
    const cylinder37 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder37.position.set(-1.14, -0.1,2.2);
    cylinder37.rotation.x = Math.PI / 2;
    cylinder37.rotation.z = Math.PI / 2;
 
    const cylinder38 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder38.position.set(-1.14, -0.1, 2.2);
    cylinder38.rotation.x = Math.PI / 2;
    cylinder38.rotation.z = Math.PI / 2;
 
    const cube54Geometry = new THREE.BoxGeometry(0.11, 1.5, 0.2);  
    const cube54 = new THREE.Mesh(cube54Geometry, cubeMaterial);
    cube54.position.set(1.14, 0.05, 1.4);
    cube54.rotation.y = Math.PI / 1;
    cube54.rotation.z = Math.PI / 1;
    cube54.rotation.x = -61.1;
    const cube55Geometry = new THREE.BoxGeometry(0.1, 1.51, 0.21);  
    const cube55 = new THREE.Mesh(cube55Geometry, cube1Material);
    cube55.position.set(1.14, 0.05, 1.4);
    cube55.rotation.y = Math.PI / 1;
    cube55.rotation.z = Math.PI / 1;
    cube55.rotation.x = -61.1;
    const cube56 = new THREE.Mesh(cube54Geometry, cubeMaterial);
    cube56.position.set(-1.14, 0.05, 1.4);
    cube56.rotation.y = Math.PI / 1;
    cube56.rotation.z = Math.PI / 1;
    cube56.rotation.x = -61.1;
    const cube57 = new THREE.Mesh(cube55Geometry, cube1Material);
    cube57.position.set(-1.14, 0.05, 1.4);
    cube57.rotation.y = Math.PI / 1;
    cube57.rotation.z = Math.PI / 1;
    cube57.rotation.x = -61.1;

    const cube58 = new THREE.Mesh(cube54Geometry, cubeMaterial);
    cube58.position.set(1.14, -0.25, 3);
    cube58.rotation.y = Math.PI / 1;
    cube58.rotation.z = Math.PI / 1;
    cube58.rotation.x = -61.1;     
    const cube59 = new THREE.Mesh(cube55Geometry, cube1Material);
    cube59.position.set(1.14, -0.25, 3);
    cube59.rotation.y = Math.PI / 1;
    cube59.rotation.z = Math.PI / 1;
    cube59.rotation.x = -61.1;
    const cube60 = new THREE.Mesh(cube54Geometry, cubeMaterial);
    cube60.position.set(-1.14, -0.25, 3);
    cube60.rotation.y = Math.PI / 1;
    cube60.rotation.z = Math.PI / 1;
    cube60.rotation.x = -61.1;     
    const cube61 = new THREE.Mesh(cube55Geometry, cube1Material);
    cube61.position.set(-1.14, -0.25, 3);
    cube61.rotation.y = Math.PI / 1;
    cube61.rotation.z = Math.PI / 1;
    cube61.rotation.x = -61.1;
    //Furos
    const cylinder62Geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.111, 32);
const cylinder62 = new THREE.Mesh(cylinder62Geometry, cylinderBlack);
    cylinder62.position.set(-1.14, -0.1, 2.2);
    cylinder62.rotation.x = Math.PI / 2;
    cylinder62.rotation.z = Math.PI / 2;

    const cylinder63 = new THREE.Mesh(cylinder62Geometry, cylinderBlack);
        cylinder63.position.set(1.14, -0.1, 2.2);
        cylinder63.rotation.x = Math.PI / 2;
        cylinder63.rotation.z = Math.PI / 2;

//Rodas da frente 
const cube62Geometry = new THREE.BoxGeometry(0.11, 0.3, 0.7);  
const cube62 = new THREE.Mesh(cube62Geometry, cubeMaterial);
cube62.position.set(0, -0.9, 3.75);
cube62.rotation.y = Math.PI / 1;
cube62.rotation.z = Math.PI / 1;
cube62.rotation.x = Math.PI / 2;
const cube63Geometry = new THREE.BoxGeometry(0.1, 0.31, 0.71);  
const cube63 = new THREE.Mesh(cube63Geometry, cube1Material);
cube63.position.set(0, -0.9, 3.75);
cube63.rotation.y = Math.PI / 1;
cube63.rotation.z = Math.PI / 1;
cube63.rotation.x = Math.PI / 2;
const cylinder64Geometry = new  THREE.CylinderGeometry(0.07, 0.07, 2.3, 32);
const cylinder64 = new THREE.Mesh(cylinder64Geometry, cylinder28Material);
cylinder64.position.set(0, -1.25, 3.75);
cylinder64.rotation.x = Math.PI / 2;
cylinder64.rotation.z = Math.PI / 2;
const cylinder65Geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.11, 32);
const cylinder65 = new THREE.Mesh(cylinder65Geometry, cubeMaterial);
    cylinder65.position.set(0, -1.25, 3.75);
    cylinder65.rotation.x = Math.PI / 2;
    cylinder65.rotation.z = Math.PI / 2;
    const cylinder66Geometry = new THREE.CylinderGeometry(0.16, 0.16, 0.1, 32);
    const cylinder66 = new THREE.Mesh(cylinder66Geometry, cube1Material);
    
cylinder66.position.set(0, -1.25, 3.75);
cylinder66.rotation.x = Math.PI / 2;
cylinder66.rotation.z = Math.PI / 2;
const cylinder67Geometry = new THREE.CylinderGeometry(0.15, 0.15, 0.11, 32);
const cylinder67 = new THREE.Mesh(cylinder67Geometry, cubeMaterial);
    cylinder67.position.set(0, -1.25, 3.75);
    cylinder67.rotation.x = Math.PI / 2;
    cylinder67.rotation.z = Math.PI / 2;   

        const cylinder70 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder70.position.set(0.12, -1.25, 3.75);
    cylinder70.rotation.x = Math.PI / 2;
    cylinder70.rotation.z = Math.PI / 2;
    const cylinder71 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder71.position.set(0.12, -1.25, 3.75);
    cylinder71.rotation.x = Math.PI / 2;
    cylinder71.rotation.z = Math.PI / 2;
    const cylinder72 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder72.position.set(0.23, -1.25, 3.75);
    cylinder72.rotation.x = Math.PI / 2;
    cylinder72.rotation.z = Math.PI / 2;
    const cylinder73 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder73.position.set(0.23, -1.25, 3.75);
    cylinder73.rotation.x = Math.PI / 2;
    cylinder73.rotation.z = Math.PI / 2;
    const cylinder68Geometry = new THREE.CylinderGeometry(0.6, 0.6, 0.11, 32);
    const cylinder68 = new THREE.Mesh(cylinder68Geometry, cubeMaterial);
        cylinder68.position.set(0.34, -1.25, 3.75);
        cylinder68.rotation.x = Math.PI / 2;
        cylinder68.rotation.z = Math.PI / 2;
        const cylinder69Geometry = new THREE.CylinderGeometry(0.61, 0.61, 0.1, 32);
        const cylinder69 = new THREE.Mesh(cylinder69Geometry, cube1Material);
            cylinder69.position.set(0.34, -1.25, 3.75);
            cylinder69.rotation.x = Math.PI / 2;
            cylinder69.rotation.z = Math.PI / 2;

            const cylinder74 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder74.position.set(-0.12, -1.25, 3.75);
    cylinder74.rotation.x = Math.PI / 2;
    cylinder74.rotation.z = Math.PI / 2;
    const cylinder75 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder75.position.set(-0.12, -1.25, 3.75);
    cylinder75.rotation.x = Math.PI / 2;
    cylinder75.rotation.z = Math.PI / 2;
    const cylinder76 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
    cylinder76.position.set(-0.23, -1.25, 3.75);
    cylinder76.rotation.x = Math.PI / 2;
    cylinder76.rotation.z = Math.PI / 2;
    const cylinder77 = new THREE.Mesh(cylinder9Geometry, cube1Material);
    cylinder77.position.set(-0.23, -1.25, 3.75);
    cylinder77.rotation.x = Math.PI / 2;
    cylinder77.rotation.z = Math.PI / 2;
   
    const cylinder78 = new THREE.Mesh(cylinder68Geometry, cubeMaterial);
        cylinder78.position.set(-0.34, -1.25, 3.75);
        cylinder78.rotation.x = Math.PI / 2;
        cylinder78.rotation.z = Math.PI / 2;
       
        const cylinder79 = new THREE.Mesh(cylinder69Geometry, cube1Material);
            cylinder79.position.set(-0.34, -1.25, 3.75);
            cylinder79.rotation.x = Math.PI / 2;
            cylinder79.rotation.z = Math.PI / 2;

            const cylinder80 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
            cylinder80.position.set(-0.45, -1.25, 3.75);
            cylinder80.rotation.x = Math.PI / 2;
            cylinder80.rotation.z = Math.PI / 2;
            const cylinder81 = new THREE.Mesh(cylinder9Geometry, cube1Material);
            cylinder81.position.set(-0.45, -1.25, 3.75);
            cylinder81.rotation.x = Math.PI / 2;
            cylinder81.rotation.z = Math.PI / 2;
           
            const cylinder82 = new THREE.Mesh(cylinder68Geometry, cubeMaterial);
                cylinder82.position.set(-0.56, -1.25, 3.75);
                cylinder82.rotation.x = Math.PI / 2;
                cylinder82.rotation.z = Math.PI / 2;
               
                const cylinder83 = new THREE.Mesh(cylinder69Geometry, cube1Material);
                    cylinder83.position.set(-0.56, -1.25, 3.75);
                    cylinder83.rotation.x = Math.PI / 2;
                    cylinder83.rotation.z = Math.PI / 2;

                    const cylinder84 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
                    cylinder84.position.set(-0.67, -1.25, 3.75);
                    cylinder84.rotation.x = Math.PI / 2;
                    cylinder84.rotation.z = Math.PI / 2;
                    const cylinder85 = new THREE.Mesh(cylinder9Geometry, cube1Material);
                    cylinder85.position.set(-0.67, -1.25, 3.75);
                    cylinder85.rotation.x = Math.PI / 2;
                    cylinder85.rotation.z = Math.PI / 2;
                   
                    const cylinder86 = new THREE.Mesh(cylinder68Geometry, cubeMaterial);
                        cylinder86.position.set(-0.78, -1.25, 3.75);
                        cylinder86.rotation.x = Math.PI / 2;
                        cylinder86.rotation.z = Math.PI / 2;
                       
                        const cylinder87 = new THREE.Mesh(cylinder69Geometry, cube1Material);
                            cylinder87.position.set(-0.78, -1.25, 3.75);
                            cylinder87.rotation.x = Math.PI / 2;
                            cylinder87.rotation.z = Math.PI / 2;


    
const cylinder88 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
cylinder88.position.set(-0.89, -1.25, 3.75);
cylinder88.rotation.x = Math.PI / 2;
cylinder88.rotation.z = Math.PI / 2;
const cylinder89 = new THREE.Mesh(cylinder9Geometry, cube1Material);
cylinder89.position.set(-0.89, -1.25, 3.75);
cylinder89.rotation.x = Math.PI / 2;
cylinder89.rotation.z = Math.PI / 2;

const cylinder90 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
cylinder90.position.set(-1, -1.25, 3.75);
cylinder90.rotation.x = Math.PI / 2;
cylinder90.rotation.z = Math.PI / 2;
const cylinder91 = new THREE.Mesh(cylinder9Geometry, cube1Material);
cylinder91.position.set(-1, -1.25, 3.75);
cylinder91.rotation.x = Math.PI / 2;
cylinder91.rotation.z = Math.PI / 2;

const cylinder92 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
            cylinder92.position.set(0.45, -1.25, 3.75);
            cylinder92.rotation.x = Math.PI / 2;
            cylinder92.rotation.z = Math.PI / 2;
            const cylinder93 = new THREE.Mesh(cylinder9Geometry, cube1Material);
            cylinder93.position.set(0.45, -1.25, 3.75);
            cylinder93.rotation.x = Math.PI / 2;
            cylinder93.rotation.z = Math.PI / 2;
           
            const cylinder94 = new THREE.Mesh(cylinder68Geometry, cubeMaterial);
                cylinder94.position.set(0.56, -1.25, 3.75);
                cylinder94.rotation.x = Math.PI / 2;
                cylinder94.rotation.z = Math.PI / 2;
               
                const cylinder95 = new THREE.Mesh(cylinder69Geometry, cube1Material);
                    cylinder95.position.set(0.56, -1.25, 3.75);
                    cylinder95.rotation.x = Math.PI / 2;
                    cylinder95.rotation.z = Math.PI / 2;

                    const cylinder96 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
                    cylinder96.position.set(0.67, -1.25, 3.75);
                    cylinder96.rotation.x = Math.PI / 2;
                    cylinder96.rotation.z = Math.PI / 2;
                    const cylinder97 = new THREE.Mesh(cylinder9Geometry, cube1Material);
                    cylinder97.position.set(0.67, -1.25, 3.75);
                    cylinder97.rotation.x = Math.PI / 2;
                    cylinder97.rotation.z = Math.PI / 2;
                   
                    const cylinder98 = new THREE.Mesh(cylinder68Geometry, cubeMaterial);
                        cylinder98.position.set(0.78, -1.25, 3.75);
                        cylinder98.rotation.x = Math.PI / 2;
                        cylinder98.rotation.z = Math.PI / 2;
                       
                        const cylinder99 = new THREE.Mesh(cylinder69Geometry, cube1Material);
                            cylinder99.position.set(0.78, -1.25, 3.75);
                            cylinder99.rotation.x = Math.PI / 2;
                            cylinder99.rotation.z = Math.PI / 2;


    
const cylinder100 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
cylinder100.position.set(0.89, -1.25, 3.75);
cylinder100.rotation.x = Math.PI / 2;
cylinder100.rotation.z = Math.PI / 2;
const cylinder101 = new THREE.Mesh(cylinder9Geometry, cube1Material);
cylinder101.position.set(0.89, -1.25, 3.75);
cylinder101.rotation.x = Math.PI / 2;
cylinder101.rotation.z = Math.PI / 2;

const cylinder102 = new THREE.Mesh(cylinder8Geometry, cubeMaterial);
cylinder102.position.set(1, -1.25, 3.75);
cylinder102.rotation.x = Math.PI / 2;
cylinder102.rotation.z = Math.PI / 2;
const cylinder103 = new THREE.Mesh(cylinder9Geometry, cube1Material);
cylinder103.position.set(1, -1.25, 3.75);
cylinder103.rotation.x = Math.PI / 2;
cylinder103.rotation.z = Math.PI / 2;

    // --- Adiciona todos os componentes ao grupo ---
    group.add(motor, motor1, motor2, motor3, motor4, motor5, gearbox, leftShaft, rightShaft, 
              terminal1, terminal2, cube, cube1, cube2, cube3, quarterCylinder, quarterCylinder1,quarterCylinder2, quarterCylinder3, quarterCylinder4, quarterCylinder5,quarterCylinder6, quarterCylinder7, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18, cube19, cube20, cube21, cube22, cube23, cube24, cube25, cube26, cube27, cube28, cube29, cube30, cube31, cube32, cube33, cube34, cube35, cube36, cube37, cube38,cube39, cylinder, cylinder1, cylinder2, cylinder3, cylinder4, cylinder5,cylinder6, cube40, cube41, cube42, cube43, cube44, cube45, cube46, cube47, cube48,cube49, cube50,cube51, cube52, cube53, cylinder8, cylinder9, cylinder10, cylinder11, cylinder12, cylinder13, cylinder14, cylinder15, cylinder16, cylinder17, cylinder18, cylinder19, cylinder20, cylinder21, cylinder22,cylinder23, cylinder24, cylinder25, cylinder26, cylinder27,cylinder28, cylinder29, cylinder30, cylinder31, cylinder32,cylinder33, cylinder34, cylinder35, cylinder36, cylinder37, cylinder38, cylinder39, cylinder40, cylinder41, cylinder42, cube54, cube55, cube56, cube57, cube58, cube59, cube60,cube61, cylinder62, cylinder63, cube62,cube63, cylinder64, cylinder65, cylinder66, cylinder67, cylinder68,cylinder69, cylinder70, cylinder71,cylinder72, cylinder73,cylinder74,cylinder75, cylinder76,cylinder77,cylinder78,cylinder79,cylinder81,cylinder82, cylinder83, cylinder84, cylinder85, cylinder86, cylinder87,cylinder88, cylinder89, cylinder90, cylinder91,cylinder92,cylinder93,cylinder94,cylinder95,cylinder96,cylinder97, cylinder98, cylinder99,cylinder100, cylinder101, cylinder102, cylinder103);

    // Ajuste final da posição do grupo no espaço
    group.position.y = -0.2;
    group.position.z = -4;
    group.rotation.y = -1;
   

    return group;
}