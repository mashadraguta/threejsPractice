import * as THREE from "three";
import { camera, scene, renderer, sizes } from "./basics";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const axesHelper = new THREE.AxesHelper(10)
axesHelper.setColors('orange', 'green', 'blue')
// scene.add(axesHelper)

const controls = new OrbitControls(camera, renderer.domElement);

let cubes = []
for (let i = 0; i < 50; i++) {
    let cube = new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshBasicMaterial({ color: 'green' })
    )
    cube.position.set(
        THREE.MathUtils.randFloatSpread(12),
        THREE.MathUtils.randFloatSpread(12),
        THREE.MathUtils.randFloatSpread(12),
    )
    cubes.push(cube)
}
scene.add(...cubes)
console.log(cubes);


const raycaster = new THREE.Raycaster();
const normalizedCoords = new THREE.Vector2(100, 100)
let targetX
let targetY
let targetXR
let targetYR
const arrowHelper = new THREE.ArrowHelper();

window.addEventListener('mousemove', (e) => {
    normalizedCoords.x = (e.clientX / window.innerWidth) * 2 - 1
    normalizedCoords.y = -(e.clientY / window.innerHeight) * 2 + 1
})

window.addEventListener('click', (e) => {
    targetX = (e.clientX / window.innerWidth) * 2 - 1
    targetY = -(e.clientY / window.innerHeight) * 2 + 1
})
window.addEventListener('contextmenu', (e) => {

    targetXR = (e.clientX / window.innerWidth) * 2 - 1
    targetYR = -(e.clientY / window.innerHeight) * 2 + 1

})

window.addEventListener("resize", (e) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

function render(t) {

    raycaster.setFromCamera(normalizedCoords, camera)
    let intersectedObjs = raycaster.intersectObjects(cubes)

    if (!intersectedObjs.length) {
        cubes.forEach(cube => {
            cube.material.color.set('orange')
        })
    }
    if (intersectedObjs.length) {
        // left click
        if (normalizedCoords.x == targetX) {
            intersectedObjs[0].object.material.wireframe = true
        }
        // right click
        else if (normalizedCoords.x == targetXR) {
            intersectedObjs[0].object.material.wireframe = false
        }
    }
    for (const interObj of intersectedObjs) {
        interObj.object.material.color.set('green')
    }
    controls.update();
    window.requestAnimationFrame(render);
    renderer.render(scene, camera);
}

render();

