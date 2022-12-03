function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper")
                return "You lose. Paper beats rock.";
            else if (computerSelection === "scissors")
                return "You win! Rock beats scissors.";
            else 
                return "You tied."
        case "paper":
            if (computerSelection === "scissors")
                return "You lose. Scissors beats paper.";
            else if (computerSelection === "rock")
                return "You win! Paper beats rock.";
            else 
                return "You tied."
        case "scissors":
            if (computerSelection === "rock")
                return "You lose. Rcok beats paper.";
            else if (computerSelection === "paper")
                return "You win! Scissors beat paper.";
            else 
                return "You tied."
    }
}

console.log(getComputerChoice());

playerSelection = prompt();
computerSelection = prompt();

console.log(playRound(playerSelection, computerSelection));