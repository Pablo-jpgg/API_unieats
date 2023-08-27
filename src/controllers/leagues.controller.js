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

export const methods = {
    insertLeagues,
    getNose,
    insertNose,
    getLeagues,
    insertTeam,
    getTeams,
    getTeamsByCountry,
    insertTimeZone,
    getTimeZone
};