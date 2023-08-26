import { Router } from "express";
import { methods as languajeController } from "./../controllers/lenguage.controller.js";

const router = Router();

router.get('/gett', languajeController.getLenguages);

export default router;