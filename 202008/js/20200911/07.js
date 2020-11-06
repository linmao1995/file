//函数作用域
// 在全局作用域下创建的函数属于全局函数
function fn1(){
    // 在函数作用域下创建的函数
    // 局部函数
    fn2();
    function fn2(){
        console.log("fn2")
    };
}
fn1();