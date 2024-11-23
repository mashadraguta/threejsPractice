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
const matCapTexture1 = new THREE.TextureLoader().load(
  "/textures/matcaps/3.png"
);
const matCapTexture2 = new THREE.TextureLoader().load("/textures/donut1.png");
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
      bevelSegments: 2,
    }
  );
  texture = new THREE.MeshMatcapMaterial({ matcap: matCapTexture1 });
  text = new THREE.Mesh(textGeometry, texture);

  console.log(`geometry ONE======>`, textGeometry.boundingBox);
  textGeometry.center();

  scene.add(text);
});
console.time("rendering scene");

const geometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
const material = new THREE.MeshStandardMaterial({ map: matCapTexture2 });
for (let i = 0; i < 1000; i++) {
  const donut = new THREE.Mesh(geometry, material);
  const randomValue = Math.max((Math.random() - 0.5) * 15, 1);
  donut.rotateX((Math.random() - 0.5) * 100);
  donut.rotateY((Math.random() - 0.5) * 100);
  donut.position.set(
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 100,
    -(Math.random() - 0.5) * 100
  );

  donut.scale.set(randomValue, randomValue, randomValue);

  scene.add(donut);
}
console.timeEnd("rendering scene");
//const controls = new OrbitControls(camera, renderer.domElement);
const controls = new MapControls(camera, renderer.domElement);
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

  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
