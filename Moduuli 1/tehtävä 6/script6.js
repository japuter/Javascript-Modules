'use strict';


const answer = confirm('Should I calculate the square root?')




if (answer === true){
    let ask_number = prompt("Enter a number");
    if (ask_number < 0) {
        document.querySelector('#target').innerHTML = `The square root of negative is not defined`
    } else {
            let sqrtValue = Math.sqrt(ask_number);
            document.querySelector(`#target`).innerHTML = `The square root of ${ask_number} is ${sqrtValue}`
    }
} else {
    document.querySelector('#target').innerHTML = `The square root is not calculated`;
}

