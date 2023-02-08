const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/:id', async function (req, res) {
    let video = await query("select id, titulo as title, categoria as categories, url_youtube as video, canal as channel_id, miniatura as logo, data_publicacao as date, descricao as description FROM video WHERE id = ?", [req.params.id]);
    res.json(video);
});

module.exports = router;
