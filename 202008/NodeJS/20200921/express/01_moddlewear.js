const express = require("express");

const app = express();
app.listen(8081);

// 中间件，拦截对/list的请求
//参数1：要拦截的URL 参数2：回调函数，当拦截后自动调用
app.use("/list", (request, response, next) => {
    //request请求对象 response响应对象
    let obj = request.query;
    // 判断传递的用户是否为管理员root
    if (obj.username === 'root') {
        // 否则往后执行，可能是下一个中间件，也可能是路由
        next();//往后执行
    } else {
        //不是root，==>请提供管理员账户
        response.send("请管理员添加权限")
    }
});

app.get("/list", (request, response) => {
    response.send("用户列表====用户列表")
})

// 拦截购物车路由
app.use("/shopcar", (request, response, next) => {
    request.query.price = request.query.price * 0.9;
    next();
})

app.get("/shopcar", (request, response) => {
    let obj = request.query;
    response.send("添加购物车成功,价格为:" + obj.price)
})