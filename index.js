const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())

app.use("/videos", require("./videos/videos.js"));
app.use("/playlists", require("./playlists/playlists.js"));
app.use("/playlist", require("./playlists/playlist.js"));
app.use("/videos/playlist", require("./playlists/playlist_videos.js"));


app.listen(3000);