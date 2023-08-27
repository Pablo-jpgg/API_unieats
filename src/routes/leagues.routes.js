import { Router } from "express";
import { methods as leagueController } from "./../controllers/leagues.controller.js";

const router = Router();

router.post('/insert', leagueController.insertLeagues);
router.post('/insertNose', leagueController.insertNose);
router.post('/insertTeam', leagueController.insertTeam);
router.post('/insertTimeZone', leagueController.insertTimeZone);
router.get('/nose', leagueController.getNose);
router.get('/getLeagues', leagueController.getLeagues);
router.get('/getTimeZone', leagueController.getTimeZone);
router.get('/getTeamsByCountry', leagueController.getTeamsByCountry);

export default router;