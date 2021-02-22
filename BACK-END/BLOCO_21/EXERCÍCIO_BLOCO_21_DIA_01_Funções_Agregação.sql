-- Exercício 3: Exercícios sobre funções de agregação
USE hr;
-- 1. Escreva uma consulta para listar o número de empregos disponíveis na tabela de funcionários.
SELECT COUNT(DISTINCT JOB_ID) FROM employees;

-- 2. Escreva uma consulta para obter o total de salários a pagar aos funcionários.
SELECT SUM(SALARY) AS total_salario FROM employees;

-- 3. Escreva uma consulta para obter o salário mínimo da tabela de funcionários.
SELECT MIN(SALARY) AS menor_salario FROM employees;

-- 4. Escreva uma consulta para obter o salário máximo de um funcionário que trabalha como Programador. 
SELECT MAX(SALARY) FROM employees WHERE JOB_ID = 'IT_PROG';

-- 5. Escreva uma consulta para obter o salário médio e o número de funcionários que trabalham no departamento 90.
SELECT DEPARTMENT_ID,
	   AVG(SALARY) AS salario_medio,
       COUNT(*) AS numero_funcionarios 
	FROM employees
    WHERE DEPARTMENT_ID = 90; 
    
-- 6. Escreva uma consulta para obter o maior, o menor, a soma e o salário médio de todos os funcionários.
SELECT 
	MAX(SALARY) AS maior_salario,
    MIN(SALARY) AS menor_salario,
    SUM(SALARY) AS total_salario,
    ROUND(AVG(SALARY), 0) AS media_salario
FROM employees;

-- 7. Escreva uma consulta para obter o número de funcionários com o mesmo trabalho.
SELECT JOB_ID, COUNT(*) AS numero_funcionarios FROM employees GROUP BY JOB_ID;

-- 8. Escreva uma consulta para obter a diferença entre os salários mais altos e os mais baixos.
SELECT (MAX(SALARY)) - (MIN(SALARY)) FROM employees;

-- 9. Escreva uma consulta para encontrar a ID do gerente e o salário do funcionário com menor remuneração para esse gerente. 
SELECT MANAGER_ID, MIN(SALARY) AS menor_salario FROM employees GROUP BY MANAGER_ID ORDER BY menor_salario;

-- 10. Escreva uma consulta para obter a ID do departamento e o salário total a pagar em cada departamento.
SELECT DEPARTMENT_ID, SUM(SALARY) AS total_salario FROM employees GROUP BY DEPARTMENT_ID;

-- 11. Escreva uma consulta para obter o salário médio para cada ID de trabalho, excluindo o programador.
SELECT JOB_ID, ROUND(AVG(SALARY), 0) AS media_salarial FROM employees GROUP BY JOB_ID HAVING JOB_ID <> 'IT_PROG';

-- 12. Escreva uma consulta para obter o salário total, máximo, mínimo, salário médio dos funcionários (ID do cargo),
-- apenas para o ID 90 do departamento.
SELECT
	DEPARTMENT_ID,
	SUM(SALARY) AS total_salario,
    MAX(SALARY) AS maior_salario,
    MIN(SALARY) AS menor_salario,
    ROUND(AVG(SALARY), 0) AS media_salario
FROM employees
GROUP BY JOB_ID
HAVING DEPARTMENT_ID = 90;

-- 13. Escreva uma consulta para obter o ID do cargo e o salário máximo dos funcionários em que o salário
-- máximo é maior ou igual a $ 4000.
SELECT JOB_ID, MAX(SALARY) maior_salario FROM employees GROUP BY JOB_ID HAVING maior_salario >= 4000;

-- 14. Escreva uma consulta para obter o salário médio de todos os departamentos que empregam mais de 10 funcionários.
SELECT 
	DEPARTMENT_ID,
    AVG(SALARY),
    COUNT(JOB_ID) AS numero_func
FROM employees
GROUP BY DEPARTMENT_ID
HAVING numero_func > 10;















