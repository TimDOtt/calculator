const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((value, a) => value + a, 0);
};

const multiply = function (arr) {
  return arr.reduce((value, a) => value * a);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a < 0) {
    return -1;
  } else if (a === 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
};

const btn = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

let number = "";
let firstNumber;
let operator;
let secondNumber;

btn.forEach((button) => {
  button.addEventListener("click", function () {
    let type = isNumber(this.textContent);
    let id = this.getAttribute("id");
    if (type === true) {
      number += this.textContent;
      screen.textContent = number;
    }

    switch (id) {
      case "clear":
        number = "";
        screen.textContent = 0;
        break;
      case "delete":
        number = number.substring(0, number.length - 1);
        screen.textContent = number;
        if (number.length === 0) {
          screen.textContent = "0";
        }
        break;
      case "divide":
        firstNumber = number;
        operator = this.textContent;
        break;
      case "multiply":
        firstNumber = number;
        operator = this.textContent;
        break;
      case "add":
        firstNumber = number;
        operator = this.textContent;
        break;
      case "subtract":
        firstNumber = number;
        operator = this.textContent;
        break;
      case "equals":
        firstNumber = number;
        operator = "";
        break;

      default:
        break;
    }
  });
});

function isNumber(value) {
  if (parseInt(value).toString() === value) {
    return true;
  }
  return false;
}

function operate(a, operator, b) {}
