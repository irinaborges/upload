const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json());

app.use("/videos", require("./video.js"));
app.use("/video", require("./video.js"));
app.use("/canais", require("./canal.js"));
app.use("/canais", require("./canal.js"));
app.use("/comentarios/canal", require("./comentario.js"));
app.use("/videos/canal", require("./canal.js"));
app.use("/tematica", require("./tematica.js"));
app.use("/tematicas", require("./tematica.js"));
app.use("/tematicas/sugeridas", require("./tematica.js"));
app.use("/reacao", require("./reacao.js"));
app.use("/videos/tematica", require("./tematica.js"));
app.use("/comentarios/video", require("./comentario.js"));
app.use("/comentarios", require("./comentario.js"));
app.use("/canais", require("./canal.js"));
app.use("/canal", require("./canal.js"));
app.use("/videos/canal", require("./canal.js"));
app.use("/playlists", require("./playlist.js"));
app.use("/playlist", require("./playlist.js"));
app.use("/videos/playlist", require("./playlist.js"));

app.listen(3000);
