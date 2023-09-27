'use strict'

const isNumber = (n) => {
    if(!isNaN(n) && isFinite(n)) {
        return true
    } else {
        return false
    }
}

const sumNum = function() {
    let rez = 0;

    for(let i = 0; i < arguments.length; i++) {
        if(isNumber(arguments[i])) {
            rez = rez + arguments[i];
        }
    }

    console.log(`Сума введених чисел: ${rez}`);
}

sumNum(1, 2 ,3 ,7 ,5);