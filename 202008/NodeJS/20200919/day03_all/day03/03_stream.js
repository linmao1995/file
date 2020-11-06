const fs=require('fs');
/*
//创建可读取的流对象
const rs=fs.createReadStream('./1.zip');
//通过事件获取数据
//data:数据流入事件,固定的用法;通过回调函数获取流入的数据
//声明变量用于记录段数
let i=0;
rs.on('data',(chunk)=>{
  //chunk 获取到的分段数据，格式为Buffer
  //console.log(chunk); 00000
  //每读取一段加1
  i++;
})
//事件：end  监听结束，如果结束自动调用回调函数
rs.on('end',()=>{
  console.log(i);
});
*/


//使用流的操作完成文件拷贝
//创建可读取的流
const rs=fs.createReadStream('./1.zip');
//创建可写入的流
const ws=fs.createWriteStream('./2.zip');
//把读取的流通过管道的方法添加到写入流
rs.pipe(ws);







