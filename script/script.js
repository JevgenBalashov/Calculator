"use strict"

var buttons = document.querySelectorAll('.button');

var display = document.querySelector('input[type="text"]');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var value = button.value;
    handleButton(value);
  });
});

function handleButton(value) {
  if (value === '=') {
    calculate();
  } else if (value === 'C') {
    display.value = '';
  } else {
    display.value += value;
  }
}

function calculate() {
  try {
    var result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
