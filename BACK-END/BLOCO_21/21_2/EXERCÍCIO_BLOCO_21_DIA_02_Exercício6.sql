-- Exercício 6
USE praticando;
-- 4.1 Selecione o título de todos os filmes.
SELECT Title FROm Movies;

-- 4.2 Mostrar todas as classificações distintas no banco de dados.
SELECT DISTINCT(Rating) FROM Movies;

-- 4.3 Mostrar todos os filmes não classificados.
SELECT * FROM Movies WHERE Rating IS NULL;

-- 4.4 Selecione todas as salas de cinema que não estão exibindo um filme no momento.
SELECT * FROM MovieTheaters WHERE Movie IS NULL;

-- 4.5 Selecione todos os dados de todos os cinemas
-- e, adicionalmente, os dados do filme que está sendo exibido no cinema (se estiver sendo exibido).
SELECT * FROM MovieTheaters AS mt
LEFT JOIN Movies AS m
ON mt.Movie = m.`Code`;

-- 4.6 Selecione todos os dados de todos os filmes e, se o filme estiver sendo exibido em um cinema, 
-- mostre os dados do cinema.
SELECT * FROM Movies AS m
LEFT JOIN MovieTheaters AS mt
ON m.`Code` = mt.Movie;

-- 4.7 Exibir os títulos de filmes que atualmente não estão sendo exibidos em nenhuma sala.
SELECT m.Title FROM Movies AS m
	WHERE NOT EXISTS (
		SELECT * FROM MovieTheaters WHERE Movie = m.`Code`
    );
