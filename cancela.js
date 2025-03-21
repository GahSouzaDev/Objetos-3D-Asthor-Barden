function createCancela() {
    const group = new THREE.Group();
    
    // Criar o loader de texturas
    const textureLoader = new THREE.TextureLoader();

    // Base da cancela com textura
    const baseGeometry = new THREE.BoxGeometry(4, 0.2, 2);
    const baseTexture = textureLoader.load('tx-md1.png');
    baseTexture.wrapS = THREE.RepeatWrapping;
    baseTexture.wrapT = THREE.RepeatWrapping;
    baseTexture.repeat.set(1, 1);

    const baseMaterial = new THREE.MeshPhongMaterial({ 
        map: baseTexture,
        color: 0x8B4513,
        shininess: 30
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -0.1;
    group.add(base);

    // Base vertical com texturas por face e furos nas laterais
    const postGeometry = new THREE.BoxGeometry(0.1, 1.5, 2);

    // Criar textura com furo para a face esquerda (x negativo)
    const canvasLeft = document.createElement('canvas');
    canvasLeft.width = 256;
    canvasLeft.height = 256;
    const contextLeft = canvasLeft.getContext('2d');
    contextLeft.fillStyle = 'rgba(255, 255, 255, 1)';
    contextLeft.fillRect(0, 0, 256, 256);
    contextLeft.globalCompositeOperation = 'destination-out';
    contextLeft.beginPath();
    contextLeft.arc(50, 180, 15, 0, Math.PI * 2); // Furo na parte inferior
    contextLeft.fill();
    const alphaTextureLeft = new THREE.CanvasTexture(canvasLeft);

    // Criar textura com furo para a face direita (x positivo)
    const canvasRight = document.createElement('canvas');
    canvasRight.width = 256;
    canvasRight.height = 256;
    const contextRight = canvasRight.getContext('2d');
    contextRight.fillStyle = 'rgba(255, 255, 255, 1)';
    contextRight.fillRect(0, 0, 256, 256);
    contextRight.globalCompositeOperation = 'destination-out';
    contextRight.beginPath();
    contextRight.arc(206, 180, 15, 0, Math.PI * 2); // Furo um pouco mais alto que o da esquerda
    contextRight.fill();
    const alphaTextureRight = new THREE.CanvasTexture(canvasRight);

    // Textura base para todas as faces
    const postTexture = textureLoader.load('tx-md2.png');
    postTexture.wrapS = THREE.RepeatWrapping;
    postTexture.wrapT = THREE.RepeatWrapping;
    postTexture.repeat.set(1, 0.75);

    // Materiais para cada face da base(6 faces no total)
    const materials = [
        new THREE.MeshPhongMaterial({ // Face direita (+x)
            map: postTexture,
            alphaMap: alphaTextureRight,
            transparent: true,
            color: 0x8B4513,
            shininess: 30
        }),
        new THREE.MeshPhongMaterial({ // Face esquerda (-x)
            map: postTexture,
            alphaMap: alphaTextureLeft,
            transparent: true,
            color: 0x8B4513,
            shininess: 30
        }),
        new THREE.MeshPhongMaterial({ // Face superior (+y)
            map: postTexture,
            color: 0x8B4513,
            shininess: 30
        }),
        new THREE.MeshPhongMaterial({ // Face inferior (-y)
            map: postTexture,
            color: 0x8B4513,
            shininess: 30
        }),
        new THREE.MeshPhongMaterial({ // Face frontal (+z)
            map: postTexture,
            color: 0x8B4513,
            shininess: 30
        }),
        new THREE.MeshPhongMaterial({ // Face traseira (-z)
            map: postTexture,
            color: 0x8B4513,
            shininess: 30
        })
    ];

    // Servo motor
    const post = new THREE.Mesh(postGeometry, materials);
    post.position.set(1, 0.75, 0);
    group.add(post);   

    const bar1Geometry = new THREE.BoxGeometry(0.6, 0.7, 0.3);
    const bar1Material = new THREE.MeshPhongMaterial({ 
        color: 0x0000FF,  // Azul
        transparent: true, 
        opacity: 0.8      // Ajuste a opacidade para controlar a transparência
    });       
    const bar1 = new THREE.Mesh(bar1Geometry, bar1Material);
    bar1.position.set(0.6, 0.45, -0.6);
    group.add(bar1);
    const bar2Geometry = new THREE.BoxGeometry(0.1, 1, 0.3);
    const bar2 = new THREE.Mesh(bar2Geometry, bar1Material);
    bar2.position.set(0.95, 0.45, -0.6);
    group.add(bar2);   
// Barra horizontal do servomotr (cilíndrica)
const bar3Geometry = new THREE.CylinderGeometry(0.04, 0.04, 0.2, 32); 
const bar3Material = new THREE.MeshPhongMaterial({ color: 0xD3D3D3});
const bar3 = new THREE.Mesh(bar3Geometry, bar3Material);
bar3.position.set(1.1, 0.6, -0.6);
bar3.rotation.z = Math.PI / 2; 
group.add(bar3);

 // Barra vertical 1
 const bar4Geometry = new THREE.BoxGeometry(0.05, 1.3, 0.2);
 const bar4Material = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
 const bar4 = new THREE.Mesh(bar4Geometry, bar4Material);
 bar4.position.set(1.1, 1.5, -0.1);
 group.add(bar4);
 //Barra vertical 2
 const bar5 = new THREE.Mesh(bar4Geometry, bar4Material);
 bar5.position.set(1.1, 1.2, -0.6);
 group.add(bar5);
 // arredondamento das pontas (cilíndrica)
const bar6Geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.05, 32); 
const bar6Material = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
const bar6 = new THREE.Mesh(bar6Geometry, bar6Material);
bar6.position.set(1.1, 0.55, -0.6);
bar6.rotation.z = Math.PI / 2; 
group.add(bar6);
const bar7 = new THREE.Mesh(bar6Geometry, bar6Material);
bar7.position.set(1.1, 1.85, -0.6);
bar7.rotation.z = Math.PI / 2; 
group.add(bar7);
const bar8 = new THREE.Mesh(bar6Geometry, bar6Material);
bar8.position.set(1.1, 2.15, -0.1);
bar8.rotation.z = Math.PI / 2; 
group.add(bar8);
const bar9 = new THREE.Mesh(bar6Geometry, bar6Material);
bar9.position.set(1.1, 0.85, -0.1);
bar9.rotation.z = Math.PI / 2; 
group.add(bar9);

 // Barra horizontal (cilíndrica)
 const bar10Geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.05, 32); // Raio 0.05, comprimento 3, 32 segmentos
 const bar10Material = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
 const bar10 = new THREE.Mesh(bar6Geometry, bar10Material);
 bar10.position.set(1.1, 0.55, -0.6);
 bar10.rotation.z = Math.PI / 2; // Rotacionar 90° para alinhar horizontalmente no eixo X
 group.add(bar10);

    return group;
}