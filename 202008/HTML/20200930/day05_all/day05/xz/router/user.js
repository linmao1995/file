const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器对象
const r=express.Router();
//1.用户注册  post  /reg
r.post('/reg',(req,res)=>{
  //1.1获取post请求的数据
  let obj=req.body;
  console.log(obj);
  //1.2检测各项数据是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	//阻止往后执行
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  if(!obj.email){
    res.send({code:403,msg:'email required'});
	return;
  }
  if(!obj.phone){
    res.send({code:404,msg:'phone required'});
	return;
  }
  //1.3将数据插入到数据表xz_user中
  //执行SQL命令
  pool.query('INSERT INTO xz_user SET ?',[obj],(err,result)=>{
    if(err) throw err;
	console.log(result);
    res.send({code:200,msg:'reg suc'});
  });
});
//2.用户登录  post  /login
r.post('/login',(req,res)=>{
  //2.1获取post请求的数据
  let obj=req.body;
  console.log(obj);
  //2.2检测各项数据是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  //3.执行SQL命令，查询数据库中是否有用户名和密码同时匹配的数据
  pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],(err,result)=>{
    if(err) throw err;
	//结果为数组
	console.log(result);
    //如果是空数组，则说明登录失败，否则说明登录成功
	if(result.length===0){
	  res.send({code:301,msg:'login err'});
	}else{
	  res.send({code:200,msg:'login suc'});
	}
  });
});
//3.修改用户  post  /update
r.post('/update',(req,res)=>{
  //3.1获取post请求的数据
  let obj=req.body;
  console.log(obj);
  //3.2检测各项数据是否为空
  //遍历对象obj，得到每个属性值
  //声明变量记录状态码
  let i=400;
  for(let k in obj){
	//每次循环，状态码加1
	i++;
	//k代表属性名，obj[k]对应的属性值
    //console.log(k,obj[k]);
	//判断属性值是否为空，提示属性名这项是必须的
	if(!obj[k]){
	  res.send({code:i,msg:k+' required'});
	  return;
	}
  }
  //3.3执行SQL命令，修改用户的数据
  pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj,obj.uid],(err,result)=>{
    if(err) throw err;
	//结果是一个对象
	console.log(result);
	//如果对象下的affectedRows为0，则修改失败，否则修改成功
	if(result.affectedRows===0){
	  res.send({code:301,msg:'update err'});
	}else{
	  res.send({code:200,msg:'update suc'});
	}
  });
});
//4.用户列表  get  /list
r.get('/list',(req,res)=>{
  //4.1获取查询字符串传递的数据
  let obj=req.query;
  console.log(obj);
  //4.2检测各项数据是否为空
  //如果每页大小为空设置默认显示5条数据
  if(!obj.size)  obj.size=5;
  //如果当前页码为空设置默认显示第1页
  if(!obj.pno)  obj.pno=1;
  console.log(obj);
  //4.3计算开始查询的值
  let start=(obj.pno-1)*obj.size;
  //4.4将每页的大小转为整型
  let count=parseInt(obj.size);
  //执行SQL命令，查询数据
  pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,count],(err,result)=>{
    if(err) throw err;
	//结果是数组
	console.log(result);
	//把数组直接响应给浏览器端
	res.send(result);
  });

});
//导出路由器对象
module.exports=r;