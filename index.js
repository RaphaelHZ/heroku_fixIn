const express = require("express");
const cors = require('cors');
const app = express();
const tags = require("./tags")
const pagto = require("./pagto")
const lista = require("./lista")
const login = require("./login")

app.use(cors());

app.use(express.json()); // -> req.body

app.get("/", function(req, res) {
    const resume = {
        author_original: 'Hernando de Paula Brasileiro',
        modificado_por: 'Grupo app FixIn - UNIFIL',
        created_at: '2021-06-28 17:00',
        description: 'NodeJs And Postgre API'
    };
    res.json(resume);
});

app.use("/tags", tags);
app.use("/pagto", pagto);
app.use("/lista", lista);
app.use("/login", login);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server is listening on port 5000');
});