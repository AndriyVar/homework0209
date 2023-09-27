'use strict'

const minNum = function() {
    if(arguments.length === 0) {
        console.log('Не вказано жодного числа');
    }

    let min = arguments[0];

    for(let i = 0;i < arguments.length; i++) {
        if(arguments[i] < min) {
            min = arguments[i];
        }
    }

    console.log(`Найменше число: ${min}`);
}

minNum(5,2,1,4,7,8,0);

