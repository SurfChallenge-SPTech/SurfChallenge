var pontuacaoModel = require("../models/pontuacaoModel");

function registrarPontuacao(req, res) {
    var usuario = req.body.usuarioIdServer;
    var pontuacao = req.body.pontuacaoCruzadinhaServer;

    pontuacaoModel.registrarPontuacao(usuario, pontuacao).then(function (resposta) {
        res.status(200).send("Pontuação registrada com sucesso!");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    registrarPontuacao
}