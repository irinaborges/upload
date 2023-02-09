const express = require("express");
const router = express.Router();
const query = require("../query");

//Get video details
router.get('/:id', async function (req, res) {
    let video = await query("select id, titulo as title, categoria as categories, url_youtube as video, canal as channel_id, miniatura as logo, data_publicacao as date, descricao as description FROM video WHERE id = ?", [req.params.id]);
    res.json(video);
});

// Get all videos
router.get('/', async function (req, res) {
    let videos = await query("SELECT id, canal as channel, categoria as categories, descricao as description, url_youtube as video, titulo as title, duracao as duration, canal as channel_id, miniatura as logo, data_publicacao as date FROM video")
    res.json(videos);
});

// Get suggested videos
router.get('/videos/sugeridos', async function (req, res) {
    let videos = await query("select titulo, url_youtube, canal, duracao, data_publicacao FROM videos_sugeridos")
    res.json({videos: videos});
});

// Get video comments
router.get('/comentarios/video', async function (req, res) {
    let comentarios = await query("select nome, email, comentario, id FROM comentarios")
    res.json({comentarios: comentarios});
});

// Post video comments
router.post("/comentario", async function (req, res) {
    const comment_type = req.body.comment_type[0].target_id;
    if (comment_type === "video_comments") {

    }
});

module.exports = router;
