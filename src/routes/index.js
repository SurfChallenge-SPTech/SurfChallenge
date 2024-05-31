var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/cadastro", function (req, res) {
    res.render("cadastro");
});

router.get("/joguinho", function (req, res) {
    res.render("joguinho");
});

module.exports = router;