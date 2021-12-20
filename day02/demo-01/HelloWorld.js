// 调用http模块
const http = require('http');

// 创建http服务器并监听8080端口的所有请求
http.createServer((request, response) => {

    // 用 HTTP 状态码和内容类型来设定 HTTP 响应头
    response.writeHead(200, {'Content-Type': 'text/plane'});

    // 发送响应体 "Hello World"
    response.end('Hello World! \n');
}).listen(8080);

console.log('服务器运行于 http://127.0.0.1:8080/'); 