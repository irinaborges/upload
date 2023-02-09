const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/', async function (req, res) {
    let canais = await query("select nome as name, imagem as logo FROM canal")
    res.json(canais);
});

router.get('/:id', async function (req, res) {
    //let nome = await query("select nome FROM canal WHERE nome = ?", [req.params.nome]);
    let canal = await query("select id, descricao as description, nome as title, capa as header, imagem as logo FROM canal WHERE id = ?", [req.params.id]);
    // canal.nome = canal.nome.replace(/\s/g, '-');
    res.json(canal);
})

router.get('/:id', async function (req, res) {
    let videos = await query("select * FROM video WHERE canal = ?", [req.params.id]);
    res.json(videos);
});

module.exports = router;