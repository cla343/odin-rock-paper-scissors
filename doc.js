console.log("Hello World!");

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

function getHumanChoice() {
    let choice = prompt("Choose your character! Enter rock, paper, or scissors.");
    choice = choice.toLowerCase();

    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    } else {
        alert("That is not a valid option");
        return getHumanChoice();
    }
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
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) { // Corrected syntax for the for loop
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log("\nRound", i + 1);
        console.log("Human choice:", humanChoice);
        console.log("Computer choice:", computerChoice);

        let result = playRound(humanChoice, computerChoice);
        console.log("Result:", result);

        if (result === "Human wins!") {
            humanScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }

        console.log("Score - Human:", humanScore, "Computer:", computerScore);
    }

    if (humanScore > computerScore) {
        console.log("\nHuman wins the game!");
    } else if (computerScore > humanScore) {
        console.log("\nComputer wins the game!");
    } else {
        console.log("\nIt's a tie!");
    }
}

playGame();
