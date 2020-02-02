"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button() {
  return _react.default.createElement("div", {
    className: _ButtonModule.default.root
  }, "BUTTON");
}

Button.defaultProps = {};
Button.propTypes = {};
var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.js.map