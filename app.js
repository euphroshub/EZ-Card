'use strict';

// Elements
// UI elements
const intro = document.querySelector('.c-Intro');
const game = document.querySelector('.c-Game');
const endgame = document.querySelector('.c-endGame');
const holeNumber = document.querySelector('.holeNumber');
const finalScore = document.querySelector('.finalScore');
const parScore = document.querySelector('.parScore');
const quality = document.querySelector('.quality');

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

    if ((holesToPlay !== '') && (coursePar >= 27 <= 73 )) {
        // Updating the ui to start the game if the condition is met.
        intro.classList.add('hidden');
        game.classList.remove('hidden');
        holeNumber.textContent = `Hole ${currentHole}`;
    } else {
        alert("You must enter the number of holes and a par value between 29 and 73 to start the game.");
    }

    // Test Logs
    console.log(holesToPlay, typeof holesToPlay);
    console.log(coursePar, typeof holesToPlay);
});


// Play the game, update scores
btnNext.addEventListener('click', function(e) {
    e.preventDefault();

    // Getting the par value and the number of holes to calculate the par score and to end the game.
    const par = +inputPar.value;
    const holes = +selectHoles.value;

    // Displaying the current hole in the UI.
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


    // End the game when there is no more holes to play and display the Score screen UI.
    if (scoreList.length === holes) {
        game.classList.add('hidden');
        endgame.classList.remove('hidden');

        // Update the UI to see the game data.
        let parFinalScore = addedScore - par;

        finalScore.textContent = addedScore;

        if (parFinalScore < 0) {
            parScore.textContent = `-${parFinalScore}`;
        } else if (parFinalScore === 0) {
            parScore.textContent = `${parFinalScore} | Par`;
        } else if (parFinalScore > 0){
            parScore.textContent = `+${parFinalScore}`;
        }
        
        // Conditions to tell you if it was a good or a bad game.
        if (parFinalScore <= 0) {
            quality.textContent = 'You should think about becoming a pro or something if you are not already!';
        }

        if (parFinalScore > 1 && parFinalScore < 10) {
            quality.textContent = 'Very good game! Keep up the good work!';
        }

        if (parFinalScore > 11 && parFinalScore < 20) {
            quality.textContent = 'Not bad, but you can surely do better, keep practicing!';
        }

        if (parFinalScore > 21 && parFinalScore < 30) {
            quality.textContent = 'Well, a game to forget, and a some beers to drink to forget it';
        }

        if (parFinalScore > 31) {
            quality.textContent = 'I am not one to judge, but that score is pretty bad my man!';
        }

    }

    // Test Logs
    console.log(`Holes to play: ${holes}`);
    console.log(`Total score: ${addedScore}`);
    console.log(`Current hole: ${currentHole}`);
    console.log(`Score array: ${scoreList}`);
    console.log(`Array length: ${scoreList.length}`);

    
});

// Restart the game and restart values
btnEnd.addEventListener('click', function(e) {
    e.preventDefault();


});


// TODO

// Swaping background image when switching hole.
// Adding an endgame button visible during the game, and reseting to first screen when clicked, also visible on the last scorescreen but not on the first screen.
// Styling the interface for a better and smoother UX.
// Adding message in the scorescreen depending on the score played in the round.
// Adding a timer to time the duration of the whole game from start to finish.
// Create a popup function instead of using an alert before starting the game