
exports.up = function(knex) {
    return knex.schema.alterTable('users', tbl => {
        tbl.string('email');
        tbl.string('phone_number');
    });
};

exports.down = function(knex) {
    return knex.schema.table('users', tbl => {
        tbl.dropColumn('email');
        tbl.dropColumn('phone_number');
})};
