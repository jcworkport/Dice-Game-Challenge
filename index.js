
function randomIntFromInterval(min, max) {
  // Generate a random integer between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumber1 = randomIntFromInterval(1, 6);
let randomNumber2 = randomIntFromInterval(1, 6);

let dice1 = document.getElementsByClassName("img1")[0];
let dice2 = document.getElementsByClassName("img2")[0];
let winnerDraw = document.querySelector("h1");

function changeSrcImg() { 
  dice1.setAttribute("src", randomNumber1 == 1 ? "images/dice1.png" :
                           randomNumber1 == 2 ? "images/dice2.png" :
                           randomNumber1 == 3 ? "images/dice3.png" :
                           randomNumber1 == 4 ? "images/dice4.png" :
                           randomNumber1 == 5 ? "images/dice5.png" :
                           randomNumber1 == 6 ? "images/dice6.png" :
                           "images/default.png");
}

function changeSrcImg2() { 
  dice2.setAttribute("src", randomNumber2 == 1 ? "images/dice1.png" :
                           randomNumber2 == 2 ? "images/dice2.png" :
                           randomNumber2 == 3 ? "images/dice3.png" :
                           randomNumber2 == 4 ? "images/dice4.png" :
                           randomNumber2 == 5 ? "images/dice5.png" :
                           randomNumber2 == 6 ? "images/dice6.png" :
                           "images/default.png");
}

function changeTxtWinnerDraw() {
  winnerDraw.setAttribute.innerHTML
}


window.addEventListener("load", changeSrcImg);
window.addEventListener("load", changeSrcImg2);