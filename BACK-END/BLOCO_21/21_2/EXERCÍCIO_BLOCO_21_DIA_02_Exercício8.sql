-- Exercício 8
USE sakila;
-- 6a. Use JOIN para exibir o nome e o sobrenome, bem como o endereço, de cada membro da equipe. 
-- Use as tabelas staff e address:
SELECT s.first_name, s.last_name, a.address, a.district, c.city, co.country
FROM staff AS s
INNER JOIN address AS a
ON s.address_id = a.address_id
INNER JOIN city AS c
ON a.city_id = c.city_id
INNER JOIN country AS co
ON c.country_id = co.country_id;


-- 6b. Use JOIN para exibir o valor total escalado (soma) por cada membro da equipe em agosto de 2005. 
-- Use as tabelas staff e payment.
SELECT s.first_name, s.last_name, SUM(p.amount) as 'Total escalado'
FROM staff AS s
INNER JOIN payment AS p
ON s.staff_id = p.staff_id
WHERE MONTH(p.payment_date) = 08
GROUP BY p.staff_id;








