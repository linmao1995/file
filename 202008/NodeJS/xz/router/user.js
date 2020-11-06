const express = require("express");
// 引入连接池模块
const pool = require("../pool.js");

// 创建路由器对象
const app = express.Router();

// 添加用户
app.post("/reg", (request, response) => {
    let obj = request.body;
    if (obj.uname === '') {//!obj.uname
        response.send({ code: -1, msg: "uname is required" });
        return;//阻止往后执行
    }
    if (obj.upwd === '') {
        response.send({ code: -1, msg: "upwd is required" });
        return;
    }
    if (obj.email === '') {
        response.send({ code: -1, msg: "email is required" });
        return;
    }
    if (obj.phone === '') {
        response.send({ code: -1, msg: "phone is required" });
        return;
    }
    // 将数据插入数据表
    let sql = "insert into xz_user set ?";
    pool.query(sql, [obj], (err, result) => {
        if (err) throw err;
        console.log(result)
        response.send({ code: 1, msg: 'success', "id": result.insertId })
    })

})

// 用户登录
app.post("/login", (request, response) => {
    let obj = request.body;
    if (obj.uname === '') {
        response.send({ code: -1, msg: "uname is required" });
        return;
    }
    if (obj.upwd === '') {
        response.send({ code: -1, msg: "upwd is required" });
        return;
    }
    pool.query("select * from xz_user where uname=? and upwd=?", [obj.uname, obj.upwd], (err, result) => {
        if (err) throw err;
        // console.log(result)
        // 得到一个数组，如果数组为空，说明登录失败，否则成功
        if (result.length === 0) {
            response.send({ code: -1, msg: "用户名或密码错误" })
        } else {
            response.send({ code: 1, msg: "success" })
        }
    })

})

// 用户修改
app.post("/update", (request, response) => {
    let obj = request.body;
    let i = 401;
    for (let key in obj) {
        if (obj[key] === '') {
            response.send({ code: i, msg: key + "   is required" });
            return;
        }
        i++;
    }
    pool.query("update xz_user set ? where uid=?", [obj, obj.uid], (err, result) => {
        if (err) throw err;
        if (result.affectedRows) {
            response.send({ code: 1, msg: "success" })
        } else {
            response.send({ code: -1, msg: "error" })
        }
    })
})

// 用户列表
app.get("/list", (request, response) => {
    let obj = request.query;
    if (obj.page === '') {
        obj.page = 1;
    }
    if (obj.size === '') {
        obj.size = 10;
    }
    let current = (obj.page - 1) * obj.size;
    // 查询结果是数组，直接把数组响应给浏览器端
    pool.query("select * from xz_user limit ?,?", [current, parseInt(obj.size)], (err, result) => {
        if (err) throw err;
        response.send(result)
    })
})

// 检索用户
app.get("/detail", (request, response) => {
    let obj = request.query;
    if (obj.uid === '') {
        response.send({ code: -1, msg: "uid is required" });
        return;
    }
    pool.query("select * from xz_user where uid=?", [obj.uid], (err, result) => {
        if (err) throw err;
        // console.log(result)
        if (result.length === 0) {
            response.send({ code: -1, msg: "未找到uid=" + obj.uid + "的用户" })
        } else {
            response.send(result)
        }
    })
})

// 删除用户
app.post("/delete", (request, response) => {
    let obj = request.body;
    if (obj.uid === '') {
        response.send({ code: -1, msg: "uid is required" });
        return;
    }
    pool.query("delete from xz_user where uid=?", [obj.uid], (err, result) => {
        if (err) throw err;
        if (result.affectedRows) {
            response.send({ code: 1, msg: "成功删除uid=" + obj.uid + "的用户" })
        } else {
            response.send({ code: -1, msg: "未找到uid=" + obj.uid + "的用户" })
        }
    })
})

// 导出路由器对象
module.exports = app;