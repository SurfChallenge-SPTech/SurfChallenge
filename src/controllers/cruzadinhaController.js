var cruzadinhaModel = require("../models/cruzadinhaModel");


function listarPerguntas(req, res) {
    cruzadinhaModel.listarPerguntas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarRespostas(req, res) {
    cruzadinhaModel.listarRespostas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function registrarPontuacao(req, res) {
    var pontuacao = req.body.pontuacaoCruzadinhaServer;

    cruzadinhaModel.registrarPontuacao(pontuacao).then(function (resposta) {
        res.status(200).send("Pontuação registrada com sucesso!");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listarPerguntas,
    listarRespostas,
    registrarPontuacao
}