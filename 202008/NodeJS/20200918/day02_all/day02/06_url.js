//引入URL模块
const url=require('url');
const querystring=require('querystring');
/*
//URL
let str='http://www.codeboy.com:9999/product.html?lid=18&price=4199';
//将URL解析为对象
let obj=url.parse(str);
console.log(obj);
*/

let str1='https://www.tmooc.cn:443/web/course.html?cid=2008&cname=nodejs';
//解析URL为对象
let obj1=url.parse(str1);
console.log(obj1.query);//查询字符串
//解析查询字符串为对象
let obj2=querystring.parse(obj1.query);
console.log(obj2.cid, obj2.cname);
