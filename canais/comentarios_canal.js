const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/comentarios/canal', async function (req, res) {
    let comentarios = await query("select nome, email, comentario, id FROM comentarios_canal")
    res.json({comentarios: comentarios});
});

module.exports = router;