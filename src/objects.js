import * as THREE from "three";

// AXES HELPER UTIL
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

// CUBE

// GROUP OBJECT
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

// MATERIAL PART

//TEXTURES
const manager = new THREE.LoadingManager();

manager.onError = function (url) {
  console.log("There was an error loading " + url);
};

const loader = new THREE.TextureLoader(manager);
loader.setPath("textures/");
const TambientOcclusion = loader.load("SGambientOcclusion.png");
const Tbasecolor = loader.load("SGbasecolor.png");
const Theight = loader.load("SGheight.png");
const Tmetallic = loader.load("SGmetallic.png");
const Tnormal = loader.load("SGnormal.png");
const Topacity = loader.load("SGopacity.png");
const Troughness = loader.load("SGroughness.png");

loader.setPath("textures/matcaps/");
const matCapTexture = loader.load("3.png");
loader.setPath("textures/gradients/");
const gradientTexture = loader.load("2.jpg");

// const material = new THREE.MeshBasicMaterial();
// material.side = THREE.DoubleSide;
// material.alphaMap = TambientOcclusion;
// material.map = Tbasecolor;
// material.color.set(new THREE.Color("green"));
// material.opacity = 0.3;
// material.transparent = true;
// material.wireframe = true;

// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matCapTexture;
// material.side = THREE.DoubleSide;

const material = new THREE.MeshDepthMaterial();
material.alphaMap = gradientTexture;
material.transparent = true;
material.opacity = 0.9;
material.side = THREE.DoubleSide;
//material.flatShading = true;

// SPHERE OBJECT

const MSphereGeom = new THREE.SphereGeometry(
  1,
  32,
  16,
  0,
  Math.PI * 2,
  0,
  Math.PI
);

const MSphere = new THREE.Mesh(MSphereGeom, material);
MSphere.position.set(-5, 0, 0);
export { MSphere };
// PLANE OBJECT

const MPlaneGeom = new THREE.PlaneGeometry(2, 2);

const MPlane = new THREE.Mesh(MPlaneGeom, material);
MPlane.position.set(0, 0, 0);
export { MPlane };

// TORUS OBJECT

const MTorusGeom = new THREE.TorusGeometry(1, 0.6, 16, 50);

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
const MTorus = new THREE.Mesh(MTorusGeom, material);
MTorus.position.set(5, 0, 0);
export { MTorus };
