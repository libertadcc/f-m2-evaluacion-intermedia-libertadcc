'use strict';

const count = document.querySelector('.count');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');



function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const compare = () => {

    const random = console.log(getRandomNumber(100));

    const number = function write() {
        console.log(input.value);
    }

    if (number === random) {
        console.log('tú ganas');
    } else if (number > random) {
        console.log('demasiado alto');
    } else {
        console.log('demasiado bajo');
    }
    
}

btn.addEventListener('click', compare);
