const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/', async function (req, res) {
    let videos = await query("SELECT id, canal as channel, categoria as categories, descricao as description, url_youtube as video, titulo as title, duracao as duration, canal as channel_id, miniatura as logo, data_publicacao as date FROM video")
    res.json(videos);
});

module.exports = router;
