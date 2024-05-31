var express = require("express");
var router = express.Router();

var cruzadinhaController = require("../controllers/cruzadinhaController");

router.get("/cruzadinha", function (req, res) {
    
    cruzadinhaController.listarPerguntas(req, res);
});

module.exports = router;