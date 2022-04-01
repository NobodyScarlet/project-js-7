'use strict';

// Task 2

const operation = prompt ('What do you want: add, sub, mult, div?');
const firstNumber = +prompt ('First number');
const secondNumber = +prompt ('Second number');

switch (operation) {
    case "add":
        alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
        break;
    case "sub":
        alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
        break;
    case "mult":
        alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        break;
    case "div":
        alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
        break;
}
