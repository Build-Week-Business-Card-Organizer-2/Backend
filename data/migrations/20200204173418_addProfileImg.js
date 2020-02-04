
exports.up = function(knex) {
  return knex.schema.alterTable('users', tbl => {
      tbl.string('profile_img_src')
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', tbl => {
      tbl.dropColumn('profile_img_src');
  });
};
