function createCeres() {
    const group = new THREE.Group();    

    // Corpo do motor DC (cilíndrico, cor prata metálica, em pé)
    const motorGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32); // Raio 0.5, altura 1.5
    const motorMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xC0C0C0, // Prata
        shininess: 100 
    });
    const motor = new THREE.Mesh(motorGeometry, motorMaterial);
    motor.position.set(0, 2, 0); // Centro do motor na base, elevado para ficar em pé   

    // Caixa de redução (cubo amarelo, acoplado no topo do motor)
    const gearboxGeometry = new THREE.BoxGeometry(1.1, 1.7, 1.2); // Mesmas dimensões do "Press Switch"
    const gearboxMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xFFFF00, // Amarelo
        shininess: 30 
    });
    const gearbox = new THREE.Mesh(gearboxGeometry, gearboxMaterial);
    gearbox.position.set(0, 1.2, 0); // No topo do motor (1.5/2 + 0.7/2 + ajuste)

     // Corpo prastico do motor DC (cilíndrico, cor amarela como a caixa de redução)
     const motor1Geometry = new THREE.CylinderGeometry(0.55, 0.55, 0.5, 32); 
        const motor1 = new THREE.Mesh(motor1Geometry, gearboxMaterial);
        motor1.position.set(0, 2.11, 0); 

  // Parte preta do motor DC
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
    const motor4Geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.1, 32);
    const motor4 = new THREE.Mesh(motor4Geometry, motorMaterial);
    motor4.position.set(0, 2.91, 0);

    const motor5Geometry = new THREE.CylinderGeometry(0.1, 0.1, 1.35, 32); 
        const motor5 = new THREE.Mesh(motor5Geometry, gearboxMaterial);
        motor5.position.set(0, 1.5, 0);
        motor5.rotation.z = Math.PI / 2;

    // Eixo duplo (saindo apenas da caixa de redução)
    const shaftGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.5, 32); // Raio fino, comprimento 1.5
    const shaftMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x808080, // Cinza metálico
        shininess: 30 
    });

    // Eixo esquerdo (saindo da caixa de redução)
    const leftShaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    leftShaft.rotation.z = Math.PI / 2; // Horizontal
    leftShaft.position.set(-0.7, 0.8, 0); // Alinhado ao centro da caixa de redução

    // Eixo direito (saindo da caixa de redução)
    const rightShaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    rightShaft.rotation.z = Math.PI / 2; // Horizontal
    rightShaft.position.set(0.7, 0.8, 0); // Alinhado ao centro da caixa de redução
    
    // Conectores do motor (terminais elétricos, na base do motor)
    const terminalGeometry = new THREE.BoxGeometry(0.1, 0.2, 0.05);
    const terminalMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xaaaaaa, // Dourado para terminais
        shininess: 40 
    });

    const terminal1 = new THREE.Mesh(terminalGeometry, terminalMaterial);
    terminal1.position.set(0.4, 2.875, -0.25); // Terminal inferior na base do motor

    const terminal2 = new THREE.Mesh(terminalGeometry, terminalMaterial);
    terminal2.position.set(0.4, 2.875, 0.25); // Terminal superior na base do motor

    // Adicionar todos os objetos ao grupo em uma única chamada
    group.add(motor, motor1, motor2, motor3, motor4, motor5, gearbox, leftShaft, rightShaft,  terminal1, terminal2);

    return group;
}