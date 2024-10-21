import * as THREE from "three";

const scene = new THREE.Scene();

const canvasHTML = document.querySelector("#webgl");
const renderer = new THREE.WebGLRenderer({});

const sizes = {
  width: 1920,
  height: 1050,
};
renderer.setSize(sizes.width, sizes.height);

const camera = new THREE.PerspectiveCamera(75, 2, 0.4, 20);
scene.background = new THREE.Color("orange");
camera.position.y = 2;
camera.position.z = 5;

//OBJS
// I
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const cubeMaterial = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.scale.set(0.5, 0.5, 0.5);
cube.position.x = 2;
cube.position.y = 4;
cube.position.z = 0;

// II

const referencePointWireframe = new THREE.SphereGeometry(1, 4, 4);
const referenceMaterial = new THREE.MeshBasicMaterial({ color: "black" });
const referencePoint = new THREE.Mesh(
  referencePointWireframe,
  referenceMaterial
);
referencePoint.position.x = 0;
referencePoint.position.y = 0;
referencePoint.position.z = 0;

scene.add(referencePoint);
scene.add(cube);

renderer.render(scene, camera);
