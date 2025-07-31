function createElevador() {
    const group = new THREE.Group();
    
    const loader = new THREE.OBJLoader();
    
    loader.load(
        'elevador_v2a.obj',
        function(object) {
            console.log('ELEVADOR OBJ CARREGADO!');
            
            // Ajustar escala - MANTÉM 0.01
            object.scale.setScalar(0.01);
            
            // CENTRALIZAR O MODELO DENTRO DO GROUP
            const box = new THREE.Box3().setFromObject(object);
            const center = box.getCenter(new THREE.Vector3());
            object.position.sub(center); // Remove o offset do centro
            
            // Aplicar materiais
            object.traverse(function(child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    child.material = new THREE.MeshPhongMaterial({
                        color: 0x888888,
                        shininess: 30
                    });
                }
            });
            
            group.add(object);
            console.log('Elevador centralizado no grupo!');
        },
        function(progress) {
            console.log('Carregando elevador...');
        },
        function(error) {
            console.error('ERRO ao carregar elevador:', error);
        }
    );
    
    // POSICIONAR O GROUP NO CENTRO DA CENA
    group.position.set(0, 0, 0); // CENTRO ABSOLUTO
    
    return group;
}