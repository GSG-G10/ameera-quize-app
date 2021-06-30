let startBtn = document.getElementById("start-btn");
let input = document.getElementById("name")
let welcomepage = document.getElementById("welcome-page");
let qestionpage = document.getElementById("qestion-page");
let qCounter = document.getElementById("countQ");
let quesationCount = 0;
let questionContainer = document.getElementById("question");
let fchoice = document.getElementById("fchoice");
let schoice = document.getElementById("schoice");
let thchoice = document.getElementById("thchoice");
let fourchoice = document.getElementById("fourchoice");
let nextBtn = document.getElementById("next-btn");
let questionIndex = 0;
let score = 0;


// click next go to next question 
nextBtn.onclick = function() {
    if (quesationCount <= 10) {
        addQuestion();
        check();
    } else {
        qestionpage.classList.add("hide");
    }
}

// add question 
function addQuestion() {
    quesationCount++;
    qCounter.textContent = quesationCount + " / " + "10";
    questionContainer.textContent = questions[questionIndex]["question"];
    fchoice.textContent = questions[questionIndex]["choice1"];
    schoice.textContent = questions[questionIndex]["choice2"];
    thchoice.textContent = questions[questionIndex]["choice3"];
    fourchoice.textContent = questions[questionIndex]["choice4"];
    questionIndex++;

}
// check the answer
function check() {
    let rightAnswer = questions[questionIndex]["answer"];
    console.log(rightAnswer);
    let allChoice = document.getElementsByName("choices");
    console.log(allChoice[0]);
    let choisenAnswer;
    for (let i = 0; i < 4; i++) {
        if (allChoice[i].checked === true) {
            choisenAnswer = allChoice[i].dataset.answer;
        }
    }
    console.log(choisenAnswer);
}



let questions = [{
        question: "How many planets are in our solar system?",
        choice1: "8",
        choice2: "2",
        choice3: "7",
        choice4: "5",
        answer: "8",
    },
    {
        question: "How big is the Sun?",
        choice1: "1 million kilometers",
        choice2: "4 million kilometers",
        choice3: "1.4 million kilometers",
        choice4: "1.9 million kilometers",
        answer: "1.4 million kilometers",
    },
    {
        question: "What are the smallest in our solar system?",
        choice1: " Jupiter.",
        choice2: "Venus",
        choice3: "Mars",
        choice4: "MERCURY",
        answer: "MERCURY",
    },
    {
        question: "What are the largest planets in our solar system?",
        choice1: " Jupiter.",
        choice2: "Venus",
        choice3: "Mars",
        choice4: "MERCURY",
        answer: " Jupiter.",
    },
    {
        question: " Which planet is the fastest in the solar system",
        choice1: "Jupiter",
        choice2: " sun ",
        choice3: "earth",
        choice4: "Mercury",
        answer: "Mercury",
    },
    {
        question: "jcWhich planet has the most visible rings?",
        choice1: "Saturn",
        choice2: "sun",
        choice3: "earth",
        choice4: "mercury",
        answer: "Saturn",
    },
    {
        question: " What is the name of our galaxy?",
        choice1: "satrun",
        choice2: "sun",
        choice3: "earth",
        choice4: "Milky Way",
        answer: "Milky Way",
    },
    {
        question: "What planet is known as the red planet?",
        choice1: "sun",
        choice2: "mars",
        choice3: "earth",
        choice4: "juptier",
        answer: "mars",
    },
    {
        question: "Which planet is named after the Roman of beauty?",
        choice1: "Venus",
        choice2: "mars",
        choice3: "sun",
        choice4: "earth",
        answer: "Venus",
    },
    {
        question: "Which is the second biggest planet ?",
        choice1: "sun",
        choice2: "earth",
        choice3: "Saturn",
        choice4: "mars",
        answer: "Saturn",
    },

];
// enable the start btn
input.onkeyup = function() {
    if (input.value.length > 0) {
        startBtn.disabled = false;
    } else {
        startBtn.disabled = true;
    }

}

// click on start btn go to question page
startBtn.onclick = function() {
    welcomepage.classList.add("hide");
    qestionpage.classList.remove("hide");
    addQuestion();

}