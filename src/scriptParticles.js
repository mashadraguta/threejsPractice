import * as THREE from "three";
import { camera, scene, canvas, renderer } from "./basics";
import { changeObjPos } from "./utils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper.js";
import { GUI } from "dat.gui";

/* HELPERS */

const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("red", "yellow", "blue");

scene.add(axesHelper);

const gui = new GUI({ name: "galaxy generator", width: 500 });
console.log(gui);

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
//changeObjPos(ambientLight, initParamsALight, gui, "point Light");
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

// GALAXY

const GParams = {
  count: 100,
  size: 0.5,
  color: true,
  radius: 2,
  branches: 3,
};

let stars;
let starMat;
let bufferGeomParts;
// let partsPosArr;
// let partsPosColorArr;

const generateGalaxy = (starNum, starSize, starColor) => {
  console.log(`starMat====>`, starMat);

  if (stars) {
    bufferGeomParts.dispose();
    starMat.dispose();
    scene.remove(stars);
  }
  bufferGeomParts = new THREE.BufferGeometry();
  let partsPosArr = new Float32Array(3 * starNum);
  let partsPosColorArr = new Float32Array(3 * starNum);

  for (let i = 0; i < 3 * starNum; i++) {
    // partsPosArr[i] = THREE.MathUtils.randFloatSpread(GParams.radius);
    const i3 = i * 3;
    partsPosArr[i3 + 0] =
      THREE.MathUtils.randFloatSpread(GParams.radius * 10) / 3; //x
    partsPosArr[i3 + 1] = 0; //y
    partsPosArr[i3 + 2] = 3; //z
    partsPosColorArr[i] = THREE.MathUtils.randFloatSpread(10);
  }

  bufferGeomParts.setAttribute(
    "position",
    new THREE.BufferAttribute(partsPosArr, 3)
  );
  bufferGeomParts.setAttribute(
    "color",
    new THREE.BufferAttribute(partsPosColorArr, 3)
  );
  starMat = new THREE.PointsMaterial({
    alphaMap: mat4,
    vertexColors: starColor,
    sizeAttenuation: true,
    depthWrite: false,
    size: starSize,
    transparent: true,
  });

  stars = new THREE.Points(bufferGeomParts, starMat);
  stars.rotateY(Math.PI * 0.4);
  scene.add(stars);
};

generateGalaxy(GParams.count, GParams.size, GParams.color, GParams.radius);

const numberOfStars = gui.addFolder("stars number");
const sizeOfStars = gui.addFolder("stars size");
const colorOfStars = gui.addFolder("color");
const radiusOfStars = gui.addFolder("radius");

numberOfStars
  .add(GParams, "count")
  .min(10)
  .max(100000)
  .step(10)
  .onChange(() => {
    generateGalaxy(GParams.count, GParams.size, GParams.color, GParams.radius);
  });
sizeOfStars
  .add(GParams, "size")
  .min(0.01)
  .max(2)
  .step(0.01)
  .onChange(() => {
    generateGalaxy(GParams.count, GParams.size, GParams.color, GParams.radius);
  });
radiusOfStars
  .add(GParams, "radius")
  .min(1)
  .max(100)
  .step(0.1)
  .onChange(() => {
    generateGalaxy(GParams.count, GParams.size, GParams.color, GParams.radius);
  });
colorOfStars.add(GParams, "color").onChange(() => {
  generateGalaxy(GParams.count, GParams.size, GParams.color);
});
window.addEventListener("resize", (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const clock = new THREE.Clock();
function render(t) {
  const elapsedTime = clock.getElapsedTime();
  // for (let i = 0; i < GParams.count; i++) {
  //   let i3 = i * 3;
  //   let x = stars.geometry.attributes.position.array[i3 + 0];
  //   stars.geometry.attributes.position.array[i3 + 1] = Math.sin(
  //     elapsedTime - x
  //   );
  //   stars.geometry.attributes.position.needsUpdate = true;
  // }

  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
