var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var userGuessText = document.getElementById("userGuess");
var guessesLeftText = document.getElementById("guessesLeft");
var lettersGuessed = [];
var computerGuess = [];

var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();

    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" ||
        userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" ||
        userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" ||
        userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" ||
        userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" ||
        userGuess === "z") {
        if (userGuess === computerGuess) {
            alert("Your guess of " + userGuess + " is correct!");
            wins++;
            computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
            guessesLeft = 9;

        } else {
            guessesLeft--;

            if (guessesLeft === 0) {
                alert("You're out of guesses!");
                losses++;
                computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
                guessesLeft = 9;

            }


        }


    }



    directionsText.textContent = "";
    winsText.textContent = wins;
    lossesText.textContent = losses;
    userGuessText.textContent = userGuess;
    guessesLeftText.textContent = guessesLeft;
}
