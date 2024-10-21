/* * {
        /* background-color: red; */
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   } */

function animate(t) {
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
}
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
