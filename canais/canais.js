const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/canais', async function (req, res) {
    let canais = await query("select nome, imagem FROM canais")
    res.json({canais: canais});
});

module.exports = router;