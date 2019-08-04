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
    let csvpath = path.resolve("/home/xogaiht/Code/hackathon/api/resources/Despesas_2019-08-03_17_00_43.csv");
    let pattern = "Portal da Transparência do Estado de Mato Grosso do Sul";
    let wanted = ["Período"];
    let text = `%, o Governo Estadual se comprometeu em pagar ao órgão * uma quantia de R$!, e o repasse foi de R$.`; // text = text.replace("#", wanted);

    let data = await csv().fromFile(csvpath);
    console.log(data);

    for (let i in data) {
      if (data[i][pattern] == wanted) {
        text = text.replace("@", data[i]["field3"]); // return res.json({ description, data });

        break;
      }
    } // let a = await img.create();
    // console.log(a);


    return res.json({}); //res.sendFile(path.resolve(await img.create(wanted, text)));
  } catch (error) {
    next(error);
  }
};

var _default = {
  read
};
exports.default = _default;