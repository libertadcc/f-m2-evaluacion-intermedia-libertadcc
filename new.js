'use strict';

const count = document.querySelector('.count');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);
console.log('na', random);

const compare = () => {

    const number = input.value;
    console.log('nº', input.value)

    const diff = parseInt(number - random);
    console.log('resta', diff);

    if (diff === 0 ) {
        result.innerHTML='¡Has ganado, campeona!';
        console.log('ok');
    } else if (diff < 0){
        result.innerHTML='Demasiado bajo';
        console.log('bajo');
    } else {
        result.innerHTML='Demasiado alto';
        console.log('alto');
    }
}
btn.addEventListener('click', compare);

//Contador

// btn.onclick = function() {
//     count += 1;
//     try.innerHTML = count;

//   };


