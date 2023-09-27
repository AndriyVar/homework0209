'use strict'

const longName = function() {
    if (arguments.length === 0) {
      console.log("Не передано жодного імені.");
      return;
    }
  
    let longest = arguments[0];
  
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i].length > longest.length) {
        longest = arguments[i];
      }
    }
  
    console.log(`Найдовше ім'я: ${longest}`);
}

longName("Анна", "Олександр", "Ірина", "Максим", "Андрій");