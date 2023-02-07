const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/comentarios/video', async function (req, res) {
    let comentarios = await query("select nome, email, comentario, id FROM comentarios")
    res.json({comentarios: comentarios});
});

module.exports = router;