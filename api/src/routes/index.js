import { Router } from "express";

import ipva from "./ipva-route";
import icms from "./icms-route";

let v = [ipva, icms];

const router = Router();

router.use("/ipva", ipva);
router.use("/icms", icms);
router.use("/image", v[parseInt(Math.random() * v.length)]);

router.use((error, req, res, next) => {
  return res.status(500).json({ message: error.message });
});

export default router;
