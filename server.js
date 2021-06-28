const express = require('express');
const serveStatic = require('serve-static')
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8082;
const app = express();
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use("/", serveStatic(path.join(__dirname, '/dist')))
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port);