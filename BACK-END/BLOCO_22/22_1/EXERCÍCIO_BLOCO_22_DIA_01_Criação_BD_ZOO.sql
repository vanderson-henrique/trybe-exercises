CREATE DATABASE IF NOT EXISTS zoologico;

USE zoologico;

CREATE TABLE especie (
	especie_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE='InnoDB';

CREATE TABLE localizacao (
	localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE='InnoDB';

CREATE TABLE gerente (
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE='InnoDB';

CREATE TABLE cuidador (
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
) ENGINE='InnoDB';

CREATE TABLE animal (
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    sexo VARCHAR(1) NOT NULL,
    idade INT NOT NULL,
    especie_id INT NOT NULL,
    localizacao_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    FOREIGN KEY (especie_id) REFERENCES especie (especie_id),
    FOREIGN KEY (localizacao_id) REFERENCES localizacao (localizacao_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
) ENGINE='InnoDB';




