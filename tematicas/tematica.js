const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/:id', async function (req, res) {
    let tematica = await query("select nome as title, descricao as description, capa as header, imagem as thumbnail, teaser FROM tematica WHERE id = ?", [req.params.id]);
    res.json(tematica);
});

module.exports = router;