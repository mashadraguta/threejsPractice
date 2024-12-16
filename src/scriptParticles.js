import * as THREE from "three";
import { camera, scene, canvas, renderer } from "./basics";
import { changeObjPos } from "./utils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";

/* HELPERS */

const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("red", "yellow", "blue");

scene.add(axesHelper);

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

/* TEXTURES */

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

/* LIGHTS */

const ambientLight = new THREE.PointLight("yellow", initParamsALight.intensity);
ambientLight.position.set(
  initParamsALight.position.x,
  initParamsALight.position.y,
  initParamsALight.position.z
);
changeObjPos(ambientLight, initParamsALight, gui, "point Light");
scene.add(ambientLight);

/* OBJECTS */

const covrig = new THREE.Mesh(
  new THREE.TorusGeometry(),
  new THREE.MeshToonMaterial({
    alphaMap: cartoonMat,
    color: "green",
  })
);

covrig.position.set(0, 2, 2);
// scene.add(covrig);

const sphereG = new THREE.SphereGeometry(2.5, 32, 32);
const torusG = new THREE.TorusGeometry();
const boxGeo = new THREE.BoxGeometry(5, 5, 5);

/* MATERIALS */

// sphereM.depthTest = false
// sphereM2.depthTest = false
// sphereM.depthWrite = false;
// sphereM2.depthWrite = false
// THREE.NoBlending
// THREE.NormalBlending
// THREE.AdditiveBlending
// THREE.SubtractiveBlending
// THREE.MultiplyBlending
// THREE.CustomBlending

//scene.background = new THREE.Color("#f5deb3");
// sphereM2.blending = THREE.AdditiveBlending
// const littleSphere = new THREE.Points(sphereG, sphereM);
// const littleTorus = new THREE.Points(torusG, sphereM);
// const littleBox = new THREE.Points(boxGeo, sphereM);

// littleSphere.position.set(-10, 0, 0);
// littleTorus.position.set(0, 0, 0);
// littleBox.position.set(10, 0, 0);

// scene.add(littleSphere);
// scene.add(littleTorus);
// scene.add(littleBox);

/* BUFFER RANDOM GEOMETRY */

const count = 100;
const bufferArrPos = new Float32Array(3 * count);
const bufferArrColor = new Float32Array(3 * count);
const bufferGeom = new THREE.BufferGeometry();

for (let i = 0; i < 3 * count; i++) {
  bufferArrPos[i] = THREE.MathUtils.randFloatSpread(20);
  bufferArrColor[i] = THREE.MathUtils.randFloatSpread(10);
  bufferGeom.setAttribute(
    "position",
    new THREE.BufferAttribute(bufferArrPos, 3)
  );
  bufferGeom.setAttribute(
    "color",
    new THREE.BufferAttribute(bufferArrColor, 3)
  );
}

const newMeshRandom = new THREE.Points(
  bufferGeom,
  new THREE.PointsMaterial({
    alphaMap: mat4,
    transparent: true,
    vertexColors: true,
  })
);

scene.add(newMeshRandom);

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
