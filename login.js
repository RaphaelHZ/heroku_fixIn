// login.js -  route module.
const pool = require("./db");
var express = require('express');
var router = express.Router();

//Função para listar todos os logins no Heroku para fins de teste
router.get("/", async(req, res) => {
    try {

        const todosLogin = await pool.query("SELECT * FROM login");
        res.json(todosLogin.rows);
    
    } catch(err) {
        console.log(err.message);
        res.json(JSON.stringify({ message: "NOK" })); 
    }

});

//Função para pegar o nome na tabela de login
router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const getNome = await pool.query("SELECT * FROM login WHERE cpf = $1",[ id ]);
        res.json(getNome.rows[0]);
    } catch(err) {
        console.log(err.message);
        res.json(JSON.stringify({ message: "NOK" })); 
    }
});

//Função para corrigir o nome na tabela de login
router.put("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { title, author } = req.body;
        const alteraNome = await pool.query(
            "UPDATE $1 SET cpf = $2, WHERE cpf = $2 RETURNING *",
            [ table, cpf ]
        );
        res.json(alteraNome.rows[0]); 
    } catch(err) {
        console.log(err.message);
        res.json(JSON.stringify({ message: "NOK" })); 
    }
});


router.post("/", async(req, res) => {
    try {
        //console.log(req.body);
        const { cpf, nome } = req.body;
        const novoLogin = await pool.query(
            "INSERT INTO login ( cpf, cartaocradito ) VALUES ( nextval('books_sequence'), $1, $2 ) RETURNING *",
            [ cpf, nome ]
        );
        res.json(novoLogin.rows[0]); 
        //res.json(JSON.stringify({ message: "OK" })); 
    } catch(err) {
        console.log(err.message);
        res.json(JSON.stringify({ message: "NOK" })); 
    }
});

//Função para apagar um login
router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const delLogin = await pool.query(
            "DELETE FROM login WHERE cpf = $1 RETURNING *",
            [ id ]
        );
        res.json(delLogin.rows[0]); 
    } catch(err) {
        console.log(err.message);
        res.json(JSON.stringify({ message: "NOK" })); 
    }
});

module.exports = router;