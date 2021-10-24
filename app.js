'use strict';

// Elements
const holesInput = document.getElementsByClassName('c-Holes');
const parInput = document.getElementsByClassName('c-Par');
const scoreInput = document.getElementsByClassName('c-Game');

// Buttons
const btnStart = document.getElementsByClassName('start');
const btnNext = document.getElementsByClassName('next');

// Variables
const par = document.getElementById("par").value;
const holes = document.getElementById("holes").value;

// To calculate the score each holes
let holeScore = 0;
const scoreList = [];

// Function to start the game - displaying and hiding elements needed.
function startGame() {
    const start = btnStart[0];
    const next = btnNext[0];
    const holesElement = holesInput[0];
    const parElement = parInput[0];
    const scoreElement = scoreInput[0]; 

    start.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Game started');
        start.classList.add('hidden');
        next.classList.remove('hidden');
        holesElement.classList.add('hidden');
        parElement.classList.add('hidden');
        scoreElement.classList.remove('hidden');
        const par = parseInt(document.getElementById("par").value);
        const holes = parseInt(document.getElementById("holes").value);

        console.log(`Holes: ${holes}`);
        console.log(`Par: ${par}`);

        //console.log(typeof holes, typeof par);

    });
}

startGame();

// Adding score value to the array
function buildScore() {
    scoreList[holeScore] = document.getElementById("score").value;
    
    console.log(`Element: ${scoreList[holeScore]} Added at index ${holeScore}`);
    console.log(scoreList);

    holeScore++;
    document.getElementById("score").value = '';

    // Adding the score to the final score.
    let finalScore = 0;

    for (let i = 0; i < totalScore.length; i++) {
        finalScore += parseInt(scoreList[i]);
    }

    console.log(finalScore);

    console.log(holes);
}


// TODO


// Make the next button clickable only for the number of hole set by the user at the beginning.
// Adding array value together at the end of the game
// Calculate the par, so the score - the par resulting in the par score (with - and + depending if its over or under)

// Styling the interface better and smoother.