import jimp from 'jimp';
import fs from 'fs';
import EXIFParser from 'exif-parser';

const _background = 0x00000000;

const _defaultPixel = { r: 0, g: 0, b: 0, a: 255 };

function getPixelRgb(image, x, y) {
  const hex = image.getPixelColor(x, x);
  return jimp.intToRGBA(hex);
}

async function main() {
  const inputFilename = process.argv[2];
  const outputFilename = process.argv[3];
  console.log("Converting image", inputFilename, "to pixels. (", outputFilename, ")");
  
  const image = await jimp.read(inputFilename);
  const w = image.getWidth();
  const h = image.getHeight();

  let writeStream = fs.createWriteStream(outputFilename);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const pixelData = getPixelRgb(image, x, y);
      writeStream.write(pixelData.r + ',' + pixelData.g + ',' + pixelData.b + '\n');
    }
  }
  // console.log(pixelRBGs);
  writeStream.end();
}

main();
