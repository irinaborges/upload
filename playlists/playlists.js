const express = require("express");
const router = express.Router();
const query = require("../query");


router.get('/', async function (req, res) {
    let playlists = await query("SELECT id, categoria as category, titulo as title FROM playlist")
    res.json(playlists);
});

module.exports = router;
