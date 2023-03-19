function cpuChoice(){
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

console.log(cpuChoice())

document.querySelector(".rock-img")?.addEventListener("click", function(){
    console.log("rock-img working")
})

document.querySelector(".paper-img")?.addEventListener("click",function(){
    console.log("paper-img working")
})

document.querySelector(".scissors-img")?.addEventListener("click",function(){
    console.log("scissors-img working")
})