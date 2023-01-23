import { NextApiRequest, NextApiResponse } from 'next';
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3')
export default async function getPersonsVehicles(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        req.statusMessage = 'Operation not allowed';
    }
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
    const vehicles = await db.all('SELECT * FROM vehicle where ownerId = ?', req.query.id);

    res.json(vehicles)
}