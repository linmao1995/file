//内置构造函数
var student=new Object();
//需要单独添加属性
student.id=5;
student['name']='尼古拉斯.然';
//console.log(student);

//练习：使用内置构造函数创建一个汽车对象，包含有汽车的品牌，型号，颜色，长度，宽度
var car=new Object();
car.brand='五菱宏光';
car.bid='730';
car.color='银白色';
car['len']=4.2;
car['width']=1.7;
//console.log(car);
//{ brand: '五菱宏光', bid: '730', color: '银白色', len: 4.2, width: 1.7 }
//遍历属性
/*
for(var k in car){
  //k 代表对象中每一个属性名
  //car[k]  属性名对应的属性值
  console.log(k,car[k]);
}
*/
//练习：使用对象字面量创建班级对象，包含有班级编号，所在城市，人数，班长；遍历对象中的每一个属性
var c={
  id:'WEB2008',
  city:'北京',
  num:50,
  monitor:'然哥'
};
for(var k in c){
  console.log(k,c[k]);
}





