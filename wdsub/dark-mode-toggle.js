  
  //determine if lightmode is on
  let darkModeTgl = document.getElementById("dark-mode-tgl");
  let onOffStatus = document.getElementById("on-off-status");

darkModeTgl.addEventListener("click",() => mngMode());
  
  let isLight = true;
  
  function mngMode(){
   
    isLight = !isLight;
  
  //change backround color to black if lightmode,else white
  
  if (isLight) document.body.style.backgroundColor="black";
    else document.body.style.backgroundColor="white";
 
    //change text color to white if else black
    
  if (isLight) darkModeTgl.style.color="black",
    onOffStatus.style.color="white";
 else darkModeTgl.style.color="white",
   onOffStatus.style.color="black";

    //change text to "darkmode on" if light mode, else "dark mode"
  
 if(isLight) onOffStatus.innerHTML = "<p> dark mode on </p>" ;
    else onOffStatus.innerHTML = "<p> dark mode off </p>"   ;
  

  }
 
