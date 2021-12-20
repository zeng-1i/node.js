// 创建第一个node.js应用
// 1. 引入require模块
var http = require("http");

// 2. 创建服务
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hello World \n");
}).listen(8888);

console.log("Server running at http://127.0.0.1:8888/");