/* * {
        /* background-color: red; */
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   } */

//function animate(t) {
//Move sphere left and right
// sphere.position.x = Math.sin(t / 900) * 250;
// sphere.position.z = Math.sin(t / 700) * 550;
// sphere.position.y = Math.sin(t / 700) * 550;
// whiteBox.position.x = Math.sin(t / 700) * 150;
// whiteBox.position.x = 300;
// whiteBox.position.y = 200;
// whiteBox.position.z = Math.sin(t / 1000) * 350;
// whiteBox.position.x = Math.sin(t / 1000) * 350;
//whiteBox.position.y = Math.sin(t / 1000) * 350;
// blackBox.position.x = Math.sin(t / 900) * 100
// blackBox.position.y = 500
//blackBox.position.z -= Math.sin(t / 1000) * 150;
//console.log(`TIME======>`, t)
//cone.rotateX((Math.sin(t / 800000) * 20))
//cone.position.z = 0
// cone.position.x = Math.sin(t / 500) * 200
//cone.position.x += 2
// cone.position.y -= Math.sin(t / 300) * 25;
//cone.position.z += 1
//cone.position.x = 700 * Math.cos(90);
//	cone.position.y = 700 * Math.cos(180);
//cone.position.z = Math.sin(t / 1000) * 50;
//console.log(`time======>`, t)
// blackBox.position.y -= Math.sin(t / 70);
// whiteBox.position.z += 0.1
//renderer automatically clears unless autoClear = false
// renderer.render(scene, camera);
//window.requestAnimationFrame(animate, renderer.domElement);
//}
//camera.lookAt(-100, 1200, -10000);

// console.group(`cone`);
// console.log(`cone`, cone);
// console.groupEnd();

// console.log(`cone`, cone)
// console.groupEnd()

//animate(new Date().getTime());

// console.group(`position.length()`)
// console.log(`whiteBox `, whiteBox.position.length())
// console.log(`sphere `, sphere.position.length())
// console.log(`blackBox `, blackBox.position.length())
// console.groupEnd()

// console.group(`distanceTo(camera.position)`)
// console.log(`whiteBox `, whiteBox.position.distanceTo(camera.position))
// console.log(`sphere `, sphere.position.distanceTo(camera.position))
// console.log(`blackBox `, blackBox.position.distanceTo(camera.position))
// console.groupEnd()

// console.group(`normalize()`)
// console.log(`whiteBox `, whiteBox.position.normalize())
// console.log(`sphere `, sphere.position.normalize())
// console.log(`blackBox `, blackBox.position.normalize())
// console.groupEnd()

// blackBox.position.x = 100;
// blackBox.position.y = Math.sin(t / 800) * 100;
// blackBox.position.z += 0.1;
// blackBox.position.y = Math.sin(t / 700) * 200;
// blackBox.position.y -= Math.sin(t / 700);

// la fiesta sigue
// whiteBox.position.y -= Math.sin(t / 70);
// whiteBox.position.y -= Math.sin(t / 70);
// blackBox.position.y -= Math.sin(t / 70);
// blackBox.position.y -= Math.sin(t / 70);
// cone.position.y -= Math.sin(t / 70);

// creating object and give it dimensions and color

//document.body.appendChild(renderer.domElement);

// const emptyCubWireframe = new THREE.BoxGeometry(50, 50, 50);
// const emptyCubMaterial = new THREE.MeshBasicMaterial({
//   color: "black",
//   wireframe: true,
// });
// const blackBox = new THREE.Mesh(emptyCubWireframe, emptyCubMaterial);

// const cubeMaterial = new THREE.MeshBasicMaterial({
//   color: "white",
//   wireframe: true,
// });
// const cubWireframe = new THREE.BoxGeometry(30, 30, 30);
// const whiteBox = new THREE.Mesh(cubWireframe, cubeMaterial);

// const sphereMaterial = new THREE.MeshNormalMaterial();
// const sphere = new THREE.Mesh(
//   new THREE.SphereGeometry(100, 20, 20),
//   sphereMaterial
// );

// const referencePointWireframe = new THREE.SphereGeometry(20, 10, 15);
// const referenceMaterial = new THREE.MeshBasicMaterial({ color: "black" });
// const referencePoint = new THREE.Mesh(
//   referencePointWireframe,
//   referenceMaterial
// );

// const geometry = new THREE.BufferGeometry();
// const vertices = [];

// for (let i = 0; i < 10000; i++) {

// 	vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
// 	vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
// 	vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z

// }

// geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 2));

// const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x888888 }));

// const axesHelper = new THREE.AxesHelper(2000);
// axesHelper.setColors("red", "yellow", "blue");

// const coneWireframe = new THREE.ConeGeometry(60, 260, 32, 1, false, 30, 30);
// const coneMaterial = new THREE.MeshBasicMaterial({
//   color: "green",
//   wireframe: true,
// });
// const cone = new THREE.Mesh(coneWireframe, coneMaterial);
// testing 2 github accounts
//cone.up = new THREE.Vector3(0, 1, 0);

// cone.rotateX(3)

// referencePoint.position.x = 0;
// referencePoint.position.y = 0;
// referencePoint.position.z = 0;

// const bufferForm = new THREE.BufferGeometry();

// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
// const vertices = new Float32Array([
//   -1.0,
//   -1.0,
//   1.0, // v0
//   1.0,
//   -1.0,
//   1.0, // v1
//   1.0,
//   1.0,
//   1.0, // v2

//   1.0,
//   1.0,
//   1.0, // v3
//   -1.0,
//   1.0,
//   1.0, // v4
//   -1.0,
//   -1.0,
//   1.0, // v5
// ]);

// itemSize = 3 because there are 3 values (components) per vertex
// bufferForm.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
// const material = new THREE.MeshBasicMaterial({ color: "red" });
// const bufferFormMesh = new THREE.Mesh(bufferForm, material);
// bufferFormMesh.scale.set(3.5, 3.5, 3.5);

// whiteBox.position.x = 500;
// whiteBox.position.y = 400;
// whiteBox.position.z = 6;
// whiteBox.scale.set(10, 10, 10);

// sphere.position.x = 300;
// sphere.position.y = 30;
// sphere.position.z = 5;

// cone.position.x = -30;
// cone.position.y = 450;
// cone.position.z = 0;
//cone.translate(3, 3, 4)
// cone.scale.set(2, 2, 2);

// blackBox.position.x = 300;
// blackBox.position.y = 300;
// blackBox.position.z = 3;
// blackBox.scale.set(2, 2, 2);

// scene.add(axesHelper);
// scene.add(sphere);
// scene.add(whiteBox);
//scene.add(blackBox);
// scene.add(cone);
//scene.add(referencePoint);
// scene.add(bufferFormMesh);
//scene.add(particles);

// left —>   -X
// right —>  X
// top —> Y
// bottom —> -Y
// near — Camera frustum near plane.
// far — Camera frustum far plane.

//TRYING TO UNDERSTAND

// RGBT.position.x = Math.sin(elapsedTime) * 20;
// RGBT.position.y = Math.cos(elapsedTime) * 20;
// gsap.to(cube.rotation, { x: Math.PI * 20, y: 0, duration: 20 });

// Adding OBJS to the SCENE
//scene.add(referencePoint);
// ???
// for ortographic camera
// const viewSize = 900;
// const aspectRatio = sizes.width / sizes.height;

// window.addEventListener("mousemove", (e) => {
//   //console.log(`e.clientY`, e.clientY);

//   if (e.clientX > 1000) {
//     return;
//   } else if (e.clientY < 50) {
//     return;
//   } else if (e.clientY > 600) {
//     return;
//   } else if (e.clientX < 200) {
//     return;
//   } else {
//     camera.lookAt(-e.clientX * 2, e.clientY * 2, 50);
//   }
//   // if (e.x && e.clientY > 1000)  return;
//   // camera.lookAt(e.x * 2, e.clientY * 2, 30);
// });

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.addEventListener("change", function (e) {
//   console.log(e);
//   renderer.render(scene, camera);
// });
// controls.enableZoom = true;

// const camera = new THREE.OrthographicCamera(
//   -window.innerWidth,
//   window.innerWidth,
//   window.innerHeight,
//   -window.innerHeight,
//   1,
//   1000
// );
// PREV
// camera.position.x = 7;
// camera.position.y = 6;
// camera.position.z = 20;

// ORTHOGRAPHIC CAMERA
// render a CUBE without distorsion on X
// const camera = new THREE.OrthographicCamera(
//   -aspectRatio,
//   aspectRatio,
//   1,
//   -1,
//   0.1,
//   1000
// );

//const elapsedTime = clock.getElapsedTime();
// console.log(elapsedTime);
//camera.position.set(-Math.sin(cursor.x) * 5, Math.sin(cursor.y) * 5, 10);

// camera.position.set(
//   10,
//   Math.sin(cursor.y) * 10,
//   Math.sin(cursor.x * Math.PI) * 10
// );
// console.log(`elapsedTime======>`, elapsedTime);
// RGBT.position.x = Math.sin(elapsedTime) * 20;
// RGBT.position.y = Math.cos(elapsedTime) * 20;
// RGBT.position.z = Math.sin (elapsedTime) * 20;
// camera.position.set(
//   Math.sin(cursor.x * 10) * 2,
//   cursor.y * 10,
//   -Math.cos(cursor.x * 5) * 2 * Math.PI
// );
// (camera.position.x = Math.sin(cursor.x * 10) * 10),
//   (camera.position.y = Math.sin(cursor.x * 10) * 10),
//   (camera.position.z = Math.cos(cursor.x * 10) * 10),
// mine

// console.group();

// console.log(`MATH.SIN(ELAPSEDTIME) X`, Math.sin(elapsedTime) * 2 * Math.PI);
// console.log(`MATH.COS(ELAPSEDTIME) Z`, Math.cos(elapsedTime) * 2 * Math.PI);
// console.log(`CURSOR.X`, cursor.x);
// console.log(`CURSOR.Y`, cursor.y);

// console.groupEnd();
//console.log(`CURSOR.X`, Math.sin(cursor.x) * Math.PI * 10);
// console.log(`CURSOR.Y`, cursor.y);

// camera.position.set(
//   Math.sin(cursor.x * Math.PI * 2) * 10,
//   cursor.y * 10,
//   -Math.cos(cursor.x * Math.PI * 2) * 10
// );
// camera.lookAt(0, 0, 0);

// 26/10/24 TODO
// setup webpack to recognize three-addons
// https://discourse.threejs.org/t/how-to-use-addons-in-threejs/57514
// https://stackoverflow.com/questions/73062236/three-js-three-nodes-showing-module-not-found-error
// three/addons/controls/[].js
// three/examples/jsm/controls/[].js

// DRAG CONTROLS
//const controls = new DragControls([cube, RGBT], camera, renderer.domElement);
// controls.addEventListener("dragstart", function (event) {
//   console.log(event.cube);

//   renderer.render(scene, camera);
// });

// controls.addEventListener("dragend", function (event) {
//   renderer.render(scene, camera);
// });
// controls.rotateSpeed = 2;

// prevent from perf issues on devices with high pixel ratio

// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// SQUARES
// let squares = [];
// for (let i = 0; i < 100; i++) {
//   const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
//   const cubeMaterial = new THREE.MeshNormalMaterial();
//   const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//   squares.push(cube);
//   cube.position.set(0, 0, 0);
// }
// console.log(squares);

// squares.map((square, i) => {
//   console.log(square);
//   square.position.set(
//     Math.random() * 10,
//     Math.random() * 10,
//     Math.random() * 100
//   );
//   scene.add(square);
// });
// const cursor = {
//   x: 0,
//   y: 0,
// };
// const controls = new DragControls(squares, camera, renderer.domElement);
// window.addEventListener("mousemove", (e) => {
//   cursor.x = e.clientX / sizes.width - 0.5;
//   cursor.y = e.clientY / sizes.height - 0.5;
// });
// controls.enableZoom = true;




// DOCS FOR CREATING A SQUARE
// prettier-ignore
// const geometry = new THREE.BufferGeometry();

// // prettier-ignore
// const vertices = new Float32Array( [
//   -1.0, -1.0,  1.0, // v0
//    1.0, -1.0,  1.0, // v1
//    1.0,  1.0,  1.0, // v2
//   -1.0,  1.0,  1.0, // v3
// ] );
// geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

// const indices = [0, 1, 2, 2, 3, 0];

// geometry.setIndex(indices);
// geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);




// const numberOfSquares = 4
// const squareGeometryBuffer = new THREE.BufferGeometry();
// for (let i = 0; i <= 10; i++) {
//   // prettier-ignore
//   const positionsOfSquares = new Float32Array(
//   [  
//     -i, -i -5,  Math.random() * 10, // v0
//    i, -i,  Math.random() * 10, // v1
//    i,  i,  Math.random() * 10, // v2
//   -i,  i,  Math.random() * 10, // v3

//     -i, -i +5,  Math.random() * 10, // v0
//    i, -i,  Math.random() * 10, // v1
//    i,  i,  Math.random() * 10, // v2
//   -i,  i,  Math.random() * 10, // v3

//     -i, -i,  Math.random() * 10, // v0
//    i, -i,  Math.random() * 10, // v1
//    i,  i,  Math.random() * 10, // v2
//   -i,  i,  Math.random() * 10, // v3

//     -i, -i,  Math.random() * 10, // v0
//    i, -i,  Math.random() * 10, // v1
//    i,  i,  Math.random() * 10, // v2
//   -i,  i,  Math.random() * 10, // v3
//   ]
//   );
//   squareGeometryBuffer.setAttribute(
//     "position",
//     new THREE.BufferAttribute(positionsOfSquares, 3)
//   );

//   const squareMaterial = new THREE.MeshBasicMaterial({
//     wireframe: true,
//   });

//   const squareMesh = new THREE.Mesh(squareGeometryBuffer, squareMaterial);

//   scene.add(squareMesh);
// }



// const points = [];
// points.push(new THREE.Vector3(-5, 0, 5));
// points.push(new THREE.Vector3(5, 0, 0));
// points.push(new THREE.Vector3(4, 0, 4));
// points.push(new THREE.Vector3(-5, 0, 5));
// let geometry = new THREE.BufferGeometry().setFromPoints(points);
// let line = new THREE.Line(
//   geometry,
//   new THREE.LineBasicMaterial({ color: 0x888888 })
// );
// scene.add(line);






//  BUNCH OF ARRAYS
// const count = 10

// const positions = new Float32Array(count * 3 * 5);

// // numberOfDesiredObjs * numberOfCoordsXY[Z] * numberOfVertices[PointsInSpace]
// for (let i = 0; i <= count * 3 * 5; i++) {
//   positions[i] = (Math.random() - 0.5) * 4;
// }

// const triangleGeometryBuffer = new THREE.BufferGeometry();

// // prettier-ignore

// triangleGeometryBuffer.setAttribute(
// "position",
// new THREE.BufferAttribute(positions , 3)
// );

// const triangleMaterial = new THREE.MeshBasicMaterial({
//   wireframe: true,
// });

// const triangleMesh = new THREE.Mesh(triangleGeometryBuffer, triangleMaterial);

// scene.add(triangleMesh);


//this function should push meshes in the torusArray
//this function should add last element and remove the previous one
//this function should mantain the array at length 2 or 3

//const meshMaterial = new THREE.MeshNormalMaterial({});
//meshMaterial.side = THREE.DoubleSide;

// torusKnot = THREE.SceneUtils.createMultiMaterialObject(geometry, [
//   meshMaterial,
// ]);


//import { SceneUtils } from "three/examples/jsm/utils/SceneUtils.js";

//
// const sphere2 = new THREE.Mesh(geometry, material2);
// const sphere3 = new THREE.Mesh(geometry, material3);

// const material2 = new THREE.MeshBasicMaterial({
//   map: texture2,
//   texture2,
// });
// const material3 = new THREE.MeshBasicMaterial({
//   map: texture3,
//   texture2,
// });
// sphere2.position.set(1, -1, 1);
// sphere3.position.set(-1, 1, 1);
// scene.add(sphere2);
// scene.add(sphere3);

// const texture2 = loader.load("textures/SGambientOcclusion.png");
// const texture3 = loader.load("textures/SGheight.png");
// const texture4 = loader.load("textures/SGmetallic.png");
// const texture5 = loader.load("textures/SGnormal.png");



// TEXTURES 


// const manager = new THREE.LoadingManager();
// //1
// manager.onStart = function (url, itemsLoaded, itemsTotal) {
//   console.log(
//     "Started loading file: " +
//       url +
//       ".\nLoaded " +
//       itemsLoaded +
//       " of " +
//       itemsTotal +
//       " files."
//   );
// };
// //2
// manager.onLoad = function () {
//   console.log("Loading complete!");
// };
// //3
// manager.onProgress = function (url, itemsLoaded, itemsTotal) {
//   console.log(
//     "Loading file: " +
//       url +
//       ".\nLoaded " +
//       itemsLoaded +
//       " of " +
//       itemsTotal +
//       " files."
//   );
// };
// //4
// manager.onError = function (url) {
//   console.log("There was an error loading " + url);
// };

// const loader = new THREE.TextureLoader(manager);
// const texture1 = loader.load("textures/earth.jpg");
// //texture1.generateMipmaps = false;
// texture1.magFilter = THREE.NearestFilter;
// texture1.transparency;
// const geometry = new THREE.SphereGeometry(3, 32, 16);
// const material1 = new THREE.MeshBasicMaterial({
//   map: { texture: texture1, transparency: 1 },
// });

// const textureCube = loader.load("textures/dino2.png");
// const textureCubeAlpha = loader.load("textures/SGopacity.png");
// textureCubeAlpha.transparency = "white";
// textureCube.magFilter = THREE.NearestFilter;
// const cubeMaterial = new THREE.MeshBasicMaterial({
//   // map: textureCube,
//   alphaMap: textureCube,
//   transparent: true,
// });
// const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);

// const cubeObj = new THREE.Mesh(cubeGeometry, cubeMaterial);


// const texture = new THREE.TextureLoader().load("textures/earth.jpg");

// MTorusMat.map = texture;
// texture.transparent = 0.1;
// const envTexture = new THREE.CubeTextureLoader().load([
//   "textures/SanFrancisco3/posx.jpg",
//   "textures/SanFrancisco3/negx.jpg",
//   "textures/SanFrancisco3/posy.jpg",
//   "textures/SanFrancisco3/negy.jpg",
//   "textures/SanFrancisco3/posz.jpg",
//   "textures/SanFrancisco3/negz.jpg",
// ]);
// envTexture.mapping = THREE.CubeRefractionMapping;
// MTorusMat.envMap = envTexture;


// MATERIAL AND GENERATING POINTS
// const vertices = [];

// for (let i = 0; i < 10000; i++) {
//   const x = THREE.MathUtils.randFloatSpread(200);
//   const y = THREE.MathUtils.randFloatSpread(200);
//   const z = THREE.MathUtils.randFloatSpread(200);

//   vertices.push(x, y, z);
// }

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute(
//   "position",
//   new THREE.Float32BufferAttribute(vertices, 3)
// );
// const material = new THREE.PointsMaterial({
//   color: 0x888888,
// });
// const points = new THREE.Points(geometry, material);
// scene.add(points);