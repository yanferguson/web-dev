  
  //determine if lightmode is on
  let darkModeTgl = document.getElementById("darkModeTgl");
  let onOffStatus = document.getElementById("on-off-status");
  
  let isLight = true;
  
  function mngMode(event){
    
  
  //change backround color to black if lightmode,else white
  
  if (isLight)document.body.style.backgroundColor="black";
    else document.body.style.backgroundColor="white";
 
    //change text color to white if else black
    
  if(islight) document.body.style.color="white";
 
    else document.body.style.color="black";

    //change text to "darkmode on" if light mode, else "dark mode"
  
 if(islight) onOffStatus.innerHTML = "<p>dark mode on</p>" ;
    else onOffStatus.innerHTML = "<p>dark mode off</p>"   ;
  
  // flip the is light switch 
  isLight = !isLight;
  }
 
