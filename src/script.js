import * as THREE from "three";

import {
  torusKnot,
  axesHelper,
  cube,
  referencePointWireframe,
  RGBT,
} from "./objects";
import { camera, scene, sizes } from "./basics";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { DragControls } from "three/examples/jsm/controls/DragControls.js";
//import { OrbitControls } from "three/addons/controls/OrbitControls.js";
//import { OrbitControls } from "three-addons";

const canvas = document.querySelector("#webgl");
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

scene.add(axesHelper);
scene.add(cube);
scene.add(RGBT);
// scene.add(torusKnot);

const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = e.clientY / sizes.height - 0.5;
});

const controls = new OrbitControls(camera, renderer.domElement);
//const controls = new TrackballControls(camera, renderer.domElement);
//const controls = new FlyControls(camera, renderer.domElement);
// controls.addEventListener("change", function (e) {
//   console.log(e);
//   renderer.render(scene, camera);
// });

// controls.rotateSpeed = 3;
// controls.zoomSpeed = 1.2;
// controls.panSpeed = 0.8;

// controls.movementSpeed = 100;
// controls.rollSpeed = Math.PI / 24;
// controls.autoForward = false;
// controls.dragToLook = true;

controls.enableZoom = true;
controls.enableDamping = true;
// add event listener to highlight dragged objects

// controls.addEventListener("change", function () {
//   renderer.render(scene, camera);
// });
function render() {
  controls.update();
  window.requestAnimationFrame(render);

  renderer.render(scene, camera);
}
render();
