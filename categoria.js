const express = require("express");
const router = express.Router();
const query = require("./query");

// categorias pelo id
router.get('/', async function (req, res) {
    let categorias = await query("SELECT * FROM categoria")
    res.json(categorias);
});

// videos da categoria
router.get('/:categoria', async function (req, res) {
    let categorias = await query("SELECT * FROM video WHERE categoria = ?", [req.params.categoria]);
    res.json(categorias);
});

module.exports = router;
