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

module.exports = router;
