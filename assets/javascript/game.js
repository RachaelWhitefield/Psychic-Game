var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var userGuessText = document.getElementById("userGuess");

document.onkeyup= function(event) {
    var userGuess = event.key.toLowerCase();
    var computerGuess = computerOptions [Math.floor(Math.random() * computerOptions.length)];
}
