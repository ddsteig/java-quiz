var div = document.querySelector(".card");
var startBtn = document.querySelector(".btn");
var jumboTron = document.querySelector(".jumbo1")


// Quiz Questions & Answers.... possible object / array
// Decide how many questions

const trivia = [
    {
        question: "What does the fox say?",
        answers: ["1", "2", "3", "4"], correctAnswer: 1
    }

]



// Start button with a click event
// Run quiz function


startBtn.addEventListener("click", function () {
    
    updateDisplay();
}
);

function startGame() {
    

}

// Timed Quiz... function
    // Timer counts down

var secondsLeft = 90;

function setTimer() {

    var countdown = setInterval(function () {
        secondsLeft--;
        timerElement.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || questionNumber === questions.length) {
            clearInterval(countdown);
                   }
    }, 1000);
}

//Click event for answer buttons
// If question is answered wrong, return wrong, deduct time and move to next question
// Else return correct & move to next question
//If timer is <=0 or questions left < 1 then end.

let questionIndex = 0;


function checkAnswer() {
    // if {"answer"+userInput+keyCode+1().toLowerCase() === trivia[questionIndex].correctAnswer}
    // then right else wrong

}

function getNextQuestion() {


}

// addEventListener

function listenForAnswer() {
    // call checkAnswer
if (answer) {
// Return Correct &
getNextQuestion();    
} else {
    // Return Wrong, -5 seconds &
    getNextQuestion();
}
}

// Function that updates display in card via javascript

function updateDisplay() {

var jumboQuiz = document.createElement("div")
jumboQuiz.className = "jumbotron quiz"

var questionDiv = document.createElement("div")
questionDiv.className = "questionDiv"
var breakPoint = document.createElement("hr")
var answerDiv = document.createElement("div")
answerDiv.className = "answerDiv"


var questionTxt = document.createTextNode("Question:")
var answerTxt = document.createTextNode("Answer:")

questionDiv.appendChild(questionTxt)
answerDiv.appendChild(answerTxt)

jumboQuiz.appendChild(questionDiv)
jumboQuiz.appendChild(breakPoint)
jumboQuiz.appendChild(answerDiv)
jumboTron.replaceWith(jumboQuiz)

}

// Score... stylized box with input
// Input for name + display score... prevent default possibly used here
//High score display

