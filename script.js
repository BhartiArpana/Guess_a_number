let randomNumber =(parseInt((Math.random()*100)+1))


let submit = document.querySelector('#submitField');
let userInput = document.querySelector('#guessField')
let gasSlot = document.querySelector('#guesses')
let remianing = document.querySelector('#guessRemaining')
let lowOrHi = document.querySelector('#lowOrHi')
let startOver = document.querySelector('.result')

let p = document.createElement('p')
let preGuess = []
let numGuesses = 1;

let playGames = true;


if(playGames){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a number more then 1')
    }
    else if(guess>100)
    {
        alert('Please enter a number less then 100')
    }
    else{
        preGuess.push(guess);
        if(numGuesses===11){
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}
 
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage(`Number is tooo low!`);
    }
    else if(guess>randomNumber){
        displayMessage(`Number is tooo high!`)
    }
}


function displayGuess(guess){
    userInput.value = '';
    gasSlot.innerHTML +=`${guess}, `;
    numGuesses++;
    remianing.innerHTML=`Guesses remaining : ${11-numGuesses}`
}


function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
   userInput.value='';
   userInput.setAttribute('disabled','');
   p.classList.add('button')
   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
   startOver.appendChild(p);
   playGames=false;
   newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt((Math.random()*100)+1);
    preGuess = [];
    numGuesses = 1;
    gasSlot.innerHTML='';
    remianing.innerHTML=`${11-numGuesses}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGames=true
  });

}