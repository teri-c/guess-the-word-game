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
let word = "magnolia";
// Empty array to contain the letters the player guesses
const guessedLetters = [];
// Number of guesses left
let remainingGuesses = 8;

// async function 

const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    //console.log(words);
    const wordArray = words.split("\n");
    console.log(wordArray);

    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholder(word);
};

getWord();


// Display symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
    const placeholderLetter = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetter.push("●");
    }
    wordInProgress.innerText = placeholderLetter.join("");
};

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
        displayGuessedLetters();
        countRemainingGuesses(letter);
        updateWordInProgress(guessedLetters);
    }
};

// Function to show guessed letters
const displayGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

// Function to Update word in progress
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
    //console.log(revealWord);
    wordInProgress.innerText = revealWord.join("");
    checkIfWon();
};

// Function to count remaining guesses
const countRemainingGuesses = function (guess) {
    const upperWord = word.toUpperCase(); 
    if (!upperWord.includes(guess)) {
        // bad guess, lose a chance
        message.innerText = `Sorry, the word does not contain ${guess}.`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `Yay! The word has the letter ${guess}.`;
    }

    if (remainingGuesses === 0) {
        message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
    } else if (remainingGuesses === 1) {
        spanRemaining.innerText = `${remainingGuesses} guess`;
    } else {
        spanRemaining.innerText = `${remainingGuesses} guess`;
    }
};

// Function to check if the player has won
const checkIfWon = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
};


