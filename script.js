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
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    let playerSelection = "";

    rock.addEventListener("click", () => {
        playerSelection = "rock";
        return playerSelection;
    });

    paper.addEventListener("click", () => {
        playerSelection = "paper";
        return playerSelection;
    });

    scissors.addEventListener("click", () => {
        playerSelection = "scissors";
        return playerSelection;
    });
}

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
        return 1;
    }
    else {
        return 2;
    }
}
let number = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
number = playRound(humanSelection, computerSelection);
if (number == 1) {
    console.log("You won!");
}
else {
    console.log("Computer won!");
}

playRound(); 