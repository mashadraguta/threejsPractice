import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { gui } from "./UIControls";
import { axesHelper } from "./objects";
//import image from "../static/textures/untitled6.png";
// import { controls } from "./controls";
import { camera, scene, canvas, renderer } from "./basics";

const manager = new THREE.LoadingManager();
//1
manager.onStart = function (url, itemsLoaded, itemsTotal) {
  console.log(
    "Started loading file: " +
      url +
      ".\nLoaded " +
      itemsLoaded +
      " of " +
      itemsTotal +
      " files."
  );
};
//2
manager.onLoad = function () {
  console.log("Loading complete!");
};
//3
manager.onProgress = function (url, itemsLoaded, itemsTotal) {
  console.log(
    "Loading file: " +
      url +
      ".\nLoaded " +
      itemsLoaded +
      " of " +
      itemsTotal +
      " files."
  );
};
//4
manager.onError = function (url) {
  console.log("There was an error loading " + url);
};

const loader = new THREE.TextureLoader(manager);
const texture1 = loader.load("textures/earth.jpg");
//texture1.generateMipmaps = false;
texture1.magFilter = THREE.NearestFilter;
const geometry = new THREE.SphereGeometry(3, 32, 16);
const material1 = new THREE.MeshBasicMaterial({
  map: texture1,
});

const sphere1 = new THREE.Mesh(geometry, material1);

// sphere1.position.set(1, 1, -1);

console.log(geometry.attributes);

// scene.add(sphere);d
scene.add(sphere1);

scene.add(gui);
scene.add(axesHelper);
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
