export async function up(knex) {
    return knex.schema.createTable('rank', table => {
        table.increments('id').primary();
        table.string('playerName').notNullable();
        table.integer('points').notNullable();
    });
}

export async function down(knex) {
    return knex.schema.dropTable('rank');
}