////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move != '' || null) {
        return /* Your Expression */ move;
    } else {
        return getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move != '' || null) {
        return /* Your Expression */ move;
    } else {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == computerMove) {
        winner = 'tie';
        return winner;
    } else if ((playerMove == 'rock' && computerMove == 'scissors') ||
    (playerMove == 'scissors' && computerMove == 'paper') || (playerMove ==
    'paper' && computerMove == 'rock')) {
        winner = 'player';
        return winner;
    } else {
        winner = 'computer';
        return winner;
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((playerWins < 5) && (computerWins < 5)) {
      getWinner(getPlayerMove(), getComputerMove());
      if (winner == 'player') {
        playerWins += 1;
        console.log('player now has ' + playerWins + ' wins');
      };
      if (winner == 'computer') {
        computerWins += 1;
        console.log('computer now has ' + computerWins + ' wins'); 
      };
    };
    return [playerWins, computerWins];
}

function playToX(x) {
  console.log('Rock, Paper, Scissors to ' + x + '!');
  var playerWins = 0;
  var computerWins = 0;
  while ((playerWins < x) && (computerWins < x)) {
    getWinner(getPlayerMove(), getComputerMove());
    if (winner == 'player') {
      playerWins += 1;
      console.log('player now has ' + playerWins + ' wins');
    };
    if (winner == 'computer') {
      computerWins += 1;
      console.log('computer now has ' + computerWins + ' wins');
    };
  };
  return [playerWins, computerWins];
}
