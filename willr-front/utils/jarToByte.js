const path = require("path");
const fs = require("fs");

const jarFilePath = "teste.jar";
const outputFileName = "file.json";

const jarBuffer = fs.readFileSync(jarFilePath);

const byteArray = new Uint8Array(jarBuffer);

const outputFile = path.join(path.dirname(jarFilePath), outputFileName);
fs.writeFileSync(outputFile, JSON.stringify(Array.from(byteArray)));
