import { GUI } from "dat.gui";

const getGUIforLights = (
  params,
  folderName,
  object,
  helperShadow,
  helperLight
) => {
  const gui = new GUI();

  const paramsFn = params.position;

  object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
  const folderNameFn = gui.addFolder(folderName);
  folderNameFn.add(object, "intensity").min(0.01).max(2).step(0.01);
  folderNameFn.add(object, "visible");
  if (helperLight) {
    folderNameFn.add(helperLight, "visible").name(`HELPER LIGHT`);
  }
  if (helperShadow) {
    folderNameFn.add(helperShadow, "visible").name(`SHADOW HELPER`);
  }

  folderNameFn
    .add(paramsFn, "x")
    .min(-50)
    .max(50)
    .step(0.01)
    .onChange(() => {
      object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
    });
  folderNameFn
    .add(paramsFn, "y")
    .min(-50)
    .max(50)
    .step(0.01)
    .onChange(() => {
      object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
    });
  folderNameFn
    .add(paramsFn, "z")
    .min(-50)
    .max(50)
    .step(0.01)
    .onChange(() => {
      object.position.set(paramsFn.x, paramsFn.y, paramsFn.z);
    });
  if (object.isDirectionalLight) {
    folderNameFn
      .add(params, "radius")
      .min(0.1)
      .max(100)
      .step(0.01)
      .onChange(() => {
        object.shadow.radius = params.radius;
        object.shadow.camera.updateProjectionMatrix();
      });
    folderNameFn
      .add(params, "near")
      .min(0.1)
      .max(100)
      .step(0.01)
      .onChange(() => {
        object.shadow.camera.near = params.near;
        object.shadow.camera.updateProjectionMatrix();
      });
    folderNameFn
      .add(params, "far")
      .min(0.1)
      .max(2000)
      .step(0.01)
      .onChange(() => {
        object.shadow.camera.far = params.far;
        object.shadow.camera.updateProjectionMatrix();
      });
  }
  if (object.isSpotLight) {
    folderNameFn
      .add(params, "radius")
      .min(0.1)
      .max(100)
      .step(0.01)
      .onChange(() => {
        object.shadow.radius = params.radius;
        object.shadow.camera.updateProjectionMatrix();
      });
    folderNameFn
      .add(params, "near")
      .min(0.1)
      .max(100)
      .step(0.01)
      .onChange(() => {
        object.shadow.camera.near = params.near;
        object.shadow.camera.updateProjectionMatrix();
      });
    folderNameFn
      .add(params, "far")
      .min(0.1)
      .max(2000)
      .step(0.01)
      .onChange(() => {
        object.shadow.camera.far = params.far;
        object.shadow.camera.updateProjectionMatrix();
      });
    folderNameFn
      .add(params, "distance")
      .min(0.1)
      .max(2000)
      .step(0.01)
      .onChange(() => {
        object.distance = params.distance;
        // object.shadow.camera.updateProjectionMatrix();
      });
    folderNameFn
      .add(params, "angle")
      .min(Math.PI * 0.1)
      .max(Math.PI / 2)
      .step(0.01)
      .onChange(() => {
        object.angle = params.angle;
        // object.shadow.camera.updateProjectionMatrix();
      });
  }
  if (object.isPointLight) {
    folderNameFn
      .add(params, "radius")
      .min(0.1)
      .max(100)
      .step(0.01)
      .onChange(() => {
        object.shadow.radius = params.radius;
        object.shadow.camera.updateProjectionMatrix();
      });
    // folderNameFn
    //   .add(params, "near")
    //   .min(0.1)
    //   .max(100)
    //   .step(0.01)
    //   .onChange(() => {
    //     object.shadow.camera.near = params.near;
    //     object.shadow.camera.updateProjectionMatrix();
    //   });
    // folderNameFn
    //   .add(params, "far")
    //   .min(0.1)
    //   .max(2000)
    //   .step(0.01)
    //   .onChange(() => {
    //     object.shadow.camera.far = params.far;
    //     object.shadow.camera.updateProjectionMatrix();
    //   });
  }
};
export { getGUIforLights };
