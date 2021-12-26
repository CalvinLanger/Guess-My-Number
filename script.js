'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let alreadyWon = false;
const winningColor = '#60b347';
const lostColor = '#ff0000';

function playerLost() {
  displayMessage('You lost the game!');
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = lostColor;
}

function playerMissed(missedMessage) {
  displayMessage(missedMessage);
}

function playerPlaying(guessNumber) {
  if (score === 0) {
    playerLost();
  } else {
    playerMissed(secretNumber < guessNumber ? 'Too high!' : 'Too low!');
    score--;
  }
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function backGroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess >= 1 && guess <= 20) {
    //When player win
    if (guess === secretNumber) {
      if (!alreadyWon) {
        alreadyWon = true;
        displayMessage('Correct number!');
        backGroundColor(winningColor);
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = ++highscore;
        document.querySelector('.number').style.width = '30rem';
      }
    } else {
      playerPlaying(guess);
    }
    document.querySelector('.score').textContent = score;

    //If the player leaves the field blank
  } else if (!guess) {
    displayMessage('No number!');

    //When player choose number outside 1 to 20
  } else {
    displayMessage('Wrong number!');
  }
});

//Reset game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  backGroundColor('#222');
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  alreadyWon = false;
});
