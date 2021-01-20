// basic math operator functions
let display = "";

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
  return a / b;
};

const operate = (operator, num1, num2) => {
  return operator(num1, num2);
};

const buttons = document.querySelectorAll(".numbers");
const buttonsArray = Array.from(buttons);
const displayEl = document.querySelector(".display");

buttonsArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    displayEl.textContent = e.target.innerText;
  });
});

//when a user clicks on a number button
//attach an event listener on all the buttons
//put number on the display
