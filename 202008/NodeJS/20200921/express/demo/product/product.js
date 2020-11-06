// 创建商品路由
// 引入express包
const express = require("express");
// 创建路由对象
const r = express.Router();
// 往路由对象中添加路由
// 确定url和method  

// 商品列表
r.get("/list",(request,response)=>{
    response.sendFile(__dirname+"/list.html")
})

// 搜索列表页
r.get("/search",(request,response)=>{
    //搜索关键字 
    let obj = request.query;
    response.send(`搜索关键字为 <span style='color:red'>${obj.keyword}</span>`)
})

// 添加购物车 路由传参
r.get("/shopcar/:name/:num",(request,response)=>{
    let obj = request.params;
    response.send(`商品名称:${obj.name},商品数量:${obj.num}`)
})

// 购物车列表
r.get("/shopcar",(request,response)=>{
    response.sendFile(__dirname+"/shopcar.html")
})

// 购物车列表商品删除
r.get("/delpro/:id",(request,response)=>{
    let obj = request.params;
    response.send(`删除 id=${obj.id} 商品成功`)    
})

// 导出路由器对象
module.exports = r;