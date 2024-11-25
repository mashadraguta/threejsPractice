import * as THREE from "three";
import { camera, scene, canvas, renderer } from "./basics";
import { axesHelper } from "./objects";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";

//TEXTURE
const gui = new GUI();
const textureMesh = new THREE.TextureLoader().load("textures/Grass/Grass.jpg");
const materialPlane = new THREE.MeshBasicMaterial({
  map: textureMesh,
  //   transparent: true,
});
/**
 * LIGHTS
 */

// scene.add(ambientLight);
const lightParamsPoint = {
  position: { x: 5, y: 5, z: 5 },
};
const lightParamsDir = {
  position: { x: 5, y: 5, z: 5 },
};
const ambientLight = new THREE.AmbientLight("white", 0.2);
const directionalLight = new THREE.DirectionalLight("white", 0.5);
const hemisphereLight = new THREE.HemisphereLight("red", "green", 0.3);
const pointLight = new THREE.PointLight(0xff9000, 0.5, 0, 0.3);
//pointLight.position.set(5, 5, 5);

// POINT LIGHT CONTROLS
pointLight.position.set(
  lightParamsPoint.position.x,
  lightParamsPoint.position.y,
  lightParamsPoint.position.z
);
gui.addFolder("POINT LIGHT");
gui.add(pointLight, "intensity").min(0.1).max(10).step(0.01);
gui.add(lightParamsPoint.position, "x").onChange(() => {
  pointLight.position.set(
    lightParamsPoint.position.x,
    lightParamsPoint.position.y,
    lightParamsPoint.position.z
  );
});
gui.add(lightParamsPoint.position, "y").onChange(() => {
  pointLight.position.set(
    lightParamsPoint.position.x,
    lightParamsPoint.position.y,
    lightParamsPoint.position.z
  );
});
gui.add(lightParamsPoint.position, "z").onChange(() => {
  pointLight.position.set(
    lightParamsPoint.position.x,
    lightParamsPoint.position.y,
    lightParamsPoint.position.z
  );
});

// DIRECTIONAL LIGHT CONTROLS

directionalLight.position.set(
  lightParamsDir.position.x,
  lightParamsDir.position.y,
  lightParamsDir.position.z
);
gui.addFolder("DIRECTIONAL LIGHT ");
gui.add(directionalLight, "intensity").min(0.1).max(10).step(0.01);
gui.add(lightParamsDir.position, "x").onChange(() => {
  directionalLight.position.set(
    lightParamsDir.position.x,
    lightParamsDir.position.y,
    lightParamsDir.position.z
  );
});
gui.add(lightParamsDir.position, "y").onChange(() => {
  directionalLight.position.set(
    lightParamsDir.position.x,
    lightParamsDir.position.y,
    lightParamsDir.position.z
  );
});
gui.add(lightParamsDir.position, "z").onChange(() => {
  directionalLight.position.set(
    lightParamsDir.position.x,
    lightParamsDir.position.y,
    lightParamsDir.position.z
  );
});

//scene.add(hemisphereLight);
scene.add(directionalLight);
scene.add(pointLight);
// scene.add(ambientLight);

/**
 * MATERIAL
 */
const material = new THREE.MeshStandardMaterial();
material.roughness = 0.4;
material.metalness = 0.01;
material.transparent = true;

/**
 * GUI CONTROLS
 */

const params = {
  color: "#ffffff",
};
gui.addFolder(" Plane roughness");
gui.add(material, "roughness").min(0.01).max(1).step(0.01);
gui.add(material, "metalness").min(0.01).max(1).step(0.01);
gui.addColor(params, "color").onChange(() => {
  material.color = new THREE.Color(params.color);
});

// PLANE
const planeG = new THREE.PlaneGeometry(30, 40);
material.side = THREE.DoubleSide;
const plane = new THREE.Mesh(planeG, material);
plane.rotateX(-1.5);

plane.position.set(0, 0.5, 0);

// SPHERE

const sphereG = new THREE.SphereGeometry(1, 32, 32);
const sphere = new THREE.Mesh(sphereG, material);
sphere.position.set(-5, 2, -2);
// CUBE

const cubeG = new THREE.BoxGeometry(2, 2, 2, 10, 10, 10);

const cube = new THREE.Mesh(cubeG, material);
cube.position.set(0, 5, -2);

// TORUS

const torusG = new THREE.TorusGeometry(1, 0.4, 18, 48);
const torus = new THREE.Mesh(torusG, material);
torus.position.set(5, 2, -2);

scene.add(axesHelper);

scene.add(plane);
scene.add(sphere);
scene.add(cube);
scene.add(torus);

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
  cube.rotation.x = 0.5 * -elapsedTime;
  torus.rotation.x = 0.5 * elapsedTime;
  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
