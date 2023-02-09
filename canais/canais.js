const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/', async function (req, res) {
    let canais = await query("select nome as name, imagem as logo FROM canal")
    res.json(canais);
});

module.exports = router;