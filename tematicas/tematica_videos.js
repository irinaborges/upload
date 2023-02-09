const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/:id', async function (req, res) {
    let videos = await query("select * FROM videos_tematica WHERE tematica = ?", [req.params.id]);
    res.json(videos);
});

module.exports = router;