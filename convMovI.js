function createConvMovI() {
    const group = new THREE.Group();

    // Definir cores
    const mdfColor = 0x8B5A2B; // Marrom original parecido com MDF (mantido para a base)
    const darkerMdfColor = 0x5C3A1B; // Marrom mais escuro (mantido como base para duplicação)

    // Novos tons mais escuros para as engrenagens
    const gearColor = 0x7A4A1E; // Tom mais escuro baseado em mdfColor (original das engrenagens)
    const darkerGearColor = 0x3C2510; // Tom mais escuro baseado em darkerMdfColor (duplicação das engrenagens)

    // Base vertical (original)
    const baseGeometry = new THREE.BoxGeometry(0.1, 3.8, 2.5); // Largura fina, altura 3, profundidade 2
    const baseMaterial = new THREE.MeshBasicMaterial({ color: mdfColor });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.set(0, 1.5, 0); // Centralizado com altura 3

    // Base vertical duplicada (tamanhos +0.01, profundidade 0.09, cor mais escura)
    const baseDupGeometry = new THREE.BoxGeometry(0.09, 3.81, 2.51);
    const baseDupMaterial = new THREE.MeshBasicMaterial({ color: darkerMdfColor });
    const baseDup = new THREE.Mesh(baseDupGeometry, baseDupMaterial);
    baseDup.position.set(0, 1.5, 0);

    // Função auxiliar para criar engrenagens trapezoidais
    function createTrapezoidalGear(radius, teeth, thickness, material) {
        const shape = new THREE.Shape();
        const toothHeight = radius * 0.1; // Altura dos dentes proporcional ao raio
        const toothBaseWidth = (2 * Math.PI * radius) / teeth * 0.6; // Base do dente trapezoidal        

        // Criar o círculo base da engrenagem
        shape.absarc(0, 0, radius - toothHeight, 0, 2 * Math.PI, false);

        // Adicionar dentes trapezoidais
        for (let i = 0; i < teeth; i++) {
            const angle = (i / teeth) * 2 * Math.PI;
            const nextAngle = ((i + 0.5) / teeth) * 2 * Math.PI;

            // Pontos do trapézio
            const x1 = (radius - toothHeight) * Math.cos(angle);
            const y1 = (radius - toothHeight) * Math.sin(angle);
            const x2 = radius * Math.cos(angle);
            const y2 = radius * Math.sin(angle);
            const x3 = radius * Math.cos(nextAngle);
            const y3 = radius * Math.sin(nextAngle);
            const x4 = (radius - toothHeight) * Math.cos(nextAngle);
            const y4 = (radius - toothHeight) * Math.sin(nextAngle);

            shape.moveTo(x1, y1);
            shape.lineTo(x2, y2); // Subida do dente
            shape.lineTo(x3, y3); // Topo do dente
            shape.lineTo(x4, y4); // Descida do dente
        }

        const extrudeSettings = { depth: thickness, bevelEnabled: false };
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        return new THREE.Mesh(geometry, material);
    }

    // Engrenagem grande (30 dentes, original) - com material próprio
    const largeGearRadius = 0.75; // Raio mantido
    const largeGearMaterial = new THREE.MeshBasicMaterial({ color: gearColor });
    const largeGear = createTrapezoidalGear(largeGearRadius, 30, 0.1, largeGearMaterial);
    largeGear.position.set(0.05, 0.5, 0); // Posicionada embaixo
    largeGear.rotation.x = Math.PI; // 180 graus no eixo X
    largeGear.rotation.y = Math.PI / 2; // 90 graus no eixo Y

    // Engrenagem grande duplicada (tamanhos +0.01, espessura 0.09, cor mais escura)
    const largeGearDupMaterial = new THREE.MeshBasicMaterial({ color: darkerGearColor });
    const largeGearDup = createTrapezoidalGear(largeGearRadius + 0.01, 30, 0.09, largeGearDupMaterial);
    largeGearDup.position.set(0.05, 0.5, 0);
    largeGearDup.rotation.x = Math.PI;
    largeGearDup.rotation.y = Math.PI / 2;
    // Engrenagem grande duplicada (tamanhos +0.01, espessura 0.09, cor mais escura)    
    const largeGearDup1 = createTrapezoidalGear(largeGearRadius + 0.01, 30.05, 0.09, largeGearDupMaterial);
    largeGearDup1.position.set(0.05, 0.5, 0);
    largeGearDup1.rotation.x = Math.PI;
    largeGearDup1.rotation.y = Math.PI / 2;
    const largeGearDup2 = createTrapezoidalGear(largeGearRadius + 0.01, 29.95, 0.09, largeGearDupMaterial);
    largeGearDup2.position.set(0.05, 0.5, 0);
    largeGearDup2.rotation.x = Math.PI;
    largeGearDup2.rotation.y = Math.PI / 2;

    // Engrenagem pequena (14 dentes, original) - com material próprio
    const smallGearRadius = 0.35; // Raio mantido
    const smallGearMaterial = new THREE.MeshBasicMaterial({ color: gearColor });
    const smallGear = createTrapezoidalGear(smallGearRadius, 14, 0.1, smallGearMaterial);
    smallGear.position.set(0.05, 1.6, 0); // Posicionada em cima
    smallGear.rotation.x = Math.PI; // 180 graus no eixo X
    smallGear.rotation.y = Math.PI / 2; // 90 graus no eixo Y

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

    // Adicionar todos os objetos ao grupo
    group.add(base, baseDup, largeGear, largeGearDup, largeGearDup1, largeGearDup2, smallGear, smallGearDup, smallGearDup1, smallGearDup2);

    // Girar todo o grupo -90 graus no eixo Y
    group.rotation.y = -Math.PI / 2; // -90 graus

    // Mover todo o grupo 1 unidade para baixo no eixo Y
    group.position.y = -0.5;

    return group;
}