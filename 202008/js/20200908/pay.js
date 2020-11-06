var price = prompt("请输入商品价格");
var num = prompt("请输入商品数量");
var total = 1200;
var totalpay = price * num;
if (totalpay >= 1000) {//满1000,9折
    if (totalpay * 0.9 > total) {
        alert("余额不足")
    } else {
        alert("支付金额:" + (totalpay * 0.9))
    }
} else {
    alert("支付金额:" + totalpay)
}