//TODO: Replace p1NumStrats and p2NumStrats with query parameters
let queryParams = new URLSearchParams(window.location.search);
const P1_NUMSTRATS = queryParams.get("p1NumStrats");
const P2_NUMSTRATS = queryParams.get("p2NumStrats");
const PAYOFF_CONTENTS ="(<input type='number'>,<input type='number'>)"

buildMatrix();



function buildMatrix(){
  let matrix = document.getElementById("matrix");
  
  //Loop through (P1_NUMSTRATS + 1 )times. Each iteration, make a row div
  for (let i = 0; i < (P1_NUMSTRATS + 1 ); i++){ 
  //create new row div 
   let newRow = document.createElement("div");
  newRow.classList.add("matrix-row");
  matrix.append(newRow);
  //loop through (P2_NUMSTRATS + 1 )times. Each iteration,  make a cell
    for (let j = 0; j < (P2_NUMSTRATS + 1); j++ ){
     //create a new cell 
  let newCell = document.createElement("div");
      if (i == 0 && j==0) {
        newCell.classList.add("empty-cell");
      } else if(i == 0) {
        newCell.classList.add("stat-cell");
        newCell.innerHTML = "t<sub>" + j + "</sub>"
      } else if(j==0) {
        newCell.classList.add("stat-cell");
        newCell.innerHTML = "s<sub>" + i + "</sub>"
      } else {
        newCell.classList.add("payoff-cell");
        newCell.classList.add("ne")
        newCell.innerHTML = PAYOFF_CONTENTS;
      }
   newRow.append(newCell);
    }
  } 

}

function randomize() {
let payoffArr = document.querySelectorAll(".payoff-cell input");
  const MIN = -5;
  const MAX = 15;
  
  
  for (const elem of payoffArr){
    elem.value = Math.random() * (MAX + 1 - MIN) + MIN;
  }
}

function compute() {
let p1PayArr = document.querySelectorAll(".payoff-cell input: first-child"); 
let p2PayArr = document.querySelectorAll(".payoff-cell input: last-child");
let payCellArr = document.querySelectorAll(".payoff-cell");
  
  for (const elem of PayCellArr){
     if (elem.classList.contains("eliminated") == true) elem.classList.remove("eliminated"); elem.classList.add("ne");
     if (elem.classList.contains("eliminated") == false) elem.classList.add("ne");
  }
 
  //loop through every column, finding p1's highest payoff out of the rows.
  for (let j = 0; j < P2_NUM_STRATS; i++) {
    let largest = -Infinity;
    
    //Identify the highest payoff in this column
    for (let i = 0; i < P1_NUM_STRATS; i++) {
      if (Number(p2PayArr[P2_NUM_STRATS*i + j].value) != Number(largest)) largest =  p2PayArr[P2_NUM_STRATS*i + j].value;
    }
    //Eliminate any cells which aren't best responses
 for (let i = 0; i < P1_NUM_STRATS; j++) {
      if (Number(p2PayArr[P2_NUM_STRATS*i + j].value > Number(largest)) largest =  p2PayArr[P2_NUM_STRATS*i + j].value;
    }
  
  }
  
  
  //loop through every row, finsing p2's highest payoff out of the columns 
  
   for (let i = 0; i < P1_NUM_STRATS; i++) {
    let largest = -Infinity;
    
    //Identify the highest payoff in this column
    for (let j = 0; j < P2_NUM_STRATS; i++) {
      if (Number(p2PayArr[P2_NUM_STRATS*i + j].value > Number(largest)) largest =  p2PayArr[P2_NUM_STRATS*i + j].value;
    }
    //Eliminate any cells which aren't best responses
 for (let j = 0; j < P2_NUM_STRATS; j++) {
      if (Number(p2PayArr[P2_NUM_STRATS*i + j].value > Number(largest)) largest =  p1PayArr[P2_NUM_STRATS*i + j].value;
    }
  
  }
 
  
  //give the ne class to any cells which are best responses for both players
  
  for (const elem  of payCellArr){
    if (elem.classList.contains("eliminated") == false) elem.classList.add("ne");
  }
  
  
  
}
