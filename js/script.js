// GLOBAL VARIABLES
// List where the player's guessed letters appear
const guessedLettersElement = document.querySelector(".guessed-letters");
// Guess button
const button = document.querySelector(".guess");
// Input where player will guess a letter
const letterInput = document.querySelector(".letter");
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
// Array to contain all the letters guessed
const guessedLetters = [];

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

    messages.innerText = "";

    const guess = letterInput.value;
    
    const goodGuess = validateInput(guess);

    if (goodGuess) {
    makeGuess(guess);
    }

    letterInput.value = "";
});

// Function to check player's input
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0) {
        messages.innerText = `Please enter a letter.`;
    } else if (input.length > 1) {
        messages.innerText = `Please enter a single letter.`;
    } else if (!input.match(acceptedLetter)) {
        messages.innerText = `Please enter a letter from A to Z.`;
    } else {
        return input;
    }
};

// Function to capture input
const makeGuess = function (letter) {
    letter = letter.toUpperCase();

    if (guessedLetters.includes(letter)) {
        messages.innerText = `You already guessed that letter, silly. Try again.`;
    } else {
        guessedLetters.push(letter);
        console.log(guessedLetters);

        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

// Function to show the guessed letters
const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";

    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

// Function to update word in progress
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    //console.log(wordArray);
    const revealWord = [];

    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
        revealWord.push("●");
        }
    }
     wordInProgress.innerText = revealWord.join("");
    
     playerWon();
};

// Function to check is player won
const playerWon = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        messages.classList.add("win");
        messages.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
};