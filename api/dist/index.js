"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

require("dotenv/config");

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use((0, _cors.default)());
app.use(_routes.default);
const port = process.env.PORT ? process.env.PORT : 9000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor rodando na porta ${port}`);
});