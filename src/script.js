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

const loader = new FontLoader();
let text
let geometry
let texture
loader.load("fonts/Oswald_Regular.json", function (font) {
  geometry = new TextGeometry(
    ` 
      ai grija la
      inima omului;
      ea este unica
      care-l poate incapea
      pe Dumnezeu
    `,

    {
      font,
      size: 1,
      height: 1,

      curveSegments: 1,
      // bevelEnabled: true,
      // bevelSize: 0.03,
      // bevelThickness: 0.02,
      // bevelOffset: 0,
      // bevelSegments: 5
    }
  );
  texture = new THREE.MeshNormalMaterial();
  text = new THREE.Mesh(geometry, texture);
  geometry.computeBoundingBox()

  console.log(`boundingBox OBJ 1----->`, geometry.boundingBox);
  text.position.set(-10, 2, -1);
  scene.add(text);

});
loader.load("fonts/Geist Mono_Regular.json", function (font) {
  geometry = new TextGeometry(
    `another quote
    another font
    `,
    {
      font: font,

      size: 1,
      height: 1,
      // depth: 10,
      curveSegments: 1,
      // depth: 0.01,
      // curveSegments: 1,
      // bevelEnabled: true,
      // bevelThickness: 0.1,
      // bevelSize: 0.01,
      // bevelOffset: 0,
      // bevelSegments: 1
    }
  );
  texture = new THREE.MeshNormalMaterial({ wireframe: true });
  text = new THREE.Mesh(geometry, texture);
  geometry.computeBoundingBox()
  console.log(`boundingBox OBJ 2----->`, geometry.boundingBox);

  scene.add(text);

});

console.log(text);

//const controls = new MapControls(camera, renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.enableDamping = true;
// controls.mouseButtons = {
//   LEFT: THREE.MOUSE.PAN,
//   MIDDLE: THREE.MOUSE.DOLLY,
//   RIGHT: THREE.MOUSE.ROTATE,
// };
//console.log(textureCube);

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
