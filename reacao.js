const express = require("express");
const router = express.Router();
const query = require("./query");

router.get('/', async function (req, res) {
    let dislikes = await query("select id, count FROM dislike")
    res.json(dislikes);
});

router.post("/", async function (req, res) {
    const tipo = req.body.flag_id[0].target_id;
    const video = req.body.entity_id[0];
    await query("INSERT INTO reacao (tipo, video) VALUES (?, ?)", [tipo, video])
});

// Post videos dislikes
//router.post("/", async function (req, res) {
//    await query("INSERT INTO reacao (tipo, video) VALUES ('dislike', ?)", [req.body.id_video])
//});

module.exports = router;
