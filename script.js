
function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    /*console.log(n);*/
    if (n == 0) {
        copmChoice = "ROCK";
        return copmChoice;
    } else if (n == 1) {
        copmChoice = "PAPER";
        return copmChoice;
    } else {
        copmChoice = "SCISSORS";
        return copmChoice;
    }
}
let compC = getComputerChoice();
/*console.log(compC);
let playerChoice = prompt("Rock, paper or scissors?");
playerChoice = playerChoice.toUpperCase();
console.log(playerChoice);*/
function round(comp, player) {
    if (comp == "ROCK" && player == "PAPER") {
        console.log("Player wins!");
        result = "Player"
        return result;
    } else if (comp == "ROCK" && player == "ROCK") {
        console.log("There has been a tie!");
        result = "tie"
        return result;
    } else if (comp == "ROCK" && player == "SCISSORS") {
        console.log("The computer wins!");
        result = "Computer"
        return result;
    } else if (comp == "PAPER" && player == "ROCK") {
        console.log("The computer wins!");
        result = "Computer";
        return result; 
    } else if (comp == "PAPER" && player == "PAPER") {
        console.log("There was a tie!");
        result = "tie";
        return result;
    } else if (comp == "PAPER" && player == "SCISSORS") {
        console.log("Player wins!");
        result = "Player";
        return result;
    } else if (comp == "SCISSORS" && player == "ROCK") {
        console.log("Player wins!");
        result = "Player";
        return result;
    } else if (comp == "SCISSORS" && player == "PAPER") {
        console.log("The computer wins!");
        result = "Computer";
        return result;
    } else if (comp == "SCISSORS" && player == "SCISSORS") {
        console.log ("There was a tie!")
        result = "tie";
        return result;
    }
}

function game() {
    let i = 1;
    let playerS = 0;
    let computerS = 0;
    while (i <= 5) {
        let compC = getComputerChoice();
        /*console.log("Round "+ i +" the computer got " + compC);*/
        let playerChoice = prompt("Rock, paper or scissors?");
        playerChoice = playerChoice.toUpperCase();
        round(compC, playerChoice);
        i = i+1;
        if (result == "Player") {
            playerS = playerS + 1;
        } else if (result == "Computer") {
            computerS = computerS + 1;
        } else if (result == "tie") {

        }
    }
    if (playerS > computerS) {
        console.log("The player won the tournament!")
    } else if (computerS > playerS){
        console.log("The computer won the tournament.")
    } else {
        console.log("There somehow was a tie!")
        console.log("Player got " + playerS);
        console.log("Computer got " + computerS);
    }
}

game();