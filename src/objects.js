import * as THREE from "three";

// TORUSKNOT

const geometry = new THREE.TorusKnotGeometry(7, 2, 23, 8, 6, 3);
const material = new THREE.MeshNormalMaterial();

const torusKnot = new THREE.Mesh(geometry, material);

torusKnot.position.set(20, 20, 3);
export { torusKnot };

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
