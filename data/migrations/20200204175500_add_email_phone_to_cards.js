
exports.up = function(knex) {
    return knex.schema.alterTable('cards', tbl => {
        tbl.string('email');
        tbl.string('phone_number');
    });
};

exports.down = function(knex) {
    return knex.schema.table('cards', tbl => {
        tbl.dropColumn('email');
        tbl.dropColumn('phone_number');
})};
