//内置构造函数
var arr=new Array('WEB2008','WEB2007');
//console.log(arr);
var arr2=new Array(3);
arr2[0]='mysql';
arr2[1]='js';
arr2[2]='nodejs';
arr2[3]='ajax';
//console.log(arr2);

//练习：创建数组包含有多个汽车品牌名称；创建数组初始化长度为5，保存篮球场上的5个位置。
var car=new Array('五菱宏光','奇瑞','比亚迪');
//console.log(car);
var ball=new Array(5);
ball[0]='中锋';
ball[1]='大前锋';
ball[2]='小前锋';
ball[3]='得分后卫';
ball[4]='控球后卫';
//往末尾 添加元素
ball[ball.length]='教练';
ball[ball.length]='裁判';
//获取长度
//console.log( ball.length );
//console.log(ball);


//练习：创建空数组，使用数组长度往数组中添加多个国家名称
var country=[];
country[country.length]='中国';
country[country.length]='瓦坎达';
country[country.length]='日本';
console.log(country);














