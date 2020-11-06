//全局作用域、全局变量
var a = 1;//全局变量

//函数作用域
function function1() {
    var b = 2;//局部变量
}
function function2() {
    //var a;
    console.loxg(a)//undefined==>
    var a = 7;
}
function2();

console.log(a)

