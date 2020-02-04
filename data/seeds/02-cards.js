
exports.seed = function(knex) {
  return knex('cards').insert([
    {
    person_name: "Ernest Cascioli",
    business_name: "Allentown Typesetting Service",
    url_string: "https://upload.wikimedia.org/wikipedia/commons/5/53/1958_-_Allentown_Typesetting_Service_-_Buisness_Card_-_Allentown_PA.jpg",
    card_owner: 1,
    category: "printing"
    },

    {
    person_name: "Rod Brock",
    business_name: "Seattle Computer",
    url_string: "https://upload.wikimedia.org/wikipedia/commons/1/1a/RodBrockCard.JPG",
    card_owner: 1,
    category: "computers"
    },

    {
    person_name: "Lars Jacob",
    business_name: "Lars Jacob Entertainment",
    url_string: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Lars_Jacob_business_card_1974.jpg",
    card_owner: 1,
    category: "entertainment"
    },

    {
    person_name: "Lucinda Deitman",
    business_name: "Lux Magna Designs",
    url_string: "https://upload.wikimedia.org/wikipedia/commons/9/92/Business_Card_56476.jpg",
    card_owner: 1,
    category: "photography"
    },

    {
    person_name: "Andreas A. Ziartides",
    business_name: "House of Representatives",
    url_string: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Business_Card.jpg",
    card_owner: 1,
    category: "government"
    },

    {
    person_name: "R.V. Johnstone",
    business_name: "P.H. Davis Tailoring Company",
    url_string: "https://upload.wikimedia.org/wikipedia/commons/1/17/Business_card%2C_circa_1930_%2829515594618%29.jpg",
    card_owner: 1,
    category: "clothing"
    },

    {
    person_name: "Tabit",
    business_name: "Tabit's Quick Shoe Repair",
    url_string: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Business_card%2C_circa_1935_%2828971237047%29.jpg",
    card_owner: 1,
    category: "shoes"
    },

    {
    person_name: "J.H. Harvey",
    business_name: "J.H. Harvey & Co.",
    url_string: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Seattle_business_card%2C_circa_1905_%2826431385038%29.jpg",
    card_owner: 1,
    category: "construction"
    },

    {
    person_name: "J.H. Harvey",
    business_name: "J.H. Harvey & Co.",
    url_string: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Seattle_business_card%2C_circa_1905_%2826431385038%29.jpg",
    card_owner: 1,
    category: "construction"
    },

    {
    person_name: "Edward Impala",
    business_name: "Rivkin's Diamonds & American Watches & Wedding Rings",
    url_string: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Rivkin%27s_Jewelers_business_card%2C_circa_1960s_%2832030353090%29.jpg",
    card_owner: 1,
    category: "jewelry"
    },

    {
    person_name: "Paul Speckled Rock",
    business_name: "Galeria at Santa Clara Pueblo",
    url_string: "https://upload.wikimedia.org/wikipedia/commons/8/81/Business_card_for_Merrock_Galeria.jpg",
    card_owner: 1,
    category: "art"
    },

    {
    person_name: "Sedna Nootaikok",
    business_name: "AAA Sprinkler Works",
    url_string: "https://nuffer.name/albums/album52/IMG_5513.sized.jpg",
    card_owner: 1,
    category: "sprinkler repair"
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
