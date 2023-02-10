const express = require("express");
const router = express.Router();
const query = require("./query");

//Get video details

router.get('/:slug', async function (req, res) {
    let video = await query("select id, slug, titulo as title, categoria as categories, url_youtube as video, canal as channel_id, miniatura as logo, data_publicacao as date, descricao as description FROM video WHERE slug = ?", [req.params.slug]);
    res.json(video);
});

// Get all videos
router.get('/', async function (req, res) {
    let videos = await query("SELECT id, slug, canal as channel, categoria as categories, descricao as description, url_youtube as video, titulo as title, duracao as duration, canal as channel_id, miniatura as logo, data_publicacao as date FROM video")
    res.json(videos);
});

// Post video comments
router.post("/comentario", async function (req, res) {
    const comment_type = req.body.comment_type[0].target_id;
    if (comment_type === "video_comments") {

    }
});

// videos de cada categoria pelo id da categoria
router.get('/categoria/:id', async function (req, res) {
    let videos = await query("SELECT p.id, p.slug, v.url_youtube as videos, ct.designacao as category, p.titulo as title, cn.nome as channel, v.descricao as description, v.duracao as duration, v.data_publicacao as date, vte.tag as tags FROM playlist p, playlist_video  pv, video v, categoria ct, canal cn, (select vti.video, GROUP_CONCAT(vti.tag separator ', ') as tag from video_tag vti group by vti.video) vte where pv.playlist = p.id and pv.video = v.slug and p.categoria = ct.id and v.canal = cn.id and vte.video = v.id and ct.id = ?", [req.params.id]);
    res.json(videos);
});

// videos de cada tag pela tag
router.get('/tag/:id', async function (req, res) {
    //console.log('req.params.id '+ req.params.id)
    let videos = await query("select v.id as id, v.url_youtube as videos, v.duracao as duration, v.data_publicacao as date, v.titulo as title, vte.tag as tags from video_tag vt, video v, (select vti.video, GROUP_CONCAT(vti.tag separator ', ') as tag from video_tag vti group by vti.video) vte where vt.video = v.id and vte.video = v.id and vt.tag = ?", [req.params.id]);
    res.json(videos);
});

module.exports = router;
