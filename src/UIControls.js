import * as THREE from "three";
import { GUI } from "dat.gui";
import { camera, scene } from "./basics";
import { RGBT } from "./objects.js";
import gsap from "gsap";

const guiEx = new GUI();
const cameraFolder = guiEx.addFolder("Camera");
//cameraFolder.add(camera.position, "z", 0, 10);

scene.add(RGBT);

// CONE CONTROLS

const RGBTFolder = guiEx.addFolder("CONES");
RGBTFolder.add(RGBT, "visible");

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
let cubeMaterial = new THREE.MeshBasicMaterial({
  wireframe: true,
  color: "green",
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.set(1, 1, 1);
cube.visible = false;
scene.add(cube);

// CUBE CONTROLS
const params = {
  meshColor: "#0056ff",
  rotate: () => {
    gsap.to(cube.rotation, { x: Math.PI * 20, y: 0, duration: 20 });
  },
};

const cubeFolder = guiEx.addFolder("CUBE");
cubeFolder.add(cube.rotation, "x", 0, Math.PI * 2);
cubeFolder.add(cube.rotation, "y", 0, Math.PI * 2);
cubeFolder.add(cube.rotation, "z", 0, 100);

cubeFolder.add(cube.position, "x").min(-10).max(10).step(0.1).name("X ax");
cubeFolder.add(cube.position, "y").min(-10).max(10).step(0.1).name("Y ax");
cubeFolder.add(cube.material, "wireframe");
cubeFolder.add(cube, "visible");

cubeFolder
  .add(params, "rotate")
  .name("rotate fn")
  .onChange(() => params.rotate(cube));

cubeFolder
  .addColor(params, "meshColor")
  .name("Mesh Color")
  .onChange(function () {
    cubeMaterial.color.set(params.meshColor);
  });

// TORUS KNOT CONTROLS
// TODO:  make material same as in docs

const torusFolder = guiEx.addFolder("TORUS KNOT");
let torusKnot;
let geometry;

const paramsTorusKnot = {
  geometry: {
    radius: 1,
    tube: 0.4,
    tubularSegments: 64,
    radialSegments: 8,
    p: 2,
    q: 3,
  },

  createGeom: () => {
    if (torusKnot) {
      scene.remove(torusKnot);
    }
    geometry = new THREE.TorusKnotGeometry(
      paramsTorusKnot.geometry.radius,
      paramsTorusKnot.geometry.tube,
      paramsTorusKnot.geometry.tubularSegments,
      paramsTorusKnot.geometry.radialSegments,
      paramsTorusKnot.geometry.p,
      paramsTorusKnot.geometry.q
    );

    torusKnot = new THREE.Mesh(geometry, material);

    scene.add(torusKnot);
  },
};

geometry = new THREE.TorusKnotGeometry(
  paramsTorusKnot.geometry.radius,
  paramsTorusKnot.geometry.tube,
  paramsTorusKnot.geometry.tubularSegments,
  paramsTorusKnot.geometry.radialSegments,
  paramsTorusKnot.geometry.p,
  paramsTorusKnot.geometry.q
);

const material = new THREE.MeshBasicMaterial({
  color: "blue",
  wireframe: true,
});

torusKnot = new THREE.Mesh(geometry, material);

torusFolder
  .add(paramsTorusKnot.geometry, "radius")
  .min(1)
  .max(20)
  .step(0.1)
  .onChange(function () {
    paramsTorusKnot.createGeom();
  });
torusFolder
  .add(paramsTorusKnot.geometry, "tube")
  .min(0.1)
  .max(10)
  .step(0.1)
  .onChange(function () {
    paramsTorusKnot.createGeom();
  });
torusFolder
  .add(paramsTorusKnot.geometry, "tubularSegments")
  .min(3)
  .max(300)
  .step(1)
  .onChange(function () {
    paramsTorusKnot.createGeom();
  });
torusFolder
  .add(paramsTorusKnot.geometry, "radialSegments")
  .min(3)
  .max(20)
  .step(1)
  .onChange(function () {
    paramsTorusKnot.createGeom();
  });
torusFolder
  .add(paramsTorusKnot.geometry, "p")
  .min(1)
  .max(20)
  .step(1)
  .onChange(function () {
    paramsTorusKnot.createGeom();
  });
torusFolder
  .add(paramsTorusKnot.geometry, "q")
  .min(1)
  .max(20)
  .step(1)
  .onChange(function () {
    paramsTorusKnot.createGeom();
  });
torusKnot.visible = false;
//torusFolder.add(torusKnot, "visible");
scene.add(torusKnot);

export { guiEx };
