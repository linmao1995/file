// 引入URL模块
const url = require("url");
const querystring = require("querystring")
//url
let strurl = "https://www.tmooc.cn:443/web/course.html?cid=2008&cname=nodejs";

//解析为对象
let obj = url.parse(strurl);
// console.log(obj.query)
let query = querystring.parse(obj.query);

console.log(`cid:${query.cid},cname:${query.cname}`)
