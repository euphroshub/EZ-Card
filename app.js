'use strict';

// Elements
const holesInput = document.getElementsByClassName('c-Holes');
const parInput = document.getElementsByClassName('c-Par');
const scoreInput = document.getElementsByClassName('c-Game');
const appIntro = document.getElementsByClassName('appIntro');
const holeNumer = document.getElementsByClassName("holeNumber");

// Buttons
const btnStart = document.getElementsByClassName('start');
const btnNext = document.getElementsByClassName('next');

// Variables
const par = document.getElementById("par").value;
let holes = document.getElementById("holes").value;
let currentHole = 1;

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
    const appIntroElement = appIntro[0];
    const holeNumberElement = holeNumer[0];

    start.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Game started');
        start.classList.add('hidden');
        next.classList.remove('hidden');
        holesElement.classList.add('hidden');
        parElement.classList.add('hidden');
        scoreElement.classList.remove('hidden');
        appIntroElement.classList.add('hidden');
        holeNumberElement.classList.remove('hidden');

        // Starting the game at hole number 1 and displaying it in the UI.
        holeNumberElement.children[0].textContent = `Hole ${currentHole}`;

        // Converting the par and holes value to integer numerical value.
        const par = parseInt(document.getElementById("par").value);
        let holes = parseInt(document.getElementById("holes").value);

        console.log(`Holes: ${holes}`);
        console.log(`Par: ${par}`);

        //console.log(typeof holes, typeof par);

    });
}

startGame();


// Adding score value to the array
function buildScore() {
    // To update the hole number
    const holeNumberElement = holeNumer[0];

    scoreList[holeScore] = document.getElementById("score").value;
    
    // Adding the score to the array
    holeScore++;
    // Switching hole on each btn click
    currentHole++;

    // Reducing the number of holes left in the game
    holes--;

    // Updating the hole number displayed on the UI.
    holeNumberElement.children[0].textContent = `Hole ${currentHole}`;

    // Reseting the score input after each holes
    document.getElementById("score").value = '';

    // Adding the holes score to the final score.
    let finalScore = 0;

    for (let i = 0; i < scoreList.length; i++) {
        finalScore += parseInt(scoreList[i]);
    }

    // Stopping the game if holes reach 0
    

    

    // Logs
    console.log(`Final score: ${finalScore}`);
    console.log(`Holes left: ${holes}`);

    console.log(`Current hole: ${currentHole}`);
    
}



// TODO


// Make the next button clickable only for the number of hole set by the user at the beginning.
// Adding array value together at the end of the game
// Calculate the par, so the score - the par resulting in the par score (with - and + depending if its over or under)

// Styling the interface better and smoother.