
exports.seed = function(knex) {
  return knex('user_card_connections').insert([
    {
        user_id: 2,
        card_id: 1
    },
    {
        user_id: 2,
        card_id: 2
    },
    {
        user_id: 2,
        card_id: 3
    },
    {
        user_id: 3,
        card_id: 1
    },
    {
        user_id: 3,
        card_id: 2
    },
    {
        user_id: 3,
        card_id: 3
    },

  ]);
};

// Boilerplate function body, for reference:
/*
// Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
*/