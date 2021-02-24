USE sakila;
-- LEFT JOIN

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer c
LEFT JOIN actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- RIGHT JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer c
RIGHT JOIN actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- INNER JOIN

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer c
INNER JOIN actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- SELF JOIN
-- 1. Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.

SELECT * FROM film;
SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM film AS t1, film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;

-- 2. Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração.
-- Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT t1.title, t1.rental_duration, t1.`length`, t2.title, t2.rental_duration, t2.`length`
FROM film AS t1, film AS t2
WHERE t1.`length` = t2.`length` AND t1.rental_duration BETWEEN 2 AND 4 AND t2.rental_duration BETWEEN 2 AND 4;

-- UNION E UNION ALL

-- 1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela 
-- actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT first_name, last_name FROM actor
UNION ALL
SELECT first_name, last_name FROM staff;

-- 2. Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy" 
-- na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.
SELECT first_name FROM actor WHERE first_name LIKE '%je%'
UNION
SELECT first_name FROM customer WHERE first_name LIKE '%tracy%';

-- 3. Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff 
-- e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos sejam exibidos. 
-- Ordene os resultados em ordem alfabética.
(SELECT first_name FROM actor ORDER BY first_name DESC LIMIT 5)
UNION
(SELECT first_name FROM staff LIMIT 1)
UNION
(SELECT first_name FROM customer LIMIT 5 OFFSET 14)
ORDER BY first_name;

/* 4. Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados,
em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página.
Monte uma query que simule esse cenário.*/
(SELECT first_name, last_name FROM customer)
UNION
(SELECT first_name, last_name FROM actor)
ORDER BY first_name LIMIT 15 OFFSET 45;














































