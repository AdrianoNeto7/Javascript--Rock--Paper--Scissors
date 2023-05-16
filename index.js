/* --- VARIABLES --- */
let pickPlayer1 = null
let pickPlayer2 = null
let played = false
  const choices = ['✊', '🤚', '✌️'];
  const player1 = document.getElementById("player-1")
  const player12 = document.getElementById("player-12")
  const player13 = document.getElementById("player-13")

  const optionsContainer1 = document.getElementById("options-container1")
  const optionsContainer2 = document.getElementById("options-container2")
  

  /* 1a. */
  const player2 = document.getElementById("player-2")
  const player22 = document.getElementById("player-22")
  const player23 = document.getElementById("player-23")

  /* 1b. */
  const resultArea = document.getElementById("result-area")

  /* 1c. */
  const playBtn = document.getElementById("play-btn")

  /* This will help check your results */
  console.log(player2, resultArea, playBtn);

/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

  const generateChoice = () => {
    let r = Math.floor(Math.random() * 3);
    return choices[r]
  };

  const insertHTML = (choice1, choice2, result) => {
    optionsContainer1.innerHTML = `<div style="font-size: 50px;"> ${choice1}</div>`;
    optionsContainer2.innerHTML = `<div style="font-size: 50px;"> ${choice2}</div>`;
    resultArea.innerHTML = result;
  };

  const decideWinner = (a, b) => {
    if (a === b) {
      /* 3a. */ return "Tie!";

    } else if ((a === '✊' && b === '✌️') || (a === '🤚' && b === '✊') || (a === '✌️' && b === '🤚')) {

      /* 3b. */ return "Player 1 won!";

    } else {

      /* 3c. */ return "Player 2 won!";

    }
  };

  const play = () => {
    let result = decideWinner(pickPlayer1, pickPlayer2);
    playBtn.innerHTML = "Reload";
    played = true;

    insertHTML(pickPlayer1, pickPlayer2, result);
  };

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

 playBtn.addEventListener("click", () => {
  if(played === false) {
    play()
  } else {
    location.reload()
  }
 })

 player1.addEventListener("click", () => {
  if (pickPlayer1 === null) {
    pickPlayer1 = "✊"
    player1.innerHTML = `<div style="font-size: 50px;
    border-radius: 5px;
    box-shadow: 4px 4px 16px rgba(0,0,0,0.2);">✊</div>`;
  }
 })
 player12.addEventListener("click", () => {
  if (pickPlayer1 === null) {
    pickPlayer1 = "🤚"
    player12.innerHTML = `<div style="font-size: 50px;
    border-radius: 5px;
    box-shadow: 4px 4px 16px rgba(0,0,0,0.2);">🤚</div>`;
  }
 })
 player13.addEventListener("click", () => {
  if (pickPlayer1 === null) {
    pickPlayer1 = "✌️"
    player13.innerHTML = `<div style="font-size: 50px;
    border-radius: 5px;
    box-shadow: 4px 4px 16px rgba(0,0,0,0.2);">✌️</div>`;
  }
 })

 player2.addEventListener("click", () => {
  if (pickPlayer2 === null) {
    pickPlayer2 = "✊"
    player2.innerHTML = `<div style="font-size: 50px;
    border-radius: 5px;
    box-shadow: 4px 4px 16px rgba(0,0,0,0.2);">✊</div>`;
  }
 })
 player22.addEventListener("click", () => {
  if (pickPlayer2 === null) {
    pickPlayer2 = "🤚"
    player22.innerHTML = `<div style="font-size: 50px;
    border-radius: 5px;
    box-shadow: 4px 4px 16px rgba(0,0,0,0.2);">🤚</div>`;
 }
 })
 player23.addEventListener("click", () => {
  if (pickPlayer2 === null) {
    pickPlayer2 = "✌️"
    player23.innerHTML = `<div style="font-size: 50px;
    border-radius: 5px;
    box-shadow: 4px 4px 16px rgba(0,0,0,0.2);">✌️</div>`;
  }
 })

/* ------------------------------- */
