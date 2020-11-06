//引入文件系统模块
const fs=require('fs');
/*
//查看文件状态
let stats=fs.statSync('./04');
//console.log(stats);
//查看是否为文件
console.log( stats.isFile() );
//查看是否为目录
console.log( stats.isDirectory() );
*/

//创建目录
//fs.mkdirSync('./mydir');
//移除目录
fs.rmdirSync('./04');



