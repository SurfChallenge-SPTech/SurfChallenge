var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.post("/pontuacao", function (req, res) {
    
    pontuacaoController.registrarPontuacao(req, res);
});

module.exports = router;