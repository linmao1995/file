//引入07_yan.js模块
//如果引入同一级目录的模块加 ./
//成功引入模块后，得到对方导出的内容
let obj=require('./07_yan.js');
console.log(obj);
//调用导出的内容
console.log(obj.a2);
console.log(obj.fn2());