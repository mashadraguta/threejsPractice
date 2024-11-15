import * as THREE from "three";
//import { guiEx } from "./UIControls";
import { axesHelper, MTorus, MPlane, MSphere } from "./objects";
import { camera, scene, canvas, renderer } from "./basics";
import { MapControls } from "three/examples/jsm/controls/OrbitControls.js";



//scene.add(gui);
scene.add(axesHelper);

scene.add(MSphere, MPlane, MTorus);
const controls = new MapControls(camera, renderer.domElement);

controls.enableZoom = true;
controls.enableDamping = true;
controls.mouseButtons = {
  LEFT: THREE.MOUSE.PAN,
  MIDDLE: THREE.MOUSE.DOLLY,
  RIGHT: THREE.MOUSE.ROTATE
}
//console.log(textureCube);

// const controls = new OrbitControls(camera, renderer.domElement);

// controls.enableZoom = true;
// controls.enableDamping = true;
window.addEventListener("resize", (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
window.addEventListener("dblclick", (e) => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

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
const clock = new THREE.Clock();
function render(t) {
  const elapsedTime = clock.getElapsedTime();
  MSphere.rotation.x = 0.5 * elapsedTime;
  MPlane.rotation.x = 0.5 * -elapsedTime;
  MTorus.rotation.x = 0.5 * elapsedTime;
  MSphere.rotation.y = 0.5 * elapsedTime;
  MPlane.rotation.y = 0.5 * -elapsedTime;
  MTorus.rotation.y = 0.5 * elapsedTime;
  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();

// -1, -1,  // v0
// 1, -1,  // v1
// 1,  1,   // v2
// -1,  1,   // v3
