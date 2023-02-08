const express = require("express");
const router = express.Router();
const query = require("../query");

router.get('/', async function (req, res) {
    let dislikes = await query("select id, count FROM dislike")
    res.json(dislikes);
});

router.post("/", async function (req, res) {
    //await query("INSERT into autor SET = ?", [req.params.autor])
    await query("INSERT INTO autor (nome) VALUES =(?)", [req.body.nome])
    /*let dislike = await query("select * FROM dislike")
     console.log(req.query);
     console.log(req.params);
     console.log(req.body);
    res.json(dislike)*/
});

module.exports = router;