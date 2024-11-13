import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color("black");
// scene.background = new THREE.CubeTextureLoader()
//   .setPath("textures/Stairs/")
//   .load([
//     "posx.jpg",
//     "negx.jpg",
//     "posy.jpg",
//     "negy.jpg",
//     "posz.jpg",
//     "negz.jpg",
//   ]);

// window =~ viewport
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export { scene };
export { sizes };

const fieldOfView = 95;
const near = 0.4;
const far = 2000;
const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, near, far);

camera.position.set(0, 0, 5);

export { camera };

const canvas = document.querySelector("#webgl");
export { canvas };

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

export { renderer };
