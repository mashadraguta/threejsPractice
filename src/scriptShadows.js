import * as THREE from "three";
import { camera, scene, renderer } from "./basics";
import { getGUIforLights } from "./utils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
/**
 * AXES HELPER
 */

const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("green", "purple", "orange");
scene.add(axesHelper);
const material = new THREE.MeshStandardMaterial();
const lightParamsDir = {
  position: { x: 0, y: 10, z: 0 },
  radius: 1.45,
  near: 0.1,
  far: 2000,
};
const lightParamsPoint = {
  position: { x: 4, y: 6, z: 3 },
  radius: 0.1,
};
const lightParamsSpot = {
  position: { x: -4, y: 9, z: -3 },
  radius: 0.1,
  near: 0.1,
  far: 2000,
  fov: 50,
  distance: 0.2,
  angle: Math.PI * 0.1,
};

renderer.shadowMap.enabled = true;

// optional
// renderer.shadowMap.type = THREE.PCFShadowMap;
// renderer.shadowMap.type = THREE.BasicShadowMap;
// renderer.shadowMap.type = THREE.VSMShadowMap;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

/**
 * LIGHTS
 */

const ambientLight = new THREE.AmbientLight("white", 0.2);
const directionalLight = new THREE.DirectionalLight("white", 0.5);
const pointLight = new THREE.PointLight("orange", 0.7);
const spotLight = new THREE.SpotLight("white", 0.9);
pointLight.visible = false;
directionalLight.visible = false;
pointLight.castShadow = true;
spotLight.castShadow = true;
directionalLight.castShadow = true;

// DIRECTIONAL

directionalLight.shadow.camera.left = -10;
directionalLight.shadow.camera.right = 10;
directionalLight.shadow.camera.bottom = -10;
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.camera.near = lightParamsDir.near;
directionalLight.shadow.camera.far = lightParamsDir.far;
directionalLight.shadow.radius = lightParamsDir.radius;

directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;

// SPOT
spotLight.shadow.radius = lightParamsSpot.radius;
spotLight.shadow.camera.near = lightParamsSpot.near;
spotLight.shadow.camera.far = lightParamsSpot.far;
spotLight.shadow.camera.fov = lightParamsSpot.fov;

// POINT
pointLight.shadow.radius = lightParamsPoint.radius;

/**
 * HELPERS SHADOWS
 */

const helperDir = new THREE.CameraHelper(directionalLight.shadow.camera);
const helperPoint = new THREE.CameraHelper(pointLight.shadow.camera);
const helperSpot = new THREE.CameraHelper(spotLight.shadow.camera);

/**
 * HELPERS LIGHTS
 */
const helperDirectionalLight = new THREE.DirectionalLightHelper(
  directionalLight
);
helperDirectionalLight.visible = false;
const helperPointLight = new THREE.PointLightHelper(pointLight);
const helperSpotLight = new THREE.SpotLightHelper(spotLight);

scene.add(helperDirectionalLight);
scene.add(helperPointLight);
scene.add(helperSpotLight);

helperDir.visible = false;
helperPoint.visible = false;
helperSpot.visible = false;
helperPointLight.visible = false;
helperSpotLight.visible = false;

scene.add(helperDir);
scene.add(helperPoint);
scene.add(helperSpot);

getGUIforLights(
  lightParamsDir,
  "DIRECTIONAL LIGHT",
  directionalLight,
  helperDir
);
getGUIforLights(lightParamsPoint, "POINT LIGHT", pointLight, helperPoint);
getGUIforLights(lightParamsSpot, "SPOT LIGHT", spotLight, helperSpot);
scene.add(directionalLight);
directionalLight.position.set(8, 6, 15);
scene.add(directionalLight.target);

scene.add(ambientLight);
scene.add(pointLight);
scene.add(spotLight);

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

// PLANE

const planeG = new THREE.PlaneGeometry(200, 200);
const planeM = new THREE.MeshStandardMaterial();
planeM.side = THREE.DoubleSide;
const plane = new THREE.Mesh(planeG, planeM);

plane.receiveShadow = true;
plane.rotateX(-3.14 / 2);

plane.position.set(0, 0, 0);
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
  helperDir.update();
  helperPoint.update();
  helperSpot.update();

  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
