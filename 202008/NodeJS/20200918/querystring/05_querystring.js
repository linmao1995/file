// 引入查询字符串模块
const querystring = require('querystring')

// 查询字符串
let string = 'keyword=笔记本&enc=utf-8'

//解析为对象
var obj = querystring.parse(string)

console.log(obj)
console.log(obj.keyword)

// console.log(querystring)