//读取目录下的文件
const fs = require("fs");

let path = "../../2020-09-18";


// fs.readdir(path, (err, data) => {
//     if (err) {
//         throw err
//     }
//     console.log(data)
// })

// 文件写入
let path1 = './a.txt';//路径
let str = `NodeJs   NodeJs
NodeJs
    NodeJs
    NodeJs
        NodeJs
            NodeJs`;//写入的数据
let str2 = 'Hello JavaScript World\n';

// 同步 文件写入
// fs.writeFileSync(path1,str);

// 异步  文件写入
// fs.writeFile(path1, str, (err) => {
//     if (err) {
//         throw err
//     }
// })

// 异步 文件追加内容
// fs.appendFile(path1,str2,(err)=>{
//     if(err){
//         throw err
//     }
// })

//同步 文件内容追加
fs.appendFileSync(path1,str2)

//异步 文件重命名
// fs.rename(path1, '测试.txt', (error) => {
//     if (error) {
//         throw error
//     }
// })

// 同步 文件重命名
// fs.renameSync('a.text','a.txt')

console.log("-----END------")