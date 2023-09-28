/**
 * This function gets a random value for computer option
 * @returns {string}
 */
function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}


/**
 * This function plays exactly one round of rock,paper, scissors
 * @param playerSelection
 * @param computerSelection
 * @returns {(string|number)[]}
 */
function gameRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase()

    // winning conditions e.g rock beats scissors
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
    } else if ((winningCond[computerSelection] !== playerSelection) && (Object.keys(winningCond).includes(playerSelection) && (Object.keys(winningCond).includes(playerSelection)) ) ) {
        return [`You win. ${playerSelection} beats ${computerSelection}`, 1]; // 1 player win
    }else {
        return ["Invalid value", 500]
    }

}

/**
 * This function plays the game for 4 rounds and outputs the score at the end of the game
 */
function game(){
    let playerScore = 0, computerScore = 0
    let roundResult;
    for (let i = 0; i <= 4; ++i) {
        roundResult = gameRound(prompt("Enter choice:"), getComputerChoice());
        console.log(`${roundResult[0]}`);
        if (roundResult[1] === -1) {
            computerScore += 1;
        } else if (roundResult[1] === 1) {
            playerScore += 1;
        }
    }
    console.log(`Player: ${playerScore} \nComputer: ${computerScore}`)
    
}
