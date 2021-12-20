var express = require('express');
var app = express();

var conf = {
    port: 8080,
    host: 'localhost'
}
 
app.use(express.static('public'));
 
// app.get('/index.html', function (req, res) {
//    res.sendFile( __dirname + "/" + "index.html" );
// })

app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.send(`<h3>登录成功,欢迎${req.query.first_name}</h3>`);
})
 
app.listen(conf.port, conf.host, () => {
    console.log(`server is running at http://${conf.host}:${conf.port}`);
})