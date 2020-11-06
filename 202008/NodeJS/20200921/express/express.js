// 引入express包，属于第三方模块
const express = require("express");

// 创建web服务器
const server = express();//函数也是一种对象
// 设置端口
server.listen(8081);

// 路由
// 首页的路由，接收对首页的请求
// 请求的方法get()   请求的url：/index   回调函数
server.get("/index", (request, response) => {
    //request请求的对象，response响应的对象
    response.send("<h3>首页</h3>");//设置响应的内容并发送
})
server.get("/user", (request, response) => {//获取用户信息，
    // console.log(request.query)
    response.send("<b>用户信息用户信息用户信息</b>")
})
server.get("/list", (request, response) => {
    // 响应文件 需要使用绝对路径
    // console.log(__filename) //
    // console.log(__dirname)//__dirname获取当前模块绝对路径
    response.sendFile(__dirname + "/101.html");
})

// 商品详情路由detail
server.get("/detail", (request, response) => {
    response.sendFile(__dirname + "/202.html");
})

// 跳转
server.get("/study", (request, response) => {
    response.redirect("http://www.tmooc.cn");//重定向
});

// 路由 get /
server.get("/", (request, response) => {
    response.redirect("/index")
})
