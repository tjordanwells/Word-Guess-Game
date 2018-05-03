var computerOptions = [
    "Dale Cooper",
    "Audrey Horne",
    "The Log Lady",
    "The Black Lodge",
    "One Eyed Jacks"
];

var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var currentWord = {
    dale: "_ _ _ _  _ _ _ _ _ _",
    audrey: "_ _ _ _ _ _  _ _ _ _ _",
    logLady: "_ _ _  _ _ _  _ _ _ _",
    blackLodge: "_ _ _  _ _ _ _ _  _ _ _ _ _",
    oneEyedJacks: "_ _ _  _ _ _ _  _ _ _ _ _"
};

var wins = 0;
var guessesRemaining = 10;
var answer = [];
var lettersGuessed = [];

var computerGuess = computerOptions(Math.floor(Math.random() * computerOptions.length));

console.log(computerGuess);

