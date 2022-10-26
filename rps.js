function getComputerChoice(){
   let randomNumber = Math.floor(Math.random()*3)
   if (randomNumber === 0){
    return "Rock"
   }
   else if (randomNumber === 1){
    return "Paper"
   }
   else if (randomNumber === 2){
    return "Scissors"
   }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "Rock"){
        return "You both select Rock. It's a draw!"
    }
    else if (playerSelection == "rock" && computerSelection == "Paper"){
        return "Your opponent chooses paper. You lose!"
    }
    else if (playerSelection == "rock"&& computerSelection == "Scissors") {
        return "Your opponent chooses Scissors. You win!!"
    }
    else if (playerSelection == "paper"&& computerSelection == "Rock") {
        return "Your opponent chooses Rock. You win!!"
    }
    else if (playerSelection == "paper"&& computerSelection == "Paper") {
        return "Your opponent chooses Paper. It's a draw!"
    }
    else if (playerSelection == "paper"&& computerSelection == "Scissors") {
        return "Your opponent chooses Scissors. You lose!"
    }
    else if (playerSelection == "scissors"&& computerSelection == "Rock") {
        return "Your opponent chooses Rock. You lose!"
    }
    else if (playerSelection == "scissors"&& computerSelection == "Paper") {
        return "Your opponent chooses Paper. You win!!"
    }
    else if (playerSelection == "scissors"&& computerSelection == "Scissors") {
        return "Your opponent chooses Scissors. It's a draw!"
    }
}
function game(){
    let playerWins = 0
    let computerWins = 0
    //play the game while player wins is less than 3 or cpu wins is less than 3
    // if player wins or computer wins is 3 then end the game

    while (playerWins <3 && computerWins <3){
        let playerChoice = prompt("Select Rock, Paper, or Scissors")
        playerChoice = playerChoice.toLowerCase()
        let cpuChoice = getComputerChoice()
        playRound(playerChoice,cpuChoice)

        if (playerChoice == "rock" && cpuChoice == "Paper"){
            computerWins = computerWins +1
        }
        else if (playerChoice == "rock"&& cpuChoice == "Scissors") {
            playerWins = playerWins +1
        }
        else if (playerChoice == "paper"&& cpuChoice == "Rock") {
            playerWins = playerWins +1
        }
        else if (playerChoice == "paper"&& cpuChoice == "Scissors") {
            computerWins = computerWins +1
        }
        else if (playerChoice == "scissors"&& cpuChoice == "Rock") {
            computerWins = computerWins +1
        }
        else if (playerChoice == "scissors"&& cpuChoice == "Paper") {
            playerWins = playerWins +1
        }

        console.log("You:"+playerWins)
        console.log("CPU:"+computerWins)
        if (computerWins ==3){
            return "Computer wins!"
        }
        else if (playerWins == 3){
            return "Player wins!"
        }
    }
}
console.log(game())
