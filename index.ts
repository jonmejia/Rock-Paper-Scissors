let playerWinCount = 0
let cpuWinCount = 0

// let playerVictories = document.getElementById("player-victories")
// console.log(playerVictories?.textContent)

function randomChoice(){
    let randomNumber = Math.floor(Math.random()*3+1)
    switch(randomNumber){
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        case 3:
            return "scissors"
            break;
        default:
            console.log(randomNumber)
    }

}

document.querySelector(".rock-img")?.addEventListener("click", function(){
    let computerChoice = randomChoice()
    switch(computerChoice){
        case "rock":
            alert("It's a tie!")
            break;
        case "paper":
            alert("Victory!!!")
            playerWinCount++
            break
        case "scissors":
            alert("You lose.. :(")
            cpuWinCount++
            break
        default:
            console.log(computerChoice)
    }
})

document.querySelector(".paper-img")?.addEventListener("click",function(){
    let computerChoice = randomChoice()
    switch(computerChoice){
        case "rock":
            alert("Victory!!!")
            playerWinCount++
            break;
        case "paper":
            alert("It's a tie!")
            break
        case "scissors":
            alert("You lose.. :(")
            cpuWinCount++
            break
        default:
            console.log(computerChoice)
    }
})

document.querySelector(".scissors-img")?.addEventListener("click",function(){
    let computerChoice = randomChoice()
    switch(computerChoice){
        case "rock":
            alert("You lose.. :(")
            cpuWinCount++
            break;
        case "paper":
            alert("Victory!!!")
            playerWinCount++
            break
        case "scissors":
            alert("It's a tie!")
            break
        default:
            console.log(computerChoice)
    }
})
