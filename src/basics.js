import * as THREE from "three";

import { RGBT } from "./objects";

const scene = new THREE.Scene();
scene.background = new THREE.Color("#e69138");
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

camera.position.set(1, 1, 20);
camera.lookAt(RGBT.position);
export { camera };
