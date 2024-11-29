import * as THREE from "three";
import { camera, scene, renderer } from "./basics";
import { getGUIforLights } from "./utils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
/**
 * AXES HELPER
 */
const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("green", "purple", "orange");

const material = new THREE.MeshStandardMaterial();
const lightParamsDir = {
  position: { x: 40, y: 2.5, z: 8 },
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
const directionalLight = new THREE.DirectionalLight("white", 0.8);
const pointLight = new THREE.PointLight("orange", 0.8);
pointLight.castShadow = true;
directionalLight.castShadow = true; // default false

/**
 * HELPERS
 */

const cameraHelper = new THREE.CameraHelper(camera);
const helperLight = new THREE.CameraHelper(pointLight.shadow.camera);
scene.add(helperLight);

getGUIforLights(lightParamsDir, "DIRECTIONAL LIGHT", directionalLight);
getGUIforLights(lightParamsPoint, "POINT LIGHT", pointLight);

scene.add(directionalLight);
scene.add(ambientLight);
scene.add(pointLight);

// PLANE

const planeG = new THREE.PlaneGeometry(50, 50);
const plane = new THREE.Mesh(planeG, material);
material.side = THREE.DoubleSide;
plane.receiveShadow = true;
plane.rotateX(-1.5);

plane.position.set(0, 0.5, 0);

// SPHERE

const sphereG = new THREE.SphereGeometry(3, 32, 32);
const sphere = new THREE.Mesh(sphereG, material);
sphere.castShadow = true;
sphere.position.set(0, 5, 0);

scene.add(sphere);
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

  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
