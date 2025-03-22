let userScore = 0;
let computerScore = 0;
let userWin = true;

const userScorePara = document.querySelector("#userScrore");
const computerScorePara = document.querySelector("#computerScore");

const msg = document.querySelector("#message");
const generateComputerChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomindex = Math.floor(Math.random() * 3);
  return option[randomindex];
};
const drawGame = () => {
  msg.innerText = "Draw! Tough Fight";
  msg.style.backgroundColor = "Brown";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win!! Your choice ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `Computer Win!! Computer choice ${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
};

const playGame = (userChoice) => {
  const computerChoice = generateComputerChoice();
  if (userChoice === computerChoice) {
    drawGame();
  } else {
    if (userChoice === "rock") {
      userWin = computerChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "rock" ? true : false;
    } else if (userChoice === "scissors") {
      userWin = computerChoice === "rock" ? true : false;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(userChoice);
    playGame(userChoice);
  });
});
