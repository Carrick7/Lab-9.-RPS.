// hiding userChoice header 2
document.getElementById("hidden").style.display = "none";

// assigning userChoice, computerChoice and result from HTML to const displays 
const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('result');

// saving all choices and result globally
  let userChoice;
  let computerChoice;
  let result;
  let click=0;
// target all button choices
const possibleChoices = document.querySelectorAll('button');

// assigning the userChoice to a button ID whenever they click on a specific button
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = (userChoice);
  click++;
    if(click==4){
      alert("Game Over!");
      document.getElementById("container1").style.display = "none";
      document.getElementById("container2").innerHTML= "Please Refrsh the page to play again!";
    } 
 document.getElementById("userChoice").style.display = "none";
 generateComputerChoice();
 getResult();
}));

// generating random number for each button from 1 to 3
function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1;
  console.log(randomNumber);
// assigning random values to button IDs for the computer's move
  if (randomNumber === 1){
    computerChoice = 'rock';
  }
  else if (randomNumber === 2){
    computerChoice = 'paper';
  }
  else{
    computerChoice = 'scissors';
  }
    computerChoiceDisplay.innerHTML = (computerChoice);
}

// computing the result
function getResult() {
  
    if (computerChoice === userChoice){  
      result = 'Draw';
    }
    else if (computerChoice === 'paper' && userChoice === 'rock'){
      result = 'You Lose!';
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors'){
      result = 'You Win!';
      document.getElementById("container1").innerHTML= "Congratulations!";
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors'){
      result = 'You Lose!';
    }
    else if (computerChoice === 'rock' && userChoice === 'paper'){
      result = 'You Win!';
         document.getElementById("container1").innerHTML= "Congratulations!";
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper'){
      result = 'You Lose!';
    }
    else{
      result = 'You Win!';
      document.getElementById("container1").innerHTML= "Congratulations!";
    }
    resultDisplay.innerHTML = result;  
    }
   


 


 



