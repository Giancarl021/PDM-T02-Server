import database from '../database/connection.js';

export default async function (request, response) {
    const row = request.body;

    // Verifica se todos os campos foram passados na requisição
    if (!row || !row.playerName || !row.points) {
        return response
            .status(400)
            .json({
                error: 'Invalid row'
            });
    }

    // Tenta inserir um novo Rank na tabela Rank
    try {
        await database('rank')
            .insert(row);
    } catch (err) {
        // Caso erro retorna 500 ao cliente
        return response
            .status(500)
            .json({
                error: err.message
            });
    }

    // Caso tudo ok retorna 201 (Created)
    return response
        .status(201)
        .send();
}