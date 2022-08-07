const one = document.querySelector('one');
const two = document.querySelector('two');
const three = document.querySelector('three');
const four = document.querySelector('four');
const five = document.querySelector('five');
const six = document.querySelector('six');
const seven = document.querySelector('seven');
const eight = document.querySelector('eight');
const nine = document.querySelector('nine');

const start = document.querySelector('start');
const reset = document.querySelector('reset');

const playerX = document.querySelector('playerX');
const playerO = document.querySelector('playerO');
const message = document.querySelector('message');
const clickCount = document.querySelector('clickCount');

var clickCounter = 0;
let playerTurn = 'X';

if (clickCounter % 2 === 0) {
    playerTurn = 'X';
} else {
    playerTurn = 'O';
}

if (playerTurn === 'X') {
    playerX.classList.add('active');
    playerO.classList.remove('active');
}