const add = function (a, b) {
  return parseInt(a) + parseInt(b);
};
const divide = function (a, b) {
  return a / b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
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
let firstNumber = "";
let operator;
let secondNumber = "";

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
        operator = "";
        firstNumber = "";
        secondNumber = "";
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
        if (firstNumber != "") {
          secondNumber = number;
        } else {
          firstNumber = number;
        }
        number = "";
        firstNumber = operate(firstNumber, operator, secondNumber);
        screen.textContent = firstNumber;
        secondNumber = "";
        operator = this.textContent;

        break;
      case "multiply":
        if (firstNumber != "") {
          secondNumber = number;
        } else {
          firstNumber = number;
        }
        number = "";
        firstNumber = operate(firstNumber, operator, secondNumber);
        screen.textContent = firstNumber;
        secondNumber = "";
        operator = this.textContent;
        break;
      case "add":
        if (firstNumber != "") {
          secondNumber = number;
        } else {
          firstNumber = number;
        }
        number = "";
        firstNumber = operate(firstNumber, operator, secondNumber);
        screen.textContent = firstNumber;
        secondNumber = "";
        operator = this.textContent;
        break;
      case "subtract":
        if (firstNumber != "") {
          secondNumber = number;
        } else {
          firstNumber = number;
        }
        number = "";
        if (operator != "") {
          firstNumber = operate(firstNumber, operator, secondNumber);
        } else {
          operator = this.textContent;
        }
        screen.textContent = firstNumber;
        secondNumber = "";
        operator = this.textContent;
        break;
      case "equals":
        if (firstNumber != "") {
          secondNumber = number;
        } else {
          firstNumber = number;
        }
        number = "";
        firstNumber = operate(firstNumber, operator, secondNumber);
        screen.textContent = firstNumber;
        secondNumber = "";
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

function operate(a, operator, b) {
  if (a != "" && b != "" && operator === "÷") {
    return divide(a, b);
  } else if (operator === "×") {
    return multiply(a, b);
  } else if (operator === "+") {
    return add(a, b);
  } else if (operator === "−") {
    return subtract(a, b);
  } else {
    return firstNumber;
  }
}
