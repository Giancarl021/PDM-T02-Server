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
    // Gera um número aleatório entre 0 e 999
    const random = Math.floor(Math.random() * 1000);

    return {
        // Carrega um nome aleatório com a seed do sha1 (função de hash) do número aleatório
        playerName: randomName({ seed: sha1(random) }),
        // Pontos do número aleatório
        points: random
    };
}