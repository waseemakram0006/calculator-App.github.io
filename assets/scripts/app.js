const defaultResult = 0;
let currentResult = defaultResult;

// GetUser Input
function getUserInput() {
  return parseInt(userInput.value);
}

// outPut Function
function creatAndWriteOutput(operator, resultBeforeCal, calcNumber) {
  const calDescription = `${resultBeforeCal} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDescription);
}

// Add function
function add() {
  const enterdNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = initialResult + enterdNumber;
  creatAndWriteOutput("+", initialResult, enterdNumber);
}

// Subtract function
function subtract() {
  const enterdNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = initialResult - enterdNumber;
  creatAndWriteOutput("-", initialResult, enterdNumber);
}
// // Multiply function
function multiply() {
  const enterdNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = initialResult * enterdNumber;
  creatAndWriteOutput("*", initialResult, enterdNumber);
}
// // divide function
function divide() {
  const enterdNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = initialResult / enterdNumber;
  creatAndWriteOutput("/", initialResult, enterdNumber);
}
// Buttons Clicks
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
