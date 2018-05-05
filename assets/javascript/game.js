var character = [
    "cooper",
    "audrey",
    "owls",
    "laura",
    "coffee",
    "pie"
];

var answer = character[Math.floor(Math.random() * character.length)];

var characterBlank = [];
for (i =0; i < character.length; i++) {
    characterBlank[i] = " _ ";
}

var remainingLetters = answer.length;

var wins = 0;    
var guessesRemaining = 10;
var lettersGuessed = [];


document.onkeyup = function(event) {
    var userGuess = event.key;

    var html = 
        "<p>Wins: " + wins + "</p>" +
        "<p>Current Word: " + characterBlank + "</p>" +
        "<p>Guesses Left: " + guessesRemaining + "</p>" +
        "<p>Letters Guessed: " + lettersGuessed + "</p>";

    document.querySelector("#game").innerHTML = html;
        
}


