import jimp from 'jimp';
import fs from 'fs';
import EXIFParser from 'exif-parser';

const _background = 0x00000000;
const filename = 'test_sm.jpg'; //args[0];
const _defaultPixel = { r: 0, g: 0, b: 0, a: 255 };

function getPixelRgb(image, x, y) {
  const hex = image.getPixelColor(x, x);
  return jimp.intToRGBA(hex);
}


async function main() {
  const image = await jimp.read(filename);
  const w = image.getWidth();
  const h = image.getHeight();

  const pixelRBGs = new Array(100).fill(_defaultPixel);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      pixelRBGs[y * w + x] = getPixelRgb(image, x, y);
    }
  }
  console.log(pixelRBGs);
}

main();
