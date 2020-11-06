// 数据库连接池
const mysql = require("mysql");
const pool = mysql.createPool({//创建连接池对象
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "tedu",
    connectionLimit: 15,//设置连接池中连接的数量,默认15个
})

// 执行sql命令
// pool.query("select * from emp where sex=0", (err, data) => {
//     if (err) {
//         throw err
//     }
//     console.log(data)
// })

// 删除编号为5的数据
//? 占位符，会将过滤的数据替换过来
// pool.query("delete from emp where eid=?",['4 or 1=1'],(err,data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data)
// })

// 插入数据
pool.query("insert into emp (eid,ename,sex,birthday,salary,deptId) values(?,?,?,?,?,?);", [null,'张三',1,'2020-10-01',9999.00,10], (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})