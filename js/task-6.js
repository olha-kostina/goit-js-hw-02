"use strict";
let imput;
let numbers = [];
let total = 0;
do {
    imput = prompt('Укажите число');
    if (imput !== null) {
        numbers.push(imput);
    } 
} while(imput !== null);
if (numbers.length > 0) {
    for (const number of numbers) {
        total += Number(number);
    }
    console.log(total);
} else {
    console.log('Массив пустой');
}
