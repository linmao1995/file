

//块级作用域    大括号之间的语句
{
    let i = 2;//局部变量，let声明的变量都是局部的。解决全局污染。
}
// console.log(i) //报错，i is not defined

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
// console.log(sum)

var arr = [1, 2, 5, 4, 3];
// arr.sort(function (a, b) { return a - b; })
//函数体中只有一行代码而且是return
// arr.sort((a,b)=>{return a-b})
arr.sort((a, b) => a - b)

// console.log(arr)


//匿名函数创建，
let fn1 = function (a, b, c) {
    return a + b + c;
}

let fn2 = (a, b) => a + b;

let fn3 = (a, b, c) => {
    if (a > b) {
        return a + b + c
    } else {
        return a - b + c
    }
};


// (function(){
//     console.log("aaa")
// })()

// console.log(fn2(2, 6))

let name = "张三";
let age = 1;
let phone = "13102102831";

//模板字符串===>字符串
console.log(`姓名:${name},年龄:${age===1?"男":"女"},联系电话:${phone}`)

var laptop = {
    id: 1001,
    title: '电脑',
    price: 8999
}

console.log(`
编号:${laptop.id}
标题:${laptop.title}
价格:${laptop.price.toFixed(2)}
`)