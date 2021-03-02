CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE funcionario (
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    contato_id INT NOT NULL,
    FOREIGN KEY (contato_id) REFERENCES contato (contato_id)
) ENGINE='InnoDB';

CREATE TABLE contato (
	contato_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(100) NOT NULL
) ENGINE='InnoDB';

CREATE TABLE setor (
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_setor VARCHAR(100) NOT NULL
) ENGINE='InnoDB';

CREATE TABLE alocacao (
	alocacao_id INT PRIMARY KEY AUTO_INCREMENT,
    funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionario (funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor (setor_id)
) ENGINE='InnoDB';

INSERT INTO setor (nome_setor)
	VALUES ('Administração'), ('Vendas'), ('Operacional'), ('Estratégico'), ('Marketing');
SELECT * FROM setor;

INSERT INTO contato (email, telefone)
VALUES ('jo@gmail.com','(35)998552-1445'),
('andre1990@gmail.com','(47)99522-4996'),
('cindy@outlook.com','(33)99855-4669'),
('fernandamendes@yahoo.com','(33)99200-1556');

SELECT * FROM contato;

INSERT INTO funcionario (nome, sobrenome, contato_id)
VALUES ('Joseph', 'Rodrigues', 1),
('André', 'Freeman', 2),
('Cíntia', 'Duval', 3),
('Fernanda', 'Mendes', 4);

SELECT * FROM funcionario;

INSERT INTO alocacao (funcionario_id, setor_id)
VALUES (1, 1),
(1, 2),
(2, 3),
(3, 4),
(3, 2),
(4, 5);

SELECT * FROM alocacao;











