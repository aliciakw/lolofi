"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jimp = _interopRequireDefault(require("jimp"));

var _fs = _interopRequireDefault(require("fs"));

var _exifParser = _interopRequireDefault(require("exif-parser"));

var _background = 0x00000000;
var _defaultPixel = {
  r: 0,
  g: 0,
  b: 0,
  a: 255
};

function getPixelRgb(image, x, y) {
  var hex = image.getPixelColor(x, x);
  return _jimp["default"].intToRGBA(hex);
}

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var inputFilename, outputFilename, image, w, h, writeStream, y, x, pixelData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inputFilename = process.argv[2];
            outputFilename = process.argv[3];
            console.log("Converting image", inputFilename, "to pixels. (", outputFilename, ")");
            _context.next = 5;
            return _jimp["default"].read(inputFilename);

          case 5:
            image = _context.sent;
            w = image.getWidth();
            h = image.getHeight();
            writeStream = _fs["default"].createWriteStream(outputFilename);

            for (y = 0; y < h; y++) {
              for (x = 0; x < w; x++) {
                pixelData = getPixelRgb(image, x, y);
                writeStream.write(pixelData.r + ',' + pixelData.g + ',' + pixelData.b + '\n');
              }
            } // console.log(pixelRBGs);


            writeStream.end();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main();