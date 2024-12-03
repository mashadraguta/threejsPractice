const changeObjPos = (object, params, gui, folderName) => {
  const positionFolder = gui.addFolder(folderName);

  console.log(params);
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
  positionFolder
    .add(params, "scale")
    .min(1)
    .max(5)
    .onChange(() => {
      object.scale.set(params.scale, params.scale, params.scale);
    });
};

export { changeObjPos };
