const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/tematica/:id', async function (req, res) {
    let tematica = await query("select * FROM tematica WHERE id = ?", [req.params.id]);
    res.json({tematica: tematica});
});

module.exports = router;