import database from '../database/connection.js';

export default async function (request, response) {
    const { depth } = request.query;
    const limit = Number(depth) && depth <= 500 ? Number(depth) : 100;
    

    const ranks = await database('rank')
        .limit(limit)
        .orderBy('points', 'desc')
        .select('*');

    return response.json(ranks);
}