function getSum(n) {
    if (n < 0) {
        return false
    }
    for (var i = 1, sum = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// var count = getSum(-100);


function getYear(year1, year2) {
    var total = 0
    if (year2 < year1) {
        for (var i = year2; i <= year1; i++) {
            if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
                total += 1;
            }
        }
    } else {
        for (var i = year1; i <= year2; i++) {
            if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
                total += 1;
            }
        }
    }
    return total;
}

// var s1 = getYear(2000,2100);
var s2 = getYear(2100, 2000);
console.log(s2)