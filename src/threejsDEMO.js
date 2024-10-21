import * as THREE from "three";

const canvasHTML = document.querySelector("#webgl");

const scene = new THREE.Scene();

// working version

const camera = new THREE.PerspectiveCamera(85, 2);

//const camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -500, 1000);
camera.position.x = 3;
camera.position.y = 1;
camera.position.z = 25;
// creating object and give it dimensions and color

scene.background = new THREE.Color("orange");

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvasHTML,
});
renderer.setSize(window.innerWidth, window.innerHeight);

const emptyCubWireframe = new THREE.BoxGeometry(5, 5, 5);
const emptyCubMaterial = new THREE.MeshBasicMaterial({
  color: "black",
  wireframe: true,
});
const blackBox = new THREE.Mesh(emptyCubWireframe, emptyCubMaterial);

const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "white",
  wireframe: true,
});
const cubWireframe = new THREE.BoxGeometry(3, 3, 3);
const whiteBox = new THREE.Mesh(cubWireframe, cubeMaterial);

const sphereMaterial = new THREE.MeshNormalMaterial();
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 20, 20),
  sphereMaterial
);

const referencePointWireframe = new THREE.SphereGeometry(1, 4, 4);
const referenceMaterial = new THREE.MeshBasicMaterial({ color: "black" });
const referencePoint = new THREE.Mesh(
  referencePointWireframe,
  referenceMaterial
);

// const geometry = new THREE.BufferGeometry();
// const vertices = [];

// for (let i = 0; i < 10000; i++) {

// 	vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
// 	vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
// 	vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z

// }

// geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 2));

// const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x888888 }));

const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("red", "yellow", "blue");

const coneWireframe = new THREE.ConeGeometry();
const coneMaterial = new THREE.MeshBasicMaterial({
  color: "green",
  wireframe: true,
});
const cone = new THREE.Mesh(coneWireframe, coneMaterial);

cone.up = new THREE.Vector3(0, 1, 1);

// cone.rotateX(3)

referencePoint.position.x = 0;
referencePoint.position.y = 0;
referencePoint.position.z = 0;

const bufferForm = new THREE.BufferGeometry();

// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array([
  -1.0,
  -1.0,
  1.0, // v0
  1.0,
  -1.0,
  1.0, // v1
  1.0,
  1.0,
  1.0, // v2

  1.0,
  1.0,
  1.0, // v3
  -1.0,
  1.0,
  1.0, // v4
  -1.0,
  -1.0,
  1.0, // v5
]);

// itemSize = 3 because there are 3 values (components) per vertex
bufferForm.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
const material = new THREE.MeshBasicMaterial({ color: "red" });
const bufferFormMesh = new THREE.Mesh(bufferForm, material);
//bufferFormMesh.scale.set(3.5, 3.5, 3.5);

whiteBox.position.x = 5;
whiteBox.position.y = 4;
whiteBox.position.z = 6;
whiteBox.scale.set(2, 2, 2);

sphere.position.x = 3;
sphere.position.y = 3;
sphere.position.z = 5;

cone.position.x = -3;
cone.position.y = 6;
cone.position.z = 6;
//cone.translate(3, 3, 4)
cone.scale.set(2, 2, 2);

blackBox.position.x = 3;
blackBox.position.y = 3;
blackBox.position.z = 3;
//blackBox.scale.set(2, 2, 2);

scene.add(axesHelper);
scene.add(sphere);
scene.add(whiteBox);
scene.add(blackBox);
scene.add(cone);
scene.add(referencePoint);
// scene.add(bufferFormMesh);
//scene.add(particles);

function animate(t) {
  //Move sphere left and right
  sphere.position.x = Math.sin(t / 900) * 25;
  //   sphere.position.z = Math.sin(t / 700) * 55;
  //   sphere.position.y = Math.sin(t / 700) * 550;
  // whiteBox.position.x = Math.sin(t / 700) * 150;
  // whiteBox.position.x = 300;
  // whiteBox.position.y = 200;
  //   whiteBox.position.z = Math.sin(t / 1000) * 350;
  whiteBox.position.x = Math.sin(t / 1000) * 35;
  //whiteBox.position.y = Math.sin(t / 1000) * 350;

  blackBox.position.x = Math.sin(t / 900) * 100;
  //   blackBox.position.y = 500;
  //   blackBox.position.z -= Math.sin(t / 1000) * 150;

  // cone.rotateX(Math.sin(t) * 2);

  //   cone.position.x = 700 * Math.cos(90);
  //   cone.position.y = 700 * Math.cos(180);
  //   cone.position.z = Math.sin(t / 1000) * 50;

  //   blackBox.position.y -= Math.sin(t / 70);

  renderer.render(scene, camera);
  window.requestAnimationFrame(animate, renderer.domElement);
}

renderer.render(scene, camera);
//camera.lookAt(-100, 1200, -10000);

console.group(`cone`);
console.log(`cone`, cone);
console.groupEnd();
