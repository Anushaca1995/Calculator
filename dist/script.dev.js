"use strict";

var symbols = ["+", "-", "*", "/", "%"];
var memory = [];
var operator = [];
var screenMemory = '';

var getNumber = function getNumber(num) {
  var scrNo = document.querySelector('.calcans').value;

  if (num == '.') {
    var flag = screenMemory.includes('.');

    if (!flag) {
      document.querySelector('.calcans').value += num;
      screenMemory += '' + num;
      console.log('Value of screen memory:', screenMemory);
    }
  } else {
    document.querySelector('.calcans').value += num;
    screenMemory += '' + num;
    console.log('Value of screen memory:', screenMemory);
  }
};

var getSymbol = function getSymbol(symbol) {
  var value = document.querySelector('.calcans').value;

  if (value) {
    var length = value.length;

    if (length != 1) {
      var lastVal = value[length - 1];

      if (!symbols.includes(lastVal)) {
        console.log(symbols + " " + lastVal);
        document.querySelector('.calcans').value += symbol;
        memory.push(screenMemory);
        screenMemory = '';

        if (operator != symbol) {
          operator = symbol;
        }
      }
    } else {
      document.querySelector('.calcans').value += symbol;
      memory.push(screenMemory);
      screenMemory = '';

      if (operator != symbol) {
        operator = symbol;
      }
    }
  }

  console.log('screen memory now:', screenMemory);
  console.log("memory=", memory);
};

var getClear = function getClear() {
  memory = [];
  screenMemory = '';
  document.querySelector('.calcans').value = '';
};

var getPercent = function getPercent() {
  var perct = screenMemory / 100;
  console.log("Percentage=" + perct + "," + screenMemory);
  document.querySelector('.calcans').value = perct;
  screenMemory = perct;
};

var getResult = function getResult() {
  var result = 0;
  memory.push(screenMemory);
  console.log("Inside Result" + screenMemory + " Memory=" + memory);

  for (var index = 0; index < memory.length; index++) {
    console.log(memory + "===" + symbols[0]);

    if (operator === symbols[0]) {
      var add = Number(memory[index]);

      if (index == 0) {
        result = add;
      } else {
        result = result + add;
      }

      document.querySelector('.calcans').value = result;
      screenMemory = result;
      console.log("Addition=", result);
    } else if (operator === symbols[1]) {
      var sub = Number(memory[index]);

      if (index == 0) {
        result = sub;
      } else {
        result = result - sub;
      }

      document.querySelector('.calcans').value = result;
      screenMemory = result;
      console.log("Subtraction=", result);
    } else if (operator === symbols[2]) {
      var mul = Number(memory[index]);

      if (index == 0) {
        result = mul;
      } else {
        result = result * mul;
      }

      document.querySelector('.calcans').value = result;
      screenMemory = result;
      console.log("Multiplication=", result);
    } else if (operator === symbols[3]) {
      var _mul = Number(memory[index]);

      if (index == 0) {
        result = _mul;
      } else {
        result = result / _mul;
      }

      document.querySelector('.calcans').value = result;
      screenMemory = result;
      console.log("Division=", result);
    }
  }

  memory = [];
};