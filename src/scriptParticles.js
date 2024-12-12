import * as THREE from "three";
import { camera, scene, canvas, renderer } from "./basics";
import { changeObjPos } from "./utils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";

const loader = new THREE.TextureLoader();

const cartoonMat = loader.load("/textures/matcaps/1.png");
loader.setPath("/textures/particles/");

const mat1 = loader.load("1.png");
const mat2 = loader.load("2.png");
const mat3 = loader.load("3.png");
const mat4 = loader.load("4.png");
const mat5 = loader.load("5.png");
const mat6 = loader.load("6.png");
const mat7 = loader.load("7.png");
const mat8 = loader.load("8.png");
const mat9 = loader.load("9.png");
const mat10 = loader.load("10.png");
const mat11 = loader.load("11.png");
const mat12 = loader.load("12.png");

const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("red", "yellow", "blue");

const gui = new GUI();
const controls = new OrbitControls(camera, renderer.domElement);

const initParamsALight = {
  position: {
    x: 3,
    y: 3,
    z: 15,
  },
  intensity: 0.5,
};
const initParamsBMesh = {
  position: {
    x: 3,
    y: 3,
    z: 15,
  },
};

scene.add(axesHelper);

const ambientLight = new THREE.PointLight("yellow", initParamsALight.intensity);
ambientLight.position.set(
  initParamsALight.position.x,
  initParamsALight.position.y,
  initParamsALight.position.z
);
changeObjPos(ambientLight, initParamsALight, gui, "point Light");

const covrig = new THREE.Mesh(
  new THREE.TorusGeometry(),
  new THREE.MeshToonMaterial({
    alphaMap: cartoonMat,
    color: "green",
  })
);
covrig.position.set(0, 4, 5);
scene.add(ambientLight);
scene.add(covrig);

const parSphereGeom = new THREE.SphereGeometry(2.5, 32, 32);
const parTorusGeom = new THREE.TorusGeometry();
const parBoxGeom = new THREE.BoxGeometry(5, 5, 5);
const parSphereMat = new THREE.PointsMaterial({
  color: "green",
  alphaMap: mat2,
  alphaTest: 0.001,
  //depthTest: false,
  transparent: true,
  size: 0.1,
  sizeAttenuation: true,
});

const littleSphere = new THREE.Points(parSphereGeom, parSphereMat);
const littleTorus = new THREE.Points(parTorusGeom, parSphereMat);
const littleBox = new THREE.Points(parBoxGeom, parSphereMat);

littleSphere.position.set(-10, 0, 0);
littleTorus.position.set(0, 0, 0);
littleBox.position.set(10, 0, 0);

// scene.add(littleSphere);
// scene.add(littleTorus);
// scene.add(littleBox);
const count = 5000;
const bufferArr = new Float32Array(3 * count);
const bufferGeom = new THREE.BufferGeometry();
for (let i = 0; i < 3 * count; i++) {
  //bufferArr[i] = Math.random() * 100;
  bufferArr[i] = (Math.random() - 0.5) * 10;
}
bufferGeom.setAttribute("position", new THREE.BufferAttribute(bufferArr, 3));
const newMeshRandom = new THREE.Points(bufferGeom, parSphereMat);

scene.add(newMeshRandom);
// for (let i = 0; i < 1000; i++) {
//   const littleSphere = new THREE.Points(parSphereGeom, parSphereMat);
//   littleSphere.position.set(
//     THREE.MathUtils.randFloatSpread(100),
//     THREE.MathUtils.randFloatSpread(100),
//     THREE.MathUtils.randFloatSpread(100)
//   );
//   scene.add(littleSphere);
// }

window.addEventListener("resize", (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const clock = new THREE.Clock();
function render(t) {
  const elapsedTime = clock.getElapsedTime();

  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
