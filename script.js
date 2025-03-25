function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function mulitply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return mulitply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}


let operator;
let num1;
let num2;

const calculator = document.querySelector('#calculator');
const display = document.querySelector('#display');
calculator.addEventListener('click', (event) => {
  const button = event.target.id;
  if ('0123456789'.includes(button)) {
    display.textContent += button;
  } else if ('+-*/'.includes(button)) {
    operator = button;
    num1 = +display.textContent;
    display.textContent = '';
  } else if (button == 'enter') {
    num2 = +display.textContent;
    display.textContent = operate(operator, num1, num2);
  } else if (button == 'clear') {
    operator = '';
    num1 = '';
    num2 = '';
    display.textContent = '';
  }
});

