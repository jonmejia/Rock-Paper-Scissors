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
            $("#results").text("CPU chose rock, it's a tie!");
            break;
        case "paper":
            $("#results").text("CPU chose paper, you lose :(");
            cpuWinCount++;
            $("#cpu-victories").text(String(cpuWinCount));
            break;
        case "scissors":
            $("#results").text("Victory!!! CPU chose scissors!!");
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
            $("#results").text("Victory!!! CPU chose rock!!");
            playerWinCount++;
            $("#player-victories").text(String(playerWinCount));
            break;
        case "paper":
            $("#results").text("CPU chose paper, it's a tie!");
            break;
        case "scissors":
            $("#results").text("CPU chose scissors, you lose :(");
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
            $("#results").text("CPU chose rock, you lose :(");
            cpuWinCount++;
            $("#cpu-victories").text(String(cpuWinCount));
            break;
        case "paper":
            $("#results").text("Victory!!! CPU chose paper!!");
            playerWinCount++;
            $("#player-victories").text(String(playerWinCount));
            break;
        case "scissors":
            $("#results").text("CPU chose scissors, it's a tie!");
            break;
        default:
            console.log(computerChoice);
    }
});
