'use strict';

let names = []

for (let i = 0; i < 6; i++) {
    let ask_names = prompt("Enter dog names:")
    names.push(ask_names)
}

names.sort().reverse();

// Get the <ul> element

let ul = document.getElementById('doglist');

names.forEach(name => {
    let li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
});