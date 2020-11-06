// var i = 0;
// do {
//     i++;//1,2,3,4
//     if (i > 4) {
//         alert("账号已锁定");
//         break;
//     }
//     var pwd = prompt("请输入密码");
//     if (pwd === '123456') {
//         break;
//     }
// } while (true)
// console.log(pwd)
var i = 0;
do {
    i++;
    if(i>4){
        alert("账号已锁定");
        break;
    }
    var pwd = prompt("请输入密码")

} while (pwd!=='123456')