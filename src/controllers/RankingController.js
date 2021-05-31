import database from '../database/connection.js';

export default async function (request, response) {
    // Gera o limite máximo de linhas a serem devolvidas, sendo o mínimo 1 e o máximo 500, por padrão 100
    const { depth } = request.query;
    const limit = Number(depth) && depth <= 500 ? Number(depth) : 100;
    
    // Busca as linhas na tabela Rank
    const ranks = await database('rank')
        .limit(limit)
        .orderBy('points', 'desc')
        .select('*');

    // Retorna as linhas ao cliente
    return response.json(ranks);
}