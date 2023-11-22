'use strict';
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


let min = 1;
let max = 4;



let draw_between1_4 = Math.round(getRandomArbitrary(min, max));

const names = prompt('Enter your name')

if (draw_between1_4 == 1) { 
    document.querySelector('#target').innerHTML = `${names}, You are Gryffindor `;
}
else if (draw_between1_4 == 2) {
    document.querySelector('#target').innerHTML = `${names}, You are Slytherin`;
}
else if (draw_between1_4 == 3) {
    document.querySelector('#target').innerHTML = `${names}, You are Hufflepuff`;
}
else if (draw_between1_4 == 4) {
    document.querySelector('#target').innerHTML = `${names}, You are Ravenclaw`;
};
