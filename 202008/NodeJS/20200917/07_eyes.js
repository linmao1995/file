// 导出后，外部才可以使用
// var Eyes = {
//     a:1,
//     getSum:function(){
//         return 2;
//     }
// }
var a = 1;
function getSum(){
    return 2222;
}

console.log("eyes")
//当前模块对象 module   exports导出     代表当前模块导出的内容，默认是一个空对象，如果要导出内容，往这个对象下添加
module.exports = { a:2,fn:getSum}

// module.exports = Eyes;