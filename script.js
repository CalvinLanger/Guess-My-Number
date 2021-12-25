'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let alreadyWon = false;
const winningColor = '#60b347';
const lostColor = '#ff0000';

function playerLost() {
  document.querySelector('.message').textContent = 'You lost the game!';
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = lostColor;
}

function playerMissed(missedMessage) {
  document.querySelector('.message').textContent = missedMessage;
}

function playerPlaying(guessNumber) {
  if (score === 0) {
    playerLost();
  } else {
    playerMissed(secretNumber < guessNumber ? 'Too high!' : 'Too low!');
    score--;
  }
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess >= 1 && guess <= 20) {
    //When player win
    if (guess === secretNumber) {
      if (!alreadyWon) {
        alreadyWon = true;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'Correct number!';
        document.querySelector('.highscore').textContent = ++highscore;
        document.querySelector('body').style.backgroundColor = winningColor;
        document.querySelector('.number').style.width = '30rem';
      }
    } else {
      playerPlaying(guess);
    }
    document.querySelector('.score').textContent = score;

    //If the player leaves the field blank
  } else if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //When player choose number outside 1 to 20
  } else {
    document.querySelector('.message').textContent = 'Wrong number!';
  }
});

//Reset game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  alreadyWon = false;
});
