import * as THREE from "three";
import { scene, camera, renderer } from "./basics";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GUI } from "dat.gui";
const controls = new OrbitControls(camera, renderer.domElement);

const gui = new GUI();

const boxPos = gui.addFolder("box position");

const helper = new THREE.AxesHelper(10);
helper.setColors("blue", "yellow", "green");
scene.add(helper);

const count = 100;
const sphereMat = new THREE.MeshBasicMaterial({
  // color: "green",
});
sphereMat.side = THREE.DoubleSide;
sphereMat.vertexColors = true;
const sphereVPositions = new Float32Array(count * 3);
const sphereVColors = new Float32Array(count * 3);
const sphereVNormals = new Float32Array(count * 3);
const sphereVUV = new Float32Array(count);

const sphereBufferGeom = new THREE.BufferGeometry();

for (let i = 0; i < count * 3; i++) {
  let i3 = i * 3;
  //sphereVPositions[i] = Math.random();
  sphereVPositions[i3] = 1 - Math.random() * 15;
  sphereVPositions[i3 + 1] = 1 - Math.random() * 7;
  sphereVPositions[i3 + 2] = 1 - Math.random() * 7;

  sphereVColors[i3] = Math.random();
  sphereVColors[i3 + 1] = Math.random();
  sphereVColors[i3 + 2] = Math.random();

  sphereVNormals[i3] = Math.random();
  sphereVNormals[i3 + 1] = Math.random();
  sphereVNormals[i3 + 2] = Math.random();
}
for (let i = 0; i < count; i++) {
  sphereVUV[i] = Math.random();
}

const spherePosAtt = new THREE.BufferAttribute(sphereVPositions, 3);
const sphereColorAtt = new THREE.BufferAttribute(sphereVColors, 3);
const sphereNormalAtt = new THREE.BufferAttribute(sphereVNormals, 3, {
  normalized: true,
});
const sphereUVAtt = new THREE.BufferAttribute(sphereVUV, 2);

sphereBufferGeom.setAttribute("position", spherePosAtt);
sphereBufferGeom.setAttribute("color", sphereColorAtt);
sphereBufferGeom.setAttribute("normal", sphereNormalAtt);
sphereBufferGeom.setAttribute("uv", sphereUVAtt);

console.log(`sphereBufferGeom`, sphereBufferGeom.attributes);

const sphere = new THREE.Mesh(sphereBufferGeom, sphereMat);
sphere.position.set(7, 3, 2);
scene.add(sphere);
function render(t) {
  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();

// const mesh = new THREE.Mesh(
//     new THREE.BoxGeometry(0.3, 0.3, 0.3),
//     new THREE.MeshBasicMaterial({ wireframe: true, color: "green" })
//   );
//   mesh.position.set(1, 1, 1);

//   boxPos.add(mesh.position, "x").min(-10).max(10).step(0.01);
//   boxPos.add(mesh.position, "y").min(-10).max(10).step(0.01);
//   boxPos.add(mesh.position, "z").min(-10).max(10).step(0.01);

//   scene.add(mesh);
