const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/videos/sugeridos', async function (req, res) {
    let videos = await query("select titulo, url_youtube, canal, duracao, data_publicacao FROM videos_sugeridos")
    res.json({videos: videos});
});

module.exports = router;