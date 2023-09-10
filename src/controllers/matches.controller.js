import { getConnection } from "./../database/database";

const getMatchesByDate = async (req, res) => {
    try {
        const { startDate, endDate } = req.query; // Obtener el parámetro 'date' de la consulta
        const con = await getConnection();
        const teams = await con.query('SELECT * FROM bettracker.matchs WHERE date between ? and ?', [startDate, endDate]);
        res.json(teams);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const methods = {
    getMatchesByDate,
};