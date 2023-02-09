const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/', async function (req, res) {
    let tematicas = await query("select id, nome as title, descricao as description, capa as header, imagem as thumbnail FROM tematica")
    res.json(tematicas);
});

module.exports = router;