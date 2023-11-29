'use strict';


let numbers = [];

while (true) {
    let ask_number = parseInt(prompt("Enter a number"));

    //break the loop if the number is zero
    if (ask_number === 0) {
        break;    
    }

    // Add the nuber to the arrey if its numeric
    if (!isNaN(ask_number)) {
        numbers.push(ask_number);
    } else {
        console.log("Please enter valid number.");
    }
}

// Sort numbers in decending order 

numbers.sort((a, b) => b - a);

console.log(numbers);