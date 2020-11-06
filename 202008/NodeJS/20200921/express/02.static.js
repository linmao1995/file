const express = require("express");
const app = express();
app.listen(8081);

// 托管静态资源到public目录。如果请求文件，自动到目录下寻找
app.use(express.static('./public'))
app.use(express.static('./file'))