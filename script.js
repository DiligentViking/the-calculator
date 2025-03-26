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
  let button = event.target.id;
  if ('0123456789dot'.includes(button) && phase !== 3) {
    // if (button == 'dot') console.log('dot');
    if (button == 'dot') display.textContent += (display.textContent.includes('.')) ? '' : '.';
    else display.textContent += button;
    display.textContent = +display.textContent;

  } else if ('+-*/'.includes(button) && phase !== 2) {
    phase = 2;
    operator = button;
    num1 = +display.textContent;
    display.textContent = '0';
    topDisplay.textContent = `${num1} ${operator} `;

  } else if ('+-*/'.includes(button) && phase == 2) {  // a shortcut
    num2 = +display.textContent;
    if (display.textContent !== '0') {
      num1 = operate(operator, num1, num2);}
    operator = button;
    display.textContent = '0';
    topDisplay.textContent = `${num1} ${operator} `;

  } else if (button == 'enter' && phase == 2) {
    phase = 3;
    num2 = +display.textContent;
    num1 = operate(operator, num1, num2);
    display.textContent = num1;
    topDisplay.textContent += num2;

  } else if (button == 'clear') {
    phase = 1;
    operator = '';
    num1 = '';
    num2 = '';
    display.textContent = '0';
    topDisplay.textContent = '';
  }
});
