import { NextApiRequest, NextApiResponse } from 'next';
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3')

const bcrypt = require('bcrypt');
const saltRounds = 10;
export default async function signup(req: NextApiRequest, res: NextApiResponse) {

    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
    if (req.method === 'POST') {
        bcrypt.hash(req.body.password, saltRounds, async function (err: any, hash: any) {
            // Store hash in your password DB.
            const statement = await db.prepare(
                'INSERT INTO person(name,email,password) values(?,?,?)'
            );
            const result = await statement.run(
                req.body.name,
                req.body.email,
                hash

            )
            result.finalize();
        });

    }
    const person = await db.get('SELECT * FROM person');

    res.json(person)
}