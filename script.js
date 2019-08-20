function modDisplay(key) {
  let display = document.getElementById("display");
  if (key == 0 && display.innerHTML === '0') return;
  else if (display.innerHTML == 0 && key == '.') display.innerHTML = '0.'
  else if (key == 0 && display.innerHTML.includes('.')) display.innerHTML = display.innerHTML + key;
  else if (key == '.' && display.innerHTML.includes(key)) return;
  else if (key > 0 && display.innerHTML === '0') display.innerHTML = key;
  else display.innerHTML = display.innerHTML + key;
}

function clearDisplay() {
  document.getElementById("display").innerHTML = 0;
}

function operate(num1, num2, operator) {
  if (operator == '+') add(num1,num2);
  else if (operator == '-') subtract(num1,num2);
  else if (operator == '*') multiply(num1,num2);
  else divide(num1,num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
