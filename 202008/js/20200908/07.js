var num = 1;
switch (num) {
    case 1:
        chaxun();
        break;
    case 2:
        qukuan();
        break;
    case 3:
        zhuan();
        break;
    default:
        quit();
}

function chaxun() {
    console.log('查询余额中。。。');
}
function qukuan() {
    console.log('取款进行中。。。')
}
function zhuan(){
    console.log("转账进行中。。。。")
}
function quit(){
    console.log("退出系统，谢谢使用")
}