'use strict';

const count = document.querySelector('.count');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const compara = document.querySelector('.compara');

//  Escribir un número en input y darle a btn
//  Generar un número aleatorio (máx 100) 
//  Comparar el input y el random
//Cambiar recuadro

//1.Generar un aleatorio que se mete en la constante "random"
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const random = console.log(getRandomNumber(100));

//2. "Number" es una constante que creamos al meter un nº en el input. Al hacer click se escribe en la consola
const number = function write() {
    console.log(input.value);
}

btn.addEventListener('click', number);

//3. Comparar las variables
function substract(){
    if (number === random) {
        console.log('tú ganas');
    } else if (number > random) {
        console.log('demasiado alto');
    } else {
        console.log('demasiado bajo');
    }
}

compara.addEventListener('click', substract);
