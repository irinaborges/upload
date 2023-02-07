const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/tematicas', async function (req, res) {
    let tematicas = await query("select * FROM tematicas")
    res.json({tematicas: tematicas});
});

module.exports = router;