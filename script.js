const symbols = ["+", "-", "*", "/", "%"];
let memory = [];
let operator = [];
let screenMemory = '';
const getNumber = (num) => {
    let scrNo = document.querySelector('.calcans').value;
    if (num == '.') {
        let flag = screenMemory.includes('.');
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

}
const getSymbol = (symbol) => {
    let value = document.querySelector('.calcans').value;
    if (value) {
        let length = value.length;
        if (length!=1){
            let lastVal = value[length - 1];
        if (!(symbols.includes(lastVal))) {
            console.log(symbols+" "+lastVal);
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
}
const getClear = () => {
    memory = [];
    screenMemory = '';
    document.querySelector('.calcans').value = '';
}

const getPercent = () => {
    let perct = (screenMemory) / 100;
    console.log("Percentage=" + perct + "," + screenMemory);
    document.querySelector('.calcans').value = perct;
    screenMemory = perct;
}
const getResult = () => {
    let result = 0;
    memory.push(screenMemory);
    console.log("Inside Result" + screenMemory + " Memory=" + memory);
    for (let index = 0; index < memory.length; index++) {
        console.log(memory + "===" + symbols[0]);
        if ((operator === symbols[0])) {
            let add = Number(memory[index]);
            if (index == 0) {
                result = add;
            } else {
                result = result + add;
            }
            document.querySelector('.calcans').value = result;
            screenMemory = result;
            console.log("Addition=", result);
        } else if ((operator === symbols[1])) {
            let sub = Number(memory[index]);
            if (index == 0) {
                result = sub;
            } else {
                result = result - sub;
            }
            document.querySelector('.calcans').value = result;
            screenMemory = result;
            console.log("Subtraction=", result);
        } else if ((operator === symbols[2])) {
            let mul = Number(memory[index]);
            if (index == 0) {
                result = mul;
            } else {
                result = result * mul;
            }
            document.querySelector('.calcans').value = result;
            screenMemory = result;
            console.log("Multiplication=", result);
        } else if ((operator === symbols[3])) {
            let mul = Number(memory[index]);
            if (index == 0) {
                result = mul;
            } else {
                result = result / mul;
            }
            document.querySelector('.calcans').value = result;
            screenMemory = result;
            console.log("Division=", result);
        }
    }
    memory = [];

}