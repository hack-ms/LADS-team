const csv = require("csvtojson");
const path = require("path");
import img from "./img-saver";

const read = async (req, res, next) => {
  try {
    let csvpath = path.resolve(
      "/home/xogaiht/Code/hackathon/api/resources/Despesas_2019-08-03_17_00_43.csv"
    );
    let pattern = "Portal da Transparência do Estado de Mato Grosso do Sul";

    let wanted = ["Período"];
    let text = `%, o Governo Estadual se comprometeu em pagar ao órgão * uma quantia de R$!, e o repasse foi de R$.`;

    // text = text.replace("#", wanted);

    let data = await csv().fromFile(csvpath);
    console.log(data);
    for (let i in data) {
      if (data[i][pattern] == wanted) {
        text = text.replace("@", data[i]["field3"]);
        // return res.json({ description, data });
        break;
      }
    }

    // let a = await img.create();
    // console.log(a);
    return res.json({}); //res.sendFile(path.resolve(await img.create(wanted, text)));
  } catch (error) {
    next(error);
  }
};

export default { read };
