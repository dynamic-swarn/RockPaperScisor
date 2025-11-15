let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll("#choice img");
const userDisplay = document.querySelector(".us-er h1");
const compDisplay = document.querySelector(".comp-uter h1");
const resultDisplay = document.getElementById("win").querySelector("h3");
const userScoreDisplay = document.querySelector(".user p:nth-child(2)");
const compScoreDisplay = document.querySelector(".computer:last-child p:nth-child(2)");
const resBtn = document.querySelector(".reset button");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playGame(userChoice){
    const compChoice = getComputerChoice();
    userDisplay.textContent = getEmoji(userChoice);
    compDisplay.textContent = getEmoji(compChoice);

    if(userChoice === compChoice){
        resultDisplay.textContent = "It's a Tie!";
    }else if((userChoice === "rock" && compChoice === "scissors") ||
             (userChoice === "paper" && compChoice === "rock") ||
             (userChoice === "scissors" && compChoice === "paper")){
        userScore++;
        resultDisplay.textContent = "You Win! 🎉";
    }else{
        compScore++;
        resultDisplay.textContent = "Computer Wins!";
    }
    updateScore();
}

function updateScore(){
    userScoreDisplay.textContent = userScore;
    compScoreDisplay.textContent = compScore;
}

function getEmoji(choice){
    switch(choice){
        case "rock":
            return "✊";
        case "paper":
            return "✋";
        case "scissors":
            return "✌️";
    }

}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        playGame(choice.id);
    });
});
resBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;

   userDisplay.textContent = "❓";
   compDisplay.textContent = "❓";
   resultDisplay.textContent = "Let's Play!";
   updateScore();
});
