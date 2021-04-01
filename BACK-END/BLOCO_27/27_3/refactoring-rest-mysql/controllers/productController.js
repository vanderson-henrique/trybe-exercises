const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  if (!products) res.status(404).json({ message: "Nenhum produto encontrado" })

  res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) return res.status(404).json({ message: "Produto não encontrado" })

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);

    if(!products) return res.status(404).json({ message: "Produto não encontrado para deletar" });

    res.status(200).json({ message: `Produto ${products.name} deletado com sucesso` });
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }  
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.update(req.params.id, name, brand);

    if(!products) return res.status(404).json({ message: "Produto não encontrado para alterar" });

    res.status(204).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;