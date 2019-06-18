/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*----Defining the global game variables----*/

var score, roundScore, activePlayer, gamePlayingState, lastDice;

gameInit();

// Roll the dice event-callback function
document.querySelector('.btn-roll').addEventListener('click', function(){
   if(gamePlayingState){
      // 1. Random Number
      var dice1 = Math.floor( Math.random()*6 ) + 1;
      var dice2 = Math.floor( Math.random()*6 ) + 1; 

      //2. Display the result
      document.getElementById('dice-1').style.display = 'block';
      document.getElementById('dice-2').style.display = 'block';
      document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
      document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

      //update the round score IF the rolled number is not 1.
//=========challenge 1 ================
      /*if(dice === 6 && lastDice === 6){
         // looses his global score 
         score[activePlayer] = 0;
         document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
         nextPlayer(); //next player turn
      }else if(dice !== 1){
         // Add to round score
         roundScore += dice;
         document.getElementById('current-'+activePlayer).textContent = roundScore;
      }else{
         //Next player turn
         nextPlayer();
      }
      lastDice = dice;*/
      
//========Challange 3==============      
      if(dice1 !== 1 && dice2 !== 1){
         // Add to round score
         roundScore += dice1 + dice2;
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
//===========================challange 2=============
      var input = document.querySelector('.final-score').value;
      //console.log(input);
//      var winningScore;
//      if(input){
//         winningScore = input;
//      }else{
//         winningScore = 100;
//      }
      // check if player Won the game
      if(input ? score[activePlayer]>= input : score[activePlayer] >=100){
         // Declare him a winner
         document.getElementById('name-'+activePlayer).textContent = 'WINNER';
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
         // hide the dice to let the next player begin
         document.getElementById('dice-1').style.display = 'none';
         document.getElementById('dice-2').style.display = 'none';
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
   document.getElementById('dice-1').style.display = 'none';
   document.getElementById('dice-2').style.display = 'none';
}


function gameInit(){
   score = [0,0];
   roundScore = 0;
   activePlayer = 0;
   gamePlayingState = true;

   document.getElementById('dice-1').style.display = 'none';
   document.getElementById('dice-2').style.display = 'none';
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






/*
3 CHALLANGES

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that,  it's the next player's turn. (Hint : Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winnig score, so that they can change the predefined score of 100. 

3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. 

*/
