const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/comentarios/video', async function (req, res) {
    let comentarios = await query("select nome, email, comentario, id FROM comentarios")
    res.json({comentarios: comentarios});
});

router.post("/comentario", async function (req, res) {
    const comment_type = req.body.comment_type[0].target_id;
    if (comment_type === "video_comments") {

    }
});

module.exports = router;