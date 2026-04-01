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
}