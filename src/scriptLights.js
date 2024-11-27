import * as THREE from "three";
import { camera, scene, renderer } from "./basics";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

/**
 * AXES HELPER
 */
const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("green", "purple", "orange");

/**
 * GUI CONTROLS
 */

const gui = new GUI();

const lightParamsPoint = {
  position: { x: -0.8, y: 2.5, z: 2.5 },
};
const lightParamsDir = {
  position: { x: 40, y: 2.5, z: 8 },
};
const lightParamsSpot = {
  position: { x: -12, y: 8, z: 3 },
  angle: Math.PI * 0.3,
  distance: 0,
};
const lightParamsRect = {
  position: { x: 5.8, y: 2.5, z: 14.6 },
};

/**
 * LIGHTS
 */
const ambientLight = new THREE.AmbientLight("white", 0.2);
const hemisphereLight = new THREE.HemisphereLight(0xff6f21, "green", 0.1);
const pointLight = new THREE.PointLight(
  0xffde21,
  0.3,
  lightParamsSpot.distance,
  0.1
);
const directionalLight = new THREE.DirectionalLight("white", 0.8);
const spotLight = new THREE.SpotLight(
  "white",
  0.6,
  0,
  lightParamsSpot.angle,
  0.25,
  1
);
const rectLight = new THREE.RectAreaLight("white", 0.9, 20, 20);

pointLight.visible = false;
spotLight.visible = true;
rectLight.visible = false;
hemisphereLight.visible = false;
directionalLight.visible = false;

/**
 * HELPERS
 */

const rectHelper = new RectAreaLightHelper(rectLight);
const pointHelper = new THREE.PointLightHelper(pointLight);
const hemisphereHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.5);
const directionalHelper = new THREE.DirectionalLightHelper(directionalLight);
const spotHelper = new THREE.SpotLightHelper(spotLight);

rectHelper.visible = false;
pointHelper.visible = false;
hemisphereHelper.visible = false;
directionalHelper.visible = false;
spotHelper.visible = false;

scene.add(ambientLight);
scene.add(rectHelper);
scene.add(hemisphereHelper);
scene.add(pointHelper);
scene.add(directionalHelper);
scene.add(spotHelper);

/**
 * GUI DISPLAY FN
 */
const getGUIforLights = (params, folderName, object, helper) => {
  const paramsFn = params.position;
  object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
  const folderNameFn = gui.addFolder(folderName);
  folderNameFn.add(object, "intensity").min(0.1).max(2).step(0.01);
  folderNameFn.add(object, "visible");
  if (helper) {
    folderNameFn.add(helper, "visible").name(`helper`);
  }
  folderNameFn
    .add(paramsFn, "x")
    .min(-50)
    .max(50)
    .step(0.1)
    .onChange(() => {
      object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
    });
  folderNameFn
    .add(paramsFn, "y")
    .min(-50)
    .max(50)
    .step(0.1)
    .onChange(() => {
      object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
    });
  folderNameFn
    .add(paramsFn, "z")
    .min(-50)
    .max(50)
    .step(0.1)
    .onChange(() => {
      object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
    });
  if (object == spotLight) {
    folderNameFn
      .add(object, "angle")
      .min(Math.PI * 0.1)
      .max(Math.PI * 2)
      .step(0.01);
    folderNameFn.add(object, "distance").min(0).max(10).step(0.01);
  }
};

getGUIforLights(lightParamsPoint, "POINT LIGHT", pointLight, pointHelper);
getGUIforLights(
  lightParamsDir,
  "DIRECTIONAL LIGHT",
  directionalLight,
  directionalHelper
);
getGUIforLights(lightParamsSpot, "SPOT LIGHT", spotLight, spotHelper);
getGUIforLights(lightParamsRect, "RECT LIGHT", rectLight, rectHelper);

const ambientFolder = gui.addFolder("AMBIENT LIGHT");
const hemisphereFolder = gui.addFolder("HEMISPHERE LIGHT");
ambientFolder.add(ambientLight, "visible");
hemisphereFolder.add(hemisphereLight, "visible").name("LIGHT");
hemisphereFolder.add(hemisphereHelper, "visible").name("HELPER");

scene.add(spotLight);
scene.add(spotLight.target);
scene.add(directionalLight);
scene.add(pointLight);
scene.add(spotLight);
scene.add(rectLight);
scene.add(hemisphereLight);
scene.add(axesHelper);

/**
 * MATERIAL
 */

const material = new THREE.MeshStandardMaterial();
material.roughness = 0.4;
material.metalness = 0.01;
material.transparent = true;

// PLANE

const planeG = new THREE.PlaneGeometry(30, 40);
material.side = THREE.DoubleSide;
const plane = new THREE.Mesh(planeG, material);
plane.rotateX(-1.5);

plane.position.set(0, 0.5, 0);

// SPHERE

const sphereG = new THREE.SphereGeometry(1, 32, 32);
const sphere = new THREE.Mesh(sphereG, material);
sphere.position.set(-5, 5, -2);

// CUBE

const cubeG = new THREE.BoxGeometry(2, 2, 2);
const cube = new THREE.Mesh(cubeG, material);
cube.position.set(0, 10, -4);

// TORUS

const torusG = new THREE.TorusGeometry(1, 0.4, 18, 48);
const torus = new THREE.Mesh(torusG, material);
torus.position.set(5, 5, -2);

scene.add(sphere);
scene.add(cube);
scene.add(torus);
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
  sphere.rotation.x = 0.5 * elapsedTime;
  cube.rotation.x = 0.5 * elapsedTime;
  torus.rotation.x = 0.5 * elapsedTime;
  spotHelper.update();
  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
