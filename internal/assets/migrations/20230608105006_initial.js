/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('age').notNullable();
        table.boolean('role').defaultTo(true);
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    });
};
  
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
return knex.schema.dropTable('users');
};
