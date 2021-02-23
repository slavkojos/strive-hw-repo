const bingoBody = document.getElementById("bingo-body");
const pickButton = document.getElementById("pick-button");

const pickedNumbers = [];
window.onload = () => {
  for (let i = 0; i < 75; i++) {
    console.log("hey");
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
const pickNumber = () => {
  const bingoField = document.getElementsByClassName("bingo-field");
  if (pickedNumbers.length < 75) {
    console.log("hello");
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
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * (75 - 1 + 1)) + 1;
};
pickButton.addEventListener("click", pickNumber);
