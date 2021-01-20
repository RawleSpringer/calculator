// basic math operator functions
let display = "";
let userInput1 = "";
let userInput2 = "";
let userOperatorSelection = "";
let operatorState = false;
const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");
const displayEl = document.querySelector(".display");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b == 0) {
    prompt("You cannot de");
  }
  return a / b;
};

const operate = (operator, num1, num2) => {
  return operator(num1, num2);
};

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //initial render for first digit input
    if (displayEl.innerText === "0") {
      display = e.target.innerText;
      displayEl.textContent = display;
    } else if (operatorState) {
      //when user clicks on an operator now focused on second input
      if (userInput2) {
        display += e.target.innerText;
        displayEl.textContent = display;
        userInput2 = parseInt(displayEl.textContent);
      } else {
        display = "";
        display = e.target.innerText;
        if (userOperatorSelection == "÷" && display == "0") {
          alert("You cannot divide by 0");
          userOperatorSelection = "";
          return;
        }
        displayEl.textContent = display;
        userInput2 = parseInt(displayEl.textContent);
      }
    } else {
      //continuation of the first user input
      display += e.target.innerText;
      displayEl.textContent = display;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!display) {
      return;
    }

    if (!userInput1) {
      userInput1 = parseInt(displayEl.textContent);
      operatorState = true;
    }

    userOperatorSelection = e.target.innerText;
  });
});

equalButton.addEventListener("click", () => {
  if (!userInput1 || !userInput2) {
    return;
  }

  if (userOperatorSelection === "x") {
    const result = operate(multiply, userInput1, userInput2);
    display = result.toString();
    displayEl.textContent = display;
    userInput1 = "";
    userInput2 = "";
  } else if (userOperatorSelection === "+") {
    const result = operate(add, userInput1, userInput2);
    display = result.toString();
    displayEl.textContent = display;
    userInput1 = "";
    userInput2 = "";
  } else if (userOperatorSelection === "-") {
    const result = operate(subtract, userInput1, userInput2);
    display = result.toString();
    displayEl.textContent = display;
    userInput1 = "";
    userInput2 = "";
  } else {
    const result = operate(divide, userInput1, userInput2);

    const stringifyResult = result.toString();

    if (stringifyResult.includes(".")) {
      const decimalNumbers = stringifyResult.split(".");

      if (decimalNumbers[1].length > 13) {
        display = result.toFixed(13);
        displayEl.textContent = display;
        userInput1 = "";
        userInput2 = "";
      } else {
        display = stringifyResult;
        displayEl.textContent = display;
        userInput1 = "";
        userInput2 = "";
      }
    } else {
      display = stringifyResult;
      displayEl.textContent = display;
      userInput1 = "";
      userInput2 = "";
    }
  }
});

clearButton.addEventListener("click", () => {
  display = "";
  displayEl.textContent = "0";
  userInput1 = "";
  userInput2 = "";
  userOperatorSelection = "";
  operatorState = false;
});
