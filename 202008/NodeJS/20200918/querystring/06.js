//引入查询字符串模块
const querystring = require('querystring');
// 查询字符串
let string = 'lid=19&price=4199';
// 解析查询字符串
var obj = querystring.parse(string)
console.log(obj)
// 将数据对象转换为查询字符串
var search = {id:1001,name:"张三",age:20,birthday:'2020-09-18'}
console.log(querystring.stringify(search))

// console.log(obj.lid,obj.price)