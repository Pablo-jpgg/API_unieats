import { Router } from "express";
import { methods as matchesController } from "./../controllers/matches.controller.js";

const router = Router();

router.get('/getMatchesByDate', matchesController.getMatchesByDate);

export default router;