import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { gui } from "./UIControls";
import { axesHelper, MTorus, MPlane, MSphere } from "./objects";
//import image from "../static/textures/untitled6.png";
// import { controls } from "./controls";
import { camera, scene, canvas, renderer } from "./basics";

scene.add(gui);
scene.add(axesHelper);

scene.add(MSphere, MPlane, MTorus);

//console.log(textureCube);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableZoom = true;
controls.enableDamping = true;
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
