// 创建函数-函数声明
function fn() {

}

// 匿名函数创建--函数表达式，
// 把匿名函数赋给一个变量，变量名称就是一个函数名称
var fun = function () {
    console.log("匿名函数")
}
// 调用
// fun();


// 使用匿名函数创建函数，传递任意两个数字，返回两个数字之间所有整数和
var res = function (m, n) {
    var sum = 0
    if (m < n) {
        for (var i = m; i <= n; i++) {
            sum += i
        }
    } else {
        for (var i = n; i <= m; i++) {
            sum += i
        }
    }
    return sum;
}
// console.log(res(100,1))


//回调函数
function function1(num1, num2) {
    console.log(num1 + num2)
}
function1(a,b )

function a() { return 1; };
function b() { return 2; }