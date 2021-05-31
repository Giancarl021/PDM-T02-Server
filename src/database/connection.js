import knex from 'knex';
import configuration from '../../knexfile.js';

// Carrega as configurações do KnexJS
const connection = knex(configuration);

export default connection;