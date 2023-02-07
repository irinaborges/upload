const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/canais/sugeridos', async function (req, res) {
    let canais = await query("select titulo, imagem from canais_sugeridos")
    res.json({canais: canais});
});

module.exports = router;