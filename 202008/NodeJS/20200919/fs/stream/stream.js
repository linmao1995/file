const fs = require("fs");

// // 创建可读取的流对象
// let stream = fs.createReadStream("D:/new_file/Downloads.zip");
// // 通过事件来获取数据 

// // data: 数据流入事件，data是固定的,通过回调函数来获取流入的数据
// // 声明变量，用于记录段数
// let i = 0;
// stream.on('data',(chunk)=>{//chunk 获取到的分段数据,格式为Buffer
//     // 每读取一段，+1
//     i++;
// })
// // 监听是否结束，结束会自动调用一个回调函数，
// stream.on('end',()=>{
//     console.log(i)
// })
// // console.log(stream)

// 使用流的操作完成文件拷贝

// 创建可读取的流
const rs = fs.createReadStream("D:/new_file/Downloads.zip");
// 创建可写入的流
const rs_ = fs.createWriteStream("D:/new_file/_Downloads.zip");
//将读取到的流通过管道的方法添加到写入流
rs.pipe(rs_)