// var status = 4;
// if (status === 1) {
//     console.log('等待付款')
// } else if (status === 2) {
//     console.log("等待发货")
// } else if (status === 3) {
//     console.log("运输中");
// } else if (status === 4) {
//     console.log("已签收")
// } else if (status === 5) {
//     console.log("已取消")
// } else {
//     console.log("无法追踪")
// }



// 判断一个人的成绩是否及格
var score = -100;
if (score < 0 || score > 100) {
    console.log("数据非法")
} else if (score >= 90 && score <= 100) {
    console.log("优秀")
} else if (score >= 80 && score < 90) {
    console.log("良好")
} else if (score >= 70 && score < 80) {
    console.log("中等")
} else if (score >= 60 && score < 70) {
    console.log("及格")
} else {
    console.log("不及格")
}


// 银行存款1、10W以下普通，10W-100W优质，100W-500W黄金 500W以上，钻石。
var money = 9999999;
if (money > 0 && money < 100000) {
    console.log("普通")
} else if (money < 1000000) {
    console.log("优质")
} else if (money < 5000000) {
    console.log("黄金")
} else {
    console.log("钻石")
}
