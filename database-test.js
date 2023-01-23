const sqlite = require('sqlite');
const sqlite3 = require('sqlite3')

async function setup() {
    const db = await sqlite.open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database
    });
    await db.migrate({
        migrationsPath: './src/migration', //add cutom path to your migrations
        force: 'last'
    });

    const people = await db.all('SELECT * FROM person');
    const vehicles = await db.all('SELECT * FROM vehicle');
    console.log(vehicles);
}
setup();