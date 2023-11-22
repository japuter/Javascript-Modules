'use strict';

let num1=prompt("Type the first integer")
let num2=prompt("Type the second integer")
let num3=prompt("Type the third integer")

const num1Int = parseInt(num1, 10);
const num2Int = parseInt(num2, 10);
const num3Int = parseInt(num3, 10);

let sum = num1Int + num2Int + num3Int;

let product  = num1 * num2 * num3;

let averege = sum / 3;2


document.querySelector('#target').innerHTML = `Integers summed up: ${sum}<br>Integers product: ${product}<br> Integers averege: ${averege}`;