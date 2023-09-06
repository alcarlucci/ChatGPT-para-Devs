// exemplo de modelo para produtos

const mongoose = require('mongoose');

// Schema do produto e o modelo Mongoose correspondente
const produtoSchema = new mongoose.Schema({
  codigo: String,
  nome: String,
  descricao: String,
  preco: Number,
});

module.exports = mongoose.model('Produto', produtoSchema);
