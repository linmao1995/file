// 方法
var person = {
    name: '张三',
    sex: 1,
    play: function () {//方法对应的是函数
        console.log(this.name + "--play--")
    },
    play2: play2,
}
function play2() {
    console.log(this.name + "--play2--")
}
// 调用对象的方法
// person.play();
// person.play2();
// console.log(person)



//创建圆对象，属性半径r，圆周率PI，方法：计算圆周长面积，并返回结果。调用这两个方法。
var circle = {
    r: 4,
    getT: function () {//周长
        return "周长:" + (2 * Math.PI * this.r);
    },
    getS: function () {//面积
        return "面积:" + (Math.PI * this.r * this.r);
    }
}
console.log(Math.PI)
console.log(circle.getT());
console.log(circle.getS());