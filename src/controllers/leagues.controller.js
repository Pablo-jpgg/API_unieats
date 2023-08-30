import {getConnection} from "./../database/database";

const insertLeagues = async (req, res) => {
    try {
        const { league_id, name, type, logo, country, code, flag } = req.body; // Assuming the data comes from the request body
        console.log(req.body);
        
        const con = await getConnection();
        const query = `
            INSERT INTO bettracker.leagues (league_id, name, type, logo, country, code, flag)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        await con.query(query, [league_id, name, type, logo, country, code, flag]);

        res.status(200).json({ message: "League inserted successfully." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const insertTeam = async (req, res) => {
    try {
        const { team_id, code, country, founded, logo, name, national, capacidad_venue, city, id_venue, image_venue, name_venue } = req.body;
        console.log(req.body);
        
        const con = await getConnection();
        const query = `
        INSERT INTO bettracker.teams (team_id, code, country, founded, logo, name, national, capacidad_venue, city, id_venue, image_venue, name_venue)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
        const result = await con.query(query, [team_id, code, country, founded, logo, name, national, capacidad_venue, city, id_venue, image_venue, name_venue]);

        res.status(200).json({ message: "Team inserted successfully." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const insertMatch = async (req, res) => {
    try {
        const { date, id_venue, city, status, league_id, country, league, season, round, team_home, team_away, id_team_home, winner_home, goals_home, goals_away } = req.body;
        console.log(req.body);
        
        const con = await getConnection();
        const query = `
        INSERT INTO bettracker.matchs (date, id_venue, city, status, league_id, country, league, season, round, team_home, team_away, id_team_home, winner_home, goals_home, goals_away)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
        const result = await con.query(query, [date, id_venue, city, status, league_id, country, league, season, round, team_home, team_away, id_team_home, winner_home, goals_home, goals_away]);

        res.status(200).json({ message: "Match inserted successfully." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateTeamLeague = async (req, res) => {
    try {
        const { team_id, league_id } = req.body; // Asegúrate de tener team_id y league_id en el cuerpo de la solicitud
        console.log(req.body);
        
        const con = await getConnection();
        const query = `
            UPDATE bettracker.teams
            SET league_id = ?
            WHERE team_id = ?;
        `;
        const result = await con.query(query, [league_id, team_id]);

        if (result.affectedRows === 0) {
            res.status(404).json({ message: "Team not found." });
        } else {
            res.status(200).json({ message: "Team league updated successfully." });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const insertNose = async (req, res) => {
    try {
        const { nosecol } = req.body;
        console.log(nosecol);
        
        const con = await getConnection();
        const query = `
            INSERT INTO bettracker.nose (nosecol)
            VALUES (?)
        `;
        await con.query(query, [nosecol]);

        res.status(200).json({ message: "Nose insert nashe." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const insertTimeZone = async (req, res) => {
    try {
        const { time_zone } = req.body;
        console.log(time_zone);
        
        const con = await getConnection();
        const query = `
            INSERT INTO bettracker.time_zone (time_zone)
            VALUES (?)
        `;
        await con.query(query, [time_zone]);

        res.status(200).json({ message: "Nose insert nashe." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getNose = async (req, res) => {
    try{
        const con = await getConnection();
        const lenguages = await con.query('SELECT * FROM bettracker.nose');
        res.json(lenguages);
    }catch(error){
    res.status(400);
    res.send(error.message);
 }
}

const getLeagues = async (req, res) => {
    try{
        const con = await getConnection();
        const lenguages = await con.query('SELECT * FROM bettracker.leagues');
        res.json(lenguages);
    }catch(error){
    res.status(400);
    res.send(error.message);
 }
}


const getTeams = async (req, res) => {
    try{
        const con = await getConnection();
        const lenguages = await con.query('SELECT * FROM bettracker.teams');
        res.json(lenguages);
    }catch(error){
    res.status(400);
    res.send(error.message);
 }
}

const getTimeZone = async (req, res) => {
    try{
        const con = await getConnection();
        const lenguages = await con.query('SELECT * FROM bettracker.time_zone');
        res.json(lenguages);
    }catch(error){
    res.status(400);
    res.send(error.message);
 }
}

const getTeamsByCountry = async (req, res) => {
    try {
        const { country } = req.query; // Obtener el parámetro 'country' de la consulta
        console.log(country);
        const con = await getConnection();
        const teams = await con.query('SELECT * FROM bettracker.teams WHERE country = ?', [country]);
        res.json(teams);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getTeamsByLeagueId = async (req, res) => {
    try {
        const { league_id } = req.query; // Obtener el parámetro 'league_id' de la consulta
        console.log(league_id);
        const con = await getConnection();
        const teams = await con.query('SELECT * FROM bettracker.teams WHERE league_id = ?', [league_id]);
        res.json(teams);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getLeagueById = async (req, res) => {
    try {
        const { league_id } = req.query; // Obtener el parámetro 'league_id' de la consulta
        console.log(league_id);
        const con = await getConnection();
        const teams = await con.query('SELECT * FROM bettracker.leagues WHERE league_id = ?', [league_id]);
        res.json(teams);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const methods = {
    insertLeagues,
    getNose,
    insertNose,
    getLeagues,
    insertTeam,
    getTeams,
    getTeamsByCountry,
    insertTimeZone,
    getTimeZone,
    updateTeamLeague,
    getTeamsByLeagueId,
    getLeagueById,
    insertMatch
};