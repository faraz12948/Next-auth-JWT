import { NextApiRequest, NextApiResponse } from 'next';
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3')

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

export default async function signin(req: NextApiRequest, res: NextApiResponse) {

    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
    if (req.method === 'POST') {
        const person = await db.get(
            'SELECT * from person where email = ?', [req.body.email]
        );
        console.log(person);

        bcrypt.compare(req.body.password, person.password, function (err: any, result: any) {
            // result == true
            if (!err && result) {
                const claims = { sub: person.id, username: person.username, email: person.email };
                var jwtToken = jwt.sign(claims, 'shhhhh', { expiresIn: '1h' });
                console.log("success");
                res.json({ authToken: jwtToken });
            }
        });


    }
    // const person = await db.get('SELECT * FROM person where id = ?', req.query.id);

    // res.json(person)
}