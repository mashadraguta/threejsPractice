import { GUI } from "dat.gui";

const getGUIforLights = (params, folderName, object, helper) => {
  const gui = new GUI();
  const paramsFn = params.position;
  object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
  const folderNameFn = gui.addFolder(folderName);
  folderNameFn.add(object, "intensity").min(0.1).max(2).step(0.01);
  folderNameFn.add(object, "visible");
  if (helper) {
    folderNameFn.add(helper, "visible").name(`helper`);
  }
  folderNameFn
    .add(paramsFn, "x")
    .min(-50)
    .max(50)
    .step(0.1)
    .onChange(() => {
      object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
    });
  folderNameFn
    .add(paramsFn, "y")
    .min(-50)
    .max(50)
    .step(0.1)
    .onChange(() => {
      object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
    });
  folderNameFn
    .add(paramsFn, "z")
    .min(-50)
    .max(50)
    .step(0.1)
    .onChange(() => {
      object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
    });
};
export { getGUIforLights };
