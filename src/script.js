import * as THREE from "three";
//import { guiEx } from "./UIControls";
import { axesHelper, MTorus, MPlane, MSphere } from "./objects";
import { camera, scene, canvas, renderer } from "./basics";
import { MapControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
//scene.add(gui);
scene.add(axesHelper);

//scene.add(MSphere, MPlane, MTorus);
const matCapTexture = new THREE.TextureLoader().load("/textures/matcaps/1.png");
const loader = new FontLoader();
let text;
let geometry;
let texture;
loader.load("fonts/Harry P_Regular.json", function (font) {
  geometry = new TextGeometry(
    ` 
    I mean, 
    it's sort of exciting,
    isn't it, 
    breaking the rules?
    `,
    {
      font,
      size: 1,
      height: 1,
      curveSegments: 1,
    }
  );
  texture = new THREE.MeshMatcapMaterial({ matcap: matCapTexture });

  text = new THREE.Mesh(geometry, texture);
  geometry.computeBoundingBox();
  // const box = new THREE.Box3();
  // box.copy(text.geometry.boundingBox).applyMatrix4(text.matrixWorld);
  console.log(`geometry ONE======>`, geometry.boundingBox);

  // text.position.set(-10, 2, -1);
  scene.add(text);
});
// loader.load("fonts/Geist Mono_Regular.json", function (font) {
//   geometry = new TextGeometry(
//     `another quote
//     another font
//     `,
//     {
//       font: font,
//       size: 1,
//       height: 1,
//       curveSegments: 1,
//     }
//   );

//   text = new THREE.Mesh(geometry, texture);
//   // geometry.computeBoundingBox();
//   console.log(`geometry TWO======>`, geometry);

//   scene.add(text);
// });

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
  // MSphere.rotation.x = 0.5 * elapsedTime;
  // MPlane.rotation.x = 0.5 * -elapsedTime;
  // MTorus.rotation.x = 0.5 * elapsedTime;
  // MSphere.rotation.y = 0.5 * elapsedTime;
  // MPlane.rotation.y = 0.5 * -elapsedTime;
  // MTorus.rotation.y = 0.5 * elapsedTime;
  // text.rotation.y = 0.5 * -elapsedTime;

  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();

// -1, -1,  // v0
// 1, -1,  // v1
// 1,  1,   // v2
// -1,  1,   // v3
