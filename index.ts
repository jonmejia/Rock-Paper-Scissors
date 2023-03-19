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
            alert("tie")
            break;
        case "paper":
            alert("loss")
        case "scissors":
            alert("win")
        default:
            console.log(computerChoice)
    }
})

document.querySelector(".paper-img")?.addEventListener("click",function(){
    console.log("paper-img working")
    let computerChoice = randomChoice()
    switch(computerChoice){
        case "rock":
            alert("win")
            break;
        case "paper":
            alert("tie")
            break
        case "scissors":
            alert("lose")
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
            alert("lose")
            break;
        case "paper":
            alert("win")
            break
        case "scissors":
            alert("tie")
            break
        default:
            console.log(computerChoice)
    }
})