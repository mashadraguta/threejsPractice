import * as THREE from "three";
import { camera, scene, canvas, renderer } from "./basics";
import { changeObjPos } from "./utils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";

/* HELPERS */

const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("red", "yellow", "blue");
scene.add(axesHelper);

const gui = new GUI({ name: "galaxy generator", width: 500 });
const controls = new OrbitControls(camera, renderer.domElement);

/* TEXTURES */

const loader = new THREE.TextureLoader();
loader.setPath("/textures/particles/");
const mat4 = loader.load("4.png");


// GALAXY

const GParams = {
  count: 10000,
  size: 0.01,
  color: true,
  radius: 5,
  branches: 3,
  spin: 0,
  randomness: 0.1,
  randomnessLevel: 1,
  center: {
    r: 214,
    g: 133,
    b: 75
  },
  rest: {
    r: 162,
    g: 189,
    b: 48
  }
};

let stars;
let bufferGeometry

const RgbToCmyk = (R, G, B) => {
  if ((R == 0) && (G == 0) && (B == 0)) {
    return [0, 0, 0];
  } else {
    let calcR = 1 - (R / 255),
      calcG = 1 - (G / 255),
      calcB = 1 - (B / 255);

    let K = Math.min(calcR, Math.min(calcG, calcB)),
      C = (calcR - K) / (1 - K),
      M = (calcG - K) / (1 - K),
      Y = (calcB - K) / (1 - K);

    return [C, M, Y, K];
  }
}


const generateGalaxy = () => {
  if (stars) {
    scene.remove(stars);
  }

  let starMat;
  bufferGeometry = new THREE.BufferGeometry();
  let partsPosArr = new Float32Array(3 * GParams.count);
  let partsPosColorArr = new Float32Array(3 * GParams.count);

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


    let x = partsPosArr[i3]
    let z = partsPosArr[i3 + 2]

    let initColorsCenter = RgbToCmyk(GParams.center.r, GParams.center.g, GParams.center.b)
    let rCenter = initColorsCenter[1]
    let gCenter = initColorsCenter[2]
    let bCenter = initColorsCenter[3]

    let initColorsRest = RgbToCmyk(GParams.rest.r, GParams.rest.g, GParams.rest.b)
    let rRest = initColorsRest[1]
    let gRest = initColorsRest[2]
    let bRest = initColorsRest[3]
    if (x < .5 &&
      x > -.5 &&
      z < .5
      && z > -.5) {
      partsPosColorArr[i3] = rCenter
      partsPosColorArr[i3 + 1] = gCenter
      partsPosColorArr[i3 + 2] = bCenter
    } else {
      partsPosColorArr[i3] = rRest
      partsPosColorArr[i3 + 1] = gRest
      partsPosColorArr[i3 + 2] = bRest
    }
  }

  bufferGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(partsPosArr, 3)
  );
  bufferGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(partsPosColorArr, 3)
  );

  starMat = new THREE.PointsMaterial({
    alphaMap: mat4,
    vertexColors: true,
    sizeAttenuation: true,
    depthWrite: false,
    size: GParams.size,
    transparent: true,
  });

  console.log(`bufferGeometry=====>`, bufferGeometry);

  stars = new THREE.Points(bufferGeometry, starMat);
  scene.add(stars);
};

generateGalaxy();


const numberOfStars = gui.addFolder("stars number");
const sizeOfStars = gui.addFolder("stars size");
const colorOfStars = gui.addFolder("color");
const radiusOfStars = gui.addFolder("radius");
const randomnessLevel = gui.addFolder("randomness level");
const branches = gui.addFolder("branches");
const spin = gui.addFolder("spin");
const randomness = gui.addFolder("randomness");
const colorCenter = gui.addFolder("center color");
const colorRest = gui.addFolder("rest color");
numberOfStars
  .add(GParams, "count")
  .min(10)
  .max(100000)
  .step(10)
  .onChange(() => {
    generateGalaxy();
  });
sizeOfStars
  .add(GParams, "size")
  .min(0.01)
  .max(2)
  .step(0.01)
  .onChange(() => {
    generateGalaxy();
  });
radiusOfStars
  .add(GParams, "radius")
  .min(1)
  .max(100)
  .step(0.1)
  .onChange(() => {
    generateGalaxy();
  });
branches
  .add(GParams, "branches")
  .min(2)
  .max(10)
  .step(1)
  .onChange(() => {
    generateGalaxy();
  });
spin
  .add(GParams, "spin")
  .min(-5)
  .max(5)
  .step(0.1)
  .onChange(() => {
    generateGalaxy();
  });
randomness
  .add(GParams, "randomness")
  .min(0)
  .max(5)
  .step(0.01)
  .onChange(() => {
    generateGalaxy();
  });
randomnessLevel
  .add(GParams, "randomnessLevel")
  .min(1)
  .max(2)
  .step(0.01)
  .onChange(() => {
    generateGalaxy();
  });
colorCenter.addColor(GParams, 'center').
  onChange(() => {
    generateGalaxy();
  });
colorRest.addColor(GParams, 'rest').
  onChange(() => {
    generateGalaxy();
  });

colorOfStars.add(GParams, "color").onChange(() => {
  generateGalaxy();
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

  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();



