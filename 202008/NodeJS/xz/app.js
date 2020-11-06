const express = require("express");
const bodyParser = require("body-parser");
//引入user路由
const userRouter = require("./router/user.js");
const ajaxRouter = require("./router/ajax.js");
//创建web服务器
const app = express();
//设置监听端口
app.listen(8081)

//托管静态资源
app.use(express.static("./public"))

// 将所有post请求解析为对象
app.use(bodyParser.urlencoded({
    extended: false //==>不使用第三方模块，使用核心模块
}))

// 路由器放最后 参数1：前缀 参数2：要挂载的路由
app.use("/user", userRouter)
app.use("/ajax", ajaxRouter)