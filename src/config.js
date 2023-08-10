import {config} from 'dotenv';
// const config ={}
config();

export default {
    host: process.env.HOST || 'localhost',
    database: process.env.DATABASE || 'test',
    user: process.env.USER || '',
    password: process.env.PASSWORD || '',
};

