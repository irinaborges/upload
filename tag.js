const express = require("express");
const router = express.Router();
const query = require("./query");

// todas as tags
router.get('/', async function (req, res) {
    let tags = await query("SELECT * FROM tag")
    res.json(tags);
});

// videos de cada tag pelo id
router.get('/:id', async function (req, res) {
    let tag = await query("SELECT v.url_youtube as video, cn.descricao as channel, ct.designacao as category, v.descricao as description, v.duracao as duration, \"tags\" as tags, v.titulo as title, ct.id as categories_id, 0 as tags_id, cn.id as channel_id, v.data_publicacao as date, p.playlist as playlist_id, v.id as id FROM video v, playlist_video p, categoria ct, canal cn WHERE v.id = p.video and v.canal = cn.id and v.categoria = ct.id and p.playlist = ?", [req.params.id]);
    res.json(tag);
});