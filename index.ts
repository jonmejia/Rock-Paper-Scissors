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
        case "scissors":
            alert("You lose.. :(")
        default:
            console.log(computerChoice)
    }
})

document.querySelector(".paper-img")?.addEventListener("click",function(){
    console.log("paper-img working")
    let computerChoice = randomChoice()
    switch(computerChoice){
        case "rock":
            alert("Victory!!!")
            break;
        case "paper":
            alert("It's a tie!")
            break
        case "scissors":
            alert("You lose.. :(")
            break
        default:
            console.log(computerChoice)
    }
})

document.querySelector(".scissors-img")?.addEventListener("click",function(){
    console.log("scissors-img working")
    let computerChoice = randomChoice()
    switch(computerChoice){
        case "rock":
            alert("You lose.. :(")
            break;
        case "paper":
            alert("Victory!!!")
            break
        case "scissors":
            alert("It's a tie!")
            break
        default:
            console.log(computerChoice)
    }
})