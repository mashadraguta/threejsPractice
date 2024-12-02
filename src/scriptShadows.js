import * as THREE from "three";
import { camera, scene, renderer } from "./basics";
import { getGUIforLights } from "./utils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";


renderer.shadowMap.enabled = false;

/**
 * AXES HELPER
 */

const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("green", "purple", "orange");
scene.add(axesHelper);


/**
 * TEXTURES
 */

const bakedShadowTexture = new THREE.TextureLoader().load(
  "textures/bakedShadow.jpg"
);
const aoMapShadowTexture = new THREE.TextureLoader().load(
  "textures/simpleShadow.jpg"
);


/**
 * MATERIALS
 */

const lambertMaterial = new THREE.MeshLambertMaterial({ color: 'black' })
const standardMaterial = new THREE.MeshStandardMaterial();
lambertMaterial.alphaMap = aoMapShadowTexture
lambertMaterial.transparent = true

/**
 * GUI
 */

const guiControls = new GUI()
const texturesFolder = guiControls.addFolder('AO MAP INTENSITY')
const shadowFolder = guiControls.addFolder('ENABLE/DISABLE SHADOWS')
shadowFolder.add(renderer.shadowMap, 'enabled')
texturesFolder.add(lambertMaterial, "aoMapIntensity").min(0.1).max(10).step(0.01)


/**
 * INITIAL PARAMS
 */

const lightParamsDirectional = {
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
  position: { x: -4, y: 32, z: 3 },
  radius: 3,
  near: 0.1,
  far: 2000,
  fov: 50,
  distance: 0.2,
  angle: Math.PI * 0.1,
};

/**
 * LIGHTS
 */

const ambientLight = new THREE.AmbientLight("white", 0.2);
const directionalLight = new THREE.DirectionalLight("white", 0.5);
const pointLight = new THREE.PointLight("orange", 0.7);
const spotLight = new THREE.SpotLight("white", 0.9);

pointLight.visible = false;
directionalLight.visible = true;
spotLight.visible = false

pointLight.castShadow = true;
spotLight.castShadow = true;
directionalLight.castShadow = true;

// DIRECTIONAL
const d = 10
const directionalShadow = directionalLight.shadow
directionalShadow.camera.left = -d;
directionalShadow.camera.right = d;
directionalShadow.camera.bottom = -d;
directionalShadow.camera.top = d;
directionalShadow.camera.near = lightParamsDirectional.near;
directionalShadow.camera.far = lightParamsDirectional.far;
directionalShadow.radius = lightParamsDirectional.radius;
directionalShadow.mapSize.width = 1024;
directionalShadow.mapSize.height = 1024;

// SPOT
const spotShadow = spotLight.shadow
spotShadow.camera.near = lightParamsSpot.near;
spotShadow.camera.far = lightParamsSpot.far;
spotShadow.camera.fov = lightParamsSpot.fov;
spotShadow.radius = lightParamsSpot.radius;
spotShadow.mapSize.width = 1024;
spotShadow.mapSize.height = 1024;
spotLight.angle = lightParamsSpot.angle;
spotLight.near = lightParamsSpot.near;
spotLight.far = lightParamsSpot.far;
spotLight.fov = lightParamsSpot.fov;

// POINT
const pointShadow = pointLight.shadow
pointShadow.radius = lightParamsPoint.radius;

/**
 * HELPER SHADOWS
 */

const helperShadowDir = new THREE.CameraHelper(directionalShadow.camera);
const helperShadowPoint = new THREE.CameraHelper(pointShadow.camera);
const helperShadowSpot = new THREE.CameraHelper(spotShadow.camera);

/**
 * HELPERS LIGHTS
 */

const helperLightDirectional = new THREE.DirectionalLightHelper(
  directionalLight
);
const helperLightPoint = new THREE.PointLightHelper(pointLight);
const helperLightSpot = new THREE.SpotLightHelper(spotLight);

scene.add(helperLightDirectional);
scene.add(helperLightPoint);
scene.add(helperLightSpot);


helperShadowDir.visible = false;
helperShadowPoint.visible = false;
helperShadowSpot.visible = false;


helperLightDirectional.visible = false;
helperLightPoint.visible = false;
helperLightSpot.visible = false;

scene.add(helperShadowDir);
scene.add(helperShadowPoint);
scene.add(helperShadowSpot);



getGUIforLights(
  lightParamsDirectional,
  "DIRECTIONAL LIGHT",
  directionalLight,
  helperLightDirectional,
  helperShadowDir,
  guiControls
);
getGUIforLights(
  lightParamsPoint,
  "POINT LIGHT",
  pointLight,
  helperLightPoint,
  helperShadowPoint,
  guiControls

);
getGUIforLights(
  lightParamsSpot,
  "SPOT LIGHT",
  spotLight,
  helperLightSpot, helperShadowSpot, guiControls
);

scene.add(directionalLight);
directionalLight.position.set(8, 6, 15);
scene.add(directionalLight.target);

scene.add(ambientLight);
scene.add(pointLight);

spotLight.target.position.set(0, 5, 0);
scene.add(spotLight.target);
scene.add(spotLight);


/**
 * FAKE SHADOWS 
 */

const sphereShadow = new THREE.Mesh(
  new THREE.PlaneGeometry(6, 6),
  new THREE.MeshBasicMaterial({
    color: 'black',
    alphaMap: aoMapShadowTexture,
    transparent: true
  }),
)

sphereShadow.position.set(0, 1, 1)
sphereShadow.geometry.rotateX(-Math.PI / 2)


// SPHERE
const sphereG = new THREE.SphereGeometry(2, 32, 32);
sphereG.setAttribute('uv2', new THREE.BufferAttribute(sphereG.attributes.uv.array, 2))
const sphere = new THREE.Mesh(sphereG, standardMaterial);
sphere.castShadow = true;
sphere.position.set(-20, 20, 0);
scene.add(sphere)
scene.add(sphereShadow)



// TORUS

const torusG = new THREE.TorusGeometry();
torusG.setAttribute('uv2', new THREE.BufferAttribute(torusG.attributes.uv.array, 2))
const torus = new THREE.Mesh(torusG, standardMaterial);
torus.castShadow = true;
torus.position.set(-5, 5, 0);

// CUBE

const cubeG = new THREE.BoxGeometry(2, 2, 2);
cubeG.setAttribute('uv2', new THREE.BufferAttribute(cubeG.attributes.uv.array, 2))
const cube = new THREE.Mesh(cubeG, standardMaterial);
cube.castShadow = true;
cube.position.set(5, 5, 0);

// PLANE

const planeG = new THREE.PlaneGeometry(50, 50);
planeG.setAttribute('uv2', new THREE.BufferAttribute(planeG.attributes.uv.array, 2))
const plane = new THREE.Mesh(planeG, standardMaterial);

plane.receiveShadow = true;
plane.rotateX(-3.14 / 2);
plane.position.set(0, 0, 0);


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

  sphere.position.x = Math.sin(elapsedTime) * 5
  sphere.position.y = Math.abs(Math.sin(elapsedTime)) * 5 + 5
  sphere.position.z = Math.cos(elapsedTime) * 5
  const scale = Math.min((2 - Math.abs(Math.sin(elapsedTime))), 7)
  sphere.scale.set(scale, scale, scale)
  sphereShadow.position.x = sphere.position.x
  sphereShadow.position.z = sphere.position.z
  sphereShadow.material.opacity = 10 - sphere.position.y
  sphereShadow.scale.set(scale, scale, scale)

  helperShadowDir.update();
  helperShadowPoint.update();
  helperShadowSpot.update();
  helperLightDirectional.update();
  helperLightPoint.update();
  helperLightSpot.update();
  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();




