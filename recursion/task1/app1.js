'use strict'

console.log('Прямий порядок')

function dirNum(start, end) {
    if (start <= end) {
        console.log(start);
        dirNum(start + 1, end);
    }
}

dirNum(1, 5);

