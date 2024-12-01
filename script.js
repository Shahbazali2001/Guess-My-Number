'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore =0;


//Function to Display Message
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

//Function to Fecth Value of the Input and Then Convert to Number
document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
})

if  (!guess){
    displayMessage("⛔️ No number!");
}else if (guess === secretNumber) {
    displayMessage("👏 🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
}

