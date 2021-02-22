-- MANIPULAÇÃO DE STRINGS
-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string');

-- Converte o texto da string para caixa baixa
SELECT LCASE('Oi, eu sou uma string');

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

-- Retorna a parte da esquerda de uma string de acordo com o
-- número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3);

-- Retorna a parte da direita de uma string de acordo com o
-- número de caracteres especificado
SELECT RIGHT('Oi, eu sou um string', 6);

-- Exibe o tamanho, em caracteres, da string
SELECT LENGTH('Oi, eu sou uma string');

-- Extrai parte de uma string de acordo com o índice de um caractere inicial
-- e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);

-- Se a quantidade de caracteres a extrair não for definida,
-- então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 5);

SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe');
-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
-- Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT LENGTH('Uma frase qualquer');
-- Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

-- CONDICIONAIS
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;
/* Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada 'conheço o filme?' , 
em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '. Caso seja, exiba "Já assisti a esse filme". 
Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.*/

SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'Conheço o filme?'
FROM sakila.film;

/*Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating ) e uma coluna extra que 
vamos chamar de 'público-alvo' , em que classificaremos o filme de acordo com as seguintes siglas:
G: "Livre para todos";
PG: "Não recomendado para menores de 10 anos";
PG-13: "Não recomendado para menores de 13 anos";
R: "Não recomendado para menores de 17 anos";
Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".*/

SELECT title, rating,
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
	ELSE 'Proibido para menores de idade'
    END AS 'público-alvo'
 FROM sakila.film;

-- Funções matemáticas no MySql

SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6

SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

-- Desafios com DIV e MOD

-- Dica: Números pares são aqueles que podem ser divididos em duas partes iguais. Ou seja, são aqueles cuja divisão por 
-- 2 retorna resto 0.
-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar.
-- Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.
SELECT 15 AS 'Número', IF(15 MOD 2 = 0, 'par', 'ímpar') AS 'Par ou ímpar';
-- Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema
-- sem que ninguém fique de fora?
SELECT 220 AS 'Lugares', (220 DIV 12) AS 'Grupos de 12';
-- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT 220 AS 'Lugares', (220 MOD 12) AS 'Lugares sobrando';

-- Monte uma query que gere um valor entre 15 e 20.
SELECT ROUND(15 + (RAND() * 5));
-- Monte uma query que exiba o valor arredondado de 15.75 com uma precisão de 5 casas decimais.
SELECT ROUND(15.75, 5);
-- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494);
-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234);

-- TRABALHANDO COM DATAS

SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS

-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
-- Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
SELECT TIMEDIFF('10:25:45', '11:00:00');

-- FUNÇÕES DE AGREGAÇÃO
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

/* Monte um query que exiba:
A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
A duração mínima dos filmes como 'Duração Mínima';
A duração máxima dos filmes como 'Duração Máxima';
A soma de todas as durações como 'Tempo de Exibição Total';
E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.*/
SELECT * FROM sakila.film;
SELECT 
	AVG(length) AS 'Média de Duração',
    MIN(length) AS 'Duração mínima',
    MAX(length) AS 'Duração máxima',
    SUM(length) AS 'Tempo de Exibição Total',
    COUNT(film_id) AS 'Filmes Registrados'
FROM sakila.film;

-- GROUP BY

SELECT first_name, COUNT(*) FROM sakila.actor GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length) FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost) FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost) FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost) FROM sakila.film
GROUP by rating;

-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos
-- e a quantidade que estão inativos.
SELECT * FROM sakila.customer;
SELECT IF(active = 1, 'ativo', 'inativo'), COUNT(*) FROM sakila.customer GROUP BY `active`;
-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. 
-- Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por
-- status .
SELECT
	store_id,
	IF(active = 1, 'ativo', 'inativo') AS 'SITUAÇÃO',
	COUNT(*) AS 'Quantidade'
FROM sakila.customer GROUP BY store_id, `active`;

-- Monte uma query que exiba a média de duração por classificação indicativa ( rating ) dos filmes cadastrados na tabela
-- sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT * FROM sakila.film;
SELECT
	rating AS 'Classificação Indicativa',
	AVG(length) AS 'Média de duração' FROM sakila.film
GROUP BY  rating
ORDER BY `Média de duração` DESC;

-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele.
-- Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT * FROM sakila.address;
SELECT district,
	   COUNT(*) AS 'Número de endereços'
	FROM sakila.address
    GROUP BY district
    ORDER BY `Número de endereços` DESC;
    
-- USANDO O HAVING PARA FILTRAR DADOS AGRUPADOS

/* Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50.
Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível.
Finalize ordenando os resultados de forma decrescente.*/

    SELECT rating, AVG(length) AS media_length
    FROM sakila.film
    GROUP BY rating
    HAVING media_length BETWEEN 115.0 AND 121.50
    ORDER BY media_length DESC;

/* Usando a query a seguir, exiba apenas os valores de total de substituição de custo que estão acima de $3950.50.
Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível.
Finalize ordenando os resultados de forma crescente. */

    SELECT rating, SUM(replacement_cost) AS soma_custo_substituicao
    FROM sakila.film
    GROUP by rating
    HAVING soma_custo_substituicao > 3950.50
    ORDER BY soma_custo_substituicao ASC;














