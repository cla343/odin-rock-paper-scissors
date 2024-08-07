document.addEventListener("DOMContentLoaded", function() {
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent ="rock";
paper.textContent ="paper";
scissors.textContent ="scissors";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

rock.addEventListener("click", () => getHumanChoice("rock"));
paper.addEventListener("click", () => getHumanChoice("paper"));
scissors.addEventListener("click", () => getHumanChoice("scissors"));

const resultDiv = document.createElement("div");
resultDiv.style.marginTop = "20px";
document.body.appendChild(resultDiv);

function getHumanChoice(humanChoice) {
clearDiv();
updateDiv(`You chose ${humanChoice}`);
const computerChoice = getComputerChoice();
updateDiv(`Computer chose ${computerChoice}`);
const result = playRound(humanChoice, computerChoice);
updateDiv(result);

if (result === "Human wins!") {
    humanScore++;
} else if (result === "Computer wins!") {
    computerScore++;
}

updateDivScore();
checkEndGame();
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        return "Draw!";
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        return "Human wins!";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        return "Computer wins!";
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        return "Computer wins!";
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        return "Human wins!";
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        return "Human wins!";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        return "Computer wins!";
    } else {
        return "Invalid choices! Please choose rock, paper, or scissors.";
    }};

    function updateDiv(message){
        const p = document.createElement("p");
        p.textContent = message;
        resultDiv.appendChild(p);
    }

    function updateDivScore() {
        const divScore = (`Score - Human: ${humanScore}, Computer: ${computerScore}`);
        const divPara = document.getElementById("score");
        if (divPara) {
            divPara.textContent = divScore;
        } else {
            const newDivPara = document.createElement("p");
            newDivPara.id = "score";
            newDivPara.textContent = divScore;
            resultDiv.appendChild(newDivPara);
        }
    }

function clearDiv() {
    resultDiv.innerHTML='';
}

function checkEndGame() {
    if (humanScore >= 5 || computerScore >= 5) {
        const gameOverMessage = `Game Over! Final Score - Human: ${humanScore} Computer: ${computerScore}`;
        console.log(gameOverMessage);
        updateDiv(gameOverMessage);
        humanScore = 0;
        computerScore = 0;
    }
};
});