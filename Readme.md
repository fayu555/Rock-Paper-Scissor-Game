Rock-Paper-Scissors Game 🎮
This is a simple Rock-Paper-Scissors game implemented in JavaScript. Users can play against the computer by selecting one of the three choices: Rock, Paper, or Scissors. The game updates the scores dynamically and displays the result after each round.

Features ✨
Interactive UI with click events

Randomized computer choice

Dynamic score tracking

Colored message display for results

How to Play 🚀
Click on Rock, Paper, or Scissors to make your choice.

The computer will randomly pick one of the three choices.

The result will be displayed:

🟢 You Win – Your choice beats the computer’s.

🔴 Computer Wins – The computer’s choice beats yours.

🟤 Draw – Both choices are the same.

Your score and the computer’s score will be updated accordingly.

Setup & Usage 🛠
Clone or download the repository.

Open the index.html file in a browser.

Start playing!

Code Overview 🧑‍💻
generateComputerChoice() → Returns a random choice for the computer.

drawGame() → Displays a draw message.

showWinner(userWin, userChoice, computerChoice) → Updates the score and displays the result.

playGame(userChoice) → Determines the winner based on the rules.

choices.forEach(...) → Adds event listeners to user choices.

Technologies Used 🏗
HTML

CSS

JavaScript

Enjoy the game! 🎉