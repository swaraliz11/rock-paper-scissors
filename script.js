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

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    let div = document.querySelector("div");
}



