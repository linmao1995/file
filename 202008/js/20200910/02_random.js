// 获取一个随机数 math.random()得到0-1包含0不包含1的随机数
//0-9

do {
    var num = prompt("请输入数字");
    var s = parseInt(Math.random() * 10)
    console.log(num, s)
    if (Number(num) === s) {
        alert("猜对了");
        break;
    }
} while (Number(num) !== s)