var database = require("../database/config");

function registrarPontuacao (usuario, pontuacao){
    var instrucaoSQL = `
    INSERT INTO registroPalavraCruzada VALUES
    (default, ${usuario}, 1, now(), ${pontuacao});
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    // database.executar(instrucaoSQL)
    return database.executar(instrucaoSQL);
}

module.exports = {
    registrarPontuacao
}