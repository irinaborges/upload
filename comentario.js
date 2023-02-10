const express = require("express");
const router = express.Router();
const query = require("./query");

// Get video comments
router.get('/video/:video', async function (req, res) {
    let comentarios = await query("SELECT nome as name, comentario as comment, video as video_id, data as date FROM comentario WHERE video = ?", [req.params.video])
    res.json(comentarios);
});

// Get channel comments
router.get('/canal/:canal', async function (req, res) {
    let comentarios = await query("SELECT nome as name, comentario as comment, canal as channel_id, data as date FROM comentario WHERE canal = ?", [req.params.canal])
    res.json(comentarios);
});

// Post video comments
router.post("/post", async function (req, res) {
    const comment_type = req.body.comment_type[0].target_id;
    const video = req.body.entity_id[0].target_id;
    const canal = req.body.entity_id[0].target_id;
    const comentario = `<p>${req.body.comment_body[0].value}</p>`;
    console.log(req.body)
    if (comment_type === "video_comments") {
        const nome = req.body.field_nome_comentario[0].value;
        const email = req.body.field_email_video[0].value;
        const resultado = await query("INSERT INTO comentario (nome, email, comentario, video) VALUES (?, ?, ?, ?)", [nome, email, comentario, video]);
        console.log("cheguei");
        res.status(201);
        res.send(
            {
                "cid": [
                    {
                        "value": resultado.insertId
                    }
                ],
                "field_name": [
                    {
                        "value": "field_comentarios_video"
                    }
                ],
                "comment_body": [
                    {
                        "value": comentario
                    }
                ],
                "field_email_video": [
                    {
                        "value": email
                    }
                ],
                "field_nome_comentario": [
                    {
                        "value": nome
                    }
                ]
            }
        );
    } else {
            const nomeCanal = req.body.field_nome[0].value;
            const emailCanal = req.body.field_email[0].value;
        const resultadoCanal = await query("INSERT INTO comentario (nome, email, comentario, canal) VALUES (?, ?, ?, ?)", [nomeCanal, emailCanal, comentario, canal]);
        console.log("cheguei");
        res.status(201);
        res.send(
            {
                "cid": [
                    {
                        "value": resultadoCanal.insertId
                    }
                ],
                "field_name": [
                    {
                        "value": "field_comentarios_canal"
                    }
                ],
                "comment_body": [
                    {
                        "value": comentario
                    }
                ],
                "field_email": [
                    {
                        "value": emailCanal
                    }
                ],
                "field_nome": [
                    {
                        "value": nomeCanal
                    }
                ]
            }
        );
    }
});


module.exports = router;
