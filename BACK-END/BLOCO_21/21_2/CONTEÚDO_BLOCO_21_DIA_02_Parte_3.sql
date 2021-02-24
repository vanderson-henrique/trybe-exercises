USE hotel;

-- 1. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT Id, Title FROM Books AS b
	WHERE NOT EXISTS (
		SELECT * FROM Books_Lent WHERE book_id = b.Id
    );

-- 2. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados
-- e que contêm a palavra "lost" no título.
SELECT Id, Title FROM Books AS b
	WHERE EXISTS (
		SELECT * FROM Books_Lent WHERE returned IS FALSE AND b.Id = book_id AND Title LIKE '%lost%'
    );

-- 3. Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT `Name` FROM Customers AS c
	WHERE NOT EXISTS (
		SELECT * FROM CarSales WHERE CustomerID = c.CustomerId
    );
    
-- 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , 
-- exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT Customers.`Name`, Cars.`Name`
FROM Customers
INNER JOIN CarSales
ON Customers.CustomerId = CarSales.CustomerID
INNER JOIN Cars
ON CarSales.CarID = Cars.Id;

    






















