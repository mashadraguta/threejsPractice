import * as THREE from "three";
import { camera, scene, renderer } from "./basics";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";
import { changeObjPos } from "./utils";

const axesHelper = new THREE.AxesHelper(2000);

const controls = new OrbitControls(camera, renderer.domElement);
const gui = new GUI();

const textureWall = new THREE.TextureLoader().load(
  "textures/haunted-house/bricks/color.jpg"
);
const textureRoof = new THREE.TextureLoader().load(
  "textures/haunted-house/bricks/roughness.jpg"
);

const initParams = {
  position: {
    x: 0,
    y: 2.5,
    z: 0,
  },
  scale: 1,
};
const sun = new THREE.AmbientLight();
sun.position.set(-5, 5, 5);
const wallMat = new THREE.MeshStandardMaterial({ map: textureWall });
const roofMat = new THREE.MeshStandardMaterial({ map: textureRoof });

const hauntedHouse = new THREE.Group();
const walls = new THREE.Mesh(new THREE.BoxGeometry(10, 5, 10), wallMat);
const roof = new THREE.Mesh(new THREE.ConeGeometry(10, 2.5, 4), roofMat);
roof.rotateY(Math.PI * 0.25);
roof.position.set(0, 3.5, 0);
hauntedHouse.add(walls, roof);

hauntedHouse.position.set(
  initParams.position.x,
  initParams.position.y,
  initParams.position.z
);

changeObjPos(hauntedHouse, initParams, gui, "group position");
changeObjPos(roof, initParams, gui, "roof position");
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 100),
  new THREE.MeshBasicMaterial({ color: "#91af4c" })
);
plane.geometry.rotateX(-Math.PI * 0.5);
scene.add(axesHelper);
scene.add(plane);
scene.add(sun);
scene.add(hauntedHouse);

window.addEventListener("resize", (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const clock = new THREE.Clock();
function render(t) {
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
