"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BarChart = _interopRequireDefault(require("./BarChart"));

// export default () => 100;
function Component() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_BarChart["default"], null));
}

var _default = Component;
exports["default"] = _default;