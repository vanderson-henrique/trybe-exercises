/*Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está 
ou não ativo, através de um parâmetro de saída.*/

USE sakila;
DELIMITER $$
CREATE PROCEDURE VerificaClieteAtivo(IN emailInserido VARCHAR(50), OUT mensagem VARCHAR(100))
BEGIN
	SELECT CONCAT('O cliente do email ', emailInserido, ' está ', IF(`active`, 'ativo', 'inativo')) INTO mensagem
    FROM customer
    WHERE email = emailInserido;		
END $$
DELIMITER ;

CALL VerificaClieteAtivo('MARY.SMITH@sakilacustomer.org', @mensagem);
SELECT @mensagem;