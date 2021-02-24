-- Exercício 7
USE hr;
-- 1. Escreva uma consulta para encontrar os endereços (location_id, street_address, city, state_province, 
-- country_name) de todos os departamentos. 
SELECT d.department_name, d.location_id, l.street_address, l.city, l.state_province, c.country_name
FROM departments AS d
NATURAL JOIN locations AS l
NATURAL JOIN countries AS c;

-- 2. Escreva uma consulta para encontrar o nome (primeiro_nome, sobrenome), 
-- ID do departamento e nome de todos os funcionários. 
SELECT e.first_name, e.last_name, e.department_id, d.department_name
FROM employees AS e
INNER JOIN departments AS d
ON e.DEPARTMENT_ID = d.DEPARTMENT_ID;
-- 3. Escreva uma consulta para encontrar o nome (first_name, last_name), cargo, ID do departamento e 
-- nome dos funcionários que trabalham em Londres.
SELECT e.first_name, e.last_name, j.job_title, e.department_id, d.department_name
FROM employees AS e
LEFT JOIN departments AS d
ON e.DEPARTMENT_ID = d.DEPARTMENT_ID
LEFT JOIN jobs AS j
ON e.JOB_ID = j.JOB_ID;

-- https://www.w3resource.com/mysql-exercises/join-exercises/




















