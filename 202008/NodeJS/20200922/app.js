const express = require("express");//引入express框架
// 引入用户路由器
const empRouter = require("./emp/emp")
const app = express();
app.listen(8081);

// 把路由器挂载web服务器
app.use("/emp", empRouter)//参数1：给url添加的前缀 参数2：要挂载的路由