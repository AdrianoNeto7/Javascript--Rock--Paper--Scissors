# Rock Paper Scissors Game
This is a simple Rock Paper Scissors game implemented using HTML, CSS, and JavaScript. Players can make their choices by clicking on the corresponding buttons, and the game will determine the winner based on the selected options.

## Variables
pickPlayer1: Stores the choice made by Player 1.
pickPlayer2: Stores the choice made by Player 2.
played: Tracks whether the game has been played or not.
choices: An array containing the possible choices: Rock ('✊'), Paper ('🤚'), and Scissors ('✌️').
player1, player12, player13: HTML elements representing the buttons for Player 1's choices.
optionsContainer1, optionsContainer2: HTML elements representing the containers to display the chosen options.
player2, player22, player23: HTML elements representing the buttons for Player 2's choices.
resultArea: HTML element where the game result is displayed.
playBtn: HTML button element to initiate the game.

## Functions
generateChoice(): Generates a random choice from the choices array.
insertHTML(choice1, choice2, result): Updates the HTML elements to display the chosen options and the game result.
decideWinner(a, b): Determines the winner based on the choices made by Player 1 (a) and Player 2 (b).
play(): Initiates the game, determines the winner, and updates the HTML elements accordingly.

## Event Listeners
playBtn: Listens for a click event to start the game or reload the page if the game has already been played.
player1, player12, player13: Listens for a click event to choose Rock, Paper, or Scissors for Player 1.
player2, player22, player23: Listens for a click event to choose Rock, Paper, or Scissors for Player 2.

Note: The game logic assumes a tie when both players select the same choice.
