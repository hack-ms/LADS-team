import { Router } from "express";
const url = require("url");

import ipva from "./ipva-route";
import icms from "./icms-route";
import juros from "./juros-route";
import despesas from "./despesas-route";

const router = Router();

router.use("/ipva", ipva);
router.use("/icms", icms);
router.use("/juros", juros);
router.use("/despesas", despesas);

router.use("/images", async (req, res, next) => {
  // aqui da pra melhorar
  try {
    return res.json(["ipva", "icms", "juros", "despesas"]);
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  return res.status(500).json({ message: error.message });
});

export default router;
