const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/tematicas/sugeridos', async function (req, res) {
    let tematicas = await query("select titulo, imagem from tematicas_sugeridas")
    res.json({tematicas: tematicas});
});

module.exports = router;