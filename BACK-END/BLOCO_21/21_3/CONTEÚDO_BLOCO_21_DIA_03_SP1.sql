/*Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. 
Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou
 atriz e a quantidade de filmes em que atuaram.*/

USE sakila;
DELIMITER $$

CREATE PROCEDURE ExibeAtoresMaisPopulares()
BEGIN
	SELECT actor_id, COUNT(DISTINCT film_id) AS Qtdd_Filmes
    FROM film_actor
    GROUP BY actor_id
    ORDER BY Qtdd_Filmes DESC
    LIMIT 10;
END $$
DELIMITER ;