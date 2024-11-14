// GLOBAL VARIABLES
// List where the player's guessed letters appear
const guessedLetters = document.querySelector(".guessed-letters");
// Guess button
const button = document.querySelector(".guess");
// Input where player will guess a letter
const input = document.querySelector(".letter");
// Paragraph for word in progress to appear
const wordInProgress = document.querySelector(".word-in-progress");
// Paragraph where remaining guesses will display
const remainingGuesses = document.querySelector(".remaining");
// Span inside remaining guesses paragraph
const remainingGuessSpan = document.querySelector("span");
// Paragraph for messages to player when letter is guessed
const messages = document.querySelector(".message");
// Hidden button play again prompt
const playAgainButton = document.querySelector(".play-again");
// Starting word to test out game
const word = "magnolia";

// Function to add placeholder's for each letter
const letterPlaceholders = function (word) {
    const letterArray = [];
    
    for (const letter of word) {
        console.log(letter);
        letterArray.push("●");
    }
    wordInProgress.innerText = letterArray.join("");
};

letterPlaceholders(word);

// Add event listener for the Button
button.addEventListener("click", function (e) {
    e.preventDefault();

    const captureInput = input.value;
    console.log(captureInput);
    input.value = "";
});