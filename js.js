// script.js

const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: "Paris"
    },
    {
        question: "Which language is used for web development?",
        choices: ["Python", "Java", "C++", "JavaScript"],
        correct: "JavaScript"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Jupiter"
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

const questionElement = document.getElementById('question');
const choicesElements = document.querySelectorAll('.choice');
const timerElement = document.getElementById('time');
const quizElement = document.getElementById('quiz');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    choicesElements.forEach((choice, index) => {
        choice.innerText = currentQuestion.choices[index];
    });
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function selectAnswer(event) {
    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.innerText;
    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    quizElement.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.innerText = score;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    timeLeft = 30;
    quizElement.classList.remove('hidden');
    resultElement.classList.add('hidden');
    loadQuestion();
    startTimer();
}

// Initialize quiz
loadQuestion();
startTimer();
