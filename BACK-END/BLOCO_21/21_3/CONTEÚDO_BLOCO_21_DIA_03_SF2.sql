/*Crie uma function que, dado o parâmetro de entrada inventory_id , 
retorna o nome do filme vinculado ao registro de inventário com esse id.*/

/* SELECT f.title FROM film AS f
INNER JOIN inventory AS i
ON f.film_id = i.film_id
WHERE i.inventory_id = 9; */

USE sakila;
DELIMITER $$

CREATE FUNCTION VerificaFilmePorIDInventario(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
	DECLARE Nome_Filme VARCHAR(200);
	SELECT f.title FROM film AS f
	INNER JOIN inventory AS i
	ON f.film_id = i.film_id
	WHERE i.inventory_id = id
    INTO Nome_Filme;
    RETURN Nome_Filme;
END $$

DELIMITER ;

SELECT VerificaFilmePorIDInventario(2803);

