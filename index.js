var _a, _b, _c;
var playerWinCount = 0;
var cpuWinCount = 0;
function randomChoice() {
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    switch (randomNumber) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            console.log(randomNumber);
    }
}
(_a = document.querySelector(".rock-img")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var computerChoice = randomChoice();
    switch (computerChoice) {
        case "rock":
            $("#results").text("It's a tie!");
            break;
        case "paper":
            $("#results").text("You lose :(");
            cpuWinCount++;
            $("#cpu-victories").text(String(cpuWinCount));
            break;
        case "scissors":
            $("#results").text("Victory!!!");
            playerWinCount++;
            $("#player-victories").text(String(playerWinCount));
            break;
        default:
            console.log(computerChoice);
    }
});
(_b = document.querySelector(".paper-img")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var computerChoice = randomChoice();
    switch (computerChoice) {
        case "rock":
            $("#results").text("Victory!!!");
            playerWinCount++;
            $("#player-victories").text(String(playerWinCount));
            break;
        case "paper":
            $("#results").text("It's a tie!");
            break;
        case "scissors":
            $("#results").text("You lose :(");
            cpuWinCount++;
            $("#cpu-victories").text(String(cpuWinCount));
            break;
        default:
            console.log(computerChoice);
    }
});
(_c = document.querySelector(".scissors-img")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var computerChoice = randomChoice();
    switch (computerChoice) {
        case "rock":
            $("#results").text("You lose :(");
            cpuWinCount++;
            $("#cpu-victories").text(String(cpuWinCount));
            break;
        case "paper":
            $("#results").text("Victory!!!");
            playerWinCount++;
            $("#player-victories").text(String(playerWinCount));
            break;
        case "scissors":
            $("#results").text("It's a tie!");
            break;
        default:
            console.log(computerChoice);
    }
});
