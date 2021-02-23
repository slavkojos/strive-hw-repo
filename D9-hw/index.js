const bingoBody = document.getElementById("bingo-body");
const pickButton = document.getElementById("pick-button");

const pickedNumbers = [];
window.onload = () => {
  for (let i = 0; i < 75; i++) {
    const bingoField = document.createElement("h4");
    bingoBody.appendChild(bingoField);
    bingoField.classList.add("bingo-field", "mx-1");
    bingoField.innerText = i + 1;
    pickButton.style.visibility = "hidden";
  }
};
let isMuted = false;
function playAudio() {
  const audio = new Audio("ding.mp3");
  audio.volume = 0.1;
  if (isMuted === false) {
    audio.play();
  }
}

let duplicateCounter = 0;
let pickedNumber = 0;
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
      pickedNumber = randomNumber;
      bingoField[randomNumber - 1].classList.add("selected-number");
    }
  } else {
    alert("All numbers have been picked!");
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * (75 - 1 + 1)) + 1;
}
pickButton.addEventListener("click", function () {
  pickNumber();
  checkBoards();
});

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

let playersArray = [];
const playerBingoBoardSize = 8;
function generateUserBoards() {
  howManyPlayersContainer.style.display = "none";
  pickButton.style.visibility = "visible";
  const userBoardsRow = document.getElementById("user-boards-row");
  for (let i = 0; i < parseInt(spanCounter.innerText); i++) {
    const playerData = {
      bingoNumbers: [],
      score: 0,
    };
    playersArray.push(playerData);
    playersArray[i].playerName = i + 1;
    console.log("playersArray", playersArray[i].bingoNumbers);
    const playerColumn = document.createElement("div");
    userBoardsRow.appendChild(playerColumn);
    userBoardsRow.classList.add("gx-5", "row-cols-4");
    playerColumn.classList.add("col", "px-4");
    const playerTable = document.createElement("table");
    playerTable.setAttribute(`id`, `table${i + 1}`);
    playerColumn.appendChild(playerTable);
    playerTable.classList.add("table", "table-striped");
    const thead = document.createElement("thead");
    playerTable.appendChild(thead);
    const headerRow = document.createElement("tr");
    thead.appendChild(headerRow);
    const th = document.createElement("th");
    headerRow.appendChild(th);
    th.setAttribute("scope", "col");
    th.classList.add("fs-3", "text-center");
    th.innerText = `Player ${i + 1}`;
    const tbody = document.createElement("tbody");
    playerTable.appendChild(tbody);
    const bodyRow = document.createElement("tr");
    tbody.appendChild(bodyRow);
    bodyRow.classList.add("row");
    for (let j = 0; j < playerBingoBoardSize; j++) {
      const td = document.createElement("td");
      bodyRow.appendChild(td);
      td.classList.add("col", "col-3", "border", "p-0", "text-center", "fs-4");
      let randomNumber = generateRandomNumber();
      while (playersArray[i].bingoNumbers.includes(randomNumber)) {
        console.log(`${randomNumber} already exists`);
        randomNumber = generateRandomNumber();
      }
      console.log("pushed", randomNumber);
      playersArray[i].bingoNumbers.push(randomNumber);
      td.innerText = randomNumber;
    }
    console.log("after j", playersArray);
  }
}

function checkIfWinner(playerIndex) {
  if (playersArray[playerIndex].score === playerBingoBoardSize) {
    pickButton.style.visibility = "hidden";
    const audio = new Audio("bingo.mp3");
    audio.play();
    //alert(`winner is ${playersArray[playerIndex].playerName}`);
    const winnerMessage = document.createElement("h1");
    userBoards.appendChild(winnerMessage);
    winnerMessage.innerText = `Congratulations to player ${playersArray[playerIndex].playerName}!`;
    winnerMessage.classList.add("fs-1", "text-uppercase", "fw-bold", "m-4");
  }
}

function checkBoards() {
  for (let i = 0; i < parseInt(spanCounter.innerText); i++) {
    if (playersArray[i].bingoNumbers.includes(pickedNumber)) {
      console.log("SCORE + TO PLAYER", playersArray[i].playerName);
      playersArray[i].score++;
      const table = document.getElementsByTagName("table");
      for (let j = 0; j < playerBingoBoardSize; j++) {
        if (parseInt(table[i].childNodes[1].childNodes[0].childNodes[j].innerText) === pickedNumber) {
          table[i].childNodes[1].childNodes[0].childNodes[j].classList.add("bg-success", "text-white");
        }
      }

      console.log("td-inner", table[i].childNodes[1].childNodes[0].childNodes[0].innerText);
    }

    checkIfWinner(i);
  }
}

const muteButton = document.getElementById("mute");
const muteSvg = document.getElementById("mute-svg");
const unmuteSvg = document.getElementById("unmute-svg");

muteButton.addEventListener("click", function () {
  muteSvg.classList.toggle("d-none");
  unmuteSvg.classList.toggle("d-none");
  isMuted === false ? (isMuted = true) : (isMuted = false);
});
