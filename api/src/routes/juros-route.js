import { Router } from "express";
import controller from "../controllers/juros-controller";

const router = Router();

router.get("/", controller.read); // get all

export default router;
