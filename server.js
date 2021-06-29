const express = require('express');
const serveStatic = require('serve-static')
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8082;
const app = express();
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.set('Content-Type', 'text/css');
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});
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