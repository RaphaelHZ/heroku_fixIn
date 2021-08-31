const pool = require("./db");

//Pegar todos os item da tabela
const getAllLogins = async (request, response) => {
  pool.query('SELECT * FROM login', (error, results) => {
    response.status(200).json(results.rows);
  });
};

//Pega o item da tabela de acordo com o cpf fornecido
const getLoginCpf = (request, response) => {
  const cpf = parseInt(request.params.cpf);
  pool.query('SELECT * FROM login WHERE cpf = $1', [cpf], (error, results) => {
    response.status(200).json(results.rows);
  });
};

//Adiciona um novo item na tabela
const addLogin = async (request, response) => {
  const { cpf, senha, email } = request.body;
  pool.query('INSERT INTO login (cpf, senha, email) VALUES ($1, $2, $3)', [cpf, senha, email], (error, results) => {
    response.status(201).send(`Login adicionado com sucesso.`);
  });
};
  
//Corrige os dados de login do cpf informado
const updateLogin = (request, response) => {
  const cpf = parseInt(request.params.cpf);
  const { senha, email } = request.body;
  pool.query(
    'UPDATE login SET senha = $1, email = $2 WHERE cpf = $3', [senha, email, cpf], (error, results) => {
  response.status(200).send(`Dados de login do CPF ${cpf} foram atualizados.`);
    }
  );
};
  
  //Apaga o primeiro item da tabela
  const deleteLogin = (request, response) => {
    const cpf = parseInt(request.params.cpf);
    pool.query('DELETE FROM login WHERE cpf = $1', [cpf], (error, results) => {
      response.status(200).send(`Login do CPF ${id} foi apagado.`);
    });
  };

  //TESTE FILTRO
  const getFiltro = async (request, response) => {
    const sql = "SELECT distinct fixaval.nota, fixcad.nomefantasia, fixcad.fone" +
    "FROM fixin.fixserv INNER JOIN ((fixin.fixcad INNER JOIN fixin.fixaval ON fixin.fixcad.cpf = fixin.fixaval.cpf) INNER JOIN "+
    "fixin.fixpag ON fixcad.cpf = fixpag.cpf) ON fixserv.cpf = fixcad.cpf"+
    "WHERE (((fixcad.cidade)='Londrina') AND ((fixpag.pagtocc)=True) AND ((fixserv.servazul)=True))"+
    "ORDER BY fixaval.nota desc";
    pool.query(sql, (error, results) => {
      response.status(200).json(results.rows);
    });
  };

  module.exports = {
    getAllLogins,
    getLoginCpf,
    getFiltro,
    addLogin,
    updateLogin,
    deleteLogin
  };