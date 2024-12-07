import * as THREE from "three";
import { camera, scene, renderer } from "./basics";
import {

  DEMOBOX1,
  DEMOBOX2,
  DEMOBOX3,
  DEMOBOX4,
} from "./objects";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";
import { changeObjPos } from "./utils";

const axesHelper = new THREE.AxesHelper(2000);

const controls = new OrbitControls(camera, renderer.domElement);
const gui = new GUI();

renderer.shadowMap.enabled = true

const textureLoader = new THREE.TextureLoader()
const textureGhost = textureLoader.load(
  "textures/testTextures/SGroughness.png"
);
textureLoader.setPath('textures/haunted-house/')
const textureWall = textureLoader.load(
  "bricks/color.jpg"
);
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


TGrassAO.wrapS = THREE.RepeatWrapping
TGrassColor.wrapS = THREE.RepeatWrapping
TGrassNormal.wrapS = THREE.RepeatWrapping
TGrassRoughness.wrapS = THREE.RepeatWrapping


TGrassAO.wrapT = THREE.RepeatWrapping
TGrassColor.wrapT = THREE.RepeatWrapping
TGrassNormal.wrapT = THREE.RepeatWrapping
TGrassRoughness.wrapT = THREE.RepeatWrapping



const number = 10
TGrassAO.repeat.set(number, number)
TGrassColor.repeat.set(number, number)
TGrassNormal.repeat.set(number, number)
TGrassRoughness.repeat.set(number, number)

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
const farolLight = new THREE.PointLight('#ff7d46', .5, 20);
const moonLight = new THREE.DirectionalLight('#506886', .5);
const ambientLight = new THREE.AmbientLight('#506886', .2);

const farolLightHelper = new THREE.PointLightHelper(farolLight)
const moonLightHelper = new THREE.PointLightHelper(moonLight)
scene.add(moonLightHelper)
// scene.add(farolLightHelper)

farolLight.castShadow = true
moonLight.castShadow = true
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
scene.add(ambientLight, moonLight)
changeObjPos(moonLight, initParamsMoon, gui, 'moon light')
changeObjPos(farolLight, initParamsFarol, gui, 'farol light')

// GHOST STORY

const ghost1Light = new THREE.PointLight('#9ca5e1', 2, 10)
const ghost1LightHelper = new THREE.PointLightHelper(ghost1Light)

const ghost2Light = new THREE.PointLight('green', 2, 15)
const ghost2LightHelper = new THREE.PointLightHelper(ghost2Light)


// ghost2Light.position.set(20, 10, 4)


const ghostShape1 = new THREE.Mesh(
  // new THREE.CapsuleGeometry(1, 1, 4, 8),   ???
  new THREE.BoxGeometry(3, 3),
  new THREE.MeshStandardMaterial({
    map: textureGhost,
    transparent: true,
    color: 'red',
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

const ghost1 = new THREE.Group()
const ghost2 = new THREE.Group()
ghost1.add(ghost1Light, ghostShape1)
ghost2.add(ghost2Light, ghostShape2)
ghost1.position.set(10, 10, 2)
ghost2.position.set(-25, 3, 5)


scene.add(ghost1, ghost2)



//0x506886
const fog = new THREE.Fog(0x262837, 0, 50);
console.log(`FOG =======>`, fog);

scene.fog = fog

//scene.fog = new THREE.FogExp2(0x506886, 0.05);



const wallMat = new THREE.MeshStandardMaterial({
  map: TBrickColor,
  aoMap: TBrickAO,
  normalMap: TBrickNormal,
  roughnessMap: TBrickRoughness,
  transparent: true,
});
const grassMat = new THREE.MeshStandardMaterial({
  map: TGrassColor,
  aoMap: TGrassAO,
  normalMap: TGrassNormal,
  roughnessMap: TGrassRoughness,
  transparent: true,
});


const doorMat = new THREE.MeshStandardMaterial({
  map: TDoorColor,
  alphaMap: TDoorAlpha,
  aoMap: TDoorAmbientOcclusion,
  displacementMap: TDoorHeight,
  displacementScale: 0.1,
  normalMap: TDoorNormal,
  metalnessMap: TDoorMetalness,
  roughnessMap: TDoorRoughness,
  transparent: true
});
const roofMat = new THREE.MeshStandardMaterial({ color: '#148785' });
const bushMat = new THREE.MeshStandardMaterial({ color: '#148731' });

const hauntedHouse = new THREE.Group();
const walls = new THREE.Mesh(new THREE.BoxGeometry(10, 5, 10, 100, 100), wallMat);
const roof = new THREE.Mesh(new THREE.ConeGeometry(8, 2.5, 4), roofMat);
const door = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 3.3, 16, 16), doorMat);
const bush = new THREE.Mesh(new THREE.SphereGeometry(.5, 16, 32), bushMat);

door.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(door.geometry.attributes.uv.array, 2)
)
walls.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(walls.geometry.attributes.uv.array, 2)
)


const bush1 = bush.clone()
const bush2 = bush.clone()
const bush3 = bush.clone()
const bush4 = bush.clone()


bush1.position.set(-5.5, -2, 4)
bush2.position.set(-5.5, -2, -3)
bush4.position.set(-5.5, -2, -4)
bush3.position.set(-5.5, -2, 2.5)

bush2.scale.set(1.75, 1.75, 1.75)
bush4.scale.set(2.5, 2.5, 2.5)
bush1.scale.set(2.5, 2.5, 2.5)



roof.rotateY(Math.PI * .25);
roof.position.set(0, 3.5, 0);

door.rotateY(-Math.PI * .5);
door.position.set(-5.1, -1, 0);


// GRAVES

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

scene.add(demoCircleBig)
scene.add(demoCircleSmall)
const graveGeom = new THREE.BoxGeometry(1, 3, 1.3)
const graveMat = new THREE.MeshStandardMaterial({ map: textureGrave })

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

  const bigBoundingSphere = demoCircleBig.geometry.boundingSphere
  const smallBoundingSphere = demoCircleSmall.geometry.boundingSphere
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
  walls, roof, door,
  bush1, bush2, bush3, bush4,
  graves,
  farolLight
);

hauntedHouse.position.set(
  initParams.position.x,
  initParams.position.y,
  initParams.position.z
);
hauntedHouse.rotateX(initParams.rotateX)
hauntedHouse.rotateY(initParams.rotateY)
changeObjPos(hauntedHouse, initParams, gui, "group position");
changeObjPos(roof, initParams, gui, "roof position");
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
roof.castShadow = true
walls.castShadow = true
hauntedHouse.castShadow = true
scene.add(axesHelper);
scene.add(plane);
scene.add(moonLight);
scene.add(hauntedHouse);



window.addEventListener("resize", (e) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const clock = new THREE.Clock();
function render(t) {
  const elapsedTime = clock.getElapsedTime();
  ghost1.position.x = Math.sin(elapsedTime) * 10
  ghost1.position.z = Math.cos(elapsedTime) * 10
  ghost2.position.x -= Math.sin(elapsedTime) * .3
  // ghost2.position.x = Math.sin(elapsedTime) * 5
  // ghost2.position.z = -Math.cos(elapsedTime) * 5
  farolLightHelper.update()
  moonLightHelper.update()
  controls.update();
  window.requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();


