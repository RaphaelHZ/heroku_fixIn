//Estava no do Hernando, vou tentar por para facilitar o uso nos módulos
const Pool = require("pg").Pool;
let connString = process.env.DATABASE_URL
const pool = new Pool({
    connectionString : connString,
    port: 5432,
    ssl: { rejectUnauthorized: false }
});


/* const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432
}); */
module.exports = pool;