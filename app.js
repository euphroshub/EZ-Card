'use strict';

// Elements
// UI elements
const intro = document.querySelector('.c-Intro');
const game = document.querySelector('.c-Game');
const endgame = document.querySelector('c-endGame');
const holeNumber = document.querySelector('.holeNumber');
const finalScore = document.querySelector('.finalScore');
const parScore = document.querySelector('.parScore');

// Buttons
const btnStart = document.querySelector('.start');
const btnNext = document.querySelector('.next');
const btnEnd = document.querySelector('.end');

// Inputs & Select
const selectHoles = document.querySelector('.holes');
const inputPar = document.querySelector('.par');
const inputScore = document.querySelector('.score');

// Variables
let currentHole = 1;
const totalScore = [];


// Start the game
btnStart.addEventListener('click', function(e) {
    e.preventDefault();

    // Storing the select and input value for the game
    let holesToPlay = +selectHoles.value;
    let coursePar = +inputPar.value;

    // Updating the ui
    intro.classList.add('hidden');
    game.classList.remove('hidden');
    holeNumber.textContent = `Hole ${currentHole}`;

    // Test logs
    console.log(holesToPlay, typeof holesToPlay);
    console.log(coursePar, typeof coursePar);
});




