'use strict';

// Elements
const holesInput = document.getElementsByClassName('c-Holes');
const parInput = document.getElementsByClassName('c-Par');
const scoreInput = document.getElementsByClassName('c-Game');

// Buttons
const btnStart = document.getElementsByClassName('start');
const btnNext = document.getElementsByClassName('next');
const btnPrev = document.getElementsByClassName('previous');

// Declaring variables
const holes = document.getElementById('holes').value;
const par = document.getElementById('par').value;
let scoreValue = document.getElementById('score');

// To calculate the score each holes
let holeScore = 0;
const totalScore = Array();

// Function to start the game - displaying and hiding elements needed.
function startGame() {
    const start = btnStart[0];
    const next = btnNext[0];
    const prev = btnPrev[0];
    const holesElement = holesInput[0];
    const parElement = parInput[0];
    const scoreElement = scoreInput[0];

    start.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Game started');
        start.classList.add('hidden');
        next.classList.remove('hidden');
        prev.classList.remove('hidden');
        holesElement.classList.add('hidden');
        parElement.classList.add('hidden');
        scoreElement.classList.remove('hidden');

        //console.log(holes, par);
    });
}

startGame();

// Adding score value to the array
function buildScore() {
    totalScore[holeScore] = document.getElementById("score").value;
    
    console.log(`Element: ${totalScore[holeScore]} Added at index ${holeScore}`);
    console.log(totalScore);

    holeScore++;
    document.getElementById("score").value = '';
}