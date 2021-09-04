const express = require('express');
const app = express();
const qLogin = require('./queryLogin');
const qfiltro = require('./filtro');
const port = process.env.PORT || 5000;

//proximas lihas para teste
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
//ate aqui

app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor do FixIn rodando na porta ${port}.`);
});

app.get('/fixin/', qfiltro.getAll);
app.get('/londrina/', qfiltro.getFiltro);
app.get('/resultado/', qfiltro.getResultado);
app.get('/login/', qLogin.getAllLogins);
app.get('/login/:cpf', qLogin.getLoginCpf);
app.post('/login/', qLogin.addLogin);
app.put('/login/:cpf', qLogin.updateLogin);
app.delete('/login/:cpf', qLogin.deleteLogin);