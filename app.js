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
let holeScore = 0;
const scoreList = [];


// Start the game
btnStart.addEventListener('click', function(e) {
    e.preventDefault();

    // Storing the select and input value for the game
    let holesToPlay = +selectHoles.value;
    let coursePar = +inputPar.value;

    if ((holesToPlay != '') && (coursePar >= 29 <= 73 )) {
        // Updating the ui to start the game if the condition is met.
        intro.classList.add('hidden');
        game.classList.remove('hidden');
        holeNumber.textContent = `Hole ${currentHole}`;
    } else {
        alert("You must enter the number of holes and a par value between 29 and 73 to start the game");
    }
});

// Play the game, update scores

btnNext.addEventListener('click', function(e) {
    e.preventDefault();

    // Checking the holes to play and reducing them at each holes played
    let holesToPlay = +selectHoles.value;
    holesToPlay--;

    // Displaying the hole played right now in the UI
    currentHole++;
    holeNumber.textContent = `Hole ${currentHole}`;


    // Adding the score to the array and adding them together.
    scoreList[holeScore] = document.querySelector('.score').value;
    holeScore++;

    let addedScore = 0;

    for (let i = 0; i < scoreList.length; i++) {
        addedScore += parseInt(scoreList[i]);
    }

    // Reseting the score input after each holes
    document.querySelector('.score').value = '';



    // Test Logs
    console.log(`Total score: ${addedScore}`);
    console.log(`Holes left: ${holesToPlay}`);
    console.log(`Current hole: ${currentHole}`);
});





