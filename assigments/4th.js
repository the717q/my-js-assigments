const computerPlay = function () {
    const randomPlay = ['rock', 'paper', 'scissor'];
    randomNumber = Math.floor(Math.random() * randomPlay.length);
    return randomPlay[randomNumber];
  };
  
  const playerPlay = function() {
    let playerSelection;
    do {
      playerSelection = prompt("Welcome to the game, Please enter your play");
    if (!playerSelection) {
        alert("C'mon let's play");
    }
    else {
      playerSelection = playerSelection.toLowerCase();
        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissor') {
        let validInput = playerSelection;
        return validInput;
        } else {
        alert("You need to type rock, papper or scissor");
        }
    }   
    } while (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissor');
  }
  
  const playRound = function (playerSelection, computerSelection) {
    if(playerSelection === 'rock') {
      switch(computerSelection) {
        case 'paper': 
        return `You lost`
          break;
        case 'scissor':
        return `You won`
          break;
        case 'rock':
        return `There was a tie`
          break
      }
    }
      else if(playerSelection === 'paper') {
        switch(computerSelection) {
          case 'paper': 
          return `There was a tie`
            break;
          case 'scissor':
            return `You lost`
            break;
          case 'rock':
            return `You won`
            break;
        }
      }
      if(playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'paper': 
            return `You won`
              break;
            case 'scissor':
            return `There was a tie`
              break;
            case 'rock':
            return `You lost`
              break;
          }
    }
  };
  
  
  
  const game = function() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
      switch(playRound(computerPlay(), playerPlay())) {
        case 'You won':
          playerScore++
          console.log('You won this round ' + 'your score is ' + playerScore)
          break;
        case 'You lost':
          computerScore++
          console.log('You lost this round ' + 'your score is ' + playerScore)
          break;
        case 'There was a tie':
          console.log('There was a tie in this round ' + 'your score is ' + playerScore)
          break;
      }
    }
    console.log(`Your score is ${playerScore}`)
    console.log(`The computer score is ${computerScore}`)
  
    if(playerScore > computerScore) {
      console.info('Congratulations!!!! You won!!!')
    }
    else if(playerScore < computerScore) {
      console.error('Ohh Nooooo!!! You Lost !!!')
    }
    else {
      console.warn('The game was a tie!! try to play again !!')
    }
  
} 
  game()