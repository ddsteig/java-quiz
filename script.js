// Run quiz function
function startGame() {
    event.preventDefault();

    var clear1 = document.querySelector("#answer1");
    var clear2 = document.querySelector("#answer2");
    var clear3 = document.querySelector("#answer3");

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



    let currentQuestion = {};
    let questionCounter = 0;
    let availableQuestions = [...trivia];
    let score = 0;
    let acceptingAnswers = false;
    let choices = Array.from(document.getElementsByClassName("answer-text"));
    let question = document.getElementById("questions");
    var timer = document.getElementById("time");
    let correctPoint = 5;

    let secondsLeft = 60;

    // Quiz Questions & Answers.... possible object / array
    // Decide how many questions

    getNextQuestion();

    // Timed Quiz... function
    // Timer counts down
    //  If timer is <=0 or questions left < 1 then end.


    function getNextQuestion() {

        if (availableQuestions.length === 0) {
            question.innerText = ("GameOver");
            clear1.innerText = ("Final Score:")
            clear2.innerText = (score)
            clear3.innerText = ("Thanks for playing.")
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


    // If question is answered wrong, return wrong, deduct time and move to next question
    // Else return correct & move to next question
    //Click event for answer buttons

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

    function keepScore(num) {
        score += num;
        localStorage.setItem("stashScore", score)
    }

    function startTimer() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Time Remaining: " + secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                timer.textContent = ("Time's up!")
                question.innerText = ("GameOver");
                clear1.innerText = ("")
                clear2.innerText = ("")
                clear3.innerText = ("Thanks for playing.")
            }
            else if (availableQuestions.length === 0) {

                clearInterval(timerInterval)
            }

        }, 1000);
    }
    startTimer();

    // Score... stylized box with input
    // Input for name + display score... prevent default possibly used here
    //High score display

}

var savedScore = document.getElementById("highscore");
var getScore = document.getElementById("getscore");
var saveScore = document.getElementById("savescore");

addEventListener("keyup", function () {

    myName = document.getElementById("name").value;
});

var highScoreArray = [];
saveScore.addEventListener("click", function (event) {
    event.preventDefault

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

});



getScore.addEventListener("click", function () {
    savedScore.innerText = "";
    var highScore = JSON.parse(localStorage.getItem("highScore"));
    console.log(highScore)

    for (i = 0; i < highScore.length; i++) {
        var scoreTxt = document.createElement("p");
        scoreTxt.innerHTML = highScore[i].name + " " + highScore[i].score;
        savedScore.appendChild(scoreTxt)

    };
});



var tryAgain = document.getElementById("requiz");

tryAgain.addEventListener("click", function () {
    event.preventDefault();
    updateDisplay();
})


