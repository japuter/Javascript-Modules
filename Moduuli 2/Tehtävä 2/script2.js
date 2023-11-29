'use strict'

const participants = prompt("How many participants?")

let names = [];

for (let i = 0; i < participants; i++) {
    let name = prompt("Enter names" + (i + 1));
    names.push(name)
}

names.sort();

let listHTML = names.map(name => `<li>${name}</li>`).join('');

document.querySelector('#target').innerHTML = `<ol>${listHTML}</ol>`;