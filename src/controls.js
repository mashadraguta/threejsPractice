import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { DragControls } from "three/examples/jsm/controls/DragControls.js";
import { camera, renderer } from "./basics";

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

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableZoom = true;
controls.enableDamping = true;
// add event listener to highlight dragged objects

// controls.addEventListener("change", function () {
//   renderer.render(scene, camera);
// });

export { controls };
