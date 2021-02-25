-- Exercício 7
-- https://www.w3resource.com/mysql-exercises/join-exercises/

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

-- 4. Escreva uma consulta para encontrar a id do funcionário, nome (last_name) junto com seu manager_id e 
-- nome (last_name).
SELECT e.employee_id, e.last_name, m.manager_id, m.last_name
FROM employees AS e
LEFT JOIN employees AS m
ON e.MANAGER_ID = m.EMPLOYEE_ID;

-- 5. Escreva uma consulta para encontrar o nome (first_name, last_name) e a data de contratação dos funcionários 
-- que foram contratados após 'Jones'. -- após 1987-09-20 (11 REGISTROS)
SELECT FIRST_NAME, LAST_NAME FROM employees 
	WHERE HIRE_DATE > (
		SELECT HIRE_DATE FROM employees WHERE LAST_NAME = 'Jones'
    );
    
-- 6. Escreva uma consulta para obter o nome do departamento e o número de funcionários do departamento.
SELECT d.DEPARTMENT_NAME, COUNT(e.DEPARTMENT_ID) AS 'Nº Funcionários'
FROM departments AS d
INNER JOIN employees AS e
ON d.DEPARTMENT_ID = e.DEPARTMENT_ID
GROUP BY e.DEPARTMENT_ID;

-- 7. Escreva uma consulta para encontrar a ID do funcionário, cargo, número de dias entre a data de término e 
-- a data de início para todos os empregos no departamento 90. 
SELECT jh.employee_id, j.job_title, (jh.end_date - jh.start_date) AS 'nº dias'
FROM job_history AS jh
INNER JOIN jobs AS j
ON jh.JOB_ID = j.JOB_ID
WHERE jh.DEPARTMENT_ID = 90;

-- 8. Escreva uma consulta para exibir a ID do departamento, o nome e o nome do gerente.
SELECT d.department_id, d.department_name, e.first_name, e.last_name
FROM departments AS d
INNER JOIN employees AS e
ON d.MANAGER_ID = e.EMPLOYEE_ID;

-- 9. Escreva uma consulta para exibir o nome do departamento, o nome do gerente e a cidade. 
SELECT d.department_name, e.first_name, e.last_name, l.city
FROM departments AS d
LEFT JOIN employees AS e
ON d.MANAGER_ID = e.EMPLOYEE_ID
INNER JOIN locations AS l
ON d.LOCATION_ID = l.LOCATION_ID;

-- 10. Escreva uma consulta para exibir o cargo e o salário médio dos funcionários.
SELECT j.job_title, ROUND(AVG(e.salary), 2) AS 'Salário médio'
FROM jobs AS j
INNER JOIN employees AS e
ON j.JOB_ID = e.JOB_ID
GROUP BY e.JOB_ID;

-- 11. Escreva uma consulta para exibir o cargo, o nome do funcionário e a diferença entre o 
-- salário do funcionário e o salário mínimo do trabalho.

SELECT j.job_title, e.first_name, e.last_name, (e.salary - j.min_salary) AS 'Diferença para o mínimo'
FROM jobs AS j
NATURAL JOIN employees AS e;

-- 12. Escreva uma consulta para exibir o histórico de cargos que foram feitos por qualquer funcionário que está
-- atualmente recebendo mais de 10.000 de salário.
SELECT jh.job_id, jh.EMPLOYEE_ID, e.first_name, e.last_name
FROM job_history AS jh
INNER JOIN employees AS e
ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
WHERE e.SALARY > 10000;

-- 13. Escreva uma consulta para exibir o nome do departamento, nome (first_name, last_name), data de contratação,
--  salário do gerente para todos os gerentes com mais de 15 anos de experiência.
SELECT d.department_name, e.first_name, e.last_name, e.hire_date, e.salary
FROM departments AS d
INNER JOIN employees AS e
ON d.MANAGER_ID = e.EMPLOYEE_ID
WHERE DATEDIFF(DATE(NOW()), e.HIRE_DATE) > (15 * 365);








































































