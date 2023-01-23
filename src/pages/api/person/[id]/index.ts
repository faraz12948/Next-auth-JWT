import { NextApiRequest, NextApiResponse } from 'next';
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3')
export default async function getPerson(req: NextApiRequest, res: NextApiResponse) {
    // if (req.method !== 'GET') {
    //     req.statusMessage = 'Operation not allowed';
    // }
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
    if (req.method === 'PUT') {
        const statement = await db.prepare(
            'UPDATE person SET name = ?,  email = ? where id = ?'
        );
        const result = await statement.run(
            req.body.name,
            req.body.email,
            req.query.id
        )
        result.finalize();
    }
    const person = await db.get('SELECT * FROM person where id = ?', req.query.id);

    res.json(person)
}