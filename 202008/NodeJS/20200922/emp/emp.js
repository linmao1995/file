const express = require("express");
const bodyParser = require("body-parser");//中间件模块，在路由之前设置中间件
const pool = require("../pool/pool");

// 创建路由器对象
const app = express();

app.use(express.static("./public/emp"))// 静态资源

// 使用body-parser将所有post请求的数据解析为对象
app.use(bodyParser.urlencoded({
    extended: false
}))

//list
app.get("/list", (request, response) => {
    pool.query("select * from emp", (err, data) => {
        if (err) throw err;
        response.send(JSON.stringify(data))
    })
})

// insert
app.post("/insert", (request, response) => {
    let sql = "insert into emp (eid,ename,sex,birthday,salary,deptId) values(?,?,?,?,?,?);";
    let obj = request.body;
    pool.query(sql, [null, obj.ename, obj.sex, obj.birthday, obj.salary, obj.deptId], (err, data) => {
        if (err) throw err;
        response.send(data)
    })
})



module.exports = app;