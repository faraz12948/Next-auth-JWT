import { NextApiRequest, NextApiResponse } from 'next';
// import sqlite from 'sqlite';
// import sqlite3 from 'sqlite3';
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3')

export default async function getPerson(req: NextApiRequest, res: NextApiResponse) {
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
    const people = await db.all('SELECT * FROM person');

    res.status(200).json(people)
}