let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it Right";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong !";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "last guess was too low";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "last guess was too high!";
    }
  }
  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start New Game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  let resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 20) + 1;
}

const button = document.querySelector("#btn");
const paragraph = document.querySelector("#para");

button.addEventListener(
  "click",
  (updateButton = () => {
    if (button.textContent === "Start Machine") {
      button.textContent = "Stop Machine";
      paragraph.textContent = "The Machine is started";
    } else {
      button.textContent = "Start Machine";
      paragraph.textContent = "The machine is stopped";
    }
  })
);
const greetingBtn = document.querySelector("#greetingBtn");
const greetingPara = document.querySelector("#greeting");

greetingBtn.addEventListener(
  "click",
  (welcomeUser = () => {
    const name = prompt("Whats your Name?");
    alert(`Hello ${name}`);
    greetingPara.textContent = `${name}, Welcome its great to see you`;
  })
);
