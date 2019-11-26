
exports.up = function(knex) {
  return knex.schema
    .createTable('items', items => {
      items.increments();
      items
        .string('name', 255)
        .notNullable()
        .unique();
      items
        .text('description').notNullable();
      items
        .string('category').notNullable();
      items
        .text('image');
      items
        .timestamps(); // will create two columns: created_at, updated_at
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('items')
};