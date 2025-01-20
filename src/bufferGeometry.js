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

// let posArr = [];
// let normArr = [];
// let uvArr = [];
let posArr = new Float32Array(vertices.length * 3);
let normArr = new Float32Array(vertices.length * 3);
let uvArr = new Float32Array(vertices.length * 2);

const posNumComponents = 3
const normalNumComponents = 3
const uvNumComponents = 2

let posNdx = 0
let normNdx = 0
let uvNdx = 0

// for (let i = 0; i < vertices.length; i++) {
//   posArr.push(...vertices[i].pos);
//   normArr.push(...vertices[i].norm);
//   uvArr.push(...vertices[i].uv);
// }

for (const vertex of vertices) {
  posArr.set(vertex.pos, posNdx)
  normArr.set(vertex.norm, normNdx)
  uvArr.set(vertex.uv, uvNdx)
  posNdx += posNumComponents
  normNdx += normalNumComponents
  uvNdx += uvNumComponents
}
console.log(posArr);


// prettier-ignore
const newIndexes = [
  0, 1, 2, 2, 1, 3, //front,
  4, 5, 6, 6, 5, 7, //right,
  8, 9, 10, 10, 9, 11, //back,
  12, 13, 14, 14, 13, 15, //left
  16, 17, 18, 18, 17, 19, // top
  20, 21, 22, 22, 21, 23  //bottom

]

const bufferGeom = new THREE.BufferGeometry();
bufferGeom.setIndex(newIndexes);

const posAttribute = new THREE.BufferAttribute(posArr, posNumComponents);
const normalAttribute = new THREE.BufferAttribute(
  normArr,
  normalNumComponents
);
const uvAttribute = new THREE.BufferAttribute(uvArr, uvNumComponents);

bufferGeom.setAttribute("position", posAttribute);
bufferGeom.setAttribute("normal", normalAttribute);
bufferGeom.setAttribute("uv", uvAttribute);

console.log(`bufferGeom from cube====>`, bufferGeom)

const material = new THREE.MeshBasicMaterial();

const cube = new THREE.Mesh(bufferGeom, material);
const cube2 = cube.clone();
const cube3 = cube.clone();

cube.position.set(-5, 0, 0);
cube2.position.set(0, 0, 0);
cube3.position.set(5, 0, 0);

// scene.add(cube, cube2, cube3);


function makeSpherePositions(segmentsAround, segmentsDown, time) {
  // if (positions !== undefined) {
  //   positions = null
  // }
  const numVertices = segmentsAround * segmentsDown * 6;
  const numComponents = 3;
  const positions = new Float32Array(numVertices * numComponents);
  const indexes = [];

  const longHelper = new THREE.Object3D();
  const latHelper = new THREE.Object3D();
  const pointHelper = new THREE.Object3D();

  longHelper.add(latHelper)
  latHelper.add(pointHelper)
  // longHelper.color = new THREE.Color('green')
  // latHelper.color = new THREE.Color('green')
  // pointHelper.color = new THREE.Color('green')
  // scene.add(longHelper, latHelper, pointHelper)
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
        index, index + 1, index + 2,
        index + 2, index + 1, index + 3
      );
      index += 4;
    }
  }

  return { positions, indexes };
}


const positions = makeSpherePositions(12, 12).positions;
const indexes = makeSpherePositions(12, 12).indexes;
const sphereBufferGeometry = new THREE.BufferGeometry();
const segmentsAround = 12
const sphereAttributePoses = new THREE.BufferAttribute(positions, 3)

const normals = positions.slice();
const colors = positions.slice();
const sphereAttributeColors = new THREE.BufferAttribute(colors, 3)
sphereBufferGeometry.setAttribute(
  "position",
  sphereAttributePoses
);
sphereBufferGeometry.setAttribute(
  "normal",
  new THREE.BufferAttribute(normals, 3)
);

sphereAttributePoses.setUsage(THREE.DynamicDrawUsage)
sphereBufferGeometry.setAttribute(
  "color",
  sphereAttributeColors
);
sphereBufferGeometry.setIndex(indexes);

material.vertexColors = true

const sphere = new THREE.Mesh(sphereBufferGeometry, material);
scene.add(sphere);
function render(time) {
  time *= 0.001;
  const temp = new THREE.Vector3();


  for (let i = 0; i < positions.length; i += 3) {
    const quad = (i / 6 | 0);
    const ringId = quad / segmentsAround | 0;
    const ringQuadId = quad % segmentsAround;
    const ringU = ringQuadId / segmentsAround;
    const angle = ringU * Math.PI * 2;
    temp.fromArray(normals, i);
    console.log(ringId)
    temp.multiplyScalar(THREE.MathUtils.lerp(1, 1.4, Math.sin(time + ringId + angle) * .5 + .5));
    temp.toArray(positions, i);
  }
  sphereAttributePoses.needsUpdate = true;
  sphereAttributeColors.needsUpdate = true;

  sphereBufferGeometry.attributes.position.needsUpdate = true
  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();

