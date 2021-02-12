const quizData = [{
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What does GHz stand for?",
    "correct_answer": "Gigahertz",
    "incorrect_answers": ["Gigahotz", "Gigahetz", "Gigahatz"]
}, {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "HTML is what type of language?",
    "correct_answer": "Markup Language",
    "incorrect_answers": ["Macro Language", "Programming Language", "Scripting Language"]
}, {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What amount of bits commonly equals one byte?",
    "correct_answer": "8",
    "incorrect_answers": ["1", "2", "64"]
}, {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which computer hardware device provides an interface for all other connected devices to communicate?",
    "correct_answer": "Motherboard",
    "incorrect_answers": ["Central Processing Unit", "Hard Disk Drive", "Random Access Memory"]
}, {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "easy",
    "question": "Ada Lovelace is often considered the first computer programmer.",
    "correct_answer": "True",
    "incorrect_answers": ["False"]
}, {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "On Twitter, what is the character limit for a Tweet?",
    "correct_answer": "140",
    "incorrect_answers": ["120", "160", "100"]
}, {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which computer language would you associate Django framework with?",
    "correct_answer": "Python",
    "incorrect_answers": ["C#", "C++", "Java"]
}, {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "easy",
    "question": "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    "correct_answer": "False",
    "incorrect_answers": ["True"]
}, {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "This mobile OS held the largest market share in 2012.",
    "correct_answer": "iOS",
    "incorrect_answers": ["Android", "BlackBerry", "Symbian"]
}, {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which programming language shares its name with an island in Indonesia?",
    "correct_answer": "Java",
    "incorrect_answers": ["Python", "C", "Jakarta"]
}]



const questionTitle = document.getElementById("question") //title of the question
const options = document.getElementById("options") //answers container
const quizDescription = document.querySelector(".card-text") // quiz category
quizDescription.innerText = `Category: ${quizData[0].category}` //this is found in the original array


let questionNumber = 0 //used for identifying question number
let answers = []; //array for storing answers

function loadQuestion() {
    questionTitle.innerText = quizData[questionNumber]["question"] //title of the question

    for (let i = 0; i < quizData[questionNumber].incorrect_answers.length; i++) { //for loop for pushing incorrect answers
        answers.push(quizData[questionNumber].incorrect_answers[i])
    }
    answers.push(quizData[questionNumber].correct_answer) //push the correct answer
    shuffleAnswers(answers); //randomize the order of answers so the correct answer doesn't finish always as last option
    for (let i = 0; i < answers.length; i++) { //For loop for creating answers.length buttons (answer options)
        const answerButton = document.createElement("button"); //create element button
        options.appendChild(answerButton) //append it to answers container
        answerButton.classList.add("btn", "btn-outline-dark", "answer-butons", "mx-2", "my-3", "d-block", "text-center", "m-auto", "fw-bolder", "px-3") //just some bootstrap classes to help style it
        answerButton.innerText = answers[i]; //add the text from answers array
        answerButton.addEventListener("click", checkAnswer) //add to each button event listener to listen for clicks, if triggered call checkanswer()
    }
    console.log(answers);
}

window.onload = loadQuestion(); //when page loads call the first question

function shuffleAnswers(array) { //just a function to shuffle elements of an array, found on stackoverflow
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

function loadNextQuestion() { // once we click on button NEXT QUESTION
    options.innerHTML = "" //delete all buttons from previous question
    if (questionNumber < quizData.length - 1) { //check to see if we reached the end of quiz
        console.log("time for new question");
        answers = []; //delete all the answers from previous question
        questionNumber++; //incerement to next question
        loadQuestion(); //call this fucntion to load the question title and question options
    } else { //if the quiz has ended
        const yay = new Audio("yay.mp3") //sound controls
        yay.volume = 0.6;
        yay.playbackRate = 1.5
        yay.play()
        confetti({ //confetti is a external script which is linked in HTML, but is actually a NPM package https://www.npmjs.com/package/canvas-confetti
            spread: 500,
            particleCount: 2000
        });
        questionTitle.innerText = `You have ${totalScore} correct answers out of ${quizData.length}` //display the user the accuracy of his answers

    }
}

let totalScore = 0; //variable for counting score

function checkAnswer(event) { //function for handling correct and wrong answer
    for (let i = 0; i < event.target.parentNode.childNodes.length; i++) { //for loop for removing event listeners for all children (buttons) 
        event.target.parentNode.childNodes[i].removeEventListener("click", checkAnswer) //Prevent user from selecting buttons after picking one
    }
    if (event.target.innerText === quizData[questionNumber].correct_answer) { //check if the selected button innerText matches the correct answer from origial array
        const correct = new Audio("Noice.mp3")
        correct.volume = 0.6;
        correct.playbackRate = 1.5
        correct.play();
        console.log("correct!");
        totalScore++; //increment user score
        event.target.classList.add("correct") // add this class to color the button green , correct and wrong classes are defined in css file
    } else { //if the selected answer is wrong
        const wrong = new Audio("wrong.mp3")
        wrong.volume = 0.6;
        wrong.playbackRate = 1.5
        wrong.play();
        event.target.classList.add("wrong") //color the button red
    }
    const nextButton = document.createElement("button"); //after the user has chosen an answer, display the NEXT QUESTION button
    options.appendChild(nextButton) //append it to same container as the answers
    nextButton.classList.add("btn", "btn-outline-dark", "next-button", "mx-2", "my-3", "d-block", "text-center", "m-auto", "fw-bolder", "px-3", "btn-primary") //just some bootstrap classes for styling
    nextButton.addEventListener("click", loadNextQuestion) //add the event listener to load next question when clicked
}