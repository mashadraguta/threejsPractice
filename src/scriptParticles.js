import * as THREE from "three";
import { camera, scene, canvas, renderer } from "./basics";
import { changeObjPos } from "./utils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper.js";
import { GUI } from "dat.gui";

/* HELPERS */

const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("red", "yellow", "blue");

scene.add(axesHelper);

const gui = new GUI({ name: "galaxy generator", width: 500 });

const controls = new OrbitControls(camera, renderer.domElement);

const initParamsALight = {
  position: {
    x: 3,
    y: 3,
    z: 15,
  },
  intensity: 0.5,
};
const initParamsBMesh = {
  position: {
    x: 3,
    y: 3,
    z: 15,
  },
};

/* TEXTURES */

const loader = new THREE.TextureLoader();

const cartoonMat = loader.load("/textures/matcaps/1.png");
loader.setPath("/textures/particles/");

const mat1 = loader.load("1.png");
const mat2 = loader.load("2.png");
const mat3 = loader.load("3.png");
const mat4 = loader.load("4.png");
const mat5 = loader.load("5.png");
const mat6 = loader.load("6.png");
const mat7 = loader.load("7.png");
const mat8 = loader.load("8.png");
const mat9 = loader.load("9.png");
const mat10 = loader.load("10.png");
const mat11 = loader.load("11.png");
const mat12 = loader.load("12.png");

/* LIGHTS */

const ambientLight = new THREE.PointLight("yellow", initParamsALight.intensity);
ambientLight.position.set(
  initParamsALight.position.x,
  initParamsALight.position.y,
  initParamsALight.position.z
);
//changeObjPos(ambientLight, initParamsALight, gui, "point Light");
scene.add(ambientLight);

/* OBJECTS */

const covrig = new THREE.Mesh(
  new THREE.TorusGeometry(),
  new THREE.MeshToonMaterial({
    alphaMap: cartoonMat,
    color: "green",
  })
);

covrig.position.set(0, 2, 2);

// GALAXY

const GParams = {
  count: 30,
  size: 0.5,
  color: false,
  radius: 2,
  branches: 2,
};

let stars;
let starMat;
let bufferGeometry;
let numOfBranches = 3;

// let partsPosArr;
// let partsPosColorArr;
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

const generateGalaxy = (starNum, starSize, starColor) => {
  if (stars) {
    bufferGeometry.dispose();
    starMat.dispose();
    scene.remove(stars);
  }
  bufferGeometry = new THREE.BufferGeometry();
  let partsPosArr = new Float32Array(3 * starNum);

  let partsPosColorArr = new Float32Array(3 * starNum);

  function partition(arr, length) {
    let rest = arr.length % length;
    let size = Math.floor(arr.length / length);
    let j = 0;
    return Array.from({ length }, (_, i) =>
      arr.slice(j, (j += size + (i < rest)))
    );
  }

  for (let i = 0; i < 3 * starNum; i++) {
    const i3 = i * 3;
    //  starNum / numOfBranches -> length of a branch
    let lengthOfBranch = starNum / numOfBranches;
    partsPosArr
      .subarray(0, 30)
      .fill(THREE.MathUtils.randFloat(-GParams.radius, 0), i3, i3 + 1);
    partsPosArr
      .subarray(30, 60)
      .fill(THREE.MathUtils.randFloat(0, GParams.radius), i3, i3 + 1);
    partsPosArr
      .subarray(60, 90)
      .fill(THREE.MathUtils.randFloat(-GParams.radius, 0), i3, i3 + 1);
    partsPosArr.subarray(0, 30).fill(partsPosArr[i3], i3 + 2, i3 + 3);
    partsPosArr
      .subarray(30, 60)
      .fill(Math.tan(partsPosArr[i3 + 1]), i3 + 2, i3 + 3);
    partsPosArr.subarray(60, 90).fill(-partsPosArr[i3 + 1], i3 + 2, i3 + 3);
  }
  bufferGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(partsPosArr, 3)
  );
  bufferGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(partsPosColorArr, 3)
  );

  starMat = new THREE.PointsMaterial({
    alphaMap: mat4,
    vertexColors: starColor,
    sizeAttenuation: true,
    depthWrite: false,
    size: starSize,
    transparent: true,
  });

  stars = new THREE.Points(bufferGeometry, starMat);
  scene.add(stars);
};

generateGalaxy(GParams.count, GParams.size, GParams.color, GParams.radius);
const material = new THREE.LineBasicMaterial({
  color: 0x0000ff,
});

const points = [];
points.push(new THREE.Vector3(-5, 0, 0));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(5, 0, 0));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(0, 0, -5));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(0, 0, 5));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(1, 0, 5));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(2, 0, 5));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(3, 0, 5));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(4, 0, 5));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(5, 0, 5));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(6, 0, 5));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(7, 0, 5));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(8, 0, 5));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);
//scene.add(line);

const numberOfStars = gui.addFolder("stars number");
const sizeOfStars = gui.addFolder("stars size");
const colorOfStars = gui.addFolder("color");
const radiusOfStars = gui.addFolder("radius");

numberOfStars
  .add(GParams, "count")
  .min(10)
  .max(100000)
  .step(10)
  .onChange(() => {
    generateGalaxy(GParams.count, GParams.size, GParams.color, GParams.radius);
  });
sizeOfStars
  .add(GParams, "size")
  .min(0.01)
  .max(2)
  .step(0.01)
  .onChange(() => {
    generateGalaxy(GParams.count, GParams.size, GParams.color, GParams.radius);
  });
radiusOfStars
  .add(GParams, "radius")
  .min(1)
  .max(100)
  .step(0.1)
  .onChange(() => {
    generateGalaxy(GParams.count, GParams.size, GParams.color, GParams.radius);
  });
colorOfStars.add(GParams, "color").onChange(() => {
  generateGalaxy(GParams.count, GParams.size, GParams.color);
});
window.addEventListener("resize", (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const clock = new THREE.Clock();
function render(t) {
  const elapsedTime = clock.getElapsedTime();
  // stars.rotateY(Math.sin(elapsedTime / 1000))
  // for (let i = 0; i < GParams.count; i++) {
  //   let i3 = i * 3;
  //   let x = stars.geometry.attributes.position.array[i3 + 0];
  //   stars.geometry.attributes.position.array[i3 + 1] = Math.sin(
  //     elapsedTime - x
  //   );
  //   stars.geometry.attributes.position.needsUpdate = true;
  // }

  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();

// if (partsPosArr[i3 + 0]) {
//   xPositions.push(partsPosArr[i3 + 0])
// }

// let xPos1 = xPositions.slice(0, 3)
// let xPos2 = xPositions.slice(3, 6)
// let xPos3 = xPositions.slice(6, 9)

// console.log(xPos1)
// console.log(xPos2)
// console.log(xPos3)
// // console.log(`xPositions`, xPositions);
// // console.log(` partsPosArr[i3 + 0] `, partsPosArr[i3 + 0]);

// console.log(xPos1)
// console.log(xPos2)
// console.log(xPos3)
// console.log(`partsPosArr[i3 + 2]`, partsPosArr[i3 + 2])

// partsPosArr[i3 + 2] = 1; //z
// partsPosArr.filter((vertexPos, index) => {
//   console.log(partsPosArr[index]);
//  if(partsPosArr[ index ] ===  partsPosArr[i3 + 0] ) {

//  }

// })

// newArray1.forEach((item, index) => {
//   if (index === 2) {
//     console.log(item);

//     return 2
//   }
// })
// newArray2.map((item, index) => {
//   if (index === 2) {
//     return item = 10
//   }
// })
// newArray3.map((item, index) => {
//   if (index === 2) {
//     return item = 2
//   }
// })
// partsPosArr = [...newArray1, newArray2, newArray3]
// newArray2.splice(2, 0, Math.sin(Math.random) * 5)
// newArray3.splice(2, 0, Math.sin(Math.random) * 5)

// const newArray1 = bufferGeometry.attributes.position.array.subarray(0, 3);
// const newArray2 = bufferGeometry.attributes.position.array.subarray(3, 6);
// const newArray3 = bufferGeometry.attributes.position.array.subarray(6, 6);
// xPositions.fromBufferAttribute(bufferGeometry.attributes.position, 3);
// console.log(xPositions);
// //x
// bufferGeometry.attributes.position.array[i3 + 0] = partsPosArr[i3 + 0];
// //z
// bufferGeometry.attributes.position.array[i3 + 2] =
//   bufferGeometry.attributes.position.array[i3 + 0] + 0.5;
//
// console.log(`newArray1 FIRST`, newArray1);
// //x => i3, i3 - 2
// newArray1.fill(
//   bufferGeometry.attributes.position.array[i3 + 0] + 1,
//   i3 - 1,
//   i3
// );
// newArray2.fill(
//   bufferGeometry.attributes.position.array[i3 + 0] + 2,
//   i3 - 1,
//   i3
// );
// newArray3.fill(
//   bufferGeometry.attributes.position.array[i3 + 0] + 3,
//   i3 - 1,
//   i3
// );

// console.log(`newArray1 SECOND`, newArray1);
// // newArray2.fill(2, 3, Math.sin(Math.random) * 5);
// // newArray3.fill(2, 0, Math.sin(Math.random) * 5);

// newArray3.fill(partsPosArr[i3 + 0] + 1, i3 - 1, i3);
// bufferGeometry.attributes.position.needsUpdate = true;
// // console.log(partsPosArr);
//    X
//partsPosArr.fill( partsPosArr[i3 + 0] + 0.01, i3, i3 + 1);

//    Y

///partsPosArr.fill(1, i3 + 1, i3 + 2);
//  partsPosArr.fill(1, i3 + 1, i3 + 2);
//    Z

// partsPosArr.fill(partsPosArr[i3 + 0] + 0.01, i3 + 2, i3 + 3);

// //   partsPosArr.fill(100, i3, i3 - 2);
// console.log(partsPosArr);

// // partsPosArr[i3 + 1] = 0; //y

// // partsPosColorArr[i] = THREE.MathUtils.randFloatSpread(10);

// bufferGeometry.setAttribute(
//   "position",
//   new THREE.BufferAttribute(partsPosArr, 3)
// );

// const newArray1 = partsPosArr.subarray(0, 10);
// const newArray2 = partsPosArr.subarray(10, 20);
// const newArray3 = partsPosArr.subarray(20, 30);

// newArray1.fill(newArray1[i3 + 0] + 1, i3, i3 + 1);
// newArray2.fill(newArray2[i3 + 0] + 1, i3, i3 + 1);
// newArray3.fill(newArray3[i3 + 0] + 1, i3, i3 + 1);

// newArray1.fill(newArray1[i3 + 1] + 1, i3 + 2, i3 + 3);
// newArray2.fill(newArray2[i3 + 1] + 1, i3 + 2, i3 + 3);
// newArray3.fill(newArray3[i3 + 1] + 1, i3 + 2, i3 + 3);
// bufferGeometry.attributes.position.needsUpdate = true;

// console.log(`partsPosArr`, partsPosArr);
// // console.log(`II`, newArray2);
// // console.log(`III`, newArray3);
// for (let j = 0; j < lengthOfBranch; j++) {
//   console.log(partsPosArr[i][j]);
// }

// partsPosArr[i3 + 0] = THREE.MathUtils.randFloat(0, -3); //x

//  partsPosArr[i3 + 0] = THREE.MathUtils.randFloatSpread(GParams.radius * 10); //x
console.log(3 * starNum - 1 / 2);
console.log(partsPosArr.length / numOfBranches);

// const newArray1 = partsPosArr.subarray(0, 15); // 5 vs
// const newArray2 = partsPosArr.subarray(15, 30); // 5 vs
// const newArray3 = partsPosArr.subarray(30, 60); // 10 vs
// const newArray4 = partsPosArr.subarray(60, 90); //10vs
// const newArray5 = partsPosArr.subarray(60, 70);
// const newArray6 = partsPosArr.subarray(80, 89);
//THREE.MathUtils.randFloat(-3, 0)
// newArray1.fill(THREE.MathUtils.randFloat(-2, 0), i3, i3 + 1);
// newArray2.fill(THREE.MathUtils.randFloat(0, 2), i3, i3 + 1);
// newArray3.fill(THREE.MathUtils.randFloat(-4, 0), i3, i3 + 1);
// newArray4.fill(THREE.MathUtils.randFloat(0, 4), i3, i3 + 1);

// newArray1.fill(newArray1[i3], i3 + 2, i3 + 3);
// newArray2.fill(newArray2[i3], i3 + 2, i3 + 3);
// newArray3.fill(-newArray3[i3], i3 + 2, i3 + 3);
// newArray4.fill(-newArray4[i3], i3 + 2, i3 + 3);

// console.log(newArray1.length);
// console.log(newArray2.length);
// console.log(newArray3.length);
// console.log(newArray4.length);

// newArray2.fill(1, i3, i3 + 1);
// newArray3.fill(1, i3, i3 + 1);

// console.log(`newArray1`, newArray1);
// console.log(`newArray2`, newArray2);
// console.log(`newArray3`, newArray3);

// partsPosArr[i3 + 1] = 0; //y
// if (partsPosArr[i3 + 0] > 0) {
//   partsPosArr[i3 + 2] = Math.sin(partsPosArr[i3 + 0]); //z
// } else {
//   partsPosArr[i3 + 2] = Math.sin(partsPosArr[i3 + 0]); //z
// }

//newArray3[i3] * Math.sin(newArray3[i3])
// newArray5.fill(THREE.MathUtils.randFloat(-2, 0), i3, i3 + 1);
// newArray6.fill(THREE.MathUtils.randFloat(2, 0), i3, i3 + 1);

// const newArray1 = partsPosArr.subarray(0, 30); // 10 vx
//const newArray2 = partsPosArr.subarray(30, 60); // 10 vx
// const newArray3 = partsPosArr.subarray(60, 90); // 10 vx

// newArray1.fill(THREE.MathUtils.randFloat(-4, 0), i3, i3 + 1);
// newArray2.fill(THREE.MathUtils.randFloat(0, 4), i3, i3 + 1);
//newArray3.fill(THREE.MathUtils.randFloat(-4, 0), i3, i3 + 1);

// newArray1.fill(newArray1[i3], i3 + 2, i3 + 3);
//newArray2.fill(newArray2[i3], i3 + 2, i3 + 3);
//newArray3.fill(-newArray3[i3], i3 + 2, i3 + 3);
