-- Exercício 4: Exercícios sobre manipulação de strings
USE hr;
SELECT * FROM employees;
SET SQL_SAFE_UPDATES = 0;
-- 1. Escreva uma consulta para obter o job_id e o id do funcionário relacionado.
SELECT JOB_ID, GROUP_CONCAT(EMPLOYEE_ID, ' ') FROM employees GROUP BY JOB_ID;

/* 2. Escreva uma consulta para atualizar a parte do phone_number na tabela de funcionários, dentro do número de telefone,
 a substring '124' será substituída por '999'. */
 UPDATE employees 
 SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '124', '999')
 WHERE PHONE_NUMBER LIKE '%124%';
 
-- 3. Escreva uma consulta para obter os detalhes dos funcionários cujo comprimento do primeiro nome seja maior ou igual
-- a 8.
SELECT * FROM employees WHERE LENGTH(FIRST_NAME) >= 8;

-- 4. Escreva uma consulta para exibir zeros à esquerda antes do salário máximo e mínimo. 
SELECT * FROM jobs;
SELECT job_id,  LPAD( max_salary, 7, '0') ' Max Salary',
LPAD( min_salary, 7, '0') ' Min Salary' 
FROM jobs;

--  Escreva uma consulta para anexar '@ example.com' ao campo de e-mail.
UPDATE employees
set EMAIL = CONCAT(EMAIL, '@example.com');

-- 6. Escreva uma consulta para obter a id do funcionário, o nome e o mês de contratação.
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) AS 'Mês de contratação' FROM employees;

-- 7. Escreva uma consulta para obter a id do funcionário, id do e-mail (descarte os últimos três caracteres).
SELECT EMPLOYEE_ID, REVERSE(SUBSTRING(REVERSE(EMAIL), 4)) FROM employees;

-- 8. Escreva uma consulta para localizar todos os funcionários cujos nomes estão em maiúsculas.
SELECT * FROM employees WHERE FIRST_NAME = BINARY UCASE(FIRST_NAME);

-- 9. Escreva uma consulta para extrair os últimos 4 caracteres dos números de telefone.
SELECT RIGHT(PHONE_NUMBER, 4) FROM employees;

-- 10. Escreva uma consulta para obter a última palavra do endereço da rua.
SELECT location_id, street_address, 
SUBSTRING_INDEX(REPLACE(REPLACE(REPLACE(street_address,',',' '),')',' '),'(',' '),' ',-1) 
AS 'Last--word-of-street_address' 
FROM locations;

-- 11. Escreva uma consulta para obter os locais com comprimento mínimo de rua.
SELECT * FROM locations
	WHERE LENGTH(STREET_ADDRESS) <= (SELECT MIN(LENGTH(STREET_ADDRESS)) FROM locations);
    
-- 12. Escreva uma consulta para exibir a primeira palavra dos cargos que contenham mais de uma palavra.
SELECT * FROM jobs;
SELECT job_title, SUBSTR(job_title,1, INSTR(job_title, ' ')-1)
FROM jobs;

-- 13. Escreva uma consulta para exibir o comprimento do primeiro nome para funcionários, 
-- onde o sobrenome contém o caractere 'c' após a 2ª posição.
SELECT * FROM employees;
SELECT FIRST_NAME, LAST_NAME, LENGTH(FIRST_NAME) FROM employees
	WHERE SUBSTRING(LAST_NAME, 3) LIKE '%c%';

/* 14. Escreva uma consulta que exiba o nome e o comprimento do primeiro nome para todos os funcionários cujo 
nome comece com as letras 'A', 'J' ou 'M'. Dê a cada coluna um rótulo apropriado. Classifique os resultados pelos nomes
 dos funcionários. */
 
 SELECT FIRST_NAME, LENGTH(FIRST_NAME) AS 'Comprimento do nome' FROM employees
	WHERE FIRST_NAME LIKE 'A%'
    OR FIRST_NAME LIKE 'J%'
    OR FIRST_NAME LIKE 'M%'
ORDER BY FIRST_NAME;

/* 15. Escreva uma consulta para exibir o nome e o salário de todos os funcionários. Formate o salário com 10 caracteres,
preenchido à esquerda com o símbolo $. Identifique a coluna SALÁRIO.*/
SELECT * FROM employees;
SELECT FIRST_NAME, LPAD(SALARY, 10, '$') AS 'Salário' FROM employees;

/* 16. Escreva uma consulta para exibir os primeiros oito caracteres dos nomes dos funcionários e indicar os valores de 
seus salários com o sinal '$'. Cada sinal de '$' significa mil dólares. Classifique os dados em ordem decrescente de 
salário.*/
SELECT * FROM employees;
SELECT LEFT(FIRST_NAME, 8), REPEAT('$', SALARY DIV 1000) 'SALARIO ($)', SALARY FROM employees;

/* 17. Escreva uma consulta para exibir os funcionários com seu código, nome, sobrenome e data de admissão que contrataram 
no sétimo dia de qualquer mês ou no sétimo mês de qualquer ano.*/
SELECT * FROM employees;
SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME, HIRE_DATE FROM employees
	WHERE DAY(HIRE_DATE) = 7
    OR MONTH(HIRE_DATE) = 07;


























 
 
 
 
 