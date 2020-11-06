for (var year = 2021, t = 1; ; year++) {

    if (t >= 6) {
        break;
    }
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        t++;
        // console.log(year)
    }

}
