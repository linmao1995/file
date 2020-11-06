// 创建函数fn和变量a。使用全局window访问
var a = 1;

function fn() {
    return 2;
}

console.log(window.a)
// console.log(global.a)//err

console.log(window.fn())
// console.log(global.fn())//err