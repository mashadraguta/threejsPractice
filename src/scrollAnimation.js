
import * as THREE from "three";
import { TeapotGeometry } from "three/examples/jsm/geometries/TeapotGeometry.js";
import './style.css'
import { camera, scene, renderer, sizes } from "./basics";
import gsap from "gsap";

const matCapTexture = new THREE.TextureLoader().load("/textures/matcaps/3.png");
const pointsTexture = new THREE.TextureLoader().load("/textures/particles/3.png");


const material = new THREE.MeshMatcapMaterial({ matcap: matCapTexture });
const materialPoints = new THREE.PointsMaterial({
    color: 0x888888,
    alphaMap: pointsTexture,
    transparent: true,
    size: 1.5,
    //sizeAttenuation: false
});

material.side = THREE.DoubleSide
const vertices = [];

for (let i = 0; i < 1000; i++) {
    const x = THREE.MathUtils.randFloatSpread(200);
    const y = THREE.MathUtils.randFloatSpread(200);
    const z = THREE.MathUtils.randFloatSpread(200);

    vertices.push(x, y, z);
}

const geometryPoints = new THREE.BufferGeometry();
geometryPoints.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
const points = new THREE.Points(geometryPoints, materialPoints);
// scene.add(points);
const verticesOfCube = [
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
    -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
];

const indicesOfFaces = [
    2, 1, 0, 0, 3, 2,
    0, 4, 7, 7, 3, 0,
    0, 1, 5, 5, 4, 0,
    1, 2, 6, 6, 5, 1,
    2, 3, 7, 7, 6, 2,
    4, 5, 6, 6, 7, 4
];

const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 2);
const geometry2 = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 1, 2);
const covrig = new THREE.Mesh(
    new THREE.TorusGeometry(1, .4, 16, 60),
    material
)
const cone = new THREE.Mesh(
    new TeapotGeometry(),
    material
)
const torusKnot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(.8, .35, 100, 16),
    material
)
const octahedron = new THREE.Mesh(
    geometry,
    material
)
cone.scale.set(.02, .02, .02)

covrig.position.x = -3
cone.position.x = 0
torusKnot.position.x = -3
octahedron.position.x = 2

const objDistance = 10
const objects = [covrig, cone, torusKnot, octahedron]


const groupOfObjs = new THREE.Group()

groupOfObjs.add(...objects, points)

covrig.position.y = -objDistance * 0 - 2
cone.position.y = -objDistance * 1 - 2
torusKnot.position.y = -objDistance * 2 - 1.5
octahedron.position.y = -objDistance * 3

scene.add(groupOfObjs)

function normalize(value, min, max) {
    return (value - min) / (max - min)
}
const elements = document.querySelectorAll('.section')
const lengthOfAllEls = elements.length

const heightOfDoc = [].slice.call(elements).pop().offsetTop;

let initialScrollPos = 0
let initialCoords = {
    x: 0,
    y: 0
}
let indicator = gsap.timeline();
console.log(`indicator`, indicator);

// gsap.to(
//     objects[0].rotation,
//     {
//         y: spinNumber,
//         duration: 20,
//         transformOrigin: '50% 50%',
//         ease: "power4",
//     }
// );

let spinNumber = 34
let sectionNumber = 0
document.addEventListener("scroll", (event) => {
    sectionNumber = Math.round(window.scrollY / (sizes.height + .5))
    initialScrollPos = window.scrollY
    switch (sectionNumber) {
        case 0:
            console.log(`I`);
            gsap.to(
                objects[0].rotation,
                {
                    duration: 2.5,
                    ease: "none",
                    y: Math.random() * -5
                }
            );
            break
        case 1:
            gsap.to(
                objects[1].rotation,
                {
                    x: Math.random() * 5,
                    y: -Math.random() * 5,
                    ease: "slow(0.7,0.7,false)",
                }
            );
            console.log(`II`);
            break
        case 2:
            gsap.to(
                objects[2].rotation,
                {
                    x: Math.random() * 5,
                    y: -Math.random() * 5,
                    ease: "slow(0.7,0.7,false)",
                }
            );
            console.log(`III`);
            break
        case 3:
            gsap.to(
                objects[3].rotation,
                {

                    x: Math.random() * 5,
                    y: -Math.random() * 5,
                    ease: "slow(0.7,0.7,false)",
                }
            );
            console.log(`IV`);
            break
        default:
            return
    }
});


window.addEventListener("mousemove", (e) => {

    let normalizedX = normalize(e.clientX, 0, sizes.width) * 2 - 1
    let normalizedY = -normalize(e.clientY, 0, sizes.height) * 2 + 1
    initialCoords.x = normalizedX
    initialCoords.y = normalizedY

});

window.addEventListener("resize", (e) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const clock = new THREE.Clock();
const speed = 2; //units a second
let delta = 0;
function render(t) {
    delta = clock.getDelta();

    t *= .0005

    window.requestAnimationFrame(render);

    const normalizedValue = normalize(initialScrollPos, 0, heightOfDoc)

    camera.position.y = -normalizedValue * objDistance * 3
    camera.position.z = 4
    const lerpedValue = THREE.MathUtils.lerp(initialCoords.x, initialCoords.y, .9)
    groupOfObjs.position.x += (initialCoords.x - groupOfObjs.position.x) / 10
    groupOfObjs.position.y += (initialCoords.y - groupOfObjs.position.y) / 10
    //console.log(sectionNumber)

    renderer.render(scene, camera);
}

render();




// const nodeEls = [].slice.call(elements)
// console.log(nodeEls);
// let el1OffT
// let el2OffT
// let el3OffT
// let el4OffT
// for (let i = 0; i < nodeEls.length; i++) {

//     el1OffT = nodeEls[0].offsetTop
//     el2OffT = nodeEls[1].offsetTop
//     el3OffT = nodeEls[2].offsetTop
//     el4OffT = nodeEls[3].offsetTop
// }

// console.log(``, el1OffT)
// console.log(el2OffT)
// console.log(el3OffT)
// console.log(el4OffT)


// console.log(`camera.position.y`, camera.position.y);

//  if (camera.position.y < el2OffT) {
//         // covrig.position.set(0, 0, 0)
//         covrig.rotation.set(Math.random(), Math.random(), Math.random())
//         return
//     } else if (initialScrollPos < el3OffT) {
//         cone.rotation.set(Math.random(), Math.random(), Math.random())
//         return
//     } else if (normalizedValue < -1) {

//     }


// switch (sectionNumber) {
//     case 0:
//         console.log(`I`);
//         break;
//     case 1:
//         console.log(`II`);
//         break;
//     case 2:
//         console.log(`III`);
//         break;
//     case 3:
//         console.log(`IV`);
//         break;

//     default:
//         return
// }