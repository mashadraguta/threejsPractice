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

const positionsArray = new Float32Array(9);

positionsArray[0] = 0;
positionsArray[1] = 0;
positionsArray[2] = 0;

positionsArray[3] = 0;
positionsArray[4] = 1;
positionsArray[5] = 0;

positionsArray[6] = 1;
positionsArray[7] = 0;
positionsArray[8] = 0;

const vertices = new Float32Array([
  // 0, 0, 0, 0, 1, 0, 1, 0, 0,

  10, 10, 0, 0, 10, 10, 2, 2, 2, 4, 4, -4,
]);

// prettier-ignore
const vertices1 = new Float32Array([
  -1, -1, 1, //v1
  1, -1, 1,   //v2
  2,2,2    //v3

  // 1, 1, 1,    //v4
  -1, 1, 1,   //v5
  -1, -1, 1,  //v6
]);

const count = 50;

let meshTriangle;
const triangles = new THREE.Group();
for (let i = 0; i < count; i++) {
  // prettier-ignore
  const verticlesTrianglePos = new Float32Array([
    i * (Math.random() - 0.5), i, -Math.random() * 10,
    -i, i, Math.random() * 5,
    i * Math.random(), -i * 2, (Math.random() - 0.5) * -5,
  ]);
  const triangleGeom = new THREE.BufferGeometry();
  triangleGeom.setAttribute(
    "position",
    new THREE.BufferAttribute(verticlesTrianglePos, 3)
  );
  const materialTriangle = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
  });
  meshTriangle = new THREE.Mesh(triangleGeom, materialTriangle);
  triangles.add(meshTriangle);
}
console.log(triangles);

scene.add(triangles);

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
