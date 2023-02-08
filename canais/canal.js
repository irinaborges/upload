const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/:id', async function (req, res) {
    let canal = await query("select id, nome as title, descricao as description, capa as header, imagem as logo FROM canal WHERE id = ?", [req.params.id]);
    res.json(canal);
});

module.exports = router;