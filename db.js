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
  user: 'admin',
  host: 'localhost',
  database: 'fixin',
  password: 'admin',
  port: 5432
}); */
module.exports = pool;