const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/canal/:id', async function (req, res) {
    let canal = await query("select * FROM canal WHERE id = ?", [req.params.id]);
    res.json({canal: canal});
});

module.exports = router;