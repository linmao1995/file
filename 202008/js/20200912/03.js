// 回调函数
function ran(madai) {//形参，用于接收所传递的函数
    console.log("开始====");
    console.log("结束=====");
    // 调用传递的函数
    //madai()===>dong()
    madai();
}

function dong() {
    console.log("kaishi..");
    console.log("jieshu..")
}

function _dong() {
    console.log("1111111")
}
//dong以实参形式传递进去，叫回调函数
// ran(dong)
ran(_dong)
// 匿名函数以市场形式传递，叫回调函数
// ran(function(){return 1;})
