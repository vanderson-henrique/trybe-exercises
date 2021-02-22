USE sakila;
SELECT * FROM customer;

-- Exercícios sobre WHERE e operadores lógicos;

-- 1 - Precisamos identificar o cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org .
SELECT * FROM customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- 2 - Precisamos de um relatório dos nomes, em ordem alfabética, dos clientes que não estão mais ativos
-- no nosso sistema e pertencem à loja com o id 2. Porém, não inclua o cliente KENNETH no resultado.
SELECT first_name, last_name FROM customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;

-- 3 - O setor financeiro quer saber nome, descrição, ano de lançamento e quais são os 100 filmes com o maior custo
-- de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o
-- custo mínimo de substituição de $18,00 dólares.
SELECT * FROM film;
SELECT title, description, release_year, replacement_cost FROM film
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost >= 18
ORDER BY replacement_cost DESC LIMIT 100;

-- 4 - Quantos clientes estão ativos e na loja 1?
SELECT COUNT(customer_id) FROM customer WHERE active IS TRUE AND store_id = 1;

-- 5 - Mostre todos os detalhes dos clientes que não estão ativos na loja 1.
SELECT * FROM customer WHERE active IS FALSE AND store_id = 1;

-- 6 - Precisamos descobrir quais são os 50 filmes feitos para maiores de 17 anos e adultos com a menor taxa de 
-- aluguel, para que possamos fazer uma divulgação melhor desses filmes.
SELECT * FROM film
WHERE (rating = 'R' OR rating = 'NC-17')
ORDER BY replacement_cost LIMIT 50;

SELECT title FROM film WHERE title LIKE '%e__';

-- Exercícios sobre WHERE e operadores lógicos;

-- 1 - Encontre todos os detalhes dos filmes que contêm a palavra " ace " no nome.
SELECT description FROM film WHERE description LIKE '%ace%';

-- 2 - Encontre todos os detalhes dos filmes cujas descrições finalizam com " china ".
SELECT description FROM film WHERE description LIKE '%china';

-- 3 - Encontre todos os detalhes dos dois filmes cujas descrições contêm a palavra " girl "
-- e o título finaliza com a palavra " lord ".
SELECT * FROM film WHERE description LIKE '%girl%' AND title LIKE '%lord';

-- 4 - Encontre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra " gon ".
SELECT * FROM film WHERE title LIKE '___gon%';

-- 5 - Encontre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra " gon " 
-- e a descrição contém a palavra " Documentary ".
SELECT * FROM film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

-- 6 - Encontre os dois filmes cujos títulos ou finalizam com " academy " ou inciam com " mosquito ".
SELECT * FROM film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

-- 7 - Encontre os seis filmes que contêm as palavras " monkey " e " sumo " em suas descrições
SELECT * FROM film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

-- Exercícios usando o operador IN

-- 1 - Como você faria, então, para encontrar, usando o IN , todos os detalhes sobre o aluguel dos clientes
-- com os seguintes ids: 269, 239, 126, 399, 142?
SELECT * FROM customer WHERE customer_id IN (269, 239, 126, 399, 142);

-- 2 - Como encontraria todas as informações sobre os endereços que estão registrados nos distritos de QLD, 
-- Nagasaki, California, Attika, Mandalay, Nantou e Texas?
SELECT * FROM address WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

-- Exercícios sobre BETWEEN e IN

-- 1 - Encontre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: 
-- hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.

SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

-- 2 - Encontre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética
SELECT email FROM customer WHERE address_id BETWEEN 172 AND 176;

-- 3 - Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados,
-- as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.

SELECT COUNT(payment_id) FROM payment WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

-- 4 - Encontre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo
-- de 3 a 6. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro.

SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6 ORDER BY rental_duration DESC;

-- 5 - Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para menores
-- de idade. Os resultados devem estar ordenados por classificação mais abrangente primeiro.

SELECT title, rating FROM film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY rating LIMIT 500;

-- Exercícios com Datas
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo

-- 1 - Quantos aluguéis temos com a data de retorno 2005-08-29 ? Há múltiplas maneiras possíveis de encontrar a resposta.
select * from rental;
SELECT COUNT(*) FROM rental WHERE DATE(return_date) = '2005-08-29';
SELECT COUNT(*) FROM rental WHERE return_date LIKE '2005-08-29%';

-- 2 - Quantos filmes foram alugados entre 01/07/2005 e 22/08/2005
SELECT COUNT(*) AS 'Filmes alugados' FROM rental WHERE rental_date BETWEEN '2005-07-01' AND '2005-08-22';

-- 3 - Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330
SELECT DATE(rental_date) FROM rental WHERE rental_id = 10330;
SELECT YEAR(rental_date) FROM rental WHERE rental_id = 10330;
SELECT MONTH(rental_date) FROM rental WHERE rental_id = 10330;
SELECT DAY(rental_date) FROM rental WHERE rental_id = 10330;
SELECT HOUR(rental_date) FROM rental WHERE rental_id = 10330;
SELECT MINUTE(rental_date) FROM rental WHERE rental_id = 10330;
SELECT SECOND(rental_date) FROM rental WHERE rental_id = 10330;

-- 4 - Monte uma query que encontre o id e a data de aluguel do filme que foi alugado no dia 18/08/2005 às 00:14:03.
SELECT rental_id, rental_date FROM rental WHERE rental_date LIKE '2005-08-18 00:14:03';




