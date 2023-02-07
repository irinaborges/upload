const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/videos/canal/:id', async function (req, res) {
    let videos = await query("select * FROM videos_canal WHERE id = ?", [req.params.id]);
    res.json({videos: videos});
});

module.exports = router;