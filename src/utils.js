import * as THREE from "three";

const changeObjPos = (object, params, gui, folderName) => {
  const positionFolder = gui.addFolder(folderName);

  positionFolder
    .add(params.position, "x")
    .min(-50)
    .max(50)
    .onChange(() => {
      object.position.x = params.position.x;
    });
  positionFolder
    .add(params.position, "y")
    .min(-50)
    .max(50)
    .onChange(() => {
      object.position.y = params.position.y;
    });
  positionFolder
    .add(params.position, "z")
    .min(-50)
    .max(50)
    .onChange(() => {
      object.position.z = params.position.z;
    });
  if (params.intensity) {
    positionFolder
      .add(params, "intensity")
      .min(0.1)
      .max(1)
      .onChange(() => {
        object.intensity = params.intensity;
      });
  }
};

export { changeObjPos };

const num = 200
const canvas = document.createElement("canvas");
const canvas2 = document.createElement("canvas");
const canvas3 = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const ctx3 = canvas3.getContext("2d");
canvas.width = num;
canvas.height = num;
canvas2.width = num;
canvas2.height = num;
canvas3.width = num;
canvas3.height = num;

const texture = new THREE.CanvasTexture(canvas);
const texture2 = new THREE.CanvasTexture(canvas2);
const texture3 = new THREE.CanvasTexture(canvas3);

ctx.globalCompositeOperation = "xor";
ctx.fillRect(0, 0, num, num)
ctx.font = "100px garamond"
ctx.fillStyle = "orange";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillText(
  `1`,
  50, 120)
ctx.fillRect(0, 0, num, num);

ctx2.globalCompositeOperation = "xor";
ctx2.fillRect(0, 0, num, num)
ctx2.font = "100px garamond"
ctx2.fillStyle = "orange";
ctx2.fillRect(0, 0, canvas.width, canvas.height);
ctx2.fillText(
  `2`,
  50, 120)
ctx2.fillRect(0, 0, num, num);

ctx3.globalCompositeOperation = "xor";
ctx3.fillRect(0, 0, num, num)
ctx3.font = "100px garamond"
ctx3.fillStyle = "orange";
ctx3.fillRect(0, 0, canvas.width, canvas.height);
ctx3.fillText(
  `3`,
  50, 120)
ctx3.fillRect(0, 0, num, num);

export { texture, texture2, texture3 }