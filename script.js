
// Runs the quiz, most of the functions had to be nested in this function due to how I originally started building it.

function startGame() {
    event.preventDefault();

    var clear1 = document.querySelector("#answer1");
    var clear2 = document.querySelector("#answer2");
    var clear3 = document.querySelector("#answer3");

    // Object used to hold questions and answers.

    let trivia = [
        {
            question: "How do you write 'Hello World' in an alert box?",
            choice1: "alert('Hello World');",
            choice2: "msg('Hello World');",
            choice3: "alertBox('Hello World');",
            correctAnswer: 1
        },
        {
            question: "Inside which HTML element do we put the JavaScript??",
            choice1: "<javascript>",
            choice2: "<script>",
            choice3: "<js>",
            correctAnswer: 2
        },
        {
            question: "Which of the following function of String object would compare a regular expression with a string?",
            choice1: "concat()",
            choice2: "search()",
            choice3: "match()",
            correctAnswer: 3
        },
        {
            question: "What is the function of Array object that adds and/or removes elements from an array?",
            choice1: "splice()",
            choice2: "sort()",
            choice3: "unshift()",
            correctAnswer: 1
        },
        {
            question: "What is the function of Array object that runs through each element of the array?",
            choice1: "filter()",
            choice2: "forEach()",
            choice3: "every()",
            correctAnswer: 2
        },
        {
            question: "Which of the following will return the type of the arguments passed to a function?",
            choice1: "None",
            choice2: "using getType function",
            choice3: "using typeof operator",
            correctAnswer: 3
        },
        {
            question: "Which of the following function of String object produces an HTML hypertext link for requesting another URL?",
            choice1: "link()",
            choice2: "sub()",
            choice3: "push()",
            correctAnswer: 1
        },
        {
            question: "Which of the following function of String object returns the capitalized string while respecting the current locale?",
            choice1: "toUpperCase()",
            choice2: "toLocaleUpperCase()",
            choice3: "toString()",
            correctAnswer: 2
        }
    ]

    // Variables defined in the the startGame function due to scope issues with other funcions.

    let currentQuestion = {};
    let questionCounter = 0;
    let availableQuestions = [...trivia];
    let score = 0;
    let acceptingAnswers = false;
    let choices = Array.from(document.getElementsByClassName("answer-text"));
    let question = document.getElementById("questions");
    let timer = document.getElementById("time");
    let correctPoint = 5;
    let secondsLeft = 50;

    // getNextQuestion function randomly pulls the questions out of the array.
        // If the array length of avaiable questions hits 0 then the quiz ends.
        // It also splices out the randomly pulled question so it isn't used again.
        // Used 'data' for answers to display.

    function getNextQuestion() {

        if (availableQuestions.length === 0) {
            question.innerText = ("GameOver");
            clear1.innerText = ("Final Score:");
            clear2.innerText = (score);
            clear3.innerText = ("Thanks for playing.");
            hsdisplay.style.display = "";
            return;
        }

        questionCounter++;

        let questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        choices.forEach(choice => {
            const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];
        });

        availableQuestions.splice(questionIndex, 1);

        acceptingAnswers = true;

    };

    getNextQuestion();

    // If question is answered wrong, return wrong, deduct time and move to next question.
        // Else return correct & move to next question.
        // Click event for answer buttons.

    choices.forEach(choice => {
        choice.addEventListener("click", function (event) {
            if (!acceptingAnswers) return;
            console.log(event.target)

            acceptingAnswers = false;
            const selectedChoice = event.target;
            const selectedAnswer = selectedChoice.dataset["number"];

            console.log(selectedAnswer, currentQuestion.correctAnswer)

            if (selectedAnswer == currentQuestion.correctAnswer) {
                keepScore(correctPoint);
            } else {
                secondsLeft = secondsLeft - 5;
            }

            console.log(score)
            getNextQuestion();
        });
    });

    // A running score is kept during the quiz, to be displayed and saved later.

    function keepScore(num) {

        score += num
        localStorage.setItem("stashScore", score)
    }

    // Timed Quiz function.
        // Quiz will end when the time runs out, and when the avialable questions run out it will stop the timer.

    function startTimer() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Time Remaining: " + secondsLeft;
            if (secondsLeft <= 1) {
                clearInterval(timerInterval);
                timer.textContent = ("Time's up!")
                question.innerText = ("GameOver");
                clear1.innerText = ("Final Score:");
                clear2.innerText = (score);
                clear3.innerText = ("Thanks for playing.");
                hsdisplay.style.display = "";
            }
            else if (availableQuestions.length === 0) {

                clearInterval(timerInterval)
            }

        }, 1000);
    }
    startTimer();
}

// Was able to use localStorage to save the score and then pull it out for use in the High score functions so they did not have to also be nested.
    // High score area has input for name, a save button that saves score and name, and also a get button that displays the high scores.

// Variables for display the high scores.

var savedScore = document.getElementById("highscore");
var getScore = document.getElementById("getscore");
var saveScore = document.getElementById("savescore");
var highScoreArray = [];
var tryAgain = document.getElementById("requiz");
let hsdisplay = document.querySelector(".highscore")

// Keyup function captures the name entered.

addEventListener("keyup", function () {
    myName = document.getElementById("name").value;
});

// The saveScore function runs off a click event attached to a button.
    // It will grab the score from local storage.
    // Creates an object to store the name and score on click.
    // Pushes the current object into the local storage object.
    // Also sorts by highest to lowest score and splices out more than 5 scores.
    // Strigifies the object and puts it in local Storage.
var isSavedPressed = false;
saveScore.addEventListener("click", function (event) {
    event.preventDefault
    if (!isSavedPressed){
        isSavedPressed = true;
        var stashScore = localStorage.getItem("stashScore")
        var scoreArray = {
        name: myName,
        score: stashScore
    }

    highScoreArray.push(scoreArray)
    highScoreArray.sort(function (a, b) {
        return b.score - a.score
    });

    highScoreArray.splice(5)

    localStorage.setItem("highScore", JSON.stringify(highScoreArray));
    
    }else {
        return;
    }
    

});

// getScore function will pull the highScoreArray out and parse it.
    // A forloop is used to display each of the high scores.

getScore.addEventListener("click", function () {
    savedScore.innerText = "";
    var highScore = JSON.parse(localStorage.getItem("highScore"));

    for (i = 0; i < highScore.length; i++) {
        var scoreTxt = document.createElement("p");
        scoreTxt.innerHTML = highScore[i].name + " " + highScore[i].score;
        savedScore.appendChild(scoreTxt)

    };
});

// Created a try again button that will call the updateDisplay function which restarts the quiz on click event.

tryAgain.addEventListener("click", function (event) {
    event.preventDefault();
    hsdisplay.style.display = "none";
    updateDisplay();
});
