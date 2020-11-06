// 引入mysql模块
const mysql = require("mysql");
// 创建普通连接对象
//创建mysql连接
const conn = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "tedu",//连接后要进入的数据库
});
// 测试连接 可省略
// conn.connect();

// 执行SQL命令  conn.query("sql语句",回调函数)
// 异步操作，通过回调函数获取结果
conn.query("select * from emp where eid=1",(err,data)=>{//err 可能产生的错误，data：sql命令的结果
    if(err){
        throw err
    }
    // console.log(data)
})

// 连接池
