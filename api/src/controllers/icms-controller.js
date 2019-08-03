const csv = require("csvtojson");
const path = require("path");
import img from "./img-saver";

// receita de icms - template01.png

const read = async (req, res, next) => {
  try {
    let csvpath = path.resolve(
      "../api/resources/PortalDaTransparenciaDoEstadoDeMatoGrossoDoSul_20190803004115.csv"
    );
    let pattern = "Portal da Transparência do Estado de Mato Grosso do Sul";
    let wanted = "ICMS";
    let text = `R$@ arrecadados em # no ano de 2018 seguno o Portal da Transparência`;

    text = text.replace("#", wanted);

    let data = await csv().fromFile(csvpath);
    for (let i in data) {
      if (data[i][pattern] == wanted) {
        text = text.replace("@", data[i]["field3"]);
        // return res.json({ description, data });
        break;
      }
    }

    // let a = await img.create();
    // console.log(a);
    return res.sendFile(
      path.resolve(await img.create("receitas", "template01.png", wanted, text))
    );
  } catch (error) {
    next(error);
  }
};

export default { read };
