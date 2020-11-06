// 获取某个目录下所有文件
const fs = require('fs')

// fs.existsSync    copy(path1,path2,)
let path = './_test.txt';
let path2 = './_test2.txt';
// fs.copyFileSync(path,path2,(error)=>{
//     if(error){
//         throw error
//     }
// })

// 文件存在则删除，目录不存在则创建
let res = fs.existsSync('./asc');//boolean

// if(fs.existsSync('./01_fs.js')){
//     fs.unlink('./01_fs.js')
// }

console.log(res)