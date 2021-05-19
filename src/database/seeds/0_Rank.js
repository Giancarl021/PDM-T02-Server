import randomName from 'node-random-name';
import sha1 from 'sha1';

export async function seed(knex) {
    const { rows } = await knex('rank')
        .count('id as rows')
        .first();

    if (rows > 0) return;

    return await knex('rank')
        .insert([
            getRandomRank(),
            getRandomRank(),
            getRandomRank()
        ]);
}

function getRandomRank() {
    const random = Math.floor(Math.random() * 1000);
    return {
        playerName: randomName({ seed: sha1(random) }),
        points: random
    };
}