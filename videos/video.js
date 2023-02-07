const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/video/:id', async function (req, res) {
    let video = await query("select * FROM video WHERE id = ?", [req.params.id]);
    res.json({video: video});
});

module.exports = router;