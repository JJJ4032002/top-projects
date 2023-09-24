function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function gameRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase()

    const winningCond = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if (playerSelection === computerSelection){
        return [`It is a tie! ${playerSelection} and ${computerSelection}`, 0] // 0 player draw
    } else if (winningCond[computerSelection] === playerSelection){
        return [`You lose! ${computerSelection} beats ${playerSelection}`, -1] // -1 player
                                                                                // lose
    } else{
        return [`You win. ${playerSelection} beats ${computerSelection}`, 1]; // 1 player win
    }

}

function game(){
    let playerScore = 0, computerScore = 0
    for (let i = 0; i <= 4; ++i){
        roundResult = gameRound(prompt("Enter choice:"), getComputerChoice());
        console.log(`${roundResult[0]}`);
        if (roundResult[1] === -1){
            computerScore += 1;
        } else if (roundResult[1] === 1){
            playerScore += 1;
        }
    }
    console.log(`Player: ${playerScore} \n Computer: ${computerScore}`)
    
}