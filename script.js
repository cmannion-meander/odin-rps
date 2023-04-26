// console.log("Hello, world!");

function getComputerChoice() {
    // Randomly return either 'Rock', 'Paper', or 'Scissors'
    randomNumber = Math.random();
    if (randomNumber < (1/3)) {
        choice = 'rock';
    } else if (randomNumber > (2/3)) {
        choice = 'scissors';
        } else {
            choice = 'paper'
        }
    return(choice)
};

function playRound(playerSelection, computerSelection) {
    // Plays a round of rock, paper, scissors vs. computer and returns result
    playerChoice = playerSelection.toLowerCase();
    if (playerChoice == 'rock') {
        if (computerSelection == 'scissors') {
            return(1)
        } else if (computerSelection == 'paper') {
            return(-1)
        } else {
            return(0)
        }
    };
    if (playerChoice == 'scissors') {
        if (computerSelection == 'paper') {
            return(1)
        } else if (computerSelection == 'rock') {
            return(-1)
        } else {
            return(0)
        }
    };
    if (playerChoice == 'paper') {
        if (computerSelection == 'rock') {
            return(1)
        } else if (computerSelection == 'scissors') {
            return(-1)
        } else {
            return(0)
        }
    };
  };

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

const results = document.querySelector('#results');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    //alert(button.id);
    //console.log(playRound(button.id, getComputerChoice()));
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    outcome = (playRound(playerSelection, computerSelection));
    const content = document.createElement('div');
    if (outcome == 1) {
        content.classList.add('content');
        content.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        results.appendChild(content);
        //playerScore += 1;
    } else if (outcome == -1) {
        content.classList.add('content');
        content.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        results.appendChild(content);
        //computerScore += 1;
    } else {
        content.classList.add('content');
        content.textContent = `Draw! You both chose ${playerSelection}`;
        results.appendChild(content);
    }
    
  });
});



//   function game() {
//     // Play a 5 round game that keeps score and reports a winner or loser at the end
//     playerScore = 0;
//     computerScore = 0;
//     for (let i = 1; i <= 5; i++) {
//         console.log("Round " + i);
//         let playerSelection = prompt("Select Rock, Paper, or Scissors");
//         let computerSelection = getComputerChoice();
//         outcome = (playRound(playerSelection, computerSelection));
//         if (outcome == 1) {
//             console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
//             playerScore += 1;
//         } else if (outcome == -1) {
//             console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
//             computerScore += 1;
//         } else {
//             console.log(`Draw! You both chose ${playerSelection}`);
//         }
//         console.log(`The results after Round ${i} are:
//         Player has scored ${playerScore}
//         Computer has scored ${computerScore}`);
//         //console.log("You picked " + playerSelection);
//       };
//       if (playerScore > computerScore) {
//         console.log("Congratulations, you won the game!");
//       } else {
//         console.log("Sorry, you lost the game!");
//       }
//   }
//   //const playerSelection = "rock";
//   //const computerSelection = getComputerChoice();
//   //console.log(playRound(playerSelection, computerSelection));
// console.log(game())
