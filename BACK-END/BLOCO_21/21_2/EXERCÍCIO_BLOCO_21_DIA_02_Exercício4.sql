-- Exercício 4
USE praticando;
-- 2.1 Selecione o sobrenome de todos os funcionários.
SELECT LastName FROM Employees;
-- 2.2 Selecione o sobrenome de todos os funcionários, sem duplicatas.
SELECT DISTINCT(LastName) FROM Employees;
-- 2.3 Selecione todos os dados de funcionários cujo sobrenome seja "Smith".
SELECT * FROM Employees WHERE LastName = 'Smith';
-- 2.4 Selecione todos os dados de funcionários cujo sobrenome seja "Smith" ou "Doe".
SELECT * FROM Employees WHERE LastName in ('Smith', 'Doe');
-- 2.5 Selecione todos os dados de funcionários que trabalham no departamento 14.
SELECT * FROM Employees WHERE Department = 14;
-- 2.6 Selecione todos os dados de funcionários que trabalham no departamento 37 ou departamento 77.
SELECT * FROM Employees WHERE Department IN (37, 77);
-- 2.7 Selecione todos os dados de funcionários cujo sobrenome comece com um "S".
SELECT * FROM Employees WHERE LastName LIKE 's%';
-- 2.8 Selecione a soma dos orçamentos de todos os departamentos.
SELECT SUM(Budget) AS 'Total do orçamento' FROM Departments;
-- 2.9 Selecione o número de funcionários em cada departamento (você só precisa mostrar o código do departamento
-- e o número de funcionários).
SELECT Department, COUNT(*) AS 'Nº Funcionários' FROM Employees GROUP BY Department;
-- 2.10 Selecione todos os dados dos funcionários, incluindo os dados de cada departamento do funcionário.
SELECT * FROM Employees AS e
INNER JOIN Departments AS d
ON d.`Code` = e.Department;

-- 2.11 Selecione o nome e o sobrenome de cada funcionário, juntamente com o nome e o orçamento do departamento 
-- do funcionário.
SELECT e.`Name`, e.LastName, d.`Name`, d.Budget
FROM Employees AS e
INNER JOIN Departments AS d
ON d.`Code` = e.Department;

-- 2.12 Selecione o nome e o sobrenome dos funcionários que trabalham em departamentos
-- com um orçamento superior a $ 60.000.
SELECT e.`Name`, e.LastName
FROM Employees AS e
INNER JOIN Departments AS d
ON e.Department = d.`Code`
WHERE d.Budget > 60000;

-- 2.13 Selecione os departamentos com um orçamento maior do que o orçamento médio de todos os departamentos.
SELECT `Name`
FROM Departments
WHERE Budget > (SELECT AVG(Budget) FROM Departments);

-- 2.14 Selecione os nomes dos departamentos com mais de dois funcionários.
SELECT d.`Name`
FROM Departments AS d
INNER JOIN Employees AS e
ON d.`Code` = e.Department
GROUP BY d.`Name`
HAVING COUNT(*) > 2;

-- Com subquery
SELECT `Name`
FROM Departments
WHERE `Code` IN (
	SELECT Department FROM Employees GROUP BY Department HAVING COUNT(*) > 2
);
