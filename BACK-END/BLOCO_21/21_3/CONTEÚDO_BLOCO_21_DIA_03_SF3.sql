/*Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' )
 e retorna a quantidade total de filmes registrados nessa categoria.*/
 
 /* SELECT COUNT(c.`name`) FROM film_category AS fc
 INNER JOIN category AS c
 ON fc.category_id = c.category_id
 GROUP BY c.`name`
 HAVING c.`name` = 'Animation'; */
 
 USE sakila;
 DELIMITER $$
 
 CREATE FUNCTION VerificaTotalDeFilmesPorCategoria(categoria_inserida VARCHAR(50))
 RETURNS INT READS SQL DATA
 BEGIN
	DECLARE numero_filmes INT;
	SELECT COUNT(c.`name`) FROM film_category AS fc
	INNER JOIN category AS c
	ON fc.category_id = c.category_id
	GROUP BY c.`name`
	HAVING c.`name` = categoria_inserida
    INTO numero_filmes;
    RETURN numero_filmes;
 END $$
 
 DELIMITER ;
 
 SELECT VerificaTotalDeFilmesPorCategoria('Classics');
 