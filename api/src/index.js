import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import {} from "dotenv/config";
import routes from "./routes";

const app = express();
app.use(bodyparser.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT ? process.env.PORT : 9000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor rodando na porta ${port}`);
});
