// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      post: 5432,
      user: 'postgres',
      password: process.env.LOCAL_PASSWORD,
      database: 'users'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      min: 2,
      max: 10,
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
     /*connection: {
       host: 'localhost',
       post: 5432,
       user: 'postgres',
       password: process.env.LOCAL_PASSWORD,
       database: 'users'
    },
    */
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      min: 2,
      max: 10,
    }
  },
};

  // development: {    <--- SQLite3 database setup, should we need to revert for any reason
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './data/users.db3'
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './data/migrations'
  //   },
  //   seeds: {
  //     directory: './data/seeds'
  //   },
  //   pool: {
  //     afterCreate: (conn, done) => {
  //       conn.run('PRAGMA foreign_keys = ON', done);
  //     }
  //   }
  // }
