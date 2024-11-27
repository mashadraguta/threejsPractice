import * as THREE from "three";
import { camera, scene, canvas, renderer } from "./basics";
//import { axesHelper } from "./objects";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js"



/**
 * LIGHTS
 */
const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("green", "purple", "orange");


/**
 * controls
 */


const gui = new GUI();
console.log(`gui----->`, gui)
const textureMesh = new THREE.TextureLoader().load("textures/Grass/Grass.jpg");
const materialPlane = new THREE.MeshBasicMaterial({
  map: textureMesh,
  //   transparent: true,
});


const lightParamsPoint = {
  position: { x: 15, y: 15, z: 15 },
};
const lightParamsDir = {
  position: { x: -2.8, y: 1, z: 2 },
};
const lightParamsSpot = {
  position: { x: 0, y: 0, z: 0 },
};
const lightParamsRect = {
  position: { x: 0, y: 0, z: 0 },
};

/**
 * LIGHTS
 */
const ambientLight = new THREE.AmbientLight("white", 0.2);
const hemisphereLight = new THREE.HemisphereLight(0xff6F21, "green", 0.1);
const pointLight = new THREE.PointLight(0xffde21, 0.3, 0, 0.1);
const directionalLight = new THREE.DirectionalLight("white", 1);
const spotLight = new THREE.SpotLight('white', 0.6, 0, Math.PI * 0.1, 0.25, 1);
const rectLight = new THREE.RectAreaLight('white', 0.9, 20, 20);


pointLight.visible = false
spotLight.visible = false
rectLight.visible = false
hemisphereLight.visible = false

spotLight.target.position.set(0, 5, -2)
scene.add(spotLight.target)
console.log(`SPOTLIGHT.TARGET=====>`, spotLight.target)
console.log(`SPOTLIGHT=====>`, spotLight)


/**
 * HELPERS
 */
const rectLightHelper = new RectAreaLightHelper(rectLight);
const hemisphereHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.5)
const directionalHelper = new THREE.DirectionalLightHelper(directionalLight)
hemisphereHelper.visible = false
scene.add(rectLightHelper);
scene.add(hemisphereHelper);
scene.add(directionalHelper);

/**
 * GUI DISPLAY FN
 */
const getGUIforLights = (params, folderName, object) => {
  const paramsFn = params.position
  object.position.set(
    paramsFn.x,
    paramsFn.y,
    paramsFn.z
  );
  const folderNameFn = gui.addFolder(folderName)
  folderNameFn.add(object, "intensity").min(0.1).max(10).step(0.01);
  folderNameFn.add(object, "visible")
  folderNameFn.add(paramsFn, "x").onChange(() => {
    object.position.set(
      paramsFn.x,
      paramsFn.y,
      paramsFn.z
    );
  });
  folderNameFn.add(paramsFn, "y").onChange(() => {
    object.position.set(
      paramsFn.x,
      paramsFn.y,
      paramsFn.z
    );
  });
  folderNameFn.add(paramsFn, "z").onChange(() => {
    object.position.set(
      paramsFn.x,
      paramsFn.y,
      paramsFn.z
    );
  });
  //folderNameFn.open()
}

getGUIforLights(lightParamsPoint, "POINT LIGHT", pointLight)
getGUIforLights(lightParamsDir, "DIRECTIONAL LIGHT", directionalLight)
getGUIforLights(lightParamsSpot, "SPOT LIGHT", spotLight)
getGUIforLights(lightParamsRect, "RECT LIGHT", rectLight)

const hemisphereFolder = gui.addFolder('HEMISPHERE LIGHT')
hemisphereFolder.add(hemisphereLight, 'visible').name('LIGHT')
hemisphereFolder.add(hemisphereHelper, 'visible').name('HELPER')

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
sphere.position.set(-5, 2, -2);
// CUBE

const cubeG = new THREE.BoxGeometry(2, 2, 2);

const cube = new THREE.Mesh(cubeG, material);
cube.position.set(0, 10, -4);

// TORUS

const torusG = new THREE.TorusGeometry(1, 0.4, 18, 48);
const torus = new THREE.Mesh(torusG, material);
torus.position.set(5, 2, -2);

//scene.add(axesHelper);
const group = new THREE.Group()
// group.add(sphere, cube, torus)
scene.add(sphere)
scene.add(cube)
scene.add(torus)
scene.add(plane);
scene.add(group);
directionalLight.lookAt(0, 0, 0)
// rectLight.lookAt(new THREE.Vector3());
spotLight.lookAt(sphere.position)




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
  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
