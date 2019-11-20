"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _recharts = require("recharts");

var data = [{
  "name": "Page A",
  "uv": 4000,
  "pv": 2400,
  "amt": 2400
}, {
  "name": "Page B",
  "uv": 3000,
  "pv": 1398,
  "amt": 2210
}, {
  "name": "Page C",
  "uv": 2000,
  "pv": 9800,
  "amt": 2290
}, {
  "name": "Page D",
  "uv": 2780,
  "pv": 3908,
  "amt": 2000
}, {
  "name": "Page E",
  "uv": 1890,
  "pv": 4800,
  "amt": 2181
}, {
  "name": "Page F",
  "uv": 2390,
  "pv": 3800,
  "amt": 2500
}, {
  "name": "Page G",
  "uv": 3490,
  "pv": 4300,
  "amt": 2100
}];

var Example =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2["default"])(Example, _PureComponent);

  function Example() {
    (0, _classCallCheck2["default"])(this, Example);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Example).apply(this, arguments));
  }

  (0, _createClass2["default"])(Example, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_recharts.BarChart, {
        width: 600,
        height: 500,
        data: data,
        margin: {
          top: 20,
          right: 30,
          left: 20,
          bottom: 20
        }
      }, _react["default"].createElement(_recharts.CartesianGrid, {
        strokeDasharray: "3 3"
      }), _react["default"].createElement(_recharts.XAxis, {
        dataKey: "name"
      }), _react["default"].createElement(_recharts.YAxis, null), _react["default"].createElement(_recharts.Tooltip, null), _react["default"].createElement(_recharts.Legend, null), _react["default"].createElement(_recharts.Bar, {
        dataKey: "pv",
        stackId: "a",
        fill: "#8884d8"
      }), _react["default"].createElement(_recharts.Bar, {
        dataKey: "amt",
        stackId: "a",
        fill: "#82ca9d"
      }), _react["default"].createElement(_recharts.Bar, {
        dataKey: "uv",
        fill: "#ffc658"
      }));
    }
  }]);
  return Example;
}(_react.PureComponent);

exports["default"] = Example;