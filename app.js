let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.querySelector("#player-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");
const model_div = document.querySelector(".modal")
const modelContent_div = document.querySelector(".modal-content")

function main() {
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));
}

function getComputerChoice() {
    const choices = ["r", "p", "s"]
    return choices[Math.floor(Math.random() * 3)] //uses Math to random index
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();

    switch(playerChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, computerChoice);
    }
}

function convertToWord(letter) {
    if (letter === "r") return "Rock"
    else if (letter === "p") return "Paper"
    else if (letter === "s") return "Scissors"
}

function win(playerChoice, computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);

    playerScore++;
    playerScore_span.innerHTML = playerScore;

    result_p.innerHTML = "Player Wins!"
    playerChoice_div.classList.add("green-glow");
    setTimeout(() => playerChoice_div.classList.remove("green-glow"), 400)

    checkPlayerResult(playerScore);
};

function checkPlayerResult(playerScore) {
    if (playerScore === 5) {
        modelContent_div.innerHTML = "Player Won The Game!";
        model_div.style.display = "block"

        restart();
    }
}

function lose(playerChoice, computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    
    result_p.innerHTML = "Computer Wins!"
    playerChoice_div.classList.add("red-glow");
    setTimeout(() => playerChoice_div.classList.remove("red-glow"), 400)
    
    checkComputerResult(computerScore);
};

function checkComputerResult(computerScore) {
    if (computerScore === 5) {
        modelContent_div.innerHTML = "Computer Won The Game!";
        model_div.style.display = "block"

        restart();
    }
}

function draw(playerChoice, computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);

    result_p.innerHTML = "It's a Draw!"
    playerChoice_div.classList.add("gray-glow");
    setTimeout(() => playerChoice_div.classList.remove("gray-glow"), 400)
};

function restart() {
    console.log("restart")
    playerScore = 0;
    computerScore = 0;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = ""
    setTimeout(() => model_div.style.display = "none", 5000)
}

main();