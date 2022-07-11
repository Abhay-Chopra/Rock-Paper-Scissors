let playerScore = 0;
let computerScore = 0;
game();
function random(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

function computerPlay() {
  let option = random(0, 2);
  switch (option) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function capitalize(inputString) {
  inputString = String(inputString);
  inputString =
    inputString[0].toUpperCase() + inputString.slice(1).toLowerCase();
  return inputString;
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'rock':
      if (computerSelection == 'rock') {
        return "You Tied! Rock can't beat Rock!";
      } else if (computerSelection == 'paper') {
        computerScore++;
        return 'You Lose! Paper beats Rock!';
      } else if (computerSelection == 'scissors') {
        playerScore++;
        return 'You Won! Rock beats Scissors!';
      }
    case 'paper':
      if (computerSelection == 'rock') {
        playerScore++;
        return 'You Win! Paper beats Rock!';
      } else if (computerSelection == 'paper') {
        return "You Tied! Paper can't beat Paper!";
      } else if (computerSelection == 'scissors') {
        computerScore++;
        return 'You Lose! Scissors beats Paper!';
      }
    case 'scissors':
      if (computerSelection == 'rock') {
        computerScore++;
        return 'You Lose! Rock beats Paper!';
      } else if (computerSelection == 'paper') {
        playerScore++;
        return 'You Win! Scissor beats Paper!';
      } else if (computerSelection == 'scissors') {
        return "You Tied! Scissors can't beat Scissors!";
      }
    default:
      alert('Please enter a valid input!');
      return 'Error Input';
  }
}

function sanitize(inputString) {
  try {
    return inputString.toLowerCase().trim();
  } catch (err) {
    alert('Please enter a valid input!');
    return 'Error Input';
  }
}

function game() {
  while (!(playerScore >= 5 || computerScore >= 5)) {
    let playerSelection = sanitize(prompt('Pick from Rock Paper Scissors...'));
    if (playerSelection != 'Error Input') {
      //Quitting Option -- prior to round start (in game loop)
      if (playerSelection == 'quit') {
        break;
      }

      let computerSelection = computerPlay();
      let roundResult = playRound(playerSelection, computerSelection);
      if (roundResult != 'Error Input') {
        alert(`The computer picked ... ${capitalize(computerSelection)}!`);
        alert(roundResult);
      }
    }
  }
}
