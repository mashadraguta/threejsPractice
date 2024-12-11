import * as THREE from "three";
import { camera, scene, renderer } from "./basics";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";
import { changeObjPos } from "./utils";


const axesHelper = new THREE.AxesHelper(2000);

const controls = new OrbitControls(camera, renderer.domElement);
const gui = new GUI();

renderer.shadowMap.enabled = true


/* 
  TEXTURES 
*/

const textureLoader = new THREE.TextureLoader()
const textureGhost = textureLoader.load(
  "textures/testTextures/SGroughness.png"
);

textureLoader.setPath('textures/haunted-house/')

const textureGrave = textureLoader.load(
  "grave/1.jpg"
);

textureLoader.setPath('textures/haunted-house/door/')

const TDoorColor = textureLoader.load(
  "color.jpg"
);
const TDoorAlpha = textureLoader.load(
  "alpha.jpg"
);
const TDoorAmbientOcclusion = textureLoader.load(
  "ambientOcclusion.jpg"
);
const TDoorHeight = textureLoader.load(
  "height.jpg"
);
const TDoorMetalness = textureLoader.load(
  "metalness.jpg"
);
const TDoorNormal = textureLoader.load(
  "normal.jpg"
);
const TDoorRoughness = textureLoader.load(
  "roughness.jpg"
);

textureLoader.setPath('textures/haunted-house/bricks/')

const TBrickAO = textureLoader.load('ambientOcclusion.jpg')
const TBrickColor = textureLoader.load('color.jpg')
const TBrickNormal = textureLoader.load('normal.jpg')
const TBrickRoughness = textureLoader.load('roughness.jpg')

textureLoader.setPath('textures/haunted-house/grass/')

const TGrassAO = textureLoader.load('ambientOcclusion.jpg')
const TGrassColor = textureLoader.load('color.jpg')
const TGrassNormal = textureLoader.load('normal.jpg')
const TGrassRoughness = textureLoader.load('roughness.jpg')



TGrassColor.wrapS = THREE.RepeatWrapping
TGrassNormal.wrapS = THREE.RepeatWrapping

TGrassColor.wrapT = THREE.RepeatWrapping
TGrassNormal.wrapT = THREE.RepeatWrapping


const number = 10
TGrassAO.repeat.set(number, number)
TGrassColor.repeat.set(number, number)

/* 
  GUI INIT PARAMS
*/

const initParams = {
  position: {
    x: 0,
    y: 2.5,
    z: 0,
  },
  scale: 1,
  rotateX: 0,
  rotateY: 0,
};
const initParamsMoon = {
  position: {
    x: -15,
    y: 13,
    z: 10,
  },
  intensity: .8
};
const initParamsFarol = {
  position: {
    x: -6.7,
    y: 1.5,
    z: 0,
  },
  intensity: .8

};


/* 
  LIGHTS
*/

const farolLight = new THREE.PointLight('#ff7d46', .5, 20);
const moonLight = new THREE.PointLight('#506886', .5);
const ambientLight = new THREE.AmbientLight('#506886', .2);

const farolLightHelper = new THREE.CameraHelper(farolLight.shadow.camera)
const moonLightHelper = new THREE.CameraHelper(moonLight.shadow.camera)



// farolLight.castShadow = true
// moonLight.castShadow = true



// farolLight.shadow.mapSize.width = 128
// farolLight.shadow.mapSize.height = 128
// farolLight.shadow.camera.near = 0.5; // default 0.5
// farolLight.shadow.camera.far = 5; // default 500

// moonLight.shadow.mapSize.width = 128
// moonLight.shadow.mapSize.height = 128
// moonLight.shadow.camera.near = 0.5; // default 0.5
// moonLight.shadow.camera.far = 50; // default 500

// scene.add(farolLightHelper)
// scene.add(moonLightHelper)

// console.log(farolLight);
// console.log(moonLight);


moonLight.position.set(
  initParamsMoon.position.x,
  initParamsMoon.position.y,
  initParamsMoon.position.z
);
farolLight.position.set(
  initParamsFarol.position.x,
  initParamsFarol.position.y,
  initParamsFarol.position.z
);


changeObjPos(moonLight, initParamsMoon, gui, 'moon light')
changeObjPos(farolLight, initParamsFarol, gui, 'farol light')

// GHOSTS

const ghost1Light = new THREE.PointLight('white', 0.3, 20)
const ghost2Light = new THREE.PointLight('white', 0.2, 20)
const ghost3Light = new THREE.PointLight('white', 0.5, 10)

ghost1Light.shadow.mapSize.width = 128
ghost1Light.shadow.mapSize.height = 128


ghost2Light.shadow.mapSize.width = 128
ghost2Light.shadow.mapSize.height = 128


ghost3Light.shadow.mapSize.width = 128
ghost3Light.shadow.mapSize.height = 128

ghost1Light.castShadow = true
ghost2Light.castShadow = true
ghost3Light.castShadow = true


const ghostShape1 = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3),
  new THREE.MeshStandardMaterial({
    map: textureGhost,
    transparent: true,
    opacity: 0.3,
  })
)

const ghostShape2 = new THREE.Mesh(
  new THREE.SphereGeometry(1, 16, 32),
  new THREE.MeshStandardMaterial({
    map: textureGhost,
    transparent: true,
    opacity: 0.4,
  })
)

const ghostShape3 = new THREE.Mesh(
  new THREE.OctahedronGeometry(2.5, 2),
  new THREE.MeshStandardMaterial({
    map: textureGhost,
    transparent: true,
    opacity: 0.7,
  })
)

const ghost1 = new THREE.Group()
const ghost2 = new THREE.Group()
const ghost3 = new THREE.Group()

ghost1.add(ghost1Light, ghostShape1)
ghost2.add(ghost2Light, ghostShape2)
ghost3.add(ghost3Light, ghostShape3)

ghost1.position.set(10, 10, 2)
ghost2.position.set(-25, 3, 5)
ghost3.position.set(-15, 7, 5)

scene.add(ghost1, ghost2, ghost3)

/* MATERIALS */

const wallMat = new THREE.MeshStandardMaterial({
  map: TBrickColor,
  aoMap: TBrickAO,
  normalMap: TBrickNormal,
  transparent: true,
});

const grassMat = new THREE.MeshStandardMaterial({
  map: TGrassColor,
  aoMap: TGrassAO,
  normalMap: TGrassNormal,
  transparent: true,
});

const doorMat = new THREE.MeshStandardMaterial({
  // map: TDoorColor,
  alphaMap: TDoorAlpha,
  color: '#543200',
  aoMap: TDoorAmbientOcclusion,
  displacementMap: TDoorHeight,
  displacementScale: 0.1,
  normalMap: TDoorNormal,
  opacity: 0.7,
  transparent: true
});

const roofMat = new THREE.MeshStandardMaterial({ color: '#148785' });
const bushMat = new THREE.MeshStandardMaterial({ color: '#ae9cff', transparent: true, opacity: 0.9 });

/* OBJECTS */
const hauntedHouse = new THREE.Group();
const walls = new THREE.Mesh(new THREE.BoxGeometry(7, 8, 7, 100, 100), wallMat);
const roof = new THREE.Mesh(new THREE.ConeGeometry(6, 5, 8), roofMat);
//const door = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 3.3, 16, 16), doorMat);
const bush = new THREE.Mesh(new THREE.ConeGeometry(.5, 5, 4), bushMat);


walls.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(walls.geometry.attributes.uv.array, 2)
)


walls.position.set(0, -.5, 0)
const bush1 = bush.clone()
const bush2 = bush.clone()
const bush3 = bush.clone()
const bush4 = bush.clone()


const bushes = new THREE.Group()

bush1.position.set(-4.5, -2, -2)
bush2.position.set(-4.5, -2, 2)
bush4.position.set(-4.5, -2, -3)
bush3.position.set(-4.5, -2, .5)
bush2.scale.set(1.75, 1.75, 1.75)
bush4.scale.set(1.5, 1.5, 1.5)
bush1.scale.set(1.5, 1.5, 1.5)

bushes.add(bush1, bush2, bush3, bush4)

const bushes2 = bushes.clone()
bushes2.castShadow = true
bushes2.rotateY(Math.PI * .5)
bushes2.scale.set(5, 5, 5)
bushes2.position.set(0, 0, 2)
roof.position.set(0, 5.1, 0);

const house = new THREE.Group()
house.rotateX(Math.PI * .05);
house.add(walls, roof)



/* GRAVES */

const graves = new THREE.Group()

const demoCircleBig = new THREE.Mesh(
  new THREE.CircleGeometry(40, 32),
  new THREE.MeshBasicMaterial({ wireframe: true })
)
const demoCircleSmall = new THREE.Mesh(
  new THREE.CircleGeometry(7, 32),
  new THREE.MeshBasicMaterial({ wireframe: true })
)

demoCircleBig.position.set(0, 1, 0)
demoCircleSmall.position.set(0, 1.2, 0)
demoCircleBig.rotateX(-Math.PI * 0.5)
demoCircleSmall.rotateX(-Math.PI * 0.5)
demoCircleBig.visible = false
demoCircleSmall.visible = false
demoCircleBig.geometry.computeBoundingSphere()
demoCircleSmall.geometry.computeBoundingSphere()


const graveGeom = new THREE.BoxGeometry(1, 3, 1.3)
const graveMat = new THREE.MeshStandardMaterial({ map: textureGrave })
const bigBoundingSphere = demoCircleBig.geometry.boundingSphere
const smallBoundingSphere = demoCircleSmall.geometry.boundingSphere


for (let i = 0; i <= 100; i++) {
  const goodPos = []
  const badPos = []

  const graveRandom = new THREE.Mesh(
    graveGeom,
    graveMat
  )
  graveRandom.castShadow = true
  graveRandom.position.set(
    THREE.MathUtils.randFloatSpread(100),
    -1.5,
    THREE.MathUtils.randFloatSpread(100)
  )

  if (bigBoundingSphere.containsPoint(graveRandom.position)
    && !smallBoundingSphere.containsPoint(graveRandom.position)) {
    goodPos.push(graveRandom)
  } else {
    badPos.push(graveRandom)
  }
  goodPos.forEach((mesh) => {
    mesh.rotateX(Math.PI * THREE.MathUtils.randFloatSpread(1000))
  })
  graves.add(...goodPos)

}

hauntedHouse.add(
  house,
  bushes,
  // bushes2,
  graves,
  farolLight,
  moonLight,
  ambientLight
);

hauntedHouse.position.set(
  initParams.position.x,
  initParams.position.y,
  initParams.position.z
);
hauntedHouse.rotateX(initParams.rotateX)
hauntedHouse.rotateY(initParams.rotateY)

// changeObjPos(hauntedHouse, initParams, gui, "group position");
// changeObjPos(roof, initParams, gui, "roof position");

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 100, 50, 50),
  grassMat
);
plane.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
)

plane.geometry.rotateX(-Math.PI * .5);

plane.receiveShadow = true
walls.castShadow = true

scene.add(plane);
scene.add(hauntedHouse);


const fog = new THREE.Fog(0x262837, 0, 50);
scene.fog = fog

walls.geometry.computeBoundingSphere()
const BShouse = walls.geometry.boundingSphere

console.log(BShouse);




const clock = new THREE.Clock()
function render(t) {
  const elapsedTime = clock.getElapsedTime()

  // moveGhost(ghost2, elapsedTime)

  ghost2.position.x = Math.sin(elapsedTime * .5) * 34
  ghost2.position.y = Math.tan(Math.cos(elapsedTime * .5)) * 3 + 5
  ghost2.position.z = Math.cos(elapsedTime * .5) * 34


  ghost1.position.x = Math.sin(elapsedTime * .5) * 25 + (10 + Math.sin(elapsedTime * .7) * 24)
  ghost1.position.y = Math.tan(Math.cos(elapsedTime * .5)) * 3 + 5
  ghost1.position.z = -Math.cos(elapsedTime * .5) * 25

  ghost3.position.x = Math.sin(elapsedTime * .5) * 25
  ghost3.position.y = Math.tan(Math.cos(elapsedTime * .5)) * 3
  ghost3.position.z = Math.sin(elapsedTime * .5) * 25 + (2 + Math.sin(elapsedTime * .7) * 24)

  camera.position.x = Math.sin(elapsedTime * .5) * 25
  camera.position.y = 5
  camera.position.z = Math.cos(elapsedTime * .5) * 15 + 2 + Math.sin(elapsedTime * .5) * 15
  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();


