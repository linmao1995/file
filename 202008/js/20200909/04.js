// var str = '';
for (var i = 1; i <= 9; i++) {
    for (var j = 1,str = ''; j <= i; j++) {
        // str += j + '*' + i + '=' + i * j
        str += (j + '*' + i + '=' + i * j + "\t")
    }
    console.log(str)
}