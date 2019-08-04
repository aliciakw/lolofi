// import jimp from 'jimp';
import fs from 'fs';

async function main() {
  // const image = await jimp.read('test.jpg');
  // console.log(image);
  // image.color([{ apply: 'red', params: [100] }]);
}

// main();

const path = './test.jpg'; //args[0];
console.log('path: ' + path);
fs.readFile(path, (err, data) => {
  if (err) throw err;
  /* data will be a buffer */
  console.log(data);
});
