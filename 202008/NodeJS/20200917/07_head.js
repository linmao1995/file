// 引入模块07_eyes.js
//如果引入同一级目录的模块加 ./
//存在于模块作用域下，都是局部的。
// 成功引入模块后，得到对方导出的内容
var eyes = require("./07_eyes")
// console.log(eyes)

// 调用导出的内容
// console.log(eyes.a);

console.log(eyes.fn())