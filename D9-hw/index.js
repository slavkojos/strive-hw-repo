const bingoBody = document.getElementById("bingo-body");
const pickButton = document.getElementById("pick-button");

const pickedNumbers = [];
window.onload = () => {
  for (let i = 0; i < 75; i++) {
    const bingoField = document.createElement("h4");
    bingoBody.appendChild(bingoField);
    bingoField.classList.add("bingo-field", "mx-1");
    bingoField.innerText = i + 1;
  }
};
function playAudio() {
  const audio = new Audio("ding.mp3");
  audio.volume = 0.2;
  audio.play();
}

let duplicateCounter = 0;
function pickNumber() {
  const bingoField = document.getElementsByClassName("bingo-field");
  if (pickedNumbers.length < 75) {
    const randomNumber = generateRandomNumber();
    //pickedNumbers.push(randomNumber)
    for (let j = 0; j < pickedNumbers.length; j++) {
      console.log("ok");
      if (pickedNumbers[j] === randomNumber && pickedNumbers.length > 1) {
        duplicateCounter++;
      }
    }
    if (duplicateCounter > 0) {
      console.log("duplicate number");
      duplicateCounter = 0;
      pickNumber();
    } else {
      playAudio();
      console.log("picked number", randomNumber);
      pickedNumbers.push(randomNumber);
      bingoField[randomNumber - 1].classList.add("selected-number");
    }
  } else {
    alert("All numbers have been picked!");
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * (75 - 1 + 1)) + 1;
}
pickButton.addEventListener("click", pickNumber);

// code for starting game and generating user boards

//player counter
const howManyPlayersContainer = document.getElementById("player-counter");
const spanCounter = document.getElementById("span-counter");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const startGameButton = document.getElementById("generate");
function handleCounter(event) {
  if (event.target.id === "subtract") {
    spanCounter.innerText = parseInt(spanCounter.innerText) - 1;
  } else if (event.target.id === "add") {
    spanCounter.innerText = parseInt(spanCounter.innerText) + 1;
  }
  if (parseInt(spanCounter.innerText) < 3) {
    subtractButton.style.visibility = "hidden";
  } else {
    subtractButton.style.visibility = "visible";
  }
  if (parseInt(spanCounter.innerText) >= 10) {
    addButton.style.visibility = "hidden";
  } else {
    addButton.style.visibility = "visible";
  }
}
const startGame = document.getElementById("generate");

addButton.addEventListener("click", handleCounter);
subtractButton.addEventListener("click", handleCounter);
startGameButton.addEventListener("click", generateUserBoards);

const userBoards = document.getElementById("user-boards");

function generateUserBoards() {
  console.log(spanCounter.innerText);
  howManyPlayersContainer.style.display = "none";
  const userBoardsRow = document.getElementById("user-boards-row");
}
