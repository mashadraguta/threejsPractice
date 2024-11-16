import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color("black");
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
const posX = -10;
const posY = -10;
const posZ = 10;
pointLight.position.set(posX, posY, posZ);
scene.add(pointLight);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);

scene.add(ambientLight);
const vertices = [];

for (let i = 0; i < 10000; i++) {
  const x = THREE.MathUtils.randFloatSpread(2000);
  const y = THREE.MathUtils.randFloatSpread(2000);
  const z = THREE.MathUtils.randFloatSpread(2000);

  vertices.push(x, y, z);
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(vertices, 3)
);
const material = new THREE.PointsMaterial({
  color: 0x888888,
});
const points = new THREE.Points(geometry, material);
scene.add(points);
// scene.background = new THREE.CubeTextureLoader()
//   .setPath("textures/starry-night/")
//   .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);

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

camera.position.set(0, 0, 10);

export { camera };

const canvas = document.querySelector("#webgl");
export { canvas };

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

export { renderer };
