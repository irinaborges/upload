const express = require("express");
const router = express.Router();
const query = require("../query");


router.get('/', async function (req, res) {
    let categorias = await query("SELECT * FROM categoria")
    res.json(categorias);
});

module.exports = router;