import * as THREE from "three";
import { OrbitControls } from "three-addons";
// SCENE
const scene = new THREE.Scene();
scene.background = new THREE.Color("orange");

// RENDERER & CANVAS HTML & SIZING
const canvas = document.querySelector("#webgl");
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas,
});

const sizes = {
  width: 1920,
  height: 1050,
};

//renderer.setSize(sizes.width, sizes.height);
renderer.setSize(window.innerWidth, window.innerHeight);

// CAMERA
const fieldOfView = 95;
const aspect = sizes.width / sizes.height; // the canvas default
const near = 0.4;
const far = 2000;

const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);

// PREV
// camera.position.x = 7;
// camera.position.y = 6;
// camera.position.z = 20;

//TRYING TO UNDERSTAND

camera.position.set(6, 15, 40);

// OBJS

// I. Axes Helper Util
const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("green", "purple", "blue");

// II.Reference Point

const referencePointWireframe = new THREE.SphereGeometry(0.5);

const referenceMaterial = new THREE.MeshBasicMaterial({ color: "black" });
const referencePoint = new THREE.Mesh(
  referencePointWireframe,
  referenceMaterial
);
referencePoint.position.x = 0;
referencePoint.position.y = 0;
referencePoint.position.z = 0;

// III. Cube
const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
const cubeMaterial = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

//cube.scale.set(0.5, 0.5, 0.5);
cube.position.set(5, 10, 10);
//cube.rotateZ(1);
// cube.rotateY(1);
// cube.rotateX(2);
// cube.rotateZ(2);

const cubeVector3 = cube.position.length();
console.log(`cubeVector3<=====`, cubeVector3);

// IV. TORUSKNOT

const geometry = new THREE.TorusKnotGeometry(7, 2, 23, 8, 6, 3);
const material = new THREE.MeshNormalMaterial();
const torusKnot = new THREE.Mesh(geometry, material);

torusKnot.position.set(-15, 10, 20);

const knotVector3 = torusKnot.position.length();
console.log(`knotVector3<=====`, knotVector3);

// V. Group object

const pyramidGeom = new THREE.ConeGeometry(3, 16, 16);
const pyramidMatR = new THREE.MeshBasicMaterial({
  // color: "red",
  wireframe: true,
});
const pyramidMatG = new THREE.MeshBasicMaterial({
  // color: "green",
  wireframe: true,
});
const pyramidMatB = new THREE.MeshBasicMaterial({
  // color: "blue",
  wireframe: true,
});
const pyramidMatT = new THREE.MeshBasicMaterial({
  // color: "black",
  wireframe: true,
});
const pyramidR = new THREE.Mesh(pyramidGeom, pyramidMatR);
const pyramidG = new THREE.Mesh(pyramidGeom, pyramidMatG);
const pyramidB = new THREE.Mesh(pyramidGeom, pyramidMatB);
const pyramidT = new THREE.Mesh(pyramidGeom, pyramidMatT);

pyramidR.position.set(2, 2, 2);
pyramidG.position.set(2, 16, 2);
pyramidB.position.set(2, 8, -6);
pyramidT.position.set(2, 8, 8);

pyramidG.rotation.x = Math.PI;
pyramidB.rotation.x = Math.PI / 2.2;
pyramidT.rotation.x = -Math.PI / 2.2;
// pyramidB.position.set(2, 2, 2);
// pyramidT.position.set(2, 2, 2);

// Adding OBJS to the SCENE
scene.add(referencePoint);
scene.add(axesHelper);

const RGBT = new THREE.Group();
RGBT.add(pyramidR);
RGBT.add(pyramidG);
RGBT.add(pyramidB);
RGBT.add(pyramidT);

RGBT.position.set(6, 6, 6);
RGBT.rotation.y = Math.PI / 2;
// const center = new THREE.Box3()
//   .setFromObject(RGBT)
//   .getCenter(RGBT.position)
//   .multiplyScalar(-1);

// console.log(`center`, center);
//scene.add(cube);
// scene.add(torusKnot);
scene.add(RGBT);

function dogWalking() {
  console.log(`walking the dog...`);
  dogWalked();
}
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener("change", function () {
  renderer.render(scene, camera); // render whenever the OrbitControls changes
});

const tick = (time) => {
  let string = `tick tack toe`;
  console.log(`${string}${time}`);

  window.requestAnimationFrame(tick);
};

//tick();

function animate(t) {
  //cube.rotateZ(t * 0.000000001);
  // cube.rotation.x = Math.PI * 0.0003 * t;
  //cube.rotation.y = Math.PI * 0.0003 * t;
  // cube.rotation.z = Math.PI * 0.0003 * t;
  //torusKnot.rotation.x = Math.PI * 0.0003 * t;
  //torusKnot.rotation.y = Math.PI * 0.0003 * t;
  RGBT.rotation.y = Math.PI * 0.0003 * t;
  RGBT.rotation.x = Math.PI * 0.0003 * t;
  //RGBT.rotation.z = Math.PI * 0.0003 * t;
  //cube.position.y = Math.sin(t / 70000) * 55;
  // torusKnot.position.y = Math.sin(t / 700) * 550;
  // RGBT.position.y = Math.sin(t / 700) * 550;
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate, renderer.domElement);
}
//animate();
console.log(`TORUSKNOT.POSITION========>`, torusKnot.position);
//camera.lookAt(torusKnot.position);
//camera.lookAt(cube.position);
camera.lookAt(RGBT.position);
// Magic to make scene appear
renderer.render(scene, camera);
