var database = require("../database/config")

function cadastrar (nome, dtNasc, email, senha, classeAtual){
    var instrucaoSQL = `
    INSERT INTO usuario (nome, dtNascimento, email, senha, fkClasseAtual) VALUES
    ('${nome}', '${dtNasc}', '${email}', '${senha}', '${classeAtual}');
    `
    console.log("Executando instrução", instrucaoSQL)

    database.executar(instrucaoSQL)
}

module.exports = {
    cadastrar
}

