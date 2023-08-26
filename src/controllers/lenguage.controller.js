import {getConnection} from "./../database/database";
const getLenguages = async (req, res) => {
    try{
        const con = await getConnection();
        const lenguages = await con.query('SELECT * FROM api_unieats.language');
        res.json(lenguages);
    }catch(error){
    res.status(500);
    res.send(error.message);
 }
}

export const methods = {
    getLenguages
};