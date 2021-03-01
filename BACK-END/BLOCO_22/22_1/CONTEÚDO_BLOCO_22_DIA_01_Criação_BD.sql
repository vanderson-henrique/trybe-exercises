CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE artista (
	artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE='InnoDB';

CREATE TABLE estilo_musical (
	estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE='InnoDB';

CREATE TABLE album (
	album_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    preco DECIMAL(5,2) NOT NULL,
    estilo_id INT NOT NULL,
    artista_id INT NOT NULL,
    FOREIGN KEY (estilo_id) REFERENCES estilo_musical(estilo_id),
    FOREIGN KEY (artista_id) REFERENCES artista(artista_id)
) ENGINE='InnoDB';

CREATE TABLE cancao (
	cancao_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    duracao INT NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES album (album_id)
) ENGINE='InnoDB';





