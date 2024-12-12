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
