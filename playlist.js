const express = require("express");
const router = express.Router();
const query = require("./query");

// todas as playlists
router.get('/', async function (req, res) {
    let playlists = await query("SELECT p.id, p.slug, v.url_youtube as videos, ct.designacao as category, p.titulo as title FROM playlist p,(select min(ppv.video) as video, ppv.playlist as playlist from playlist_video ppv  group by ppv.playlist) as pv, video v, categoria ct where pv.playlist = p.id and pv.video = v.slug and p.categoria = ct.id")
    res.json(playlists);
});

//playlist pelo id
router.get('/:id', async function (req, res) {
    let playlist = await query("SELECT p.id, p.slug, v.url_youtube as video, ct.designacao as category, p.titulo as title, cn.nome as channel, v.descricao as description, v.duracao as duration, v.data_publicacao as date FROM playlist p, playlist_video  pv, video v, categoria ct, canal cn where pv.playlist = p.id and pv.video = v.slug and p.categoria = ct.id and v.canal = cn.id and p.id = ?", [req.params.id]);
    res.json(playlist);
});

// videos de cada playlist pelo id
router.get('/videos/:id', async function (req, res) {
    let playlist = await query("SELECT p.id, p.slug, v.url_youtube as video, ct.designacao as category, p.titulo as title, cn.nome as channel, v.descricao as description, v.duracao as duration, v.data_publicacao as date FROM playlist p, playlist_video  pv, video v, categoria ct, canal cn where pv.playlist = p.id and pv.video = v.slug and p.categoria = ct.id and v.canal = cn.id and p.id = ?", [req.params.id]);
    res.json(playlist);
});


module.exports = router;
