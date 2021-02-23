-- Exercício 5: Exercícios sobre datas e tempo
-- 1. Escreva uma consulta para exibir o primeiro dia do mês (no formato data e hora) três meses antes do mês atual.
SELECT date(((PERIOD_ADD
  (EXTRACT(YEAR_MONTH 
     FROM CURDATE()),-3)*100)+1));

-- 2. Escreva uma consulta para exibir o último dia do mês (no formato data e hora) três meses antes do mês atual.

-- 3. Escreva uma consulta para obter as segundas-feiras distintas de Hire_date nas tabelas de funcionários.
SELECT DISTINCT(STR_TO_DATE
     (CONCAT(YEARWEEK(hire_date),'1'),'%x%v%w')) 
          FROM employees;
          
-- 4. Escreva uma consulta para obter o primeiro dia do ano atual.
SELECT MAKEDATE(EXTRACT(YEAR FROM CURDATE()),1);

-- 5. Escreva uma consulta para obter o último dia do ano atual.
SELECT STR_TO_DATE(CONCAT(12,31,
      EXTRACT(YEAR FROM CURDATE())), '%m%d%Y');
      
-- 6. Escreva uma consulta para calcular a idade em ano.
SELECT YEAR(CURRENT_TIMESTAMP) - 
         YEAR("1993-04-15") - 
             (RIGHT(CURRENT_TIMESTAMP, 5) < 
                  RIGHT("1993-04-15", 5)) as age;
-- 7. Escreva uma consulta para obter a data atual no seguinte formato. 22 de Fevereiro de 2021;
SELECT CONCAT(DAY(NOW()), ' de ', MONTHNAME(NOW()), ' de ', YEAR(NOW()));
SELECT DATE_FORMAT(CURDATE(), '%M %e, %Y');

-- 8. Escreva uma consulta para obter a data atual no formato quinta-feira de setembro de 2014.
SELECT DATE_FORMAT(NOW(), '%W, %e %M %Y');

-- 9. Escreva uma consulta para extrair o ano da data atual.
SELECT YEAR(NOW());

-- 10. Escreva uma consulta para obter o valor DATE de um determinado dia (número em N).
SELECT FROM_DAYS(730677);

-- 11. Escreva uma consulta para obter o nome e a data de contratação da tabela de funcionários onde a data de 
-- contratação entre ' 1987-06-01 ' e ' 1987-07-30 '
SELECT FIRST_NAME, HIRE_DATE FROM employees WHERE HIRE_DATE BETWEEN '1987-06-01' AND '1987-07-30';

-- 12. Escreva uma consulta para exibir a data atual no seguinte formato. quinta-feira, 4 de setembro de 2014 00:00:00
SELECT DATE_FORMAT(NOW(), '%W, %d de %M de %Y, %H:%i:%s');

-- 13. Escreva uma consulta para exibir a data atual no seguinte formato. 09/05/2014
SELECT DATE_FORMAT(NOW(), '%d/%m/%Y');

-- 14. Escreva uma consulta para exibir a data atual no seguinte formato. 0h00 5 de setembro de 2014
SELECT DATE_FORMAT(NOW(), '%Hh%m %d de %M de %Y');

-- 15. Escreva uma consulta para obter o nome, o sobrenome que ingressou no mês de junho.
SELECT FIRST_NAME, LAST_NAME, HIRE_DATE FROM employees WHERE MONTH(HIRE_DATE) = 06;

-- 16. Escreva uma consulta para obter os anos em que mais de 10 funcionários ingressaram.
SELECT YEAR(HIRE_DATE) FROM employees
	GROUP BY YEAR(HIRE_DATE) 
    HAVING COUNT(EMPLOYEE_ID) > 10;

-- 17. Escreva uma consulta para obter o primeiro nome dos funcionários que ingressaram em 1987.
SELECT FIRST_NAME, HIRE_DATE FROM employees WHERE YEAR(HIRE_DATE) = '1987';

-- 18. Escreva uma consulta para obter o nome do departamento, o nome do gerente e o salário do gerente para todos os 
-- gerentes com mais de 5 anos de experiência.
SELECT * FROM departments;



























