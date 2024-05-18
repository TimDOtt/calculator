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
  button.addEventListener("mousedown", function () {
    let type = isNumber(this.textContent);
    let id = this.getAttribute("id");
    if (screen.textContent === "You forget yourself") {
      clearAll();
    }
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
        clearAll();
        break;
      case "delete":
        backspace();
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
        decimal();
        break;
      case "equals":
        equalize();
        break;

      default:
        break;
    }
  });
});
function getNumber(e) {
  if (screen.textContent === "You forget yourself") {
    clearAll();
  }
  key = document.getElementById(e.key);
  if (number.length < 17) {
    number += key.textContent;
    screen.textContent = number;
  } else {
    screen.innerText = number;
  }
}
function checkCalcKey() {
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "9":
      case "8":
      case "7":
      case "6":
      case "5":
      case "4":
      case "3":
      case "2":
      case "1":
      case "0":
        getNumber(e);
        break;
      case ".":
        key = document.getElementById("decimal");
        decimal();
        break;
      case "Enter":
        equalize();
        break;
      case "+":
        key = document.getElementById("add");
        manipulateNumber(number);
        operator = key.textContent;
        break;
      case "-":
        key = document.getElementById("subtract");
        manipulateNumber(number);
        operator = key.textContent;
        break;
      case "*":
        key = document.getElementById("multiply");
        manipulateNumber(number);
        operator = key.textContent;
        break;
      case "/":
        key = document.getElementById("divide");
        manipulateNumber(number);
        operator = key.textContent;
        break;
      case "Backspace":
        backspace();
        break;
      case "Escape":
        clearAll();
    }
  });
}
function clearAll() {
  number = "";
  operator = "";
  firstNumber = "";
  secondNumber = "";
  screen.textContent = "0";
}
function backspace() {
  number = number.substring(0, number.length - 1);
  screen.textContent = number;
  if (number.length === 0) {
    screen.textContent = "0";
    firstNumber = "";
    secondNumber = "";
  }
}
function equalize() {
  if (firstNumber != "" && number != "") {
    secondNumber = number;
  } else if (number != "") {
    firstNumber = number;
  }
  number = "";
  firstNumber = operate(firstNumber, operator, secondNumber);
  screen.textContent = firstNumber;
}
function decimal() {
  if (number.includes(".") || number.length === 17) {
    number = number;
  } else {
    number += key.textContent;
  }
  screen.textContent = number;
}
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
function dividedByZero() {
  if (screen.textContent === "You forget yourself") {
    clearAll();
  }
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

dividedByZero();
checkCalcKey();
