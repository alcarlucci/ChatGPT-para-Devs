// exemplo de arquivo de rota para produtos - rotas da API relacionadas aos produtos

// routes/produtos.js
const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

// Rota para listar todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para criar um novo produto
router.post('/', async (req, res) => {
  const produto = new Produto(req.body);
  try {
    const novoProduto = await produto.save();
    res.status(201).json(novoProduto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para atualizar um produto pelo ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await Produto.findByIdAndUpdate(id, req.body, { new: true });
    res.json(produto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para excluir um produto pelo ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Produto.findByIdAndDelete(id);
    res.json({ message: 'Produto excluído com sucesso.' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
