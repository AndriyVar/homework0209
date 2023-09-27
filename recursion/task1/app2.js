'use strict'

console.log('Зворотній порядок')

const revNum = function(start, end) {
    if (start <= end) {
        revNum(start + 1, end);
        console.log(start);
    }
}

revNum(1, 5); 