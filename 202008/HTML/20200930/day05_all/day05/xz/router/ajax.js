const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();
//1.ajax测试接口  
//url:127.0.0.1:8080/ajax/test
//浏览器的地址栏只能验证get方法
r.get("/test",(req,res)=>{
	var _uname=req.query.uname;
	var _upwd=req.query.upwd;
	console.log(_uname,_upwd);
	res.send("第一个ajax操作接口");
});

//2.练习
r.get("/ajax2",(req,res)=>{
	var _uname=req.query.uname;
	var _upwd=req.query.upwd;
	res.send("您的用户名为"+_uname+",您的密码为"+_upwd);
});
//3.原生http-get方法登录
r.get("/http_get_login",(req,res)=>{
	var _uname=req.query.uname;
	var _upwd=req.query.upwd;
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//4.获取所有用户信息
r.get("/http_list",(req,res)=>{
	var sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//导出路由器对象
module.exports=r;