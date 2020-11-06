// 文件系统模块
const fs = require('fs');
// console.log(fs)
// 查看文件状态
// let f = fs.statSync('../04');
// console.log(f)

// 查看是否为文件
// console.log(f.isFile())
// 查看是否为目录
// console.log(f.isDirectory())

// 创建目录
// fs.mkdirSync('./fsss');
// 移除目录
fs.rmdirSync('./fsss')
// console.log(__filename)