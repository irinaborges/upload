const express = require("express");
const router = express.Router();
const query = require("./query");

// Get video comments
router.get('/video/:video', async function (req, res) {
    let comentarios = await query("SELECT nome as name, comentario as comment, video as video_id, data as date FROM comentario WHERE video = ?", [req.params.video])
    res.json(comentarios);
});

// Get channel comments
router.get('/canal/:canal', async function (req, res) {
    let comentarios = await query("SELECT nome as name, comentario as comment, canal as channel_id, data as date FROM comentario WHERE canal = ?", [req.params.canal])
    res.json(comentarios);
});

// Post video comments
router.post("/comentario", async function (req, res) {
    const comment_type = req.body.comment_type[0].target_id;
    if (comment_type === "video_comments") {
        await query("INSERT INTO comentarios (tipo, video) VALUES (?, ?)", [tipo, video])
    }
    await query("INSERT INTO comentarios (tipo, canal) VALUES (?, ?)", [tipo, canal])
});


module.exports = router;
