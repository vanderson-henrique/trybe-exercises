/*Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma
informação para a tabela movies_logs , onde devem ser guardados a data da exclusão, a action 'DELETE' 
e o id do filme excluído.*/

USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_delete_movies
AFTER DELETE ON movies
FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, `action`, log_date)
    VALUES (OLD.movie_id, 'DELETE', NOW());
END $$

DELIMITER ;

-- TESTE DE DELETE

DELETE FROM BeeMovies.movies WHERE movie_id = 1;