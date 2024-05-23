CREATE DATABASE surfChallenge;

USE surfChallenge;

CREATE TABLE leadSite (
	idLead INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(255),
    mensagem VARCHAR(400)
);

CREATE TABLE classeAtual (
	idClasseAtual INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30)
);

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    dtNascimento DATE,
    email VARCHAR(255),
    senha VARCHAR(12),
    fkClasseAtual INT,
    FOREIGN KEY (fkClasseAtual) REFERENCES classeAtual (idClasseAtual),
	CONSTRAINT chkSenhaUsuario CHECK(CHAR_LENGTH(senha) >= 8)
);

CREATE TABLE palavraCruzada (
	idPalavraCruzada INT PRIMARY KEY AUTO_INCREMENT,
    pergunta VARCHAR(1000),
    resposta VARCHAR(1000)
); 

CREATE TABLE registroPalavraCruzada (
	fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    fkPalavraCruzada INT,
    FOREIGN KEY (fkPalavraCruzada) 
    REFERENCES palavraCruzada (idPalavraCruzada),
    dtRegistro DATETIME,
    pontuacao INT
);

