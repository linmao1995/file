//引入fs模块
const fs=require('fs');
//开启一次性定时器
setTimeout( ()=>{
  //创建1~10 这些目录
  for(let i=1;i<=10;i++){
    fs.mkdirSync('./'+i); // ./3
  }
  //创建成功后
  //10秒后删除
  setTimeout( ()=>{
    for(let i=1;i<=10;i++){
	  fs.rmdirSync('./'+i);
	}
  },10000 )
},3000 );

