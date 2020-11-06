// 引入http模块
const http = require("http");
const fs = require("fs");

// 创建web服务器
const server = http.createServer();
// 设置端口号
server.listen(8081)

// 接收请求，做出响应
server.on("request", (request, response) => {
    if (request.url === '/index.html') {
        response.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        });
        response.write("<h3>这是首页</h3>")
    } else if (request.url === "/list") {
        // response.writeHead(200, {
        //     "Content-Type": "text/html;charset=utf-8"
        // });
        let data = fs.readFileSync("./101.html");//隐式将读取到的Buffer转换为字符串
        response.write(data)
    } else if (request.url === '/study') {
        response.writeHead(302, {
            Location: "http://www.baidu.com"
        });
    } else {
        response.writeHead(404, {
            "Content-Type": "text/html;charset=utf-8"
        });
        response.write("Not Found");
    }
    response.end();
})