'use strict';

const ask_user = prompt('Enter a year')

if ((ask_user % 4 == 0 && ask_user % 100 !== 0)|| ask_user % 400 === 0 ) {
    document.querySelector('#target').innerHTML = `This is a leap year`;
}