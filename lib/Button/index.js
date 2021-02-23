"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "button"
  }, text);
};

exports.default = _default;