const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/videos', async function (req, res) {
    let videos = await query("select * FROM videos")
    res.json({videos: videos});
});

module.exports = router;
