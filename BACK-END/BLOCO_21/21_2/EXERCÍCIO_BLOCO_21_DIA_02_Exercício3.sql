-- Exercício 3
USE praticando;
-- 1.1 Selecione os nomes de todos os produtos da loja.
SELECT `Name` FROM Products;
-- 1.2 Selecione os nomes e os preços de todos os produtos da loja.
SELECT `Name`, Price FROM Products;
-- 1.3 Selecione o nome dos produtos com um preço menor ou igual a $ 200.
SELECT `Name` FROM Products WHERE Price <= 200;
-- 1.4 Selecione todos os produtos com preço entre $ 60 e $ 120.
SELECT * FROM Products WHERE Price BETWEEN 60 AND 120;
-- 1.5 Selecione o nome e o preço em centavos (ou seja, o preço deve ser multiplicado por 100).
SELECT `Name`, (Price * 100) AS 'Preço em centavos' FROM Products;
-- 1.6 Calcule o preço médio de todos os produtos.
SELECT AVG(Price) AS 'Preço médio' FROM Products;
-- 1.7 Calcule o preço médio de todos os produtos com código do fabricante igual a 2.
SELECT AVG(Price) AS 'Preço Médio #2' FROM Products WHERE Manufacturer = 2;
-- 1.8 Calcule o número de produtos com um preço maior ou igual a $ 180.
SELECT COUNT(*) FROM Products WHERE Price >= 180;
-- 1.9 Selecione o nome e o preço de todos os produtos com um preço maior ou igual a $ 180 e
-- classifique primeiro por preço (em ordem decrescente) e, em seguida, por nome (em ordem crescente).
SELECT `Name`, Price FROM Products WHERE Price >= 180 ORDER BY Price DESC, `Name` ASC;
-- 1.10 Selecione todos os dados dos produtos, incluindo todos os dados do fabricante de cada produto.
SELECT * FROM Products as p
INNER JOIN Manufacturers as m
ON p.Manufacturer = m.`Code`;

-- 1.11 Selecione o nome do produto, preço e nome do fabricante de todos os produtos.
SELECT p.`Name`, p.Price, m.`Name`
FROM Products AS p
INNER JOIN Manufacturers AS m
ON p.Manufacturer = m.`Code`;

-- 1.12 Selecione o preço médio dos produtos de cada fabricante, mostrando apenas o código do fabricante.
SELECT Manufacturer, AVG(Price) AS 'Preço médio' FROM Products GROUP BY Manufacturer;

-- 1,13 Selecione o preço médio dos produtos de cada fabricante, mostrando o nome do fabricante.
SELECT m.`Name`, AVG(p.Price) AS 'Preço médio'
FROM Manufacturers AS m
INNER JOIN Products AS p
ON m.`Code` = p.Manufacturer
GROUP BY m.`Name`;

-- 1.14 Selecione os nomes dos fabricantes cujos produtos têm um preço médio maior ou igual a $ 150.
SELECT m.`Name`
FROM Manufacturers AS m
INNER JOIN Products AS p
ON m.`Code` = p.Manufacturer
GROUP BY m.`Name`
HAVING AVG(p.Price) >= 150;








