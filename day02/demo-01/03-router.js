const express = require('express');
const app = express();

const conf = {
    port: 8080,
    host: '192.168.0.101'
}

// 主页输出Hello World
app.get('/', (req, res) => {
    console.log('主页 Get 请求');
    res.send('<h3>主页 Get 请求</h3>')
})

// post 请求
app.post('/', (req, res) => {
    console.log('主页 Post 请求');
    res.send('<h3>主页 Post 请求</h3>')
})

// /del_user 页面响应
app.get('/del_user', (req, res) => {
    console.log('/del_user 响应 DELETE 请求');
    res.send('删除页面')
})

// /list_user 页面 GET 请求
app.get('/list_user', (req, res) => {
    console.log('/list_user 响应 Get 请求');
    res.send('用户列表页面')
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', (req, res) => {
    console.log('/ab*cd 响应 Get 请求');
    res.send('正则匹配')
})

app.listen(conf.port, conf.host, () => {
    console.log(`Server is running at http://${conf.host}:${conf.port}`);
})