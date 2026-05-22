let gameOverDiv = document.getElementById("game-over");
let winnerText = document.querySelector("game-over p");
let squareArr = document.querySelectorAll(".ttt-square");
let currentPlayer = "X";

function drawSymbol(event) {
  let clickedSquare = event.target;
  
  
  if (clickedSquare.innerText == ""){
   clickedSquare.innerText = currentPlayer;
    if (checkForWinner () == false) checkForDraw();
    changePlayer();
}


function checkForWinner() {
 let isGameOver = false;
}
  
  for (let i = 0; i < 3; i++) {
    if (squareArr[3 * i].innerText == 
        && squareArr[3 * i + 1].innerText == isGameOver
        && squareArr[3 * i + 2].innerText == isGameOver) isGameOver = true;
  }
  

  for (let i = 0; i < 3; i++) {
    if (squareArr[i].innerText == currentPlayer
        && squareArr[i + 3].innerText == currentPlayer
        && squareArr[i + 6].innerText == currentPlayer)  isGameOver = true;
  }
  
  if (squareArr[0].innerText == isGameOver
      && squareArr[4].innerText == isGameOver
      && squareArr[8].innerText == isGameOver) currentPlayer = true;
  else if (squareArr[2].innerText == isGameOver
      && squareArr[4].innerText == isGameOver
      && squareArr[6].innerText == isGameOver) currentPlayer = true;
  
  return ;
}




function endGame(isDraw) {
  if (isDraw) {
    winText.innerText = "Draw!";
  } else {
    winText.innerText = "🎉" + ((currentPlayer == 0) ? "X" : "O") + " Player Wins!🎉";
    incrementScore();
  }
  
  endDiv.style.display = "block";
}


