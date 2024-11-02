import * as THREE from "three";

import {
  torusKnot,
  axesHelper,
  cube,
  referencePointWireframe,
  RGBT,
} from "./objects";
import { camera, scene, sizes, canvas, renderer } from "./basics";
import { controls } from "./controls";
//import { DragControls } from "three/examples/jsm/controls/DragControls.js";

import gsap from "gsap";

scene.add(axesHelper);
scene.add(cube);

// prettier-ignore
// RED SQUARE
// const vertices = new Float32Array( [
//   -1.0, -1.0,  1.0, // v0
//    1.0, -1.0,  1.0, // v1
//    1.0,  1.0,  1.0, // v2
//   -1.0,  1.0,  1.0, // v3
// ] );

const count= 100

const positions = new Float32Array(count * 3 * 3);

for (let i = 0; i <= count * 3 * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 40;
}

const triangleGeometryBuffer = new THREE.BufferGeometry();

// prettier-ignore

triangleGeometryBuffer.setAttribute(
"position",
new THREE.BufferAttribute(positions , 3)
);

const triangleMaterial = new THREE.MeshBasicMaterial({
  wireframe: true,
});

const triangleMesh = new THREE.Mesh(triangleGeometryBuffer, triangleMaterial);

scene.add(triangleMesh);
const points = [];
points.push(new THREE.Vector3(-5, 0, 5));
points.push(new THREE.Vector3(5, 0, 0));
points.push(new THREE.Vector3(4, 0, 4));
points.push(new THREE.Vector3(-5, 0, 5));
let geometry = new THREE.BufferGeometry().setFromPoints(points);
let line = new THREE.Line(
  geometry,
  new THREE.LineBasicMaterial({ color: 0x888888 })
);
scene.add(line);

window.addEventListener("resize", (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
window.addEventListener("dblclick", (e) => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;
  console.log(canvas);

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

function render() {
  controls.update();

  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();

// -1, -1,  // v0
// 1, -1,  // v1
// 1,  1,   // v2
// -1,  1,   // v3
