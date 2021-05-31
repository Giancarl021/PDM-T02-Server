import locate from './src/util/locate.js';

const root = locate('src/database');
const databasePath = locate('data');

// Configurações do KnexJS, descrevendo o caminho para as migrations, seeds e a conexão com o banco SQLite 3
export default {
    client: 'sqlite3',
    connection: {
        filename: `${databasePath}/db.sqlite`
    },
    migrations: {
        directory: `${root}/migrations`
    },

    seeds: {
        directory: `${root}/seeds`
    },

    useNullAsDefault: true
};