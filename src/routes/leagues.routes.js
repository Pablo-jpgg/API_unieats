import { Router } from "express";
import { methods as leagueController } from "./../controllers/leagues.controller.js";

const router = Router();

router.post('/insert', leagueController.insertLeagues);
router.post('/insertNose', leagueController.insertNose);
router.post('/insertTeam', leagueController.insertTeam);
router.post('/insertMatch', leagueController.insertMatch);
router.put('/updateTeamLeague', leagueController.updateTeamLeague);
router.put('/updateStandings', leagueController.updateStandings);
router.post('/insertTimeZone', leagueController.insertTimeZone);
router.get('/nose', leagueController.getNose);
router.get('/getLeagues', leagueController.getLeagues);
router.get('/getTimeZone', leagueController.getTimeZone);
router.get('/getTeamsByCountry', leagueController.getTeamsByCountry);
router.get('/getTeamsByLeagueId', leagueController.getTeamsByLeagueId);
router.get('/getLeagueById', leagueController.getLeagueById);

export default router;