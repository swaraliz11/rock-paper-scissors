function getComputerChoice() {
    let max = 3;
    let randomNumber = Math.floor(Math.random() * max);
    let computerChoice = "";
    if (randomNumber == 0) {
        computerChoice = "rock";
    }
    else if (randomNumber == 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors? ");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;      
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if ((humanChoice === "rock") && (computerChoice === "paper")) {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
            console.log("You win!")
            humanScore++;
        }
        else if ((humanChoice === "rock") && (computerChoice === "rock")) {
            console.log("It's a draw!");
        }
        else if ((humanChoice === "paper") && (computerChoice === "rock")) {
            console.log("You win!");
            humanScore++;
        }
        else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
            console.log("You lose! Scissors beats Paper");
            computerChoice++;
        }
        else if ((humanChoice === "paper") && (computerChoice === "paper")) {
            console.log("It's a draw!");
        }
        else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
            console.log("You win!");
            humanScore++;
        }
        else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
        else {
            console.log("It's a draw!");
        }
        if (humanScore > computerScore) {
            return humanScore;
        }
        else {
            return computerScore;
        }
    }
    for (i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let score = playRound(humanSelection, computerSelection);
    }
}

playGame();