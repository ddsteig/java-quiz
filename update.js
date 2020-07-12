var startBtn = document.querySelector(".btn");
var jumboTron = document.querySelector(".jumbo1");

// Start button with a click event
startBtn.addEventListener("click", function () {

    updateDisplay();

}
);

// Function that updates display when game starts
function updateDisplay() {

    var jumboQuiz = document.createElement("div")
    jumboQuiz.className = "jumbotron quiz"

    var questionDiv = document.createElement("div")
    questionDiv.className = "question-div"
    questionDiv.setAttribute("id", "questions")


    var breakPoint = document.createElement("hr")


    var answerDiv = document.createElement("div")
    answerDiv.className = "answer-div"
    answerDiv.setAttribute("id", "answers")


    answerDiv.innerHTML += "<br>"
    answerDiv.innerHTML += "<div class='answer-text btn' data-number='1' id='answer1'>"
    answerDiv.innerHTML += "<br>"
    answerDiv.innerHTML += "<div class='answer-text btn' data-number='2' id='answer2'>"
    answerDiv.innerHTML += "<br>"
    answerDiv.innerHTML += "<div class='answer-text btn' data-number='3' id='answer3'>"
    answerDiv.innerHTML += "<br>"

    var timeRemaning = document.createElement("div")
    timeRemaning.setAttribute("id", "time")

    jumboQuiz.appendChild(questionDiv)
    jumboQuiz.appendChild(answerDiv)
    jumboQuiz.appendChild(breakPoint)
    jumboQuiz.appendChild(timeRemaning)

    jumboTron.replaceWith(jumboQuiz)

    startGame();
    startTimer();
}