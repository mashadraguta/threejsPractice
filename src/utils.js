import { GUI } from "dat.gui";

const getGUIforLights = (params, folderName, object, helperShadow) => {
  const gui = new GUI();
  const paramsFn = params.position;
  object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
  const folderNameFn = gui.addFolder(folderName);
  folderNameFn.add(object, "intensity").min(0.1).max(2).step(0.01);
  folderNameFn.add(object, "visible");
  // if (helper) {
  //   folderNameFn.add(helper, "visible").name(`helper light`);
  // }
  if (helperShadow) {
    folderNameFn.add(helperShadow, "visible").name(`helper shadow`);
  }
  folderNameFn
    .add(paramsFn, "x")
    .min(-20)
    .max(20)
    .step(0.1)
    .onChange(() => {
      object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
    });
  folderNameFn
    .add(paramsFn, "y")
    .min(-20)
    .max(20)
    .step(0.1)
    .onChange(() => {
      object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
    });
  folderNameFn
    .add(paramsFn, "z")
    .min(-20)
    .max(20)
    .step(0.1)
    .onChange(() => {
      object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
    });
  if (object.isDirectionalLight) {
    console.log(object)
    // folderNameFn
    //   .add(object, "angle")
    //   .min(Math.PI * 0.1)
    //   .max(Math.PI * 2)
    //   .step(0.01);
    // folderNameFn.add(object, "distance").min(0).max(10).step(0.01);
  }
};
export { getGUIforLights };
