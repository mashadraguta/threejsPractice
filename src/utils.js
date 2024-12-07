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
      .min(.1)
      .max(1)
      .onChange(() => {
        object.intensity = params.intensity
      });
  }
  if (params.scale) {
    positionFolder
      .add(params, "scale")
      .min(1)
      .max(5)
      .onChange(() => {
        object.scale.set(params.scale, params.scale, params.scale);
      });
  }
  if (params.rotateX) {
    positionFolder
      .add(params, "rotateX")
      .min(Math.PI * 0.1)
      .max(Math.PI * 2)
      .step(Math.PI * 0.1)
      .onChange(() => {
        object.rotateX(params.rotateX);
      });
  }
  if (params.rotateY) {

    positionFolder
      .add(params, "rotateY")
      .min(Math.PI * 0.1)
      .max(Math.PI * 2)
      .step(Math.PI * 0.1)
      .onChange(() => {
        object.rotateY(params.rotateY);
      });
  }

};



export { changeObjPos };



