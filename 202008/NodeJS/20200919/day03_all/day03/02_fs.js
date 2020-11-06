const fs=require('fs');
/*
let s=fs.statSync('./01_homework.js');
console.log(s);
//异步
fs.stat('./01_homework.js',(err,s)=>{
  //err 一旦报错就将错误放入到err
  if(err)  throw err;
  //s  文件的具体状态
  console.log(s);
});

//异步创建目录
fs.mkdir('./mydir',(err)=>{
  if(err) throw err;
  console.log('异步创建成功');
})

//异步移除目录
fs.rmdir('./mydir',(err)=>{
  if(err) throw err;
  console.log('异步移除成功');
});

//2.读取目录
//同步
let arr=fs.readdirSync('../day02');
console.log(arr);

//异步
fs.readdir('../day02',(err,arr)=>{
  if(err) throw err;
  console.log(arr);
});

//3.文件写入
fs.writeFileSync('./1.txt','hello');

fs.writeFile('./2.txt','然哥',(err)=>{
  if(err) throw err;
})

//4.追加写入
fs.appendFile('./3.txt','然哥\n',(err)=>{
  if(err) throw err;
});

//练习：创建一个数组，包含有多个姓名，使用同步方法将数据写入到文件stu.txt中
let arr=['费少春','王颜宏','吴志超','石润聪','刘家乐'];
//遍历数组
for(let i=0;i<arr.length;i++){
  //arr[i]
  //同步写入
  fs.appendFileSync('./stu.txt',arr[i]+'\n');
}
//5.读取文件数据
let data=fs.readFileSync('./stu.txt');
console.log( String(data) );

//异步读取
fs.readFile('./stu.txt',(err,data)=>{
  if(err) throw err;
  console.log(data.toString());
});

//6.删除文件
//fs.unlinkSync('./1.txt');
fs.unlink('./2.txt',(err)=>{
  if(err) throw err;
});
console.log('执行结束');
*/

//7.检测文件是否存在
//console.log( fs.existsSync('./3.txt') );
//练习：如果文件存在，则删除文件3.txt
if( fs.existsSync('./3.txt') ){
  fs.unlinkSync('./3.txt');
}
//如果目录mydir不存在，则创建该目录
if( !fs.existsSync('./mydir') ){
  fs.mkdirSync('./mydir');
}

//拷贝文件
fs.copyFileSync('./stu.txt','./mydir/1.txt');


