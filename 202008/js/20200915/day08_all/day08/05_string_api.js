/*
var str='然哥正在玩单杠';
//获取字符串长度
console.log( str.length );
//通过下标获取对应的字符
console.log( str.charAt(0), str[0] );

//练习：遍历字符串'javascript'，计算出字符a出现的次数。
var str='javascript';
//charCodeAt 查看字符的Unicode码
for(var i=0,count=0;i<str.length;i++){
  //console.log( str.charAt(i).charCodeAt() );
  if(str.charAt(i)==='a'){
    count++;
  }
}
console.log(count);

//查找某个字符串
var str='javascript';
//console.log( str.indexOf('b') );
//console.log( str.lastIndexOf('b') );

//练习：声明变量保存用户输入的邮箱，检测用户输入的邮箱格式是否合法（含有@），如果不含有则打印‘非法邮箱’，否则‘合法邮箱’
var input='ran1234@tedu.cn';
if(input.indexOf('@')===-1){
  console.log('非法的邮箱');
}else{
  console.log('合法的邮箱');
}

//英文字母转大小写
var str='JavaScript';
console.log( str.toUpperCase() );//大写
console.log( str.toLowerCase() );//小写

//截取字符串
var str='javascript';
console.log( str.slice(4) );
console.log( str.slice(4,7) );
console.log( str.slice(-3,-1) );

//练习：声明变量保存一个邮箱，分别截取出邮箱的用户名和域名。
var email='ran54534678@tedu.cn';
//查找到@的下标
var index=email.indexOf('@');
//console.log(index);
//截取用户和域名
console.log(email.slice(0,index), email.slice(index+1));


//按照长度截取
var str='javascript';
console.log( str.substr(4,3) );
console.log( str.substr(-3,2) );
console.log( str.substr(4) );

//练习：声明变量保存身份证号，分别截取出出生的年月日，以及性别的数字（倒数第2位，奇数男，偶数女），打印  xxxx年xx月xx日  性别x
var id='110222197705293257';
var y=id.substr(6,4);
var m=id.substr(10,2);
var d=id.substr(12,2);
var s=id.substr(-2,1);
var sex=s%2 ? '男' : '女';
console.log(y+'年'+m+'月'+d+'日 性别'+sex);


var arr=['a','b','c'];
var str=String(arr);//a,b,c
//console.log(str);
//字符串转数组
var arr2=str.split(',');
console.log(arr2);
//尼古拉斯.一然.约翰.山田
//123.abc.thumb.jpg
*/
var str='abc.thumb.jpg';
//按照.切割为数组
var arr=str.split('.');
//最后一个元素下标  长度-1
console.log(arr[arr.length-1]);


