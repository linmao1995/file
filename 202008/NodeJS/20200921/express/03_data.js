const express = require("express");
const mysql = require("mysql")
const querystring = require("querystring")//引入查询字符串模块

// 连接数据库
var pool = mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "xz",
    charset: "utf8",
    connectionLimit: 10
})

pool.query("select c_number from laptop where l_id=10", function (err, result) {
    if (err) {
        console.log(err)
    }
    console.log(result)
})

const server = express();
server.listen(8081);

server.get("/", (request, response) => {
    response.redirect("/search")
})

server.get("/search", (request, response) => {
    response.sendFile(__dirname + "/search.html")
})

server.get("/result", (request, response) => {
    // console.log(request.query)
    // 获取用户传递的数据，以 查询字符串 方式传递
    // 获取请求的URL
    console.log(request.url)
    response.send("从数据库中搜索" + request.query.key)
})

server.get("/login", (request, response) => {
    response.sendFile(__dirname + "/login.html")
})

// 根据表单请求创建相应的路由
server.post("/loginresult", (request, response) => {
    // 获取post传递的数据
    // 以流的方式传递，通过事件获取
    request.on('data', (chunk) => {//回调函数用于获取数据
        // chunk    分段的数据,格式为buffer
        // let res = chunk.toString();//转为字符串，格式为查询字符串
        // let a = querystring.parse(res)//使用查询字符串下parse方法，将字符串解析为对象
        let res = querystring.parse(chunk.toString())
        response.send("欢迎" + res.username)
        console.log(res)
    });
})

// 路由传参
//:pname    设置形参的名称，传递的数据被pname所接受
server.get("/package/:pname/:b", (request, response) => {
    // 获取路由传递的参数
    console.log(request.params)
    response.send("包的详情")
})

// 创建添加购物车路由   get /shopping   商品id/商品价格price
server.get("/shopping/:id/:price", (request, response) => {
    let obj = request.params;//request.params得到一个对象
    response.send(`商品ID:${obj.id},<br>商品价格:${obj.price}`)
})

// 路由器，可以吧路由按照功能模块来划分为多个路由器，路由器中包含了所有功能模块下的路由，最后把路由器挂载到web服务器，同时可以给每个路由添加前缀，防止出现的URL