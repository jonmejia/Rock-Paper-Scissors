let playerWinCount = 0
let cpuWinCount = 0

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
            $("#results").text("It's a tie!")
            break;
        case "paper":
            $("#results").text("You lose :(")
            cpuWinCount++
            $("#cpu-victories").text(String(cpuWinCount))
            break
        case "scissors":
            $("#results").text("Victory!!!")
            playerWinCount++
            $("#player-victories").text(String(playerWinCount))
            break
        default:
            console.log(computerChoice)
    }
})

document.querySelector(".paper-img")?.addEventListener("click",function(){
    let computerChoice = randomChoice()
    switch(computerChoice){
        case "rock":
            $("#results").text("Victory!!!")
            playerWinCount++
            $("#player-victories").text(String(playerWinCount))
            break;
        case "paper":
            $("#results").text("It's a tie!")
            break
        case "scissors":
            $("#results").text("You lose :(")
            cpuWinCount++
            $("#cpu-victories").text(String(cpuWinCount))
            break
        default:
            console.log(computerChoice)
    }
})

document.querySelector(".scissors-img")?.addEventListener("click",function(){
    let computerChoice = randomChoice()
    switch(computerChoice){
        case "rock":
            $("#results").text("You lose :(")
            cpuWinCount++
            $("#cpu-victories").text(String(cpuWinCount))
            break;
        case "paper":
            $("#results").text("Victory!!!")
            playerWinCount++
            $("#player-victories").text(String(playerWinCount))
            break
        case "scissors":
            $("#results").text("It's a tie!")
            break
        default:
            console.log(computerChoice)
    }
})

