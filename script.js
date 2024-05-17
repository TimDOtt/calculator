const add = function (a, b) {
  return parseFloat(a) + parseFloat(b);
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
      if (number.length < 17) {
        number += this.textContent;
        screen.textContent = number;
      } else {
        screen.innerText = number;
      }
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
        manipulateNumber(number);
        operator = this.textContent;

        break;
      case "multiply":
        manipulateNumber(number);
        operator = this.textContent;
        break;
      case "add":
        manipulateNumber(number);
        operator = this.textContent;
        break;
      case "subtract":
        manipulateNumber(number);
        operator = this.textContent;
        break;

      case "decimal":
        if (number.includes(".")) {
          number = number;
        } else {
          number += this.textContent;
        }
        screen.textContent = number;
        break;
      case "equals":
        if (firstNumber != "" && number != "") {
          secondNumber = number;
        } else if (number != "") {
          firstNumber = number;
        }
        number = "";
        firstNumber = operate(firstNumber, operator, secondNumber);
        screen.textContent = firstNumber;
        break;

      default:
        break;
    }
  });
});

function manipulateNumber(a) {
  if (firstNumber != "") {
    secondNumber = number;
  } else {
    firstNumber = number;
  }
  number = "";
  firstNumber = operate(firstNumber, operator, secondNumber);
  screen.textContent = firstNumber;
  secondNumber = "";
}
function isNumber(value) {
  if (parseInt(value).toString() === value) {
    return true;
  }
  return false;
}

function operate(a, operator, b) {
  if (a != "" && b != "") {
    if (operator === "÷") {
      if (b == 0) {
        return "You forget yourself";
      } else {
        return divide(a, b)
          .toFixed(2)
          .replace(/[.,]00$/, "");
      }
    } else if (operator === "×") {
      return multiply(a, b)
        .toFixed(2)
        .replace(/[.,]00$/, "");
    } else if (operator === "+") {
      return add(a, b)
        .toFixed(2)
        .replace(/[.,]00$/, "");
    } else if (operator === "−") {
      return subtract(a, b)
        .toFixed(2)
        .replace(/[.,]00$/, "");
    }
  } else {
    return firstNumber;
  }
}
