const express = require("express");
const router = express.Router();
const query = require("./query");


router.get('/', async function (req, res) {
    let playlists = await query("SELECT id, categoria as category, titulo as title FROM playlist")
    res.json(playlists);
});

router.get('/:id', async function (req, res) {
    let playlist = await query("SELECT id, categoria as category FROM playlist WHERE id = ?", [req.params.id]);
    res.json(playlist);
});

router.get('/:id', async function (req, res) {
    let playlist = await query("select v.url_youtube as video, cn.descricao as channel, ct.designacao as category, v.descricao as description, v.duracao as duration, \"tags\" as tags, v.titulo as title, ct.id as categories_id, 0 as tags_id, cn.id as channel_id, v.data_publicacao as date, p.playlist as playlist_id, v.id as id from video v, playlist_video p, categoria ct, canal cn where v.id = p.video and v.canal = cn.id and v.categoria = ct.id and p.playlist = ?", [req.params.id]);
    res.json(playlist);
});

module.exports = router;
