var express = require('express');
var path = require('path');
var app = express();

const conf = {
   port: 8080,
   host: '192.168.0.101',
};

app.use(express.static(path.join(__dirname, 'public')))

app.listen(conf.port, conf.host, () => {
    console.log(`server is running at http://${conf.host}:${conf.port}`);
})