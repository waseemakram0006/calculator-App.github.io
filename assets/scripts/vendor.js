// Toggle Button Code

const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
};

// CALCULATOR CODE

const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");


const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
