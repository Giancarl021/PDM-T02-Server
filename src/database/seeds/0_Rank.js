import randomName from 'node-random-name';
import sha1 from 'sha1';

export async function seed(knex) {
    // Conta quantas linhas existem na tabela Rank
    const { rows } = await knex('rank')
        .count('id as rows')
        .first();

    // Se houverem linhas, cancela a operação
    if (rows > 0) return;

    // Se não houverem linhas, insira três nomes aleatórios
    return await knex('rank')
        .insert([
            getRandomRank(),
            getRandomRank(),
            getRandomRank()
        ]);
}

// Busca um nome aleatório
function getRandomRank() {
    const random = Math.floor(Math.random() * 1000);
    return {
        playerName: randomName({ seed: sha1(random) }),
        points: random
    };
}