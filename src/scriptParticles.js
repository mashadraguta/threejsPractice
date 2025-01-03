import * as THREE from "three";
import { camera, scene, canvas, renderer } from "./basics";
import { GParams, palette } from "./particlesGUI";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


/* HELPERS */

const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("red", "yellow", "blue");
scene.add(axesHelper);


const controls = new OrbitControls(camera, renderer.domElement);

/* TEXTURES */

const loader = new THREE.TextureLoader();
loader.setPath("/textures/particles/");
const mat4 = loader.load("4.png");


// GALAXY

let stars;
let bufferGeometry;
let starMat;



export const generateGalaxy = () => {
  if (stars) {
    scene.remove(stars);

  }

  bufferGeometry = new THREE.BufferGeometry();
  let partsPosArr = new Float32Array(3 * GParams.count);
  let partsPosColorArr = new Float32Array(3 * GParams.count);
  let positionAttribute = new THREE.BufferAttribute(partsPosArr, 3)
  let colorMiddle = new THREE.Color(palette.middle)
  let colorBorder = new THREE.Color(palette.border)
  let colorInter = colorBorder.clone()
  for (let i = 0; i < 3 * GParams.count; i++) {

    let i3 = i * 3
    let radius = Math.random() * GParams.radius
    let spin = GParams.spin * radius
    let randomX = (Math.random() - .5 ** GParams.randomnessLevel) * GParams.randomness * radius
    let randomY = (Math.random() - .5 ** GParams.randomnessLevel) * GParams.randomness * radius
    let randomZ = (Math.random() - .5 ** GParams.randomnessLevel) * GParams.randomness * radius

    let branchAngle = (i % GParams.branches) / GParams.branches * Math.PI * 2

    partsPosArr[i3] = Math.sin(branchAngle + spin) * radius + randomX
    partsPosArr[i3 + 1] = randomY
    partsPosArr[i3 + 2] = Math.cos(branchAngle + spin) * radius + randomZ

    colorInter.lerpColors(colorMiddle, colorBorder, radius / GParams.radius / 0.3)


    partsPosColorArr[i3] = colorInter.r
    partsPosColorArr[i3 + 1] = colorInter.g
    partsPosColorArr[i3 + 2] = colorInter.b

  }

  bufferGeometry.setAttribute(
    "position",
    positionAttribute
  );
  bufferGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(partsPosColorArr, 3)
  );
  console.log(`bufferGeometry`, bufferGeometry);

  starMat = new THREE.PointsMaterial({

    vertexColors: GParams.color,
    size: GParams.size,
    sizeAttenuation: true,
    depthWrite: false,
    alphaMap: mat4,
    transparent: true,
    blending: THREE.AdditiveBlending,
  });

  stars = new THREE.Points(bufferGeometry, starMat);
  scene.add(stars);
};

generateGalaxy();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// bufferGeometry.attributes.position.array.map(particle => {
//   console.log(`particle======>`, particle);

//   //particle += 0.01
// })

const clock = new THREE.Clock();
const temp = new THREE.Vector3();
function render(t) {
  const elapsedTime = clock.getElapsedTime();
  // for (let i = 0; i < GParams.count * 3; i += 3) {

  //   const quad = (i / 12 | 0);
  //   const ringId = quad / 12 | 0;
  //   const ringQuadId = quad % 12;
  //   const ringU = ringQuadId / 12;
  //   const angle = ringU * Math.PI * 2;
  //   // temp.fromArray(normals, i);
  //   temp.multiplyScalar(THREE.MathUtils.lerp(1, 1.4, Math.sin(elapsedTime + ringId + angle) * .5 + .5));
  //   // temp.toArray(partsPosArr, i);

  // }
  // for (let i = 0; i < GParams.count * 3; i++) {
  //   let i3 = i * 3
  //   let x = bufferGeometry.attributes.position.array[i3]
  //   let y = bufferGeometry.attributes.position.array[i3 + 1]
  //   let z = bufferGeometry.attributes.position.array[i3 + 2]
  //   bufferGeometry.attributes.position.array[i] = (1 + Math.sin(0.1 * i + elapsedTime));
  //   // bufferGeometry.attributes.position.array[i3 + 1] += Math.cos(y * elapsedTime / 1000)
  //   // bufferGeometry.attributes.position.array[i3 + 2] += Math.cos(z * elapsedTime / 1000) * GParams.radius / 1000

  // }
  // bufferGeometry.attributes.position.array.map(particle => particle += 0.01)
  // bufferGeometry.attributes.position.array.map(particle => {
  //   // console.log(`particle======>`, particle);

  //   particle += Math.sin(elapsedTime)
  // })
  // GParams.spin = Math.sin(elapsedTime)
  bufferGeometry.attributes.position.needsUpdate = true
  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();



