var str='Range家住北京市八宝山，range发明煎饼机，RANGE平时喜欢养兔子，range喜欢单杠运动';
//写规则
//修饰符 i - ignore  忽略大小写
//console.log( str.search(/range/i) );
//g - global  全局查找
//console.log( str.match(/RANGE/ig) );
console.log( str.replace(/range/gi,'xxx') );