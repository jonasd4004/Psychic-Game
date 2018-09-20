// Creating variables and starting counters from zero
var wins = 0;
var losses = 0;
var guesses = 10;
var incorrectLetters = [];


var computerChoice = randomLetter();
console.log(computerChoice);

document.onkeypress = function(event) {
    var userGuess = event.key;

    //determine if user guessed correctly
    var won = determineWin(userGuess);

    if (won) {
        updateWins();
        resetGame();
    } else {
        updateGuesses(userGuess);
    }

    // actually updates the DOM;
    updateDisplay();
}

function determineWin(guess){
    return guess == computerChoice;
}

function updateWins(){
    wins++;
}

function resetGame(){
    guesses = 10;
    computerChoice = randomLetter();
    incorrectLetters = [];
    console.log(computerChoice);
}

// returns a random letter
function randomLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return  letters[Math.floor(Math.random() * letters.length)];
}

function updateGuesses(guess) {
    guesses--;
    incorrectLetters.push(guess);
    if (incorrectLetters.length == 10){

        losses++;
        resetGame();
    }
}

function updateDisplay(){
    document.getElementById("totalWins").innerHTML = "wins: " + wins;
    document.getElementById("totalLosses").innerHTML = "losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guesses;
    document.getElementById("lettersGuessed").innerHTML = "Guessed letters: " + incorrectLetters;
}