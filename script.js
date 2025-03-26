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
  if (num2 === 0) return "twould be inf-y";
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


let phase = 1;
let operator;
let num1;
let num2;

const calculator = document.querySelector('#calculator');
const display = document.querySelector('#display');
const topDisplay = document.querySelector('#top-display');

calculator.addEventListener('click', (event) => {
  const button = event.target.id;
  if ('0123456789'.includes(button) && phase !== 3) {
    display.textContent += button;
  } else if ('+-*/'.includes(button) && phase == 1) {
    phase = 2;
    operator = button;
    num1 = +display.textContent;
    display.textContent = '';
    topDisplay.textContent = `${num1} ${operator} `;
  } else if (button == 'enter' && phase == 2) {
    phase = 3;
    num2 = +display.textContent;
    display.textContent = operate(operator, num1, num2);
    topDisplay.textContent += num2;
  } else if (button == 'clear') {
    phase = 1;
    operator = '';
    num1 = '';
    num2 = '';
    display.textContent = '';
    topDisplay.textContent = '';
  }
});
