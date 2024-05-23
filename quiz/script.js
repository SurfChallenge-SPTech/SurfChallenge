const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex ++}/${questions.length}`;
    const item = questions{currentIndex};
    answers.innerHTML = ""
    question.innerHTML = item.question;
}

loadQuestion();