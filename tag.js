const express = require("express");
const router = express.Router();
const query = require("./query");

//todas as tags
router.get('/', async function (req, res) {
    let tags = await query("select v.id as id, v.url_youtube as videos, v.duracao as duration, v.data_publicacao as date, v.titulo as title, vt.tag as tag from video_tag vt, video v where vt.video = v.id and vt.tag = ?", [req.params.name]);
    res.json(tags);
});

// videos de cada tag pelo nome
router.get('/:name', async function (req, res) {
    let tagvideo = await query("select v.id as id, v.url_youtube as videos, v.duracao as duration, v.data_publicacao as date, v.titulo as title, vt.tag as tag from video_tag vt, video v where vt.video = v.id and vt.tag = ?", [req.params.name]);
    res.json(tagvideo);
});

// videos de cada tag pelo id
// router.get('videos/:id', async function (req, res) {
//     let tagvideo = await query("select v.id as id, v.url_youtube as videos, v.duracao as duration, v.data_publicacao as date, v.titulo as title, vt.tag as tag from video_tag vt, video v where vt.video = v.id and vt.tag = ?", [req.params.id]);
//     res.json(tagvideo);
// });

module.exports = router;