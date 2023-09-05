import mysql from 'promise-mysql';
import config from './../config';

const db = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
});

const getConnection = () => {
    return db;
}

module.exports = {getConnection};