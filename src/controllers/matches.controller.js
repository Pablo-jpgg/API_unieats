import { getConnection } from "./../database/database";

const getMatchesByDate = async (req, res) => {
    try {
        const { startDate, endDate } = req.query; // Obtener el parámetro 'date' de la consulta
        const con = await getConnection();
        const teams = await con.query(`SELECT 
                                            matchs.*,
                                            leagues.flag, 
                                            home_teams.logo AS home_team_logo,
                                            away_teams.logo AS away_team_logo
                                        FROM bettracker.matchs
                                        LEFT JOIN leagues on leagues.league_id = matchs.league_id
                                        LEFT JOIN teams AS home_teams ON home_teams.team_id = matchs.id_team_home
                                        LEFT JOIN teams AS away_teams ON away_teams.team_id = matchs.id_team_away
                                        WHERE date between ? and ?`, [startDate, endDate]);
        res.json(teams);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const methods = {
    getMatchesByDate,
};