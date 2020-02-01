
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 128)
            .notNullable()
            .unique()
            .index();
        tbl.string('password', 128)
            .notNullable();
        tbl.string('name', 128)
            .notNullable();
        tbl.string('job_description', 255);
    })
    .createTable('cards', tbl => {
        tbl.increments();
        tbl.string('person_name', 128)
            .notNullable()
            .index();
        tbl.string('business_name', 128);
        tbl.string('url_string')
            .notNullable();
        tbl.string('card_owner', 128)
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        tbl.string('category', 255)
            .notNullable()
            .index();
    })
    .createTable('user_card_connections', tbl => {
        tbl.increments();
        tbl.string('user_id', 128)
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        tbl.string('card_id', 128)
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('cards')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
        .dropTableIfExists('cards')
        .dropTableIfExists('user_card_connections');
};
