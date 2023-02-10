const express = require("express");
const router = express.Router();
const query = require("./query");

// categorias
router.get('/', async function (req, res) {
    let categorias = await query("select id from categoria")
    res.json(categorias);
});

// videos da categoria
router.get('/:categoria', async function (req, res) {
    let categorias = await query("select c.designacao as name, c.id  from categoria c where c.designacao = ?", [req.params.categoria]);
    res.json(categorias);
});

module.exports = router;
