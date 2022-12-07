let playerScore = 0;
let computerScore = 0;

const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const scoreHeader = document.querySelector('#modal-header');
const showPlayerScore = document.querySelectorAll('.player-score');
const showCPUScore = document.querySelectorAll('.CPU-score');

showPlayerScore.forEach(div => {div.textContent = playerScore;})
showCPUScore.forEach(div => {div.textContent = computerScore;})

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {playRound("rock", getComputerChoice());});
rock.textContent = "Water";

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {    playRound("paper", getComputerChoice());});
paper.textContent = "Fire";

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {playRound("scissors", getComputerChoice());});
scissors.textContent = "Grass";

const reset = document.querySelector('#reset-button');
reset.addEventListener('mouseup', resetGame);

const controls = document.querySelectorAll('button');
controls.forEach(button => {
    button.addEventListener('mouseup', () => {checkScore();});
    button.addEventListener('mouseenter', () => button.classList.add('hover-active'));        //add transition
    button.addEventListener('mouseleave', () => button.classList.remove('hover-active'));     //remove transition
    });

function resetGame() {
    playerScore = 0; computerScore = 0;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

function checkScore() {
    showPlayerScore.forEach(div => {div.textContent = playerScore;});
    showCPUScore.forEach(div => {div.textContent = computerScore;});

    if (playerScore == 5){
        scoreHeader.textContent = "You won! You're now the Pokemon master.";
        modal.classList.add('active');
        overlay.classList.add('active');
        showPlayerScore.forEach(div => {
            div.textContent = playerScore;
        })
    }

    else if (computerScore == 5) {
        scoreHeader.textContent = "Too bad, you lose LOL";
        modal.classList.add('active');
        overlay.classList.add('active');
    }
}

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
            if (computerSelection === "paper"){computerScore++;return 0;}
            else if (computerSelection === "scissors"){playerScore++; return 1;}
            else {return 2};
        case "paper":
            if (computerSelection === "scissors"){computerScore++;return 0;}
            else if (computerSelection === "rock"){playerScore++; return 1;}
            else {return 2};
        case "scissors":
            if (computerSelection === "rock"){computerScore++;return 0;}
            else if (computerSelection === "paper"){playerScore++; return 1;}
            else {return 2};
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


// TESTING OF CODE //
// for (let i = 0; i < 10; i++){
// console.log(getComputerChoice());
// console.log(i+1);
// }

// playerSelection = prompt();
// computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

// window.addEventListener('mouseover', function(e) {
//     console.log(e.target.localName); 
// })
