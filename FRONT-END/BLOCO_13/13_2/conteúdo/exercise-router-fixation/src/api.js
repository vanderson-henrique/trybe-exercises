export async function getCategories() {
    const requestReturn = await fetch(
      'https://api.mercadolibre.com/sites/MLB/categories',
    );
    const objectReturn = await requestReturn.json();
    return objectReturn;
  }
  
  export async function getProductsFromCategoryAndQuery(categoryId, query) {
    let requestReturn;
    if (categoryId && query) {
      requestReturn = await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`,
      );
    } else if (categoryId) {
      requestReturn = await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
      );
    } else {
      requestReturn = await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
      );
    }
  
    const objectReturn = requestReturn.json();
    return objectReturn;
  }
  