// The list where guessed letters will appear
const guessedLettersElement = document.querySelector(".guessed-letters");
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
// Empty array to contain the letters the player guesses
const guessedLetters = [];


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
    //console.log(guess);
    letterInput.value = "";
    message.innerText = "";
    const guessInput = validateInput(guess);
    //console.log(guessInput);

    if (guessInput) {
        makeGuess(guess);
    }
});

// validate the player's input
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        // Is the input empty?
       message.innerText = "Please enter a letter."; 
    } else if (input.length > 1) {
        // Did you type more than one letter?
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        // Did you type a number, a special character or some other non letter thing?
        message.innerText = "Please enter a letter from A - Z";
    } else {
        return input;
    }
};

//function to capture input
const makeGuess = function (letter) {
    letter = letter.toUpperCase();
    if (guessedLetters.includes(letter)) {
        message.innerText = "Oops! You've already guessed this letter. Try Again!";
    } else {
        guessedLetters.push(letter);
        console.log(guessedLetters);
    }
};