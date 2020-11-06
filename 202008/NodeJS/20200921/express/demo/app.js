const express = require("express");
// 引入用户路由器
const userRouter = require("./user/user")//引入 自定义模块
const productRouter = require("./product/product")
// 创建web服务器
const app = express();
// 设置端口
app.listen(8081)

// 把路由器挂载web服务器
app.use("/user",userRouter);//参数1：给所有URL添加的前缀  参数2：要挂载的路由器
app.use("/product",productRouter);