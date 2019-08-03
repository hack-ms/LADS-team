import { Router } from "express";
import controller from "../controllers/icms-controller";

const router = Router();

router.get("/", controller.read); // get all

export default router;
