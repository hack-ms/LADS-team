const csv = require("csvtojson");
const path = require("path");
import img from "./img-saver";

const read = async (req, res, next) => {
  try {
    let csvpath = path.resolve(
      `${__dirname}/../../resources/Despesas_2019-08-03_17_00_43.csv`
    );
    let pattern = "Portal da Transparência do Estado de Mato Grosso do Sul";
    let wanted = ["Período", "SECRETARIA DE ESTADO DE JUST.SEGUR.PUBLICA"];
    let text = `No %, o Governo Estadual se comprometeu em pagar ao órgão * uma quantia de R$!, e o repasse foi de R$@`;

    let data = await csv().fromFile(csvpath);

    for (let i in data) {
      if (data[i][pattern].startsWith(wanted[0])) {
        text = text.replace("%", "ano de " + data[i][pattern].slice(-4)); // replace  Periodo...
      } else if (data[i][pattern].startsWith(wanted[1])) {
        wanted[1] = "SEJUSP";
        text = text.replace("*", wanted[1]); // replace SECRETARIA...

        let n =
          data[i]["field2"].slice(data[i]["field2"].indexOf(";") + 2) +
          "," +
          data[i]["field3"].slice(0, data[i]["field3"].indexOf(";") - 1);

        text = text.replace(
          "!",
          Number(n.replace(",", ".")).toLocaleString("pt-BR")
        ); // replace Liquidado

        n =
          data[i]["field3"].slice(data[i]["field3"].indexOf(";") + 2) +
          "," +
          data[i]["field4"].slice(0, -1);

        text = text.replace(
          "@",
          Number(n.replace(",", ".")).toLocaleString("pt-BR")
        ); // replace Pago
      }
    }

    return res.sendFile(
      await img.create("despesas", "template02.png", wanted[1], text)
    );
  } catch (error) {
    next(error);
  }
};

export default { read };
