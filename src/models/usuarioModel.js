var database = require("../database/config")

function cadastrar (nome, dtNascimento, email, senha, classeAtual){
    var instrucaoSQL = `
    INSERT INTO usuario (nome, dtNascimento, email, senha, fkClasseAtual) VALUES
    ('${nome}', '${dtNascimento}', '${email}', '${senha}', '${classeAtual}');
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

module.exports = {
    cadastrar
}

