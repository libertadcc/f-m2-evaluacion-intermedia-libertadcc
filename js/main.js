'use strict';
const confeti = document.querySelector('.confeti');
const counter = document.querySelector('.counter');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

let i = 0;
counter.innerHTML = i;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);

const compare = () => {
    debugger
    result.classList.remove('warning', 'correct', 'wrong');
    const number = parseInt(input.value);
    if (number>100) {
        result.innerHTML='El número es menor que 100';
        result.classList.add('warning');
        i= i+1;
        counter.innerHTML= i;
    }else if(number<1) {
        result.innerHTML='El número es mayor que 1';
        result.classList.add('warning');
        i= i+1;
        counter.innerHTML= i;
    } else if (random === number) {
        result.innerHTML='¡Has ganado, campeona!';
        result.classList.add('correct');
        i= i+1;
        counter.innerHTML= i;
        confeti.style.display="block";
    } else if (number < random){
        result.innerHTML='Demasiado bajo';
        result.classList.add('wrong');
        i= i+1;
        counter.innerHTML= i;
    } else {
        result.innerHTML='Demasiado alto';
        result.classList.add('wrong');
        i= i+1;
        counter.innerHTML= i;
    }    
}
console.log('aleatorio', random);

btn.addEventListener('click', compare);

input.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
        compare();
  }
});