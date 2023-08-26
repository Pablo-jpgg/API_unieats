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

export const methods = {
    insertLeagues,
    getNose,
    insertNose,
    getLeagues,
    insertTeam
};