
exports.seed = function(knex) {
  return knex('users').insert([
    {
    username: "michaelScott",
    password: "office1",
    name: "Michael Scott",
    job_description: "Regional Manager of Dunder Mifflin"
    },

    {
    username: "joBennett",
    password: "office2",
    name: "Joleen Bennett",
    job_description: "CEO of Sabre"
    },

    {
    username: "dwightSchrute",
    password: "office3",
    name: "Dwight Schrute",
    job_description: "Salesman/Assistant to the Regional Manager"
    },

    {
    username: "jimHalpert",
    password: "office4",
    name: "Jim Halpert",
    job_description: "Salesman/Co-Regional Manager"
    },

    {
    username: "pamHalpert",
    password: "office5",
    name: "Jim Halpert",
    job_description: "Saleswoman/Office Administrator"
    },

    {
    username: "karenFilippelli",
    password: "office6",
    name: "Karen Filippelli",
    job_description: "Regional Manager of Dunder Mifflin Utica"
    },

    {
    username: "andyBernard",
    password: "office7",
    name: "Andy Bernard",
    job_description: "Salesman"
    },

    {
    username: "stanleyHudson",
    password: "office8",
    name: "Stanley Hudson",
    job_description: "Salesman/Special Project Member"
    },

    {
    username: "phyllisLapin",
    password: "office9",
    name: "Phyllis Lapin Vance",
    job_description: "Saleswoman"
    },

    {
    username: "ryanHoward",
    password: "office10",
    name: "Ryan Howard",
    job_description: "Bowling Alley Attendant at Idle Hour Lanes"
    },

    {
    username: "creedBratton",
    password: "office11",
    name: "Creed Bratton",
    job_description: "Head of Quality Assurance"
    },

    {
    username: "meredithPalmer",
    password: "office12",
    name: "Meredith Palmer",
    job_description: "Head of Supplier Relations"
    },

    {
    username: "oscarMartinez",
    password: "office13",
    name: "Oscar Martinez",
    job_description: "Accountant at Dunder Mifflin"
    },

    {
    username: "kevinMalone",
    password: "office14",
    name: "Kevin Malone",
    job_description: "Accountant at Dunder Mifflin"
    },

    {
    username: "angelaMartin",
    password: "office15",
    name: "Angela Martin",
    job_description: "Head Accountant at Dunder Mifflin"
    },

    {
    username: "kellyKapoor",
    password: "office16",
    name: "Kelly Kapoor",
    job_description: "Head of Customer Relations"
    },

    {
    username: "tobyFlenderson",
    password: "office17",
    name: "Toby Flenderson",
    job_description: "Human Relations at Dunder Mifflin"
    },

    {
    username: "janLevinson",
    password: "office18",
    name: "Jan Levinson",
    job_description: "Vice President of North East Sales at Dunder Mifflin Corporate"
    },

    {
    username: "davidWallace",
    password: "office19",
    name: "David Wallace",
    job_description: "Chief Financial Officer at Dunder Mifflin Corporate"
    },

    {
    username: "erinHannon",
    password: "office20",
    name: "Kelly Erin Hannon",
    job_description: "Receptionist"
    },

    {
    username: "darryllPhilbin",
    password: "office21",
    name: "Darryll Philbin",
    job_description: "Warehouse Foreman"
    },

    {
    username: "bobVance",
    password: "office22",
    name: "Bob Vance",
    job_description: "Owner of Vance Refrigeration"
    }

]);  
  
};

/*
//boilerplate function body, for reference.
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
