"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jimp = _interopRequireDefault(require("jimp"));

var _fs = _interopRequireDefault(require("fs"));

function parseImage(src, cb) {
  _fs["default"].readFile(src, cb);
}

function parseBitmap() {}

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

// main();
var path = './test.jpg'; //args[0];

console.log('path: ' + path);

_fs["default"].readFile(path, function (err, data) {
  if (err) throw err;
  console.log(data);
});