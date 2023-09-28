/**
 * This function gets a random value for computer option
 * @returns {string}
 */
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}


/**
 * This function plays exactly one round of rock,paper, scissors
 * @param playerSelection
 * @param computerSelection
 * @returns {(string|number)[]}
 */
function gameRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase()

    // winning conditions e.g. rock beats scissors
    const winningCond = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if (playerSelection === computerSelection) {
        return [`It is a tie! ${playerSelection} and ${computerSelection}`, 0] // 0 player draw
    } else if (winningCond[computerSelection] === playerSelection) {
        return [`You lose! ${computerSelection} beats ${playerSelection}`, -1] // -1 player
        // lose
    } else if ((winningCond[computerSelection] !== playerSelection) && (Object.keys(winningCond).includes(playerSelection) && (Object.keys(winningCond).includes(playerSelection)))) {
        return [`You win. ${playerSelection} beats ${computerSelection}`, 1]; // 1 player win
    } else {
        return ["Invalid value", 500]
    }

}

/**
 * This function plays the game for 4 rounds and outputs the score at the end of the game
 */
function game(ObjectIn, resultsDiv) {
    let roundResult;
    
    roundResult = gameRound(ObjectIn.target.textContent.trim(), getComputerChoice());
    if (roundResult[1] === -1) {
        computerScore += 1;
    } else if (roundResult[1] === 1) {
        playerScore += 1;
    }
    resultsDiv.innerText = `Round results: ${roundResult[0]}`;
    resultsDiv.innerHTML += `<pre>\n\nCurrent standings: \n\n\tYour score: ${playerScore}\n\tAI Computer score: ${computerScore}</pre>`
    
    console.log(`Round results:\n ${roundResult[0]}`)
    console.log(`Player: ${playerScore} \nComputer: ${computerScore}`)
    
    if ((playerScore === 3) || (computerScore === 3)){ //first to 3 wins
        if (playerScore === 3){
            console.log("Congratulations. You won!")
            resultsDiv.innerText = `Congratulations. You won!`
        } else if (computerScore === 3){
            console.log("Ha! Loser")
            resultsDiv.innerText = "Ouch. You lost. Better luck next time!"
        }
        resultsDiv.innerHTML += `<pre>\n\nFinal results: \n\tYour score: ${playerScore} \n\tComputer Score: ${computerScore}</pre>`
        // resultsDiv.innerText = `Your score: ${playerScore}. Computer Score: ${computerScore}`
        computerScore = 0; playerScore = 0;
    }
    
    
}

const printerFunc = (objectIn) => console.log(objectIn.innerText);

const buttons = document.querySelectorAll(".btn");
const buttonsList = [...buttons]

let x = "Testing";

const resultsDiv = document.createElement("div");
const mainContainer = document.querySelector(".main-section");
resultsDiv.classList.add("resultsDiv");
// resultsDiv.innerText = `Results: `;

let playerScore = 0, computerScore = 0
buttonsList.forEach((button) => button.addEventListener('click', e => {
    // gameRound(e.target.textContent.trim(), getComputerChoice());
    // console.log(e)
    game(e, resultsDiv);
}));

resultsDiv.setAttribute('style',
    'font-family: Poppins, Roboto, sans-serif;')
mainContainer.appendChild(resultsDiv)
