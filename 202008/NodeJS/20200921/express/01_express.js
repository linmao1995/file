const express = require("express");
// 创建web服务器
const server = express();
// 设置监听端口
server.listen(8081);

server.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

server.get("/register", (request, response) => {
    response.sendFile(__dirname + "/register.html")
})

server.get("/login", (request, response) => {
    response.sendFile(__dirname + "/login.html")
})