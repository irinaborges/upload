const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json());

app.use("/videos", require("./videos/videos.js"));
app.use("/video", require("./videos/video.js"));
app.use("/canais", require("./canais/canais.js"));
app.use("/canal", require("./canais/canal.js"));
app.use("/comentarios/canal", require("./canais/comentarios_canal"));
app.use("/videos/canal", require("./canais/canal_videos.js"));
app.use("/tematica", require("./tematicas/tematica.js"));
app.use("/tematicas", require("./tematicas/tematicas.js"));
app.use("/tematicas/sugeridas", require("./tematicas/tematicas_sugeridas.js"));
app.use("/dislikes", require("./videos/dislike"));
app.use("/videos/tematica", require("./tematicas/tematica_videos"));
//app.use("/autores", require("./autores.js"));
//app.use("/livros", require("./livros.js"));
//app.use("/autores", require("./autores.js"));
//app.use("/livros", require("./livros.js"));
//app.use("/autores", require("./autores.js"));
//app.use("/livros", require("./livros.js"));
//app.use("/autores", require("./autores.js"));
//app.use("/livros", require("./livros.js"));
//app.use("/autores", require("./autores.js"));
//app.use("/livros", require("./livros.js"));
//app.use("/livros", require("./livros.js"));

app.listen(3000);