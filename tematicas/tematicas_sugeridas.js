const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/', async function (req, res) {
    let tematicas = await query("select id, nome as title, capa as header, imagem as thumbnail FROM tematicas")
    res.json(tematicas);
});

module.exports = router;