const http = require("http");

// 创建web服务器
const server = http.createServer();
// 设置端口
server.listen("9631")
//启动服务器==>执行js文件

// 访问自己电脑服务器 IP127.0.0.1 域名localhost 127.0.0.1:9631  

// 客户端发出请求
// 127.0.0.1:9631

// 服务器做出响应
// 添加请求事件，一旦浏览器发来请求，自动监听到，执行回调函数，做出响应
server.on('request', (request, response) => {//request浏览器发出的请求对象，response服务器端做出的响应对象
    //resquest请求的对象，获取请求的URL和方法
    console.log(request.url,request.method)
    //参数1：设置状态码，参数2：
    // response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' })//设置响应的状态码，头信息
    // response.write("Hello World<br>");//设置服务器端要响应的内容
    // response.write("hello world");
    // response.write("<br>你好")
    // response.end();//结束并发送响应

    // 设置响应的重定向
    // response.writeHead(302,{
    //     Location:"http://www.tmooc.cn"
    // })
    // response.end();//结束并发送响应

    // 设置响应404
    response.writeHead(404)
    response.write("Not found")//设置响应内容
    response.end();
})

// console.log(http)