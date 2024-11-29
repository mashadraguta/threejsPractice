import * as THREE from "three";
import { camera, scene, renderer } from "./basics";
import { getGUIforLights } from "./utils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
/**
 * AXES HELPER
 */
const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("green", "purple", "orange");
scene.add(axesHelper)
const material = new THREE.MeshStandardMaterial();
const lightParamsDir = {
  position: { x: 0, y: 10, z: 0 },
};
const lightParamsPoint = {
  position: { x: 4, y: 2, z: 3 },
};



renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

/**
 * LIGHTS
 */

const ambientLight = new THREE.AmbientLight("white", 0.2);
const directionalLight = new THREE.DirectionalLight("white", 0.5);
const pointLight = new THREE.PointLight("orange", 0.8);
pointLight.visible = false
pointLight.castShadow = true;
directionalLight.castShadow = true; // default false
directionalLight.shadow.camera.near = 2;
directionalLight.shadow.camera.far = 2000;
directionalLight.shadow.camera.left = -10;
directionalLight.shadow.camera.right = 10;
directionalLight.shadow.camera.bottom = -10;
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;

/**
 * HELPERS
 */

const helper = new THREE.CameraHelper(directionalLight.shadow.camera);
scene.add(helper);

// const helperLight = new THREE.CameraHelper(pointLight.shadow.camera);
// scene.add(helperLight);

getGUIforLights(lightParamsDir, "DIRECTIONAL LIGHT", directionalLight);
getGUIforLights(lightParamsPoint, "POINT LIGHT", pointLight);

scene.add(directionalLight);
scene.add(directionalLight.target);
//directionalLight.target.position.set(0, 5, 0)


scene.add(ambientLight);
scene.add(pointLight);

// PLANE

const planeG = new THREE.PlaneGeometry(50, 50);
const plane = new THREE.Mesh(planeG, material);
material.side = THREE.DoubleSide;
plane.receiveShadow = true;
plane.rotateX(3.14 / 2);

plane.position.set(0, 0, 0);

// SPHERE

const sphereG = new THREE.SphereGeometry(3, 32, 32);
const sphere = new THREE.Mesh(sphereG, material);
sphere.castShadow = true;
sphere.position.set(-5, 5, 0);

// TORUS

const torusG = new THREE.TorusGeometry();
const torus = new THREE.Mesh(torusG, material);
torus.castShadow = true;
torus.position.set(0, 5, 0);

// CUBE

const cubeG = new THREE.BoxGeometry(2, 2, 2);
const cube = new THREE.Mesh(cubeG, material);
cube.castShadow = true;
cube.position.set(5, 5, 0);

scene.add(sphere);
scene.add(torus);
scene.add(cube);
scene.add(plane);

const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener("resize", (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const clock = new THREE.Clock();
function render(t) {
  const elapsedTime = clock.getElapsedTime();
  helper.update();
  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
