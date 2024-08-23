let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const usScore = document.querySelector("#user-score");
const comScore = document.querySelector("#computer-score");
const msg = document.querySelector("#msg");
const uscoreboard = document.querySelector("#user-div");
const numbe = 10
function playWinSound() {
    const audio = new Audio("claps-44774.mp3.mp3"); // replace with your sound file
    audio.play();
  }
  
  function youwin(){
    if(userScore === numbe && userScore > compScore ){
      msg.innerText = "Congratulations! You win this game!";
      msg.style.backgroundColor = "gold";
      playWinSound(); // play the win sound
    }
  }
function getCompChoice() {
    const option = ["rock", "paper", "scissors"];
    const ranNumber = Math.floor(Math.random() * 3);
    return option[ranNumber];
}

function drawGame() {
    msg.innerText = ("Game was draw. Play Again!");
    msg.style.backgroundColor = "black";
    (document.querySelector("#computer-div")).style.border = "none";
    uscoreboard.style.border = "none";
    (document.querySelector("#computer-div")).style.transform = "none";
    uscoreboard.style.transform = "none";
}

function showWinner(userChoice, userWin, computerChoice) {
    if (userWin) {
        userScore++;
        usScore.innerText = userScore;
        msg.innerText = "😃 You Win! Your beats computer";
        msg.style.backgroundColor = "green";
        uscoreboard.style.border = "2px solid green";
        uscoreboard.style.transform = "translateY(-5px)";
        (document.querySelector("#computer-div")).style.transform = "none";
        (document.querySelector("#computer-div")).style.border = "none";

    } else {
        compScore++;
        comScore.innerText = compScore;

        msg.innerText = ("🥲 You lose computer beats  You");
        msg.style.backgroundColor = "red";
        (document.querySelector("#computer-div")).style.border = "2px solid green";
        (document.querySelector("#computer-div")).style.transform = "translateY(-5px)";
        uscoreboard.style.transform = "none";
        uscoreboard.style.border = "none";
    }
}
const playGame = (userChoice) => {
    const computerChoice = getCompChoice();
    if (userChoice === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userChoice, userWin, computerChoice , youwin);
    }
};




choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
        // play a sound when the user clicks on a choice
    const clickSound = new Audio("pick-92276.mp3"); // replace with your sound file
    clickSound.play();
    });
});
