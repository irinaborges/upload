const express = require("express");
const router = express.Router();
const query = require("./query");

router.get('/:id', async function (req, res) {
    let comentarios = await query("select name, comment, date FROM comentarios_canal WHERE channel_id = ?", [req.params.id]);
    res.json(comentarios);
});

module.exports = router;
