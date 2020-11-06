const express = require("express");
const md5 = require("md5");
// 引入连接池模块
const pool = require("../pool.js");
// 创建路由器对象
const app = express.Router();

// 浏览器地址栏只能验证get请求
app.get("/test", (request, response) => {
    var _uname = request.query.uname;
    var _upwd = request.query.upwd;
    if (!_uname) {
        response.send({ code: -1, msg: "用户名不能为空" });
        return;
    }
    if (!_upwd) {
        response.send({ code: -1, msg: "密码不能为空" });
        return;
    }
    var sql = "select * from xz_user where uname=? and upwd=?";
    pool.query(sql, [_uname, md5(_upwd)], (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length !== 0) {
            response.send({ code: 1, msg: result })
        } else {
            response.send({ code: -1, msg: "用户名或密码错误" })
        }
    })
})

app.get("/getinfo", (request, response) => {
    var _uname = request.query.uname;
    var _upwd = request.query.upwd;
    response.send(`你的用户名为:${_uname}，你的密码为:${_upwd}`)
})

// http_get_login
app.get("/http_get_login", (request, response) => {
    var _uname = request.query.uname;
    var _upwd = request.query.upwd;
    var sql = "select * from xz_user where uname=? and upwd=?";
    pool.query(sql, [_uname, md5(_upwd)], (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result)
        if (result.length > 0) {
            response.send("1");
        } else {
            response.send("0")
        }
    })
})

// 查询所有用户信息。
app.get("/http_list", (request, response) => {
    var sql = "select * from xz_user";
    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        response.send(JSON.stringify(result))
        // response.send(result)
    })
})

// http_post login
app.post("/login", (request, response) => {
    var obj = request.body;
    var _uname = obj.uname;
    var _upwd = obj.upwd;
    var sql = "select * from xz_user where uname=? and upwd=?";
    pool.query(sql, [_uname, md5(_upwd)], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            response.send("1")
        } else {
            response.send("0")
        }
    })
})

// http_post register
app.post("/reg", (request, response) => {
    let obj = request.body;
    obj.upwd = md5(obj.upwd);
    let sql = "insert into xz_user set ?";
    pool.query(sql, [obj], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            response.send("1");
        } else {
            response.send("0")
        }
    })
})

// http_post update
app.post("/update", (request, response) => {
    var obj = request.body;
    obj.upwd = md5(obj.upwd);
    var sql = "update xz_user set ? where uid=?";
    pool.query(sql, [obj, obj.uid], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            response.send("1")
        } else {
            response.send("0")
        }
    })
})

// http_get delete_user
app.get("/delete", (request, response) => {
    var sql = "delete from xz_user where uid=?";
    pool.query(sql, [request.query.uid], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            response.send("1");
        } else {
            response.send("0");
        }
    })
})

app.get("/02_login", (request, response) => {
    var _uname = request.query.uname;
    var _upwd = request.query.upwd;
    var sql = "select * from xz_user where uname=? and upwd=?";
    pool.query(sql, [_uname, md5(_upwd)], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            response.send("1")
        } else {
            response.send("0")
        }
    })
})

app.get("/02_restful_login/:uname&:upwd", (request, response) => {
    var _uname = request.params.uname;
    var _upwd = request.params.upwd;
    var sql = "select * from xz_user where uname=? and upwd=?";
    pool.query(sql, [_uname, md5(_upwd)], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            response.send("1")
        } else {
            response.send("0")
        }
    })
})

app.post("/02_restful_post", (request, response) => {
    var _uname = request.body.uname;
    var _upwd = request.body.upwd;
    var sql = "select * from xz_user where uname=? and upwd=?";
    pool.query(sql, [_uname, md5(_upwd)], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            response.send("1")
        } else {
            response.send("0")
        }
    })
})

app.delete("/02_delete/:uid", (request, response) => {
    var _uid = request.params.uid;
    console.log(_uid)
    var sql = "delete from xz_user where uid=?";
    pool.query(sql, [_uid], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            response.send("1")
        } else {
            response.send("0")
        }
    })
})

app.post("/02_update", (request, response) => {
    var obj = request.body;
    obj.upwd = md5(obj.upwd);
    var sql = "insert into xz_user set ?";
    pool.query(sql, [obj], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            response.send("1")
        } else {
            response.send("0")
        }
    })
})

app.put("/02_put", (request, response) => {
    var obj = request.body;
    obj.upwd = md5(obj.upwd);
    var sql = "update xz_user set ? where uid=?";
    pool.query(sql, [obj, obj.uid], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            response.send("1")
        } else {
            response.send("0")
        }
    })

})

app.get("/user_list", (request, response) => {
    var sql = "select * from xz_user";
    pool.query(sql, (err, result) => {
        if (err) throw err;
        response.send(result);
    })
})
// 导出路由器对象
module.exports = app;