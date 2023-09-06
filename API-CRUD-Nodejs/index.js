// arquivo principal da aplicação Express

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
require('./db'); // Importa o arquivo de conexão com o banco de dados
const produtosRouter = require('./routes/produtos');

app.use(bodyParser.json());

// Rota base da API
app.get('/', (req, res) => {
  res.send('API de produtos');
});

// Rotas relacionadas aos produtos
app.use('/produtos', produtosRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
