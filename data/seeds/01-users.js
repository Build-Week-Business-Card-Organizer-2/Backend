//the passwords are all office${index + 1} such as office1
exports.seed = function(knex) {
  return knex('users').insert([
    {
    username: "michaelScott",
    password: "$2a$12$XOWTkbMp1F4Dzh3hP30o4es79sNaNdDmE4.rYY.yebU8ROkzhflzS",
    name: "Michael Scott",
    job_description: "Regional Manager of Dunder Mifflin"
    },

    {
    username: "joBennett",
    password: "$2a$12$PK7e0qkqjoWS5qOEMviDme3W9Wj0nWA5TOFlHxjuiTp.DgGUulOAK",
    name: "Joleen Bennett",
    job_description: "CEO of Sabre"
    },

    {
    username: "dwightSchrute",
    password: "$2a$12$ldL4zXzRVJ45gHooQfEkzezqwXHTKul9FsYTMSuN.cmkWgTLcnuN2",
    name: "Dwight Schrute",
    job_description: "Salesman/Assistant to the Regional Manager"
    },

    {
    username: "jimHalpert",
    password: "$2a$12$x1nvNCbqbxZJ7co7WfbfpuOovG1bzKM7Y29ZTGpGer5dCrrgvBLLq",
    name: "Jim Halpert",
    job_description: "Salesman/Co-Regional Manager"
    },

    {
    username: "pamHalpert",
    password: "$2a$12$yilXp.zioC2ULV/jQEwepeGRmdKpW3zJyaFcaVWNvG2WMnVdie5xm",
    name: "Jim Halpert",
    job_description: "Saleswoman/Office Administrator"
    },

    {
    username: "karenFilippelli",
    password: "$2a$12$3/QS1UfkZp6zikGYeTyH7uVw1fHwguZcEXuFO1yRZTxs6C4VAxzwS",
    name: "Karen Filippelli",
    job_description: "Regional Manager of Dunder Mifflin Utica"
    },

    {
    username: "andyBernard",
    password: "$2a$12$QgGgDFGZiO3vAlyeY5zEsOUBH5PpMcTmkUf72580rtpQB28dLV/TG",
    name: "Andy Bernard",
    job_description: "Salesman"
    },

    {
    username: "stanleyHudson",
    password: "$2a$12$3/QS1UfkZp6zikGYeTyH7uVw1fHwguZcEXuFO1yRZTxs6C4VAxzwS",
    name: "Stanley Hudson",
    job_description: "Salesman/Special Project Member"
    },

    {
    username: "phyllisLapin",
    password: "$2a$12$oDCXQXj5Wq02sKnwjXlCRet6c9csOoMfGdM99kV63nKW4zjNbCzqm",
    name: "Phyllis Lapin Vance",
    job_description: "Saleswoman"
    },

    {
    username: "ryanHoward",
    password: "$2a$12$57Z3i3RMe/9cP3C16PrZkef6tLirqrTxrs/Hbd9EHXIeLadolD0T.",
    name: "Ryan Howard",
    job_description: "Bowling Alley Attendant at Idle Hour Lanes"
    },

    {
    username: "creedBratton",
    password: "$2a$12$Qswk3G47WuPYQa6xMyvjnOmJoQYof5BsjX0yqSsKVT2ITpgsZ6qe6",
    name: "Creed Bratton",
    job_description: "Head of Quality Assurance"
    },

    {
    username: "meredithPalmer",
    password: "$2a$12$n08Y1vuzPIgW1WzvOm1bHOwnnjagKy4VMFNY0/zhZSM53WV50iTB2",
    name: "Meredith Palmer",
    job_description: "Head of Supplier Relations"
    },

    {
    username: "oscarMartinez",
    password: "$2a$12$/GEDFh2rxLnZvyJTk2KGk.MVMYpTaek7qmxzZVkJQXBJrc1PwWo6G",
    name: "Oscar Martinez",
    job_description: "Accountant at Dunder Mifflin"
    },

    {
    username: "kevinMalone",
    password: "$2a$12$6JQdWT8s72XXC2SAy1Vm9uHW5T/IrF4P6b6m7nz7FYuNqcTnftBk6",
    name: "Kevin Malone",
    job_description: "Accountant at Dunder Mifflin"
    },

    {
    username: "angelaMartin",
    password: "$2a$12$m7rkHPZzAJ3iqCb24ZSYju0PaEyfID.FUrBBDeQhppCXYLnzuSNmu",
    name: "Angela Martin",
    job_description: "Head Accountant at Dunder Mifflin"
    },

    {
    username: "kellyKapoor",
    password: "$2a$12$MbDc8/FZYRV/j6Yqe3jmDusUgV3HtfrrAThNLZwian2EcrnL7nyHW",
    name: "Kelly Kapoor",
    job_description: "Head of Customer Relations"
    },

    {
    username: "tobyFlenderson",
    password: "$2a$12$LM/SS3Wl6Thox.46ud6swuykYdT9KnK1xg8i5UXqklPbDvVLcI8UK",
    name: "Toby Flenderson",
    job_description: "Human Relations at Dunder Mifflin"
    },

    {
    username: "janLevinson",
    password: "$2a$12$ui65evd8Z37Vzw6pgJg5pO2fpW9BCApp6NITS9kxzB8e5C7dz2022",
    name: "Jan Levinson",
    job_description: "Vice President of North East Sales at Dunder Mifflin Corporate"
    },

    {
    username: "davidWallace",
    password: "$2a$12$msuuBrZV8zBUkqe8KyTiPOmG8tdGYn7D3s2roIA5nhCALWKdiBgsO",
    name: "David Wallace",
    job_description: "Chief Financial Officer at Dunder Mifflin Corporate"
    },

    {
    username: "erinHannon",
    password: "$2a$12$hGCTguqIB25b4q2ZGkAsleYyVZqg7Vm.Oc6mJNZDKAKEmCCls9kH2",
    name: "Kelly Erin Hannon",
    job_description: "Receptionist"
    },

    {
    username: "darryllPhilbin",
    password: "$2a$12$mU5AbwYU.Dq6S94LwT2qGe.37MOyrNvvtWXNODK0yzcC.xasPBnwq",
    name: "Darryll Philbin",
    job_description: "Warehouse Foreman"
    },

    {
    username: "bobVance",
    password: "$2a$12$4208G8i.ajqGlH/kT1fHMOS3xeqxUZB6/cl0yHiZAXBhP1Shst876",
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
