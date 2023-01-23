-- Up 
CREATE TABLE IF NOT EXISTS Person(

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
);
CREATE TABLE IF NOT EXISTS Vehicle(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

-- INSERT INTO Person (name,email) values('faraz','f@gmail.com');
-- INSERT INTO Person (name,email) values('ahmed','a@gmail.com');
-- INSERT INTO Person (name,email) values('bhuiyan','b@gmail.com');

-- INSERT INTO Vehicle (brand,model,ownerId) values('toyota','90s',1);

--Down
-- DROP TABLE Person;
-- DROP TABLE Vehicle;