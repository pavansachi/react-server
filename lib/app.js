"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _Component = _interopRequireDefault(require("./Component"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _react = _interopRequireDefault(require("react"));

var _puppeteer = _interopRequireDefault(require("puppeteer"));

(function _callee() {
  var browser, page;
  return _regenerator["default"].async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regenerator["default"].awrap(_puppeteer["default"].launch());

        case 2:
          browser = _context.sent;
          _context.next = 5;
          return _regenerator["default"].awrap(browser.newPage());

        case 5:
          page = _context.sent;
          _context.next = 8;
          return _regenerator["default"].awrap(page.setContent("\n    <html>\n    <head>\n        <title></title>\n    </head>\n    <body>\n        <div class=\"container\" style=\"height:200px;width: 200px;border: 1px solid red\">\n            ".concat(_server["default"].renderToString(_react["default"].createElement(_Component["default"], null)), "\n        </div>\n    </body>\n    </html>\n    ")));

        case 8:
          _context.next = 10;
          return _regenerator["default"].awrap(page.screenshot({
            path: 'example.png'
          }));

        case 10:
          _context.next = 12;
          return _regenerator["default"].awrap(browser.close());

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
})();

console.log(_server["default"].renderToString(_react["default"].createElement(_Component["default"], null)));