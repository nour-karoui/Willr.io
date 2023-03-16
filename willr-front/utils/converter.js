const fs = require('fs');

const jarFilePath = '/home/bruno/repos/Willr.io/willr-front/utils/will-contract-0.1.0-optimized.jar';

const jarData = fs.readFileSync(jarFilePath);
const byteArray = new Uint8Array(jarData.buffer);

console.log(byteArray);
// console.log(JSON.stringify(byteArray));