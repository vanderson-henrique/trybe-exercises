-- Exercícios do conteúdo dia 20.4
-- Conteúdo sobre INSERT

USE sakila;
SELECT * FROM staff;
-- 1 - Insira um novo funcionário na tabela sakila.staff.
INSERT INTO staff (first_name, last_name, address_id, store_id, username)
VALUES ('Vanderson', 'Henrique', 1, 1, 'Vanderson');
-- 2 -Insira dois funcionários novos em apenas uma query. 
INSERT INTO staff (first_name, last_name, address_id, store_id, username) VALUES
('José', 'Silva', 1, 2, 'Zeinho'),
('Maria', 'Santos', 2, 1, 'Mariazinha');
-- 3 - Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como
-- atores na tabela sakila.actor.
INSERT INTO actor (first_name, last_name)
	SELECT first_name, last_name FROM customer LIMIT 5;

-- 4 - Cadastre três categorias de uma vez só na tabela sakila.category.
select * from category;
INSERT INTO category (name) VALUES ('Comédia'),('Terror'),('Aventura');

-- 5 - Cadastre uma nova loja na tabela sakila.store.
SELECT * FROM store;
INSERT INTO store (manager_staff_id, address_id) VALUES (3, 1);

-- Conteúdo sobre UPDATE
SET SQL_SAFE_UPDATES = 0;

-- 1 - Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro
-- nome "JULIA" para "JULES".
SELECT * FROM actor WHERE first_name = 'JULES';
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- 2 - Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
SELECT * FROM category;
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

-- 3 - Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos
-- e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.
SELECT * FROM film
WHERE length > 100 AND 
rating IN ('G', 'PG', 'PG-13') AND
replacement_cost > 20;
UPDATE film
SET rental_rate = 25
WHERE length > 100 AND 
rating IN ('G', 'PG', 'PG-13') AND
replacement_cost > 20;

-- 4 - Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes,
-- com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará
-- a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

UPDATE film
SET rental_rate = (
	CASE
		WHEN length <= 100 THEN 10
        WHEN length > 100 THEN 20
END);
SELECT * FROM film;

-- Conteúdo sobre DELETE
-- 1 - Exclua do banco de dados o ator com o nome de "KARL".
SELECT * FROM actor WHERE first_name = 'KARL'; -- Descobrir o id do ator
SELECT * FROM film_actor WHERE actor_id = 12; 
DELETE FROM film_actor WHERE actor_id = 12; -- exclui a referencia dele na outra tabela
DELETE FROM actor WHERE first_name = 'KARL';

-- 2 - Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT * FROM actor WHERE first_name = 'MATTHEW'; -- id (8, 103, 181)
SELECT * FROM film_actor WHERE actor_id IN (8, 103, 181);
DELETE FROM film_actor WHERE actor_id IN (8, 103, 181);
DELETE FROM actor WHERE first_name = 'MATTHEW';

-- 3 - Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
SELECT * FROM film_text WHERE description LIKE '%saga%';
DELETE FROM film_text WHERE description LIKE '%saga%';

-- 4 - Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.

TRUNCATE film_actor;
TRUNCATE film_category;
select * from film_category;




