import { generateGalaxy } from "./scriptParticles";
import { GUI } from "dat.gui";


export const palette = {
    middle: '#af371a',
    border: '#124d7d',
};
export const GParams = {
    count: 30000,
    size: 0.01,
    color: true,
    radius: 5,
    branches: 4,
    spin: -3,
    randomness: 0.3,
    randomnessLevel: 1,
};
const guiGalaxy = new GUI({ name: "galaxy generator", width: 500 });
const numberOfStars = guiGalaxy.addFolder("STARS NUMBER");
const sizeOfStars = guiGalaxy.addFolder("STARS SIZE");
const radiusOfStars = guiGalaxy.addFolder("RADIUS");
const randomnessLevel = guiGalaxy.addFolder("RANDOMNESS LEVEL");
const branches = guiGalaxy.addFolder("BRANCHES");
const spin = guiGalaxy.addFolder("SPIN");
const randomness = guiGalaxy.addFolder("RANDOMNESS");
const middleColor = guiGalaxy.addFolder("MIDDLE COLOR");
const borderColor = guiGalaxy.addFolder("BORDER COLOR");
const colorStars = guiGalaxy.addFolder("COLOR STARS");
colorStars.add(GParams, "color").onChange(() => {
    generateGalaxy();
});
numberOfStars
    .add(GParams, "count")
    .min(10)
    .max(100000)
    .step(10)
    .onChange(() => {
        generateGalaxy();
    });

sizeOfStars
    .add(GParams, "size")
    .min(0.01)
    .max(2)
    .step(0.01)
    .onChange(() => {
        generateGalaxy();
    });
radiusOfStars
    .add(GParams, "radius")
    .min(1)
    .max(100)
    .step(0.1)
    .onChange(() => {
        generateGalaxy();
    });
branches
    .add(GParams, "branches")
    .min(2)
    .max(10)
    .step(1)
    .onChange(() => {
        generateGalaxy();
    });
spin
    .add(GParams, "spin")
    .min(-5)
    .max(5)
    .step(0.1)
    .onChange(() => {
        generateGalaxy();
    });
randomness
    .add(GParams, "randomness")
    .min(0)
    .max(5)
    .step(0.01)
    .onChange(() => {
        generateGalaxy();
    });
randomnessLevel
    .add(GParams, "randomnessLevel")
    .min(1)
    .max(2)
    .step(0.01)
    .onChange(() => {
        generateGalaxy();
    });
middleColor.addColor(palette, 'middle').
    onChange(() => {
        generateGalaxy();
    });
borderColor.addColor(palette, 'border').
    onChange(() => {
        generateGalaxy();
    });


export { guiGalaxy }  