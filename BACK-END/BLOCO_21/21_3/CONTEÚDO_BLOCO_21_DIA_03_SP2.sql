/*Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba
 o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , 
 film_category e category para montar essa procedure.*/

USE sakila;
DELIMITER $$

CREATE PROCEDURE ExibeInformacaoFilmePorCategoria(IN categoria VARCHAR(20))
BEGIN 
	SELECT f.film_id, f.title, c.category_id, c.`name`
	FROM film AS f
	INNER JOIN film_category AS fc
	ON f.film_id = fc.film_id
	INNER JOIN category AS c
	ON c.category_id = fc.category_id
	WHERE c.`name` = categoria;
END $$
DELIMITER ;

CALL ExibeInformacaoFilmePorCategoria('Classics');

