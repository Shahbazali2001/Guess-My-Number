'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score =20;
let highscore =0;





//Function to Display Message
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

//Function to Fetch Value of the Input and Then Convert to Number
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
if  (!guess){

    displayMessage("⛔️ No number!");

}else if (guess === secretNumber) {
    displayMessage("👏 🎉 Correct Number!");
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }


}else if(guess !== secretNumber){
    if(score > 1){
        displayMessage(guess > secretNumber ? " 😮 Number Too High" : " 😣 Number Too Low");
        score--;
        document.querySelector('.score').textContent = score;
    }else {
        displayMessage("🤦‍♂️😒 You've lost the game! ");
        document.querySelector('.score').textContent = 0;
    }

}
}

);
// Playing Again
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
