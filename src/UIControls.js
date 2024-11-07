import * as THREE from "three";
import { GUI } from "dat.gui";
import { camera, scene } from "./basics";
import { RGBT } from "./objects.js";
import gsap from "gsap";
const gui = new GUI();
// ADDING OBJS TO THE SCENE
const cameraFolder = gui.addFolder("Camera");
cameraFolder.add(camera.position, "z", 0, 10);
cameraFolder.open();

scene.add(RGBT);
const RGBTFolder = gui.addFolder("CONES");
RGBTFolder.add(RGBT, "visible");

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
let cubeMaterial = new THREE.MeshBasicMaterial({
  wireframe: true,
  color: "green",
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.set(1, 1, 1);
cube.visible = true;
scene.add(cube);
const params = {
  meshColor: "#0056ff",
  rotate: () => {
    gsap.to(cube.rotation, { x: Math.PI * 20, y: 0, duration: 20 });
  },
};

//https://jsfiddle.net/ikatyang/182ztwao/

const cubeFolder = gui.addFolder("CUBE");
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
cubeFolder.open();

export { gui };
export { params };
