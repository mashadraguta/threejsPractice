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

const vertices = [
  // front
  { pos: [-1, -1, 1], norm: [0, 0, 1], uv: [0, 0] },
  { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0] },
  { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1] },

  // { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1] },
  //{ pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0] },
  { pos: [1, 1, 1], norm: [0, 0, 1], uv: [1, 1] }, // right
  { pos: [1, -1, 1], norm: [1, 0, 0], uv: [0, 0] },
  { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0] },
  { pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1] },

  //{ pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1] },
  // { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0] },
  { pos: [1, 1, -1], norm: [1, 0, 0], uv: [1, 1] },
  // back
  { pos: [1, -1, -1], norm: [0, 0, -1], uv: [0, 0] },
  { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0] },
  // { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1] },

  { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1] },
  // { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0] },
  { pos: [-1, 1, -1], norm: [0, 0, -1], uv: [1, 1] },

  // left
  { pos: [-1, -1, -1], norm: [-1, 0, 0], uv: [0, 0] },
  { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0] },
  // { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1] },

  { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1] },
  // { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0] },
  { pos: [-1, 1, 1], norm: [-1, 0, 0], uv: [1, 1] },

  // top
  { pos: [1, 1, -1], norm: [0, 1, 0], uv: [0, 0] },
  { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0] },
  // { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1] },

  { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1] },
  // { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0] },
  { pos: [-1, 1, 1], norm: [0, 1, 0], uv: [1, 1] },
  // bottom
  { pos: [1, -1, 1], norm: [0, -1, 0], uv: [0, 0] },
  { pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0] },
  //  { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1] },

  { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1] },
  //{ pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0] },
  { pos: [-1, -1, -1], norm: [0, -1, 0], uv: [1, 1] },
];

//24 vertices without repeating ones

let posArr = [];
let normArr = [];
let uvArr = [];

for (let i = 0; i < vertices.length; i++) {
  posArr.push(...vertices[i].pos);
  normArr.push(...vertices[i].norm);
  uvArr.push(...vertices[i].uv);
}

// prettier-ignore
const newIndexes = [
  0,1,2 ,2,1,3, //front,
  4,5,6, 6,5,7, //right,
  8,9,10, 10,9,11, //back,
  12,13,14, 14,13,15, //left
  16,17,18, 18, 17,19, // top
  20,21,22, 22, 21, 23  //bottom

]

const bufferGeom = new THREE.BufferGeometry();
bufferGeom.setIndex(newIndexes);
const posTypedArr = new Float32Array(posArr);
const normTypedArr = new Float32Array(normArr);
const uvTypedArr = new Float32Array(uvArr);

const posNrComponents = 3;
const normNrComponents = 3;
const uvNrComponents = 2;

const posAttribute = new THREE.BufferAttribute(posTypedArr, posNrComponents);
const normalAttribute = new THREE.BufferAttribute(
  normTypedArr,
  normNrComponents
);
const uvAttribute = new THREE.BufferAttribute(uvTypedArr, uvNrComponents);

bufferGeom.setAttribute("position", posAttribute);
bufferGeom.setAttribute("normal", normalAttribute);
bufferGeom.setAttribute("uv", uvAttribute);
//bufferGeom.computeVertexNormals();
console.log(bufferGeom);
console.log(normArr.length / 3);
console.log(uvArr.length / 2);

const material = new THREE.MeshBasicMaterial({ wireframe: true });

const cube = new THREE.Mesh(bufferGeom, material);
const cube2 = cube.clone();
const cube3 = cube.clone();

cube.position.set(-5, 0, 0);
cube2.position.set(0, 0, 0);
cube3.position.set(5, 0, 0);
//scene.add(cube, cube2, cube3);

function makeSpherePositions(segmentsAround, segmentsDown) {
  const numVertices = segmentsAround * segmentsDown * 6;
  const numComponents = 3;
  const positions = new Float32Array(numVertices * numComponents);
  const indexes = [];

  const longHelper = new THREE.Object3D();
  const latHelper = new THREE.Object3D();
  const pointHelper = new THREE.Object3D();
  longHelper.add(latHelper);
  latHelper.add(pointHelper);

  pointHelper.position.z = 1;

  const temp = new THREE.Vector3();

  function getPoint(lat, long) {
    latHelper.rotation.x = lat;
    longHelper.rotation.y = long;
    longHelper.updateMatrixWorld(true);
    return pointHelper.getWorldPosition(temp).toArray();
  }

  let posIndex = 0;
  let index = 0;

  for (let down = 0; down < segmentsDown; ++down) {
    const v0 = down / segmentsDown;
    const v1 = (down + 1) / segmentsDown;

    const lat0 = (v0 - 0.5) * Math.PI;
    const lat1 = (v1 - 0.5) * Math.PI;
    // prettier-ignore
    for (let across = 0; across < segmentsAround; ++across) {
      const u0 = across / segmentsAround;
      const u1 = (across + 1) / segmentsAround;
      const long0 = u0 * Math.PI * 2;
      const long1 = u1 * Math.PI * 2;
      positions.set(getPoint(lat0, long0), posIndex);
      posIndex += numComponents;
      positions.set(getPoint(lat1, long0), posIndex);
      posIndex += numComponents;
      positions.set(getPoint(lat0, long1), posIndex);
      posIndex += numComponents;
      positions.set(getPoint(lat1, long1), posIndex);
      posIndex += numComponents;

      indexes.push(
        index,    index + 1,    index + 2,
        index + 2, index + 1,   index + 3
      );
      index += 4;
    }
  }
  return { positions, indexes };
}

console.log(makeSpherePositions(24, 24).indexes);
//console.log(makeSpherePositions(24, 24).positions);

const positions = makeSpherePositions(24, 24).positions;
const indexes = makeSpherePositions(24, 24).indexes;
const sphereBufferGeometry = new THREE.BufferGeometry();

sphereBufferGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);
sphereBufferGeometry.setIndex(indexes);

const sphere = new THREE.Mesh(sphereBufferGeometry, material);
scene.add(sphere);
function render(t) {
  controls.update();

  // sphere.rotateX(0.05);
  // cube2.rotateX(-0.05);
  // cube3.rotateX(0.05);
  sphereBufferGeometry.attributes.position.needsUpdate = true;
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

// const count = 100;
// const sphereMat = new THREE.MeshBasicMaterial({
//   // color: "green",
// });
// sphereMat.side = THREE.DoubleSide;
// sphereMat.vertexColors = true;
// const sphereVPositions = new Float32Array(count * 3);
// const sphereVColors = new Float32Array(count * 3);
// const sphereVNormals = new Float32Array(count * 3);
// const sphereVUV = new Float32Array(count);

// const sphereBufferGeom = new THREE.BufferGeometry();

// for (let i = 0; i < count * 3; i++) {
//   let i3 = i * 3;
//   //sphereVPositions[i] = Math.random();
//   sphereVPositions[i3] = 1 - Math.random() * 15;
//   sphereVPositions[i3 + 1] = 1 - Math.random() * 7;
//   sphereVPositions[i3 + 2] = 1 - Math.random() * 7;

//   sphereVColors[i3] = Math.random();
//   sphereVColors[i3 + 1] = Math.random();
//   sphereVColors[i3 + 2] = Math.random();

//   sphereVNormals[i3] = Math.random();
//   sphereVNormals[i3 + 1] = Math.random();
//   sphereVNormals[i3 + 2] = Math.random();
// }
// for (let i = 0; i < count; i++) {
//   sphereVUV[i] = Math.random();
// }

// const spherePosAtt = new THREE.BufferAttribute(sphereVPositions, 3);
// const sphereColorAtt = new THREE.BufferAttribute(sphereVColors, 3);
// const sphereNormalAtt = new THREE.BufferAttribute(sphereVNormals, 3, {
//   normalized: true,
// });
// const sphereUVAtt = new THREE.BufferAttribute(sphereVUV, 2);

// sphereBufferGeom.setAttribute("position", spherePosAtt);
// sphereBufferGeom.setAttribute("color", sphereColorAtt);
// sphereBufferGeom.setAttribute("normal", sphereNormalAtt);
// sphereBufferGeom.setAttribute("uv", sphereUVAtt);

// console.log(`sphereBufferGeom`, sphereBufferGeom.attributes);

// const sphere = new THREE.Mesh(sphereBufferGeom, sphereMat);
// sphere.position.set(7, 3, 2);
// scene.add(sphere);
