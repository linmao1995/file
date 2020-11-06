const express = require("express");
// const querystring = require("querystring");
//①引入第三方模块body-parser
const bodyParser = require("body-parser");
const app = express();
app.listen(8081);

app.use(express.static("./public"));
//② 中间件   使用body-parser将所有post请求的数据解析为对象
app.use(bodyParser.urlencoded({
    extended: false,//是否使用第三方模块 false==>不使用第三方查询字符串模块 ,true==>使用第三方查询字符串模块
}))

// 根据表单请求创建对应的路由
app.post("/mylogin", (request, response) => {
    // request.on("data", (chunk) => {
    //     console.log(querystring.parse(chunk.toString()))
    //     response.send("success");
    // })

    //③获取post请求的数据
    console.log(request.body)
})