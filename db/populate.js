#! /usr/bin/env node

import 'dotenv/config'
import { Client } from "pg";
import { argv } from "node:process";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  message TEXT,
  date DATE DEFAULT CURRENT_DATE
);

INSERT INTO messages (username, message)
VALUES 
    ('Armando','Hi there from db!'),
    ('Charles','Hello World from db!')
`;

const connectionString = argv[2];


async function main() {
  console.log("seeding...");
  const client = new Client({ connectionString });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
