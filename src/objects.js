import * as THREE from "three";
import { GUI } from "dat.gui";
import { scene } from "./basics";
const axesHelper = new THREE.AxesHelper(2000);
axesHelper.setColors("green", "purple", "blue");
export { axesHelper };

const referencePointWireframe = new THREE.SphereGeometry(0.5);

const referenceMaterial = new THREE.MeshBasicMaterial({ color: "black" });
const referencePoint = new THREE.Mesh(
  referencePointWireframe,
  referenceMaterial
);
referencePoint.position.x = 0;
referencePoint.position.y = 0;
referencePoint.position.z = 0;

export { referencePointWireframe };

const pyramidGeom = new THREE.ConeGeometry(3, 16, 16);
const pyramidMatR = new THREE.MeshBasicMaterial({
  wireframe: true,
});
const pyramidMatG = new THREE.MeshBasicMaterial({
  wireframe: true,
});
const pyramidMatB = new THREE.MeshBasicMaterial({
  wireframe: true,
});
const pyramidMatT = new THREE.MeshBasicMaterial({
  wireframe: true,
});
const pyramidR = new THREE.Mesh(pyramidGeom, pyramidMatR);
const pyramidG = new THREE.Mesh(pyramidGeom, pyramidMatG);
const pyramidB = new THREE.Mesh(pyramidGeom, pyramidMatB);
const pyramidT = new THREE.Mesh(pyramidGeom, pyramidMatT);

pyramidR.position.set(2, 2, 2);
pyramidG.position.set(2, 16, 2);
pyramidB.position.set(2, 8, -6);
pyramidT.position.set(2, 8, 8);

pyramidG.rotation.x = Math.PI;
pyramidB.rotation.x = Math.PI / 2.2;
pyramidT.rotation.x = -Math.PI / 2.2;

const RGBT = new THREE.Group();
RGBT.add(pyramidR);
RGBT.add(pyramidG);
RGBT.add(pyramidB);
RGBT.add(pyramidT);

RGBT.position.set(6, 6, 6);
RGBT.rotation.y = Math.PI / 2;
RGBT.visible = false;

export { RGBT };

const manager = new THREE.LoadingManager();

manager.onError = function (url) {
  console.log("There was an error loading " + url);
};

const loader = new THREE.TextureLoader(manager);
loader.setPath("textures/");
const TambientOcclusion = loader.load("SGambientOcclusion.png");
const Tbasecolor = loader.load("SGbasecolor.png");
const Theight = loader.load("SGheight.png");
const Tnormal = loader.load("SGnormal.png");
const Topacity = loader.load("SGopacity.png");
const Tmetallic = loader.load("SGmetallic.png");
const Troughness = loader.load("SGroughness.png");

loader.setPath("textures/matcaps/");
const matCapTexture = loader.load("3.png");
loader.setPath("textures/gradients/");
const gradientTexture = loader.load("2.jpg");

gradientTexture.minFilter = THREE.NearestFilter;
gradientTexture.magFilter = THREE.NearestFilter;
gradientTexture.generateMipmaps = false;

const materialStandard = new THREE.MeshStandardMaterial();

const gui = new GUI();
let MSphere;
let MSphereGeom;
const params = {
  baseColor: "#ffffff",
  emissiveColor: "#000000",
  geometry: {
    radius: 1,
    widthSegments: 64,
    heightSegments: 32,
    phiStart: 0,
    phiLength: Math.PI * 2,
    thetaStart: 0,
    thetaLength: Math.PI,
  },
  createGeom: () => {
    if (MSphere) {
      scene.remove(MSphere);
    }
    MSphereGeom = new THREE.SphereGeometry(
      params.geometry.radius,
      params.geometry.widthSegments,
      params.geometry.heightSegments,
      params.geometry.phiStart,
      params.geometry.phiLength,
      params.geometry.thetaStart,
      params.geometry.thetaLength
    );

    MSphere = new THREE.Mesh(MSphereGeom, materialStandard);
    MSphere.position.set(-10, 0, 0);
    scene.add(MSphere);
  },
};

const meshStandardMaterial = gui.addFolder("Mesh Standard Material");
meshStandardMaterial.open();
meshStandardMaterial.addColor(params, "baseColor").onChange(() => {
  materialStandard.color = new THREE.Color(params.baseColor);
});

meshStandardMaterial
  .add(materialStandard, "metalness")
  .min(0)
  .max(1)
  .step(0.001);
meshStandardMaterial
  .add(materialStandard, "roughness")
  .min(0)
  .max(1)
  .step(0.001);
meshStandardMaterial.add(materialStandard, "wireframe");
meshStandardMaterial.addColor(params, "emissiveColor").onChange(() => {
  materialStandard.emissive = new THREE.Color(params.emissiveColor);
});
materialStandard.map = Tbasecolor;
materialStandard.alphaMap = Topacity;
materialStandard.transparent = true;

materialStandard.aoMap = TambientOcclusion;
materialStandard.displacementMap = Theight;
materialStandard.metalnessMap = Tmetallic;
materialStandard.roughnessMap = Troughness;
materialStandard.normalMap = Tnormal;
//materialStandard.normalScale.set(5, 5, 5);
materialStandard.wrapS = THREE.RepeatWrapping;
materialStandard.wrapT = THREE.RepeatWrapping;
materialStandard.needsUpdate = true;
meshStandardMaterial
  .add(materialStandard, "displacementScale")
  .min(0)
  .max(10)
  .step(0.1);
console.log(`Theight====>`, Theight);

meshStandardMaterial
  .add(materialStandard, "aoMapIntensity")
  .min(0)
  .max(10)
  .step(0.001);

// SPHERE

const sphereFolder = gui.addFolder("SPHERE");
sphereFolder
  .add(params.geometry, "radius")
  .min(1)
  .max(30)
  .step(0.1)
  .onChange(function () {
    params.createGeom();
  });
sphereFolder
  .add(params.geometry, "widthSegments")
  .min(3)
  .max(64)
  .step(0.1)
  .onChange(function () {
    params.createGeom();
  });
sphereFolder
  .add(params.geometry, "heightSegments")
  .min(2)
  .max(32)
  .step(1)
  .onChange(function () {
    params.createGeom();
  });
sphereFolder
  .add(params.geometry, "phiStart")
  .min(0)
  .max(6)
  .step(0.1)
  .onChange(function () {
    params.createGeom();
  });
sphereFolder
  .add(params.geometry, "phiLength")
  .min(0)
  .max(6)
  .step(0.1)
  .onChange(function () {
    params.createGeom();
  });
sphereFolder
  .add(params.geometry, "thetaStart")
  .min(0)
  .max(6)
  .step(0.1)
  .onChange(function () {
    params.createGeom();
  });
sphereFolder
  .add(params.geometry, "thetaLength")
  .min(0)
  .max(6)
  .step(0.1)
  .onChange(function () {
    params.createGeom();
  });

MSphereGeom = new THREE.SphereGeometry(
  params.geometry.radius,
  params.geometry.widthSegments,
  params.geometry.heightSegments,
  params.geometry.phiStart,
  params.geometry.phiLength,
  params.geometry.thetaStart,
  params.geometry.thetaLength
);

MSphere = new THREE.Mesh(MSphereGeom, materialStandard);

MSphere.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(MSphere.geometry.attributes.uv.array, 2)
);

MSphere.position.set(-10, 0, 0);
export { MSphere };

const MPlaneGeom = new THREE.PlaneGeometry(5, 5, 30, 30);

const MPlane = new THREE.Mesh(MPlaneGeom, materialStandard);

MPlane.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(MPlane.geometry.attributes.uv.array, 2)
);

MPlane.position.set(0, 0, 0);
export { MPlane };

const MTorusGeom = new THREE.TorusGeometry(5, 2, 30, 100);
const MTorus = new THREE.Mesh(MTorusGeom, materialStandard);

MTorus.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(MTorus.geometry.attributes.uv.array, 2)
);

MTorus.position.set(10, 0, 0);
export { MTorus };
