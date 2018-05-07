var character = [
    "cooper",
    "audrey",
    "owls",
    "laura",
    "coffee",
    "pie"
];

var answer = character[Math.floor(Math.random() * character.length)];

console.log(answer);

var characterBlank = [];
for (i = 0; i < answer.length; i++) {
    characterBlank[i] = " _ ";
}

var wins = 0;
var guessesRemaining = 10;
var lettersGuessed = [];


document.onkeyup = function (event) {
    var userGuess = event.key;

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("current word").innerHTML = characterBlank;
    document.getElementById("guesses left").innerHTML = guessesRemaining;
    document.getElementById("letters guessed").innerHTML = lettersGuessed;

    if (answer === "audrey") {
        if (userGuess === "a") {
            characterBlank.replace(characterBlank, "a _ _ _ _ _");
        }
    }

    if (answer === "cooper") {

    }

    if (answer === "owls") {

    }

    if (answer === "laura") {

    }

    if (answer === "coffee") {

    }

    if (answer === "pie") {

    }

}