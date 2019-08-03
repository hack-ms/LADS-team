import { Router } from "express";

import ipva from "./ipva-route";
import icms from "./icms-route";
import juros from "./juros-route";
import despesas from "./despesas-route";

let v = [ipva, icms, juros, despesas];

const router = Router();

router.use("/ipva", ipva);
router.use("/icms", icms);
router.use("/juros", juros);
router.use("/despesas", despesas);
router.use("/image", v[parseInt(Math.random() * v.length)]);

router.use((error, req, res, next) => {
  return res.status(500).json({ message: error.message });
});

export default router;
