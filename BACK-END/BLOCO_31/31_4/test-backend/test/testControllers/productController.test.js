const productController = require('../../controllers/productController');
const ProductModel = require('../../models/productModel');

describe('Product Controller', () => {
  it('Função: getAllProducts', () => {
    // Definindo um objeto simulando o que está no banco
    const mockProducts = {
      data: [
        {
          id: 1,
          name: 'Skol',
          brand: 'Ambev'
        },
        {
          id: 2,
          name: 'Iphone',
          brand: 'Apple'
        }
      ]
    };
// Definindo as funções res.status e res.json como funções genéricas, apenas para verificar
// se elas foram chamadas com os parâmetros corretos
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };

    const mockReq = {};
// Monitorando se a função getAll de ProductModel foi chamada e definindo um valor padrão
    const spyAdd = jest.spyOn(ProductModel, 'getAll').mockReturnValueOnce(mockProducts)

    // chamando a função para testar, passando o req e res mockados
    productController.getAllProducts(mockReq, mockRes);
  
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockProducts);
    expect(spyAdd).toBeCalledTimes(1);
  });
  it('Função: getProductById quando encontra o produto', () => {
    const mockProducts = {
      data: [
        {
          id: 1,
          name: 'Skol',
          brand: 'Ambev'
        },
        {
          id: 2,
          name: 'Iphone',
          brand: 'Apple'
        }
      ]
    };

    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };

    const mockReq = {
      params: {
        id: 1
      }
    };

    const spyGetById = jest.spyOn(ProductModel, 'getById')
      .mockReturnValueOnce(mockProducts[0])

    productController.getProductById(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockProducts[0]);
    expect(spyGetById).toBeCalledTimes(1);
    spyGetById.mockRestore();
  });
  it('Função: getProductById quando não encontra o produto', () => {
    const mockProducts = null;

    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const mockReq = {
      params: {
        id: 1
      }
    };

    const spyGetById = jest.spyOn(ProductModel, 'getById')
      .mockReturnValueOnce(mockProducts)

    productController.getProductById(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toHaveBeenCalledWith({ message: 'Produto não encontrado' });
    expect(spyGetById).toBeCalledTimes(1);
    spyGetById.mockRestore();
  });
});
