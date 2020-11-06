for (var i = 1; i <= 10; i++) {
    if (i === 6) {
        continue;
    }
    // console.log(i)
}

//打印1-100之間所有的奇數，遇到偶數跳過。
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    // console.log(i)
}


/**
 *     *
 *    **
 *   ***
 *  ****
 * *****
 * 
 * 4个空格，1个*号
 * 3个空格，2个*号
 * 2个空格，3个*号
 * 1个空格，4个*号
 * 0个空格，5个*号。
 * 
 * 
 */
for(var i=1;i<=9;i++){
    var str = '';
    for(var j=1;j<=9-i;j++){
        str+=' '
    }
    for(var a=1;a<=i;a++){
        str+='*'
    }

    console.log(str)
}



/**
 * 
 * *
 * **
 * ***
 * ****
 */

for (var i = 1; i <= 9; i++) {
    var str = '';
    for (var j = 1; j <= i; j++) {
        str += '*'
    }
    for(var k=1;k<=9-i;k++){
        str+=' '
    }
    // console.log(str)
}


/**
 * *****
 *  ****
 *   ***
 *    **
 *     *
 * 
 * 
 */

for(var i=1;i<=9;i++){
    var str = '';
    for(var a=1;a<=9-i+1;a++){
        str+='*'
    }
    for(var j=1;j<=i;j++){
        str+=' '
    }

    // console.log(str)
}


/**
 * 
 * *****    1,5
 * ****     2,4
 * ***      3,3
 * **       4,2
 * *
 * 
 * 
 */
for(var i=1;i<=9;i++){
    var str='';
    for(var j=1;j<=9-i+1;j++){
        str+='*'
    }
    for(var k=1;k<=i;k++){
        str+=' '
    }
    // console.log(str)
}
