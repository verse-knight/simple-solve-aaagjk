let display = document.getElementById('display');

function clearDisplay() {
  display.textContent = '0';
}

function backspace() {
  display.textContent = display.textContent.slice(0, -1) || '0';
}

function appendNumber(number) {
  if (display.textContent === '0') {
    display.textContent = number;
  } else {
    display.textContent += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.textContent.slice(-1);
  if (!['+', '-', '*', '/'].includes(lastChar)) {
    display.textContent += operator;
  }
}

function calculateResult() {
  try {
    display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/')) || '0';
  } catch {
    display.textContent = 'Error';
  }
}