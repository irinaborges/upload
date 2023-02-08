const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/', async function (req, res) {
    let videos = await query("select titulo as title FROM video")
    res.json(videos);
});

module.exports = router;
