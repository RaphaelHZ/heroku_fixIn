const pool = require("./db");

//Pegar todos os item da tabela
const getAll = async (request, response) => {
    pool.query('SELECT * FROM fixin.fixincompleto', (error, results) => {
      response.status(200).json(results.rows);
    });
  };

  //TESTE RESULTADO
const getResultado = async (request, response) => {
pool.query("SELECT * FROM fixin.fixincompleto WHERE (cidade = 'Londrina') AND $2 = true AND $3 = true", (error, results) => {
    response.status(200).json(results.rows);
    });
};

  //TESTE FILTRO
const getFiltro = async (request, response) => {
pool.query("SELECT * FROM fixin.fixincompleto WHERE (cidade = 'Londrina')", (error, results) => {
    response.status(200).json(results.rows);
    });
}; 

module.exports = {
    getAll,
    getFiltro,
    getResultado
};