// The list where guessed letters will appear
const guessedLetters = document.querySelector(".guessed-letters");
// Button: Guess
const button = document.querySelector(".guess");
// Text input where the player will guess a letter
const letterInput = document.querySelector(".letter");
// Empty paragraph where the word in progress appears
const wordInProgress = document.querySelector(".word-in-progress");
// Paragraph where remaining guesses will display
const remaining = document.querySelector(".remaining");
// Span inside remaining guesses paragraph
const spanRemaining = document.querySelector("span");
// Empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");
// Hidden button: play again prompt
const playAgainButton = document.querySelector(".play-again");
// Starting word to test game
const word = "magnolia";

// Display symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
    const placeholderLetter = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetter.push("●");
    }
    wordInProgress.innerText = placeholderLetter.join("");
};

placeholder(word);

button.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});