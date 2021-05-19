import database from '../database/connection.js';

export default async function (request, response) {
    const row = request.body;

    if(!row || !row.playerName || !row.points) {
        return response
            .status(400)
            .json({
                error: 'Invalid row'
            });
    }

    try {
        await database('rank')
            .insert(row);
    } catch (err) {
        return response
            .status(500)
            .json({
                error: err.message
            });
    }

    return response
        .status(201)
        .send();
}