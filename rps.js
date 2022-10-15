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

let userSelection = prompt("Select Rock, Paper, or Scissors")

function playRound(playerSelection,computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Rock"){
        return "You both select Rock. It's a draw!"
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return "Your opponent chooses paper. You lose!"
    }
    else if (playerSelection == "Rock"&& computerSelection == "Scissors") {
        return "Your opponent chooses Scissors. You win!!"
    }
    else if (playerSelection == "Paper"&& computerSelection == "Rock") {
        return "Your opponent chooses Rock. You win!!"
    }
    else if (playerSelection == "Paper"&& computerSelection == "Paper") {
        return "Your opponent chooses Paper. It's a draw!"
    }
    else if (playerSelection == "Paper"&& computerSelection == "Scissors") {
        return "Your opponent chooses Scissors. You lose!"
    }
    else if (playerSelection == "Scissors"&& computerSelection == "Rock") {
        return "Your opponent chooses Rock. You lose!"
    }
    else if (playerSelection == "Scissors"&& computerSelection == "Paper") {
        return "Your opponent chooses Paper. You win!!"
    }
    else if (playerSelection == "Scissors"&& computerSelection == "Scissors") {
        return "Your opponent chooses Scissors. It's a draw!"
    }
}
let computerSelection = getComputerChoice()
console.log(computerSelection)
console.log(userSelection)
console.log(playRound(userSelection,computerSelection))
