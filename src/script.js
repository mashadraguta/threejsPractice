import * as THREE from "three";
//import { guiEx } from "./UIControls";
import { axesHelper, MTorus, MPlane, MSphere } from "./objects";
import { camera, scene, canvas, renderer } from "./basics";
import { MapControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
//scene.add(gui);
//scene.add(axesHelper);

//scene.add(MSphere, MPlane, MTorus);
const matCapTexture1 = new THREE.TextureLoader().load("/textures/matcaps/3.png");
const matCapTexture2 = new THREE.TextureLoader().load("/textures/matcaps/gold.jpg");
const loader = new FontLoader();
let text;
let textGeometry;
let texture;
loader.load("fonts/Harry P_Regular.json", function (font) {
  textGeometry = new TextGeometry(
    ` 
    You have everything but one thing: madness. 
    A man needs a little madness or else - 
    he never dares cut the rope and be free.
    `,
    {
      font,
      size: 1,
      height: 1,
      curveSegments: 1,
      depth: 1,
      curveSegments: 1,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.01,
      bevelOffset: 0.01,
      bevelSegments: 2
    }
  );
  texture = new THREE.MeshMatcapMaterial({ matcap: matCapTexture1 });
  text = new THREE.Mesh(textGeometry, texture);


  console.log(`geometry ONE======>`, textGeometry.boundingBox);
  textGeometry.center()

  scene.add(text);
});

for (let i = 0; i < 1000; i++) {
  // const geometry = new THREE.SphereGeometry(0.1, 12, 36);
  const geometry = new THREE.TorusGeometry(1, 0.1, 8, 45, 6.7);
  geometry.rotateX((Math.random() - 0.5) * 100)
  geometry.rotateY((Math.random() - 0.5) * 100)
  const material = new THREE.MeshMatcapMaterial({ matcap: matCapTexture2 });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 100, -(Math.random() - 0.5) * 100)
  scene.add(sphere);
}


console.log(`THREE.MathUtils======>`, THREE.MathUtils)
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
