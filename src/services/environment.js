import fs from 'fs';
import dotenv from 'dotenv';
import knex from '../database/connection.js';

// Pastas necessárias para o funcionamento do servidor
const dirs = [ 'data' ];

// Função para a construção do ambiente necessário para o servidor
export async function build() {
    // Carregamento das variáveis de ambiente do arquivo .env localizado na raíz do projeto
    dotenv.config();
    
    // Criação de pastas necessárias
    dirs.forEach(dir => !fs.existsSync(dir) && fs.mkdirSync(dir));

    // Execução das migrations e seeds do banco de dados
    await knex.migrate.latest();
    await knex.seed.run();
}