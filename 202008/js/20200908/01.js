var price = 20;
var num = 60;
var pay = 1200;
if (pay < price * num) {//付款金额小于商品总价格.
    console.log('资金不足')
} else if (price * num >= 500) {
    console.log('收款金额:' + price * num * 0.8)
    console.log('找零:' + (pay - price * num * 0.8))
} else {
    console.log('收款金额:' + price * num)
    console.log('找零:' + (pay - price * num))
}
