'use strict';

const counter = document.querySelector('.counter');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);
console.log(random);

const compare = () => {
    result.classList.remove('warning', 'correct', 'wrong');
    const number = parseInt(input.value);
    if (number>100) {
        result.innerHTML='El número es menor que 100';
        result.classList.add('warning');
    }else if(number<0) {
        result.innerHTML='El número es mayor que 0';
        result.classList.add('warning');
    } else if (random === number) {
        result.innerHTML='¡Has ganado, campeona!';
        result.classList.add('correct');
        // result.classList.add('party');
    } else if (number < random){
        result.innerHTML='Demasiado bajo';
        result.classList.add('wrong');
    } else {
        result.innerHTML='Demasiado alto';
        result.classList.add('wrong');
    }
    let i = 0; i= i+1;
    counter.innerHTML= i;
}


btn.addEventListener('click', compare);