-- Exercício 5
USE praticando;
-- 3.1 Selecione todos os armazéns.
SELECT * FROM Warehouses;

-- 3.2 Selecione todas as caixas com um valor maior que $ 150.
SELECT * FROM Boxes WHERE `Value` > 150;

-- 3.3 Selecione todos os conteúdos distintos em todas as caixas.
SELECT DISTINCT(Contents) FROM Boxes;

-- 3.4 Selecione o valor médio de todas as caixas.
SELECT AVG(`Value`) AS Valor_medio FROM Boxes;

-- 3.5 Selecione o código do armazém e o valor médio das caixas em cada armazém.
SELECT Warehouse, AVG(`Value`) AS valor_medio FROM Boxes GROUP BY Warehouse;

-- 3.6 Igual ao exercício anterior, mas selecione apenas aqueles armazéns 
-- onde o valor médio das caixas seja maior que 150.
SELECT Warehouse, AVG(`Value`) AS valor_medio FROM Boxes GROUP BY Warehouse HAVING valor_medio > 150;

-- 3.7 Selecione o código de cada caixa, junto com o nome da cidade em que a caixa está localizada.
SELECT b.`Code`, w.Location
FROM Boxes AS b
INNER JOIN Warehouses AS w
ON w.`Code` = b.Warehouse;

-- 3.8 Selecione os códigos de depósito, junto com o número de caixas em cada depósito.
-- Opcionalmente, leve em consideração que alguns depósitos estão vazios (ou seja, a contagem de caixas deve 
-- aparecer como zero, em vez de omitir o depósito do resultado).
SELECT w.`Code`, COUNT(b.Warehouse)
FROM Warehouses AS w
LEFT JOIN Boxes AS b
ON w.`Code` = b.Warehouse
GROUP BY w.`Code`;

-- 3.9 Selecione os códigos de todos os depósitos que estão saturados 
-- (um depósito está saturado se o número de caixas nele for maior que a capacidade do depósito).
SELECT w.`Code`, COUNT(b.Warehouse) AS Qtde_caixas, w.Capacity
FROM Warehouses AS w
INNER JOIN Boxes AS b
ON w.`Code` = b.Warehouse
GROUP BY w.`Code`
HAVING Qtde_caixas > w.Capacity;

-- com subqueries
SELECT `Code` FROM Warehouses
WHERE Capacity < (
	SELECT COUNT(*) FROM Boxes WHERE Warehouse = Warehouses.Code 
);

-- 3.10 Selecione os códigos de todas as caixas localizadas em Chicago.
SELECT `Code` FROM Boxes
	WHERE Warehouse IN (
		SELECT `Code` FROM Warehouses WHERE Location = 'Chicago'
    );

-- com INNER JOIN
SELECT b.`Code` FROM Boxes AS b
INNER JOIN Warehouses AS w
ON b.Warehouse = w.`Code`
WHERE w.Location = 'Chicago';












