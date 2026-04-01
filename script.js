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

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice) {
    let div = document.querySelector("div");
    let computerChoice = getComputerChoice();

    if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "scissors")) {
            computerScore++;
    }
    else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
                humanScore++;
    }

    div.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore === 5) {
        div.textContent = "Winner: Player";
    }
    else if (computerScore === 5) {
        div.textContent = "Winner: Computer";
    }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");