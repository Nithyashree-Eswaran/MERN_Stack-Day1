// script.js
function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const message = document.getElementById('message');

  if (userChoice === computerChoice) {
    message.textContent = `It's a draw! You both chose ${userChoice}.`;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    message.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    message.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
  }
}
