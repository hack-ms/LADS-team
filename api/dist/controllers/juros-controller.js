"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _imgSaver = _interopRequireDefault(require("./img-saver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const csv = require("csvtojson");

const path = require("path");

const read = async (req, res, next) => {
  try {
    let csvpath = path.resolve("/home/xogaiht/Code/hackathon/api/resources/PortalDaTransparenciaDoEstadoDeMatoGrossoDoSul_20190803004115.csv");
    let pattern = "Portal da Transparência do Estado de Mato Grosso do Sul";
    let wanted = "MULTAS E JUROS DE MORA";
    let text = `R$@ arrecadados em # no ano de 2018 seguno o Portal da Transparência`;
    text = text.replace("#", wanted);
    let data = await csv().fromFile(csvpath);

    for (let i in data) {
      if (data[i][pattern] == wanted) {
        text = text.replace("@", data[i]["field3"]); // return res.json({ description, data });

        break;
      }
    }

    wanted = wanted.replace(/ /g, ""); // replace with regex
    // let a = await img.create();
    // console.log(a);

    return res.sendFile(path.resolve((await _imgSaver.default.create("receitas", "template01.png", wanted, text))));
  } catch (error) {
    next(error);
  }
};

var _default = {
  read
};
exports.default = _default;