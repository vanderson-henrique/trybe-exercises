const fs = require('fs');

function getAll() {
  const rawData = fs.readFileSync('./products.json');
  const products = JSON.parse(rawData);

  return products;
}

function getById(id) {
  const rawData = fs.readFileSync('./products.json');

  const product = JSON.parse(rawData).find(
    (product) => product.id === parseInt(id)
  );

  return product;
}

function add(name, brand) {
  const rawData = fs.readFileSync('./products.json');
  const products = JSON.parse(rawData);

  const id = products[products.length - 1].id + 1;

  const product = { id, name, brand };
  products.push(product);

  fs.writeFile('./products.json', JSON.stringify(products), 'utf8', (err) => {
    if (err) throw err;
    console.log('write file ok');
  });

  return product;
}

function remove(id) {
  const rawData = fs.readFileSync('./products.json');
  const products = JSON.parse(rawData).filter(
    (product) => product.id !== parseInt(id)
  );

  fs.writeFile('./products.json', JSON.stringify(products), 'utf8', (err) => {
    if (err) throw err;
    console.log('write file ok');
  });

  return products;
}

function addOrUpdate(id, name, brand) {
  const rawData = fs.readFileSync('./products.json');
  const products = JSON.parse(rawData);

  const product = products.find((product) => product.id === parseInt(id));

  if (product) {
    product.name = name;
    product.brand = brand;

  } else {
    const newId = products[products.length - 1].id + 1;
    const newProduct = { id: newId, name, brand };
    products.push(newProduct);
  }

  fs.writeFile('./products.json', JSON.stringify(products), 'utf8', (err) => {
    if (err) throw err;
    console.log('write file ok');
  });

  return products;
}

module.exports = { add, remove, getAll, getById, addOrUpdate };