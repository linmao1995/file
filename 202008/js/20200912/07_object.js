// 使用内置构造函数创建对象
var student = new Object();

// 给对象添加属性
student.id = 1001;
student['c_name'] = '张三'
// console.log(student)


// 使用内置构造函数创建汽车对象
var car = new Object();
car.color = "红色";
car.name = "宝马";
car.size = "XXXX";
car.height = 20.00;
car.weight = 10;

// console.log(car)
// 访问对象的所有属性  
// 遍历属性，使用循环依次访问每一个属性。
for (var c in car) {
    // console.log(c + ":" + car[c])
}



// 对象字面量创建班级对象，编号、所在城市、人数、班长。遍历得到对象中每一个属性
var clazz = {
    id: 1001,
    city: "北京",
    total: 100,
    master: "张三",
};

for (var key in clazz) {
    console.log(key + ":" + clazz[key])
}