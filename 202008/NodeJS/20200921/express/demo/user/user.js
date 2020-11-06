// 用户路由器
const express = require("express");
const querystring = require("querystring")
// 创建路由器对象
const r = express.Router();
// 往路由器对象中添加路由

// 用户列表 get /list
r.get("/list", (request, response) => {
    response.send("用户列表");
})

// 用户登录
r.get("/login", (request, response) => {
    response.sendFile(__dirname + "/login.html")
})

// 用户登录成功 loginsuccess
r.post("/loginsuccess", (request, response) => {
    request.on("data", (chunk) => {
        //chunk为buffer，转字符串后为查询字符串，==>解析为对象
        let obj = querystring.parse(chunk.toString())
        if (obj.username === "linmao" && obj.pwd === "linmao@1314.com") {
            response.send(`欢迎&nbsp;<span style='color:red'>${obj.username}</span>
            <br>
            <a href='/product/list'>查看商品</a>
            <a href='/product/shopcar'>查看购物车</a>
            `)
        } else {
            response.send("用户名或密码错误")
        }
    })
})

// 导出路由器对象
module.exports = r