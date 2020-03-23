let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
	return Math.floor(Math.random()*10)
}
function compareGuesses(humanGuess,computerGuess,secretGuess){
	return(Math.abs(humanGuess-secretGuess)<=Math.abs(computerGuess-secretGuess))?true:false
}
function updateScore(winner){
    if(winner==='human')
    	humanScore++
    else
    	computerScore++
}
function advanceRound(){
	currentRoundNumber++
}