alert('Welcome to Rock/Paper/Scissors Game!');

function computerPlay() {
  const gameElements = ['rock', 'paper', 'scissors'];
  let selectIndex = randomGenerator(3);
  //console.log(selectIndex)
  return gameElements[selectIndex];
}

function randomGenerator(max) {
  return Math.round(Math.random() * 10) % max;
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === 'rock' &&
    computerSelection === 'scissors'
  ) {
    console.log('You win! Rock beats Scissors');
    return 1;
  }

  if (
    playerSelection.toLowerCase() === 'rock' &&
    computerSelection === 'paper'
  ) {
    console.log('You lose! Paper beats Rock');
    return -1;
  }

  if (
    playerSelection.toLowerCase() === 'rock' &&
    computerSelection === 'rock'
  ) {
    console.log('It is a tie! Keep on playing.');
    return 0;
  }

  if (
    playerSelection.toLowerCase() === 'paper' &&
    computerSelection === 'rock'
  ) {
    console.log('You win! Paper beats Rock');
    return 1;
  }

  if (
    playerSelection.toLowerCase() === 'paper' &&
    computerSelection === 'scissors'
  ) {
    console.log('You lose! Scissors beats Paper');
    return -1;
  }

  if (
    playerSelection.toLowerCase() === 'paper' &&
    computerSelection === 'paper'
  ) {
    console.log('It is a tie! Keep on trying.');
    return 0;
  }

  if (
    playerSelection.toLowerCase() === 'scissors' &&
    computerSelection === 'rock'
  ) {
    console.log('You lose! Rock beats Scissors');
    return -1;
  }

  if (
    playerSelection.toLowerCase() === 'scissors' &&
    computerSelection === 'paper'
  ) {
    console.log('You win! Scissors beats Paper');
    return 1;
  }

  if (
    playerSelection.toLowerCase() === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    console.log('It is a tie! Keep on trying.');
    return 0;
  }
}

function game() {
  let score = 0;
  let playerScore = 0;
  let computerScore = 0;
  let tieScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      'Please enter your choice (Rock/Paper/Scissors):'
    );
    while (
      playerSelection.toLowerCase().trim() !== 'rock' &&
      playerSelection.toLowerCase().trim() !== 'paper' &&
      playerSelection.toLowerCase().trim() !== 'scissors'
    ) {
      if (playerSelection.toLowerCase() === '') {
        alert('Empty Input.');
        playerSelection = prompt(
          'Please insert a valid one (Rock/Paper/Scissors):'
        );
      }
      alert('Invalid choice.');
      playerSelection = prompt(
        'Please insert a valid one (Rock/Paper/Scissors):'
      );
    }
    let computerSelection = computerPlay();
    score = playRound(playerSelection.trim(), computerSelection);
    if (score > 0) ++playerScore;
    if (score === 0) ++tieScore;
    if (score < 0) ++computerScore;
    console.log(
      `Player Score: ${playerScore} Computer Score: ${computerScore} TieScore: ${tieScore}`
    );
  }

  if (playerScore > computerScore) {
    console.log('You WON!');
  } else if (playerScore < computerScore) {
    console.log('The Computer WON!');
  } else {
    console.log("It's a TIE!");
  }
  return { playerScore, computerScore, tieScore };
}

console.log(game());
