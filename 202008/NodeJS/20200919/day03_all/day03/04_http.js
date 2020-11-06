//引入http模块
const http=require('http');
//创建web服务器
const app=http.createServer();
//设置端口
app.listen(8080);

//访问自己电脑服务器
//IP     http://127.0.0.1:8080 
//域名   http://localhost:8080

//添加请求事件：一旦浏览器发来请求，自动监听到，执行回调函数,做出响应
app.on('request',(req,res)=>{
  //req 请求的对象
  //获取请求的URL和请求的方法
  console.log(req.url,req.method);
  //res 响应的对象
  /*
  //设置响应的状态码和头信息
  //参数1：设置状态码
  //参数2：设置响应头信息
  res.writeHead(200,{
    'Content-Type':'text/html;charset=utf-8'
  });
  //设置响应的内容
  res.write('这是你的jianbing <br>');
  res.write('youtiao');
  //结束并发送响应
  res.end();
  */
  /*
  //设置响应的重定向
  res.writeHead(302,{
    Location:'http://www.tmooc.cn'
  });
  //结束并发送响应
  res.end();
  */
  //404
  res.writeHead(404);
  //设置响应的内容
  res.write('not found');
  //结束并发送响应
  res.end();
});
