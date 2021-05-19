import fs from 'fs';
import dotenv from 'dotenv';
import knex from '../database/connection.js';

const dirs = [ 'data' ];

export async function build() {
    dotenv.config();
    dirs.forEach(dir => !fs.existsSync(dir) && fs.mkdirSync(dir));
    await knex.migrate.latest();
    await knex.seed.run();
}