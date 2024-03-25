const questions = [
    {
        question: "Which of the following type of class allows only one object of it to be created?",
        answers: [
            { text: "Virtual class", correct: false },
            { text: "Abstract class", correct: false },
            { text: "Singleton class", correct: true },
            { text: "Friend class", correct: false }
        ]
    },
    {
        question: "Which of the following is not a type of constructor?",
        answers: [
            { text: "Copy constructor", correct: false },
            { text: "Friend constructor", correct: true },
            { text: "Default constructor", correct: false },
            { text: "Parameterized constructor", correct: false }
        ]
    },
    {
        question: "Which of the following statements is correct?",
        answers: [
            { text: "Base class pointer cannot point to derived class", correct: false },
            { text: "Derived class pointer cannot point to base class.", correct: true },
            { text: "Pointer to derived class cannot be created.", correct: false },
            { text: "Pointer to base class cannot be created", correct: false }
        ]
    },
    {
        question: "Which of the following is not the member of class?",
        answers: [
            { text: "Static function", correct: false },
            { text: "Friend function", correct: true },
            { text: "Const function", correct: false },
            { text: "Virtual function", correct: false }
        ]
    },
    {
        question: "Which of the following concepts means determining at runtime what method to invoke?",
        answers: [
            { text: "Data hiding", correct: false },
            { text: "Dynamic Typing", correct: false },
            { text: "Dynamic binding", correct: true },
            { text: "Dynamic loading", correct: false }
        ]
    },
    {
        question: "Which of the following term is used for a function defined inside a class?",
        answers: [
            { text: "Member Variable", correct: false },
            { text: "Member function", correct: true },
            { text: "Class function", correct: false },
            { text: "Classic function", correct: false }
        ]
    },
    {
        question: "How many instances of an abstract class can be created?",
        answers: [
            { text: "1", correct: false },
            { text: "5", correct: false },
            { text: "13", correct: false },
            { text: "0", correct: true }
        ]
    },
    {
        question: "Which of the following cannot be friend?",
        answers: [
            { text: "Function", correct: false },
            { text: "Class", correct: false },
            { text: "Object", correct: true },
            { text: "Operation", correct: false }
        ]
    },
    {
        question: "Which of the following concepts of OOPS means exposing only necessary information to client?",
        answers: [
            { text: "Encapsulation", correct: false },
            { text: "Abstraction", correct: false },
            { text: "Data hiding", correct: true },
            { text: "Data binding", correct: false }
        ]
    },
    {
        question: "Why reference is not same as a pointer?",
        answers: [
            { text: "A reference can never be null.", correct: false },
            { text: "A reference once established cannot be changed.", correct: false },
            { text: "Reference doesn't need an explicit dereferencing mechanism.", correct: false },
            { text: "All of the above.", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer_button");
const nextbtn = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function start() {
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextbtn.style.display = "none";
    while(answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(e) {
    const Selectedbtn = e.target;
    const isCorrect = Selectedbtn.dataset.correct === "true";
    if (isCorrect) {
        Selectedbtn.classList.add("correct");
        score++;
    } else {
        Selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextbtn.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}! `;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextbtn.addEventListener("click", () => {
    if(currentQuestionIndex <questions.length) {
        handleNextButton();
    } else {
        start();
    }
});

start();