'use strict'

const singNum = function() {
    if (arguments.length <= 1) {
        console.log('Однакові числа не знайдені або недостатньо чисел для порівняння.');
    }
    
    for (let i = 0; i < arguments.length; i++) {
        for (let j = i + 1; j < arguments.length; j++) {
            if (arguments[i] === arguments[j]) {
                console.log('Серед чисел є однакові.');
            }
        }
    }
    
    console.log('Однакові числа не знайдені.');
}

singNum(1, 2, 3, 5, 4, 1);