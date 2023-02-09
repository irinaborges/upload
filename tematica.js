const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/', async function (req, res) {
    let tematicas = await query("select id, nome as title, descricao as description, capa as header, imagem as thumbnail FROM tematica")
    res.json(tematicas);
});

//videos
router.get('/:id', async function (req, res) {
    let videos = await query("select * FROM videos_tematica WHERE tematica = ?", [req.params.id]);
    res.json(videos);
});

//sugeridas
router.get('/', async function (req, res) {
    let tematicas = await query("select id, nome as title, capa as header, imagem as thumbnail FROM tematicas")
    res.json(tematicas);
});

module.exports = router;