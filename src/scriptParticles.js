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

const initParamsALight = {
  position: {
    x: 3,
    y: 3,
    z: 15,
  },
  intensity: 0.5,
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
  count: 1000,
  size: 0.5,
  color: false,
  radius: 5,
  branches: 3,
  spin: 2,
  randomness: 0.1
};

let stars;
let bufferGeometry


const size = 10;
const divisions = 10;

const gridHelper = new THREE.GridHelper(size, divisions);
//scene.add(gridHelper);

const initParamsMesh = {
  x: .5,
  y: 0,
  z: .5
}
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial()
)


mesh.position.set(.5, 0, .5)

//scene.add(mesh)
const cubeFolder = gui.addFolder('cube control')

cubeFolder.add(initParamsMesh, 'x').min(-10).max(10).onChange(() => {
  mesh.position.set(initParamsMesh.x, initParamsMesh.y, initParamsMesh.z)
})
cubeFolder.add(initParamsMesh, 'y').min(-10).max(10).onChange(() => {
  mesh.position.set(initParamsMesh.x, initParamsMesh.y, initParamsMesh.z)
})
cubeFolder.add(initParamsMesh, 'z').min(-10).max(10).onChange(() => {
  mesh.position.set(initParamsMesh.x, initParamsMesh.y, initParamsMesh.z)
})

const generateGalaxy = () => {
  if (stars) {
    scene.remove(stars);
  }

  let starMat;
  bufferGeometry = new THREE.BufferGeometry();
  let partsPosArr = new Float32Array(3 * GParams.count);
  let partsPosColorArr = new Float32Array(3 * GParams.count);

  for (let i = 0; i < 3 * GParams.count; i++) {
    partsPosColorArr[i] = Math.random()
    let i3 = i * 3

    // radius is a changing value , populating the branches

    let radius = Math.random() * GParams.radius
    let spin = GParams.spin * radius
    let randomX = (Math.random() - .5) * GParams.randomness
    let randomY = (Math.random() - .5) * GParams.randomness
    let randomZ = (Math.random() - .5) * GParams.randomness
    // let randomX = Math.random() * GParams.randomness
    // let randomY = Math.random() * GParams.randomness
    // let randomZ = Math.random() * GParams.randomness
    // branchAngle values does NOT change, remains the same
    let branchAngle = (i % GParams.branches) / GParams.branches * Math.PI * 2

    // sin(branchAngle) and cos(branchAngle) are positive and negative values
    // if we multiply by radius that was multiplied by Math.random,
    // we will have a value between -n.abcdefgh ... n.abcdefgh
    //Math.cos(branchAngle + spin) * radius
    //Math.sin(branchAngle + spin) * radius
    partsPosArr[i3] = THREE.MathUtils.randFloatSpread(Math.cos(branchAngle + spin) * radius)
    // partsPosArr[i3 + 1] = + Math.sin(partsPosArr[i3] + 1) * (Math.random() - .5)
    partsPosArr[i3 + 1] = 0
    partsPosArr[i3 + 2] = THREE.MathUtils.randFloatSpread(Math.sin(branchAngle + spin) * radius)

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
    vertexColors: GParams.color,
    sizeAttenuation: true,
    depthWrite: false,
    size: GParams.size,
    transparent: true,
  });

  stars = new THREE.Points(bufferGeometry, starMat);
  scene.add(stars);
};

generateGalaxy();


const numberOfStars = gui.addFolder("stars number");
const sizeOfStars = gui.addFolder("stars size");
const colorOfStars = gui.addFolder("color");
const radiusOfStars = gui.addFolder("radius");

const branches = gui.addFolder("branches");
const spin = gui.addFolder("spin");
const randomness = gui.addFolder("randomness");
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
  .step(1)
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
  // stars.rotateY(Math.sin(elapsedTime / 1000))
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

