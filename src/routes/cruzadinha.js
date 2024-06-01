var express = require("express");
var router = express.Router();

var cruzadinhaController = require("../controllers/cruzadinhaController");

router.get("/cruzadinha", function (req, res) {
    
    cruzadinhaController.listarPerguntas(req, res);
});

router.get("/cruzadinha", function (req, res) {
    
    cruzadinhaController.listarRespostas(req, res);
});

router.post("/pontuacao", function (req, res) {
    
    cruzadinhaController.registrarPontuacao(req, res);
});

module.exports = router;