var express = require("express");
var router = express.Router();

var dashboardRouter = require("../controllers/dashboardController");

router.get("/dashboard", function (req, res) {
    
    dashboardRouter.usuariosCategoria(req, res);
});

module.exports = router;