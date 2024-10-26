let currentInput = "";
let operator = "";
let previousInput = "";

function updateDisplay(value) {
  const display = document.getElementById("display");
  display.textContent = value;
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  previousInput = "";
  updateDisplay("0");
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || "0");
}

function appendNumber(number) {
  if (currentInput === "0") currentInput = "";
  currentInput += number.toString();
  updateDisplay(currentInput);
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay(currentInput);
  }
}

function setOperation(op) {
  if (currentInput === "") return;
  if (previousInput !== "") computeResult();
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculatePercentage() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay(currentInput);
}

function calculateSquareRoot() {
  currentInput = Math.sqrt(parseFloat(currentInput)).toString();
  updateDisplay(currentInput);
}

function computeResult() {
  if (operator === "" || currentInput === "") return;
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = curr !== 0 ? prev / curr : "Error";
      break;
    default:
      return;
  }
  currentInput = result.toString();
  operator = "";
  previousInput = "";
  updateDisplay(currentInput);
}
