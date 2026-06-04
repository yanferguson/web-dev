let gameOverDiv = document.getElementById("game-over");
let winnerText = document.querySelector("#game-over p");
let squareArr = document.querySelectorAll(".ttt-square");

let currentPlayer = "X";

for (const element of squareArr) {
  element.addEventListener("click", (event) => drawSymbol(event));
}

/*
*
*/
function drawSymbol(event) {
  let clickedSquare = event.target;

  if (clickedSquare.innerText == "") {
    clickedSquare.innerText = currentPlayer;

    if (checkForWinner()) endGame(false);
    else if (checkForDraw()) endGame(true);
    else changePlayer();
  }
}

/*
*
*/
function changePlayer() {
  if (currentPlayer == "X") currentPlayer = "O";
  else currentPlayer = "X";
}

/*
* return: true if somebody wins
*/
function checkForWinner() {
  let isGameOver = false;

  // Horizontal rows
  for (let i = 0; i < 3; i++) {
    if (
      squareArr[3 * i].innerText == currentPlayer &&
      squareArr[3 * i + 1].innerText == currentPlayer &&
      squareArr[3 * i + 2].innerText == currentPlayer
    ) {
      isGameOver = true;
    }
  }

  // Vertical columns
  for (let i = 0; i < 3; i++) {
    if (
      squareArr[i].innerText == currentPlayer &&
      squareArr[i + 3].innerText == currentPlayer &&
      squareArr[i + 6].innerText == currentPlayer
    ) {
      isGameOver = true;
    }
  }

  // Diagonals
  if (
    squareArr[0].innerText == currentPlayer &&
    squareArr[4].innerText == currentPlayer &&
    squareArr[8].innerText == currentPlayer
  ) {
    isGameOver = true;
  }

  if (
    squareArr[2].innerText == currentPlayer &&
    squareArr[4].innerText == currentPlayer &&
    squareArr[6].innerText == currentPlayer
  ) {
    isGameOver = true;
  }

  return isGameOver;
}

/*
* return: true if board is full
*/
function checkForDraw() {
  let isDraw = true;

  for (const element of squareArr) {
    if (element.innerText == "") isDraw = false;
  }

  return isDraw;
}

/*
*
*/
function endGame(isDraw) {
  if (isDraw) {
    winnerText.innerText = "Draw!";
  } else {
    winnerText.innerText = "🎉 Player " + currentPlayer + " Won! 🎉";
  }

  gameOverDiv.style.display = "block";
}

/*
*
*/
function resetGame() {
  for (const element of squareArr) {
    element.innerText = "";
  }

  currentPlayer = "X";
  gameOverDiv.style.display = "none";
}
