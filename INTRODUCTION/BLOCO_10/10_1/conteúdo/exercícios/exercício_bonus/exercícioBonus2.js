// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  // item é um objeto que contem name e price
  // price é o novo preço do produto
  // o objeto item não pode ser modificado;

  const newItem = { name, price };
  newItem.name = item.name;
  newItem.price = price;
  return newItem;
};

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  // cart é um array
  // item é o item que deverá ser incluído em um array diferente
  // deve-se criar um novo array

  const newArray = [];
  newArray.push(item);
  return newArray;
};

module.exports = { setPrice, addToCart };
