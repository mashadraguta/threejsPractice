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


// depth: 0.01,
// curveSegments: 1,
// bevelEnabled: true,
// bevelThickness: 0.1,
// bevelSize: 0.01,
// bevelOffset: 0,
// bevelSegments: 1



//  geometry.computeBoundingBox();
// geometry.translate(
//   - geometry.boundingBox.max.x * 0.5,
//   - geometry.boundingBox.min.y * 0.5,
//   - geometry.boundingBox.max.z * 0.5,
// )


// MSphere.rotation.x = 0.5 * elapsedTime;
// MPlane.rotation.x = 0.5 * -elapsedTime;
// MTorus.rotation.x = 0.5 * elapsedTime;
// MSphere.rotation.y = 0.5 * elapsedTime;
// MPlane.rotation.y = 0.5 * -elapsedTime;
// MTorus.rotation.y = 0.5 * elapsedTime;
// text.rotation.y = 0.5 * -elapsedTime;

// DONUTS PARTICLES 
//   console.time("rendering scene");

// const geometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
// const material = new THREE.MeshBasicMaterial({
//   map: matCapTexture2,
// });
// for (let i = 0; i < 1000; i++) {
//   const donut = new THREE.Mesh(geometry, material);
//   const randomValue = Math.max((Math.random() - 0.5) * 15, 1);
//   donut.rotateX((Math.random() - 0.5) * 100);
//   donut.rotateY((Math.random() - 0.5) * 100);
//   donut.position.set(
//     (Math.random() - 0.5) * 200,
//     (Math.random() - 0.5) * 100,
//     -(Math.random() - 0.5) * 100
//   );

//   donut.scale.set(randomValue, randomValue, randomValue);

//   scene.add(donut);
// }
// console.timeEnd("rendering scene");


// // POINT LIGHT CONTROLS
// const paramsPoint = lightParamsPoint.position
// pointLight.position.set(
//   paramsPoint.x,
//   paramsPoint.y,
//   paramsPoint.z
// );
// const pointLightFolder = gui.addFolder("POINT LIGHT")

// pointLightFolder.add(pointLight, "intensity").min(0.1).max(10).step(0.01);
// pointLightFolder.add(pointLight, "visible")
// pointLightFolder.add(lightParamsPoint.position, "x").onChange(() => {
//   pointLight.position.set(
//     paramsPoint.x,
//     paramsPoint.y,
//     paramsPoint.z
//   );
// });
// pointLightFolder.add(lightParamsPoint.position, "y").onChange(() => {
//   pointLight.position.set(
//     paramsPoint.x,
//     paramsPoint.y,
//     paramsPoint.z
//   );
// });
// pointLightFolder.add(lightParamsPoint.position, "z").onChange(() => {
//   pointLight.position.set(
//     paramsPoint.x,
//     paramsPoint.y,
//     paramsPoint.z
//   );
// });
// pointLightFolder.open()
// // DIRECTIONAL LIGHT CONTROLS
// const paramsDirectional = lightParamsDir.position
// directionalLight.position.set(
//   paramsDirectional.x,
//   paramsDirectional.y,
//   paramsDirectional.z
// );
// const directionalLightFolder = gui.addFolder("DIRECTIONAL LIGHT");
// directionalLightFolder.add(directionalLight, "intensity").min(0.1).max(10).step(0.01);
// directionalLightFolder.add(directionalLight, "visible")
// directionalLightFolder.add(lightParamsDir.position, "x").onChange(() => {
//   directionalLight.position.set(
//     paramsDirectional.x,
//     paramsDirectional.y,
//     paramsDirectional.z
//   );
// });
// directionalLightFolder.add(lightParamsDir.position, "y").onChange(() => {
//   directionalLight.position.set(
//     paramsDirectional.x,
//     paramsDirectional.y,
//     paramsDirectional.z
//   );
// });
// directionalLightFolder.add(lightParamsDir.position, "z").onChange(() => {
//   directionalLight.position.set(
//     paramsDirectional.x,
//     paramsDirectional.y,
//     paramsDirectional.z
//   );
// });
// directionalLightFolder.open()

// // SPOT LIGHT CONTROLS
// const paramsSpot = lightParamsSpot.position
// spotLight.position.set(
//   paramsSpot.x,
//   paramsSpot.y,
//   paramsSpot.z
// );
// const spotLightFolder = gui.addFolder("SPOT LIGHT");
// spotLightFolder.add(spotLight, "intensity").min(0.1).max(10).step(0.01);
// spotLightFolder.add(spotLight, "visible")

// spotLightFolder.add(lightParamsSpot.position, "x").onChange(() => {
//   spotLight.position.set(
//     paramsSpot.x,
//     paramsSpot.y,
//     paramsSpot.z
//   );
// });
// spotLightFolder.add(lightParamsSpot.position, "y").onChange(() => {
//   spotLight.position.set(
//     paramsSpot.x,
//     paramsSpot.y,
//     paramsSpot.z
//   );
// });
// spotLightFolder.add(lightParamsSpot.position, "z").onChange(() => {
//   spotLight.position.set(
//     paramsSpot.x,
//     paramsSpot.y,
//     paramsSpot.z
//   );
// });
// spotLightFolder.open()
// // RECT LIGHT CONTROLS
// const paramsRect = lightParamsRect.position
// rectLight.position.set(
//   paramsRect.x,
//   paramsRect.y,
//   paramsRect.z
// );
// const rectLightFolder = gui.addFolder("RECTANGULAR LIGHT");
// rectLightFolder.add(rectLight, "intensity").min(0.1).max(10).step(0.01);
// rectLightFolder.add(rectLight, "visible")

// rectLightFolder.add(paramsRect, "x").onChange(() => {
//   rectLight.position.set(
//     paramsRect.x,
//     paramsRect.y,
//     paramsRect.z
//   );
// });
// rectLightFolder.add(paramsRect, "y").onChange(() => {
//   rectLight.position.set(
//     paramsRect.x,
//     paramsRect.y,
//     paramsRect.z
//   );
// });
// rectLightFolder.add(paramsRect, "z").onChange(() => {
//   rectLight.position.set(
//     paramsRect.x,
//     paramsRect.y,
//     paramsRect.z
//   );
// });
// rectLightFolder.open()



/**
 * GUI CONTROLS
 */

// const params = {
//         color: "#ffffff",
//       };
//       gui.addFolder("Plane roughness");
//       gui.add(material, "roughness").min(0.01).max(1).step(0.01);
//       gui.add(material, "metalness").min(0.01).max(1).step(0.01);
//       gui.addColor(params, "color").onChange(() => {
//         material.color = new THREE.Color(params.color);
//       });


// window.addEventListener("dblclick", (e) => {
//         const fullscreenElement =
//           document.fullscreenElement || document.webkitFullscreenElement;
      
//         if (!fullscreenElement) {
//           if (canvas.requestFullscreen) {
//             canvas.requestFullscreen();
//           } else if (canvas.webkitRequestFullscreen) {
//             canvas.webkitRequestFullscreen();
//           }
//         } else {
//           if (document.exitFullscreen) {
//             document.exitFullscreen();
//           } else if (document.webkitExitFullscreen) {
//             document.webkitExitFullscreen();
//           }
//         }
//       });



// PARTICLES CHAPETER

/* MATERIALS */

// sphereM.depthTest = false
// sphereM2.depthTest = false
// sphereM.depthWrite = false;
// sphereM2.depthWrite = false
// THREE.NoBlending
// THREE.NormalBlending
// THREE.AdditiveBlending
// THREE.SubtractiveBlending
// THREE.MultiplyBlending
// THREE.CustomBlending

//scene.background = new THREE.Color("#f5deb3");
// sphereM2.blending = THREE.AdditiveBlending
// const littleSphere = new THREE.Points(sphereG, sphereM);
// const littleTorus = new THREE.Points(torusG, sphereM);
// const littleBox = new THREE.Points(boxGeo, sphereM);

// littleSphere.position.set(-10, 0, 0);
// littleTorus.position.set(0, 0, 0);
// littleBox.position.set(10, 0, 0);

// scene.add(littleSphere);
// scene.add(littleTorus);
// scene.add(littleBox);

// const sphereG = new THREE.SphereGeometry(2.5, 32, 32);
// const torusG = new THREE.TorusGeometry();
// const boxGeo = new THREE.BoxGeometry(5, 5, 5);

// const size = 10;
// const divisions = 10;
// scene.add(new THREE.GridHelper(10, 10));
// bufferGeom.computeVertexNormals()
// const vertHelper1 = new VertexNormalsHelper(newMeshRandom, 0.5, 0x00ff00);
// scene.add(vertHelper1);

// const newBuffGeomPos = bufferGeom.attributes.position.array.forEach((item, index) => {

//   if (index % 3 === 0 && index != 0) {
//     console.log(item[index]);

//     //return item += Math.sin(0.0001 * THREE.MathUtils.randFloatSpread(50)) * 2
//   }

// }
// )

// bufferGeom.setAttribute(
//   "position",
//   new THREE.BufferAttribute(newBuffGeomPos, 3)
// )

// const animateParticles = (elTime) => {
//         const newBuffGeomPos = bufferGeom.attributes.position.array.map(
//           (particle) =>
//             Math.sin(THREE.MathUtils.randFloatSpread(10)) *
//             THREE.MathUtils.randFloatSpread(10)
//         );
      
//         bufferGeom.setAttribute(
//           "position",
//           new THREE.BufferAttribute(newBuffGeomPos, 3)
//         );
//       };

/* BUFFER RANDOM GEOMETRY */

// const count = 20000;
// const bufferArrPos = new Float32Array(3 * count);
// const bufferArrColor = new Float32Array(3 * count);
// const bufferGeom = new THREE.BufferGeometry();

// for (let i = 0; i < 3 * count; i++) {
//   bufferArrPos[i] = THREE.MathUtils.randFloatSpread(10);
//   bufferArrColor[i] = Math.random();
//   bufferGeom.setAttribute(
//     "position",
//     new THREE.BufferAttribute(bufferArrPos, 3)
//   );
//   bufferGeom.setAttribute(
//     "color",
//     new THREE.BufferAttribute(bufferArrColor, 3)
//   );
// }

// const newMeshRandom = new THREE.Points(
//   bufferGeom,
//   new THREE.PointsMaterial({
//     alphaMap: mat5,
//     transparent: true,
//     vertexColors: true,
//     depthWrite: false,
//     size: 0.1,
//   })
// );


// scene.add(newMeshRandom);
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
// if (xPos1[i3]) {


//   xPos1.fill(Math.sin(xPos1[i3]) * -GParams.radius, i3 + 2, i3 + 3)
// }
// if (xPos2[i3]) {

//   xPos2.fill(Math.sin(xPos2[i3] * GParams.radius), i3 + 2, i3 + 3)
// }
// if (xPos3[i3]) {
//   xPos3.fill(-Math.sin(xPos3[i3] * GParams.radius), i3 + 2, i3 + 3)
// }


// // console.log(`PARTSPOSARR======>`, partsPosArr);
// console.log(` xPos1[i3]`, xPos1[i3]);
// function partition(arr, length) {
//   let rest = arr.length % length;
//   let size = Math.floor(arr.length / length);
//   let j = 0;
//   return Array.from({ length }, (_, i) =>
//     arr.slice(j, (j += size + (i < rest)))
//   );
// }
// function fibonacci(num) {
//   if (num < 2) {
//     return num;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }

// const material = new THREE.LineBasicMaterial({
//         color: 0x0000ff,
//       });
      
//       const points = [];
//       points.push(new THREE.Vector3(-5, 0, 0));
//       points.push(new THREE.Vector3(0, 0, 0));
//       points.push(new THREE.Vector3(5, 0, 0));
//       points.push(new THREE.Vector3(0, 0, 0));
//       points.push(new THREE.Vector3(0, 0, -5));
//       points.push(new THREE.Vector3(0, 0, 0));
//       points.push(new THREE.Vector3(0, 0, 5));
//       points.push(new THREE.Vector3(0, 0, 0));
//       points.push(new THREE.Vector3(1, 0, 5));
//       points.push(new THREE.Vector3(0, 0, 0));
//       points.push(new THREE.Vector3(2, 0, 5));
//       points.push(new THREE.Vector3(0, 0, 0));
//       points.push(new THREE.Vector3(3, 0, 5));
//       points.push(new THREE.Vector3(0, 0, 0));
//       points.push(new THREE.Vector3(4, 0, 5));
//       points.push(new THREE.Vector3(0, 0, 0));
//       points.push(new THREE.Vector3(5, 0, 5));
//       points.push(new THREE.Vector3(0, 0, 0));
//       points.push(new THREE.Vector3(6, 0, 5));
//       points.push(new THREE.Vector3(0, 0, 0));
//       points.push(new THREE.Vector3(7, 0, 5));
//       points.push(new THREE.Vector3(0, 0, 0));
//       points.push(new THREE.Vector3(8, 0, 5));
      
//       const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
//       const line = new THREE.Line(geometry, material);
//       //scene.add(line);


// PARTICLES POSITIONING
// HELPER CODE

// flower effect

// partsPosArr[i3] = Math.sin(branchAngle + spin * randomX) * radius
//     // partsPosArr[i3 + 1] = + Math.sin(partsPosArr[i3] + 1) * (Math.random() - .5)
//     partsPosArr[i3 + 1] = randomY
//     partsPosArr[i3 + 2] = Math.cos(branchAngle + spin * randomZ) * radius
// sin(branchAngle) and cos(branchAngle) are positive and negative values
// if we multiply by radius that was multiplied by Math.random,
// we will have a value between -n.abcdefgh ... n.abcdefgh


//blue
//  partsPosColorArr[i3] = 0.61
//  partsPosColorArr[i3 + 1] = 0.13
//  partsPosColorArr[i3 + 2] = 0.21
// const cubeFolder = gui.addFolder('cube control')

// cubeFolder.add(initParamsMesh, 'x').min(-10).max(10).onChange(() => {
//   mesh.position.set(initParamsMesh.x, initParamsMesh.y, initParamsMesh.z)
// })
// cubeFolder.add(initParamsMesh, 'y').min(-10).max(10).onChange(() => {
//   mesh.position.set(initParamsMesh.x, initParamsMesh.y, initParamsMesh.z)
// })
// cubeFolder.add(initParamsMesh, 'z').min(-10).max(10).onChange(() => {
//   mesh.position.set(initParamsMesh.x, initParamsMesh.y, initParamsMesh.z)
// })


// const initParamsMesh = {
//   x: .5,
//   y: 0,
//   z: .5
// }
// const mesh = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial()
// )


// mesh.position.set(.5, 0, .5)



// const mat1 = loader.load("1.png");
// const mat2 = loader.load("2.png");
// const mat3 = loader.load("3.png");
// const mat5 = loader.load("5.png");
// const mat6 = loader.load("6.png");
// const mat7 = loader.load("7.png");
// const mat8 = loader.load("8.png");
// const mat9 = loader.load("9.png");
// const mat10 = loader.load("10.png");
// const mat11 = loader.load("11.png");
// const mat12 = loader.load("12.png");
//const ambientLight = new THREE.PointLight("yellow", initParamsALight.intensity);
// ambientLight.position.set(
//   initParamsALight.position.x,
//   initParamsALight.position.y,
//   initParamsALight.position.z
// );
// //changeObjPos(ambientLight, initParamsALight, gui, "point Light");
// scene.add(ambientLight);
/* OBJECTS */

// const covrig = new THREE.Mesh(
//   new THREE.TorusGeometry(),
//   new THREE.MeshToonMaterial({
//     alphaMap: cartoonMat,
//     color: "green",
//   })
// );

// covrig.position.set(0, 2, 2);


//const gridHelper = new THREE.GridHelper(size, divisions);
//scene.add(gridHelper);


// stars.rotateY(Math.sin(elapsedTime / 1000))
//   for (let i = 0; i < GParams.count; i++) {
//     let i3 = i * 3;
//     let x = stars.geometry.attributes.position.array[i3 + 0];
//     stars.geometry.attributes.position.array[i3 + 1] = Math.sin(
//       elapsedTime - x
//     );
//     stars.geometry.attributes.position.needsUpdate = true;
//   }



// const RgbToCmyk = (R, G, B) => {
//       if ((R == 0) && (G == 0) && (B == 0)) {
//         return [0, 0, 0];
//       } else {
//         let calcR = 1 - (R / 255),
//           calcG = 1 - (G / 255),
//           calcB = 1 - (B / 255);
    
//         let K = Math.min(calcR, Math.min(calcG, calcB)),
//           C = (calcR - K) / (1 - K),
//           M = (calcG - K) / (1 - K),
//           Y = (calcB - K) / (1 - K);
    
//         return [C, M, Y, K];
//       }
//     }

//i t's simply a case of dividing your RGB value
// rgbValue / 255 -> num from 0 ... 1


// let x = partsPosArr[i3]
    // let z = partsPosArr[i3 + 2]

    // if (x < .5 &&
    //   x > -.5 &&
    //   z < .5
    //   && z > -.5) {
    //   partsPosColorArr[i3] = palette.middle[0] / 255
    //   partsPosColorArr[i3 + 1] = palette.middle[1] / 255
    //   partsPosColorArr[i3 + 2] = palette.middle[2] / 255
    // } else {
    //   partsPosColorArr[i3] = palette.border[0] / 255
    //   partsPosColorArr[i3 + 1] = palette.border[1] / 255
    //   partsPosColorArr[i3 + 2] = palette.border[2] / 255
    // }


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
