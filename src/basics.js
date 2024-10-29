import * as THREE from "three";

import { RGBT } from "./objects";

const scene = new THREE.Scene();
scene.background = new THREE.Color("#e69138");

// window =~ viewport
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// console.log(e);
export { scene };
export { sizes };

const fieldOfView = 95;
const near = 0.4;
const far = 2000;
const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, near, far);

camera.position.set(5, 5, 2);
camera.lookAt(RGBT.position);
export { camera };

const canvas = document.querySelector("#webgl");
export { canvas };

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

export { renderer };
