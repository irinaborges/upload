const express = require("express");
const router = express.Router();
const query = require("../query");


router.get('/:categoria', async function (req, res) {
    let categorias = await query("SELECT * FROM video WHERE categoria = ?", [req.params.categoria]);
    res.json(categorias);
});

module.exports = router;