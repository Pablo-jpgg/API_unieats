import { Router } from "express";
import { methods as login } from "../controllers/login.controller.js";

const router = Router();

router.post('/createUser', login.createUser);
router.post('/loginUser', login.loginUser);

export default router;