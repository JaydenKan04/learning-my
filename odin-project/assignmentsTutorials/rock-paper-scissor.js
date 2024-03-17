function playerSelection(){
    const userInput = prompt("Rock/Paper/Scissor");

    return userInput.toLowerCase();
}

let computerSelection = function() {
    const array = ["rock", "paper", "scissor"];
    return array[Math.floor(Math.random() * array.length)];
}

let playRound = (playerSelection,computerSelection) => {
    let result;

    if (playerSelection === computerSelection){
        result = `It's a tie (You : ${playerSelection} Computer : ${computerSelection})`;
    }else if((playerSelection === 'rock' && computerSelection === 'scissor') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissor' && computerSelection === 'paper')){
        result = `You won! (You : ${playerSelection} Computer : ${computerSelection})`;
    }else{
        result = `Computer won! (You : ${playerSelection} Computer : ${computerSelection})`;
    }

    return result;
}

function playGame(){
    for(let i = 0 ; i < 5 ; i++){
        alert(playRound(playerSelection(),computerSelection()));
    }
}

playGame();