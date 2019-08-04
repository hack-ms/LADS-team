"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ipvaRoute = _interopRequireDefault(require("./ipva-route"));

var _icmsRoute = _interopRequireDefault(require("./icms-route"));

var _jurosRoute = _interopRequireDefault(require("./juros-route"));

var _despesasRoute = _interopRequireDefault(require("./despesas-route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let v = [_ipvaRoute.default, _icmsRoute.default, _jurosRoute.default, _despesasRoute.default];
const router = (0, _express.Router)();
router.use("/ipva", _ipvaRoute.default);
router.use("/icms", _icmsRoute.default);
router.use("/juros", _jurosRoute.default);
router.use("/despesas", _despesasRoute.default);
router.use("/image", v[parseInt(Math.random() * v.length)]);
router.use((error, req, res, next) => {
  return res.status(500).json({
    message: error.message
  });
});
var _default = router;
exports.default = _default;