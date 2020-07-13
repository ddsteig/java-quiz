// Run quiz function
function startGame() {


    var clear1 = document.querySelector("#answer1");
    var clear2 = document.querySelector("#answer2");
    var clear3 = document.querySelector("#answer3");

    let trivia = [
        {
            question: "What does the fox say?",
            choice1: "Awoo",
            choice2: "Bow wow",
            choice3: "Meow",
            correctAnswer: 1
        },
        {
            question: "What does the owl say?",
            choice1: "Woof",
            choice2: "Hoot hoot",
            choice3: "Rawr",
            correctAnswer: 2
        },
        {
            question: "What does the fish say?",
            choice1: "Kaw kaw",
            choice2: "Grrr",
            choice3: "Gulp",
            correctAnswer: 3
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



    function getNextQuestion() {

        if (availableQuestions.length === 0) {
            question.innerText = ("GameOver");
            clear1.innerText = ("")
            clear2.innerText = ("")
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
            }else {
                secondsLeft = secondsLeft - 5;
            }

            console.log(score)
            getNextQuestion();
        });
    });

    function keepScore(num) {
        score += num;
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

            if (selectedAnswer == false){
                secondsLeft = secondsLeft - 5;
            }return secondsLeft;

        }, 1000);
    }
    startTimer();


}


//If timer is <=0 or questions left < 1 then end.

// Score... stylized box with input
// Input for name + display score... prevent default possibly used here
//High score display