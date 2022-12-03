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
                return 0;
            else if (computerSelection === "scissors")
                return 1;
            else 
                return 2;
        case "paper":
            if (computerSelection === "scissors")
                return 0;
            else if (computerSelection === "rock")
                return 1;
            else 
                return 2;
        case "scissors":
            if (computerSelection === "rock")
                return 0;
            else if (computerSelection === "paper")
                return 1;
            else 
                return 2;
    }
}

function inputChoice(){
    let i = 0;
    let choice;

    while (i < 1){
        choice = prompt("Please select a choice.");
        choice = choice.toLowerCase();
        choice = choice.replace(" ", "");

        if (choice === "rock" || choice === "paper" || choice === "scissors") 
            i++;
        else
            alert("Please enter a valid selection.");
    }
    return choice;
}

function game(){
    let playerSelection;
    let computerSelection; 

    let playerScore = 0;
    let computerScore = 0;
    let result;

    for (let i = 1; i <= 5; i++){
        console.log("Round " + i + ":");
        
        playerSelection = inputChoice();
        console.log("You chose " + playerSelection);

        computerSelection = getComputerChoice();
        console.log("The computer chose " + computerSelection);

        result = playRound(playerSelection, computerSelection);

        switch (result) {
            case 0:
                computerScore++;
                break;
            case 1:
                playerScore++;
                break;
        }
    }

    if (playerScore > computerScore)
        console.log("You win!");
    else if (computerScore > playerScore)
        console.log("You lose.");
    else 
        console.log("You tied.")

}

// TESTING OF CODE //

game();
// for (let i = 0; i < 10; i++){
// console.log(getComputerChoice());
// console.log(i+1);
// }

// playerSelection = prompt();
// computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));