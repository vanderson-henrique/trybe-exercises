const ProductModel = require('../models/productModel');

const getAllProducts = (req, res) => {
  const products = ProductModel.getAll();

  res.status(200);
  res.json(products);
};

const getProductById = (req, res) => {
  const product = ProductModel.getById(req.params.id);

  if (product === null) {
    res.status(404);
    return res.send({ message: 'Produto não encontrado' });
  }

  res.status(200);
  res.json(product);
};

const createProduct = (req, res) => {
  const { id, name, brand } = req.body;

  try {
    const newProduct = ProductModel.add(id, name, brand);

    res.status(200);
    res.json(newProduct);
  } catch (e) {
    res.status(500);
    res.send({ message: 'Algo deu errado' });
  }
};

const deleteProductById = (req, res) => {
  try {
    const products = ProductModel.remove(req.params.id);

    res.status(200);
    res.json(products);
  } catch (e) {
    res.status(500);
    res.send({ message: 'Algo deu errado' });
  }
};

const editProductById = (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = ProductModel.addOrUpdate(req.params.id, name, brand);

    res.status(200);
    res.json(products);
  } catch (e) {
    res.status(500);
    res.send({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
};