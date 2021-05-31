// Descreve a criação tabela Rank
export async function up(knex) {
    return knex.schema.createTable('rank', table => {
        table.increments('id').primary();
        table.string('playerName').notNullable();
        table.integer('points').notNullable();
    });
}

// Descreve a destruição da tabela Rank
export async function down(knex) {
    return knex.schema.dropTable('rank');
}