//引入查询字符串模块
const querystring=require('querystring');
//console.log(querystring);
//查询字符串
let str='keyword=手机&enc=utf-8';
//解析为对象
let obj=querystring.parse(str);
//console.log(obj);
//console.log(obj.keyword);
//[Object:null prototype] 高版本的提示


let str1='lid=18&price=4199';

let obj1=querystring.parse(str1);
console.log(obj1.lid,obj1.price);


