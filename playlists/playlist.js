const express = require("express");
const router = express.Router();
const query = require("../query");


router.get('/:id', async function (req, res) {
    let playlist = await query("SELECT id, categoria as category FROM playlist WHERE id = ?", [req.params.id]);
    res.json(playlist);
});

module.exports = router;