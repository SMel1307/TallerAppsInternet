const express = require("express");
const router = express.Router();
const path = require("path");

const views = path.join(__dirname, "/../views");
const estaConectado = require("../middlewares/conectado");
router.get("/", estaConectado, (req, res) => {
    res.sendFile(views + "/index.html");
});

router.get("/registro", (req, res) => {
    res.sendFile(views + "/registro.html");
});


module.exports = router;