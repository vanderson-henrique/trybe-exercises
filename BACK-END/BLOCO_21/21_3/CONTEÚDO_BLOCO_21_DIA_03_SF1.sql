/*Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos 
feitos até o momento por um determinado customer_id .*/

-- SELECT customer_id, COUNT(*) FROM sakila.payment GROUP BY customer_id HAVING customer_id = 589;

USE sakila;
DELIMITER $$

CREATE FUNCTION RetornaTotalPagamentosPorCliente(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total INT;
	SELECT COUNT(*) FROM sakila.payment GROUP BY customer_id HAVING customer_id = id INTO total;
    RETURN total;
END $$

DELIMITER ;

SELECT RetornaTotalPagamentosPorCliente(456);



