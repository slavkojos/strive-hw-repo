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
const questionTitle = document.getElementById("question")
const options = document.getElementById("options")
const quizDescription = document.querySelector(".card-text")
console.log(quizData[0].category)
quizDescription.innerText = `Category: ${quizData[0].category}`


let questionNumber = 0
let answers = [];
function loadQuestion() {
    questionTitle.innerText=quizData[questionNumber]["question"]
    
    for (let i = 0; i < quizData[questionNumber].incorrect_answers.length; i++) {
        answers.push(quizData[questionNumber].incorrect_answers[i])
    }
    answers.push(quizData[questionNumber].correct_answer)
    shuffleAnswers(answers);
    for (let i = 0; i < answers.length; i++) {
        console.log("hello",i);
        const answerButton = document.createElement("button");
        options.appendChild(answerButton)
        answerButton.classList.add("btn","btn-outline-dark","answer-butons","mx-2","my-3" ,"d-block","text-center","m-auto","fw-bolder","px-3")
        answerButton.innerText=answers[i];
        answerButton.addEventListener("click",checkAnswer)
    }
    console.log(answers);
}

window.onload=loadQuestion();

function shuffleAnswers(array) {
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
}

function loadNextQuestion() {
    if (questionNumber < quizData.length-1) {
        console.log("time for new question");
        answers = [];
        options.innerHTML=""
        questionNumber++;
        loadQuestion();
    } else  {
        questionTitle.innerText=`You have ${totalScore} correct answers out of ${quizData.length}`
        options.innerHTML=""
    }   
}

let totalScore = 0;
function checkAnswer(event) {
    console.log("ok",event.target.parentNode.childNodes)
    for (let i=1;i<event.target.parentNode.childNodes.length;i++) {
        event.target.parentNode.childNodes[i].removeEventListener("click",checkAnswer)
        
    }
    
    console.log(event.target.innerText);
    if (event.target.innerText === quizData[questionNumber].correct_answer) {
        const correct = new Audio ("Noice.mp3")
        correct.volume=0.6;
        correct.play();
        console.log("correct!");
        totalScore++;
        event.target.classList.add("correct")
    } else {
        const wrong = new Audio ("wrong.mp3")
        wrong.volume=0.6;
        wrong.play();
        event.target.classList.add("wrong")
    }
    const nextButton = document.createElement("button");
    options.appendChild(nextButton)
    nextButton.classList.add("btn","btn-outline-dark","next-button","mx-2","my-3" ,"d-block","text-center","m-auto","fw-bolder","px-3","btn-primary")
    nextButton.innerText = "NEXT QUESTION"
    nextButton.addEventListener("click",loadNextQuestion)
}



