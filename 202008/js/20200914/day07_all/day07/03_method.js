//方法
var person={
  name:'然',
  sex:'男',
  //方法对应的是函数
  play:function(){
	//this 指代当前的对象
    console.log(this.name+'正在玩单杠');
  },
  tan:function(){
    console.log('然哥正在摊煎饼');
  }
}
//var play=function(){   }  //play()
//console.log(person);
//调用方法
//person.play();
//person.tan();

//练习：创建一个圆的对象，包含属性有半径和圆周率，添加两个方法，分别是计算圆的周长和面积，并返回结果。调用两个方法练习：创建一个圆的对象，包含属性有半径和圆周率，添加两个方法，分别是计算圆的周长和面积，并返回结果。调用两个方法
var circle={
  r:5,
  pi:3.14,
  getArea:function(){
    return this.pi*this.r*this.r;
  },
  getLen:function(){
    return 2*this.pi*this.r;
  }
}
console.log( circle.getArea() );
console.log( circle.getLen() );






