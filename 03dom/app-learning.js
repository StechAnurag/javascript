/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*----Defining the global game variables----*/

var score, roundScore, activePlayer, gamePlayingState;

gameInit();
/*---Learning---
// changing the html content
document.querySelector('#current-'+activePlayer).innerHTML = '<b>' + dice + '</b>';

// getting the text content rather than setting the text content
var x = document.querySelector('#current-'+activePlayer).textContent;
console.log(x);

// accessing css property
document.querySelector('.dice').style.display = 'none';
---*/

// Roll the dice event-callback function

document.querySelector('.btn-roll').addEventListener('click', function(){
   if(gamePlayingState){
      // 1. Random Number
      var dice = Math.floor( Math.random()*6 ) + 1; //generate a random number btw 1-6

      //display the result
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';

      //update the round score IF the rolled number is not a 1.
      if(dice !== 1){
         // Add to round score
         roundScore += dice;
         document.getElementById('current-'+activePlayer).textContent = roundScore;
      }else{
         //Next player turn
         nextPlayer();
      }
   }
});


// Hold the score function

document.querySelector('.btn-hold').addEventListener('click', function(){
   if(gamePlayingState){
      // Add the ROUND score to GLOBAL Score
      score[activePlayer] += roundScore;

      // update the UI with GLOBAL score
      document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];

      // check if player Won the game
      if(score[activePlayer] >= 20){
         // Declare him a winner
         document.getElementById('name-'+activePlayer).textContent = 'WINNER';
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
         // hide the dice to let the next player begin
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
         
         // set gamePlaying to false
         gamePlayingState = false;
      }else{
         //next player turn
         nextPlayer();
      }
   }
});

// New Game start
document.querySelector('.btn-new').addEventListener('click', gameInit);


function nextPlayer(){
   activePlayer === 0 ? activePlayer = 1 :  activePlayer = 0;
      roundScore = 0;
      
   // Set the round socres to zero
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';

   // change the view of active player
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');

   // hide the dice to let the next player begin
   document.querySelector('.dice').style.display = 'none';
}


function gameInit(){
   score = [0,0];
   roundScore = 0;
   activePlayer = 0;
   gamePlayingState = true;

   document.querySelector('.dice').style.display = 'none';
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';
   document.getElementById('score-0').textContent = '0';
   document.getElementById('score-1').textContent = '0';
   document.getElementById('name-0').textContent = 'PLAYER 1';
   document.getElementById('name-1').textContent = 'PLAYER 2';

   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   
   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-1-panel').classList.remove('active');
   
   document.querySelector('.player-0-panel').classList.add('active');
}
















