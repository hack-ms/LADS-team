import { Router } from "express";
import controller from "../controllers/ipva-controller";

const router = Router();

router.get("/", controller.read); // get all

export default router;
