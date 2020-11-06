//对象字面量
var phone={
  color:'黑色',
  size:5.5,
  'brand':'华为',
  'made-in':'中国'
};
//console.log(phone,typeof phone);
//练习：创建一个员工对象，包含有员工的编号，姓名，性别，生日，工资，所属部门
var emp={
  eid:3,
  ename:'山田一然',
  sex:'男',
  birthday:'1977-5-29',
  salary:50000,
  'dept-id':'养殖部'
};
//console.log(emp);
//访问属性
//console.log( emp.eid, emp.ename );
//console.log( emp['dept-id'],emp['salary'] );
//重新赋值
emp.sex='女';
//console.log(emp);

//练习：创建一本图书对象，包含有图书的编号，标题，价格，作者；打印出图书的标题，对价格重新赋值，添加图书出版社属性；最后打印该对象
var book={
  bid:1003,
  title:'兔子的产后护理',
  price:199,
  author:'然哥'
};
console.log( book.title );
book.price=299;
//不存在的属性
//console.log(book.publish);//undefined
book.publish='瓦坎达人民出版社';
console.log(book);
















