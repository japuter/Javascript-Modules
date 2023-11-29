'use strict';


let numbers = [];

for (let i = 0; i < 5; i++) {
    let number = prompt("Enter number" + (i + 1));
    numbers.push(number);
}

let reversedNumbers = "";

for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers += numbers[i] + (i > 0 ? ", ": "");
}

console.log(`Numbers in reverse order: ${reversedNumbers}`);